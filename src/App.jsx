// src/App.js
import React, { useState, useCallback } from 'react';
import './App.css';
import { debounce } from 'lodash';
import Section from './components/Section';
import RSVPSection from './components/RSVPSection';
import image1 from './assets/1.jpg';
import image2 from './assets/2.jpg';
import image3 from './assets/3.jpg';

const getGuestName = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get('guest') || 'Guest';
};

const sectionsData = [
  {
    id: 'Start',
    title: 'Bienvenido',
    content: `Cumpleaños

Leonel Sánchez Rodriguez`,
    image: image1,
  },
  {
    id: 'name',
    title: "Who's Invited?",
    content: `Dear ${getGuestName()}, we can't wait to celebrate with you!`,
    image: image2,
  },
  {
    id: 'message',
    title: 'Special Message',
    content:
      'We are so excited to invite you to this memorable day filled with joy and surprises!',
    image: image3,
  },
  {
    id: 'date',
    title: 'Date & Time',
    content:
      '<strong>Date:</strong> Saturday, January 20th, 2024<br /><strong>Time:</strong> 5:00 PM',
    image: image1,
  },
  {
    id: 'location',
    title: 'Location',
    content: 'Party Hall, Downtown Avenue',
    image: image2,
  },
  // La sección RSVP se maneja aparte
];

const App = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const guestName = getGuestName();

  const handleScroll = useCallback(
    debounce((e) => {
      const { scrollTop, clientHeight } = e.target;
      const threshold = clientHeight * 0.7;
      const nextSection = Math.floor((scrollTop + threshold) / clientHeight);
      if (nextSection !== currentSection) {
        setCurrentSection(nextSection);
      }
    }, 100),
    [currentSection]
  );

  return (
    <div className="app-container" onScroll={handleScroll}>
      <div className="sections-wrapper">
        {sectionsData.map((section, index) => (
          <Section
            key={section.id}
            section={section}
            isActive={index === currentSection}
          />
        ))}
        {/* Agregar la sección de RSVP */}
        <RSVPSection
          section={{ id: 'rsvp', image: image3, guestName }}
          isActive={sectionsData.length === currentSection}
        />
      </div>
    </div>
  );
};

export default App;
