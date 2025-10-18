// home-app/src/components/Banner.tsx
import React from "react";

const Banner: React.FC = () => {
  return (
    <div
      style={{
        height: "300px",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600180758895-fc0e3b2cb5b1?auto=format&fit=crop&w=1350&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "8px",
        margin: "20px",
      }}
    ></div>
  );
};

export default Banner;
