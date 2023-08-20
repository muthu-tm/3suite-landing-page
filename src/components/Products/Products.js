import React from "react";
import "./product.css";
import Crypit from "../../img/crypit.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import Oval from "../../img/ovalShadow.svg"

function Products() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 2000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1100 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1100, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="prod-sec" id="product">
      {/* <img src={Oval} alt='' className='floating-oval' /> */}
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        autoPlayTimeout={100}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={100}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="single-prod">
          <div className="prod-data">
            <div className="p-heading">CrypIT | HODL, EARN, LEARN, SPEND</div>
            <div className="crypit-nft">
              The Crypto Super App for the decentralized future.
            </div>
            <div className="p-para">
              {" "}
              CrypIT is an unified crypto super app built to make the web3
              journey of everyday people safe, simple and hassle free. CrypIT
              aims to bridge the gap between traditional fiat and crypto
              currency.{" "}
            </div>
          </div>
          <div className="prod-img">
            <img src={Crypit} alt="" className="p-img" />
          </div>
        </div>
        <div className="single-prod">
          <div className="prod-data">
            <div className="p-heading">Codenz | Git Based NFTs Here</div>
            <div className="p-subhead">
              The Crypto Super App for the decentralized future.
            </div>
            <div className="p-para">
              {" "}
              CrypIT is an unified crypto super app built to make the web3
              journey of everyday people safe, simple and hassle free. CrypIT
              aims to bridge the gap between traditional fiat and crypto
              currency.{" "}
            </div>
          </div>
          <div className="prod-img">
            <img src={Crypit} alt="" className="p-img" />
          </div>
        </div>
        <div className="single-prod">
          <div className="prod-data">
            <div className="p-heading">3Suite | Git Based NFTs Here</div>
            <div className="suite-nft">
              The Crypto Super App for the decentralized future.
            </div>
            <div className="p-para">
              {" "}
              CrypIT is an unified crypto super app built to make the web3
              journey of everyday people safe, simple and hassle free. CrypIT
              aims to bridge the gap between traditional fiat and crypto
              currency.{" "}
            </div>
          </div>
          <div className="prod-img">
            <img src={Crypit} alt="" className="p-img" />
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Products;
