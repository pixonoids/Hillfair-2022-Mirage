import React from 'react';
import { useLocation } from 'react-router-dom';
import './PdfLayout.scss';

// import logo from 'images/hillfair-logo-light.png'



const PdfLayout =function () {
    const location = useLocation();
    const user = location.state;
    return (
        <div className='pdf'>    
           
{Object.keys(user).map((key) => {
                return (
            <div className='pdf-content'>
                <p className='head'>{key} :</p>
                <p className='value'>{user[key]}</p>
            </div>  
                )
            })}
                    
        </div>
    )
}
    
export default PdfLayout;
