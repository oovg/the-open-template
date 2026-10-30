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
    summary: '5 essays published · 3 titles preparing to publish · 2 anthologies planned',
    items: [
      { title: 'Immanence & Emanation', status: 'Published' },
      { title: 'Toward a Nomad Web', status: 'Published' },
      { title: 'Intelligence is Immanent', status: 'Published' },
      { title: 'Toward a Participatory Digital Gnosis', status: 'Published' },
      { title: 'Toward an Extitutional People', status: 'Published' },
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
    summary: '2 monthly series running · Walkaway salon convened · Summit and Playground organizing · 2 gatherings brewing · DAOs 2.0 planned',
    items: [
      { title: 'DWeb Meetup', status: 'Ongoing' },
      { title: 'Open Machine Mindfuck Movie Club', status: 'Ongoing' },
      { title: 'Walkaway Sociologies', status: 'Convened' },
      { title: 'Extitutional Summit', status: 'Organizing' },
      { title: 'Extitutional Playground', status: 'Organizing' },
      { title: 'Offline Parties', status: 'Brewing' },
      { title: 'Walkaway Gatherings', status: 'Brewing' },
      { title: 'DAOs 2.0', status: 'Planning' },
    ],
  },
  {
    id: 'research',
    label: 'Research',
    summary: 'Media Shop live as DIPP reference · IES framework published · Ethereum Extitutional, Mauve Zone, and AgentWorld underway · MindGraphs planned',
    items: [
      { title: 'Media Shop', status: 'Published' },
      { title: 'Institutions, Extitutions, and Substrates', status: 'Published' },
      { title: 'Antikythera AgentWorld', status: 'Underway' },
      { title: 'Ethereum Extitutional', status: 'Underway' },
      { title: 'Mauve Zone Project', status: 'Underway' },
      { title: 'MindGraphs', status: 'Planning' },
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
  /** Place cover beside copy (published media); default stacks image below */
  imageBeside?: boolean
}

const Item = ({ title, status, children, href, image, imageAlt, imageBeside }: ItemProps) => (
  <Box id={slugify(title)} scrollMarginTop="80px" border="1px solid" borderColor="primary" p={[4, null, 5]} w="100%">
    <Flex
      direction={imageBeside && image ? ['column', null, 'row'] : 'column'}
      gap={imageBeside && image ? [4, null, 5] : 0}
      alignItems={imageBeside && image ? ['stretch', null, 'start'] : undefined}
    >
      {image && imageBeside && (
        <Box
          flexShrink={0}
          w={['112px', null, '140px']}
          h={['112px', null, '140px']}
          overflow="hidden"
          alignSelf="start"
        >
          <Image
            src={image}
            alt={imageAlt || title}
            w="100%"
            h="100%"
            objectFit="cover"
            objectPosition="center"
            display="block"
          />
        </Box>
      )}
      <Box flex="1" minW={0}>
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
      </Box>
    </Flex>
    {image && !imageBeside && (
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
            <Text fontSize={['md', null, 'lg']} mb={5}>
              In Q3 this year, with generous funding from the Liberty Ears Foundation, we set out to expand our corpus and series of experiential events. We dove deep into the theoretical underpinnings of our vision of the emerging technology space, publishing three foundational essays:
            </Text>
            <Box as="ul" pl={5} mb={5} fontSize={['md', null, 'lg']} sx={{ listStyleType: 'disc' }}>
              <Box as="li" mb={3}>
                <Text as="i">Immanence and Emanation: Three Premises on the Eve of the Singularity</Text> outlined the practical stakes of immanent philosophy, bridging scientific paradigms of diverse intelligence with accounts of the cultural underground to envision weird frontiers of digital governance;
              </Box>
              <Box as="li" mb={3}>
                <Text as="i">Toward a Nomad Web</Text> traced the internet&apos;s oscillation between smooth protocol space and striated platform-State, integrating learnings from past decades of enclosure to understand how the internet&apos;s role as a freedom technology can be rediscovered;
              </Box>
              <Box as="li" mb={3}>
                <Text as="i">Intelligence is Immanent</Text> presented a process model of how minds and knowledge form across cognitive assemblages of all kinds, finding hints along the way of the munitions needed to explode the normativity that hinders the capacities of healthy thinking systems.
              </Box>
            </Box>
            <Text fontSize={['md', null, 'lg']} mb={5}>
              Alongside these three major pieces, we&apos;ve published briefer provocations including <Text as="i">Toward an Extitutional People</Text> and <Text as="i">Toward a Participatory Digital Gnosis</Text>; we&apos;ve started publishing our working research as open notebooks that can act as frameworks for others to borrow from as they navigate the current moment. We extended our reach beyond a primary web3 orientation, connecting more deeply with the DWeb community as we host local DWeb meetups and collaborate on a distributed publishing protocol with The Internet Archive. We&apos;ve taken our thesis on immanent technology to para-academic and psychedelic circles, joined forces with neuroscientists to explore the social modalities of individual neuroplastic states; we&apos;ve held philosophical salons on the Walkaway concept on Salt Spring Island and stewarded a coordinated extitutional response to the overly institutional adoption of Ethereum.
            </Text>
            <Text fontSize={['md', null, 'lg']}>
              In Q4 and beyond into 2027, we look to operationalize these new foundations along three lines of practice. First, the organizational, we plan to refine and publish more frameworks, hold workshops and offer consulting to help organizations become more robust, metastable thinking systems. Second, we aim to build technology that fills the gaps diagnosed in our theory. This will largely take the form of open source specs that serve as working prototypes for parallel communities. Examples include more fleshed out versions of our distributed publishing protocol, of which our Media Shop acts as the current exemplar; MindGraphs modeled as agentic era advancements of the early-internet webring; and open research mediums tailored for non-specialist contribution and ethnographic self report (Erowid 2.0, but with a more expansive focus in governance, economics and phenomenology of technology). The third is scaling up experiential event orchestration. Among these is our coming collaboration with Sensoria and Humans on the Loop: The Mauve Zone Project is an online hackathon for &apos;dissident neurotechnics&apos; that explore participatory and ethical reappropriation of altered state inducing technologies. Other planned events include advancements of our Walkaway Inquiry (already prototyped in Q3 on Salt Spring Island); a local &quot;Psychedelics, Technology and Cognitive Security&quot; night; a two day online talk series on DAOs 2.0; and a coming Extitutional Gathering in Burgundy France embedded within the long-running Feytopia community where extitutional theory first emerged.
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
            image="/assets/q3-2026/covers/immanence-and-emanation.jpg"
            imageAlt="Cover: Immanence and Emanation"
            imageBeside
          >
            <Text>
              Against the emanationist image of a world ordered around a transcendent hierarchy, this essay lays out three premises for an immanent technology: the plane of immanence, scale-free cognition, and latent space.
            </Text>
          </Item>

          <Item
            title="Toward a Nomad Web"
            status="Published"
            href="/transmissions/toward-a-nomad-web"
            image="/assets/q3-2026/covers/toward-a-nomad-web.jpg"
            imageAlt="Cover: Toward a Nomad Web"
            imageBeside
          >
            <Text>
              Grounded in Deleuze & Guattari&apos;s smooth and striated space, this booklet traces the internet from its genesis as a smooth protocol web, through enclosure by the platform-State, to the contemporary resmoothing underway as protocol response — and the conditions under which a nomad web might again become possible.
            </Text>
          </Item>

          <Item
            title="Intelligence is Immanent"
            status="Published"
            href="https://vengist.substack.com/p/intelligence-is-immanent"
            image="/assets/q3-2026/covers/intelligence-is-immanent.jpg"
            imageAlt="Cover: Intelligence is Immanent"
            imageBeside
          >
            <Text>
              A process model of the becoming of minds, intelligence, and knowledge. Drawing on Simondon, Peirce, Spinoza, Deleuze, Bateson, and Weinbaum&apos;s open-ended intelligence, the essay reframes knowing as immanent individuation across cognitive assemblages — from cells and scenes to markets and forests — and asks what conditions keep epistemic systems healthy, and what enclosure does when it captures them.
            </Text>
          </Item>

          <Item
            title="Toward a Participatory Digital Gnosis"
            status="Published"
            href="https://substack.com/@exeunteth/p-203649812"
            image="/assets/q3-2026/covers/participatory-digital-gnosis.jpg"
            imageAlt="Cover: Toward a Participatory Digital Gnosis"
            imageBeside
          >
            <Text>
              On Distributed Metaprogramming Communities: how dissident cultures of deconditioning and imaginative restructuring — the mauve zone of heightened plasticity — might meet decentralized tools to make participatory digital gnosis possible, against the capture of social technology by control and spectacle.
            </Text>
          </Item>

          <Item
            title="Toward an Extitutional People"
            status="Published"
            href="https://substack.com/@exeunteth/p-219044726"
            image="/assets/q3-2026/covers/extitutional-people.jpg"
            imageAlt="Cover: Toward an Extitutional People"
            imageBeside
          >
            <Text>
              Why we are not down to hang: a prescription for extitutional antagonism grounded in craft with empirical stakes, free labor, and stigmergic mediums — locating an extitutional people not in discursive hanging-out, but in the recess of compulsory individuality that is attentive work.
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

          <Item title="Walkaway Gatherings" status="Brewing">
            <Text>
              Social extensions of the Walkaway Sociologies inquiry — gatherings designed to practice exit, mutual infrastructure, and life outside default society as lived atmosphere rather than abstract critique.
            </Text>
          </Item>

          <Item title="DAOs 2.0" status="Planning">
            <Text mb={3}>
              <Text as="i">Two-day online talk series</Text>
            </Text>
            <Text>
              A gathering to unfurl the latest thinking around Decentralized Autonomous Organizations — bringing builders, theorists, and practitioners into conversation toward a DAO renaissance beyond the first wave&apos;s institutional and speculative traps.
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

          <Item title="MindGraphs" status="Planning">
            <Text>
              Agentic-era advancements of the early-internet webring — open graph structures for linking minds, media, and research across parallel communities, modeled as working prototypes others can fork and extend. MindGraphs can serve as infrastructure for Open Research Initiatives.
            </Text>
          </Item>
        </Section>

        <Footer />
      </Box>
    </Flex>
  )
}
