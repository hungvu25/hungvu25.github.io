// Initialize AOS
AOS.init({
  duration: 600,
  easing: 'ease-in-out',
  once: false,
  mirror: true
});

// Typed.js for roles
const typed = new Typed('#typed', {
  strings: ['Game Developer', 'Unity Developer', 'C# Programmer'],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 1500,
  startDelay: 500,
  loop: true,
  showCursor: true,
  cursorChar: '|'
});

// Dark/Light Mode Toggle
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-theme');
  toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
}
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  const isLight = body.classList.contains('light-theme');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  toggleBtn.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Khởi tạo EmailJS V3 chỉ 1 lần khi load trang
if (window.emailjs) {
  emailjs.init('chgqyUDZwTGxzYKGp');
}
// Contact Form Handler & Animation
(function() {
  var contactForm = document.getElementById('contact-form');
  var contactStatus = document.getElementById('contact-status');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      contactStatus.textContent = 'Sending...';
      contactStatus.style.color = '#00eaff';
      var name = contactForm.name.value.trim();
      var email = contactForm.email.value.trim();
      var message = contactForm.message.value.trim();
      if (!name || !email || !message) {
        contactStatus.textContent = 'Please fill in all fields.';
        contactStatus.style.color = '#ff4d4f';
        return;
      }
      // EmailJS send (V3)
      if (window.emailjs) {
        emailjs.send('hungvu25', 'hungvu205', {
          from_name: name,
          from_email: email,
          message: message
        }).then(function() {
          contactStatus.textContent = 'Message sent successfully!';
          contactStatus.style.color = '#00ff99';
          contactForm.reset();
        }, function(error) {
          contactStatus.textContent = 'Failed to send. Please try again later.';
          contactStatus.style.color = '#ff4d4f';
          if (error && error.text) {
            contactStatus.textContent += '\n' + error.text;
          }
          console.error('EmailJS error:', error);
        });
      } else {
        contactStatus.textContent = 'Email service not available.';
        contactStatus.style.color = '#ff4d4f';
      }
    });
  }
})();

// Modal for project details (optional)
const modal = document.getElementById('project-modal');
const closeBtn = document.querySelector('.close');
document.querySelector('.project-card').addEventListener('click', () => {
  modal.style.display = 'flex';
  // Image gallery array
  const images = [
    'assets/void-seeker-thumb.jpg',
    'assets/ui_login.png',
    'assets/gameplay.png',
  ];
  let currentImg = 0;
  // Gallery HTML
  document.getElementById('modal-body').innerHTML = `
    <div id="gallery-container" style="width:100%;max-width:400px;margin:0 auto 20px;position:relative;overflow:hidden;">
      <img id="gallery-img" src="${images[0]}" alt="Void Seeker Screenshot" style="width:100%;display:block;transition:opacity 2s;" />
    </div>
    <h3>🎮 Void-Seeker – Survive the Pixel Void</h3>
    <p>Void-Seeker is a retro-style top-down shooter where you play as a lone survivor facing endless waves of zombies and void-spawned creatures in a dark, pixelated world.</p>
    <p><strong>🔫 Gameplay</strong><br>
    Armed with only a gun and limited ammo, your mission is to:</p>
    <ul>
      <li>Eliminate as many enemies as possible to increase your Kill count.</li>
      <li>Collect scattered bullets around the map to keep fighting.</li>
      <li>Survive as long as you can against increasingly aggressive monsters.</li>
    </ul>
    <p><strong>💡 Key Features</strong></p>
    <ul>
      <li>Addictive combat mechanics: Move, aim, and shoot fluidly in fast-paced survival action.</li>
      <li>Unique pixel-art graphics: Dark tones and creepy enemies set a moody atmosphere.</li>
      <li>Clear, simple HUD: Real-time display of kill count, bullet count, and health bar.</li>
      <li>Diverse enemies: Face zombies, crawling horrors, and creatures from the void with varied behavior.</li>
    </ul>
  `;
  // Start gallery slideshow
  const galleryImg = document.getElementById('gallery-img');
  if (window.galleryInterval) clearInterval(window.galleryInterval);
  window.galleryInterval = setInterval(() => {
    currentImg = (currentImg + 1) % images.length;
    galleryImg.style.opacity = 0;
    setTimeout(() => {
      galleryImg.src = images[currentImg];
      galleryImg.style.opacity = 1;
    }, 400);
  }, 1000);
});
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  if (window.galleryInterval) clearInterval(window.galleryInterval);
});
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    if (window.galleryInterval) clearInterval(window.galleryInterval);
  }
});

// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('main-nav');
  const toggle = document.getElementById('nav-toggle');
  if (nav && toggle) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach(link =>
      link.addEventListener('click', () => nav.classList.remove('open'))
    );
  }
});

