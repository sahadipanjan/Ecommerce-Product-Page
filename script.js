const products = [
    // Electronics
    { name: "Laptop", price: 96000, rating: 4.5, category: "Electronics", image: "product-images/laptop.jpg" },
    { name: "Smartphone", price: 64800, rating: 4.2, category: "Electronics", image: "product-images/smartphone.jpg" },
    { name: "Headphones", price: 8430, rating: 4.8, category: "Electronics", image: "product-images/headphones.jpg" },
    { name: "Smartwatch", price: 25000 * 80, rating: 4.0, category: "Electronics", image: "product-images/smartwatch.jpg" },
    { name: "Camera", price: 58600 * 80, rating: 4.6, category: "Electronics", image: "product-images/camera.jpg" },

    // Clothing
    { name: "T-Shirt", price: 799, rating: 4.0, category: "Clothing", image: "product-images/t-shirt.jpg" },
    { name: "Jeans", price: 1499, rating: 4.3, category: "Clothing", image: "product-images/jeans.jpg" },
    { name: "Jacket", price: 4600, rating: 4.7, category: "Clothing", image: "product-images/jacket.jpg" },
    { name: "Sneakers", price: 750, rating: 4.4, category: "Clothing", image: "product-images/sneakers.jpg" },
    { name: "Hat", price: 1200, rating: 3.9, category: "Clothing", image: "product-images/hat.jpg" },

    // Books
    { name: "A Thousand Splendid Suns", price: 350, rating: 4.2, category: "Books", image: "product-images/a-thousand-splendid-suns.jpg" },
    { name: "It Ends With Us", price: 420, rating: 4.8, category: "Books", image: "product-images/it-ends-with-us.jpg" },
    { name: "Atomic Habits", price: 245, rating: 4.5, category: "Books", image: "product-images/atomic-habits.jpg" },
    { name: "The Catcher in the Rye", price: 320, rating: 4.1, category: "Books", image: "product-images/the-catcher-in-the-rye.jpg" },
    { name: "Pride and Prejudice", price: 165, rating: 4.6, category: "Books", image: "product-images/pride-and-prejudice.jpg" },

    // Home Goods
    { name: "Coffee Maker", price: 8000, rating: 4.3, category: "Home Goods", image: "product-images/coffee-maker.jpg" },
    { name: "Blender", price: 2500, rating: 4.0, category: "Home Goods", image: "product-images/blender.jpg" },
    { name: "Toaster", price: 3000, rating: 3.8, category: "Home Goods", image: "product-images/toaster.jpg" },
    { name: "Vacuum Cleaner", price: 15000, rating: 4.5, category: "Home Goods", image: "product-images/vacuum-cleaner.jpg" },
    { name: "Desk Lamp", price: 1300, rating: 4.1, category: "Home Goods", image: "product-images/desk-lamp.jpg" },
];

const productGrid = document.getElementById('product-grid');
const categoryFilter = document.getElementById('category-filter');
const sortBy = document.getElementById('sort-by');

function displayProducts(productsToDisplay) {
    productGrid.innerHTML = '';
    productsToDisplay.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h2>${product.name}</h2>
            <p class="price">₹${product.price.toFixed(2)}</p>
            <p class="rating">Rating: ${product.rating}/5</p>
            <p class="category">${product.category}</p>
        `;
        productGrid.appendChild(productCard);
    });
}

function populateCategoryFilter() {
    const categories = [...new Set(products.map(product => product.category))];
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
}

function filterAndSortProducts() {
    let filteredProducts = [...products];

    // Filter by category
    const selectedCategory = categoryFilter.value;
    if (selectedCategory !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
    }

    // Sort products
    const sortValue = sortBy.value;
    const [sortKey, sortOrder] = sortValue.split('-');

    filteredProducts.sort((a, b) => {
        if (a[sortKey] < b[sortKey]) {
            return sortOrder === 'asc' ? -1 : 1;
        }
        if (a[sortKey] > b[sortKey]) {
            return sortOrder === 'asc' ? 1 : -1;
        }
        return 0;
    });

    displayProducts(filteredProducts);
}

categoryFilter.addEventListener('change', filterAndSortProducts);
sortBy.addEventListener('change', filterAndSortProducts);

populateCategoryFilter();
filterAndSortProducts();