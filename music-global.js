(function() {
  if (window.globalMusic) return;
  
  window.globalMusic = true;
  
  const audio = new Audio('lovergirl.mp3');
  audio.loop = true;
  audio.volume = 0.15;
  audio.preload = 'auto';
  
  let hasUserInteracted = false;
  
  function playMusic() {
    if (!hasUserInteracted) {
      audio.play().catch(() => {});
      hasUserInteracted = true;
    } else {
      audio.play();
    }
  }
  
  ['click', 'touchstart', 'keydown', 'mousemove'].forEach(event => {
    document.addEventListener(event, playMusic, { once: true, passive: true });
  });
  
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) playMusic();
  });
  
  window.pauseMusic = () => audio.pause();
  window.resumeMusic = () => playMusic();
  
  console.log('🎵 Global music loaded!');
})();
