
import { useSelector } from "react-redux";
import { getProducts, productSlug, getDiscountPrice } from "@/lib/product";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { LayoutFour } from "@/layouts";
import HeroSectionStyleFive from "@/components/hero/styleFive";
import AboutUsStyleOne from "@/components/aboutUs/aboutUsStyleOne";
import AboutUsStyleTwo from "@/components/aboutUs/aboutUsStyleTwo";
import CounterUp from "@/components/counterUp";
import Feature from "@/components/features";
import TitleSection from "@/components/titleSection";
import ProductItem from "@/components/product";
import CallToAction from "@/components/callToAction";
import VideoBanner from "@/components/banner/videoBanner";
import aminitiesData from "@/data/aminities/index.json";
import AminitiesItem from "@/components/aminities/item";
import TestimonialCarouselItem from "@/components/testimonialCarousel";
import testimonialData from "@/data/testimonial";
import BlogItem from "@/components/blog";
import blogData from "@/data/blog";
import featuresData from "@/data/service";


const featureData = [
    {
      "title": "Residential & Commercial Construction",
      "shortDescription": "Custom homes, apartments, villas, high-rise offices",
      "img": "construction.png",
      "icon": "flaticon-house",
      "buttonText": "Learn More",
      "active": true
    },
    {
      "title": "Infrastructure Development",
      "shortDescription": "Advanced road networks, drainage, sewage, and public utility systems with high-quality execution.",
      "img": "infrastructure.png",
      "icon": "flaticon-road",
      "buttonText": "Learn More",
      "active": false
    },
    {
      "title": "Society Development Works",
      "shortDescription": "Parks, playgrounds, community centers, schools, hospitals, and other sustainable public spaces.",
      "img": "society.png",
      "icon": "flaticon-community",
      "buttonText": "Learn More",
      "active": false
    },
    {
      "title": "Renovation & Expansion",
      "shortDescription": "Structural enhancements, modernization, and space optimization for existing buildings.",
      "img": "renovation.png",
      "icon": "flaticon-renovation",
      "buttonText": "Learn More",
      "active": false
    },
    {
      "title": "Equipment & Technology",
      "shortDescription": "Utilizing excavators, cranes, concrete mixers, and eco-friendly technologies for precision",
      "img": "equipment.png",
      "icon": "flaticon-machinery",
      "buttonText": "Learn More",
      "active": false
    },
    {
      "title": "Compliance & Certification",
      "shortDescription": "Registered with FBR and PEC-certified team ensuring compliance and top-notch quality.",
      "img": "certification.png",
      "icon": "flaticon-certificate",
      "buttonText": "Learn More",
      "active": false
    }
  ];
  


