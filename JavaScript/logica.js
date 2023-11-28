
 
  

  //The carrito

  let addItemToCarBtn = document.querySelectorAll(".buyButtonE");

  addItemToCarBtn.forEach((addToCartButton) => {

    addToCartButton.addEventListener('click', () => console.log('click'));

  });

  function addItemClick (event) {
    
  }








   //PopUp
   let popup = document.getElementById('popup');
   let popupImage = document.getElementById('popupImage');
  
    function openPopup(imgSrc) {
      popupImage.src = imgSrc;
      popup.style.display = 'flex';
    }
  
    function closePopup() {
      popup.style.display = 'none';
    }



