import React from "react";
import aboutImg from "../../Assets/Img/full-shot-man-living-countryside.jpg";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="contact">
        <h2 className="text-3xl font-bold text-center mb-6">
          Welcome to Online Farm
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Image Section */}
          <img
            className="aboutimg"
            src={aboutImg}
            alt="Farm Scene"
          />

          {/* Text Section */}
          <div className="aboutdiv text-center md:text-left flex-1">
            <p className="mb-4">
              Online Farm is a comprehensive farm management solution designed
              for goat and sheep farmers. Our user-friendly web application
              helps you track and manage your livestock’s health, breeding, and
              productivity for efficient and profitable farming.
            </p>
            <h5 className="text-xl font-semibold mb-2">Our Mission</h5>
            <p className="mb-4">
              We empower farmers with tools and data to optimize livestock
              management, streamline breeding, vaccinations, and weight
              tracking, and enhance animal welfare.
            </p>
            <h5 className="text-xl font-semibold mb-2">Why Choose Us?</h5>
            <p className="mb-4">
              Simplify your farm management and gain valuable insights with our
              intuitive platform, accessible from anywhere.
            </p>
            <h5 className="text-xl font-semibold mb-2">Join Us Today!</h5>
            <p>
              Sign up for Online Farm to transform your farm management, and
              follow us on [Social Media Links] for updates and resources.
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .aboutimg {
            display: none;
          }
          .aboutdiv {
            text-align: center; 
          }
        }
      `}</style>
    </div>
  );
}
