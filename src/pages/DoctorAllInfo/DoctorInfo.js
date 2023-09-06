import React from 'react'
import back from "../../assets/image 1.png"
import lang from "../img/Vector.png"
import arrow from "../img/Arrow---Down-2.png"
import search from "../img/Search.png"
import  "./DoctorInfo.css"
import heroImg from "../../assets/hero-bg.png"
import doctorPHOTO from "../../assets/Ellipse 72.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe,faChevronDown,faSearch } from '@fortawesome/free-solid-svg-icons'
import { faInstagram} from '@fortawesome/free-brands-svg-icons'
import DoctorDetails from './DoctorDetails'

const DoctorInfo = () => {
  return (
    <>
   
    <container className="container">
      <div className='left'>
      
        <img src={back} className='logo'/>
        <ul className='links'>
          <li className='link'>Home</li>
          <li className='link'>About</li>
          <li className='link'>Contact</li>
          <li className='link'>FAQ</li>
        </ul>
      </div>

      <div className='right'>
        <div className='langbox'>
        <FontAwesomeIcon icon={faGlobe}/>
        
          <p>ENG</p>
          <FontAwesomeIcon style={{
           marginTop: "10px",
        }} icon={faChevronDown} />
        </div>
        <FontAwesomeIcon style={{
           marginTop: "30px",
        }} icon={faSearch} />
        <div className='doctorLogin'>Doctor Login</div>
      </div>
    </container>
   <section className='herosection' >
        <div className='image'>
          <img src={doctorPHOTO} alt="doctorPHOTO"/>
          <FontAwesomeIcon icon={faInstagram} style={{
            position:"absolute",
            top:"210px",
            zIndex:"11",
            left:"180px"
          }}/>
        </div>
        <div className='info'>
          <h1>Let people find Regenerative Medicine<br/> Doctor based on your condition</h1>
          <p>Treatment with a best doctor , for your good today and tomorrow.</p>
        </div>
   </section>
   <DoctorDetails/>
    </>
  )
}

export default DoctorInfo
