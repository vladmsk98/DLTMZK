"use strict";

const audioPlayer = document.getElementById('audio-player');
const showLyricsBtn = document.getElementById('show-lyrics-btn');
const lyricsContainer = document.getElementById('lyrics-container');
const themeToggleBtn = document.getElementById('theme-toggle');
const shareBtn = document.getElementById('share-btn');
const shareModal = document.getElementById('share-modal'); // Новое модальное окно
const closeShareModal = document.getElementById('close-share-modal'); // Кнопка закрытия модального окна
const sharePlatformButtons = document.querySelectorAll('.share-platform-btn'); // Кнопки платформ
const coverImage = document.querySelector('.cover');

// --- Логика для темы ---
function applyTheme(themeName) {
  document.body.setAttribute('data-theme', themeName);
  localStorage.setItem('preferredTheme', themeName);
}

function toggleTheme() {
  const currentTheme = document.body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
}

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('preferredTheme');
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    applyTheme('light');
  }
});

themeToggleBtn.addEventListener('click', toggleTheme);

// --- Логика для текста ---
showLyricsBtn.addEventListener('click', () => {
  if (lyricsContainer.style.display === 'none') {
    lyricsContainer.style.display = 'block';
    showLyricsBtn.textContent = 'Скрыть текст';
    localStorage.setItem('lyricsVisible', 'true');
  } else {
    lyricsContainer.style.display = 'none';
    showLyricsBtn.textContent = 'Показать текст';
    localStorage.setItem('lyricsVisible', 'false');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const savedLyricsState = localStorage.getItem('lyricsVisible');  if (savedLyricsState === 'true') {
    lyricsContainer.style.display = 'block';
    showLyricsBtn.textContent = 'Скрыть текст';
  } else {
    lyricsContainer.style = 'none';
    showLyricsBtn.textContent = 'Показать текст';
  }
});

// --- Логика для воспроизведения по клику на обложку ---
coverImage.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play().catch(e => console.warn('Автовоспроизведение заблокировано:', e));
  } else {
    audioPlayer.pause();
  }
});

// --- Логика для кнопки "Поделиться" (открытие модального окна) ---
shareBtn.addEventListener('click', () => {
  shareModal.classList.add('open');
  document.body.style.overflow = 'hidden'; // Блокируем прокрутку фона
});

// --- Логика для модального окна "Поделиться" ---
closeShareModal.addEventListener('click', () => {
  shareModal.classList.remove('open');
  document.body.style.overflow = ''; // Восстанавливаем прокрутку фона
});

// Закрытие модального окна при клике вне его содержимого
shareModal.addEventListener('click', (e) => {
  if (e.target === shareModal) {
    shareModal.classList.remove('open');
    document.body.style.overflow = '';
  }
});

// --- Логика для кнопок платформ в модальном окне ---
sharePlatformButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault(); // Предотвращаем стандартное поведение ссылки
    const platform = btn.dataset.platform;
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent('Послушай трек MADEBYAI (JAZZ BOOM BAP)');
    let link = '';

    switch (platform) {
      case 'vk':
        link = `https://vk.com/share.php?url=${url}&title=${title}`;        break;
      case 'ok':
        link = `https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=${url}&st.title=${title}`;
        break;
      case 'bluesky':
        // Bluesky использует intent, title может не передаваться напрямую
        link = `https://bsky.app/intent/compose?text=${title}%20${url}`;
        break;
      default:
        return;
    }

    // Открываем сгенерированную ссылку в новой вкладке
    window.open(link, '_blank', 'noopener,noreferrer');
  });
});