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
    'The most modest-est person ever.',
  ];
  const thisTestimonial = Math.floor(Math.random() * testimonials.length);
  console.info(thisTestimonial);
  return testimonials[thisTestimonial];
};

const Testimonial = () => {
  return getRandomTestimonial();
};

export default Testimonial;
