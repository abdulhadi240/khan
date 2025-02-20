import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRight, FaArrowLeft, FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";
import Slider from "react-slick";
import { getProducts, productSlug } from "@/lib/product";
import TitleSection from "@/components/titleSection";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";
import Feature from "@/components/features";
// import featureData from "@/data/service";

import TeamData from "@/data/team";
import Link from "next/link";


const featureData = [
  {
    "title": "Civil Engineers",
    "shortDescription": "Specialists in structural design and compliance",
    "img": "construction.png",
    "icon": "flaticon-house",
    "buttonText": "Learn More",
    "active": true
  },
  {
    "title": "Architects",
    "shortDescription": "Creators of functional and visually stunning spaces",
    "img": "infrastructure.png",
    "icon": "flaticon-road",
    "buttonText": "Learn More",
    "active": false
  },
  {
    "title": "Managers",
    "shortDescription": "Our Construction Managers oversee every phase of development",
    "img": "society.png",
    "icon": "flaticon-community",
    "buttonText": "Learn More",
    "active": false
  },
  {
    "title": "Skilled Labor",
    "shortDescription": "Including masons, electricians, and finishing experts",
    "img": "renovation.png",
    "icon": "flaticon-renovation",
    "buttonText": "Learn More",
    "active": false
  },
  {
    "title": "Technicians",
    "shortDescription": "Providing accurate land measurements and planning",
    "img": "equipment.png",
    "icon": "flaticon-machinery",
    "buttonText": "Learn More",
    "active": false
  },

];



function AboutUs() {
  const agents = getProducts(TeamData, "buying", "featured", 3);

  return (
    <LayoutOne topbar={false}>
      {/* Breadcrumb */}
      <ShopBreadCrumb
        title="About Us"
        sectionPace=""
        currentSlug="About Us"
      />

      {/* Hero Section */}
      <section className="about-hero-section py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={12} className="text-center">
              <TitleSection
                sectionClasses="mb-4"
                headingClasses="section-subtitle-2"
                titleSectionData={{
                  subTitle: "Who We Are",
                  title: "Khan & Co - Building Tomorrow’s Landmarks Today",
                }}
              />
              <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
                Khan & Co, established in 2012, is a leading construction and infrastructure development firm in Pakistan. With a strong commitment to sustainability and premium quality, we specialize in delivering top-notch residential, commercial, and public projects that enhance communities and transform landscapes.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Vision & Mission Section */}
      <section className="about-details-section py-5">
        <Container>
          <Row className="g-4">
            <Col lg={6} className="d-flex">
              <div className="vision-section p-4 bg-white shadow-sm rounded-3 flex-grow-1">
                <h3 className="mb-3">Our Vision</h3>
                <p className="text-muted">
                  To be Pakistan’s premier construction firm, pioneering innovative and eco-friendly solutions that redefine industry standards. Our goal is to create infrastructure that exceeds global benchmarks, ensuring a sustainable future for all.
                </p>
              </div>
            </Col>
            <Col lg={6} className="d-flex">
              <div className="mission-section p-4 bg-white shadow-sm rounded-3 flex-grow-1">
                <h3 className=" mb-3">Our Mission</h3>
                <p className="text-muted">
                  We deliver excellence by integrating cutting-edge technology, expert craftsmanship, and sustainable practices. Through transparency and a client-centric approach, we turn visionary projects into reality while fostering trust.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <Feature
        classes="section-bg-1 py-5"
        servicebtn={true}
        iconTag={false}
        data={featureData}
        titleSectionData={{
          sectionClasses: "text-center mb-5",
          subTitle: "Our Team",
          title: "Our Main Expertise",
        }}
      />

<section className="contact-section py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} className="text-center">
              <h2 className="mb-4 fw-bold text-dark">Get in Touch</h2>
              <p className="text-muted mb-5" style={{ maxWidth: "500px", margin: "0 auto" }}>
                We’re here to assist you with your next project. Contact us today to discuss how Khan & Co can bring your vision to life.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <div className="contact-card p-4 bg-white shadow-sm rounded-3">
                <h4 className="text-[#ff5a3c] mb-3 fw-semibold">Khan & Co Headquarters</h4>
                <ul className="list-unstyled text-muted">
                  <li className="mb-3 d-flex align-items-center">
                    <FaPhone className="me-2 text-[#ff5a3c]" />
                    <span>
                      <strong>Phone:</strong>{" "}
                      <a href="tel:03009216221" className="text-[#ff5a3c] text-decoration-none">
                        0300-9216221
                      </a>
                    </span>
                  </li>
                  <li className="mb-3 d-flex align-items-center">
                    <FaEnvelope className="me-2 text-[#ff5a3c]" />
                    <span>
                      <strong>Email:</strong>{" "}
                      <a href="mailto:info@khan-co.com" className="text-[#ff5a3c] text-decoration-none">
                        info@khan-co.com
                      </a>
                    </span>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <FaGlobe className="me-2 text-[#ff5a3c] mt-1" />
                    <span>
                      <strong>Website:</strong>{" "}
                      <a
                        href="http://www.khan-co.com"
                        className="text-[#ff5a3c] text-decoration-none"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        www.khan-co.com
                      </a>
                    </span>
                  </li>
                  <li className="d-flex align-items-start">
                    <span className="me-2 text-[#ff5a3c] mt-1">📍</span>
                    <span>
                      <strong>Address:</strong> 142, Maskeen Para, Shanti Nagar, National Stadium Road, Karachi East, Gulshan Town
                    </span>
                  </li>
                </ul>
                <Link href={'https://api.whatsapp.com/send/?phone=%2B923009216221&text&type=phone_number&app_absent=0'} target="_blank" className="btn bg-[#ff5a3c] mt-4 px-4 py-2 fw-medium">
                  Contact Us Now
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    </LayoutOne>
  );
}

export default AboutUs;