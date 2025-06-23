document.addEventListener('DOMContentLoaded', () => {
  const searchBar = document.querySelector('.search-bar');
  const musicCards = document.querySelectorAll('.character-card');
  let currentPlayingAudio = null; // Зберігаємо посилання на поточний аудіо, що грає
  let currentPlayingCard = null; // Зберігаємо посилання на поточну картку, що грає

  searchBar.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    musicCards.forEach(card => {
      const musicName = card.querySelector('.music-name').textContent.toLowerCase();
      if (musicName.includes(searchTerm)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });

  musicCards.forEach(card => {
    const audio = card.querySelector('audio');
    const playPauseBtn = card.querySelector('.play-pause-btn');
    const playIcon = playPauseBtn.querySelector('.play-icon');
    const pauseIcon = playPauseBtn.querySelector('.pause-icon');

    // Обробник кліку на картку (або кнопку всередині картки)
    card.addEventListener('click', (event) => {
      // Перевіряємо, чи клік був саме на кнопці play-pause-btn або її дочірньому елементі
      const isPlayPauseClick = playPauseBtn.contains(event.target);

      if (currentPlayingAudio && currentPlayingAudio !== audio) {
        // Якщо інша музика грає, зупиняємо її та прибираємо клас 'playing'
        currentPlayingAudio.pause();
        if (currentPlayingCard) {
          currentPlayingCard.classList.remove('playing');
        }
      }

      if (audio.paused) {
        audio.play();
        card.classList.add('playing'); // Додаємо клас для анімації та зміни кнопки
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
        currentPlayingAudio = audio;
        currentPlayingCard = card;
      } else {
        audio.pause();
        card.classList.remove('playing'); // Прибираємо клас
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        currentPlayingAudio = null;
        currentPlayingCard = null;
      }
    });

    // Обробник наведення миші для відображення кнопки
    card.addEventListener('mouseenter', () => {
      playPauseBtn.style.opacity = '1';
      playPauseBtn.style.transform = 'scale(1)'; // Змінено на scale
    });

    // Обробник відведення миші для приховування кнопки, якщо музика не грає
    card.addEventListener('mouseleave', () => {
      if (!card.classList.contains('playing')) {
        playPauseBtn.style.opacity = '0';
        playPauseBtn.style.transform = 'scale(0.8)'; // Змінено на scale
      }
    });

    // Оновлення стану, якщо музика закінчилася
    audio.addEventListener('ended', () => {
      card.classList.remove('playing');
      playIcon.style.display = 'block';
      pauseIcon.style.display = 'none';
      currentPlayingAudio = null;
      currentPlayingCard = null;
      playPauseBtn.style.opacity = '0'; // Приховуємо кнопку, коли закінчилася
      playPauseBtn.style.transform = 'scale(0.8)'; // Змінено на scale
    });
  });
});