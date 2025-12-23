import { useEffect, useState, useRef, useMemo } from "react";
import { MdQuestionAnswer } from "react-icons/md";
import { AnimatePresence, useMotionValueEvent } from "framer-motion";
import { motion, useScroll } from "framer-motion";

import book1 from "../assets/book1.png";
import book2 from "../assets/book12.png";

import heart1 from "../assets/heart12.png";
import heart2 from "../assets/heart1.png";

import emp1 from "../assets/emp12.png";
import emp2 from "../assets/emp1.png";

import nau1 from "../assets/nau1.png";
import nau2 from "../assets/nau12.png";

import prod1 from "../assets/prod1.png";
import prod2 from "../assets/prod12.png";

import senti1 from "../assets/senti1.png";
import senti2 from "../assets/senti12.png";

import solor1 from "../assets/solor1.png";
import solor2 from "../assets/solor12.png";

import zepto1 from "../assets/zepto1.png";
import zepto2 from "../assets/zepto12.png";

const useIsMobile = (query = "(max-width: 639px)") => {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia(query).matches
      : false
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia(query);
    const handler = (e) => setIsMobile(e.matches);

    mql.addEventListener("change", handler);

    return () => mql.removeEventListener("change", handler);
  }, [query]);

  return isMobile;
};

export default function Projects() {
  const isMobile = useIsMobile();
  const sceneRef = useRef(null);

  const projects = useMemo(
    () => [
      {
        title: "ECG Image Based Cardiac Risk Screening Too",
        link: "https://heart-attack-prediction-tssh.onrender.com",
        bgColor: "#0d4d3d",
        image: isMobile ? heart2 : heart1,
      },
      {
        title: "Employee Management System",
        link: "https://employee-app-python-7.onrender.com",
        bgColor: "#0d4d3d",
        image: isMobile ? emp2 : emp1,
      },
      {
        title: "Sentiment Analysis",
        link: " https://sentiment-analysis-2-mkip.onrender.com",
        bgColor: "#3884d3",
        image: isMobile ? senti2 : senti1,
      },
       {
        title: "Book Recommendation",
        link: "https://book-recommendation-hr6v.onrender.com",
        bgColor: "#3884d3",
        image: isMobile ? book2 : book1,
      },
      {
        title: "Product Recommendation",
        link: "https://github.com/PrathapDev03/Product_Recommendation/blob/main/Product_Recommendation.ipynb",
        bgColor: "#dc9317",
        image: isMobile ? prod2 : prod1,
      },
      {
        title: "Solar Power Generation",
        link: "https://github.com/PrathapDev03/Solar-Power-Generation-Data-Analysis-and-Machine-Learning-Prediction/blob/main/Solar_power_generation%20.ipynb",
        bgColor: "#0d4d3d",
        image: isMobile ? solor2 : solor1,
      },
      {
        title: "Job Market Analysis",
        link: "https://github.com/PrathapDev03/-Naukri-Job-Market-Analysis/blob/main/Naukri%20%5BUpdated%5D.ipynb",
        bgColor: "#dc9317",
        image: isMobile ? nau2 : nau1,
      },
      {
        title: "Sales & Performance Analysis",
        link: "https://github.com/PrathapDev03/Zepto_BI/blob/main/Zepto_BI.pbix",
        bgColor: "#0d4d3d",
        image: isMobile ? zepto2 : zepto1,
      },
    ],
    [isMobile]
  );

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });

  const threshholds = projects.map((_, i) => (i + 1) / projects.length);
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = threshholds.findIndex((t) => v <= t);
    setActiveIndex(idx === -1 ? threshholds.length - 1 : idx);
  });

  const activeProject = projects[activeIndex];

  return (
    <section
      id="projects"
      ref={sceneRef}
      className="relative text-white"
      style={{
        height: `${100 * projects.length}vh`,
        backgroundColor: activeProject.bgColor,
        transition: "background-color 400ms ease",
      }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
        <h2
          className={`text-3xl font-semibold z-10 text-center ${
            isMobile ? "mt-4" : "mt-8"
          }`}
        >
          My Work
        </h2>

        <div
          className={`relative w-full flex-1 flex items-center justify-center ${
            isMobile ? "-mt-4" : ""
          }`}
        >
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500ms ${
                activeIndex === idx
                  ? "opacity-100 z-20"
                  : "opacity-0 z-0 sm:z-10"
              }`}
              style={{ width: "85%", maxWidth: "1200px" }}
            >
              <AnimatePresence mode="wait">
                {activeIndex === idx && (
                  <motion.h3
                    key={project.title}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={`block text-center text-[clamp(2rem,6vw,5rem)] text-white/95
                      sm:absolute sm:-top-20 sm:left-[35%]
                      md:whitespace-nowrap md:text-left md:left-0 md:translate-x-0
                      lg:left-[-5%] sm:mb-0 italic font-semibold
                      ${isMobile ? "-mt-24" : ""}`}
                    style={{
                      zIndex: 5,
                      textAlign: isMobile ? "center" : "left",
                    }}
                  >
                    {project.title}
                  </motion.h3>
                )}
              </AnimatePresence>

              <div
                className={`relative w-full overflow-hidden bg-black/20 shadow-2xl
                  md:shadow-[0_35px_60px_-50px_rgba(0,0,0,0.7)]
                  ${
                    isMobile
                      ? "mb-6 rounded-lg"
                      : "mb-10 sm:mb-12 rounded-xl"
                  }
                  h-[63vh] sm:h-[66vh]`}
                style={{
                  zIndex: 10,
                  transition: "box-shadow 250ms ease",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover drop-shadow-xl md:drop-shadow-2xl"
                  style={{
                    position: "relative",
                    zIndex: 10,
                    fill: "drop-shadow(0,16px 40px rgba(0,0,0,0.65))",
                    transition: "filter 200ms ease",
                  }}
                  loading="lazy"
                />

                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    zIndex: 11,
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0) 40%",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className={`absolute ${isMobile ? "bottom-20" : "bottom-10"}`}>
          <a
            href={activeProject?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 font-semibold rounded-lg bg-white text-black hover:bg-gray-200 transition-all"
            aria-label={`view ${activeProject?.title}`}
          >
            View Project
          </a>
        </div>
      </div>
    </section>
  );
}
