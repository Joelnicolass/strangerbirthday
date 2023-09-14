import Image from "next/image";
import React from "react";
import Fade from "../Fade/Fade";
import Glitch from "../Glitch/Glitch";
import Advertisement from "../Advertisement/Advertisement";
import Particles from "../Particles/Particles";
import { MdKeyboardArrowDown } from "react-icons/md";

const HomeView = () => {
  return (
    <section
      style={{
        height: "100svh",
        position: "relative",
        overflowX: "hidden",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
        scrollBehavior: "smooth",
        border: "4px solid red",
        borderRadius: "1rem",
      }}
    >
      <section
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "column",
          height: "100svh",
          width: "100%",
          background: 'url("/images/bg.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          scrollSnapAlign: "start",
          position: "relative",
        }}
      >
        <Particles
          className="absolute inset-0 pointer-events-none"
          quantity={100}
          staticity={50}
          color="#ff5b5b6a"
        />
        <Particles
          className="absolute inset-0 pointer-events-none"
          quantity={100}
          staticity={50}
          color="#ffe95b6a"
        />
        <Fade>
          <Image
            className="hover:animate-pulse transition duration-500 ease-in-out transform hover:scale-110 cursor-crosshair hover:-rotate-2 "
            priority
            style={{
              filter: "drop-shadow(0px 0px 40px rgb(252, 0, 0))",
            }}
            src="/images/logo.png"
            alt="Stranger Birthday"
            width={500}
            height={500}
          />
        </Fade>
        <Fade
          delay={1}
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          ease="backOut"
        >
          <div
            className="transform rotate-2 hover:rotate-6 transition duration-500 ease-in-out
            cursor-crosshair 
            "
            style={{
              border: "2px solid white",
              padding: "1rem",
              borderRadius: "1rem",
              background: "rgba(0,0,0,0.4)",
              backdropFilter: "blur(10px)",
              margin: "2rem",
            }}
          >
            <Advertisement
              text={{
                line1: "I'll",
                line2: ["Be", "Waiting", "For"],
                line3: "You",
              }}
              colors={["#ff5b5b", "#33a466", "#ab6cfd"]}
            />
          </div>
        </Fade>
        <Fade
          delay={1.5}
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          ease="backOut"
        >
          <Glitch text={"14/12/2023"} />
        </Fade>
        <MdKeyboardArrowDown
          className="animate-bounce
        text-white text-5xl"
        />
      </section>
      <section
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
          width: "100%",
          scrollSnapAlign: "start",
        }}
      >
        <Particles
          className="absolute inset-0 pointer-events-none"
          quantity={100}
          staticity={50}
          color="#8630ff6a"
        />
        <Particles
          className="absolute inset-0 pointer-events-none"
          quantity={100}
          staticity={50}
          color="#0040ffca"
        />

        <Fade>
          <Glitch text={"Coming Soon"} />
          <Glitch text={"Quiz for you"} size={20} />
        </Fade>
      </section>
    </section>
  );
};

export default HomeView;
