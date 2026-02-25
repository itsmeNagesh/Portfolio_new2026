

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo, socialLinks } from '../data/mock';
import { Github, Linkedin, Mail, Briefcase, ChevronDown, Code2, Database, Cpu, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
const [displayText, setDisplayText] = useState('');
const [currentIndex, setCurrentIndex] = useState(0);
const fullText = personalInfo.role;

useEffect(() => {
if (currentIndex < fullText.length) {
const timeout = setTimeout(() => {
setDisplayText(prev => prev + fullText[currentIndex]);
setCurrentIndex(prev => prev + 1);
}, 80);
return () => clearTimeout(timeout);
}
}, [currentIndex, fullText]);

const scrollToSection = (id) => {
document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

return ( <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"> <div className="relative z-10 max-w-7xl mx-auto w-full">

    {/* CENTER MOBILE | SIDE DESKTOP */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center text-center lg:text-left">

      {/* IMAGE FIRST ON MOBILE */}
      <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="relative flex items-center justify-center order-1 lg:order-2"
>
  <div className="relative 
    w-[260px] h-[260px] 
    sm:w-[340px] sm:h-[340px] 
    lg:w-[480px] lg:h-[480px]"
  >

    {/* glow */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-20 blur-3xl animate-pulse" />

    {/* rotating ring */}
    <div
      className="absolute inset-6 sm:inset-8 rounded-full border-2 border-cyan-500/30 animate-spin"
      style={{ animationDuration: '20s' }}
    />

    {/* profile image */}
    <div className="absolute inset-12 sm:inset-14 rounded-full overflow-hidden border-2 border-cyan-500/50 bg-black">
      <img
        src="/profile-photo.PNG"
        alt={personalInfo.name}
        className="w-full h-full object-cover object-center scale-110 hover:scale-125 transition duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-600/10" />
    </div>

    {/* FLOATING ICONS (VISIBLE ON MOBILE NOW) */}

    {/* Top Right */}
    <motion.div
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
      className="absolute -top-4 right-6 sm:right-10 w-10 h-10 sm:w-14 sm:h-14 glass rounded-lg flex items-center justify-center"
    >
      <Code2 className="w-5 h-5 sm:w-7 sm:h-7 text-purple-400" />
    </motion.div>

    {/* Bottom Left */}
    <motion.div
      animate={{ y: [0, 20, 0] }}
      transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      className="absolute bottom-4 -left-4 sm:-left-6 w-10 h-10 sm:w-14 sm:h-14 glass rounded-lg flex items-center justify-center"
    >
      <Database className="w-5 h-5 sm:w-7 sm:h-7 text-cyan-400" />
    </motion.div>

    {/* Top Left */}
    <motion.div
      animate={{ x: [-10, 10, -10] }}
      transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
      className="absolute top-8 -left-4 sm:-left-6 w-10 h-10 sm:w-14 sm:h-14 glass rounded-lg flex items-center justify-center"
    >
      <Cpu className="w-5 h-5 sm:w-7 sm:h-7 text-cyan-400" />
    </motion.div>

    {/* Bottom Right */}
    <motion.div
      animate={{ x: [10, -10, 10] }}
      transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
      className="absolute bottom-10 -right-4 sm:-right-6 w-10 h-10 sm:w-14 sm:h-14 glass rounded-lg flex items-center justify-center"
    >
      <Sparkles className="w-5 h-5 sm:w-7 sm:h-7 text-purple-400" />
    </motion.div>

  </div>
</motion.div>


      {/* TEXT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 order-2 lg:order-1 flex flex-col items-center lg:items-start"
      >
       <span className="hidden sm:inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium">
          {personalInfo.availability}
        </span>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
          <span className="text-white">Hi, I'm</span>
          <br />
          <span className="gradient-text">{personalInfo.name}</span>
        </h1>

        <div className="h-14">
          <p className="text-lg sm:text-2xl text-cyan-400 font-medium">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        <p className="text-gray-300 text-base sm:text-lg max-w-xl">
          {personalInfo.bio}
        </p>

        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
          <Button
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-7 py-5 text-lg rounded-lg"
          >
            <Mail className="w-5 h-5 mr-2" />
            Hire Me
          </Button>

          <Button
            onClick={() => scrollToSection('projects')}
            variant="outline"
            className="border-2 border-cyan-500/50 text-cyan-400 px-7 py-5 text-lg rounded-lg"
          >
            <Briefcase className="w-5 h-5 mr-2" />
            Projects
          </Button>
        </div>

        <div className="flex gap-4 pt-4">
          <a href={socialLinks.github} target="_blank"><Github className="w-6 h-6 text-gray-300 hover:text-cyan-400"/></a>
          <a href={socialLinks.linkedin} target="_blank"><Linkedin className="w-6 h-6 text-gray-300 hover:text-cyan-400"/></a>
          <a href={socialLinks.email}><Mail className="w-6 h-6 text-gray-300 hover:text-cyan-400"/></a>
        </div>
      </motion.div>

    </div>
  </div>

  {/* scroll icon */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.5 }}
    className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
  >
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="text-cyan-400 cursor-pointer"
      onClick={() => scrollToSection('skills')}
    >
      <ChevronDown className="w-8 h-8" />
    </motion.div>
  </motion.div>
</section>

);
};

export default Hero;
