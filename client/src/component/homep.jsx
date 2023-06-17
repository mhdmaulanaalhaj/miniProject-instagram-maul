import {
  Avatar,
  Flex,
  Box,
  Image,
  Icon,
  Button,
  Center,
} from "@chakra-ui/react";
import { SlOptions } from "react-icons/sl";
import snork1 from "../assets/snork1.jpg";
import saved from "../assets/saved.png";
import lampu from "../assets/lampu.jpg";
import pohon from "../assets/pohon.jpg";

import tag from "../assets/tag.png";

import setting from "../assets/setting.png";
import flag from "../assets/flag.png";
import { useNavigate } from "react-router-dom";
import { MdGridOn } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";

export default function HomeP() {
  const nav = useNavigate();
  return (
    <>
      <Flex
        top={"30"}
        position={"absolute"}
        // bgColor={"blue"}
        w={"100vw"}
        maxW={"717px"}
        h={"160px"}
        gap={"20px"}
        ml={"20px"}
        flexDir={"column"}
      >
        <Box display={"flex"} gap={"50px"}>
          <Box>
            <Avatar w={"150px"} h={"150px"} />
          </Box>
          <Box gap={"70px"}>
            <Box display={"flex"} alignItems={"center"} gap={"20px"}>
              <Box fontSize={"xl"}>mhdmaulanaalhaj</Box>
              <Button w={"120px"} h={"35px"} bgColor={"#efefef"}>
                Edit profile
              </Button>
              <Button w={"120px"} h={"35px"} bgColor={"#efefef"}>
                Ad tools
              </Button>
              <Image src={setting} w={"25px"} h={"25px"} color={"black"} />
            </Box>
            <Box display={"flex"} gap={"20px"} mt={"15px"}>
              <Box fontWeight={"bold"}>3</Box>
              <Box>posts</Box>
              <Box fontWeight={"bold"}>9,911</Box>
              <Box>followers</Box>
              <Box fontWeight={"bold"}>1,414</Box>
              <Box>following</Box>
            </Box>
            <Box mt={"10px"}>
              <Box fontSize={"small"}>MUHAMMAD MAULANA ALHAJ</Box>
              <Box fontSize={"small"}>Personal Blog</Box>
              <Image src={flag} w={"20px"} h={"15px"} mt={"5px"} />
            </Box>
          </Box>
        </Box>
        <Flex flexDir={"column"}>
          <hr
            style={{
              border: "1px solid rgb(203, 203, 203)",
              width: "717px",
            }}
          />
        </Flex>
        <Center gap={"50px"} h={"500px"}>
          <Box display={"flex"} alignItems={"center"} gap={"7px"}>
            <Icon w={"20px"} h={"20px"} as={MdGridOn} />
            <Box>POSTS</Box>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={"7px"}>
            <Image src={saved} w={"15px"} h={"15px"} />
            <Box>Saved</Box>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={"7px"}>
            <Image src={tag} w={"20px"} h={"20px"} />
            <Box>Tagged</Box>
          </Box>
        </Center>

        <Center gap={"5px"}>
          <Image src={lampu} w={"250px"} h={"250px"} />
          <Image src={snork1} w={"250px"} h={"250px"} />
          <Image src={pohon} w={"250px"} h={"250px"} />
        </Center>
        <Center textAlign={"center"} fontSize={"smaller"}>
          Meta About Blog Jobs Help API Privacy Terms Top accounts Locations
          Instagram Lite Contact uploading and non-users Meta Verified
        </Center>
        <Center fontSize={"smaller"}>
          {" "}
          English (UK) © 2023 Instagram from Meta
        </Center>
      </Flex>
    </>
  );
}
