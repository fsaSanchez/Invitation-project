// src/components/Section.js
import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Section = ({ section, isActive }) => {
  return (
    <motion.div
      className="section"
      style={{ backgroundImage: `url(${section.image})` }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: isActive ? 1 : 0.5, scale: isActive ? 1 : 0.95 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      role="region"
      aria-labelledby={`${section.id}-title`}
    >
      <motion.div
        className="section-content"
        id={`${section.id}-title`}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: isActive ? 0 : 30, opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        dangerouslySetInnerHTML={{ __html: section.content }}
      />
    </motion.div>
  );
};

Section.propTypes = {
  section: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default Section;
