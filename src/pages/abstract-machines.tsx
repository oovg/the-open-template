import React, { useEffect, useMemo, useState } from 'react'
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react'
import { DownloadIcon, AddIcon, CloseIcon } from '@chakra-ui/icons'
import { PageMetadata } from '@/components'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Back } from '@/components/Back'

type Item = { name: string; definition: string; group?: string }
type ClassKey = 'concepts' | 'tools' | 'aesthetics'
type Library = Record<ClassKey, Item[]>

const EMPTY_LIBRARY: Library = { concepts: [], tools: [], aesthetics: [] }

const CLASS_LABELS: Record<ClassKey, string> = {
  concepts: 'Concepts',
  tools: 'Tools',
  aesthetics: 'Aesthetics',
}

const CLASS_BLURBS: Record<ClassKey, string> = {
  concepts:
    'Abstract machines — frameworks that diagram a genre of philosophical or technological interest.',
  tools:
    'Mechanisms — web3 and dWeb primitives, governance forms, organizational strategies, and material technologies that can be deployed.',
  aesthetics:
    'Atmospheres — full sensoria of ontological orientation.',
}

function parseLibrary(md: string): Library {
  const lib: Library = { concepts: [], tools: [], aesthetics: [] }
  const sectionRegex = /^#\s+\[(Concepts|Tools|Aesthetics)\]\s*$/gim
  const matches: { key: ClassKey; headerStart: number; bodyStart: number }[] = []
  let m: RegExpExecArray | null
  while ((m = sectionRegex.exec(md)) !== null) {
    matches.push({
      key: m[1].toLowerCase() as ClassKey,
      headerStart: m.index,
      bodyStart: m.index + m[0].length,
    })
  }

  for (let i = 0; i < matches.length; i++) {
    const start = matches[i].bodyStart
    const end = i + 1 < matches.length ? matches[i + 1].headerStart : md.length
    const body = md.slice(start, end)
    const h = { key: matches[i].key }
    // Track headings: ## (group) and ### (item)
    const headingRegex = /^(##|###)\s+(.+?)\s*$/gm
    type Tok = { level: 2 | 3; text: string; index: number; endHeader: number }
    const toks: Tok[] = []
    let hm: RegExpExecArray | null
    while ((hm = headingRegex.exec(body)) !== null) {
      toks.push({
        level: hm[1].length === 2 ? 2 : 3,
        text: hm[2].trim(),
        index: hm.index,
        endHeader: hm.index + hm[0].length,
      })
    }
    let currentGroup: string | undefined
    for (let j = 0; j < toks.length; j++) {
      const t = toks[j]
      if (t.level === 2) {
        currentGroup = t.text
        continue
      }
      const startDef = t.endHeader
      const endDef = j + 1 < toks.length ? toks[j + 1].index : body.length
      let def = body.slice(startDef, endDef).trim()
      def = def.replace(/\n-{3,}\s*$/m, '').trim()
      def = def.split(/^---\s*$/m)[0].trim()
      lib[h.key].push({ name: t.text, definition: def, group: currentGroup })
    }
  }
  return lib
}

function buildMarkdown(stack: { key: ClassKey; item: Item }[]): string {
  const grouped: Record<ClassKey, Item[]> = { concepts: [], tools: [], aesthetics: [] }
  for (const s of stack) grouped[s.key].push(s.item)

  const listNames = (items: Item[]) =>
    items.length === 0
      ? '_(none selected)_'
      : items.map((i) => `**${i.name}**`).join(', ')

  const dumpItems = (items: Item[]) =>
    items.length === 0
      ? '_(none selected)_\n'
      : items
          .map((i) => `### ${i.name}\n\n${i.definition}\n`)
          .join('\n')

  const date = new Date().toISOString().slice(0, 10)

  return `---
title: Abstract Machine — Prompt
generated: ${date}
source: Concepts, Tools, Aesthetics — The Open Machine
---

# Prompt: Construct an Abstract Machine

You are being given a dispositif — a stack of named materials drawn from **The Open Machine corpus**. Your task is to help me think and work *through* this dispositif as an **abstract machine**: a diagrammatic function that organizes a field, names a genre of operation, and licenses a set of next moves.

The materials below are modular. They are to be **named and carried over without paraphrase or smoothing**. Do not collapse the items into a smoother synthesis. The work is in the choice and the configuration; the items themselves do the conceptual work.

---

## My Stack

- **[Concepts]** — ${listNames(grouped.concepts)}
- **[Tools]** — ${listNames(grouped.tools)}
- **[Aesthetics]** — ${listNames(grouped.aesthetics)}

---

## How to read this stack

- The **[Concepts]** I have selected diagram the genre under which the machine operates and supply its vocabulary of next moves.
- The **[Tools]** I have selected are mechanisms — things that can be deployed. Together they form the operative substrate of the dispositif.
- The **[Aesthetics]** I have selected set the atmosphere and ontological orientation under which the work proceeds. They are not decoration; they are the sensorium in which the machine becomes legible to its participants.

The full definitions are included below so you have the source vocabulary verbatim.

---

## What I want you to do

1. **Diagram the machine.** Describe, in plain prose, how the selected Concepts, Tools, and Aesthetics interlock as a single working dispositif. Name each item explicitly when you invoke it.
2. **Generate next moves.** Propose 3–7 concrete next moves the machine licenses — projects, experiments, essays, gatherings, designs, interventions — each tied to specific items in the stack.
3. **Surface tensions.** Identify any productive frictions or contradictions between items, and explain what they make available rather than resolving them away.
4. **Stay in register.** Match the tone and ontological commitments of the selected aesthetics. Do not flatten into generic strategic language.

When in doubt, return to the definitions below and reason from them directly.

---

## Definitions

### [Concepts]

${dumpItems(grouped.concepts)}
### [Tools]

${dumpItems(grouped.tools)}
### [Aesthetics]

${dumpItems(grouped.aesthetics)}
---

_Generated from The Open Machine's Concepts, Tools, Aesthetics corpus._
`
}

function download(filename: string, content: string) {
  const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

export default function AbstractMachines() {
  const [library, setLibrary] = useState<Library>(EMPTY_LIBRARY)
  const [loadError, setLoadError] = useState<string | null>(null)
  const [stack, setStack] = useState<{ key: ClassKey; item: Item }[]>([])
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})
  const [previewOpen, setPreviewOpen] = useState(false)

  useEffect(() => {
    fetch('/data/concepts-tools-aesthetics.md')
      .then((r) => {
        if (!r.ok) throw new Error(`Failed to load library (${r.status})`)
        return r.text()
      })
      .then((txt) => setLibrary(parseLibrary(txt)))
      .catch((e) => setLoadError(String(e)))
  }, [])

  const inStack = useMemo(() => {
    const s = new Set<string>()
    for (const x of stack) s.add(`${x.key}::${x.item.name}`)
    return s
  }, [stack])

  const toggle = (key: ClassKey, item: Item) => {
    const id = `${key}::${item.name}`
    if (inStack.has(id)) {
      setStack(stack.filter((s) => `${s.key}::${s.item.name}` !== id))
    } else {
      setStack([...stack, { key, item }])
    }
  }

  const remove = (key: ClassKey, name: string) => {
    setStack(stack.filter((s) => !(s.key === key && s.item.name === name)))
  }

  const clear = () => setStack([])

  const generated = useMemo(() => buildMarkdown(stack), [stack])

  const handlePrint = () => {
    const date = new Date().toISOString().slice(0, 10)
    download(`abstract-machine-${date}.md`, generated)
  }

  const ClassColumn = ({ k }: { k: ClassKey }) => {
    const groups: { name: string | undefined; items: Item[] }[] = []
    for (const it of library[k]) {
      const last = groups[groups.length - 1]
      if (last && last.name === it.group) last.items.push(it)
      else groups.push({ name: it.group, items: [it] })
    }
    return (
      <Flex direction="column" w={['100%', null, '33.33%']} p={[3, null, 5]}>
        <Heading color="primary" fontWeight="100" fontSize={['xl', null, '2xl']} mb={2}>
          [{CLASS_LABELS[k]}]
        </Heading>
        <Text fontSize="sm" mb={5} opacity={0.8}>
          {CLASS_BLURBS[k]}
        </Text>
        <Flex direction="column" gap={5}>
          {groups.map((g, gi) => (
            <Flex key={gi} direction="column" gap={2}>
              {g.name && (
                <Text
                  fontSize="xs"
                  textTransform="uppercase"
                  letterSpacing="0.15em"
                  opacity={0.7}
                  mb={1}
                  fontFamily="heading"
                >
                  {g.name}
                </Text>
              )}
              {g.items.map((item) => {
                const id = `${k}::${item.name}`
                const selected = inStack.has(id)
                const isExpanded = !!expanded[id]
                return (
                  <Box
                    key={item.name}
                    border="1px solid"
                    borderColor={selected ? 'primary' : 'midtone'}
                    p={3}
                    bg={selected ? 'primary' : 'transparent'}
                    color={selected ? 'bg' : 'primary'}
                    transition="background 0.15s ease"
                  >
                    <Flex justify="space-between" align="start" gap={3}>
                      <Text
                        fontSize="md"
                        fontFamily="heading"
                        cursor="pointer"
                        onClick={() =>
                          setExpanded({ ...expanded, [id]: !isExpanded })
                        }
                        flex="1"
                      >
                        {item.name}
                      </Text>
                      <Button
                        size="xs"
                        variant="ghost"
                        color={selected ? 'bg' : 'primary'}
                        onClick={() => toggle(k, item)}
                        aria-label={selected ? 'Remove from stack' : 'Add to stack'}
                        _hover={{ bg: selected ? 'bg' : 'primary', color: selected ? 'primary' : 'bg' }}
                        borderRadius={0}
                        border="1px solid"
                        borderColor={selected ? 'bg' : 'primary'}
                        px={2}
                      >
                        {selected ? <CloseIcon boxSize={2.5} /> : <AddIcon boxSize={2.5} />}
                      </Button>
                    </Flex>
                    {isExpanded && (
                      <Text fontSize="sm" mt={3} whiteSpace="pre-wrap" lineHeight="1.5">
                        {item.definition}
                      </Text>
                    )}
                  </Box>
                )
              })}
            </Flex>
          ))}
          {library[k].length === 0 && !loadError && (
            <Text fontSize="sm" opacity={0.6}>
              Loading…
            </Text>
          )}
        </Flex>
      </Flex>
    )
  }

  return (
    <>
      <PageMetadata
        title="OM — Abstract Machines"
        description="A prompt engine for constructing abstract machines from the Open Machine corpus of Concepts, Tools, and Aesthetics."
        image="https://theopenmachine.net/assets/om_substrates2.png"
      />
      <main>
        <Header />
        <Back />

        <Flex direction="column" w="100%" p={[5, null, 10]}>
          <Flex direction={['column', null, 'row']} justify="space-between" align="start" gap={5} mb={8}>
            <Flex direction="column" w={['100%', null, '60%']}>
              <Heading color="primary" fontWeight="100" fontSize={['2xl', null, '4xl']} mb={4}>
                Abstract Machines
              </Heading>
              <Text fontSize={['md', null, 'lg']} mb={3}>
                A prompt engine for building <i>dispositifs</i> — combinations of one or more items across three classes drawn from the <b>Open Machine corpus</b>: <b>Concepts</b>, <b>Tools</b>, and <b>Aesthetics</b>.
              </Text>
              <Text fontSize="sm" opacity={0.85}>
                Stack any combination across the three columns. When you press <b>Print</b>, a markdown file is generated locally — a prompt addressed to your own LLM, with named slots filled deterministically by your selected terms and their full definitions. No model is invoked here; the file is yours to take to the agent of your choice.
              </Text>
            </Flex>
            <Flex direction="column" w={['100%', null, '35%']} border="1px solid" borderColor="primary" p={4}>
              <Heading fontSize="md" mb={3}>Your Stack ({stack.length})</Heading>
              {stack.length === 0 ? (
                <Text fontSize="sm" opacity={0.7}>
                  Empty. Add items from any column to begin.
                </Text>
              ) : (
                <Flex direction="column" gap={1.5} mb={3}>
                  {(['concepts', 'tools', 'aesthetics'] as ClassKey[]).map((k) => {
                    const items = stack.filter((s) => s.key === k)
                    if (items.length === 0) return null
                    return (
                      <Box key={k}>
                        <Text fontSize="xs" opacity={0.6} textTransform="uppercase" letterSpacing="0.1em">
                          [{CLASS_LABELS[k]}]
                        </Text>
                        {items.map((s) => (
                          <Flex key={s.item.name} justify="space-between" align="center" gap={2}>
                            <Text fontSize="sm">{s.item.name}</Text>
                            <Button
                              size="xs"
                              variant="ghost"
                              onClick={() => remove(k, s.item.name)}
                              aria-label="Remove"
                              _hover={{ bg: 'transparent', opacity: 0.6 }}
                            >
                              <CloseIcon boxSize={2} />
                            </Button>
                          </Flex>
                        ))}
                      </Box>
                    )
                  })}
                </Flex>
              )}
              <Flex direction="row" gap={2} mt={2} flexWrap="wrap">
                <Button
                  onClick={handlePrint}
                  isDisabled={stack.length === 0}
                  bg="primary"
                  color="bg"
                  borderRadius={0}
                  fontWeight="normal"
                  _hover={{ opacity: 0.85, bg: 'primary' }}
                  size="sm"
                >
                  Print <DownloadIcon ml={2} boxSize={3} />
                </Button>
                <Button
                  onClick={() => setPreviewOpen(!previewOpen)}
                  isDisabled={stack.length === 0}
                  variant="outline"
                  borderColor="primary"
                  borderRadius={0}
                  fontWeight="normal"
                  _hover={{ bg: 'primary', color: 'bg' }}
                  size="sm"
                >
                  {previewOpen ? 'Hide preview' : 'Preview'}
                </Button>
                {stack.length > 0 && (
                  <Button
                    onClick={clear}
                    variant="ghost"
                    borderRadius={0}
                    fontWeight="normal"
                    size="sm"
                    _hover={{ opacity: 0.6, bg: 'transparent' }}
                  >
                    Clear
                  </Button>
                )}
              </Flex>
            </Flex>
          </Flex>

          {loadError && (
            <Box border="1px solid" borderColor="primary" p={4} mb={5}>
              <Text fontSize="sm">Could not load the library: {loadError}</Text>
            </Box>
          )}

          {previewOpen && stack.length > 0 && (
            <Box border="1px solid" borderColor="primary" p={[3, null, 5]} mb={8} maxH="500px" overflow="auto">
              <Heading fontSize="md" mb={3}>Preview — generated markdown</Heading>
              <Text as="pre" fontSize="xs" fontFamily="mono" whiteSpace="pre-wrap" lineHeight="1.5">
                {generated}
              </Text>
            </Box>
          )}

          <Flex direction={['column', null, 'row']} align="start" justify="space-between" borderTop="1px solid" borderColor="midtone" pt={5}>
            <ClassColumn k="concepts" />
            <ClassColumn k="tools" />
            <ClassColumn k="aesthetics" />
          </Flex>
        </Flex>

        <Footer />
      </main>
    </>
  )
}
