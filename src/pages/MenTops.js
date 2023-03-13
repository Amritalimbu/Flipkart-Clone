import React, {useState} from 'react';
import { FaSearch } from 'react-icons/fa';
import { BiChevronDown } from "react-icons/bi";
import {RxCross1} from "react-icons/rx";

import "./MenTops.css"
const MenTops = () => {
  const [brand,setBrand]=useState(false)
  const [offer,setOffer]=useState(false)
  const brandclk=()=>{
    setBrand((p)=>!p)
  }
  return (
    <div id="mensdiv" style={{padding:"10px"}}>
      <div id='sidediv'>
        <div id="filterdiv" >
          <h4 style={{marginTop:"3px"}}>Filter</h4>
          <button style={{padding:"8px",width:"80px",marginBottom:"10px"}}><RxCross1/> Men</button>
        </div>

        <div id="CATEGORIESdiv" >
          <p>CATEGORIES</p>
          Clothing and Accessories
          <select style={{border:"none",width:"20px"}}>
            <option>Clothing and Accessories</option>
          </select>
        </div>

        <div id="topwarediv" >
          Top Wear
          <select style={{border:"none",width:"20px"}}>
            <option>Shirts</option>            
            <option>T-shirts</option>     
          </select>
        </div>

        <div id='genderDiv'>
          Gender
          <select style={{width:"20px",border:"none"}}>
            <option>Men</option>
            <option>Women</option>
            <option>Men & Women</option>
            <option>Boys</option>
            <option>Girls</option>
            <option>Boys & Girls</option>
            <option>Baby Boys & Baby Girls</option>
            <option>Couple</option>
            <option>Baby Boys</option>
            <option>Baby Girls</option>
            <option>Unisex</option>
          </select>
        </div>

        <div id="pricediv">
          PRICE
        </div>

        <div id="branddiv" onClick={brandclk}>
          Brand  
          
          <BiChevronDown rastyle={{fontSize:"20px",marginBottom:"-8px"}} />   
          {brand && 
            <>
            <div style={{display:"grid",gridAutoFlow:"column",borderBottom:"2px solid rgb(236, 233, 233)"}}>
            <FaSearch style={{fontSize:"small",padding:"8px",border:"none"}}/>
            <input style={{border:"none",}} placeholder='Search Brand'/>
            </div>
            {/* <input>ADIDAS</input> */}
            <input type="checkbox"/>ADIDAS
            <br></br>
            <input type="checkbox"/>Allen Solly
            <br></br>
            <input type="checkbox"/>BEWAKOOF
            <br></br>
            <input type="checkbox"/>Blackberrys
            <br></br>
            <input type="checkbox"/>FLYING MACHINE
            <br></br>
            <input type="checkbox"/>HERE&NOW
            </>
          }
        </div>

        <div id='offersdiv' onMouseEnter={()=>setOffer((prev)=>!prev)}>
          OFFERS
          <BiChevronDown/>
          {
            offer && 
            <div style={{width:"180px"}}>
            <input type='checkbox'/>Buy More, Save More
            <input type="checkbox"/>Special Price
            </div>
          }
        </div>        
      </div>

      <div id='maindiv'>
        <div style={{color:"#878787",fontSize:"small"}}>If you want to stay on top of the fashion trends, then
         you need to shop for the latest and trendiest topwear from an e-commerce site Flipkart.
          Check out the amazing collection of topwear for women online and select the ones that suit you the best. 
          Browse through stylish women’s topwear that are offered by popular brands, such as Only, Jockey, U&F, Darzi,
           Ann Springs, and more. Women can style a trendy tops with jeggings and sandals to nail the perfect casual 
           look. Try pairing crop tops with denim shorts for the perfect summer look. Also, check out trendy topwear 
           for men online that are sold by brands, such as Allen Solly, Wildcraft, FastColors, Smartees, Adidas, and 
           more. Men can pair polo shirts & T-shirts with chinos and loafers for the perfect brunch or picnic look. 
           To nail the perfect office look, men can pair formal shirts with trousers and formal shoes to look dapper 
           and stylish. You can also buy trendy and fashionable topwear for kids from your favorite online shopping 
           site. From T-shirts and tops to shirts and frocks, you can find fashionable and comfortable clothes online
            for your little ones. The information you are reading has been last updated on 10-Mar-23.</div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(9,1fr"}}>
          <p style={{color:"#212121"}}>Topwear</p>
          <p style={{color:"#878787",fontSize:"small",width:"280px",paddingTop:"5px"}}>(Showing 1 – 40 products of 49,885 products)</p>
        </div>

        <div id='mensimgs'>
          <div id='div1'>
            <img id="menimgdiv" className='items' src='https://rukminim1.flixcart.com/image/612/612/kyyqpow0/t-shirt/l/t/n/l-t67-wrwh-eyebogler-original-imagb2zyfxb3gg3g.jpeg?q=70' alt='img'/>
            <div id="descptn" >
              <div style={{color:"#878787",fontWeight:"600",textAlign:"start",paddingLeft:"5px",marginTop:"-2px"}}>EyeBogler</div>
              <div id="rupee">
                <div style={{width:"40px",paddingLeft:"10px"}}>₹299</div>
                <div style={{marginRight:"100px",textDecorationLine:"line-through"}}>₹1,299</div>
                <div style={{paddingLeft:"12px",width:"55px",color:"#388e3c"}}>80% off</div>
                <br></br>
                <div id="freeDlvr" style={{paddingLeft:"5px",width:"90px"}}>Free delivery</div>
              </div>
            </div>
          </div>
        
          <div id='div1'>
            <img id="menimgdiv" className='items' src='https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/a/v/g/4xl-men-regular-slim-fit-solid-button-down-collar-formal-shirt-original-imagfh9b87xcwju9.jpeg?q=70' alt='img'/>
            <div id="descptn" >
              <div style={{color:"#878787",fontWeight:"600",textAlign:"start",paddingLeft:"5px",marginTop:"-2px"}}>VeBNoR</div>
              <div id="rupee">
                <div style={{width:"40px",paddingLeft:"10px"}}>₹329</div>
                <div style={{marginRight:"100px",textDecorationLine:"line-through"}}>₹1,849</div>
                <div style={{paddingLeft:"12px",width:"55px",color:"#388e3c"}}>82%off</div>
                <br></br>
                <div id="freeDlvr" style={{paddingLeft:"5px",width:"90px"}}>Free delivery</div>
              </div>
            </div>
          </div>

          <div id='div1'>
            <img id="menimgdiv" className='items' src='https://rukminim1.flixcart.com/image/612/612/k34rki80/t-shirt/s/w/m/l-poly-510-12-14-tqh-original-imafkyg8nghr2v8h.jpeg?q=70' alt='img'/>
            <div id="descptn" >
              <div style={{color:"#878787",fontWeight:"600",textAlign:"start",paddingLeft:"5px",marginTop:"-2px"}}>TQH</div>
              <div id="rupee">
              <div style={{width:"40px",paddingLeft:"10px",zIndex:"4"}}>₹329</div>
                <div style={{marginRight:"100px",textDecorationLine:"line-through"}}>₹1,849</div>
                <div style={{paddingLeft:"12px",width:"55px",color:"#388e3c"}}>82%off</div>
                <br></br>
                <div id="freeDlvr" style={{paddingLeft:"5px",width:"90px"}}>Free delivery</div>
              </div>
            </div>
          </div>

          <div id='div1'>
            <img id="menimgdiv" className='items' src='https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/r/v/k/m-ausk0165-ausk-original-imaghu9fbhcgf2za.jpeg?q=70' alt='img'/>
            <div id="descptn" >
            <div style={{color:"#878787",fontWeight:"600",textAlign:"start",paddingLeft:"5px",marginTop:"-2px"}}>MOONVELLY</div>
            <div id="rupee">
            <div style={{width:"40px",paddingLeft:"10px"}}>₹329</div>
              <div style={{marginRight:"100px",textDecorationLine:"line-through"}}>₹1,849</div>
              <div style={{paddingLeft:"12px",width:"55px",color:"#388e3c"}}>82%off</div>
              <br></br>
              <div id="freeDlvr" style={{paddingLeft:"5px",width:"90px"}}>Free delivery</div>
            </div>
            </div>
          </div>

          {/* <div>
            <img className='items' src='https://rukminim1.flixcart.com/image/612/612/l3j2cnk0/t-shirt/2/w/p/l-723-2-5-7-8-ftx-original-imagemgrpafdug8v.jpeg?q=70' alt='img'/>
          </div>

          <div>
            <img className='items' src='https://rukminim1.flixcart.com/image/612/612/k05ljm80/t-shirt/k/w/r/xl-poly-510-11-tqh-original-imafkygaynurrcyj.jpeg?q=70' alt='img'/>
          </div>

          <div>
            <img className='items' src='https://rukminim1.flixcart.com/image/612/612/kxdl3m80/shirt/a/7/a/l-ts-shirt1083-tanip-original-imag9ugfzkdhprzn.jpeg?q=70' alt='img'/>
          </div>

          <div>
            <img className='items' src='https://rukminim1.flixcart.com/image/612/612/l45xea80/shirt/v/e/t/38-men-regular-slim-fit-solid-button-down-collar-formal-shirt-original-imagf4mxnhanzdtn.jpeg?q=70' alt='img'/>
          </div>

          <div>
            <img className='items'src='https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/k/o/9/xxl-ts-658-rama-moonvelly-original-imaggkphvfes4gx8.jpeg?q=70' alt='img'/>
          </div>

          <div>
            <img className='items' src='https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/d/o/g/m-bblylrnfull-z61-blive-original-imagh7gyfngvhkyc.jpeg?q=70' alt='img'/>
          </div>

          <div>
            <img className='items' src='https://rukminim1.flixcart.com/image/612/612/l1grgcw0/t-shirt/x/o/5/m-t428hs-tm5p-eyebogler-original-imagdf2egzjxeqgk.jpeg?q=70' alt='img'/>
          </div>

          <div>
            <img className='items' src='https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/m/n/v/m-all-oc-one-lieo-trend-original-imagj4dfbjhuzfhr.jpeg?q=70' alt='img'/>
          </div> */}
        </div>
      </div>

      {/* <div id='mensimgs'>
        <img className='items' src='https://rukminim1.flixcart.com/image/612/612/kyyqpow0/t-shirt/l/t/n/l-t67-wrwh-eyebogler-original-imagb2zyfxb3gg3g.jpeg?q=70' alt='img'/>
        <img className='items' src='https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/a/v/g/4xl-men-regular-slim-fit-solid-button-down-collar-formal-shirt-original-imagfh9b87xcwju9.jpeg?q=70' alt='img'/>
        <img className='items' src='https://rukminim1.flixcart.com/image/612/612/k34rki80/t-shirt/s/w/m/l-poly-510-12-14-tqh-original-imafkyg8nghr2v8h.jpeg?q=70' alt='img'/>
        <img className='items' src='https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/r/v/k/m-ausk0165-ausk-original-imaghu9fbhcgf2za.jpeg?q=70' alt='img'/>
      </div> */}
   </div>
  )
}

export default MenTops
