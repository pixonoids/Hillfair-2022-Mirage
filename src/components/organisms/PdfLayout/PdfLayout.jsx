import React from 'react';
import { useLocation } from 'react-router-dom';
import './PdfLayout.scss';
import logo from '/images/hillfair-logo-dark.png'
import nithlogo from '/images/nith.png'

// import logo from 'images/hillfair-logo-light.png'



const PdfLayout = function () {
    const location = useLocation();
    const user = location.state;
    return (
        <div className='pdfWrapper'>

            <div className='hillfareLogo'>
                <img src={logo} />
            </div>
            <div className='pageWrapper'>
                <div className='firstPageInfo'>
                    <section>
                        <p className='name'>Name :{user['name']}</p>
                        <p className='email'>Email :{user['email']}</p>
                    </section>
                    <section>
                        <p className='address'>Address:{user['address']}</p>
                        <p className='category'>Categeroy :{user['name']}</p>
                    </section>
                </div>
                    {/* sponsors */}
                <div className='secondPageInfo'>
                    <section>
                        <p className='company'>Company:{user['company']}</p>
                        <p className='gst'>GST No.: user[{'gst'}]</p>
                    </section>
                    </div>
                    {/* participant */}
                    <div className='secondPageInfo'>
                    <p className='college'>College Name: user[{'college'}]</p>
                    </div>
                    {/* alumini */}
                    <div className='secondPageInfo'>
                    <p className='roll'>Roll No : user[{'roll'}]</p>
                    <p className='batch'>Batch :user[{'batch'}]</p>
                    <p className='department'>Department:user[{'department'}]</p>
                    </div>
                    {/* guest */}
                    <div className='secondPageInfo'>
                    <p className='designation'>Designation :user[{'designation'}]</p>
                    <p className='social'>Social Profile :user[{'social'}]</p>
                </div>
            </div>
            <div className='pdfFooter'>
                <span><Date /></span>
                <img src={nithlogo} />
            </div>
        </div>
    )
}

export default PdfLayout;
