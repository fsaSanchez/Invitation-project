import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { motion } from 'framer-motion';
import image1 from './assets/1.jpg'
import image2 from './assets/2.jpg'
import image3 from './assets/3.jpg'

const getGuestName = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get('guest') || 'Guest';
};

const sections = [
  {
    id: 'Start',
    title: "Bienvenido",
    content: `Cumpleaños

Leonel Sánchez Rodriguez`,
    image: image1
  },
  {
    id: 'name',
    title: "Who&#39;s Invited?",
    content: `Dear ${getGuestName()}, we can&#39;t wait to celebrate with you!`,
    image: image2
  },
  {
    id: 'message',
    title: 'Special Message',
    content: 'We are so excited to invite you to this memorable day filled with joy and surprises!',
    image: image3
  },
  {
    id: 'date',
    title: 'Date & Time',
    content: '<strong>Date:</strong> Saturday, January 20th, 2024<br /><strong>Time:</strong> 5:00 PM',
    image: image1
  },
  {
    id: 'location',
    title: 'Location',
    content: 'Party Hall, Downtown Avenue',
    image: image2
  },
  {
    id: 'rsvp',
    title: 'RSVP',
    content: `<div class='rsvp-wrapper'>
      <p>Confirm your attendance via WhatsApp!</p>
      <a
       href="https://wa.me/4181439861?text=Hola!%20Soy%20${getGuestName()},%20Confirmo%20mi%20asistencia%20al%20cumpleaños%20de%20Leonel!"
        target="_blank"
        class="rsvp-button"
      >
        Confirm via WhatsApp
      </a>
    </div>`,
    image: image3
  }
];

const App = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const handleScroll = (e) => {
    const { scrollTop, clientHeight } = e.target;
    const threshold = clientHeight * 0.7;
    const nextSection = Math.floor((scrollTop + threshold) / clientHeight);
    if (nextSection !== currentSection) {
      setCurrentSection(nextSection);
    }
  };

  return (
    <div className="app-container" onScroll={handleScroll}>
      <div className="sections-wrapper">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            className="section"
            style={{ backgroundImage: `url(${section.image})` }}
            initial={{ opacity: index === currentSection ? 1 : 0, scale: index === currentSection ? 1 : 0.9 }}
            animate={{ opacity: index === currentSection ? 1 : 0.5, scale: index === currentSection ? 1 : 0.95 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="section-content"
              initial={{ y: index === currentSection ? 0 : 50, opacity: index === currentSection ? 1 : 0 }}
              animate={{ y: 0, opacity: index === currentSection ? 1 : 0 }}
              transition={{ duration: 0.8 }}
              dangerouslySetInnerHTML={{ __html: section.content }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};


export default App