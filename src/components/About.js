import React from "react";

import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-center"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">"Constantly Learning, Forever Coding."</h3>
            <p className="mb-6">
              Greetings! I am a passionate computer science student with an
              insatiable curiosity for all things related to technology. My
              journey in the world of coding has been nothing short of
              thrilling, and I am committed to honing my skills and becoming a
              proficient software engineer.
              But my interests don't stop there. I am an avid reader, and books are my constant companions. From classic literature to the latest in tech literature, I am always eager to explore new worlds and ideas through the pages of a book.
            </p>
            {/* stats */}
            <div className="flex gap-x-8 items-center">
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
