"use strict";

// --- Данные о треках (JSON-подобная структура) ---
const tracksData = [
  {
    id: 1,
    title: "АБСОЛЮТНОЕ НИЧЕГО",
    artist: "DLTMZK",
    duration: "2:11",
    coverSrc: "covers/АБСОЛЮТНОЕ НИЧЕГО.jpg",
    audioSrc: "audio/АБСОЛЮТНОЕ НИЧЕГО.mp3",
    lyrics: `
    [Куплет]
    Абсолютное Ничего — мой новый стиль,
    Застрял между «был» и «не было сил»,
    Шесть месяцев в этой пустоте,
    Строчки мои как в туманной мгле,
    Ответов поиск в кофейной гуще,
    Мысли мои растворялись в луже,
    Кризис — не гость, въелся в потолок,
    Словно чёрный снег валит без дорог.

    [Припев]
    Искал себя, нашёл лишь фальшь,
    Искал себя, нашёл лишь фальшь,
    Искал себя, нашёл лишь фальшь,
    Искал себя, нашёл лишь фальшь,
    Искал себя, нашёл лишь фальшь,
    Искал себя, нашёл лишь фальшь,
    Искал себя, нашёл лишь фальшь,
    Искал себя, нашёл лишь фальшь.

    [Припев]
    Искал себя, нашёл лишь фальшь,
    Искал себя, нашёл лишь фальшь,
    Искал себя, нашёл лишь фальшь,
    Искал себя, нашёл лишь фальшь,
    Искал себя, нашёл лишь фальшь,
    Искал себя, нашёл лишь фальшь,
    Искал себя, нашёл лишь фальшь,
    Искал себя, нашёл лишь фальшь.

    [Куплет]
    Абсолютное Ничего — мой новый стиль,
    Застрял между «был» и «не было сил»,
    Шесть месяцев в этой пустоте,
    Строчки мои как в туманной мгле,
    Ответов поиск в кофейной гуще,
    Мысли мои растворялись в луже,
    Кризис — не гость, въелся в потолок,
    Словно чёрный снег валит без дорог.`
  },
  {
    id: 2,
    title: "АБСОЛЮТНОЕ НИЧЕГО 2026",
    artist: "DLTMZK",
    duration: "3:06",
    coverSrc: "covers/АБСОЛЮТНОЕ НИЧЕГО 2026.jpg",
    audioSrc: "audio/АБСОЛЮТНОЕ НИЧЕГО 2026.mp3",
    lyrics: `
    [Куплет]
    Абсолютное Ничего — мой новый стиль,
    Застрял между «был» и «не было сил»,
    Шесть месяцев в этой пустоте,
    Строчки мои как в туманной мгле,
    Ответов поиск в кофейной гуще,
    Мысли мои растворялись в луже,
    Кризис — не гость, въелся в потолок,
    Словно чёрный снег валит без дорог.

    [Припев]
    Искал себя, нашёл лишь фальшь,
    Искал себя, нашёл лишь фальшь,
    Искал себя, нашёл лишь фальшь,
    Искал себя, нашёл лишь фальшь,
    Искал себя, нашёл лишь фальшь,
    Искал себя, нашёл лишь фальшь,
    Искал себя, нашёл лишь фальшь,
    Искал себя, нашёл лишь фальшь.

    [Припев]
    Искал себя, нашёл лишь фальшь,
    Искал себя, нашёл лишь фальшь,
    Искал себя, нашёл лишь фальшь,
    Искал себя, нашёл лишь фальшь,
    Искал себя, нашёл лишь фальшь,
    Искал себя, нашёл лишь фальшь,
    Искал себя, нашёл лишь фальшь,
    Искал себя, нашёл лишь фальшь.

    [Куплет]
    Абсолютное Ничего — мой новый стиль,
    Застрял между «был» и «не было сил»,
    Шесть месяцев в этой пустоте,
    Строчки мои как в туманной мгле,
    Ответов поиск в кофейной гуще,
    Мысли мои растворялись в луже,
    Кризис — не гость, въелся в потолок,
    Словно чёрный снег валит без дорог.`
  },
  {
    id: 3,
    title: "...ИЛИ ОСТАВИТЬ ВСЁ",
    artist: "DLTMZK",
    duration: "3:29",
    coverSrc: "covers/ИЛИ ОСТАВИТЬ ВСЁ.jpg",
    audioSrc: "audio/ИЛИ ОСТАВИТЬ ВСЁ.mp3",
    lyrics: `
    [Куплет]
    Чашка кофе остыла
    И всё вокруг застыло
    В голове
    Как в туманной мгле
    
    [Куплет]
    Нет идей
    Или чего-то ещё
    Стереть черновики
    Или оставить всё
    
    [Припев]
    Или оставить всё
    Или оставить всё
    Или оставить всё
    Или оставить всё
    
    [Припев]
    Или оставить всё
    Или оставить всё
    Или оставить всё
    Или оставить всё`
  }
];

