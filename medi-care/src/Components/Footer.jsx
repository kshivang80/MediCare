import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, animateScroll } from "react-scroll";
import "./Footer.css"
import MediaQuery from "react-responsive";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, Box, Stack, Text } from "@chakra-ui/react";
import { BsFacebook, BsInstagram, BsYoutube, BsTwitter } from "react-icons/bs";
import {FaFacebookF} from "react-icons/fa"
import {GrGoogle} from "react-icons/gr"

const Footer = () => {




  return (
    <div className="container" >
      <MediaQuery minWidth={992}>
        <Box w="85%" h="80px"  margin='auto' display={"flex"} justifyContent="space-between">
          <Box w="25%" >
            <Box marginTop="7px" >
            <a href="/" className="logo" style={{ color: "#0073FF", fontFamily: "sans-serif", fontWeight: "bold", fontSize: '34px',  }}>
              Medi
            </a>
            <a style={{ color: "#FF9F6A", fontFamily: "sans-serif", fontWeight: "bold" ,fontSize: '34px' }}>Care+</a>

            </Box>
           
          </Box>
          <Box w="35%"  display="flex" justifyContent="space-between">
              <Text padding="20px" fontSize={"18px"} fontWeight="600" fontFamily="sans-serif" color="#0073FF">Home</Text>
              <Text padding="20px" fontSize={"18px"} fontWeight="400" fontFamily="sans-serif" color="#0073FF">About</Text>
              <Text padding="20px" fontSize={"18px"} fontWeight="400" fontFamily="sans-serif" color="#0073FF">Services</Text>
              <Text padding="20px" fontSize={"18px"} fontWeight="400" fontFamily="sans-serif" color="#0073FF">News</Text>

          </Box>

        </Box>


        <Box w="100%" h="245px"  bg="#ECF4FF" mt="20px">
             <Box  w="85%" h="245px" margin='auto' border="1px solid #ECF4FF" >
             
             <Stack direction="row" gap="15px" mt="30px">
                 <Box h='54px' w='51px'  borderRadius={"50%"} ml="5px" bg="white" >
                   <FaFacebookF style={{color:"#7F7F7F",height:"20px",width:"14px", marginTop:"15px" ,marginLeft:"18px",}}/>
                 </Box>
                 <Box h='54px' w='51px'  borderRadius={"50%"}  bg="white">
                   <GrGoogle style={{color:"#7F7F7F",height:"28px",width:"20px", marginTop:"12px" ,marginLeft:"16px",}}/>
                 </Box>
                 <Box h='54px' w='51px'  borderRadius={"50%"}  bg="white">
                       <BsTwitter style={{color:"#7F7F7F",height:"28px",width:"20px", marginTop:"12px" ,marginLeft:"16px",}}/>
                 </Box>
            </Stack>

            <Box w="213px" mt="20px" ml="5px">
              <Text fontSize={"14px"} fontWeight="600" color="#667C94">©2020 PodPayment - 2020</Text>
            </Box>
                

             </Box>

        </Box>

      </MediaQuery>


       {/* -------------------------------------------------Media Queries-------------------------------------------- */}

       <MediaQuery minWidth={768} maxWidth={991}>
        <Box w="100%" h="245px"   bg="#ECF4FF" >
        <Accordion allowToggle w="85%" m="auto">
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize="20px"
                  fontWeight="600"
                  color="#0073FF"
                  >
                  Home
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
          
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize="20px"
                  fontWeight="600"
                  color="#0073FF">
                 About
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
           
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize="20px"
                  fontWeight="600"
                  color="#0073FF">
                 Services
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
           
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize="20px"
                  fontWeight="600"
                  color="#0073FF">
                 News
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
           
          </AccordionItem>

          
        </Accordion>


        </Box>
        
      </MediaQuery>

    </div>
  );
};


;

export default Footer