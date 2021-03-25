const testimonials = document.querySelectorAll('.testimonial');
const hexPages = document.querySelectorAll('.hex-page');
const auto = true;
const intervalTime = 5000;
let testimonialInterval;

const nextTestimonial = () => {
  // Get testimonial with current class
  const current = document.querySelector('.current');
  // Remove current class 
  current.classList.remove('current');
  // Check for next testimonial
  if(current.nextElementSibling) {
    // Add current class to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to start
    testimonials[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
}

// Auto slide
if(auto) {
  testimonialInterval = setInterval(nextTestimonial, intervalTime);
}