import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, animateScroll } from "react-scroll";

const Navbar = () => {
 

    

    return (
      <Container>
        <header
         
          className="header"
          style={{ backgroundColor: `white` }}
        >
          <a href="/" className="logo" style={{color:"#0073FF",fontFamily:"sans-serif",fontWeight:"bold"}}>
           Medi <a style={{color:"#FF9F6A",fontFamily:"sans-serif",fontWeight:"bold"}}>Care+</a>
          </a>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <Link
                activeClass="active"
                to="/"
                onClick={() => animateScroll.scrollToTop()}
                spy={true}
                smooth={true}
                style={{cursor:"pointer",color:"#0073FF",fontFamily:"sans-serif"}}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="about"
                
                spy={true}
                smooth={true}
                style={{cursor:"pointer",color:"#0073FF",fontFamily:"sans-serif"}}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="service"
              
                spy={true}
                smooth={true}
                style={{cursor:"pointer",color:"#0073FF",fontFamily:"sans-serif"}}
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="News"
               
                spy={true}
                smooth={true}
                style={{cursor:"pointer",color:"#007FF4",fontFamily:"sans-serif"}}

              >
                News
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="contact"
                to="contact"
               
                spy={true}
                smooth={true}
               
                style={{cursor:"pointer",color:"white",fontFamily:"sans-serif",backgroundColor:"#007FF4",borderRadius:"55px",height:"0px",width:"140px",paddingBottom:"35px",paddingRight:"-10px"}}
              >
               
                Contact
               
               
              </Link>
            </li>
          
           
  
            <li>
             
            
           </li>
          </ul>
           
          
        </header>
      </Container>
    );
  };


  const Container = styled.div`
 
  width: 100%;
  height: 70px;
//   box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
   
  
 
  a {
    color: #000;
  }
  /* header */
  .header {
    
     margin-top:-8px;
    position: fixed;
    width: 100%;
    z-index: 3;
    padding-top: 10px;
    padding-bottom: 10px;
   
    
  }
  .header ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
    padding-right: 50px;
  }
  .header li a {
    display: block;
    padding: 20px 25px;
    text-decoration: none;
  }
  .header .logo {
    display: flex;
    float: left;
    font-size: 2em;
    padding: 10px 30px;
    text-decoration: none;
    color: #343a40;
  }
  /* menu */
  .header .menu {
    clear: both;
    max-height: 0;
    transition: max-height 0.2s ease-out;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 700;
    color: #343a40;
  }
  li a {
    color: #343a40;
  }
  li a:hover {
    color: #01a479;
  }

  /* menu icon */
  .header .menu-icon {
    cursor: pointer;
    display: inline-block;
    float: right;
    padding: 28px 20px;
    position: relative;
    user-select: none;
  }
  .header .menu-icon .navicon {
    background: #333;
    display: block;
    height: 2px;
    position: relative;
    transition: background 0.2s ease-out;
    width: 18px;
  }
  .header .menu-icon .navicon:before,
  .header .menu-icon .navicon:after {
    background: #333;
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
  }
  .header .menu-icon .navicon:before {
    top: 5px;
  }
  .header .menu-icon .navicon:after {
    top: -5px;
  }
  /* menu btn */
  .header .menu-btn {
    display: none;
  }
  .header .menu-btn:checked ~ .menu {
    width: 100%;
    max-height: 450px;
    background-color: white;
  }
  .header .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }
  .header .menu-btn:checked ~ .menu-icon .navicon:before {
    transform: rotate(-45deg);
  }
  .header .menu-btn:checked ~ .menu-icon .navicon:after {
    transform: rotate(45deg);
  }
  .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
  .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
    top: 0;
  }
  /* 48em = 768px */
  @media (min-width: 60em) {
    .header li {
      float: left;
    }
    .header li a {
      padding: 20px 30px;
    }
    .header .menu {
      clear: none;
      float: right;
      max-height: none;
     
    }
    .header .menu-icon {
      display: none;
    }
    
  }
  @media only screen and (min-width: 769px) and (max-width: 960px) {
    .header .menu {
      font-size: small;
    }
    
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    .header .menu .contact{
        backgroundColor:green
    }
    
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    .header .menu .contact{
        backgroundColor:white
    }
    
  }
  @media only screen and (max-width: 320px) {
    .header .menu .contact{
        backgroundColor:white
    }
    
  }
  @media only screen and (max-width: 319px) {
    .header .menu .contact{
        backgroundColor:white
    }
    
  }
`;

export {Navbar}