"use strict";

// --- Данные о треках (JSON-подобная структура) ---
const tracksData = [
  {
    id: 1,
    title: "АБСОЛЮТНОЕ НИЧЕГО",
    artist: "КРИСТАЛГАЙЗ",
    duration: "2:11",
    year: 2025,
    tags: ["меланхолия", "тревожность", "рэпкор", "фальшь"],
    coverSrc: "covers/АБСОЛЮТНОЕ НИЧЕГО.jpg",
    audioSrc: "audio/АБСОЛЮТНОЕ НИЧЕГО.mp3",
    lyrics: `
    <div class="lyrics-content">
    <p><strong>[Куплет]</strong></p>
    <p>Абсолютное Ничего — мой новый стиль,</p>
    <p>Застрял между «был» и «не было сил»,</p>
    <p>Шесть месяцев в этой пустоте,</p>
    <p>Строчки мои как в туманной мгле,</p>
    <p>Ответов поиск в кофейной гуще,</p>
    <p>Мысли мои растворялись в луже,</p>
    <p>Кризис — не гость, въелся в потолок,</p>
    <p>Словно чёрный снег валит без дорог.</p>

    <p><strong>[Припев]</strong></p>
    <p>Искал себя, нашёл лишь фальшь,</p>
    <p>Искал себя, нашёл лишь фальшь,</p>
    <p>Искал себя, нашёл лишь фальшь,</p>
    <p>Искал себя, нашёл лишь фальшь,</p>
    <p>Искал себя, нашёл лишь фальшь,</p>
    <p>Искал себя, нашёл лишь фальшь,</p>
    <p>Искал себя, нашёл лишь фальшь,</p>
    <p>Искал себя, нашёл лишь фальшь.</p>

    <p><strong>[Припев]</strong></p>
    <p>Искал себя, нашёл лишь фальшь,</p>
    <p>Искал себя, нашёл лишь фальшь,</p>
    <p>Искал себя, нашёл лишь фальшь,</p>
    <p>Искал себя, нашёл лишь фальшь,</p>
    <p>Искал себя, нашёл лишь фальшь,</p>
    <p>Искал себя, нашёл лишь фальшь,</p>
    <p>Искал себя, нашёл лишь фальшь,</p>
    <p>Искал себя, нашёл лишь фальшь.</p>

    <p><strong>[Куплет]</strong></p>
    <p>Абсолютное Ничего — мой новый стиль,</p>
    <p>Застрял между «был» и «не было сил»,</p>
    <p>Шесть месяцев в этой пустоте,</p>
    <p>Строчки мои как в туманной мгле,</p>
    <p>Ответов поиск в кофейной гуще,</p>
    <p>Мысли мои растворялись в луже,</p>
    <p>Кризис — не гость, въелся в потолок,</p>
    <p>Словно чёрный снег валит без дорог.</p>
    </div>`,
    history: `<p><strong>История создания "АБСОЛЮТНОЕ НИЧЕГО":</strong></p>
    <p>Этот трек был написан в апреле 2025 года как результат шести месяцев эмоциональной пустоты и творческого кризиса. Многократное повторение припева подчеркивает разочарование от поисков себя, которое приводит к осознанию окружающей "творческой фальши".</p>`
  },
  {
    id: 2,
    title: "АБСОЛЮТНОЕ НИЧЕГО 2026",
    artist: "КРИСТАЛГАЙЗ",
    duration: "3:06",
    year: 2026,
    tags: ["рэпкор", "фальшь", "переиздание", "электроника"],
    coverSrc: "covers/АБСОЛЮТНОЕ НИЧЕГО 2026.jpg",
    audioSrc: "audio/АБСОЛЮТНОЕ НИЧЕГО 2026.mp3",
    lyrics: `
    <div class="lyrics-content">
    <p><strong>[Куплет]</strong></p>
    <p>Абсолютное Ничего — мой новый стиль,</p>
    <p>Застрял между «был» и «не было сил»,</p>
    <p>Шесть месяцев в этой пустоте,</p>
    <p>Строчки мои как в туманной мгле,</p>
    <p>Ответов поиск в кофейной гуще,</p>
    <p>Мысли мои растворялись в луже,</p>
    <p>Кризис — не гость, въелся в потолок,</p>
    <p>Словно чёрный снег валит без дорог.</p>

    <p><strong>[Припев]</strong></p>
    <p>Искал себя, нашёл лишь фальшь,</p>
    <p>Искал себя, нашёл лишь фальшь,</p>
    <p>Искал себя, нашёл лишь фальшь,</p>
    <p>Искал себя, нашёл лишь фальшь,</p>
    <p>Искал себя, нашёл лишь фальшь,</p>
    <p>Искал себя, нашёл лишь фальшь,</p>
    <p>Искал себя, нашёл лишь фальшь,</p>
    <p>Искал себя, нашёл лишь фальшь.</p>

    <p><strong>[Припев]</strong></p>
    <p>Искал себя, нашёл лишь фальшь,</p>
    <p>Искал себя, нашёл лишь фальшь,</p>
    <p>Искал себя, нашёл лишь фальшь,</p>
    <p>Искал себя, нашёл лишь фальшь,</p>
    <p>Искал себя, нашёл лишь фальшь,</p>
    <p>Искал себя, нашёл лишь фальшь,</p>
    <p>Искал себя, нашёл лишь,</p>
    <p>Искал себя, нашёл лишь фальшь.</p>

    <p><strong>[Куплет]</strong></p>
    <p>Абсолютное Ничего — мой новый стиль,</p>
    <p>Застрял между «был» и «не было сил»,</p>
    <p>Шесть месяцев в этой пустоте,</p>
    <p>Строчки мои как в туманной мгле,</p>
    <p>Ответов поиск в кофейной гуще,</p>
    <p>Мысли мои растворялись в луже,</p>
    <p>Кризис — не гость, въелся в потолок,</p>
    <p>Словно чёрный снег валит без дорог.</p>
    </div>`,
    history: `<p><strong>История создания "АБСОЛЮТНОЕ НИЧЕГО 2026":</strong></p>
    <p>Перевыпуск оригинальной композиции в обновлённом звуке. Текст остался без изменений для его большего раскрытия в стиле электронного рэпкора.</p>`
  },
  {
    id: 3,
    title: "ИЛИ ОСТАВИТЬ ВСЁ",
    artist: "КРИСТАЛГАЙЗ",
    duration: "3:28",
    year: 2026,
    tags: ["меланхолия", "вдохновение", "кофе", "творческий выбор"],
    coverSrc: "covers/ИЛИ ОСТАВИТЬ ВСЁ.jpg",
    audioSrc: "audio/ИЛИ ОСТАВИТЬ ВСЁ.mp3",
    lyrics: `<div class="lyrics-content"><p>Чашка кофе остыла<br>
    И всё вокруг застыло<br>
    В голове<br>
    Как в туманной мгле<br>
    Нет идей<br>
    Или чего-то ещё<br>
    Стереть черновики<br>
    Или оставить всё</p></div>`,
    history: `<p><strong>История создания "ИЛИ ОСТАВИТЬ ВСЁ":</strong></p>
    <p>Этот трек возник в момент творческого выбора: продолжить писать песни или отказаться от своих несовершенных идей. Таким образом даже так получилось создать что-то новое, ведь вдохновение пришло, пусть и "чашка кофе остыла".</p>`
  }
];

