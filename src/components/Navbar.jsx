

// import React from 'react'
// import styled from "@emotion/styled";

// import CustomBtn from './CustomBtn'
// import logo from '../logo.svg'
// import logoMobile from '../logoMobile.svg'
// import {Toolbar, Typography} from '@material-ui/core'
// import {makeStyles} from "@material-ui/core/styles"; 

// const styles = makeStyles({
//     bar:{
//         paddingTop: "1.15rem",
//         backgroundColor: "#fff",
//         ['@media (max-width:780px)']: { 
//            flexDirection: "column"
//           }
//     },
//     logo: {
//         width: "15%", 
//         ['@media (max-width:780px)']: { 
//            display: "none"
//            }
//     },
//     logoMobile:{
//         width: "100%", 
//         display: "none", 
//         ['@media (max-width:780px)']: { 
//             display: "inline-block"
//             }
//     },
//     menuItem: {
//         cursor: "pointer", 
//         flexGrow: 1,
//         "&:hover": {
//             color:  "#4f25c8"
//         },
//         ['@media (max-width:780px)']: { 
//             paddingBottom: "1rem"    }
//     }
// })

// function Navbar() {
//     const classes = styles()
//     return (
//             <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
//                 <img src={logo} className={classes.logo}/> 
//                 <img src={logoMobile} className={classes.logoMobile}/> 
//                 <Typography variant="h6" className={classes.menuItem}>
//                    About
//                 </Typography>
//                 <Typography variant="h6" className={classes.menuItem}>
//                     Blog
//                 </Typography>
//                 <Typography variant="h6" className={classes.menuItem}>
//                     Careers
//                 </Typography>
//                 <Typography variant="h6" className={classes.menuItem}>
//                     Demos 
//                 </Typography>
//                 <Typography variant="h6" className={classes.menuItem}>
//                     Contact Us 
//                 </Typography>
//                 <CustomBtn txt="Trial Our Product"/>
//             </Toolbar>
//     )
// }

// export default Navbar



import React from "react";
import "./Navbar.css";

export default function Navbar() {


    return (
        <div className="outer">
          <div className="navbar-div">
             <div className="logo">
               <img src="https://globalprimenews.com/wp-content/uploads/2020/06/IMG_20200609_124903-777x282.png"/>
             </div>

           </div>
           <div className="claim-div">
               <img src="https://www.clipartmax.com/png/small/444-4447964_proof-of-importance-claim-icon.png"/>
               <p>Claim Assistance</p>
           </div>
          
           <div className="call-div">
               <img src="https://media.istockphoto.com/vectors/headphones-and-headset-with-a-microphone-icon-design-vector-id1203588204?k=20&m=1203588204&s=170667a&w=0&h=RQN9mWSLXUI6h3BQ1othpmNn1Hc8_RlyJxLZhBQw9a8="/>
               <p>Call us</p>
           </div>

       
        </div>
    )

    }
