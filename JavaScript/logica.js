

  // console.log('Info Item', item)

  //The carrito
  document.addEventListener('DOMContentLoaded', function () {

    let shoppingCartContainerElement = document.querySelector('.fatherContainerShoppingCart');

    let addItemToCartBtns = document.querySelectorAll(".buyButtonE");
  
      addItemToCartBtns.forEach((addToCartButton) => {
        addToCartButton.addEventListener('click', addItemClick);
      });
  
      function addItemClick(event) {
        const button = event.target;
        const item = button.closest(".item");
        let itemTitle = item.querySelector('.item-title').textContent;
        let itemPrice = item.querySelector('.item-price').textContent;
        let itemImg = item.querySelector('.item-images img').src;
        console.log('Info Item', itemTitle, itemPrice, itemImg);
        AddItemToShoppingCart(itemTitle, itemPrice, itemImg);
      }
  
      function AddItemToShoppingCart(itemTitle, itemPrice, itemImg) {
        const shoppingCartRow = document.createElement('div');
        let shoppingCartContent = `
          <div class="itemsToCart">
            <div class="add-img-item">
              <img src=${itemImg} class="shopping-cart-image">
            </div>
            <div class="add-img-item">
              <h3>${itemTitle}</h3>
            </div>
            <div class="add-price-item">
              <h3>${itemPrice}</h3>
            </div>
            <div class="add-amount-item">
              <input class="item-amount-input" type="number" value="1">
              <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
          </div>`;
        shoppingCartRow.innerHTML = shoppingCartContent;
        shoppingCartContainerElement.append(shoppingCartRow);

        updateShoppingCartTotal()
      }

       function updateShoppingCartTotal() {

        let total = 0;

        let shoppingCartTotal = document.querySelector('.cart-total');

        console.log('test', shoppingCartTotal)

       }

  });

  
let popup = document.getElementById('popup');
let popupImage = document.getElementById('popupImage');
  
    function openPopup(imgSrc) {
      popupImage.src = imgSrc;
      popup.style.display = 'flex';
    }
  
    function closePopup() {
      popup.style.display = 'none';
    }


    
