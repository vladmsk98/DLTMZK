"use strict";

const showLyricsBtn = document.getElementById('show-lyrics-btn');
const lyricsContainer = document.getElementById('lyrics-container');

showLyricsBtn.addEventListener('click', () => {
  if (lyricsContainer.style.display === 'none') {
    lyricsContainer.style.display = 'block';
    showLyricsBtn.textContent = 'Скрыть текст';
  } else {
    lyricsContainer.style.display = 'none';
    showLyricsBtn.textContent = 'Показать текст';
  }
});
