import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import { useEffect, useState, useRef, useMemo } from "react";
import ParticlesBackground from "../components/ParticlesBackground";

const experiences = [
  {
    role: "Data Science Intern",
    company: "Aivarient",
    duration: "Sep-24 to jun-25",
    description:
      "Built end-to-end machine learning solutions using Python, Scikit-learn, and TensorFlow, handling data preprocessing, feature engineering, and model validation. Created interactive dashboards and visual reports using Power BI and Matplotlib to communicate insights and support data-driven decisions.",
    description1:
      "Built end-to-end machine learning solutions using Python and TensorFlow, including data preprocessing, feature engineering, model validation, and interactive dashboard creation to support data-driven decisions.",
  },
  {
    role: "Data Analytics Trainee",
    company: "MedTour Easy",
    duration: "Mar-25 to Apr-25",
    description:
      "Analyzed healthcare datasets using Python, Pandas, Excel, and Matplotlib to extract actionable insights, performed data cleaning and exploratory analysis to ensure data quality, and created analytical reports and KPI-driven dashboards to support operational improvements and strategic planning.",
    description1:
      "Analyzed healthcare datasets using Python, Pandas, Excel, and Matplotlib to deliver actionable insights through data cleaning, exploratory analysis, and KPI-driven reporting for operational and strategic decision-making.",
  },
  {
    role: "Freelance Machine Learning Engineer",
    company: "Healthify",
    duration: "",
    description:
      "Worked as a freelance machine learning engineer on a healthcare project focused on heart attack prediction from ECG images, developing and training a CNN-based deep learning model. Handled ECG image preprocessing, augmentation, and model evaluation to support reliable AI-driven healthcare diagnostics.",
    description1:
      "Worked as a freelance machine learning engineer developing a CNN-based deep learning model for heart attack prediction from ECG images, including ECG preprocessing, augmentation, and model evaluation for reliable healthcare diagnostics.",
  },
];

function ExperienceItem({ exp, idx, start, end, scrollYProgress, layout }) {
  const scale = useTransform(scrollYProgress, [start, end], [0, 1]);
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const y = useTransform(scrollYProgress, [start, end], [
    idx % 2 === 0 ? 30 : -30,
    0,
  ]);
  const x = useTransform(scrollYProgress, [start, end], [-24, 0]);

  if (layout === "desktop") {
    return (
      <div className="relative flex flex-1 justify-center items-center min-w-0">
        <motion.div
          className="z-10 w-7 h-7 rounded-full bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.1)]"
          style={{ scale, opacity }}
        />

        <motion.div
          className={`absolute ${
            idx % 2 === 0 ? "-top-8" : "-bottom-8"
          } w-[3px] bg-white/40`}
          style={{ Height: 40, opacity }}
        />

        <motion.article
          className={`absolute ${
            idx % 2 === 0 ? "bottom-12" : "top-12"
          } bg-gray-900/80 backdrop-blur border-gray-700/70 rounded-xl w-[320px] shadow-lg`}
          style={{ opacity, y, maxWidth: "90vw" }}
          transition={{ duration: 0.4, delay: idx * 0.15 }}
        >
          <h3 className="text-xl font-semibold">{exp.role}</h3>
          <p className="text-md text-gray-400 mb-3">
            {exp.company} | {exp.duration}
          </p>
          <p className="text-md text-gray-300 wrap-break-words">
            {exp.description}
          </p>
        </motion.article>
      </div>
    );
  }

  return (
    <div className="relative flex items-start">
      <motion.div
        className="absolute -left-[14px] top-3 z-10 w-7 h-7 rounded-full bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.1)]"
        style={{ scale, opacity }}
      />

      <motion.article
        className="bg-gray-900/80 backdrop-blur border border-gray-700/70 rounded-xl p-5 w-[90vw] max-w-sm ml-6 shadow-lg"
        style={{ opacity, x }}
        transition={{ duration: 0.4, delay: idx * 0.15 }}
      >
        <h3 className="text-lg font-semibold break-words">{exp.role}</h3>
        <p className="text-sm text-gray-400 mb-2 break-words">
          {exp.company} | {exp.duration}
        </p>
        <p className="text-sm text-gray-300 break-words">
          {exp.description1}
        </p>
      </motion.article>
    </div>
  );
}

export default function Experience() {
  const sceneRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const SCENE_HEIGHT_VH = isMobile
    ? 160 * experiences.length
    : 120 * experiences.length;

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });

  const thresholds = useMemo(
    () => experiences.map((_, i) => (i + 1) / experiences.length),
    []
  );

  const lineSize = useTransform(scrollYProgress, (v) => `${v * 100}%`);

  return (
    <section id="experience" className="relative bg-black text-white">
      <ParticlesBackground />

      <div
        ref={sceneRef}
        style={{ height: `${SCENE_HEIGHT_VH}vh`, minHeight: "120vh" }}
        className="relative"
      >
        <div className="sticky top-0 h-screen flex flex-col">
          <h2 className="text-4xl sm:text-5xl font-semibold mt-5 text-center">
            Experience
          </h2>

          <div className="flex flex-1 items-center justify-center px-6 pb-10">
            {!isMobile && (
              <div className="relative w-full max-w-7xl">
                <div className="relative h-[6px] bg-white/15 rounded">
                  <motion.div
                    className="absolute left-0 top-0 h-[6px] bg-white rounded origin-left"
                    style={{ width: lineSize }}
                  />
                </div>

                <div className="relative flex justify-between mt-0">
                  {experiences.map((exp, idx) => (
                    <ExperienceItem
                      key={idx}
                      exp={exp}
                      idx={idx}
                      start={idx === 0 ? 0 : thresholds[idx - 1]}
                      end={thresholds[idx]}
                      scrollYProgress={scrollYProgress}
                      layout="desktop"
                    />
                  ))}
                </div>
              </div>
            )}

            {isMobile && (
              <div className="relative w-full max-w-md">
                <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-white/15 rounded">
                  <motion.div
                    className="absolute top-0 left-0 w-[6px] bg-white rounded origin-left"
                    style={{ height: lineSize }}
                  />
                </div>

                <div className="relative flex flex-col gap-10 ml-10 mt-8 pb-10">
                  {experiences.map((exp, idx) => (
                    <ExperienceItem
                      key={idx}
                      exp={exp}
                      idx={idx}
                      start={idx === 0 ? 0 : thresholds[idx - 1]}
                      end={thresholds[idx]}
                      scrollYProgress={scrollYProgress}
                      layout="mobile"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
