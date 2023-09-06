import React from 'react'
import { Box, Image, Text, useColorMode } from '@chakra-ui/react'
import { Rule } from '@/components'

export const Section = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDarkMode = colorMode === 'dark'
  return (
  <Box w="100%">
    <Box maxW="720px" mx="auto" px={12} py={12}>
      <Rule />
      <Box>
        <Text textStyle="paragraph">
          <i> <b>The Open Machine</b> is an online media publication for the generation
          of experimental cultural & conceptual compliments to the decentralized web. 
          Our work draws upon diverse inputs - from the historical archive, from remote disciplines, 
          from myths and memes of the past and the future - in order to construct images of 
          free association and the network improvisation adequate to a post-coercion society.</i>
        </Text>
      </Box>
      <Rule />
      <Box>
        <Text textStyle="paragraph">  
          <b>Per Auxiliam Reticulum >>> </b> 
          It's an open secret, a scandalous bit of folk knowledge known
          among realists and parriahs alike, that the ones who seek totalizing
          systems are the ones most excluded from the touch of wholeness. A
          preliminary definition of truth for the modern age could be: that which an
          institution cannot see. One needs the vision of the outside, an untimely
          vantage to see that the project of administration, the distance
          of the template, is blind to the singularities and wrinkles of 
          happenstance which contain in their roughness the strange wholeness of 
          the world.
        </Text>
        <Text textStyle="paragraph">
          Concepts are a different story, negotiating the distance by means of 
          enclosure <i>pro tempore</i>. They may appear to serve administration 
          and ownership in little mercenary episodes, but they
          are always slipping toward free encounter and discovery, the trickster
          germ of the untimely. When Von Neumann and Wiener developed the field
          of cybernetics, they couldn't know that they were opening up a
          line of inquiry that would expose them, in their bids at control, to
          the fly by night agency of the concept. Bateson's information ecology:
          everywhere you find entanglement, recursion, the categorically
          unstable reflexivity of network systems, there is the concept: burrowing 
          unstable paths that revive the dead, deliver the unborn, open machines for 
          the production of new spatial alliances, new temporalities.
        </Text>
        <Text textStyle="paragraph">
          Programming culture tells the same story, though perhaps on a
          different axis - the earthen silica of the computer leaping out of the
          bound to give emergence its voice. The open source movement
          discovered, in following the unruly apertures of Turing completion, the{' '}
          <i>bazaar</i>, a terrain too vast to contain (or to own). The democracy
          of bugs and the holey morphospace of code, a flat ontology where networks 
          move faster than hierarchies and nothing is sacred. It was a wisdom gained by work, 
          beyond all ideological discipline, beyond abstraction and theology, and because
          of that, it necessarily pointed past the institution.
        </Text>
        <Text textStyle="paragraph">
          Cryptographic ledgers enable that intuition, allowing it to be realized as an
          infrastructure. What are the local minima of institutional constructs?
          What anarchistic stop-gaps across time and space might nonetheless
          enable legibility in what Moten and Turing both called{' '}
          <i>The Universal Machine</i>? The builders of web3 are a recursive
          public: the product of their work embodies the protocols of their own
          development. They build in nomadic guilds of free association, an
          ethic of encounter developed solely to expose each node to the
          machine - the non-institutional charge, emergence, the rough
          wholeness. In the infrastructure of the cryptographic ledger is the
          promise of a society of friends, free encounter among ambulant entities 
          under non-coercive conditions, for the earth is magnetically repelled by the
          atmosphere of coercion. Supremacy is a dead ecology.
        </Text>
        <Text textStyle="paragraph">
          { isDarkMode ? (
            <Image src="../assets/ecology_dark.jpg" alt="ecology2" />
          ) : (
            <Image src="../assets/ecology_light.jpg" alt="ecology2" />
          )}
        </Text>
        <Text textStyle="paragraph">
          Ruskin{' '}
          <a
            href="http://homes.ieu.edu.tr/arch204/READINGS/02_RUSKIN.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            writes
          </a>{' '}
          in 1853 of the tradition of the gothic masons, journeyman
          practitioners whose art contained the generic traits of the net-being,
          the free agent who strives at all points toward ecology ("in gothic
          work," he says, "the workman must have been altogether set
          free"). The traits are as follows:{' '}
          <b>
            Savageness or Rudeness, Love of Change, Love of Nature, Disturbed
            Imagination, Obstinacy
          </b>
          , and <b>Generosity</b>. The brash artistry had no time for ceremony
          and manicured likenesses, generating "creations of ungainly shape and
          rigid limb, but full of wolfish life." (<i>Sub specie aeterni</i>, all
          attempts at brutalism inevitably become flamboyant and grotesque.)The 
          successive builds made for patchwork styles that embraced changed; the 
          spires and buttresses charged with an obstinance and rigidity "not merely stable, but active
          … the peculiar energy which gives tension to movement, and stiffness
          to resistance, which makes the fiercest lightning forked rather than
          curved."
        </Text>
      </Box>
      <Box>
        <Text textStyle="paragraph">
          The suggestion of Ruskin's gothic treatise is that free work is 
          a negotiation, a pact, a machinic point where the audacity and speed
          of liberty is checked by the patience of emergence. The gothic laborers 
          are distinct for this naturalism, this realism and love of change
          built out of "a profound sympathy with the fulness and wealth of the
          material universe." But its the confluence that leaps out, allowing the 
          journeyman to make acquaintance with beings across scales, divining from 
          "the forest leaves ... the wandering of the tendril, and the budding of 
          the flower" a rude and weird platonism, gargoyle archetypes of the natural
          rhythms. The eccentric vision, intuitive animism of the quick and the patient.
        </Text>
        <Text textStyle="paragraph">
          In the memelore and production of the builders of the decentralized
          web, we find these same attributes. We find the savage grasp of
          materiality - yes, even the materiality of transistor charges and
          logic gates - loved and embraced for all its robustness. When the
          relationship to the elements isn't alienated by the distracted
          and antireal metaphysics of hierarchy, that abundance unfolds, so that
          the intention of the producer is fused with the intrigue and chance of
          the material instance. And from that instance, rude forms. That's the 
          question- how to bring the material instance to bear in building, conceptualizing, and
          manifesting the flamboyantly fractal and utterly irreverent scale
          invariance of the network, the (anti)thing that touches and ignites
          the rough whole? Gleaned in the ordeal of stone, the metastable spark.
        </Text>
        <Text textStyle="paragraph">
          Borrowing from the ethos of the builders, we announce The Open
          Machine, a publication press for the advancement of concepts adequate
          to the uncultured entanglements of the network. We forego authority 
          and professionalism for nonlinearity and associational maximalism. We 
          call to task interdisciplinary and transhistorical inputs for the sake 
          of conceptual pandemonium. We study the rhythms and arrows of meme 
          propagation so as to venture farther out onto limbs of recursion and 
          emergence. We work through the abandonment issues of those that have 
          forsaken dumb enclosure and find new idols, machine elves and stochastic
          entities of the open past and the long future. We create in an atmosphere
          of savageness and generosity. We view the expanse with the disturbed eye 
          of reality. Upon the flat bazaar, the open machine is an untimely cathedral,
          a gothic mayhem that might iterate out and discover, in stone and silicone,
          legibility in non-institutional time.
        </Text>
      </Box>
      <Box>
        <Text textStyle="paragraph">
          <Image src="../assets/cathedralvoid.jpg" alt="Cathedral" />
        </Text>
      </Box>
      <Rule />
    </Box>
  </Box>
  )
}
