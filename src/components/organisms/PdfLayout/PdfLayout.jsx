import React from "react";
import { useLocation } from "react-router-dom";
import "./PdfLayout.scss";
import logo from "/images/hillfair-logo-dark.png";
import nithlogo from "/images/nith-black.png";

const PdfLayout = function () {
  const location = useLocation();
  const user = location.state;

  const { category } = user;

  return (
    <div className="pdfWrapper">
      <div className="pdfHeader">
        <div className="NITHLogo">
          <img src={nithlogo} />
        </div>
        <div className="headerText">
          <h3>राष्ट्रीय प्रौद्योगिकी संस्थान हमीरपुर हमीरपुर</h3>
          <h6>(हि.प्र.) 177005 (भारत)</h6>
          <h3>NATIONAL INSTITUTE OF TECHNOLOGY HAMIRPUR </h3>
          <h4>HAMIRPUR (H.P.)-177 005 (INDIA)</h4>
          <h6>(An Institute of National Importance under Ministry of HRD)</h6>
        </div>
        <div className="hillfareLogo">
          <img src={logo} />
        </div>
      </div>
      <div className="pageWrapper">
        <div className="firstPageInfo">
          <section>
            <p className="name">Name : {user["name"]}</p>
            <p className="email">Email : {user["email"]}</p>
          </section>
          <section>
            <p className="address">Address : {user["address"]}</p>
            <p className="category">Categeroy : {user["category"]}</p>
          </section>
        </div>

        {/* audience */}
        {category === 'audience' &&
          <div className="secondPageInfo">
            <section>
              <p className="address">Address : {user["address"]}</p>
              <p className="emergency">Emergency Contact No.: {user["emergency"]}</p>
              <p className="adhaar">Adhaar No.: {user["adhaar"]}</p>
            </section>
          </div>
        }
        {/* sponsors */}
        {category === 'sponsors' &&
          <div className="secondPageInfo">
            <section>
              <p className="company">Company : {user["company"]}</p>
              <p className="gst">GST No.: {user["gst"]}</p>
            </section>
          </div>
        }
        {/* participant */}
        {category === 'participant' &&
          <div className="secondPageInfo">
            <p className="college">College Name : {user["college"]}</p>
          </div>
        }
        {/* alumini */}
        {category === 'alumini' &&
          <div className="secondPageInfo">
            <p className="roll">Roll No : {user["roll"]}</p>
            <p className="batch">Batch : {user["batch"]}</p>
            <p className="department">Department : {user["department"]}</p>
          </div>
        }
        {/* guest */}
        {category === 'guest' &&
          <div className="secondPageInfo">
            <p className="designation">Designation : {user["designation"]}</p>
            <p className="social">Social Profile : {user["social"]}</p>
          </div>
        }
      </div>

    </div>
  );
};

export default PdfLayout;
