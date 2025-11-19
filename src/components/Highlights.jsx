import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { highlights } from "../constants";

const HighlightCard = ({ index, title, description, icon }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full flex flex-col'
  >
    <div className='text-5xl mb-4'>{icon}</div>

    <h3 className='text-white font-bold text-[20px] mb-3'>
      {title}
    </h3>

    <p className='text-secondary text-[16px] leading-normal'>
      {description}
    </p>
  </motion.div>
);


const Highlights = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>About Me</p>
          <h2 className={styles.sectionHeadText}>Highlights.</h2>
        </motion.div>
      </div>

      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {highlights.map((item, index) => (
          <HighlightCard key={item.title} index={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Highlights, "");