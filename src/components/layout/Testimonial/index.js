import React from 'react';

const getRandomTestimonial = () => {
  const testimonials = [
    '100% library book return rate.',
    'A joy to have in class.',
    '9/10 say "Pretty good guy."',
    '4.90 Uber rating.',
    'Decades of React.js experience.',
    '"Certified Fresh" by critics on Rotten Tomatoes (86% audience score).',
    'Fitbit "High Tops" badge recipient.',
    'Pickup soccer Sportsmanship award 3x nominee.',
    '"Smarter than a cartoon owl professor." -Smart speakers everywhere',
    'When boarding the metro, moves to the center of the car.',
    'The most modest person ever.',
  ];
  const getRandomIndex = () => Math.floor(Math.random() * testimonials.length);
  return testimonials[getRandomIndex()];
};

export const getTestimonial = () => {
  return getRandomTestimonial();
};

const Testimonial = props => {
  return <span>{props.text}</span>;
};

export default Testimonial;
