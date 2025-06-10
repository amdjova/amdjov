const profileImg = document.querySelector('.profile-img');
const popup = document.getElementById('popup');
const popupImg = popup.querySelector('.popup-img');
const closeBtn = document.getElementById('closePopup');

profileImg.addEventListener('click', () => {
  popupImg.src = profileImg.src;
  popup.style.display = 'flex';
  popupImg.style.animation = 'zoomIn 0.3s ease';

  // Tambahkan class anti-screenshot
  popupImg.classList.add('anti-screenshot');
});

function closePopup() {
  popupImg.style.animation = 'zoomOut 0.3s ease';
  setTimeout(() => {
    popup.style.display = 'none';
    popupImg.src = "";

    // Hapus class anti-screenshot
    popupImg.classList.remove('anti-screenshot');
  }, 300);
}

closeBtn.addEventListener('click', closePopup);
popup.addEventListener('click', (e) => {
  if (e.target === popup) closePopup();
});
