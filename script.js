document.addEventListener('DOMContentLoaded', function () {
    const products = [
        { name: 'Mekaniskt RGB Tangentbord', price: 1499, brand: 'Razer', type: 'tangentbord', popularity: 5, date: '2025-01-15' },
        { name: 'Kompakt 60% Tangentbord', price: 1299, brand: 'SteelSeries', type: 'tangentbord', popularity: 4, date: '2025-02-10' },
        { name: 'Trådlös Gaming Mus', price: 899, brand: 'Logitech', type: 'möss', popularity: 3, date: '2025-03-05' },
        { name: 'Ergonomisk Mus', price: 799, brand: 'Razer', type: 'möss', popularity: 2, date: '2025-04-20' },
        { name: 'Steelseries Gaming Hedset', price: 1899, brand: 'SteelSeries', type: 'Headset', popularity: 3, date: '2025-04-20' },
        { name: 'Apple airpods 2', price: 2999, brand: 'Apple', type: 'Headset', popularity: 5, date: '2025-04-20' },
    ];

    const productContainer = document.querySelector('.kategori-grid');
    const sortBy = document.getElementById('sort-by');
    const filterBrand = document.getElementById('filter-brand');
    const filterType = document.getElementById('filter-type');

    // Funktion för att rendera produkter
    function renderProducts(filteredProducts) {
        // Rensa befintliga produkter
        productContainer.innerHTML = '';
        
        // Apply grid display directly to the kategori-grid container
        productContainer.style.display = 'grid';
        productContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(250px, 1fr))';
        productContainer.style.gap = '20px';

        filteredProducts.forEach(product => {
            const productCard = `
                <div class="produkt">
                    <img src="../media/${product.type}.jpg" alt="${product.name}" width="300" height="200">
                    <h3>${product.name}</h3>
                    <p class="pris">${product.price} kr</p>
                    <button class="köp-knapp">Köp nu</button>
                </div>
            `;
            productContainer.insertAdjacentHTML('beforeend', productCard);
        });
    }

    // Funktion för att filtrera och sortera produkter
    function updateProducts() {
        const selectedBrand = filterBrand.value;
        const selectedType = filterType.value;
        const selectedSort = sortBy.value;

        let filteredProducts = products;

        // Filtrera efter märke
        if (selectedBrand !== 'alla') {
            filteredProducts = filteredProducts.filter(product => product.brand.toLowerCase() === selectedBrand);
        }

        // Filtrera efter typ
        if (selectedType !== 'alla') {
            filteredProducts = filteredProducts.filter(product => product.type === selectedType);
        }

        // Sortera produkter
        if (selectedSort === 'pris-lågt-högt') {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (selectedSort === 'pris-högt-lågt') {
            filteredProducts.sort((a, b) => b.price - a.price);
        } else if (selectedSort === 'nyast') {
            filteredProducts.sort((a, b) => new Date(b.date) - new Date(a.date));
        } else if (selectedSort === 'äldst') {
            filteredProducts.sort((a, b) => new Date(a.date) - new Date(b.date));
        } else if (selectedSort === 'popularitet') {
            filteredProducts.sort((a, b) => b.popularity - a.popularity);
        }

        renderProducts(filteredProducts);
    }

    // Event listeners för filter och sortering
    sortBy.addEventListener('change', updateProducts);
    filterBrand.addEventListener('change', updateProducts);
    filterType.addEventListener('change', updateProducts);

    // Rendera produkter vid första laddningen
    updateProducts();
});