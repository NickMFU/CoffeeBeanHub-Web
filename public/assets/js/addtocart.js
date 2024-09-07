function addToCart(productId, productTitle, productPrice, productImage, quantity) {
    // Check if the cart exists in localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex(item => item.id === productId);

    if (existingProductIndex !== -1) {
        // If the product is already in the cart, update the quantity
        cart[existingProductIndex].quantity += quantity;
    } else {
        // Otherwise, add the product to the cart
        const cartItem = { id: productId, title: productTitle, price: productPrice, image: productImage, quantity };
        cart.push(cartItem);
    }

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update the cart content in the UI
    updateCartContent();

    // Optionally, you can show a message or perform other actions
   
}
// Add event listener to the "Add to Cart" button
const addToCartButton = document.getElementById('add-to-cart');
if (addToCartButton) {
    addToCartButton.addEventListener('click', () => addToCart(selectedProduct)); // Assuming you have a selectedProduct variable
}

// Call the function to update product details when the page loads
window.onload = () => {
    updateProductDetails();
    updateCartCount();
};

function toggleCart() {
    const cart = document.getElementById('cart');
    if (cart) {
        cart.classList.toggle('cart--show');

        // Update cart content when toggled
        if (cart.classList.contains('cart--show')) {
            updateCartContent();
        }
    }
}

function updateCartContent() {
    const cartContainer = document.getElementById('cart-container');
    const cartTotalElement = document.getElementById('cart-total');

    if (cartContainer && cartTotalElement) {
        // Clear existing content
        cartContainer.innerHTML = '';

        // Get cart items from localStorage
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Update cart content
        cart.forEach(item => {
            const cartItemElement = createCartItemElement(item);
            cartContainer.appendChild(cartItemElement);
        });

        // Update total price
        updateCartTotal(cart);
    }
}

function createCartItemElement(item) {
    const cartItemElement = document.createElement('div');
    cartItemElement.classList.add('cart-item');

    // Create elements for product image, title, quantity, and remove button
    const productImage = document.createElement('img');
    productImage.src = item.image;
    productImage.alt = item.title;
    productImage.classList.add('cart-item-image');

    const productTitle = document.createElement('div');
    productTitle.innerText = item.title;

    const productQuantity = document.createElement('div');
    productQuantity.innerText = `Quantity: ${item.quantity}`;

    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.addEventListener('click', () => removeItem(item.id));

    // Append elements to cart item
    cartItemElement.appendChild(productImage);
    cartItemElement.appendChild(productTitle);
    cartItemElement.appendChild(productQuantity);
    cartItemElement.appendChild(removeButton);

    return cartItemElement;
}

function removeItem(itemId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartContent();
}

function updateCartTotal(cart) {
    const cartTotalElement = document.getElementById('cart-total');
    if (cartTotalElement) {
        // Calculate and update total price based on cart items
        const total = calculateTotal(cart);
        cartTotalElement.innerText = `${total.toFixed(2)}Bath`;
    }
}

// Sample function to calculate total price (replace with your actual calculation logic)
function calculateTotal(cart) {
    return cart.reduce((total, item) => total + item.quantity * item.price, 0);
}

document.addEventListener('DOMContentLoaded', function () {
    updateCartCount(); // Call this to update the cart count when the page loads
});

function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalCount = cart.reduce((count, item) => count + item.quantity, 0);
    cartCountElement.textContent = totalCount;
}