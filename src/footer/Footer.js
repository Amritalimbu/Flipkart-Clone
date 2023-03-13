import React from 'react'
import "./Footer.css"
// import { BiChevronDown } from "react-icons/bi";
// import { BiChevronUp } from "react-icons/bi"
const Footer = () => {
  return (
    <footer className='footer'>
      <div>
        <p className='p'>Top Stories:<b style={{color:"#565656"}}>Brand Directory</b></p>
        <p className='p' id="ptag">MOST SEARCHED FOR ON FLIPKART:Flipkart Axis Bank Super Elite Credit cardPrimebook LaptopsBounce Infinity E1Buy Laptop on EMIInfinix Zero Book UltraOPPO Reno8 5GOPPO Reno8 Pro 5GFresh Flower BouquetHoli HampersHoli GiftsBouquetOneplus MonitorsSell Old Mobile PhonesPremium LaptopsElectronics StorePhone coverInfinix INBook Y1 PlusOkaya Electric Vehiclesbgauss electric scooterOPPO Reno7 Pro 5GiPhone 13iPhone 13 ProiPhone 13 Pro MaxiPhone 13 MiniGoogle Pixel 6a coversFlipkart QuickAmpere MagnusFlipkart Help CentreOnline Boat StoreCovers from Rs 99Flipkart Track OrdersFlipkart Manage OrdersFlipkart Return OrdersFlipkart Gift Cards StoreFlipkart Axis Bank Credit CardFlipkart Pay Later
MOBILES:iPhone 12 64GBiPhone 12 Pro 512GBiPhone 12 128GBVivo Y91iVivo Y11Vivo Y15Vivo Y50Vivo Y12Reno2 FOppo A12Oppo F15Oppo A31Samsung A71Samsung A51Samsung A31Realme X2iPhone 11iPhone 11 ProMobile CoverMobile Offersiphone x4G MobileNokia MobileSamsung MobileiphoneOppo MobileVivo Mobile
</p>
      </div> 

      <div id='div2'>
        <div id="aboutdiv">
            <p id='p'>ABOUT</p>
            <ul id="aboutUl">
                <li className='aboutLi'>Contact Us</li>
                <li className='aboutLi'>About Us</li>
                <li className='aboutLi'>Careers</li>
                <li className='aboutLi'>Flipkart Stories</li>
                <li className='aboutLi'>Press</li>
                <li className='aboutLi'>Flipkart</li>
                <li className='aboutLi'>Wholesale</li>
                <li className='aboutLi'>Corporate</li>
                <li className='aboutLi'>Information</li>
            </ul>
        </div>
        <div>
            <p id='p'>HELP</p>
            <ul>
                <li>Payments</li>
                <li>Shipping</li>
                <li>Cancellation & Returns</li>
                <li>FAQ</li>
                <li>Report</li>
                <li>Infringment</li>
            </ul>
        </div>
        <div >
            <p id='p'>POLICY</p>
            <ul>
                <li>Return Policy</li>
                <li>Terms Of Use</li>
                <li>Security</li>
                <li>Privacy</li>
                <li>Sitemap</li>
                <li>EPR Compliance</li>
            </ul>
        </div>
        <div>
            <p id='p'>SOCIAL</p>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>YouTube</li>
            </ul>
        </div>
        <div>
            <p id='p'>Mail Us:</p>
            <ul style={{borderLeft:"1px solid gray",}}>
              <li>Flipkart Internet Private Limited,

                Buildings Alyssa, Begonia &

                Clove Embassy Tech Village,

                Outer Ring Road, Devarabeesanahalli Village,

                Bengaluru, 560103,

                Karnataka, India</li>
            </ul>
        </div>
        <div>
            <p id='p'>Registered Office Address:</p>
            <ul>
              <li>Flipkart Internet Private Limited,

                Buildings Alyssa, Begonia &

                Clove Embassy Tech Village,

                Outer Ring Road, Devarabeesanahalli Village,

                Bengaluru, 560103,

                Karnataka, India

                CIN : U51109KA2012PTC066107

                Telephone: 044-45614700</li>
            </ul>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer
