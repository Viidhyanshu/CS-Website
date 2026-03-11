import React from 'react';
import { motion } from 'framer-motion';

export default function ImpactText() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const wordAnim: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Inter:wght@700;800;900&display=swap');
      `}</style>
      <section className="w-full py-6 lg:py-10 flex justify-center items-center px-4 md:px-8 bg-transparent relative z-10 selection:bg-[#C1D72E] selection:text-black">
        <div className="max-w-[85rem] mx-auto text-center flex flex-col items-center justify-center text-[#e4e4e1]">
          <motion.h2 
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-[2.6rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[7rem] xl:text-[8rem] leading-[0.8] tracking-tight uppercase font-black flex flex-col items-center w-full" style={{ fontFamily: "'Inter', sans-serif" }}>
            
            {/* Line 1 */}
            <div className="flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-5 lg:gap-x-6 w-full">
              <motion.span variants={wordAnim} className="text-[#C1D72E] font-normal tracking-normal lowercase" style={{ fontFamily: "'Playfair Display', serif", fontVariant: "small-caps" }}>
                <span className="uppercase">REDEFINING</span>
              </motion.span>
              <motion.span variants={wordAnim}>LIMITS,</motion.span>
            </div>
            
            {/* Line 2 */}
            <div className="flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-5 lg:gap-x-6 w-full mt-1 sm:mt-2 lg:mt-3">
              <motion.span variants={wordAnim}>FIGHTING</motion.span>
              <motion.span variants={wordAnim}>FOR</motion.span>
              <motion.span variants={wordAnim} className="text-[#C1D72E] font-normal tracking-normal lowercase" style={{ fontFamily: "'Playfair Display', serif", fontVariant: "small-caps" }}>
                <span className="uppercase">WINS,</span>
              </motion.span>
            </div>
            
            {/* Line 3 */}
            <div className="flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-5 lg:gap-x-6 w-full mt-1 sm:mt-2 lg:mt-3">
              <motion.span variants={wordAnim}>BRINGING</motion.span>
              <motion.span variants={wordAnim}>IT</motion.span>
              <motion.span variants={wordAnim}>ALL</motion.span>
              <motion.span variants={wordAnim}>IN</motion.span>
            </div>
            
            {/* Line 4 */}
            <div className="flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-5 lg:gap-x-6 w-full mt-1 sm:mt-2 lg:mt-3">
              <motion.span variants={wordAnim}>ALL</motion.span>
              <motion.span variants={wordAnim}>WAYS.</motion.span>
              <motion.span variants={wordAnim}>DEFINING</motion.span>
              <motion.span variants={wordAnim}>A</motion.span>
            </div>
            
            {/* Line 5 */}
            <div className="flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-5 lg:gap-x-6 w-full mt-1 sm:mt-2 lg:mt-3">
              <motion.span variants={wordAnim} className="text-[#C1D72E] font-normal tracking-normal lowercase" style={{ fontFamily: "'Playfair Display', serif", fontVariant: "small-caps" }}>
                <span className="uppercase">LEGACY</span>
              </motion.span>
              <motion.span variants={wordAnim}>IN</motion.span>
              <motion.span variants={wordAnim}>FORMULA</motion.span>
              <motion.span variants={wordAnim}>1</motion.span>
            </div>
            
            {/* Line 6 */}
            <div className="flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-5 lg:gap-x-6 w-full mt-1 sm:mt-2 lg:mt-3">
              <motion.span variants={wordAnim}>ON</motion.span>
              <motion.span variants={wordAnim}>AND</motion.span>
              <motion.span variants={wordAnim}>OFF</motion.span>
              <motion.span variants={wordAnim}>THE</motion.span>
            </div>
            
            {/* Line 7 */}
            <div className="flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-5 lg:gap-x-6 w-full mt-1 sm:mt-2 lg:mt-3">
              <motion.span variants={wordAnim}>TRACK.</motion.span>
            </div>

          </motion.h2>
        </div>
      </section>
    </>
  );
}
