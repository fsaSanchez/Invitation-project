// src/components/RSVPSection.js
import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import './RSVPSection.css';

const RSVPSection = ({ section, isActive }) => {
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
      >
        <div className="rsvp-wrapper">
          <p>Confirma tu asistencia vía WhatsApp! Cambios </p>
          <a
            href={`https://wa.me/4181439861?text=Hola!%20Soy%20${encodeURIComponent(
              section.guestName
            )},%20Confirmo%20mi%20asistencia%20al%20cumpleaños%20de%20Leonel!`}
            target="_blank"
            rel="noopener noreferrer"
            className="rsvp-button"
          >
            Confirmar vía WhatsApp
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

RSVPSection.propTypes = {
  section: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    guestName: PropTypes.string.isRequired,
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default RSVPSection;
