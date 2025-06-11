function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  const icon = document.getElementById("hamburger-icon");

  navLinks.classList.toggle("active");
  if (navLinks.classList.contains("active")) {
    icon.innerHTML = "&times;";
  } else {
    icon.innerHTML = "&#9776;";
  }
}

 const nav = document.querySelector('nav');
 const target = document.querySelector('.last-section-2');


const targetOffset = target.offsetTop;

window.addEventListener('scroll', () => {
  if (window.scrollY >= targetOffset) {
    nav.style.display = 'none'; 
  } else {
    nav.style.display = 'flex';
  }
});
const sliderData = [
    {
      image: 'https://cdn.prod.website-files.com/68244de84102b0b2107ee628/683ef390e58d2272daf37ebf_Scott%202%20(1).png',
      comment: '“Cogent Labs have been absolutely incredible to work with...”',
      name: 'Scott',
      role: 'Founder, Aurora'
    },
    {
      image: 'https://cdn.prod.website-files.com/68244de84102b0b2107ee628/683ef390f044636e999d03f6_Kara%20Portrait%20(1).png',
      comment: '“Kara says the team was amazing to collaborate with.”',
      name: 'Kara',
      role: 'CTO, Bright Labs'
    },
    {
      image: 'https://cdn.prod.website-files.com/68244de84102b0b2107ee628/6836dae4eb378c6b1f316bd8_Stefan%20Savevski.jpeg',
      comment: '“Stefan was impressed by the professionalism and speed.”',
      name: 'Stefan',
      role: 'CEO, Smart Solutions'
    }
  ];

  let currentIndex = 0;

  const imgEl = document.getElementById('testimonial-img');
  const commentEl = document.getElementById('testimonial-comment');
  const nameEl = document.getElementById('testimonial-name');
  const roleEl = document.getElementById('testimonial-role');

  function renderTestimonial(index) {
    const testimonial = sliderData[index];
    imgEl.src = testimonial.image;
    commentEl.textContent = testimonial.comment;
    nameEl.textContent = testimonial.name;
    roleEl.textContent = testimonial.role;
  }

  document.getElementById('left-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + sliderData.length) % sliderData.length;
    renderTestimonial(currentIndex);
  });

  document.getElementById('right-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % sliderData.length;
    renderTestimonial(currentIndex);
  });

  renderTestimonial(currentIndex);

  document.querySelectorAll('.open-close').forEach(toggleBtn => {
    toggleBtn.addEventListener('click', () => {
      const simpleText = toggleBtn.parentElement.querySelector('.simple-text');
      const isVisible = simpleText.style.display === 'block';

      simpleText.style.display = isVisible ? 'none' : 'block';
      toggleBtn.textContent = isVisible ? 'v' : '^';
    });
  });