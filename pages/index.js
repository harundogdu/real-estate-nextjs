import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

export const Banner = ({
  imageURL,
  mainTitle,
  title,
  subtitle,
  description,
  descriptionLower,
  buttonName,
  buttonIsActive
}) => {
  return (
    <Flex alignItems={"center"} justifyContent={"center"}>
      <Box>
        <Image src={imageURL} alt="bannerImage" width="500px" height="300px" />
      </Box>
      <Box>
        <Flex flexDirection={"column"} gap={"10px"} p={"5"}>
          <Text size={"sm"} fontWeight={"bold"}>
            {mainTitle}
          </Text>
          <Heading as="h3" size={"lg"}>
            {title} <br /> {subtitle}
          </Heading>
          <Text size={"sm"}>
            {description} <br />
            {descriptionLower}
          </Text>
          <Button colorScheme={buttonIsActive ? "linkedin" : "gray"} size={"lg"} fontSize={"lg"}>
            {buttonName}
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default function Home() {
  return (
    <Flex width={"full"} minH={"100vh"} height="100%" alignItems={"center"} justifyContent={"center"} flexDirection={"column"} gap={"40px 0"}>
      <Banner
        imageURL={
          "https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
        }
        mainTitle={"RENT A HOME"}
        title={"Everyone"}
        subtitle={"Rental Homes for"}
        description={"Explore from Apartments, builder floors, villas"}
        descriptionLower={"and more"}
        buttonName={"Explore Renting"}
        buttonIsActive={false}
      />
      <Banner
        imageURL={
          "https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
        }
        mainTitle={"BUY A HOME"}
        title={"Find, Buy & Own Your"}
        subtitle={"Dream Home"}
        description={"Explore from Apartments, land, builder floors,"}
        descriptionLower={"villas and more"}
        buttonName={"Explore Buying"}
        buttonIsActive={true}
      />
    </Flex>
  );
}
