document.addEventListener('DOMContentLoaded', function () {
  const shoppingCartContainerElement = document.querySelector('.fatherContainerShoppingCart');
  const cartTotalElement = document.getElementById('cart-total');

  // Cargar elementos existentes en el carrito desde localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  function updateCart() {
    // Calcular la suma total del carrito
    let total = 0;
    cart.forEach(cartItem => {
      total += cartItem.price;
    });

    // Actualizar el elemento HTML que muestra el total
    cartTotalElement.innerHTML = `<h4>Total: $${total.toFixed(2)}</h4>`;
  }

  function displayCartItem(cartItem, index) {
    const shoppingCartRow = document.createElement('div');
    let shoppingCartContent = `
      <div class="itemsToCart">
        <div class="add-img-item">
          <img src=${cartItem.img} class="shopping-cart-image">
        </div>
        <div class="add-title-item">
          <h3>${cartItem.title}</h3>
        </div>
        <div class="add-price-item">
          <h3>$${cartItem.price}</h3>
        </div>
        <div class="add-amount-item">
          <button class="btn btn-danger buttonDelete" data-index="${index}" type="button">X</button>
        </div>
      </div>`;
    shoppingCartRow.innerHTML = shoppingCartContent;
    shoppingCartContainerElement.appendChild(shoppingCartRow);
  }

  function updateCartAndEvents() {
    // Limpiar el contenido actual del contenedor del carrito
    shoppingCartContainerElement.innerHTML = '';

    // Mostrar todos los elementos del carrito nuevamente
    cart.forEach((cartItem, index) => {
      displayCartItem(cartItem, index);
    });

    // Actualizar el total y eventos click en los botones de eliminar
    updateCart();
    updateDeleteButtonEvents();
  }

  function updateDeleteButtonEvents() {
    const deleteButtons = document.querySelectorAll(".buttonDelete");

    deleteButtons.forEach(deleteButton => {
      deleteButton.removeEventListener('click', handleDeleteButtonClick);
    });

    deleteButtons.forEach(deleteButton => {
      deleteButton.addEventListener('click', handleDeleteButtonClick);
    });
  }

  function handleDeleteButtonClick(event) {
    const button = event.target;
    const index = parseInt(button.getAttribute('data-index'));

    // Eliminar el elemento del carrito y actualizar
    cart.splice(index, 1);
    updateCartAndEvents();

    // Actualizar localStorage después de la eliminación
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  const confirmButton = document.querySelector('.cart-button-buy button');
  confirmButton.addEventListener('click', confirmPurchase);

  function confirmPurchase() {
    // Mensaje de alerta con el resumen de la compra
    alert(`¡Compra realizada!\nTotal: $${cartTotalElement.textContent.split('$')[1]}`);
    
    // Limpiar el carrito después de la compra
    cart = [];
    updateCartAndEvents();

    // Actualizar localStorage después de la compra
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  // Mostrar elementos existentes del carrito al cargar la página
  updateCartAndEvents();

  let addItemToCartBtns = document.querySelectorAll(".buyButtonE");

  addItemToCartBtns.forEach((addToCartButton) => {
    addToCartButton.addEventListener('click', addItemClick);
  });

  function addItemClick(event) {
    const button = event.target;
    const item = button.closest(".item");
    let itemTitle = item.querySelector('.item-title').textContent;
    let itemPrice = parseFloat(item.querySelector('.item-price').textContent.replace(/[^\d.]/g, ''));
    let itemImg = item.querySelector('.item-images img').src;

    const cartItem = {
      title: itemTitle,
      price: itemPrice,
      img: itemImg
    };

    cart.push(cartItem);

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Actualizar el carrito y eventos click en los botones de eliminar
    updateCartAndEvents();
  }

  // Llamar a updateDeleteButtonEvents al cargar la página
  updateDeleteButtonEvents();
});
