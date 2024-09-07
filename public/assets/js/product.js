const simulatedProductData = [
  {
    id: 1,
    title: 'Pacamara House Blend',
    description: 'Seeds from Brazil, Indonesia, Guatemala and Thailand    Taste: Caramel, Hazelnut, Chocolate. Good body and smooth taste..',
    price: 500,
    image: 'assets/img/th-11134207-23010-6j3cqs6wejmvca.jpg',
    type: 'Arabica',
  },
  {
    id: 2,
    title: 'Jason Brown',
    description: 'Received awards guaranteeing deliciousness from Belgium and Australia SUPERIOR TASTE AWARD 2022 Brussels, Belgium AustraliaMedium roasted coffee beans are suitable for black coffee and milk coffee.',
    price: 500,
    image: 'assets/img/th-11134207-7qul4-littilp8078199.jpg',
    type: 'Arabica',
  },
  {
      id: 3,
      title: 'Brazilian Cerrado coffee',
      description:'The beans are generally clean with a nice, creamy texture. It is low in acidity, well balanced, and often has a mild, chocolate-like flavor. Fragrant Hesenus Beans.',
      price: 500,
      image: 'assets/img/th-11134207-7qula-lfmx01uep69zc8.jpg',
      type: 'Arabica',
  },
  {
    id: 4,
    title: 'Craze Cafe Single Origin',
    description: 'Craze Cafe Single Origin Premium Coffee Craze Cafe Kenya AA Top Tika (bean type) Blackcurrant and Wine Tropical flowers and fruits, medium body, light sourness.Abedare Farm in East Africa is a large farm that produces some of the most unique coffee in the world..',
    price: 500,
    image: 'assets/img/เมล็ดกาแฟ-กาแฟพรีเมี่ยม-Craze-Cafe-Single-Origin.jpg',
    type: 'Robusta',
 },
 {
  id: 5,
  title: 'Segafredo',
  description: 'Premium roasted and ground coffee Segafredo Segafredo Classico Napoli (bean type) mellow taste It has a seductive fragrance.Intermezzo It is one of the oldest recipes of Segafedo. Selected and roasted with great skill that focuses on the quality of the coffee..',
  price: 500,
  image: 'assets/img/sg-11134201-22110-04nel2doayjv97.jpg',
  type: 'Arabica',
},
];

simulatedProductData.forEach(product => {
  createProductCard(product);
});

function createProductCard(product) {
  const productsContainer = document.getElementById('products-container');
  const productCard = document.createElement('div');
  productCard.classList.add('products__card');
  productCard.innerHTML = `
      <a href="productdetail.html?id=${product.id}" class="product-link">
          <img src="${product.image}" alt="${product.title}" class="products__img">
          <h3 class="products__title">${product.title}</h3>
          <p class="products__type">${product.type}</p>
          <span class="products__price">${product.price.toFixed(2)} Bath</span>
      </a>
      
  `;
  productsContainer.appendChild(productCard);
}

function viewProductDetail(productId) {
console.log(`Viewing product detail for ID: ${productId}`);
window.location.href = `productdetail.html?id=${productId}`;
}
