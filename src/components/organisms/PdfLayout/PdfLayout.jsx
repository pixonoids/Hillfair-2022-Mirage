import React from 'react';
import { useLocation } from 'react-router-dom';
import './PdfLayout.scss';
import logo from '/images/hillfair-logo-dark.png'
import nithlogo from '/images/nith.png'

// import logo from 'images/hillfair-logo-light.png'



const PdfLayout =function () {
    const location = useLocation();
    const user = location.state;
    return (
        <div className='pdfWrapper'>    
            
            <div className='hillfareLogo'>
                <img src={logo}/>
            </div>
            <div className='pageWrapper'>
            <div className='firstPageInfo'>
                <p className='name'>Name :{user['name']}</p>
                <p className='email'>Email :{user['email']}</p>
                <p className='category'>Categeroy :{user['name']}</p>
                <p className='address'>Address:{user['address']}</p>
            </div>  
                    <div className='secondPageInfo'>
                        {/* sponsors */}
                <p className='company'>Company:{user['company']}</p>
                        <p className='gst'>GST No.: user[{'gst'}]</p>
                        {/* participant */}
                <p className='college'>College Name: user[{'college'}]</p>
                        {/* alumini */}
                <p className='roll'>Roll No : user[{'roll'}]</p>
                <p className='batch'>Batch :user[{'batch'}]</p>
                        <p className='department'>Department:user[{'department'}]</p>
                        {/* guest */}
                        <p className='designation'>Designation :user[{'designation'}]</p>
                        <p className='social'>Social Profile :user[{'social'}]</p>
            </div>  
        </div>
            <div className='footer'>
                <Date/>
                <img src={nithlogo}/>
            </div>      
        </div>
         )
}
    
export default PdfLayout;
