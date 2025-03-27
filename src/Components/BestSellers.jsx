import React from "react";
import Footer from "./Footer";

const BestSellers = () => {
  const data = [
    {
      id: 1,
      image:
        "https://cdn.prod.website-files.com/6683cf9f32420a5138802cae/6686273431bc1f2fbbf9f5a6_Product-Thumb-12-p-500.jpg",
      title: "Lustrous Diamond Ring",
      price: "$ 650.70 USD",
    },
    {
      id: 2,
      image:
        "https://cdn.prod.website-files.com/6683cf9f32420a5138802cae/66862918d29189a265b93f17_Product-Thumb-11-p-500.jpg",
      title: "Crystal Cascade Bracelet",
      price: "$ 650.70 USD",
    },
    {
      id: 3,
      image:
        "https://cdn.prod.website-files.com/6683cf9f32420a5138802cae/66862734add662916a344fa2_Product-Thumb-10-p-500.jpg",
      title: "Radiant Ruby Chandeliers",
      price: "$ 650.70 USD",
    },
    {
      id: 4,
      image:
        "https://cdn.prod.website-files.com/6683cf9f32420a5138802cae/668627f0add662916a351911_Product-Thumb-09-p-500.jpg",
      title: "Twilight Sapphire Necklace",
      price: "$ 650.70 USD",
    },
  ];

  return (
    <div className="boxx">
      <div className="seller">
        <label>Everyone's Loving </label>
        <h1>Best Sellers</h1>
      </div>
      <div className="container">
        <div className="img-sec">

          {data.map((allElements) => {
            return (
              <div key={allElements.id}>
                <div className="img-ring">
                  <img
                    src={allElements.image}
                    alt={allElements.title}
                  />
                </div>
                <h1>{allElements.title}</h1>
                <label>{allElements.price}</label>
              </div>
            );
          })}
          {/* <div>
            <div className="img-ring">
              <img
                src="https://cdn.prod.website-files.com/6683cf9f32420a5138802cae/6686273431bc1f2fbbf9f5a6_Product-Thumb-12-p-500.jpg"
                alt=""
              />
            </div>
            <h1>Lustrous Diamond Ring</h1>
            <label>$ 650.70 USD</label>
          </div>
          <div>
            <div className="img-ring">
              <img
                src="https://cdn.prod.website-files.com/6683cf9f32420a5138802cae/66862918d29189a265b93f17_Product-Thumb-11-p-500.jpg"
                alt=""
              />
            </div>
            <h1> Crystal Cascade Bracelet</h1>
            <label>$ 650.70 USD</label>
          </div>
          <div>
            <div className="img-ring">
              <img
                src="https://cdn.prod.website-files.com/6683cf9f32420a5138802cae/66862734add662916a344fa2_Product-Thumb-10-p-500.jpg"
                alt=""
              />
            </div>
            <h1>Radiant Ruby Chandeliers</h1>
            <label>$ 650.70 USD</label>
          </div>
          <div>
            <div className="img-ring">
              <img
                src="https://cdn.prod.website-files.com/6683cf9f32420a5138802cae/668627f0add662916a351911_Product-Thumb-09-p-500.jpg"
                alt=""
              />
            </div>
            <div>
              <h1>Twilight Sapphire Necklace</h1>
              <label>$ 650.70 USD</label>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
