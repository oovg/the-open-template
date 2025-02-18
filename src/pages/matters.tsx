import { Box, Flex } from '@chakra-ui/react'
import { Header, PageMetadata } from '@/components'
import {
  MatterSubstrates,
  MatterInvertedCity,
  MatterSurveys,
  MatterEthLocalism,
} from '@/components'

export default function Matters() {
  return (
    <Box>
      <PageMetadata
        title="Matter"
        description="The open machine is ((the earth)), understood as a cybernetic phenomenon."
        image="https://theopenmachine.net/assets/tOM_unfurl.jpg"
      />
      <main>
        <Header />
      </main>
      <Flex maxW="800px" mx="auto" direction="column">
        <Flex maxW="800px" mx="auto" my={12}>
          <Text as="h2" textStyle="h2">
            Matters
          </Text>
        </Flex>
        <MatterEthLocalism />
        <MatterInvertedCity />
        <MatterSubstrates />
        <MatterSurveys />
      </Flex>
    </Box>
  )
}