function HomePage(props) {
    const { products } = useSelector((state) => state.product);
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
    const productCarouselsettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        responsive: [
            {
                breakpoint: 1799,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const testiMonialsettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const blogSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,

        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    const { cartItems } = useSelector((state) => state.cart);
    const { wishlistItems } = useSelector((state) => state.wishlist);
    const { compareItems } = useSelector((state) => state.compare);

    return (
        <>
            <LayoutFour topbar={false}>
                <HeroSectionStyleFive />

                {/* <!-- ABOUT US AREA START -->  */}
                <AboutUsStyleOne sectionSpace="pt-120 pb-90" />
                {/* <!-- ABOUT US AREA END -->

      <!-- FEATURE AREA START ( Feature - 6) --> */}
                <Feature
                    classes="section-bg-1"
                    servicebtn={true}
                    iconTag={false}
                    data={featureData}
                    headingClasses="section-subtitle-2"
                    titleSectionData={{
                        sectionClasses: "text-center",
                        subTitle: "Our Services",
                        title: "Our Main Focus",
                    }}
                />


                <div className="ltn__apartments-plan-area pb-70 pt-10">
                    <Container>
                        <Row>
                            <Col>
                                <TitleSection
                                    sectionClasses="text-center"
                                    headingClasses="section-subtitle-2"
                                    titleSectionData={{
                                        subTitle: "Apartment Sketch",
                                        title: "Apartments Plan",
                                        additionalClassName: "",
                                    }}
                                />

                                <Tab.Container defaultActiveKey="first">
                                    <div className="ltn__tab-menu ltn__tab-menu-3 text-center">
                                        <Nav className="nav justify-content-center">
                                            <Nav.Link eventKey="first">The Studio</Nav.Link>
                                            <Nav.Link eventKey="second">Deluxe Portion</Nav.Link>
                                            <Nav.Link eventKey="third">Penthouse</Nav.Link>
                                            <Nav.Link eventKey="fourth">Top Garden</Nav.Link>
                                            <Nav.Link eventKey="five"> Double Height</Nav.Link>
                                        </Nav>
                                    </div>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <div className="ltn__apartments-tab-content-inner">
                                                <Row>
                                                    <Col xs={12} lg={6}>
                                                        <div className="apartments-plan-info ltn__secondary-bg text-color-white">
                                                            <h2>The Studio</h2>
                                                            <p>
                                                                Enimad minim veniam quis nostrud exercitation
                                                                ullamco laboris. Lorem ipsum dolor sit amet cons
                                                                aetetur adipisicing elit sedo eiusmod
                                                                tempor.Incididunt labore et dolore magna aliqua.
                                                                sed ayd minim veniam.
                                                            </p>
                                                            <div className="apartments-info-list apartments-info-list-color mt-40">
                                                                <ul>
                                                                    <li>
                                                                        <label>Total Area</label>
                                                                        <span>2800 Sq. Ft</span>
                                                                    </li>
                                                                    <li>
                                                                        <label>Bedroom</label>
                                                                        <span>150 Sq. Ft</span>
                                                                    </li>
                                                                    <li>
                                                                        <label>Bathroom</label>
                                                                        <span>45 Sq. Ft</span>
                                                                    </li>
                                                                    <li>
                                                                        <label>Belcony/Pets</label>
                                                                        <span>Allowed</span>
                                                                    </li>
                                                                    <li>
                                                                        <label>Lounge</label>
                                                                        <span>650 Sq. Ft</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col xs={12} lg={6}>
                                                        <div className="apartments-plan-img">
                                                            <img src="/img/others/10.png" alt="#" />
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <div className="ltn__product-tab-content-inner">
                                                <Row>
                                                    <Col xs={12} lg={6}>
                                                        <div className="apartments-plan-info ltn__secondary-bg text-color-white">
                                                            <h2>Deluxe Portion</h2>
                                                            <p>
                                                                Enimad minim veniam quis nostrud exercitation
                                                                ullamco laboris. Lorem ipsum dolor sit amet cons
                                                                aetetur adipisicing elit sedo eiusmod
                                                                tempor.Incididunt labore et dolore magna aliqua.
                                                                sed ayd minim veniam.
                                                            </p>
                                                            <div className="apartments-info-list apartments-info-list-color mt-40">
                                                                <ul>
                                                                    <li>
                                                                        <label>Total Area</label>
                                                                        <span>2800 Sq. Ft</span>
                                                                    </li>
                                                                    <li>
                                                                        <label>Bedroom</label>
                                                                        <span>150 Sq. Ft</span>
                                                                    </li>
                                                                    <li>
                                                                        <label>Bathroom</label>
                                                                        <span>45 Sq. Ft</span>
                                                                    </li>
                                                                    <li>
                                                                        <label>Belcony/Pets</label>
                                                                        <span>Allowed</span>
                                                                    </li>
                                                                    <li>
                                                                        <label>Lounge</label>
                                                                        <span>650 Sq. Ft</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col xs={12} lg={6}>
                                                        <div className="apartments-plan-img">
                                                            <img src="/img/others/10.png" alt="#" />
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <div className="ltn__product-tab-content-inner">
                                                <Row>
                                                    <Col xs={12} lg={6}>
                                                        <div className="apartments-plan-info ltn__secondary-bg text-color-white">
                                                            <h2>Penthouse</h2>
                                                            <p>
                                                                Enimad minim veniam quis nostrud exercitation
                                                                ullamco laboris. Lorem ipsum dolor sit amet cons
                                                                aetetur adipisicing elit sedo eiusmod
                                                                tempor.Incididunt labore et dolore magna aliqua.
                                                                sed ayd minim veniam.
                                                            </p>
                                                            <div className="apartments-info-list apartments-info-list-color mt-40">
                                                                <ul>
                                                                    <li>
                                                                        <label>Total Area</label>
                                                                        <span>2800 Sq. Ft</span>
                                                                    </li>
                                                                    <li>
                                                                        <label>Bedroom</label>
                                                                        <span>150 Sq. Ft</span>
                                                                    </li>
                                                                    <li>
                                                                        <label>Bathroom</label>
                                                                        <span>45 Sq. Ft</span>
                                                                    </li>
                                                                    <li>
                                                                        <label>Belcony/Pets</label>
                                                                        <span>Allowed</span>
                                                                    </li>
                                                                    <li>
                                                                        <label>Lounge</label>
                                                                        <span>650 Sq. Ft</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col xs={12} lg={6}>
                                                        <div className="apartments-plan-img">
                                                            <img src="/img/others/10.png" alt="#" />
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fourth">
                                            <div className="ltn__product-tab-content-inner">
                                                <Row>
                                                    <Col xs={12} lg={6}>
                                                        <div className="apartments-plan-info ltn__secondary-bg text-color-white">
                                                            <h2>Top Garden</h2>
                                                            <p>
                                                                Enimad minim veniam quis nostrud exercitation
                                                                ullamco laboris. Lorem ipsum dolor sit amet cons
                                                                aetetur adipisicing elit sedo eiusmod
                                                                tempor.Incididunt labore et dolore magna aliqua.
                                                                sed ayd minim veniam.
                                                            </p>
                                                            <div className="apartments-info-list apartments-info-list-color mt-40">
                                                                <ul>
                                                                    <li>
                                                                        <label>Total Area</label>
                                                                        <span>2800 Sq. Ft</span>
                                                                    </li>
                                                                    <li>
                                                                        <label>Bedroom</label>
                                                                        <span>150 Sq. Ft</span>
                                                                    </li>
                                                                    <li>
                                                                        <label>Bathroom</label>
                                                                        <span>45 Sq. Ft</span>
                                                                    </li>
                                                                    <li>
                                                                        <label>Belcony/Pets</label>
                                                                        <span>Allowed</span>
                                                                    </li>
                                                                    <li>
                                                                        <label>Lounge</label>
                                                                        <span>650 Sq. Ft</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col xs={12} lg={6}>
                                                        <div className="apartments-plan-img">
                                                            <img src="/img/others/10.png" alt="#" />
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="five">
                                            <div className="ltn__product-tab-content-inner">
                                                <Row>
                                                    <Col xs={12} lg={6}>
                                                        <div className="apartments-plan-info ltn__secondary-bg text-color-white">
                                                            <h2>Double Height</h2>
                                                            <p>
                                                                Enimad minim veniam quis nostrud exercitation
                                                                ullamco laboris. Lorem ipsum dolor sit amet cons
                                                                aetetur adipisicing elit sedo eiusmod
                                                                tempor.Incididunt labore et dolore magna aliqua.
                                                                sed ayd minim veniam.
                                                            </p>
                                                            <div className="apartments-info-list apartments-info-list-color mt-40">
                                                                <ul>
                                                                    <li>
                                                                        <label>Total Area</label>
                                                                        <span>2800 Sq. Ft</span>
                                                                    </li>
                                                                    <li>
                                                                        <label>Bedroom</label>
                                                                        <span>150 Sq. Ft</span>
                                                                    </li>
                                                                    <li>
                                                                        <label>Bathroom</label>
                                                                        <span>45 Sq. Ft</span>
                                                                    </li>
                                                                    <li>
                                                                        <label>Belcony/Pets</label>
                                                                        <span>Allowed</span>
                                                                    </li>
                                                                    <li>
                                                                        <label>Lounge</label>
                                                                        <span>650 Sq. Ft</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col xs={12} lg={6}>
                                                        <div className="apartments-plan-img">
                                                            <img src="/img/others/10.png" alt="#" />
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </Col>
                        </Row>
                    </Container>
                </div>


                {/* <!-- VIDEO AREA START --> */}
                <div className="ltn__video-popup-area">
                    <VideoBanner />
                </div>
                {/* <!-- VIDEO AREA END --> */}
                {/* <!-- CATEGORY AREA START -->  */}
                <div className="ltn__category-area ltn__product-gutter pt-115 pb-90">
                    <Container>
                        <Row>
                            <Col xs={12}>
                                <TitleSection
                                    sectionClasses="text-center"
                                    headingClasses="section-subtitle-2"
                                    titleSectionData={{
                                        subTitle: "Our Aminities",
                                        title: "Building Aminities",
                                        additionalClassName: "",
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="slick-arrow-1 justify-content-center">
                            {aminitiesData.map((data, key) => {
                                return (
                                    <Col key={key} xs={12} sm={6} md={4} lg={3}>
                                        <AminitiesItem data={data} />
                                    </Col>
                                );
                            })}
                        </Row>
                    </Container>
                </div>
                {/* <!-- CATEGORY AREA END --> */}

                {/* <!-- TESTIMONIAL AREA START (testimonial-7) -->  
                <div
                    className="ltn__testimonial-area bg-image-top pt-115 pb-70"
                    style={{ backgroundImage: `url("../img/bg/20.jpg")` }}
                >
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <TitleSection
                                    sectionClasses="text-center"
                                    headingClasses="section-subtitle-2"
                                    titleSectionData={{
                                        subTitle: "Our Testimonial",
                                        title: "Clients Feedback",
                                    }}
                                />
                            </Col>
                        </Row>

                        <Slider
                            {...testiMonialsettings}
                            className="ltn__testimonial-slider-5-active slick-arrow-1"
                        >
                            {testimonialData.map((data, key) => {
                                return <TestimonialCarouselItem key={key} data={data} />;
                            })}
                        </Slider>
                    </Container>
                </div>
                {/* <!-- TESTIMONIAL AREA END --> */}

                <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom">
                    <Container>
                        <Row>
                            <Col xs={12}>
                                <CallToAction />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </LayoutFour>
        </>
    );
}


export default HomePage;
