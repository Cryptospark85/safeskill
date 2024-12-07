import React from "react";
import { motion } from "framer-motion";
import { 
  FaChair, 
  FaShieldAlt, 
  FaMedkit, 
  FaFireExtinguisher, 
  FaClipboard, 
  FaCertificate, 
  FaPeopleCarry, 
  FaMountain 
} from "react-icons/fa";

const data = [
  {
    id: 1,
    name: "Ergonomics",
    icon: <FaChair />, // Represents comfortable and proper seating/work posture
    color: "#0078FF", // Changed to a professional blue
    delay: 0.2,
  },
  {
    id: 2,
    name: "Health & Safety",
    icon: <FaShieldAlt />, // Represents protection and safety
    color: "#0078FF",
    delay: 0.3,
  },
  {
    id: 3,
    name: "First Aid",
    icon: <FaMedkit />, // Represents a first aid kit
    color: "#0078FF",
    delay: 0.4,
  },
  {
    id: 4,
    name: "Fire Fighting",
    icon: <FaFireExtinguisher />, // Represents fire safety equipment
    color: "#FF4500", // Fire-inspired orange-red
    delay: 0.5,
  },
  {
    id: 5,
    name: "Office Management",
    icon: <FaClipboard />, // Represents task and document management
    color: "#0078FF",
    delay: 0.6,
  },
  {
    id: 6,
    name: "ISO Standards",
    icon: <FaCertificate />, // Represents quality certification
    color: "#0078FF",
    delay: 0.7,
  },
  {
    id: 7,
    name: "Behavior Base Care",
    icon: <FaPeopleCarry />, // Represents teamwork and behavior care
    color: "#0078FF",
    delay: 0.8,
  },
  {
    id: 8,
    name: "Working at Heights",
    icon: <FaMountain />, // Represents working at elevated places
    color: "#0078FF",
    delay: 0.9,
  },
];

const Subjects = () => {
  return (
    <div className="relative">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="starsec"></div>
        <div className="starthird"></div>
        <div className="starfourth"></div>
        <div className="starfifth"></div>
      </div>

      {/* Main Content */}
      <div className="container ">
        <div className="py-14 md:py-24">
          {/* Header */}
          <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-5">
            <h1 className="uppercase font-semibold text-red-600">
              Our Course subjects
            </h1>
            <p className="font-semibold text-3xl">
              Find Online Courses in Any Subject
            </p>
          </div>
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-playfair">
            {subjectList.map(({ id, name, icon, color, delay }) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 100, delay: delay }}
                className="border rounded-lg border-red-600 p-4 flex justify-start items-center gap-4 hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer"
              >
                <div
                  className="w-10 h-10 rounded-md flex justify-center items-center"
                  style={{ color: color, backgroundColor: color + "20" }}
                >
                  {icon}
                </div>
                <p>{name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subjects;
