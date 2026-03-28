"use strict";

const themeToggle = document.getElementById('theme-toggle');
const shareModal = document.getElementById('share-modal');
const closeShareModal = document.getElementById('close-share-modal');
const sharePlatformButtons = document.querySelectorAll('.share-platform-btn');

// --- Тема ---
themeToggle.addEventListener('click', () => {
  const current = document.body.getAttribute('data-theme');
  const newTheme = current === 'dark' ? 'light' : 'dark';
  document.body.setAttribute('data-theme', newTheme);
  // Сохраняем тему в localStorage
  localStorage.setItem('preferredTheme', newTheme);
  themeToggle.classList.add('active');
  setTimeout(() => themeToggle.classList.remove('active'), 800);
});

// --- Восстановление темы из localStorage при загрузке ---
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('preferredTheme');
  if (savedTheme) {
    document.body.setAttribute('data-theme', savedTheme);
  }
});


// --- Масштабируемая система треков ---
document.querySelectorAll('.track-item').forEach(item => {
  const cover = item.querySelector('.main-cover');
  const audio = item.querySelector('audio');
  const shareBtn = item.querySelector('.share-audio-btn');

  // --- Воспроизведение/пауза по клику на обложку ---
  cover.addEventListener('click', () => {
    // Сначала поставим на паузу все другие аудио
    document.querySelectorAll('audio').forEach(otherAudio => {
      if (otherAudio !== audio && !otherAudio.paused) {
        otherAudio.pause();
      }
    });

    if (audio.paused) {
      audio.play().catch(e => console.warn('Автовоспроизведение заблокировано:', e));
    } else {
      audio.pause();
    }
  });

  // --- Открытие модального окна шаринга для конкретного трека ---
  shareBtn.addEventListener('click', () => {
    // Сохраняем URL страницы в атрибут кнопки, чтобы модальное окно знало, чем поделиться
    shareModal.setAttribute('data-sharing-url', window.location.href);
    shareModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

// --- Модальное окно «Поделиться аудио» ---
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

// --- Поделиться на платформу ---
sharePlatformButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const platform = btn.dataset.platform;
    // Получаем URL из атрибута модального окна
    const url = encodeURIComponent(shareModal.getAttribute('data-sharing-url'));
    let link = '';

    switch (platform) {
      case 'vk':
        link = `https://vk.com/share.php?url=${url}&title=TLOA+EP`;
        break;
      case 'telegram':
        link = `https://t.me/share/url?url=${url}&text=TLOA+EP`;
        break;
      case 'ok':
        link = `https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=${url}&st.title=TLOA+EP`;
        break;
      case 'bluesky':
        link = `https://bsky.app/intent/compose?text=TLOA+EP%20${url}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(shareModal.getAttribute('data-sharing-url'))
          .then(() => {
            btn.textContent = '✓';
            setTimeout(() => btn.textContent = 'Копировать ссылку', 1200);
          })
          .catch(() => {
            btn.textContent = '⚠';
            setTimeout(() => btn.textContent = 'Копировать ссылку', 1200);
          });
        return;
      default:
        return;
    }

    if (platform !== 'copy') {
        window.open(link, '_blank', 'noopener,noreferrer');
    }
    shareModal.classList.remove('open');
    document.body.style.overflow = '';
  });
});