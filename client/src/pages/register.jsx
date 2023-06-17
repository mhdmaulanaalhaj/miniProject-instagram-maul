import * as Yup from "yup";
import { useFormik } from "formik";
import YupPassword from "yup-password";
import {
  Box,
  Container,
  Button,
  Center,
  Flex,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
  Select,
  AbsoluteCenter,
} from "@chakra-ui/react";
import { useState } from "react";
import { api } from "../api/api";
import { TbAlertCircleFilled } from "react-icons/tb";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Divider } from "@chakra-ui/react";
import { AiFillFacebook } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

// import { useDispatch } from "react-redux";
import Instagram_logo from "../assets/Instagram_logo.svg.png";

export default function Register() {
  const toast = useToast();
  const nav = useNavigate();
  const [seePassword, setSeePassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  YupPassword(Yup);
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("You need to enter your email.")
        .email("Email is invalid!(example@email.com)"),
      username: Yup.string().required("Enter a username for your profile."),
      password: Yup.string()
        .required("You need to enter your password")
        .min(8, "Min.password: 8 chauppercase")
        .minLowercase(1, "password must contain at least 1 lower case letter")
        .minUppercase(1, " must contain at least 1 upper case letter")
        .minNumbers(1, "password must contain at least 1 number")
        .minSymbols(1, "password must contain at least 1 symbol"),
      ConfirmPassword: Yup.string()
        .required("Re-enter your password")
        .oneOf([Yup.ref("password")], "Password do not match"),
    }),
    onSubmit: async () => {
      setIsLoading(true);
      const { username, email, password } = formik.values;
      const user = { username, email, password };
      await api
        .post("/user", user)
        .then((res) => {
          console.log(res.data);
          toast({
            title: res.data.message,
            status: "success",
          });
          nav("/login");
        })
        .catch((err) => {
          toast({
            title: err.data.message,
            status: "error",
          });
        });
    },
  });

  function inputHandler(event) {
    const { value, id } = event.target;
    formik.setFieldValue(id, value);
  }
  return (
    <>
      <Center>
        <Center
          w={"100vw"}
          h={"800px"}
          minW={"175px"}
          maxW={"400px"}
          // justifyContent={"space-between"}
          flexDir={"column"}
          border={"1px solid #e8e8e8"}
          marginTop={"10px"}
        >
          <Box>
            <Center>
              <Image
                w={"175px"}
                h={"60px"}
                src={Instagram_logo}
                marginTop={"30px"}
                // alignItems={"center"}
              />
            </Center>
            <Center>
              <Box textAlign={"center"} w={"300px"}>
                Sign up to see photos and videos from your friends.
              </Box>
            </Center>

            <Center
              display={"flex"}
              flexDir={"column"}
              alignItems={"center"}
              marginTop={"10px"}
            >
              <Button
                borderRadius={"10px"}
                fontSize={"small"}
                width={"300px"}
                marginTop={"15px"}
                bgColor={"#4cb5f9"}
                color={"white"}
                mb={"10px"}
                gap={"5px"}
              >
                <AiFillFacebook />
                Login with Facebook
              </Button>
              <Center marginBottom={"20px"}>
                <hr
                  style={{
                    border: "1px solid rgb(203, 203, 203)",
                    width: "125px",
                    marginTop: "30px",
                  }}
                />
                <span
                  style={{
                    color: "black",
                    fontWeight: "450",
                    margin: "30px 10px 0 10px",
                  }}
                >
                  OR
                </span>
                <hr
                  style={{
                    border: "1px solid rgb(203, 203, 203)",
                    width: "125px",
                    marginTop: "30px",
                  }}
                />
              </Center>
              <Center display={"flex"} flexDir={"column"} gap={"5px"}>
                <Box>
                  <Input
                    onChange={inputHandler}
                    width={"300px"}
                    fontSize={"small"}
                    placeholder="Mobile number or email address"
                    id="email"
                    borderRadius={"none"}
                  />
                  <Box w={"100%"} color={"red"} h={"30px"}>
                    {formik.errors.email ? (
                      <>
                        <Icon as={TbAlertCircleFilled} /> {formik.errors.email}
                      </>
                    ) : (
                      ""
                    )}
                  </Box>
                </Box>

                <Box>
                  <Input
                    onChange={inputHandler}
                    id="username"
                    width={"300px"}
                    fontSize={"small"}
                    placeholder="Username"
                    borderRadius={"none"}
                  />
                  <Box w={"100%"} color={"red"} h={"30px"}>
                    {formik.errors.username ? (
                      <>
                        <Icon as={TbAlertCircleFilled} />{" "}
                        {formik.errors.username}
                      </>
                    ) : (
                      ""
                    )}
                  </Box>
                </Box>
                <Box>
                  <InputGroup w={"100%"}>
                    <Input
                      onChange={inputHandler}
                      id="password"
                      type={seePassword ? "text" : "password"}
                      placeholder="Password"
                      borderRadius={"none"}
                      focusBorderColor="none"
                      fontSize={"small"}
                      width={"300px"}
                      marginTop={"5px"}
                    />
                    <InputRightElement h={"38px"}>
                      <Icon
                        mt={"12px"}
                        as={seePassword ? AiOutlineEyeInvisible : AiOutlineEye}
                        onClick={() => setSeePassword(!seePassword)}
                      />
                    </InputRightElement>
                  </InputGroup>
                  <Box w={"100%"} color={"red"} h={"38px"}>
                    {formik.errors.password ? (
                      <>
                        <Icon as={TbAlertCircleFilled} />{" "}
                        {formik.errors.password}
                      </>
                    ) : (
                      ""
                    )}
                  </Box>
                </Box>
                <Box>
                  <Input
                    onChange={inputHandler}
                    id="ConfirmPassword"
                    width={"300px"}
                    fontSize={"small"}
                    type={seePassword ? "text" : "password"}
                    placeholder="Conform password"
                    borderRadius={"none"}
                  />
                  <Box w={"100%"} color={"red"} h={"30px"}>
                    {formik.errors.ConfirmPassword ? (
                      <>
                        <Icon as={TbAlertCircleFilled} />{" "}
                        {formik.errors.ConfirmPassword}
                      </>
                    ) : (
                      ""
                    )}
                  </Box>
                </Box>
              </Center>
              <Box
                textAlign={"center"}
                mt={"10px"}
                fontSize={"small"}
                w={"300px"}
              >
                People who use our service may have uploaded your contact
                information to Instagram. Learn more
              </Box>
              <Box
                fontSize={"small"}
                textAlign={"center"}
                mt={"15px"}
                w={"300px"}
              >
                By signing up, you agree to our Terms, Privacy Policy and
                Cookies Policy.
              </Box>
              <Button
                borderRadius={"10px"}
                fontSize={"small"}
                width={"300px"}
                marginTop={"15px"}
                bgColor={"#4cb5f9"}
                color={"white"}
                isLoading={isLoading}
                onClick={() => {
                  setIsLoading(true);
                  setTimeout(() => {
                    setIsLoading(false);
                    formik.handleSubmit();
                  }, 2000);
                }}
              >
                Sign Up
              </Button>
            </Center>
          </Box>
        </Center>
      </Center>

      <Flex justifyContent={"center"}>
        <Center
          width={"400px"}
          height={"70px"}
          border={"1px solid #e8e8e8"}
          textAlign={"center"}
          mt={"10px"}
          gap={"5px"}
        >
          <Box textAlign={"center"}>Have an account?</Box>
          <Box
            cursor={"pointer"}
            color={"#7bd7fc"}
            onClick={() => nav("/login")}
          >
            Log in
          </Box>
        </Center>
      </Flex>
    </>
  );
}
