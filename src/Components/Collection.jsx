import React from "react";

const Collection = () => {
  return (
    <div className="c">
      <div className="jewelry">
        <div className="piece">
          <img
            src="https://cdn.prod.website-files.com/664dba28a7ff416978f4c0ec/6686853561e02fbafcbecca8_about-04.jpg"
            alt=""
          />
        </div>
        <div className="line"></div>
        <h1>10k+</h1>
        <div className="diamond">
          <label> Over 1,000 unique jewelry pieces</label>
          <img
            src="https://cdn.prod.website-files.com/664dba28a7ff416978f4c0ec/66866eae7413daab5837f502_ic-fact-02.svg"
            alt=""
          />
        </div>
      </div>
      <div className="aboutus">
        <div className="sec-one">
          <h1>Find something new in every Zema collection</h1>
          <div className="sp">
            <span>
              We are passionate about modern & stylish jewelry. We specialize in
              offering a curated selection of modern & stylish jewelry that
              reflects elegance.
            </span>
          </div>
          <button>ABOUT US</button>
        </div>
        <div className="line"></div>
        <div className="d">
          <h1>40k+</h1>
          <div className="diamond">
            <label> 40+ talented artisans & designers</label>
            <img
              src="https://cdn.prod.website-files.com/664dba28a7ff416978f4c0ec/66866eae2ecaae8dc53b3239_ic-fact-01.svg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="last-img">
        <img
          src="https://cdn.prod.website-files.com/664dba28a7ff416978f4c0ec/66868535682fce4489cb8d46_about-03.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Collection;
