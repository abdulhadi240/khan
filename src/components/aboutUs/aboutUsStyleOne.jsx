import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaPlay } from "react-icons/fa";
import ModalVideo from "react-modal-video";
import { useState } from "react";
function AboutUsStyleOne({ sectionSpace }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>

      <div className={`ltn__about-us-area ${sectionSpace}`}>
        <Container>
          <Row>
            <Col xs={12} lg={6} className="align-self-center">
              <div className="about-us-img-wrap about-img-left">
                <img src="/pic.webp" alt="About Us Image" />
                <div className="about-us-img-info about-us-img-info-2 about-us-img-info-3">
                  <div className="ltn__video-img ltn__animation-pulse1">
                  <video autoPlay muted loop id="myVideo">
                <source src="/video.mp4" type="video/mp4"/>
            </video>

                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={6} className="align-self-center">
              <div className="about-us-info-wrap">
                <div className="section-title-area mb-20">
                  <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                    About Us
                  </h6>
                  <h1 className="section-title">
                  Building Construction & Infrastructure Development Experts<span>.</span>
                  </h1>
                  <p>
                  About Khan & Co Founded in 2012, Khan & Co has emerged as a trusted name in construction and infrastructure development. We specialize in designing and delivering residential, commercial, and community projects that balance functionality, aesthetics, and resilience.
                  </p>
                </div>
                <ul className="ltn__list-item-half clearfix">
                  <li>
                    <i className="flaticon-home-2"></i>
                    Residential Construction
                  </li>
                  <li>
                    <i className="flaticon-mountain"></i>
                    Commercial Projects
                  </li>
                  <li>
                    <i className="flaticon-heart"></i>
                    Infrastructure 
                  </li>
                  <li>
                    <i className="flaticon-secure"></i>
                    Society Development 
                  </li>
                </ul>
                <div className="ltn__callout bg-overlay-theme-05  mt-30">
                  <p>
                  In addition to our construction services, we proudly contribute to societys development by undertaking community-oriented projects that enhance the quality of life.
                  </p>
                </div>
                <div className="btn-wrapper animated">
                  <Link
                    href="/service"
                    className="theme-btn-1 btn btn-effect-1"
                  >
                    OUR SERVICES
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AboutUsStyleOne;
