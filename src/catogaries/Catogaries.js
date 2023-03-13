import React, {useState} from 'react'
import { BiChevronDown } from "react-icons/bi";
// import MenTops from '../pages/MenTops';
const Catogaries = () => {
    const [fashionclk, setFasgionclk]=useState(false)
  return (
    <div>
        <div className='catogariesdiv'>
          <div >
            <img id="groceryimg" src='https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100' alt='img'/>
            <p id='groceryP'>Grocery</p>
          </div>

          <div>
            <img id="mobilesimg" src='https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100' alt='img'/>
            <p id='mobilesP'>Mobiles</p>
          </div>
          
          <div id="Fdiv" onClick={()=>setFasgionclk((prev)=>!prev)}>
            <img id="fashionimg" src='https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100' alt='img'/>
            <div id='fashiondiv'>
              <p id='fashionP' >Fashion</p>
              <BiChevronDown/>
            </div>
            {fashionclk &&
            <ul className='fashionUl'>          
              <a href="/MenTops" style={{listStyleType:"none",textDecoration:"none",color:"black"}}><li className='fashionLi'>Men's Top Ware</li></a>
              <li className='fashionLi'>Women Ethnic</li>
              <li className='fashionLi'>Women Western</li>
              <li className='fashionLi'>Men Footware</li>
              <li className='fashionLi'>Watches and Accessories</li>
              <li className='fashionLi'>Bag, Suitcases & Luggage</li>
              <li className='fashionLi'>Kids</li>
            </ul>}
          </div>

          <div>
            <img id="Electronicsimg" src='https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100' alt='img'/>
             <div className='ElectronicDiv'>
              <p id="ElectronicsP">Electronics</p>
              <BiChevronDown/>
            </div> 
          </div>

          <div>
          <img id="homeimg" src='https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100' alt='img'/>
            <div className='homeDiv'> 
              <p id="homeP">Home</p>
              <BiChevronDown/>
            </div> 
          </div>

          <div>
          <img id="AppliancesImg" src='https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100' alt='img'/>
            <p id='AppliancesP'>Appliances</p>
          </div>

          <div>
            <img id="TravelImg" src='https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100' alt='img'/>
            <p id="TravelP">Travel</p>
          </div>

          <div>
            <img id="TopOffersImg" src='https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100' alt='img'/>
            <p id='TopOffersP'>Top Offers</p>
          </div>

          <div>
            <img id="BeautyImg" src='https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100' alt='img'/>
             <div className='BeautyDiv'> 
              <p id='BeautyP'>Beauty, Toys & More</p>
              <BiChevronDown/>
            </div>
          </div>

          <div>
            <img id="TwoWheelersImg" src='https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100' alt='img'/>
            <div className='TwoWheelerDiv'>  
              <p id='TwoWheelersP'>Two Wheelers</p>
              <BiChevronDown />
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default Catogaries
