import { useState,useEffect } from 'react'
import logo from './logo.svg'
import axios from 'axios';

import './App.css'
 function App() {
  const [product, setProduct] = useState([])

  useEffect (()=>{
    getData()
   
  },[])
  

  const getData =()=>{
    
    fetch('http://localhost:8001/data')
    .then((d)=>d.json())
    .then((res) =>{
      setProduct(res)
       
    
    })
  };
  console.log(product)
  const handleCllick=(e)=>{
    console.log(e)
  }
 

  return (

    
    
    <div className="App">
    {/* ------------------sorting button---------------------------- */}
    <div className="sortingButtonDiv">
      <button className='sortingButton'>Insurer</button>
      <button className='sortingButton'>Benefits</button>
      <button className='sortingButton'>cover till age</button>
      <button className='sortingButton'>claim settled*</button>
      <button className='sortingButton' >pay montly</button>
    </div>
      {/* ------------conatiner-------------- */}
      <div className="row">
        {/* -------------------left side------------------- */}
  <div className="col-sm-8">

  {product.map((e, i) => (
  //  -------------------maping data from termLifeInnsurance.json file-----------------------------

    <div className="policyDiv">
      <div className="policyDivInside">
        <img src={e.brandLogo} alt="" className='brandLogo'/>
          <div className='brandName'>{e.brandName}</div>
           <div className='hrLogo'><img src={e.hrLogo} alt="" /> 24hr claim settlement</div>
           </div>
            <div className="policyDivInside">
             <div className='cr'>1Cr</div>
              </div>
               <div className="policyDivInside">
             <div className='cr'>60yr</div>
            </div>
           <div className="policyDivInside">
          <div className='cr'>{e.SettlmentPercentage}</div>
        </div>
        <div className="policyDivInside">
       <div className='saving'>Buy Online & Save {e.savingUpTo} </div>
      <button  className="montlyPrice" onClick={(e_id)=>handleCllick(e)}>{e.montlyPrice} 
    </button>
      </div>
      
    </div>
    
  
    ))}
  </div>
  {/* ---------------right side---------------------- */}
  <div className="col-sm-4"><div className='policyAds'>
    {/* first ad of the page right side */}
       <div className="policyads-1">
       <h2 className="policyAdshead">Why buy from Policybazaar?</h2>
       <ul>
         <li>Best Prices</li>
         <li>Dedicated Claim Assistance</li>
         <li>One click easy refunds</li>
       </ul>
       <a href="" className="policyads-a">Know more</a>
       <img className="policyAdsImg" src="https://termlife.policybazaar.com/family_adv.bfefdf35861e99b3d3dd.png" alt="" />
       </div>
       <div className="policyAdsMiddle"></div>
       <div className="policyads-1">
       <h2 className="policyAdshead">Why buy from Policybazaar?</h2>
       <ul>
         <li>Policybazaar Guarantees claim support for your family in those difficult times</li>
        
       </ul>
       <a href="" className="policyads-a">Know more</a>
       <img className="policyAdsImg2" src="https://termlife.policybazaar.com/assistance.26f974d931ef801c2b85.svg" alt="" />
       </div>
     </div></div>
</div>
     </div>
    
  )
}

export default App
