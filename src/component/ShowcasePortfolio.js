"use client"
import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// gsap.registerPlugin(Flip, ScrollTrigger);

const ShowcasePortfolio = () => {
    useEffect(() => {
        const images = document.querySelectorAll(".scroll-image");
    
        images.forEach((image) => {
          gsap.fromTo(
            image,
            {
              scaleX: 1,  // Initial scale for width
              scaleY: 1,  // Initial scale for height
            },
            {
              scaleX: 1.5,  // Final scale for width when you scroll
              scaleY: 1.5,  // Final scale for height when you scroll
              scrollTrigger: {
                trigger: image,
                start: "top 80%", // Animation starts when the image enters the viewport
                end: "top 20%",   // Animation ends when the image exits the viewport
                scrub: true,      // Smooth scaling as you scroll
                markers: true,    // Add markers for debugging
              },
            }
          );
        });
      }, []);
  return (
    <div style={{ height: "200vh", padding: "50px", position: "relative" }}>
      <h1 style={{ textAlign: "center", marginBottom: "50px" }}>
        Scroll to Scale Images
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row", // Horizontal layout
          gap: "50px",
          justifyContent: "center", // Center images horizontally
          position: "absolute",
          bottom: "0", // Position the images at the bottom of the screen
          left: "50%",
          transform: "translateX(-50%)", // Center images horizontally in the viewport
        }}
      >
        <img
          src="http://clapat.ro/themes/nanotech/images/01hero.jpg"
          alt="Image 1"
          className="scroll-image"
          style={{
            width: "80%",
            maxWidth: "500px",
            transition: "transform 0.3s ease",
          }}
        />
        <img
          src="http://clapat.ro/themes/nanotech/images/02hero.jpg"
          alt="Image 2"
          className="scroll-image"
          style={{
            width: "80%",
            maxWidth: "500px",
            transition: "transform 0.3s ease",
          }}
        />
        <img
          src="http://clapat.ro/themes/nanotech/images/03hero.jpg"
          alt="Image 3"
          className="scroll-image"
          style={{
            width: "80%",
            maxWidth: "500px",
            transition: "transform 0.3s ease",
          }}
        />
      </div>
    </div>
  );
};

export default ShowcasePortfolio;
