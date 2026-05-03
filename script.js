document.addEventListener("DOMContentLoaded", () => {
  // === Глобальные переменные ===
  const currentUrl = window.location.href;
  const pageTitle = document.title || "DLTMZK — СПЛЕТЕНИЯ";

  // === 1. Остановка других треков при воспроизведении одного ===
  const allAudioPlayers = document.querySelectorAll('.audio-player');

  allAudioPlayers.forEach(player => {
    player.addEventListener('play', () => {
      allAudioPlayers.forEach(otherPlayer => {
        if (otherPlayer !== player && !otherPlayer.paused) {
          otherPlayer.pause();
        }
      });
    });
  });

  // === 2. Настройка кнопок поделки (VK, OK) для обоих треков ===
  function setupSharingForTrack(suffix) { // suffix теперь может быть 'track1' или 'track2'
    const copyBtn = document.getElementById(`copy-url-btn-${suffix}`);
    const vkBtn = document.getElementById(`vk-share-btn-${suffix}`);
    const okBtn = document.getElementById(`ok-share-btn-${suffix}`);

    if (copyBtn) { // Проверка на существование элемента перед добавлением обработчика
      copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(currentUrl).then(() => {
          alert("Ссылка скопирована в буфер обмена!");
        }).catch(err => {
          console.error("Ошибка копирования:", err);
          alert("Не удалось скопировать ссылку.");
        });
      });
    }

    if (vkBtn) {
      const vkShareUrl = `https://vk.com/share.php?url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(pageTitle)}`;
      vkBtn.href = vkShareUrl;
    }

    if (okBtn) {
      const okShareUrl = `https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=${encodeURIComponent(currentUrl)}&st.title=${encodeURIComponent(pageTitle)}`;
      okBtn.href = okShareUrl;
    }
  }

  setupSharingForTrack('track1');
  setupSharingForTrack('track2'); // Вызов для второго трека

  // === 4. Кнопка "Вернуться к началу" ===
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });

    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // === 3. Система оценки треков (звезды) и 5. A/B-тест - УДАЛЕНЫ ===
  // Логика, связанная с .rating-section, .star, .ab-test-prompt, .ab-choice и т.д., удалена,
  // так как соответствующие элементы отсутствуют в текущем HTML.

});
