"use strict";

const audioPlayer = document.getElementById('audio-player');
const showLyricsBtn = document.getElementById('show-lyrics-btn');
const lyricsContainer = document.getElementById('lyrics-container');
const themeToggleBtn = document.getElementById('theme-toggle');
const shareBtn = document.getElementById('share-btn');
const shareModal = document.getElementById('share-modal');
const closeShareModal = document.getElementById('close-share-modal');
const sharePlatformButtons = document.querySelectorAll('.share-platform-btn');
const coverImage = document.querySelector('.cover');
const trackTitleElement = document.getElementById('track-title'); // Элемент заголовка
const copyTitleBtn = document.getElementById('copy-title-btn'); // Новая кнопка

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

// --- Логика для текста (с анимацией) ---
showLyricsBtn.addEventListener('click', () => {
  lyricsContainer.classList.toggle('visible'); // Переключаем класс 'visible'
  showLyricsBtn.textContent = lyricsContainer.classList.contains('visible') ? 'Скрыть текст' : 'Показать текст';
  localStorage.setItem('lyricsVisible', lyricsContainer.classList.contains('visible')); // Сохраняем состояние
});

document.addEventListener('DOMContentLoaded', () => {
  const savedLyricsState = localStorage.getItem('lyricsVisible');
  if (savedLyricsState === 'true') {
    lyricsContainer.classList.add('visible'); // Добавляем класс 'visible'
    showLyricsBtn.textContent = 'Скрыть текст';
  } else {
    lyricsContainer.classList.remove('visible'); // Убираем класс 'visible'
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

// --- Логика для кнопки "Поделиться" ---
shareBtn.addEventListener('click', () => {
  shareModal.classList.add('open');
  document.body.style.overflow = 'hidden';
});

// --- Логика для модального окна "Поделиться" ---
closeShareModal.addEventListener('click', () => {
  shareModal.classList.remove('open');
  document.body.style.overflow = '';
});

shareModal.addEventListener('click', (e) => {
  if (e.target === shareModal) {
    shareModal.classList.remove('open');
    document.body.style.overflow = '';
  }
});

// --- Логика для кнопок платформ в модальном окне ---
sharePlatformButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const platform = btn.dataset.platform;
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent('Послушай трек MADEBYAI (2000 RNB) by THEENDMIXTAPE');
    let link = '';

    switch (platform) {
      case 'vk':
        link = `https://vk.com/share.php?url=${url}&title=${title}`;
        break;
      case 'ok':
        link = `https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=${url}&st.title=${title}`;
        break;
      default:
        return;
    }

    window.open(link, '_blank', 'noopener,noreferrer');
  });
});

// --- Логика для кнопки "Копировать название/артиста" ---
copyTitleBtn.addEventListener('click', () => {
  const title = trackTitleElement.textContent;
  const artist = document.querySelector('.track-meta').textContent.match(/Артист:\s*(.*?)\s*\|/)?.[1] || 'Неизвестный артист'; // Извлечение артиста из метаданных
  const textToCopy = `${title} by ${artist}`;

  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      // Визуальная обратная связь
      copyTitleBtn.textContent = '✓'; // Временно меняем текст на галочку
      copyTitleBtn.classList.add('success'); // Добавляем класс успеха

      // Возвращаем исходное состояние через 1.5 секунды
      setTimeout(() => {
        copyTitleBtn.textContent = '📋'; // Возвращаем эмодзи
        copyTitleBtn.classList.remove('success'); // Убираем класс успеха
      }, 1500);
    })
    .catch(err => {
      console.error('Ошибка копирования: ', err);
      // Визуальная обратная связь при ошибке (опционально)
      copyTitleBtn.textContent = '⚠'; // Временно меняем текст на восклицательный знак
      copyTitleBtn.classList.add('success'); // Можно использовать тот же класс или другой

      setTimeout(() => {
        copyTitleBtn.textContent = '📋';
        copyTitleBtn.classList.remove('success');
      }, 1500);
    });
});
