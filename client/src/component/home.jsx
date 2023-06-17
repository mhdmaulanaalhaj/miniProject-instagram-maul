import {
  Avatar,
  Flex,
  Box,
  Image,
  Icon,
  Input,
  Center,
} from "@chakra-ui/react";
import { SlOptions } from "react-icons/sl";
import snork1 from "../assets/snork1.jpg";
import lampu from "../assets/lampu.jpg";
import pohon from "../assets/pohon.jpg";
import Instagram_logo from "../assets/Instagram_logo.svg.png";
import { AiOutlinePlusSquare } from "react-icons/ai";

import saved from "../assets/saved.png";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";

export default function HomeIg() {
  return (
    <>
      <Center
        bg={"white"}
        w={"100vw"}
        h="44px"
        border={"1px solid #dedede"}
        zIndex={1}
        position={"fixed"}
        top={0}
      >
        <Flex
          w={"100vw"}
          maxW={"470px"}
          h={"44px"}
          justifyContent={"space-between"}
          alignItems={"center"}
          px={3}
        >
          <Box w={"100px"}>
            <Image src={Instagram_logo} />
          </Box>

          <Flex gap={5}>
            <Box mt={1}>
              <Icon w={"27px"} h={"27px"} as={AiOutlineHeart} />
            </Box>
          </Flex>
        </Flex>
        {/* </Flex> */}
      </Center>
      <Flex
        w={"100vw"}
        maxW={"470px"}
        h={"100vh"}
        mt={"120px"}
        position={"absolute"}
        flexDir={"column"}
      >
        <Flex>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            width={"470px"}
            alignItems={"center"}
            gap={"10px"}
          >
            <Box>
              <Avatar />
            </Box>
            <Box ml={"-50%"} fontWeight={"bold"}>
              mhdmaulanaalhaj
            </Box>
            <Box>
              <SlOptions />
            </Box>
          </Box>
        </Flex>
        <Flex>
          <Image
            src={snork1}
            width={"470px"}
            height={"600px"}
            mt={"10px"}
            borderRadius={"5px"}
          />
        </Flex>
        <Flex
          display={"flex"}
          alignItems={"center"}
          // justifyContent={"space-between"}
          gap={"17px"}
          mt={"10px"}
        >
          <Icon as={AiOutlineHeart} w={"25px"} h={"25px"} />
          <Icon as={FaRegComment} w={"24px"} h={"24px"} />
          <Icon as={FaRegPaperPlane} w={"20px"} h={"20px"} />
          <Image src={saved} w={"20px"} h={"20px"} ml={"350px"} />
        </Flex>
        <Flex mt={"10px"} fontWeight={"bold"}>
          560,280 likes
        </Flex>
        <Flex gap={"5px"}>
          <Flex mt={"5px"} fontWeight={"bold"}>
            mhdmaulanaalhaj
          </Flex>
          <Flex mt={"5px"}>Santai kaya di pantai, selow kaya di pulaow</Flex>
        </Flex>
        <Flex mt={"5px"}>View all 128,357 comments </Flex>
        <Input
          mt={"7px"}
          border={"none"}
          // mt={"10px"}
          h={"30px"}
          placeholder="Add a comments..."
          variant="flushed"
        />

        {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
        <Flex mt={"30px"}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            width={"470px"}
            alignItems={"center"}
            gap={"10px"}
          >
            <Box>
              <Avatar />
            </Box>
            <Box ml={"-50%"} fontWeight={"bold"}>
              mhdmaulanaalhaj
            </Box>
            <Box>
              <SlOptions />
            </Box>
          </Box>
        </Flex>
        <Flex>
          <Image
            src={lampu}
            width={"470px"}
            height={"600px"}
            mt={"10px"}
            borderRadius={"5px"}
          />
        </Flex>
        <Flex
          display={"flex"}
          alignItems={"center"}
          // justifyContent={"space-between"}
          gap={"10px"}
          mt={"10px"}
          width={"470px"}
        >
          <Icon as={AiOutlineHeart} w={"25px"} h={"25px"} />
          <Icon as={FaRegComment} w={"24px"} h={"24px"} />
          <Icon as={FaRegPaperPlane} w={"20px"} h={"20px"} />
          <Image src={saved} w={"20px"} h={"20px"} ml={"350px"} />
        </Flex>
        <Flex mt={"10px"} fontWeight={"bold"}>
          560,280 likes
        </Flex>
        <Flex gap={"5px"}>
          <Flex mt={"5px"} fontWeight={"bold"}>
            mhdmaulanaalhaj
          </Flex>
          <Flex mt={"5px"}>Santai kaya di pantai, selow kaya di pulaow</Flex>
        </Flex>
        <Flex>View all 128,357 comments </Flex>
        <Input
          mt={"7px"}
          border={"none"}
          // mt={"10px"}
          h={"30px"}
          placeholder="Add a comments..."
          variant="flushed"
        />

        {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}

        <Flex mt={"30px"}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            width={"470px"}
            alignItems={"center"}
            gap={"10px"}
          >
            <Box>
              <Avatar />
            </Box>
            <Box ml={"-50%"} fontWeight={"bold"}>
              mhdmaulanaalhaj
            </Box>
            <Box>
              <SlOptions />
            </Box>
          </Box>
        </Flex>
        <Flex>
          <Image
            src={pohon}
            width={"470px"}
            height={"600px"}
            mt={"10px"}
            borderRadius={"5px"}
          />
        </Flex>
        <Flex
          display={"flex"}
          alignItems={"center"}
          // justifyContent={"space-between"}
          gap={"10px"}
          mt={"10px"}
        >
          <Icon as={AiOutlineHeart} w={"25px"} h={"25px"} />
          <Icon as={FaRegComment} w={"24px"} h={"24px"} />
          <Icon as={FaRegPaperPlane} w={"20px"} h={"20px"} />
          <Image src={saved} w={"20px"} h={"20px"} ml={"350px"} />
        </Flex>
        <Flex mt={"10px"} fontWeight={"bold"}>
          560,280 likes
        </Flex>
        <Flex gap={"5px"}>
          <Flex mt={"5px"} fontWeight={"bold"}>
            mhdmaulanaalhaj
          </Flex>
          <Flex mt={"5px"}>Santai kaya di pantai, selow kaya di pulaow</Flex>
        </Flex>
        <Flex>View all 128,357 comments </Flex>
        <Input
          mt={"7px"}
          border={"none"}
          // mt={"10px"}
          h={"30px"}
          placeholder="Add a comments..."
          variant="flushed"
        />
      </Flex>
    </>
  );
}
