import { Flex, Text } from '@chakra-ui/react'
import { Header, PageMetadata } from '@/components'
import {
  MatterSubstrates,
  MatterInvertedCity,
  MatterSurveys,
  MatterEthLocalism,
} from '@/components'

export default function Matters() {
  return (
    <>
      <PageMetadata
        title="Matter"
        description="The open machine is ((the earth)), understood as a cybernetic phenomenon."
        image="https://theopenmachine.net/assets/tOM_unfurl.jpg"
      />
      <main>
        <Header />
      </main>
      <Flex maxW="720px" mx="auto" direction="column">
        <MatterEthLocalism />
        <MatterInvertedCity />
        <MatterSubstrates />
        <MatterSurveys />
      </Flex>
    </>
  )
}
