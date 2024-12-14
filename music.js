document.addEventListener('DOMContentLoaded', function () {
  // Створити елемент аудіо
  const audio = new Audio('music/grinkle.mp3');
  audio.loop = true; // Зациклення музики

  // Отримати елементи
  const musicButton = document.getElementById('music-button');
  const musicIcon = document.getElementById('music-icon');
  const welcomeScreen = document.querySelector('.section_welcome');
  const continueButton = document.querySelector('.continue');
  let isPlaying = false;

  // Спочатку показати екран привітання
  welcomeScreen.style.display = 'flex';

  // При кліку на CONTINUE
  continueButton.addEventListener('click', function (event) {
    event.preventDefault(); // Запобігає перезавантаженню сторінки
    welcomeScreen.style.display = 'none'; // Приховати екран привітання
    if (!isPlaying) {
      audio.play(); // Відтворити музику
      musicIcon.src = 'images/zvuk_2.png'; // Змінити іконку на "звук увімкнено"
      isPlaying = true;
    }
  });

  // Обробник кліку для кнопки музики
  musicButton.addEventListener('click', function () {
    if (isPlaying) {
      audio.pause();
      musicIcon.src = 'images/zvuk.png'; // Змінити іконку на "звук вимкнено"
    } else {
      audio.play();
      musicIcon.src = 'images/zvuk_2.png'; // Змінити іконку на "звук увімкнено"
    }
    isPlaying = !isPlaying;
  });
});

// document.addEventListener('DOMContentLoaded', function () {
//   // Створити елемент аудіо
//   const audio = new Audio('music/grinkle.mp3');
//   audio.loop = true; // Зациклення музики

//   // Отримати кнопку та іконку
//   const musicButton = document.getElementById('music-button');
//   const musicIcon = document.getElementById('music-icon');
//   let isPlaying = false;

//   // Обробник кліку
//   musicButton.addEventListener('click', function () {
//     if (isPlaying) {
//       audio.pause();
//       musicIcon.src = 'images/zvuk.png'; // Змінити іконку на "звук увімкнено"
//     } else {
//       audio.play();
//       musicIcon.src = 'images/zvuk_2.png'; // Змінити іконку на "звук вимкнено"
//     }
//     isPlaying = !isPlaying;
//   });
// });