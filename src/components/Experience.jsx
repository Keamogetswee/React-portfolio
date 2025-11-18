import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { experiences } from "../constants"; // make sure this exists

const ExperienceCard = ({ experience }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ y: [0, -5, 0] }); // small up-down movement
    }
  }, [controls, inView]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative pl-16 pb-12"
      ref={ref}
    >
      {/* Vertical Line */}
      <span className="absolute left-8 top-0 h-full w-0.5 bg-purple-500"></span>

      {/* Dot + Icon */}
      <motion.div
        animate={controls}
        transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
        className="absolute left-4 top-1 flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-purple-500 shadow-md"
      >
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-8 h-8 object-contain"
        />
      </motion.div>

      {/* Card */}
      <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-lg ml-12">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {experience.title}
        </h3>
        <p className="text-sm text-gray-500 mb-1">{experience.company_name}</p>
        <p className="text-xs text-gray-400 mb-3 italic">{experience.date}</p>
        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
          {experience.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-bold mb-10 text-gray-900 dark:text-white"
        >
          Experience
        </motion.h2>

        <div>
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
