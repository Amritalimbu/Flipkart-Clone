import React, { useState } from 'react'
// import {Link} from "react-router-dom"
import "./Navbar.css";
import { BiSearch } from "react-icons/bi"
import { BiChevronDown } from "react-icons/bi";
import { IoMdDownload } from "react-icons/io";
import { FcAdvertising } from "react-icons/fc";
import { RiCustomerServiceLine } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa"
// import { BiChevronUp } from "react-icons/bi";
// import { Link } from 'react-router-dom';


const Navbar = () => {
  const [onclk, setClk]=useState(false)
  // const [fashionclk, setFasgionclk]=useState(false)

  return (
    <main>
        <nav>
          <div id='logo'>
            <h2 id="h2">Flipkart</h2>
            <p id="explore" style={{color:"white",fontSize:"small"}}>Explore <span style={{color:"yellow"}}>plus</span></p>
            <img id="logoimg" src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png' 
            alt='img'/>
          </div>
          <div className='searchbar'>
            <input id="inputbtn" placeholder="Search for products, brands and more"></input>
            <button id='searchbtn'><strong><BiSearch/></strong></button>
          </div>
          <div id='login'>
            <button id="loginbtn" style={{marginTop:"15px",padding:"7px", width:"120px",color:"#2874f0",backgroundColor:"#fff",border:"none"
            ,fontSize:"14px"}}>
            <strong>Login</strong></button>
          </div>
          <div id='seller'>
            <h4>Become a Seller</h4>
          </div>

          <div id='more' onClick={()=>setClk((prev)=>!prev)}>
            <h4 id="h4">More</h4>            
            <BiChevronDown id='drop'/>
            {onclk && 
            <ul className='ul'>
              <li className='liArow'><IoIosNotificationsOutline style={{color:"#2874f0"}}/> Notification Preference</li>
              <li className='liArow'><RiCustomerServiceLine style={{color:"#2874f0"}}/> 24x7 Customer Care</li>
              <li className='liArow'><FcAdvertising/> Advertise</li>
              <li className='liArow'><IoMdDownload style={{color:"#2874f0"}}/> Download</li>
            </ul>}            
          </div>

          <div id='cart'>
            <h4><FaShoppingCart style={{color:"#fff",fontSize:"18px"}}/> Cart</h4>
          </div>
        </nav>
    </main>
  )
}

export default Navbar
