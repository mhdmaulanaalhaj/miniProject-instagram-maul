import { Flex, Box, Icon, Avatar, Image } from "@chakra-ui/react";
import { TiHome } from "react-icons/ti";
import { AiOutlineCompass } from "react-icons/ai";
import { TbSquareRoundedPlus } from "react-icons/tb";
import { GrCompass } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { MdSlowMotionVideo } from "react-icons/md";
import direct from "../assets/direct.png";
import { BiPaperPlane } from "react-icons/bi";

export default function Navbar() {
  const nav = useNavigate();
  return (
    <Flex
      // w={"100vw"}
      // height={"50px"}
      // minWidth={"767px"}
      maxW={"800px"}
      w={"100vw"}
      h="48px"
      display={"flex"}
      justifyContent={"space-around"}
      alignItems={"center"}
      bottom={"0"}
      position={"fixed"}
      border={"1px solid #e8e8e8"}
      bgColor={"white"}
    >
      <Box>
        <Icon
          as={TiHome}
          width={"30px"}
          height={"30px"}
          cursor={"pointer"}
          onClick={() => nav("/home")}
        />
      </Box>
      <Box>
        <Icon
          as={GrCompass}
          width={"30px"}
          height={"30px"}
          cursor={"pointer"}
        />
      </Box>
      <Box>
        <Icon
          as={MdSlowMotionVideo}
          width={"30px"}
          height={"30px"}
          cursor={"pointer"}
        />
      </Box>
      <Box>
        <Icon
          as={TbSquareRoundedPlus}
          width={"30px"}
          height={"30px"}
          cursor={"pointer"}
        />
      </Box>
      <Box>
        <Icon
          as={BiPaperPlane}
          width={"30px"}
          height={"30px"}
          cursor={"pointer"}
        />
      </Box>
      <Box>
        <Avatar
          width={"30px"}
          height={"30px"}
          cursor={"pointer"}
          onClick={() => nav("/profile")}
        />
      </Box>
    </Flex>
  );
}
