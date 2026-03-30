"use strict";

const audioPlayer = document.getElementById('audio-player');
const showLyricsBtn = document.getElementById('show-lyrics-btn');
const lyricsContainer = document.getElementById('lyrics-container');
const themeToggleBtn = document.getElementById('theme-toggle');
const shareBtn = document.getElementById('share-btn'); // Новая кнопка
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
  const savedLyricsState = localStorage.getItem('lyricsVisible');
  if (savedLyricsState === 'true') {
    lyricsContainer.style.display = 'block';
    showLyricsBtn.textContent = 'Скрыть текст';
  } else {
    lyricsContainer.style.display = 'none';
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
shareBtn.addEventListener('click', async () => {
  const shareData = {
    title: 'MADEBYAI',
    text: 'Послушай трек MADEBYAI (JAZZ BOOM BAP)',
    url: window.location.href,
  };

  try {
    // Проверяем, поддерживается ли Web Share API
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      // Fallback: копируем ссылку в буфер обмена
      await navigator.clipboard.writeText(shareData.url);
      alert('Ссылка скопирована в буфер обмена!');
    }
  } catch (err) {
    console.error('Ошибка при попытке поделиться:', err);
    // Если Web Share отклонён пользователем, просто копируем
    if (err.name !== 'AbortError') {
       try {
         await navigator.clipboard.writeText(shareData.url);
         alert('Ссылка скопирована в буфер обмена!');
       } catch (clipErr) {
         console.error('Ошибка при копировании ссылки:', clipErr);
         // Если и копирование не удалось, открываем VK Share
         window.open(`https://vk.com/share.php?url=${encodeURIComponent(shareData.url)}&title=${encodeURIComponent(shareData.title)}`, '_blank');
       }
    }
  }
});
