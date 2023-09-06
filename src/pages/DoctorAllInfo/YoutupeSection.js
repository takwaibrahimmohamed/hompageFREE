import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube} from '@fortawesome/free-brands-svg-icons'
import { faL, faLink } from '@fortawesome/free-solid-svg-icons'
import backDocman from "../../assets/Rectangle 161.png"
import backDocwommen from "../../assets/2Rectangle 161.png"
import backDocwhit from "../../assets/3Rectangle 161.png"
import hosp1 from "../../assets/Rectangle 160.png"
import hosp2 from "../../assets/Rectangle 173.png"
import hosp3 from "../../assets/Rectangle 1655.png"
const YoutupeSection = () => {
  return (
        <>
            <section className='youtupsec'>
      <h2>Upload Reference Images (Optional)</h2>
      <div className='youTupeBox'>
        <div className='box'>
            <img src={backDocman} alt="backDocman"/>
            <FontAwesomeIcon icon={faYoutube}/>
        </div>
        <div className='box'>
        <img src={backDocman} alt="backDocman"/>
        <FontAwesomeIcon icon={faYoutube}/>
        </div>
        <div className='box'>
        <img src={backDocwommen} alt="backDocwomen"/>
        <FontAwesomeIcon icon={faYoutube} />
        </div>
        <div className='box'>
        <img src={backDocwhit} alt="backDocwomen"/>
       <div className='text'>
       <FontAwesomeIcon icon={faLink} style={{
        color:"#000",
        fontSize:'15px',
        left:"-11px"
       }}/>
        <span style={{
            color:"#000",
            fontSize:'15px'
        }}>Add Link</span>
       </div>
        </div>
       
      </div>
    </section>
    <section style={{marginTop:"80px"}} className='youtupsec'>
      <h2>Youtube video link (Optional)</h2>
      <div className='youTupeBox'>
        <div className='box'>
            <img src={hosp1} alt="hosp"/>
           
        </div>
        <div className='box'>
        <img src={hosp3} alt="backDocman"/>
      
        </div>
        <div className='box'>
        <img src={hosp2} alt="backDocwomen"/>
        
        </div>
        <div className='box'>
        <img src={backDocwhit} alt="backDocwomen"/>
       <div className='text'>
       
        <span style={{
            color:"#000",
            fontSize:'15px'
        }}>Upload photo</span>
       </div>
        </div>
       
      </div>
    </section>
        </>
  )
}

export default YoutupeSection
