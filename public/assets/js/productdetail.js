function getProductIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Function to get product details by ID
function getProductById(productId) {
    return simulatedProductData.find(product => product.id.toString() === productId);
}

// Function to update product details on the page
function updateProductDetails() {
    const productId = getProductIdFromUrl();

    if (productId) {
        const productDetailData = getProductById(productId);

        if (productDetailData) {
            // Check if the element exists before updating
            const productImageElement = document.getElementById('product-image');
            if (productImageElement) {
                productImageElement.src = productDetailData.image;
            }

            const productCategoryElement = document.getElementById('product-category');
            if (productCategoryElement) {
                productCategoryElement.innerText = `Category: ${productDetailData.type}`;
            }

            const productTitleElement = document.getElementById('product-title');
            if (productTitleElement) {
                productTitleElement.innerText = productDetailData.title;
            }

            const oldPriceElement = document.getElementById('old-price');
            if (oldPriceElement) {
                oldPriceElement.innerText = `Normal Price: ${(productDetailData.price * 1.2).toFixed(2)}Bath`;
            }

            const newPriceElement = document.getElementById('new-price');
            if (newPriceElement) {
                newPriceElement.innerText = `Membership Price: ${productDetailData.price.toFixed(2)}Bath`;
            }

            const productDescriptionElement = document.getElementById('product-description');
            if (productDescriptionElement) {
                productDescriptionElement.innerText = productDetailData.description;
            }

            // Add event listener to the "Add to Cart" button
            const addToCartButton = document.getElementById('add-to-cart');
            if (addToCartButton) {
                addToCartButton.addEventListener('click', () => addToCart(productDetailData));
            }
        } else {
            console.error('Product not found.');
        }
    } else {
        console.error('Product ID not provided in the URL.');
    }
}

// Function to add a product to the cart
function addToCart(product) {
    // Check if the cart exists in localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
        // If the product is already in the cart, update the quantity
        cart[existingProductIndex].quantity += 1;
    } else {
        // Otherwise, add the product to the cart
        const cartItem = { ...product, quantity: 1 };
        cart.push(cartItem);
    }

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update the cart content in the UI
    updateCartContent();

    // Optionally, you can show a message or perform other actions
    
}

// Call the function to update product details when the page loads
window.onload = updateProductDetails;