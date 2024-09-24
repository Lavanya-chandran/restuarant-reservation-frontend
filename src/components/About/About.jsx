import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

function About() {
  const customFontStyle2 = {
    fontFamily: "Garet-Book, sans-serif",
    fontSize: "1.5rem",
  };
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fadeProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0%)" : "translateY(50%)",
    from: { opacity: 0, transform: "translateY(50%)" },
  });

 {/* const teamMembersProps = useSpring({
    opacity: isVisible ? 1 : 0,
    from: { opacity: 0 },
    delay: 500,
  });

  const photosProps = useSpring({
    opacity: isVisible ? 1 : 0,
    from: { opacity: 0 },
    delay: 1000,
  });*/}

  return (
    <div className="flex items-center justify-center min-h-screen">
      <img
        className="h-full lowbrightness w-full object-cover z-[-1] fixed top-0"
        src="https://images.unsplash.com/photo-1579027989536-b7b1f875659b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      {/* <img
        className="h-full lowbrightness w-full object-cover z-[-1] fixed top-0"
        src="https://images.unsplash.com/photo-1449038319053-cc4a78b12733?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGRpbmV8ZW58MHx8MHx8fDA%3D"
        alt=""
      /> */}
      <div className="text-white text-center w-5/6">
        <h1 className="text-4xl font-extrabold text-center mb-8">
          Welcome to Dine
        </h1>

        <p className="text-lg font-bold mb-8">
          Your go-to destination for a seamless dining experience! Whether
          you're a food enthusiast looking to explore new culinary horizons or
          simply planning a special night out, we've got you covered. At Dine,
          we bring the best of the restaurant world to your fingertips.
          Discover, reserve, and relish the flavors of your favorite cuisines
          with just a few clicks. Our user-friendly platform makes it effortless
          to find and book tables at top-rated restaurants in your area.
        </p>

        <animated.h2
          style={fadeProps}
          className="text-4xl font-extrabold mb-4 mt-8"
        >
          History
        </animated.h2>
        <animated.p style={fadeProps} className="text-lg font-bold mb-8">
          Dine was founded in 2024 with a vision to revolutionize the way people
          experience dining...
        </animated.p>
          <Link to="/signup">
            <button className="lg:px-10 lg:py-2 font-semibold text-2xl md:bg-transparent mx-auto reservebtn rounded-lg md:px-5 my-6">
              Reserve Table
            </button>
          </Link>
      </div>
    </div>
  );
}

export default About;