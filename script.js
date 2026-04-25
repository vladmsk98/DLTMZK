document.addEventListener("DOMContentLoaded", () => {
  // Получаем текущий URL и заголовок страницы
  const currentUrl = window.location.href;
  const pageTitle = document.title || "DLTMZK — СПЛЕТЕНИЯ";

  // === Функционал: остановка других треков при воспроизведении одного ===
  const allAudioPlayers = document.querySelectorAll('.audio-player');

  allAudioPlayers.forEach(player => {
    player.addEventListener('play', () => {
      // Останавливаем все остальные плееры
      allAudioPlayers.forEach(otherPlayer => {
        if (otherPlayer !== player && !otherPlayer.paused) {
          otherPlayer.pause();
        }
      });
    });
  });

  // === Кнопка "Копировать ссылку" ===
  document.getElementById("copy-url-btn").addEventListener("click", () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      alert("Ссылка скопирована в буфер обмена!");
    }).catch(err => {
      console.error("Ошибка копирования:", err);
      alert("Не удалось скопировать ссылку.");
    });
  });

  // === Поделка: ВКонтакте ===
  const vkShareUrl = `https://vk.com/share.php?url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(pageTitle)}`;
  document.getElementById("vk-share-btn").href = vkShareUrl;

  // === Поделка: Одноклассники ===
  const okShareUrl = `https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=${encodeURIComponent(currentUrl)}&st.title=${encodeURIComponent(pageTitle)}`;
  document.getElementById("ok-share-btn").href = okShareUrl;

  // === Поделка: BlueSky ===
  const bskyShareUrl = `https://bsky.app/intent/compose?text=${encodeURIComponent(pageTitle + ' ' + currentUrl)}`;
  document.getElementById("bsky-share-btn").href = bskyShareUrl;
});
