import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Slider from "react-slick";
import { getProducts, productSlug } from "@/lib/product";
import TitleSection from "@/components/titleSection";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import BlogItem from "@/components/blog";
import blogData from "@/data/blog";
import CallToAction from "@/components/callToAction";
import AboutUsStyletwo from "@/components/aboutUs/aboutUsStyleTwo";
import Feature from "@/components/features";
import featureData from "@/data/service";

const featureData1 = [
  {
    title: "Residential & Commercial Construction",
    shortDescription:
      "Custom homes, apartments, premium villas, high-rise offices, retail complexes, mixed-use developments.",
    img: "construction.png",
    icon: "flaticon-house",
    buttonText: "Learn More",
    active: true,
  },
  {
    title: "Infrastructure Development",
    shortDescription:
      "Advanced road networks with asphalt/concrete paving, drainage, sewage, public utility systems, and community amenities like boundary walls and landscaping.",
    img: "infrastructure.png",
    icon: "flaticon-road",
    buttonText: "Learn More",
    active: false,
  },
  {
    title: "Society Development Works",
    shortDescription:
      "Parks, playgrounds, community centers, mosques, schools, hospitals, and sustainable public spaces designed for community enhancement.",
    img: "society.png",
    icon: "flaticon-community",
    buttonText: "Learn More",
    active: false,
  },
  {
    title: "Renovation & Expansion",
    shortDescription:
      "Structural enhancements, modernization, space optimization, and retrofitting for existing buildings.",
    img: "renovation.png",
    icon: "flaticon-renovation",
    buttonText: "Learn More",
    active: false,
  },
  {
    title: "Equipment & Technology",
    shortDescription:
      "Utilizing excavators, cranes, bulldozers, concrete mixers, laser-guided leveling tools, and eco-friendly construction technologies.",
    img: "equipment.png",
    icon: "flaticon-machinery",
    buttonText: "Learn More",
    active: false,
  },
  {
    title: "Compliance & Certification",
    shortDescription:
      "Registered with FBR (NTN: 1530422540423, REF: D391917-3) and PEC-certified team ensuring compliance and top-notch quality.",
    img: "certification.png",
    icon: "flaticon-certificate",
    buttonText: "Learn More",
    active: false,
  },
];

function Service() {
  const services = getProducts(featureData, "buying", "featured", 6);

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0}
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
      aria-disabled={currentSlide === slideCount - 1}
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
    <LayoutOne topbar={false}>
      {/* Breadcrumb */}
      <ShopBreadCrumb
        title="What We Do"
        sectionPace=""
        currentSlug="Service"
      />

      {/* Core Services Section */}
      <Feature
        classes="section-bg-1"
        servicebtn={false}
        iconTag={false}
        headingClasses="section-subtitle-2"
        data={featureData1}
        titleSectionData={{
          sectionClasses: "text-center",
          subTitle: "Our Services",
          title: "Our Core Services",
        }}
      />

      {/* Why Choose Us / Our Commitment Section */}
      <section className="why-choose-us-section py-5">
        <Container>
          <TitleSection
            sectionClasses="text-center mb-5"
            headingClasses="section-subtitle-2"
            titleSectionData={{
              subTitle: "Why Choose Khan & Co?",
              title: "Our Commitment",
            }}
          />
          <Row className="g-4">
            <Col md={6} lg={3}>
              <div className="feature-card p-3 bg-white shadow-sm rounded-3 text-center">
                <h5 className="mb-2">12+ Years of Experience</h5>
                <p className="text-muted">Trusted since 2012 with a proven track record.</p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="feature-card p-3 bg-white shadow-sm rounded-3 text-center">
                <h5 className="mb-2">PEC-Certified Team</h5>
                <p className="text-muted">Ensuring quality and compliance with industry standards.</p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="feature-card p-3 bg-white shadow-sm rounded-3 text-center">
                <h5 className="mb-2">End-to-End Expertise</h5>
                <p className="text-muted">From blueprints to project handovers</p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="feature-card p-3 bg-white shadow-sm rounded-3 text-center">
                <h5 className="mb-2">Sustainability</h5>
                <p className="text-muted">Committed to eco-friendly building practices.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </LayoutOne>
  );
}

export default Service;