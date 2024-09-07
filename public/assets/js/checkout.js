// checkout.js

// Assuming you have a way to get the cart items
const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

document.addEventListener('DOMContentLoaded', function () {
    updateCartItems();
    document.getElementById('checkout-btn').addEventListener('click', checkout);
});

function updateCartItems() {
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartCountElement = document.getElementById('cart-count');
    const cartTotalQuantityElement = document.getElementById('cart-total-quantity');
    const cartTotalPriceElement = document.getElementById('cart-total-price');

    if (cartItemsContainer && cartCountElement && cartTotalQuantityElement && cartTotalPriceElement) {
        // Clear existing content
        cartItemsContainer.innerHTML = '';

        // Update cart content
        cartItems.forEach(item => {
            const cartItemElement = createCartItemElement(item);
            cartItemsContainer.appendChild(cartItemElement);
        });

        // Update total quantity and total price
        const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
        const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

        cartCountElement.innerText = totalQuantity.toString();
        cartTotalQuantityElement.innerText = totalQuantity.toString();
        cartTotalPriceElement.innerText = `$${totalPrice.toFixed(2)}`;
    }
}

function createCartItemElement(item) {
    const cartItemElement = document.createElement('li');
    cartItemElement.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'lh-condensed');

    const itemDetails = document.createElement('div');
    const itemName = document.createElement('h6');
    itemName.classList.add('my-0');
    itemName.innerText = item.title;

    const itemDescription = document.createElement('small');
    itemDescription.classList.add('text-muted');
    itemDescription.innerText = 'Brief description';

    itemDetails.appendChild(itemName);
    itemDetails.appendChild(itemDescription);

    const itemPrice = document.createElement('span');
    itemPrice.classList.add('text-muted');
    itemPrice.innerText = `$${(item.price * item.quantity).toFixed(2)}`;

    cartItemElement.appendChild(itemDetails);
    cartItemElement.appendChild(itemPrice);

    return cartItemElement;
}

function checkout() {
    // Add your checkout logic here
    // Redirect to the checkout page or perform other actions
    alert('Checkout button clicked! Implement your checkout logic.');
}
