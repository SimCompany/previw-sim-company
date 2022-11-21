import { Box, ListItem, Text, TextProps, UnorderedList } from "@chakra-ui/react"
import H5 from "../Texts/H5"

interface InfromationType extends TextProps {
  title?: string,
  description: string
  paragraphPosition?: any
  topics?: string[]
}


export default function Topics({ title, description, paragraphPosition, topics, ...rest }: InfromationType) {

  return (
    <Box my='2'>
      <H5 mt='1' {...rest}>{title}</H5>
      <Text textAlign={paragraphPosition}>{description}</Text>
      {
        topics &&
        <Box mt='2'>
          {topics.map((item: string, index: number) => {
            return (
              <Text  key={index}>
                {item}
              </Text>
            )
          })}
        </Box>
      }
    </Box>
  )
}