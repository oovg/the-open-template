import React from 'react'
import Head from 'next/head'
import {
  Flex,
  Heading,
  Link,
  Text,
  Box,
  Image,
} from '@chakra-ui/react'
import {
  PageMetadata,
  Footer,
} from '@/components'
import { Header } from '@/components/Header'

type Status = 'Published' | 'Ongoing' | 'Convened' | 'Preparing' | 'Underway' | 'Organizing' | 'Brewing' | 'Planning'

type Phase = 'shipped' | 'progress' | 'next'

const phaseOf: Record<Status, Phase> = {
  Published: 'shipped',
  Ongoing: 'shipped',
  Convened: 'shipped',
  Preparing: 'progress',
  Underway: 'progress',
  Organizing: 'progress',
  Brewing: 'next',
  Planning: 'next',
}

const slugify = (s: string) =>
  s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

type GlanceCategory = {
  id: string
  label: string
  summary: string
  items: { title: string; status: Status }[]
}

const glance: GlanceCategory[] = [
  {
    id: 'media',
    label: 'Media',
    summary: '3 essays published · 3 titles preparing to publish · 2 anthologies planned',
    items: [
      { title: 'Immanence & Emanation', status: 'Published' },
      { title: 'Toward a Nomad Web', status: 'Published' },
      { title: 'Intelligence is Immanent', status: 'Published' },
      { title: 'Open Machine Notebooks', status: 'Preparing' },
      { title: 'Metacogsec', status: 'Preparing' },
      { title: 'Extitutional Zine', status: 'Preparing' },
      { title: 'Extitutional Anthology', status: 'Planning' },
      { title: 'Altered States of Community', status: 'Planning' },
    ],
  },
  {
    id: 'events',
    label: 'Events',
    summary: '2 monthly series running · Walkaway salon convened · Summit and Playground organizing · 2 gatherings brewing',
    items: [
      { title: 'DWeb Meetup', status: 'Ongoing' },
      { title: 'Open Machine Mindfuck Movie Club', status: 'Ongoing' },
      { title: 'Walkaway Sociologies', status: 'Convened' },
      { title: 'Extitutional Summit', status: 'Organizing' },
      { title: 'Extitutional Playground', status: 'Organizing' },
      { title: 'Offline Parties', status: 'Brewing' },
      { title: 'Walkaway Parties', status: 'Brewing' },
    ],
  },
  {
    id: 'research',
    label: 'Research',
    summary: 'Media Shop live as DIPP reference · IES framework published · Ethereum Extitutional, Mauve Zone, and AgentWorld underway',
    items: [
      { title: 'Media Shop', status: 'Published' },
      { title: 'Institutions, Extitutions, and Substrates', status: 'Published' },
      { title: 'Antikythera AgentWorld', status: 'Underway' },
      { title: 'Ethereum Extitutional', status: 'Underway' },
      { title: 'Mauve Zone Project', status: 'Underway' },
    ],
  },
]

const phaseMarkStyles: Record<Phase, { bg?: string; borderStyle: string }> = {
  shipped: { bg: 'bg', borderStyle: 'solid' },
  progress: { borderStyle: 'solid' },
  next: { borderStyle: 'dashed' },
}

const PhaseMark = ({ phase, size = '18px' }: { phase: Phase; size?: string }) => (
  <Box
    as="span"
    display="inline-block"
    w={size}
    h={size}
    borderWidth="1.5px"
    borderColor="bg"
    flexShrink={0}
    {...phaseMarkStyles[phase]}
  />
)

const phaseLabels: Record<Phase, string> = {
  shipped: 'Shipped / live',
  progress: 'In progress',
  next: 'Next',
}

const StatusBadge = ({ status }: { status: Status }) => {
  const tones: Record<Status, { border: string; label: string }> = {
    Published: { border: 'primary', label: 'Published' },
    Ongoing: { border: 'primary', label: 'Ongoing' },
    Convened: { border: 'primary', label: 'Convened' },
    Preparing: { border: 'midtone', label: 'Preparing to publish' },
    Underway: { border: 'midtone', label: 'Underway' },
    Organizing: { border: 'midtone', label: 'Organizing' },
    Brewing: { border: 'midtone', label: 'Brewing' },
    Planning: { border: 'midtone', label: 'Planning' },
  }
  const tone = tones[status]

  return (
    <Text
      as="span"
      display="inline-block"
      fontSize="xs"
      textTransform="uppercase"
      letterSpacing="0.12em"
      fontFamily="heading"
      border="1px solid"
      borderColor={tone.border}
      px={2}
      py={1}
      mb={3}
    >
      {tone.label}
    </Text>
  )
}

