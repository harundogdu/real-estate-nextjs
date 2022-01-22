import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Property from "../components/Property";
import { baseUrl, estateApi } from "../services/estateApi";

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
        <Image src={imageURL} alt="bannerImage" width="600px" height="350px" />
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

export default function Home({ forRent, forSale }) {
  console.log(forRent);
  console.log(forSale);
  return (
    <>
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

      <Flex flexWrap="wrap" alignItems={"center"} justifyContent={"center"} gap={"20px"}>
        {
          forRent.map(item => {
            return <Property key={item.id} item={item} />
          })
        }
      </Flex>

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
      <Flex flexWrap="wrap" alignItems={"center"} justifyContent={"center"} gap={"20px"}>
        {
          forSale.map(item => {
            return <Property key={item.id} item={item} />
          })
        }
      </Flex>
    </>
  );
}

export async function getStaticProps() {
  const forRent = await estateApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);
  const forSale = await estateApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);

  return {
    props: {
      forRent: forRent.hits,
      forSale: forSale.hits
    }
  }

}
