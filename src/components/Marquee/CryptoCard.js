import React from "react";
import "./price.css";
import Marquee from "react-fast-marquee";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";
import { IconContext } from "react-icons";
import { useEffect } from "react";
import { useState } from "react";

function CryptoCard() {
  const [coinData, setCoinData] = useState();


  const getCoinDetail = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    };
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en",
        config
      );
      let result = await response.json();
      console.log("getCoinDetail", result);
      setCoinData(result);
    } catch (err) {
      console.log(err, "error");
      return false;
    }
  };
  useEffect(() => {
    getCoinDetail();
  }, []);
  return (
    
    <Marquee className="marquee" speed={70} >
      {coinData?.map((item, index) => {
        let priceChange = item.price_change_percentage_24h_in_currency;
        let priceString = priceChange.toString();
        let priceTrimed = priceString.slice(1);

        return (
          <div className="singleCard">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <div className="c-name">{item.symbol}</div>
                {/* <div className="c-tkn">{item.market_cap_rank}</div> */}
                <div className="c-price">
                ${Number(item.current_price).toFixed(4)}
              </div>
              </div>
              <img
                src={item.image}
                alt=""
             
                className="marquee-img"
                style={{ borderRadius:"50%" }}
              />
            </div>
            {/* <div className="c-price">
                ${Number(item.current_price).toFixed(4)}
              </div> */}
              <div  style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}>

              <div className="c-Coinname">{item.name}</div>


              <div style={{ display: "flex", alignItems: "center",marginRight:8,marginTop:10 }}>
                {item.price_change_percentage_24h_in_currency > 0 ? (
                  <IconContext.Provider
                    value={{
                      size: "1.2em",
                      color: "green",
                      className: "global-class-name",
                    }}
                  >
                    <div style={{ marginTop: 5 }}>
                      <BsArrowUpShort />
                    </div>
                  </IconContext.Provider>
                ) : (
                  <IconContext.Provider
                    value={{
                      size: "1.2em",
                      color: "red",
                      className: "global-class-name",
                    }}
                  >
                    <div style={{ marginTop: 5 }}>
                      <BsArrowDownShort />
                    </div>
                  </IconContext.Provider>
                )}
                {item.price_change_percentage_24h_in_currency > 0 ? (
                  <div className="c-percentage green">
                    {Number(priceTrimed).toFixed(2)}
                  </div>
                ) : (
                  <div className="c-percentage red">
                    {Number(priceTrimed).toFixed(2)}
                  </div>
                )}
              </div>
              </div>
          </div>
        );
      })}
    </Marquee>

  );
}

export default CryptoCard;