// --- Глобальные переменные ---
let currentTrackIdForSharing = null; // ID трека, который вызвал модальное окно
let filteredAndSortedTracks = [...tracksData]; // Изначально отображаем все треки

// --- DOM Elements ---
const themeToggle = document.getElementById('theme-toggle');
const shareModal = document.getElementById('share-modal');
const closeShareModal = document.getElementById('close-share-modal');
const sharePlatformButtons = document.querySelectorAll('.share-platform-btn');
const tracksListContainer = document.getElementById('tracks-list'); // Обновлённый ID контейнера
const searchInput = document.getElementById('search-input');
const sortSelect = document.getElementById('sort-select');

// --- Функции ---

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Преобразует строку "MM:SS" в общее количество секунд (число)
function parseDuration(durationStr) {
  const [minutes, seconds] = durationStr.split(':').map(Number);
  return minutes * 60 + seconds;
}

function filterTracks(query) {
  query = query.toLowerCase().trim();
  if (!query) {
    return [...tracksData]; // Возвращаем копию исходного массива, если запрос пуст
  }
  return tracksData.filter(track =>
    track.title.toLowerCase().includes(query) ||
    track.artist.toLowerCase().includes(query)
  );
}

function sortTracks(tracksToSort, sortValue) {
  if (!sortValue) {
    return tracksToSort; // Не сортируем, если не выбрано
  }

  const [key, order] = sortValue.split('-');
  const sorted = [...tracksToSort]; // Создаём копию массива для сортировки

  sorted.sort((a, b) => {
    let aValue, bValue;
    if (key === 'duration') {
      aValue = parseDuration(a[key]);
      bValue = parseDuration(b[key]);
    } else {
      aValue = a[key];
      bValue = b[key];
    }

    let comparison = 0;
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      comparison = aValue.localeCompare(bValue, undefined, { numeric: true, sensitivity: 'base' });
    } else {
      comparison = aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    }

    return order === 'desc' ? -comparison : comparison;
  });

  return sorted;
}

function renderTracks(tracksToRender) {
  tracksListContainer.innerHTML = ''; // Очищаем контейнер
  tracksToRender.forEach(track => {
    const trackElement = generateTrackElement(track);
    tracksListContainer.appendChild(trackElement);
    // Привязываем обработчики к элементам только что созданного трека
    attachEventListenersToTrack(trackElement, track.id);
  });
}

function updateTrackDisplay() {
  const query = searchInput.value;
  const sortValue = sortSelect.value;

  let filtered = filterTracks(query);
  let sorted = sortTracks(filtered, sortValue);

  filteredAndSortedTracks = sorted;
  renderTracks(sorted);
}

function generateTrackElement(track) {
  const trackItem = document.createElement('div');
  trackItem.className = 'track-item';

  trackItem.innerHTML = `
    <img src="${track.coverSrc}" alt="${track.title}" class="main-cover">
    <audio controls>
      <source src="${track.audioSrc}" type="audio/mpeg">
    </audio>
    <button class="share-audio-btn share-btn">Поделиться аудио</button>
    <div class="track-info">
      <h3 class="track-title">${track.title}</h3>
      <p class="track-meta">Артист: ${track.artist} | Продолжительность: ${track.duration}</p>
      <button class="show-lyrics-btn">Показать текст</button>
      <div class="lyrics-container">
        <pre class="lyrics">${track.lyrics}</pre>
      </div>
    </div>
  `;

  return trackItem;
}

