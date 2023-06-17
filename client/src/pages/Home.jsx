import { Center, Flex } from "@chakra-ui/react";
import Navbar from "../component/navbar";
import HomeIg from "../component/home";

export default function Home() {
  return (
    <Center h={"100vh"} w={"100%"} flexDirection={"column"}>
      <HomeIg />
      <Navbar />
    </Center>
  );
}
