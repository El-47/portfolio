import React from "react";

import img from "../assets/6876191.jpg"

import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              SHAKTI P. <span>SINGH</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Tech-Enthusiast",
                  2000,
                  "Coder",
                  2000,
                  "Student",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Hey there, I'm a chess-playing, code-crunching computer science enthusiast with a book in one hand and a keyboard in the other.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://www.linkedin.com/in/shakti-pratap-singh-576543246/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/El-47" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://twitter.com/Shakti71512818" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={img} alt="" class="rounded-lg shadow-lg opacity-60 transform hover:scale-105 hover:hue-rotate-30 transition-transform duration-300"/>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