// --- Глобальные переменные ---
let currentTrackIdForSharing = null; // ID трека, который вызвал модальное окно
let filteredAndSortedTracks = [...tracksData]; // Изначально отображаем все треки
let selectedTags = []; // Выбранные теги
let selectedYear = null; // Выбранный год

// --- DOM Elements ---
const themeToggle = document.getElementById('theme-toggle');
const shareModal = document.getElementById('share-modal');
const closeShareModal = document.getElementById('close-share-modal');
const sharePlatformButtons = document.querySelectorAll('.share-platform-btn');
const tracksListContainer = document.getElementById('tracks-list');
const searchInput = document.getElementById('search-input');
const sortSelect = document.getElementById('sort-select');
const tagFiltersContainer = document.getElementById('tag-filters');
const yearFilterContainer = document.getElementById('year-filter');

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

function getUniqueTags() {
  const allTags = tracksData.flatMap(track => track.tags);
  return [...new Set(allTags)].sort(); // Уникальные, отсортированные
}

function createTagFilters() {
  const uniqueTags = getUniqueTags();
  tagFiltersContainer.innerHTML = ''; // Очистить контейнер

  uniqueTags.forEach(tag => {
    const div = document.createElement('div');
    div.className = 'tag-filter';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `tag-${tag}`;
    checkbox.value = tag;

    const label = document.createElement('label');
    label.htmlFor = `tag-${tag}`;
    label.textContent = tag;

    checkbox.addEventListener('change', (e) => {
      if (e.target.checked) {
        selectedTags.push(tag);
      } else {
        selectedTags = selectedTags.filter(t => t !== tag);
      }
      updateTrackDisplay(); // Обновить при изменении
    });

    div.appendChild(checkbox);
    div.appendChild(label);
    tagFiltersContainer.appendChild(div);
  });
}

