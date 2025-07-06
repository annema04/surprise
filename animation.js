const girl = document.querySelector('.girl');
const boy = document.querySelector('.boy');
const animate_heart = document.querySelector('.animate_heart');
const animationScene = document.getElementById('animation-scene');
const envelopeSection = document.getElementById('envelope-section');

function resetAnimation() {
  girl.style.left = '-80px';
  girl.style.bottom = '0';
  girl.style.animation = 'none';

  boy.style.right = '-80px';
  boy.style.bottom = '0';
  boy.style.animation = 'none';

  animate_heart.style.transition = 'none';
  animate_heart.style.opacity = '0';
  animate_heart.style.transform = 'rotate(45deg) translate(-50%, -50%) scale(0)';
}

window.addEventListener('DOMContentLoaded', () => {
  animationScene.classList.add('show');
  resetAnimation();

  void girl.offsetWidth;

  // Start animations
  girl.style.animation = 'girlEnter 4s forwards';
  boy.style.animation = 'boyEnter 4s forwards';

  // Heart animation
  setTimeout(() => {
    animate_heart.style.transition = 'transform 5s ease, opacity 5s ease';
    animate_heart.style.opacity = '1';
    animate_heart.style.transform = 'rotate(45deg) translate(-50%, -50%) scale(210)';
  }, 4000);

  // Switch to envelope scene
  setTimeout(() => {
    animationScene.classList.remove('show');
    envelopeSection.classList.add('show');
  }, 7000);
});
