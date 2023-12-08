
  let popup = document.getElementById('popup');
  let popupImage = document.getElementById('popupImage');
  
  function openPopup(imgSrc) {
    popupImage.src = imgSrc;
    popup.style.display = 'flex';
  }
  
  function closePopup() {
    popup.style.display = 'none';
  }