function getUniqueYears() {
  const allYears = tracksData.map(track => track.year);
  return [...new Set(allYears)].sort((a, b) => a - b); // Уникальные, отсортированные
}

function createYearFilter() {
  const uniqueYears = getUniqueYears();
  yearFilterContainer.innerHTML = ''; // Очистить контейнер

  if (uniqueYears.length === 0) return;

  const labelAll = document.createElement('label');
  labelAll.className = 'year-filter';
  const radioAll = document.createElement('input');
  radioAll.type = 'radio';
  radioAll.name = 'year-filter';
  radioAll.id = 'year-all';
  radioAll.value = 'all';
  radioAll.checked = true; // По умолчанию "все"

  radioAll.addEventListener('change', () => {
    selectedYear = null;
    updateTrackDisplay(); // Обновить при изменении
  });

  labelAll.appendChild(radioAll);
  const spanAll = document.createElement('span');
  spanAll.textContent = 'Все годы';
  labelAll.appendChild(spanAll);
  yearFilterContainer.appendChild(labelAll);

  uniqueYears.forEach(year => {
    const label = document.createElement('label');
    label.className = 'year-filter';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'year-filter';
    radio.id = `year-${year}`;
    radio.value = year;

    radio.addEventListener('change', (e) => {
      if (e.target.value === 'all') {
        selectedYear = null;
      } else {
        selectedYear = parseInt(e.target.value, 10);
      }
      updateTrackDisplay(); // Обновить при изменении
    });

    label.appendChild(radio);
    const span = document.createElement('span');
    span.textContent = year;
    label.appendChild(span);
    yearFilterContainer.appendChild(label);
  });
}


function filterTracks(query, selectedTags, selectedYear) {
  query = query.toLowerCase().trim();
  return tracksData.filter(track => {
    const matchesQuery = !query || track.title.toLowerCase().includes(query) || track.artist.toLowerCase().includes(query);
    const matchesTags = selectedTags.length === 0 || selectedTags.every(tag => track.tags.includes(tag));
    const matchesYear = selectedYear === null || track.year === selectedYear;

    return matchesQuery && matchesTags && matchesYear;
  });
}

