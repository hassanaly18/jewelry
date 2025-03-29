import React, { useState } from "react";

const Contact = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      {/* {isLoggedIn ? (
        <h1>Welcome user!</h1>
      ) : (
        <h1>"Go to login page and login"</h1>
      )}

    <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Login</button> */}


      {/* Inline css toggle darkmode */}
      <div
        style={{ 
          backgroundColor: darkMode ? "black" : "white",
          color: darkMode ? "white" : "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        {/* classname changes based on darkMode state */}
        <button className={darkMode ? "btnDark" : "btnLight"}  onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </>
  );
};

export default Contact;
