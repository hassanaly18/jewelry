import React from 'react'

const Footer = () => {
  return (
    <footer>
          <div className="footer-sec">
            <div className="aboutcon">
              <h1>PAGES</h1>
              <div className="aa">
                <a href="">About us</a>
                <a href="">Categories</a>
                <a href="">Shop</a>
                <a href="">Contact us</a>
                <a href="">Reviews</a>
              </div>
            </div>
            <div className="aboutcon">
              <h1>Resources</h1>
              <div className="aa">
                <a href="">FAQ </a>
                <a href="">Blogs</a>
                <a href="">Style Guide</a>
                <a href="">Error 404</a>
                <a href="">Coming Soon</a>
              </div>
            </div>

            <div className="aboutcon">
              <h1>Utilities</h1>
              <div className="aa">
                <a href="">Changelog </a>
                <a href=""> Licensing</a>
                <a href="">Privacy Policy</a>
                <a href="">Return Policy</a>
                <a href="">Terms & Conditions</a>
              </div>
            </div>
            <div className="last">
              <h1 className="aw">10% off your first purchase</h1>
              <label>
                Special offers for subscribers. Don't miss out on future offers,
                new arrivals, & expert fashion tips.
              </label>
              <form action="" className="form">
                <input type="Email address" />
                <button>SUBCRIBE</button>
              </form>

              <div className="app">
                <img
                  src="https://cdn.prod.website-files.com/664dba28a7ff416978f4c0ec/6683f0dedb820b4337722d8e_ic-twitter.svg"
                  alt=""
                />
                <img
                  src="https://cdn.prod.website-files.com/664dba28a7ff416978f4c0ec/6683f0def0b81ab1d4841506_ic-facebook.svg"
                  alt=""
                />
                <img
                  src="https://cdn.prod.website-files.com/664dba28a7ff416978f4c0ec/6683f0debf8a71a09e3a4738_ic-youtube.svg"
                  alt=""
                />
                <img
                  src="https://cdn.prod.website-files.com/664dba28a7ff416978f4c0ec/6683f0de7ad04e12547f4579_ic-insta.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <div className="borderline"></div>
            <div className="la">
              <label>© 2024 Zema. All rights reserved.</label>
              <label>Designed by Nixar. Powered by Webflow.</label>
            </div>
          </div>
        </footer>
  )
}

export default Footer