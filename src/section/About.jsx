import { motion, scale } from "framer-motion";
import React from "react";
import p from "../assets/p_pic2.png";
import ParticlesBackground from "../components/ParticlesBackground";

export default function About() {
  const stats = [
    { label: "Experience", value: "0-1 years" },
    { label: "Speciality", value: "ML/AI" },
    { label: "Hobbies", value: "Reading Books Sketching" },
  ];

  const glows = [
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px]",
  ];

  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden"
    >
      <ParticlesBackground />

      <div className="absolute inset-0 pointer-events-none">
        {glows.map((c, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${c}`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-20 flex-col gap-12">
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-stretch gap-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div
            className="relative w-[160px] h-[300px] md:[300px] md:h-[200px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-r from-[#1cd8d2/20 to-[#302b63]/20
            border-[#1cd8d2]/25"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <img src={p} alt="profile" className="absolute-inset-0" />
          </motion.div>

          <div className="flex-1 flex-col justify-center text-center md:text-left">
            <h2
              className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent
              bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2]"
            >
              Prathap B D
            </h2>

            <p className="mt-2 text-lg sm:text-xl text-white/90 font-semibold">
              Machine Learning Engineer
            </p>

            <p className="mt-4 text-gray-300 leading-relaxed text-base sm:text-lg max-w-2xl md:max-w-3xl">
              I am an ML Engineer who loves turning complex problems into elegant
              solutions. What excites me most is the full journey — understanding
              the data, crafting the right model, optimizing it for performance,
              and deploying it into the real world. Technology for me is not just
              tools, but a way to create meaningful impact.
            </p>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl">
              {stats.map((item, i) => (
                <motion.div
                  key={i}
                  className="rounded-xl border-white/10 bg-white/5 pc-4 py-3 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.6 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="text-sm text-gray-400">{item.label}</div>
                  <div className="text-base font-semibold">{item.value}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row ga[-3 sm:gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg bg-white text-black font-semibold px-5 py-3 hover:bg-gray-200 transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white px-5 py-3 hover:bg-white/20 transition"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