type ItemProps = {
  title: string
  status: Status
  children: React.ReactNode
  href?: string
  image?: string
  imageAlt?: string
}

const Item = ({ title, status, children, href, image, imageAlt }: ItemProps) => (
  <Box id={slugify(title)} scrollMarginTop="80px" border="1px solid" borderColor="primary" p={[4, null, 5]} w="100%">
    <StatusBadge status={status} />
    <Heading fontSize={['md', null, 'lg']} mb={3} fontStyle="italic">
      {href ? (
        <Link
          href={href}
          isExternal={href.startsWith('http')}
          textDecoration="underline"
          textDecorationStyle="dotted"
          textUnderlineOffset="4px"
          _hover={{ color: 'primary' }}
        >
          {title}
        </Link>
      ) : (
        title
      )}
    </Heading>
    <Box fontSize="sm">{children}</Box>
    {image && (
      <Box mt={4} overflow="hidden">
        <Image
          src={image}
          alt={imageAlt || title}
          w="100%"
          maxH="320px"
          objectFit="cover"
          objectPosition="center"
          display="block"
        />
      </Box>
    )}
  </Box>
)

const Section = ({
  id,
  title,
  intro,
  children,
}: {
  id: string
  title: string
  intro: string
  children: React.ReactNode
}) => (
  <Flex
    id={id}
    direction="row"
    alignItems="start"
    justifyContent="space-between"
    w="100%"
    p={[5, null, 10]}
    flexWrap="wrap"
    borderBottom="1px solid"
    borderColor="midtone"
  >
    <Flex
      direction="column"
      alignItems="start"
      w={['100%', null, '33%']}
      justifyContent="start"
      mr={[0, null, 10]}
      mb={[5, null, 0]}
    >
      <Heading color="primary" fontWeight="900" fontSize={['2xl', null, '3xl']} mb={5}>
        {title}
      </Heading>
      <Text fontSize="md">{intro}</Text>
    </Flex>
    <Flex direction="column" w={['100%', null, '60%']} gap={4}>
      {children}
    </Flex>
  </Flex>
)

