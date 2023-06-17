import { Center, Flex } from "@chakra-ui/react";
import Navbar from "../component/navbar";
import HomeP from "../component/homep";

export default function HomeProfile() {
  return (
    <Center
      h={"100vh"}
      w={"100%"}
      // justifyContent={"center"}
      flexDirection={"column"}
    >
      <HomeP />
      <Navbar />
    </Center>
  );
}
