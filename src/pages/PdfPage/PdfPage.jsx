import React, { Component, PropTypes } from 'react';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useLocation } from 'react-router-dom';
// import LandingPage from '../landingPage/LandingPage';
import './PdfPage.scss';
import {PdfLayout} from '../../components/organisms';


 


const PdfPage =()=>{
  
  const location=useLocation();
  console.log(location.state)



  const printRef = React.useRef();

  const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight =
      (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, 'JPG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('print.pdf');
  };

  return (
    <div>
     
      <div className='full-page' ref={printRef}>
         <PdfLayout/>
      </div>

      <div className='pdfDownloadBtn'>
        <button type="button" onClick={handleDownloadPdf}>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          </span>
          <span className='download'>Download as PDF</span>
        </button>
      </div>

    </div> 
  );
  
}

export default PdfPage;