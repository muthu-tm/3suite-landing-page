import React from "react";
import "./product.css";
import Crypit from "../../img/Group 102.png";
import Codenz from "../../img/codenz.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import NFTsuite from "../../img/Group 427322400.png";
import SuiteApp from "../../img/3suite-img.png";

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

  const moveWebpage =async(link) =>{
    window.open(link, "_blank");
  }
  return (
    <div className="prod-sec" id="product">
      <div className="team-head">Products</div>
      <div class=" team-para " style={{ marginBottom: 30, marginTop: 5 }}>
        Our Products stands as a testament to the decentralized, user-centric
        future, empowered by blockchain's transparency and smart contract's
        efficiency. Seamlessly blending decentralized Apps, Metaverse and AI/ML,
        we offer an immersive experience that transcends the limitations of
        traditional web platforms.
      </div>
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
            <div className="p-heading">
              3Suite App | A suite of tools for Web3 Products{" "}
            </div>
            <div className="p-codenz">Your Go-To Token management Solution</div>
            <div className="p-para">
              {" "}
              At our 3suite app, we have set of tools that help you to quickly
              get into the web3 and helps you to build your Dapp. Experience the
              future of contract deployment as we simplify and streamline the
              process for you.
            </div>
            <button className="button" style={{marginTop:30}} onClick={()=>moveWebpage("https://3suite.app/")}>Take me there &rarr;</button>
          </div>
          <div className="prod-img">
            <img src={SuiteApp} alt="" className="p-img" />
          </div>
        </div>
        <div className="single-prod">
          <div className="prod-data">
            <div className="p-heading">
              NFT Marketplace | Empowering Digital Collectors{" "}
            </div>
            <div className="suite-nft">
              Where Creativity Meets the Blockchain: 3Suite- Your NFT Playground
            </div>
            <div className="p-para">
              {" "}
              Dive into a world of limitless imagination, where every digital
              creation becomes a masterpiece. Our curated collection features a
              diverse array of NFTs, from mesmerizing digital artwork to
              captivating virtual experiences. Each NFT is authenticated on the
              blockchain, ensuring its rarity and provenance.{" "}
            </div>
            <button className="s-cta">Coming Soon... </button>

          </div>
          <div className="prod-img">
            <img src={NFTsuite} alt="" className="p-img" />
          </div>
        </div>
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
            <button className="cry-cta">Comming Soon..</button>

          </div>
          <div className="prod-img">
            <img src={Crypit} alt="" className="p-img" />
          </div>
        </div>

        <div className="single-prod">
          <div className="prod-data">
            <div className="p-heading">
              Codenz | Transforming Code into NFT Treasures
            </div>
            <div className="p-codenz">
              Crafting Code, Curating NFTs: Your GitHub Gallery
            </div>
            <div className="p-para">
              {" "}
              Explore an extraordinary collection of tokenized code creations
              that transcend mere functionality. From elegant algorithms to
              poetic scripts, our marketplace hosts a variety of code artifacts
              waiting to be appreciated as digital treasures.{" "}
            </div>
            <button className="tmt-cta">Coming Soon..</button>

          </div>
          <div className="prod-img">
            <img src={Codenz} alt="" className="p-img" />
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Products;
