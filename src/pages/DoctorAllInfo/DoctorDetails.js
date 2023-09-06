import React from 'react'
import "./DoctorInfo.css"
import YoutupeSection from './YoutupeSection'
const DoctorDetails = () => {
  return (
    <section className="doctorDetails">
      <div className='header'>
        <div className='headerInfo'>
        <h2>Hi Ann</h2>
        <h2>Enter your Details below:</h2>
        </div>
        <div className='doctorLogin' style={{fontSize:'15px'}}>Done</div>
      </div>
      <div className='form'>
        <form>
            <div className='inp'>
                <label for="fname"> Clinic Name /Doctor Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Enter name"/>
            </div>
            <div className='inp'>
                <label for="fname">Enter treatments</label>
                <input type="text" id="fname" name="firstname" placeholder="Add Treatment"/>
            </div>
            <div className='inp'>
                <label for="fname">Enter Email</label>
                <input type="email" id="fname" name="firstname" placeholder="contact.hospital@gmail.com"/>
            </div>
            <div className='inp'>
                <label for="fname">Description</label>
                <input type="text" id="fname" name="firstname" placeholder="Enter details"/>
            </div>
            <div className='inp'>
                <label for="fname">Conditions</label>
                <input type="text" style={{
                      borderBottomLeftRadius: "0",
                      borderBottomRightRadius: "0",
                      borderBottom:"1px solid #463A8A",
                      zIndex:"1"
                }} id="fname" name="firstname" placeholder="Write conditions here"/>
                <input type="text" className='condition' id="fname" name="firstname" placeholder="
                  Lupus , Cough ,Fever, Lupus  Cough , Fever , Lupus , Cough  Fever
                  , Lupus , Cough , Fever , Lupus , Cough , 
                  Fever , Lupus , Cough , Fever , Lupus , Cough , Fever ,'
                 
                "
               
                 />
            </div>
            <div className='inp'>
                <label for="fname">Enter website</label>
                <input type="url" id="fname" name="firstname" placeholder="www.hospital.com"/>
            </div>
            <div className='inp'>
                <label for="fname">Enter Phone Number</label>
                <input type="number" id="fname" name="firstname" placeholder="(444) 4764 4755"/>
            </div>
            <div className='inp'>
                <label for="fname">Enter Address</label>
                <input type="text" id="fname" name="firstname" placeholder="Private hospital . Kashmir  Road"/>
            </div>
           
        </form>
       
      </div>
      <YoutupeSection/>
    </section>
  )
}

export default DoctorDetails