function sortTracks(tracksToSort, sortValue) {
  if (!sortValue) {
    return tracksToSort;
  }

  const [key, order] = sortValue.split('-');
  const sorted = [...tracksToSort];

  sorted.sort((a, b) => {
    let aValue, bValue;
    if (key === 'duration') {
      aValue = parseDuration(a[key]);
      bValue = parseDuration(b[key]);
    } else if (key === 'year') {
      aValue = a[key];
      bValue = b[key];
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
  tracksListContainer.innerHTML = '';
  tracksToRender.forEach(track => {
    const trackElement = generateTrackElement(track);
    tracksListContainer.appendChild(trackElement);
    attachEventListenersToTrack(trackElement, track.id);
  });
}

function updateTrackDisplay() {
  const query = searchInput.value;
  const sortValue = sortSelect.value;

  let filtered = filterTracks(query, selectedTags, selectedYear);
  let sorted = sortTracks(filtered, sortValue);

  filteredAndSortedTracks = sorted;
  renderTracks(sorted);
}

function generateTrackElement(track) {
  const trackItem = document.createElement('div');
  trackItem.className = 'track-item';

  trackItem.innerHTML = `
    <img src="${track.coverSrc}" alt="${track.title}" class="main-cover">
    <div class="track-audio-controls">
      <audio controls>
        <source src="${track.audioSrc}" type="audio/mpeg">
      </audio>
      <a href="${track.audioSrc}" download="${track.title}.mp3" class="download-btn">Скачать трек</a>
    </div>
    <button class="share-audio-btn share-btn">Поделиться аудио</button>
    <div class="track-info">
      <h3 class="track-title">${track.title}</h3>
      <p class="track-meta">Артист: ${track.artist} | Продолжительность: ${track.duration} | Год: ${track.year}</p>
      <button class="show-lyrics-btn">Показать текст</button>
      <div class="lyrics-container">
        <div class="lyrics">${track.lyrics}</div> <!-- Теперь div с HTML -->
      </div>
      <button class="show-history-btn">Показать историю создания</button>
      <div class="history-container">
        <div class="history">${track.history}</div> <!-- Теперь div с HTML -->
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
  const historyContainer = trackItem.querySelector('.history-container');
  const showHistoryBtn = trackItem.querySelector('.show-history-btn');

  cover.addEventListener('click', () => {
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

  shareBtn.addEventListener('click', () => {
    currentTrackIdForSharing = trackId;
    shareModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  if (showLyricsBtn && lyricsContainer) {
    showLyricsBtn.addEventListener('click', () => {
      lyricsContainer.classList.toggle('visible');
      showLyricsBtn.textContent = lyricsContainer.classList.contains('visible') ? 'Скрыть текст' : 'Показать текст';
    });
  }

  if (showHistoryBtn && historyContainer) {
    showHistoryBtn.addEventListener('click', () => {
      historyContainer.classList.toggle('visible');
      showHistoryBtn.textContent = historyContainer.classList.contains('visible') ? 'Скрыть историю' : 'Показать историю создания';
    });
  }
}

function handleSharing(platform) {
  const currentTrack = tracksData.find(t => t.id === currentTrackIdForSharing);
  if (!currentTrack) {
    console.error("Трек для шаринга не найден!");
    return;
  }

  const url = encodeURIComponent(window.location.href);
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
      return;
    default:
      return;
  }

  if (platform !== 'copy') {
      window.open(link, '_blank', 'noopener,noreferrer');
  }
  shareModal.classList.remove('open');
  document.body.style.overflow = '';
  currentTrackIdForSharing = null;
}

document.addEventListener('DOMContentLoaded', () => {
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

  // --- Инициализация фильтров ---
  createTagFilters();
  createYearFilter();

  // --- Инициализация отображения треков ---
  renderTracks(tracksData);

  // --- Фильтрация и сортировка ---
  const debouncedUpdate = debounce(updateTrackDisplay, 300);
  searchInput.addEventListener('input', debouncedUpdate);
  sortSelect.addEventListener('change', updateTrackDisplay);

  shareModal.addEventListener('click', (e) => {
    if (e.target === shareModal) {
      shareModal.classList.remove('open');
      document.body.style.overflow = '';
      currentTrackIdForSharing = null;
    }
  });

  closeShareModal.addEventListener('click', () => {
    shareModal.classList.remove('open');
    document.body.style.overflow = '';
  });

  sharePlatformButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const platform = btn.dataset.platform;
      handleSharing(platform);
    });
  });
});
