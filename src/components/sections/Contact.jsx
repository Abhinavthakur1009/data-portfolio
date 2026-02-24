import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faCopy, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Toast from '../common/Toast';

const Contact = () => {
  const [showToast, setShowToast] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    });
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-8xl font-thin text-white mb-8 tracking-tighter leading-none">
            LET'S <br /> <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">CONNECT</span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/60 font-light max-w-md mx-auto"
          >
            Have a data challenge? Let's turn your data into actionable insights.
          </motion.p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onClick={() => copyToClipboard('thakurabhinav060@gmail.com')}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center gap-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/30 transition-all duration-300">
              <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-white/70 group-hover:text-white transition-colors" />
            </div>
            <div>
              <span className="text-lg font-light text-white/80 block mb-1">thakurabhinav060@gmail.com</span>
              <span className="text-xs uppercase tracking-widest text-green-400/80 group-hover:text-green-400 transition-colors">
                <FontAwesomeIcon icon={faCopy} className="mr-1" /> Click to copy
              </span>
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => copyToClipboard('7876765748')}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center gap-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/30 transition-all duration-300">
              <FontAwesomeIcon icon={faPhone} className="text-2xl text-white/70 group-hover:text-white transition-colors" />
            </div>
            <div>
              <span className="text-lg font-light text-white/80 block mb-1">+91 7876765748</span>
              <span className="text-xs uppercase tracking-widest text-green-400/80 group-hover:text-green-400 transition-colors">
                <FontAwesomeIcon icon={faCopy} className="mr-1" /> Click to copy
              </span>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center gap-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-2xl text-white/70" />
            </div>
            <div>
              <span className="text-lg font-light text-white/80 block mb-1">Chandigarh, India</span>
              <span className="text-xs uppercase tracking-widest text-white/40">Available for Opportunities</span>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center gap-6"
        >
          {[
            { icon: faLinkedin, url: 'https://www.linkedin.com/in/abhinav-thakur-141037383/', label: 'LinkedIn' },
            { icon: faGithub, url: 'https://github.com/Abhinavthakur1009', label: 'GitHub' },
            { icon: faInstagram, url: 'https://www.instagram.com/abhi._.rajput._10/', label: 'Instagram' },
          ].map((social, i) => (
            <a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/30 hover:-translate-y-1 transition-all duration-300 shadow-lg"
              title={social.label}
            >
              <FontAwesomeIcon icon={social.icon} className="text-xl" />
            </a>
          ))}
        </motion.div>

      </div>
      <Toast message="Copied to clipboard!" isVisible={showToast} />
    </section>
  );
};

export default Contact;
