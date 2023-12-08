document.addEventListener('DOMContentLoaded', function () {

  const shoppingCartContainerElement = document.querySelector('.fatherContainerShoppingCart'); //Selecciona  EL div padre
  const cartTotalElement = document.getElementById('cart-total');


  let cart = JSON.parse(localStorage.getItem('cart')) || []; // Cargar elementos existentes en el carrito desde localStorage

  function updateCart() {
    let total = 0;
    cart.forEach(cartItem => { // Calcula la suma total del carrito
      total += cartItem.price;
    });

    
    cartTotalElement.innerHTML = `<h4>Total: $${total.toFixed(2)}</h4>`; // Actualiza el elemento HTML que muestra el total
  }

  function displayCartItem(cartItem, index) {
    const shoppingCartRow = document.createElement('div'); // Crea el elemnto del carrito, funciona como una plantilla
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
    
    shoppingCartContainerElement.innerHTML = ''; // Limpiar el contenido actual del contenedor del carrito

    
    cart.forEach((cartItem, index) => {
      displayCartItem(cartItem, index); // Mostrar todos los elementos del carrito nuevamente
    });

    
    updateCart();
    updateDeleteButtonEvents(); // Actualizar el total y eventos click en los botones de eliminar
  }

  function updateDeleteButtonEvents() {
    const deleteButtons = document.querySelectorAll(".buttonDelete"); // selecciona el boton de borrar

    deleteButtons.forEach(deleteButton => {
      deleteButton.removeEventListener('click', handleDeleteButtonClick);
    });
                                                                            // Ayuda a controlar los eventos del boton Delete
    deleteButtons.forEach(deleteButton => {
      deleteButton.addEventListener('click', handleDeleteButtonClick);
    });
  }

  function handleDeleteButtonClick(event) {
    const button = event.target;
    const index = parseInt(button.getAttribute('data-index'));
                                // Eliminar el elemento del carrito y actualizar, principalmente porque evita un error al borrar elementos del carro
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

    // Limpiar el carrito después de la compra, elimina los elementos
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
