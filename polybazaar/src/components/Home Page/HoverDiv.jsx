import umbrella from "../../logos/Umbrella1.png"
import car from "../../logos/car.png"
import box from "../../logos/box.png"
import piggy from "../../logos/piggy.png"
import Dil from "../../logos/dil.png"
import "./Home.css"
import "../Navbar/navbar.css"
export const HoverDiv1 =()=>{
    return(
        <>
        <div>
           
            <div  className="home-ho dropdown new" >
          <div className="footer-f" style={{lineHeight:"16px",backgroundColor:"white",display:"flex",flexDirection:"row",justifyContent:"space-between",width:"80%"}}>
                <div>
                  <img src={umbrella}  style={{margin:"5px" }} alt="one"/><b style={{position:"absolute",fontSize:"16px",margin:"5px"}}>Life Insurance</b>
                  <div style={{marginLeft:"0%"}} >
                  <p className="footer-hover">Term Insurance</p>
                  <p className="footer-hover">Saral Jevan Beema</p>
                  <p className="footer-hover">Life Insurance</p>
                  <p className="footer-hover">1 crore term Insurance</p>
                  <p className="footer-hover">Term Insurance Return Of Premium</p>
                  <p className="footer-hover">Term Insurance for Spouse</p> 
                  <p className="footer-hover">Term Insurance Calculator</p>
                  <p className="footer-hover">Dedicated claim assistance</p>
                  </div>
                </div>
            <div>
                  <img src={Dil} alt="one"/><b style={{marginLeft:"1%",position:"absolute",fontSize:"16px"}}>Health Insurance</b>
                  <div style={{marginRight:"0%"}}>
                  <p className="footer-hover">Family Health Insurance</p>
                  <p className="footer-hover">Senior Citizen Health Insurance</p>
                  <p className="footer-hover">Health insurance for parents</p>
                  <p className="footer-hover">Arogya Sanjeevan Insurance</p>
                  <p className="footer-hover">Other General Insurance products</p>
                  <p className="footer-hover">Cancer Insurance</p>
                  <p className="footer-hover">Home Insurance</p>
                </div>
            </div>
            <div>
                  <img src={car} alt="one"/><b style={{marginLeft:"1%",position:"absolute",fontSize:"16px"}}>Car Insurance</b>
                  <div style={{marginRight:"0%"}}>
                  <p className="footer-hover">Motor Insurance</p>
                  <p className="footer-hover" onClick={() =>{
                  }
                  }>Two Wheeler Insurance</p>
                  <p className="footer-hover">Commercial Insurance</p>
                  <p className="footer-hover">Taxi Insurance</p>
                  <p className="footer-hover">Third Party Insurance</p>
                  <p className="footer-hover">Best Car Insurance</p>
                  <p className="footer-hover">Pay As YouDrive Insurance</p>
                  <p className="footer-hover">Tax Saving Plan</p>
                  </div>
            </div>
            <div style={{marginRight:"0%"}}>
                    <img src={box} alt="one"/><b style={{marginLeft:"1%",position:"absolute",fontSize:"16px"}}>Other  Insurance</b>
                    <div style={{marginRight:"0%"}}>
                    <p className="footer-hover">Travelar Insurance</p>
                    <p className="footer-hover">Group Health Insurance </p>
                    <p className="footer-hover">Home Insurance</p>
                    <p className="footer-hover">Senior Citizen Health Insurance</p>
                    <p className="footer-hover">Corona Virus Insurance</p>
                    <p className="footer-hover">Corona Kavach Policy</p>
                    <p className="footer-hover">Corona Rakshak Policy</p>
                    <p className="footer-hover">Arogya Sanjeevni Policy</p>
                    </div>
            </div>
            <br></br>
          
      </div>
       <div style={{marginLeft:"12%"}}>
                    <img src={piggy} alt="one"/><b style={{marginLeft:"1%",position:"absolute",fontSize:"20px"}}>Investment Plans</b>
                    <div style={{marginRight:"0%"}}>
                    <p className="footer-hover">Child Plans</p>
                    <p className="footer-hover">Pension Plans </p>
                    <p className="footer-hover">ULIP</p>
                    <p className="footer-hover">Money Back Policy</p>
                    <p className="footer-hover">Endowment policy</p>
                    <p className="footer-hover">Tax saving investment</p>
                    <p className="footer-hover">Guaranteed Return Plans</p>
                    <p className="footer-hover">Capital Guarantee Plans</p>
                    <p className="footer-hover">Annuity Plans</p>
                    </div>
            </div>
        </div>
        
        </div>
        
        </>
    )
}