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

      <button type="button" onClick={handleDownloadPdf}>
        Download as PDF
      </button>

     
    </div>
  );

//  function printDocument() {
//     const input = document.getElementById('divToPrint');
//     html2canvas(input)
//       .then((canvas) => {
//         const imgData = canvas.toDataURL('image/png');
//         const pdf = new jsPDF({
//             orientation: '    ',
//             unit: 'mm',
//             format: 'a4',
//             putOnlyUsedFonts:true
//            });
//         pdf.addImage(imgData, 'JPEG', 0, 0);
//         // pdf.output('dataurlnewwindow');
//         pdf.save("your-certifcate.pdf");
//       })
//     ;
//   }

  
  // return (
    
    
    
    // <div>
    //   <div className="mb5">
    //     <button onClick={printDocument}>Print</button>
    //     </div>
        
    //     <div id="divToPrint" className="mt4" style={{
    //     overflow: 'auto',
    //         width: '220mm',
    //         minHeight: '600mm',
    //         marginLeft: 'auto',
    //         marginRight: 'auto'
            

    //     }} 
    //     >
    //         <LandingPage/>
    //   </div>
    // </div>);
  
}

export default PdfPage;