
document.addEventListener("mousemove", function (event) {
  const leftEye = document.getElementById("left-eye");
  const rightEye = document.getElementById("right-eye");

  // Define the maximum distance pupils can move
  const maxDistance = 15;

  [leftEye, rightEye].forEach((eye) => {
    const rect = eye.getBoundingClientRect();
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;

    const dx = event.clientX - eyeCenterX;
    const dy = event.clientY - eyeCenterY;
    const angle = Math.atan2(dy, dx);

    const distance = Math.min(maxDistance, Math.sqrt(dx ** 2 + dy ** 2));
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    eye.style.transform = `translate(${x}px, ${y}px)`;
  });
});