export default function Q32026Update() {
  return (
    <Flex direction="column" alignItems="stretch" justifyContent="space-between" w="100%">
      <PageMetadata
        title="Q3 2026 Update"
        description="Q3 2026 progress from The Open Machine — media published, events convened, research underway, and what comes next."
        image="/assets/q3-2026/media-shop.png"
      />
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <Box as="main" w="100%">
        <Header />

        {/* Hero */}
        <Flex
          direction="column"
          alignItems="start"
          justifyContent="start"
          w="100%"
          p={[5, null, 10]}
          borderBottom="1px solid"
          borderColor="midtone"
        >
          <Heading color="primary" fontWeight="900" fontSize={['3xl', null, '5xl']} mb={5}>
            Q3 2026 Update
          </Heading>
          <Box maxW="900px">
            <Text fontSize={['lg', null, 'xl']} mb={5}>
              Over the past quarter The Open Machine has been publishing foundational essays, convening recurring cultural infrastructure in Portland and beyond, and advancing research that turns immanent values into usable media, events, and protocols.
            </Text>
            <Text fontSize={['md', null, 'lg']}>
              Below is a focused snapshot of what we've shipped, what we're working on, and what we are planning next.
            </Text>
          </Box>
        </Flex>

        {/* Snapshot */}
        <Flex
          direction="column"
          w="100%"
          p={[5, null, 10]}
          borderBottom="1px solid"
          borderColor="midtone"
          bg="primary"
          color="bg"
        >
          <Heading fontWeight="900" fontSize={['2xl', null, '3xl']} mb={5}>
            Q3 2026 at a glance
          </Heading>
          <Flex gap={[4, null, 6]} mb={[6, null, 8]} flexWrap="wrap" fontSize="xs" textTransform="uppercase" letterSpacing="0.12em">
            {(Object.keys(phaseLabels) as Phase[]).map((phase) => {
              const count = glance.flatMap((c) => c.items).filter((i) => phaseOf[i.status] === phase).length
              return (
                <Flex key={phase} alignItems="center" gap={2}>
                  <PhaseMark phase={phase} size="12px" />
                  <Text as="span">
                    {phaseLabels[phase]} · {count}
                  </Text>
                </Flex>
              )
            })}
          </Flex>
          <Flex direction="column" maxW="1000px">
            {glance.map((category, i) => (
              <Flex
                key={category.id}
                direction={['column', null, 'row']}
                alignItems={['start', null, 'center']}
                gap={[2, null, 8]}
                py={[4, null, 5]}
                borderTop={i === 0 ? 'none' : '1px solid'}
                borderColor="bg"
              >
                <Link
                  href={`#${category.id}`}
                  w={['auto', null, '140px']}
                  flexShrink={0}
                  fontSize="sm"
                  textTransform="uppercase"
                  letterSpacing="0.12em"
                  textDecoration="underline"
                  textUnderlineOffset="3px"
                  _hover={{ textDecoration: 'none' }}
                >
                  {category.label}
                </Link>
                <Flex direction="column" gap={2}>
                  <Flex gap={2} flexWrap="wrap">
                    {category.items.map((item) => (
                      <Link
                        key={item.title}
                        href={`#${slugify(item.title)}`}
                        title={`${item.title} — ${item.status}`}
                        aria-label={`${item.title} — ${item.status}`}
                        display="inline-flex"
                        transition="transform 0.15s ease"
                        _hover={{ transform: 'scale(1.25)' }}
                      >
                        <PhaseMark phase={phaseOf[item.status]} />
                      </Link>
                    ))}
                  </Flex>
                  <Text fontSize={['md', null, 'lg']}>{category.summary}</Text>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>

        {/* Media */}
        <Section
          id="media"
          title="Media"
          intro="Our media is how research travels — essays, booklets, zines, and interactive notebooks that make immanent concepts visceral and shareable."
        >
          <Item
            title="Immanence & Emanation"
            status="Published"
            href="https://media.theopenmachine.net/media/immanence-and-emanation"
          >
            <Text>
              Against the emanationist image of a world ordered around a transcendent hierarchy, this essay lays out three premises for an immanent technology: the plane of immanence, scale-free cognition, and latent space.
            </Text>
          </Item>

          <Item
            title="Toward a Nomad Web"
            status="Published"
            href="/transmissions/toward-a-nomad-web"
          >
            <Text>
              Grounded in Deleuze & Guattari&apos;s smooth and striated space, this booklet traces the internet from its genesis as a smooth protocol web, through enclosure by the platform-State, to the contemporary resmoothing underway as protocol response — and the conditions under which a nomad web might again become possible.
            </Text>
          </Item>

          <Item
            title="Intelligence is Immanent"
            status="Published"
            href="https://vengist.substack.com/p/intelligence-is-immanent"
          >
            <Text>
              A process model of the becoming of minds, intelligence, and knowledge. Drawing on Simondon, Peirce, Spinoza, Deleuze, Bateson, and Weinbaum&apos;s open-ended intelligence, the essay reframes knowing as immanent individuation across cognitive assemblages — from cells and scenes to markets and forests — and asks what conditions keep epistemic systems healthy, and what enclosure does when it captures them.
            </Text>
          </Item>

          <Item title="Open Machine Notebooks" status="Preparing">
            <Text>
              A series of web-native interactive experiences that open our working notes on key concepts — extitutional theory, metacogsec, immanent intelligence — exposing not only what we think, but how and where those thoughts take form.
            </Text>
          </Item>

          <Item title="Metacogsec" status="Preparing">
            <Text>
              A zine on cognitive security: how attention, narrative, and interface design can enclose or expand agency — and what protocols of perception look like when they are built for freedom rather than capture.
            </Text>
          </Item>

          <Item title="Extitutional Zine" status="Preparing">
            <Text>
              A companion publication to the Ethereum Extitutional research vector — translating extitutional dynamics into a portable form for builders, theorists, and cultural organizers working beyond institutional containers.
            </Text>
          </Item>

          <Item title="Extitutional Anthology" status="Planning">
            <Text>
              Collected essays from thinkers working in extitutional space, laying out the case for extitutional dynamics and the organizational forms they make possible. Set to catalyze at the Extitutional Summit in France and to circulate through Extitutional Playground events.
            </Text>
          </Item>

          <Item title="Altered States of Community" status="Planning">
            <Text>
              Collected essays from theorists and practitioners on alternate modes of community — organizing, experiential design, and how those modes produce altered states of thinking for groups and the individuals within them.
            </Text>
          </Item>
        </Section>

        {/* Events */}
        <Section
          id="events"
          title="Events"
          intro="Events are where coalitions form. We run recurring series that build local capacity, and one-off gatherings that collide discourse communities that rarely meet."
        >
          <Item
            title="DWeb Meetup"
            status="Ongoing"
            image="/assets/q3-2026/dweb.jpg"
            imageAlt="DWeb Meetup at Rontoms, Portland"
          >
            <Text mb={3}>
              <Text as="i">Monthly · Last Wednesdays · Rontoms, Portland, Oregon</Text>
            </Text>
            <Text>
              Each month we gather around the decentralized web: an internet that is more open, resilient, and shaped by the people who use it. Conversations move from DWeb principles — autonomy, privacy, community ownership — to the projects attendees are building or dreaming into being. Beyond discussion, the meetup is a support network: a place to share progress, work through challenges, find collaborators, and stay in motion together.
            </Text>
          </Item>

          <Item
            title="Open Machine Mindfuck Movie Club"
            status="Ongoing"
            href="/transmissions/open-machine-mindfuck-movie-club"
            image="/assets/q3-2026/movie-mindfuck.jpg"
            imageAlt="Open Machine Mindfuck Movie Club"
          >
            <Text>
              A monthly conversation on cognitive security and technology through cinema. What can film teach us about technologies of escape? And beyond the reactive mode: what can these virtual investigations into exotic experience teach us about constructing active technologies of cognitive expansion? What kind of world could we live in?
            </Text>
          </Item>

          <Item
            title="Walkaway Sociologies"
            status="Convened"
            image="/assets/q3-2026/imaginal-house.jpg"
            imageAlt="Imaginal House, Salt Spring Island"
          >
            <Text mb={3}>
              <Text as="i">Salon · Imaginal House, Salt Spring Island, BC · Pluto&apos;s Cove series</Text>
            </Text>
            <Text mb={3}>
              Drawing on Cory Doctorow&apos;s <Text as="i">Walkaway</Text>, we seeded a salon on societies that form when people leave default society — or never joined it — and build collective infrastructure outside institutional and economic normativity. Maroon societies, communes, Burning Man–scale temporary cities, and indigenous societies that held other modes all along. Walkaway Sociologies mixes fiction, history, and ethnography to study these forms and provoke their emergence in the present.
            </Text>
            <Text fontSize="xs" color="midtone">
              Full salon writeup forthcoming.
            </Text>
          </Item>

          <Item title="Extitutional Summit" status="Organizing">
            <Text mb={3}>
              <Text as="i">Château du Feÿ · ~2 hours SE of Paris, France</Text>
            </Text>
            <Text>
              A summit of extitutional theorists and practitioners — a space to discuss, deliberate, and build on extitutional theory together. Where do we align? Where have we diverged? How might we facilitate the conditions of more extitutionality in the world?
            </Text>
          </Item>

          <Item title="Extitutional Playground" status="Organizing">
            <Text mb={3}>
              <Text as="i">Spring · Portland, Oregon</Text>
            </Text>
            <Text>
              An experimental event focused on feeling extitutionality more than theorizing it — a space to practice and play with extitutional dynamics in embodied form.
            </Text>
          </Item>

          <Item title="Offline Parties" status="Brewing">
            <Text>
              Social gatherings where attendees leave devices at the door and relate without high technology. Notebooks, ritual, art, and other low technologies become the medium for alternate modes of presence and connection.
            </Text>
          </Item>

          <Item title="Walkaway Parties" status="Brewing">
            <Text>
              Social extensions of the Walkaway Sociologies inquiry — gatherings designed to practice exit, mutual infrastructure, and life outside default society as lived atmosphere rather than abstract critique.
            </Text>
          </Item>
        </Section>

        {/* Research */}
        <Section
          id="research"
          title="Research"
          intro="Research is where we deepen the conceptual ground and build instruments others can reuse — protocols, shops, graphs, and collaborations that put immanent theory into operation."
        >
          <Item
            title="Media Shop"
            status="Published"
            href="https://media.theopenmachine.net"
            image="/assets/q3-2026/media-shop.png"
            imageAlt="Open Machine Media Shop"
          >
            <Text mb={3}>
              A reference implementation of our budding decentralized independent publishing protocol (DIPP). The shop is self-hosted; all content is served via OPDS catalog — addable to ereaders, downloadable directly. Publications are free to read, with a clear path to donation. Optimized for EPUB, PDF, Markdown, and OPDS.
            </Text>
            <Text>
              Seeded by conversations at DWeb Camp Cascadia 2026. We are collaborating with Brewster Kahle of the Internet Archive on payment rails and deep-funding mechanics for independent publishing infrastructure.
            </Text>
          </Item>

          <Item
            title="Institutions, Extitutions, and Substrates"
            status="Published"
            href="https://om-ies.vercel.app"
          >
            <Text>
              An interactive organizational framework mapping three modes of organization. Institutions are stable, deterministic forms bounded in the actual. Substrates are the unstable, processual field of virtual potential beneath them. Extitutions are meta-stable arrangements that hold enough shape to act while staying open enough to change. Drawing on Deleuze, the framework positions extitutions as mediums between closed institutional minds and open substrates — the joint where organization and individuation co-produce open-ended intelligence.
            </Text>
          </Item>

          <Item
            title="Antikythera AgentWorld"
            status="Underway"
            href="http://om-mindgraph.vercel.app"
          >
            <Text>
              We've completed initial research and submitted a proposal to Antikythera and scoped out a simulation environment for studying a society of minds and how epistemic exchange occurs across diverse kinds of minds (human/agent/hybrid). How do they cognize and organize themselves through latent space toward better epistemic health. We are currently seeking funding to run the simulation and conclude the research artifact.
            </Text>
          </Item>

          <Item title="Ethereum Extitutional" status="Underway">
            <Text>
              A response to Ethereum Institutional. Where EI accelerates institutional adoption, Ethereum Extitutional accelerates Ethereum as a vehicle for underground cultural production beyond institutional containers. Weekly meetups with an experimental{' '}
              <Link
                href="https://trustgraphs.xyz/networks/0x8bacf0f9589f8ca66f9d1c69334d46214408a64d97dd2906076ee51c9057fbe4"
                isExternal
                textDecoration="underline"
                textDecorationStyle="dotted"
                textUnderlineOffset="3px"
              >
                trust graph
              </Link>{' '}
              developed by Jack Hartnell, with backing from Owocki.
            </Text>
          </Item>

          <Item
            title="Mauve Zone Project"
            status="Underway"
            image="/assets/q3-2026/mauve-zone.png"
            imageAlt="Mauve Zone Project preview"
          >
            <Text>
              Collaboration with Sensoria — a psychedelic neuroscience organization — on offensive and defensive tactics for cognitive security. Bridging ethnographic underground knowledge with contemporary research on perception, enclosure, and expansion.
            </Text>
          </Item>
        </Section>

        {/* Closing CTA */}
        <Flex
          direction="column"
          alignItems="start"
          w="100%"
          p={[5, null, 10]}
          borderBottom="1px solid"
          borderColor="midtone"
        >
          <Heading color="primary" fontWeight="900" fontSize={['2xl', null, '3xl']} mb={5}>
            What support makes possible
          </Heading>
          <Box maxW="900px">
            <Text fontSize={['md', null, 'lg']} mb={5}>
              The next phase depends on sustained capacity: finishing the media pipeline, standing up the Extitutional Summit and Playground, running AgentWorld, and deepening the Media Shop into durable commons infrastructure. All of this work is designed to remain open, forkable, and free to access.
            </Text>
            <Text fontSize={['md', null, 'lg']} mb={8}>
              If this update affirms your support — or opens a conversation about joining it — we would welcome hearing from you.
            </Text>
            <Flex gap={4} flexWrap="wrap">
              <Link
                href="/donate"
                display="inline-block"
                border="1px solid"
                borderColor="primary"
                color="primary"
                px={5}
                py={3}
                textTransform="uppercase"
                letterSpacing="0.15em"
                fontSize="sm"
                fontFamily="heading"
                textDecoration="none"
                _hover={{
                  textDecoration: 'none',
                  bg: 'primary',
                  color: 'bg',
                }}
                transition="background 0.2s ease, color 0.2s ease"
              >
                Donate →
              </Link>
              <Link
                href="mailto:theopenmachine@protonmail.com"
                display="inline-block"
                border="1px solid"
                borderColor="primary"
                color="primary"
                px={5}
                py={3}
                textTransform="uppercase"
                letterSpacing="0.15em"
                fontSize="sm"
                fontFamily="heading"
                textDecoration="none"
                _hover={{
                  textDecoration: 'none',
                  bg: 'primary',
                  color: 'bg',
                }}
                transition="background 0.2s ease, color 0.2s ease"
              >
                Contact us →
              </Link>
            </Flex>
          </Box>
        </Flex>

        <Footer />
      </Box>
    </Flex>
  )
}
