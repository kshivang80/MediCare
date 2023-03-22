import React, { useEffect, useState } from 'react'
import "./Review.css"
import axios from "axios"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings2 } from './ResponsiveCard';
import { Avatar, Box, Image, SkeletonCircle, SkeletonText, Text } from '@chakra-ui/react';
import coma from "../images/coma.png"

const Review = () => {
    const [data, setData] = useState([])




    useEffect(() => {

        axios.get(`https://admin.tomedes.com/api/v1/get-reviews?page=1`)
            .then((res) => {
                setData(res.data.data)
                //console.log(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])




    return (
        <div style={{ height: "600px" }}>

            <Box>
                <Box w="82%" m="auto" paddingTop="10px">
                    <Text fontSize="47px" color='#003B79' fontFamily="sans-serif" fontWeight="700" >What Our Customers Say</Text>


                </Box>

            </Box>

            {
            data.length === 0 ?
                <Box padding='6' boxShadow='lg' bg='white' w="80%" m="auto">
                    <SkeletonCircle size='20' />
                    <SkeletonText mt='4' noOfLines={8} spacing='4' skeletonHeight='3' />
                </Box>

              :
             <div className="Slide2" style={{ marginTop: "50px" }}>
                <Slider {...settings2}>
                    {data.length>0 && data.map((item) => (
                        <div className="Slider-card" >
                           
                            <Box border="1px solid white" h='83px' borderRadius="50%" w="83px" bg="#007FF4" ml="89%" mt="" textAlign="center">
                               
                                <Image src={coma} w="30%" h="30%" mt="35px" ml="15px"/>
                            </Box>
                           
                            <Box borderRadius={"30px"} w="100%"  h="294px" paddingTop="70px" mt="-60px" boxShadow="0px 10px 50px 25px rgba(0, 59, 121, 0.0725798)">
                                <Box mt="25%" w="80%" m="auto" h="110px" > 
                                    <Text color="#002348" fontSize="20px" fontWeight={"400"} noOfLines={[1, 2, 3]}>
                                      {item.Reviews}
                                    </Text>
                                </Box>
                                <Box w="80%" m="auto" h="auto" display="flex" paddingTop="10px">
                                    <Avatar h="65px " w="65px" src="https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?cs=srgb&dl=pexels-pixabay-36029.jpg&fm=jpg" />
                                    <Box ml="30px">
                                    <Text color="#002348" fontSize="24px" fontWeight={"600"} fontFamily="sans-serif">{item.Name}</Text>
                                     <Text fontSize="18px" fontWeight={"400"} color="#002348">Patient</Text>

                                    </Box>
                                </Box>
                                

                            </Box>
                        </div>
                    ))}
                </Slider>
            </div> 

            
            }



        </div>
    )
}

export default Review