function attachEventListenersToTrack(trackItem, trackId) {
  const cover = trackItem.querySelector('.main-cover');
  const audio = trackItem.querySelector('audio');
  const shareBtn = trackItem.querySelector('.share-audio-btn');
  const lyricsContainer = trackItem.querySelector('.lyrics-container');
  const showLyricsBtn = trackItem.querySelector('.show-lyrics-btn');

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
    // Сохраняем ID трека, который вызвал шаринг
    currentTrackIdForSharing = trackId;
    // Модальное окно само возьмет нужную информацию из данных при открытии
    shareModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  // --- Показ/скрытие текста песни ---
  if (showLyricsBtn && lyricsContainer) {
    showLyricsBtn.addEventListener('click', () => {
      lyricsContainer.classList.toggle('visible');
      showLyricsBtn.textContent = lyricsContainer.classList.contains('visible') ? 'Скрыть текст' : 'Показать текст';
    });
  }
}

function handleSharing(platform) {
  // Находим данные текущего трека по ID
  const currentTrack = tracksData.find(t => t.id === currentTrackIdForSharing);
  if (!currentTrack) {
    console.error("Трек для шаринга не найден!");
    return;
  }

  const url = encodeURIComponent(window.location.href);
  // Используем название текущего трека
  const title = encodeURIComponent(currentTrack.title + " by " + currentTrack.artist);
  let link = '';

  switch (platform) {
    case 'vk':
      link = `https://vk.com/share.php?url=${url}&title=${title}`;
      break;
    case 'ok':
      link = `https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=${url}&st.title=${title}`;
      break;
    case 'bluesky':
      link = `https://bsky.app/intent/compose?text=${title}%20${url}`;
      break;
    case 'copy':
      navigator.clipboard.writeText(window.location.href)
        .then(() => {
          // Обновляем текст кнопки "Копировать ссылку"
          const copyBtn = document.querySelector('.copy-link-btn');
          if (copyBtn) {
              copyBtn.textContent = '✓';
              setTimeout(() => copyBtn.textContent = 'Копировать ссылку', 1200);
          }
        })
        .catch(err => {
          console.error('Ошибка копирования ссылки: ', err);
          const copyBtn = document.querySelector('.copy-link-btn');
          if (copyBtn) {
              copyBtn.textContent = '⚠';
              setTimeout(() => copyBtn.textContent = 'Копировать ссылку', 1200);
          }
        });
      return; // Выходим, чтобы не закрывать модальное окно для копирования
    default:
      return;
  }

  if (platform !== 'copy') {
      window.open(link, '_blank', 'noopener,noreferrer');
  }
  shareModal.classList.remove('open');
  document.body.style.overflow = '';
  // Сбрасываем ID после использования
  currentTrackIdForSharing = null;
}


// --- Инициализация при загрузке DOM ---
document.addEventListener('DOMContentLoaded', () => {

  // --- Тема ---
  const savedTheme = localStorage.getItem('preferredTheme');
  if (savedTheme) {
    document.body.setAttribute('data-theme', savedTheme);
  }

  themeToggle.addEventListener('click', () => {
    const current = document.body.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('preferredTheme', newTheme);
    themeToggle.classList.add('active');
    setTimeout(() => themeToggle.classList.remove('active'), 800);
  });

  // --- Инициализация отображения треков ---
  renderTracks(tracksData); // Изначально отображаем все треки

  // --- Фильтрация и сортировка ---
  const debouncedUpdate = debounce(updateTrackDisplay, 300); // 300ms задержка для поиска
  searchInput.addEventListener('input', debouncedUpdate);
  sortSelect.addEventListener('change', updateTrackDisplay);

  // --- Модальное окно «Поделиться аудио» ---
  closeShareModal.addEventListener('click', () => {
    shareModal.classList.remove('open');
    document.body.style.overflow = '';
    currentTrack = null; // Сброс ID при закрытии
  });

  shareModal.addEventListener('click', (e) => {
    if (e.target === shareModal) {
      shareModal.classList.remove('open');
      document.body.style.overflow = '';
      currentTrackIdForSharing = null; // Сброс ID при закрытии кликом вне
    }
  });

  // --- Поделиться на платформу ---
  sharePlatformButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const platform = btn.dataset.platform;
      handleSharing(platform);
    });
  });
});
