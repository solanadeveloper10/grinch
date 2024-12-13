
// Function to make pupils follow the mouse
document.addEventListener('mousemove', (event) => {
  const eyes = document.querySelectorAll('.eye .pupil');
  eyes.forEach(eye => {
    const rect = eye.parentElement.getBoundingClientRect();
    const eyeX = rect.left + rect.width / 2;
    const eyeY = rect.top + rect.height / 2;
    const angle = Math.atan2(event.clientY - eyeY, event.clientX - eyeX);
    const distance = 10; // Maximum displacement of pupils
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    eye.style.transform = `translate(${x}px, ${y}px)`;
  });
});

// HTML and CSS for character and eyes
document.body.innerHTML = `
  <div class="character">
    <img src="hero_chara.png" alt="Character">
    <div class="eye" id="left-eye">
      <div class="pupil"></div>
    </div>
    <div class="eye" id="right-eye">
      <div class="pupil"></div>
    </div>
  </div>
`;

const style = document.createElement('style');
style.textContent = `
  body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
    overflow: hidden;
  }

  .character {
    position: relative;
  }

  .character img {
    width: 400px; /* Adjust size of the image */
    position: relative;
  }

  .eye {
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    overflow: hidden;
  }

  #left-eye {
    top: 150px; /* Adjust left eye position */
    left: 120px;
  }

  #right-eye {
    top: 150px; /* Adjust right eye position */
    left: 260px;
  }

  .pupil {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: black;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
document.head.appendChild(style);
