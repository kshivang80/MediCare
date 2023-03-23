import React from 'react'
//import "./Home.module.css"
import * as homeStyles from "./Home.module.css";
import { Box, SimpleGrid, Text, Button, Grid, GridItem, Image, Input } from "@chakra-ui/react"
import { RiLungsLine } from 'react-icons/ri';
import { MdKeyboardArrowRight } from "react-icons/md"
import Review from './Review';

const Home = () => {

    return (
        <div className={homeStyles.mainDiv}>

            <Box mt='55px'  h="auto">
                <Grid w='80%' h="auto" margin="auto"
                    gridTemplateColumns={{
                        base: "repeat(1,1fr)",
                        md: "repeat(1,1fr)",
                        lg: "repeat(2,1fr)",
                    }}
                    gap={20}
                >
                    <GridItem  height='650px'>
                        <Box  w="100%" h="auto" mt="110px">


                            <Text fontSize="24px" fontWeight="700" fontFamily="sans-serif" color="#002348">Welcome to MediCare+ Clinic</Text>



                            <Text fontSize="44px" mt="15px" fontWeight="700" fontFamily="sans-serif" color="#003B79">Best Specialists</Text>


                            <Box fontSize='18px' mt="15px" fontFamily='sans-serif' fontStyle="normal">
                                <Text >
                                    We are on the leading edge of cancer care.Providing the full
                                </Text>
                                <Text mt="5px" >
                                    continuum of cancer treatments and supportive care service in a
                                </Text>
                                <Text mt="5px">
                                    single convenient location
                                </Text>

                            </Box>
                            <Grid mt='40px'
                                gridTemplateColumns={{
                                    base: "repeat(1,1fr)",
                                    md: "repeat(2,1fr)",
                                    lg: "repeat(2,1fr)",
                                }}
                                gap='10'
                            >
                                <Button variant='solid' as='b' w="240px" h='55px' borderRadius="30px" colorScheme='blue' color='white' border='1px solid #007FF4' fontFamily="sans-serif">Make an Appointment</Button>
                                <Button variant='solid' as='b' w="240px" h='55px' borderRadius="30px" color='#007DF2' bg='white' border='1px solid white' fontFamily="sans-serif" boxShadow="0px 10px 50px 25px rgba(0, 59, 121, 0.0725798)">Departments</Button>

                            </Grid>






                        </Box>

                    </GridItem>
                    <GridItem border='1px solid #EBEEFF' height='650px' borderRadius="50px" bg="#EBEEFF">

                    </GridItem>


                </Grid>

            </Box>

            <Box h='auto' w='100%'  mt='150px'>
                <Box textAlign='center'>
                    <Text fontSize="50px" color='#003B79' fontFamily="sans-serif" fontWeight="700" >Our Services</Text>
                    <Text mt='10px' fontWeight='500' color='#002348' fontSize="23px" fontFamily="sans-serif">We provide the most full medical services, so every person could</Text>
                    <Text mt='5px' fontWeight='500' color='#002348' fontSize="23px" fontFamily="sans-serif">heave the oppurtunity to receive qualitative medical help</Text>

                </Box>

                <Box w='75%' margin='auto'>
                    <Grid
                        gridTemplateColumns={{
                            base: "repeat(1,1fr)",
                            md: "repeat(2,1fr)",
                            lg: "repeat(4,1fr)",
                        }}
                        gap={10} mt="100px" className='MainItem'>
                        <GridItem h='300px'  boxShadow="0px 10px 50px 25px rgba(0, 59, 121, 0.0725798)" borderRadius="20px">
                            <Box ml='30px'  h='150px' paddingTop="10px" mt="10px" w='55%'>
                                {/* <FaTooth  style={{height:"50px",width:"80px",color:"blue",border:"1px solid red"}} /> */}
                                <Image src="https://cdn-icons-png.flaticon.com/128/819/819280.png" h='100%' />

                            </Box>
                            <Text mt="15px" ml='30px' fontSize="24px" fontWeight="700" color="#002348">Dental Care</Text>

                        </GridItem>
                        <GridItem bg='#007EF3' h='323px'  boxShadow="0px 10px 50px 25px rgba(0, 59, 121, 0.0725798)" borderRadius="20px">
                            <Box ml='30px'  h='170px' w='55%'>
                                {/* <FaTooth  style={{height:"50px",width:"80px",color:"blue",border:"1px solid red"}} /> */}
                                {/* <Image src="https://cdn-icons-png.flaticon.com/512/9774/9774039.png" h='100%' bg='white'/> */}
                                <RiLungsLine style={{ height: "170px", width: "135px", color: "white", }} />

                            </Box>
                            <Text mt="15px" ml='30px' fontSize="24px" fontWeight="700" color="white">Dental Care</Text>
                            <Box mt="40px" display="flex" justifyContent="space-around">
                                <Text color='white' fontWeight="600">LEARN MORE </Text>
                                <MdKeyboardArrowRight style={{ width: "30px", height: "30px", color: "white" }} />
                            </Box>

                        </GridItem>
                        <GridItem h='300px'  boxShadow="0px 10px 50px 25px rgba(0, 59, 121, 0.0725798)" borderRadius="20px">
                            <Box ml='30px'  h='150px' paddingTop="10px" mt="10px" w='55%'>
                                {/* <FaTooth  style={{height:"50px",width:"80px",color:"blue",border:"1px solid red"}} /> */}
                                <Image src="https://cdn-icons-png.flaticon.com/512/7342/7342548.png" h='100%' />

                            </Box>
                            <Text mt="15px" ml='30px' fontSize="24px" fontWeight="700" color="#002348">Neurological</Text>

                        </GridItem>
                        <GridItem h='300px'  boxShadow="0px 10px 50px 25px rgba(0, 59, 121, 0.0725798)" borderRadius="20px">
                            <Box ml='30px'  h='150px' paddingTop="10px" mt="10px" w='55%' >
                                {/* <FaTooth  style={{height:"50px",width:"80px",color:"blue",border:"1px solid red"}} /> */}
                                <Image src="https://cdn-icons-png.flaticon.com/128/4105/4105609.png" h='100%' />

                            </Box>
                            <Text mt="15px" ml='30px' fontSize="24px" fontWeight="700" color="#002348">Prediatrics</Text>

                        </GridItem>

                    </Grid>

                </Box>



            </Box>


            <Box h="auto"  mt='240px' w='100%'>
                <div width='90%' m='auto' className={homeStyles.container}>
                    <div className={homeStyles.box} border="1px solid red" h='800px'  >
                        <Box  w="100%" h="auto" mt="280px">





                            <Text fontSize="50px" mt="10px" fontWeight="700" fontFamily="sans-serif" color="#003B79">Clinic With Innovative</Text>


                            <Box fontSize='18px' mt="30px" fontFamily='sans-serif' fontStyle="normal">
                                <Text color="#002348">
                                    We provide the most full medical services, so every person could
                                </Text>
                                <Text color="#002348" mt='10px'>
                                    heave the oppurtunity to receive qualitative medical help.
                                </Text>


                            </Box>
                            <Grid mt='40px'
                                gridTemplateColumns={{
                                    base: "repeat(1,1fr)",
                                    md: "repeat(2,1fr)",
                                    lg: "repeat(2,1fr)",
                                }}
                                gap='10'
                            >
                                <Button variant='solid' as='b' w="186px" h='55px' borderRadius="30px" colorScheme='blue' color='white' border='1px solid #007FF4' fontFamily="sans-serif">Learn More</Button>

                            </Grid>






                        </Box>


                    </div>
                    <div border="1px solid red" h='800px' className={homeStyles.box} >
                        <Box display={'flex'}>
                            <Box mt="120px" w="50%">
                                <SimpleGrid columns={1} spacing={40} >
                                    <Box h='250px' w="90%" m='auto ' textAlign="center" boxShadow="0px 10px 50px 25px rgba(0, 59, 121, 0.0725798)" borderRadius="20px">
                                        <Box w="80%" h="80%" mt="-110px" ml="25px" textAlign="center">
                                            <Image src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png" w="100%" h="100%" />

                                        </Box>
                                        <Text style={{ fontFamily: "sans-serif" }} mt="50px" fontSize="24px" fontWeight="700" color="#002348">Qualified Doctors</Text>
                                    </Box>
                                    <Box  h='250px' w="90%" m='auto' textAlign="center" mt="-20px" boxShadow="0px 10px 50px 25px rgba(0, 59, 121, 0.0725798)" borderRadius="20px">
                                        <Box w="80%" h="80%" mt="-110px" ml="25px">
                                            <Image src="https://cdn-icons-png.flaticon.com/512/2869/2869684.png" w="100%" h="100%" />

                                        </Box>
                                        <Text style={{ fontFamily: "sans-serif" }} mt="45px" fontSize="24px" fontWeight="700" color="#002348">24 Hours Service</Text>

                                    </Box>

                                </SimpleGrid>


                            </Box>
                            <Box w="50%" >
                                <Box border="1px solid white" h='250px' w="90%" m='auto ' textAlign="center" mt="300px" boxShadow="0px 10px 50px 25px rgba(0, 59, 121, 0.0725798)" borderRadius="20px">
                                    <Box w="80%" h="80%" mt="-110px" ml="25px" textAlign="center">
                                        <Image src="https://cdn-icons-png.flaticon.com/512/6401/6401411.png" w="100%" h="100%" />

                                    </Box>
                                    <Text style={{ fontFamily: "sans-serif" }} mt="50px" fontSize="24px" fontWeight="700" color="#002348">Emergency Care</Text>
                                </Box>

                            </Box>

                        </Box>




                    </div>



                </div>




            </Box>


            {/* We Have The Best Specialist */}

            <Box h='auto' w='100%'  mt='300px'>
                <Box textAlign='center'>
                    <Text fontSize="50px" color='#003B79' fontFamily="sans-serif" fontWeight="700" >We Have The Best Specialist</Text>
                    <Text mt='10px' fontWeight='500' color='#002348' fontSize="23px" fontFamily="sans-serif">We have a wide experience in experience design and strategy,</Text>
                    <Text mt='5px' fontWeight='500' color='#002348' fontSize="23px" fontFamily="sans-serif"> with locally-rooted knowledge.</Text>

                </Box>

                <Box w='80%' margin='auto'>
                    <Grid
                        gridTemplateColumns={{
                            base: "repeat(1,1fr)",
                            md: "repeat(2,1fr)",
                            lg: "repeat(4,1fr)",
                        }}
                        gap={8} mt="100px" className='MainItem'>
                        <GridItem h='450px'  boxShadow="0px 10px 50px 25px rgba(0, 59, 121, 0.0725798)" borderRadius="20px" overflow={"hidden"}>
                            <Box  h='72%' w="100%" bg="#AED3E2" borderTopLeftRadius="20px" borderTopRightRadius="20px">


                            </Box>
                            <Text mt="15px" ml='30px' fontSize="24px" fontWeight="700" color="#002348" >Dr. Awaatif Al</Text>

                            <Text ml='30px' fontSize="18px" fontWeight="400" fontStyle="normal" fontFamily={"sans-serif"} color="#002348">Dental Care</Text>

                        </GridItem>
                        <GridItem h='450px'  boxShadow="0px 10px 50px 25px rgba(0, 59, 121, 0.0725798)" borderRadius="20px">
                            <Box  h='72%' w="100%" bg="#AED3E2" borderTopLeftRadius="20px" borderTopRightRadius="20px">


                            </Box>
                            <Text mt="15px" ml='30px' fontSize="24px" fontWeight="700" color="#002348" >Dr. Filipa Gaspar</Text>

                            <Text ml='30px' fontSize="18px" fontWeight="400" fontStyle="normal" fontFamily={"sans-serif"} color="#002348">Cardiology</Text>

                        </GridItem>
                        <GridItem h='450px'  boxShadow="0px 10px 50px 25px rgba(0, 59, 121, 0.0725798)" borderRadius="20px" overflow={"hidden"}>
                            <Box  h='72%' w="100%" bg="#AED3E2" borderTopLeftRadius="20px" borderTopRightRadius="20px">


                            </Box>
                            <Text mt="15px" ml='30px' fontSize="24px" fontWeight="700" color="#002348" >Dr. Sukhmeet Gorae</Text>

                            <Text ml='30px' fontSize="18px" fontWeight="400" fontStyle="normal" fontFamily={"sans-serif"} color="#002348">Neurological</Text>

                        </GridItem>
                        <GridItem h='450px'  boxShadow="0px 10px 50px 25px rgba(0, 59, 121, 0.0725798)" borderRadius="20px">
                            <Box  h='72%' w="100%" bg="#AED3E2" borderTopLeftRadius="20px" borderTopRightRadius="20px">


                            </Box>
                            <Text mt="15px" ml='30px' fontSize="24px" fontWeight="700" color="#002348" >Dr. Siri Jakobsson</Text>

                            <Text ml='30px' fontSize="18px" fontWeight="400" fontStyle="normal" fontFamily={"sans-serif"} color="#002348">Prediatrics</Text>

                        </GridItem>

                    </Grid>

                </Box>



            </Box>
            {/* Review Section */}
             <Box mt="230px">
             <Review />

             </Box>
           


            {/* News Letter Subscription */}

            <Box w='100%' h='520px'   mt="130px">
                <Box w='85%' h='94%' bg="#007FF4" m='auto' borderRadius="30px">
                    <Box textAlign='center'>
                        <Text paddingTop={'20px'} fontSize="48px" color='#FFFFFF' fontFamily="sans-serif" fontWeight="600" >Subscribe to Newsletter</Text>
                        <Text mt='15px' ml='70px' fontWeight='500' color='#FFFFFF' fontSize="21px" fontFamily="sans-serif">We have a wide experience in experience design and strategy,</Text>

                    </Box>

                    <Box mt='80px'>

                        <Box m="auto" w="70%" h='130px' border='1px solid pink' bg="white" display='flex' borderRadius="15px" justifyContent="space-around">
                        <Input w="65%" h="60%" variant='filled' placeholder='Enter Your Email address' fontSize={"20px"} borderRadius="15px" mt="20px" />
                        <Button  h="75px" w="20%" colorScheme='telegram' borderRadius="50px" mt="20px" color="white" fontFamily={"sans-serif"} overflow="hidden" textOverflow="ellipsis">Send Now</Button>


                        </Box>


                    </Box>



                </Box>

            </Box>

            {/* Footer Part */}

           





        </div>
    )
}

export default Home