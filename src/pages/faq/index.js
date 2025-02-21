import { useState } from "react";
import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaArrowRight,
  FaArrowLeft,
  FaPlay,
  FaSearch,
  FaRegEnvelopeOpen,
  FaPhoneAlt,
} from "react-icons/fa";
import Slider from "react-slick";
import { productSlug } from "@/lib/product";
import TitleSection from "@/components/titleSection";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import BlogItem from "@/components/blog";
import blogData from "@/data/blog";
import CallToAction from "@/components/callToAction";
import Accordion from "react-bootstrap/Accordion";
import ModalVideo from "react-modal-video";
import Link from "next/link";
import CounterUp from "@/components/counterUp";

function Faq() {
  const [isOpen, setOpen] = useState(false);

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <FaArrowLeft />
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <FaArrowRight />
    </button>
  );
  const blogSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  return (
    <>
      <LayoutOne topbar={false}>

        <ShopBreadCrumb
          title="Frequently asked questions"
          sectionPace=""
          currentSlug="FAQ"
        />

        {/* <!-- FAQ AREA START (faq-2) (ID > accordion_2) --> */}
        <div className="ltn__faq-area mb-100">
          <div className="container">
          <Row>
            <Col xs={12} lg={8}>
              <div className="ltn__faq-inner ltn__faq-inner-2">
                <Accordion defaultActiveKey="2">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>What services does Khan & Co offer?</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Khan & Co, founded in 2012, specializes in a wide range of construction and infrastructure development services. We excel in residential construction (custom homes, apartments, premium villas), commercial projects (high-rise offices, retail complexes, mixed-use developments), infrastructure development (roads, drainage, public utilities), society development works (parks, mosques, schools, hospitals), and renovation/modernization of existing structures. Our approach integrates interior design, smart building technologies, and eco-friendly practices to deliver sustainable, high-quality results.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>How does Khan & Co ensure project quality?</Accordion.Header>
                    <Accordion.Body>                        
                      <p>
                        Quality is a core value at Khan & Co. Our PEC-certified team, including Civil Engineers, Architects, and Construction Managers, ensures precision and compliance with industry standards. We use premium materials, state-of-the-art equipment like excavators, cranes, and laser-guided leveling tools, and over 12 years of expertise to deliver projects that meet the highest benchmarks. Our FBR registration (NTN: 1530422540423, REF: D391917-3) further guarantees adherence to regulatory standards.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3">
                    <Accordion.Header>How can I start a project with Khan & Co?</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        To begin a project with Khan & Co, simply contact us at 0300-9216221 or visit our office at 142, Maskeen Para, Shanti Nagar, National Stadium Road, Karachi East, Gulshan Town. Our client-centric approach ensures we listen to your needs, provide transparent communication, and craft a tailored plan from blueprints to handover. Whether it’s a residential, commercial, or infrastructure project, our team will guide you every step of the way with our end-to-end expertise.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="4">
                    <Accordion.Header>What is Khan & Co’s approach to sustainability?</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Sustainability is a priority at Khan & Co. We incorporate eco-friendly construction methodologies, such as using energy-efficient materials and advanced technologies, to minimize environmental impact. Our projects—like parks, community centers, and public utilities—focus on creating sustainable public spaces that enhance community life while adhering to environmentally responsible practices, aligning with our vision to build enduring, transformative structures.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="5">
                    <Accordion.Header>How does Khan & Co handle project timelines?</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Timely project execution is part of our vision at Khan & Co. Our Construction Managers, with over a decade of experience, oversee every phase to ensure precision and efficiency. We utilize advanced equipment (e.g., cranes, bulldozers, concrete mixers) and a skilled workforce—including masons, electricians, and surveyors—to keep projects on schedule without compromising quality. Transparent communication with clients also helps us address any delays proactively.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="6">
                    <Accordion.Header>Why choose Khan & Co for my construction needs?</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Khan & Co stands out with over 12 years of experience since 2012, a PEC-certified team, comprehensive solutions from design to completion, and a commitment to sustainability. We’ve built a legacy of trust by delivering iconic residential, commercial, and infrastructure projects across Pakistan. Our focus on quality, transparency, and client partnership ensures your vision becomes a reality with lasting value.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="7">
                    <Accordion.Header>How can I contact Khan & Co for more information?</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        You can reach Khan & Co through Muhammad Khan (Proprietor) at our office located at 142, Maskeen Para, Shanti Nagar, National Stadium Road, Karachi East, Gulshan Town. Call us at 0300-9216221 or visit our website at{" "}
                        <a href="http://www.khan-co.com" target="_blank" rel="noopener noreferrer">
                          www.khan-co.com
                        </a>{" "}
                        for more details. We’re available 24/7 to assist with your inquiries and project needs.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

                <div className="need-support text-center mt-100">
                  <h2>Still need help? Reach out to support 24/7:</h2>
                  <div className="btn-wrapper mb-30">
                    <Link href="/contact" className="theme-btn-1 btn">
                      Contact Us
                    </Link>
                  </div>
                  <h3>
                    <FaPhoneAlt /> 0300-9216221
                  </h3>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={4}>
              <aside className="sidebar-area ltn__right-sidebar">
                {/* Newsletter Widget */}
                <div className="widget ltn__search-widget ltn__newsletter-widget">
                  <h6 className="ltn__widget-sub-title">{`// subscribe`}</h6>
                  <h4 className="ltn__widget-title">Get Newsletter</h4>
                  <form action="#">
                    <input type="text" name="search" placeholder="Search" />
                    <button type="submit">
                      <FaSearch />
                    </button>
                  </form>
                  <div className="ltn__newsletter-bg-icon">
                    <FaRegEnvelopeOpen />
                  </div>
                </div>
                {/* Banner Widget */}
                <div className="widget ltn__banner-widget">
                  <Link href="/shop">
                    <img src="/crop.webp" alt="Banner Image" />
                  </Link>
                </div>
              </aside>
            </Col>
          </Row>
          </div>
        </div>
        {/* <!-- FAQ AREA START --> */}

        {/* <!-- COUNTER UP AREA START -->  */}
        <CounterUp />

      </LayoutOne>
    </>
  );
}

export default Faq;
