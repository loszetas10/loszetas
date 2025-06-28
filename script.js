// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Data produk
    const products = [
        {
            id: 'product-001',
            name: 'Clot-45',
            price: 15000,
            image: '9mm.png',
            description: '.',
            category: 'senjata'
        },
        {
            id: 'product-002',
            name: 'Silenced/SLC',
            price: 18000,
            image: 'silenced9mm.png',
            description: '',
            category: 'senjata'
        },
        {
            id: 'product-003',
            name: 'Desert Eagle/DE',
            price: 24000,
            image: 'desertEagle.png',
            description: '',
            category: 'senjata'
        },
        {
            id: 'product-004',
            name: 'Shotgun',
            price: 30000,
            image: 'shotgun.png',
            description: '',
            category: 'senjata'
        },
        {
            id: 'product-005',
            name: 'Mini Uzi',
            price: 30000,
            image: 'microSMG-Uzi.png',
            description: '.',
            category: 'senjata'
        },
        {
            id: 'product-006',
            name: 'AK-47',
            price: 40000,
            image: 'ak47.png',
            description: '.',
            category: 'senjata'
        },
        {
            id: 'product-007',
            name: 'Clip Pistol',
            price: 7000,
            image: 'images.png',
            description: '',
            category: 'clip'
        },
        {
            id: 'product-008',
            name: 'Clip Sg',
            price: 11000,
            image: 'images.png',
            description: '.',
            category: 'clip'
        },
        {
            id: 'product-009',
            name: 'Clip Smg',
            price: 7500,
            image: 'images.png',
            description: '.',
            category: 'clip'
        },
        {
            id: 'product-010',
            name: 'Clip Ar',
            price: 15000,
            image: 'images.png',
            description: '.',
            category: 'clip'
        },
        {
            id: 'product-011',
            name: 'Pake Colt-45 + Clip',
            price: 30000,
            image: '9mm.png',
            description: '.',
            category: 'paket'
        },
        {
            id: 'product-012',
            name: 'Paket SLC + Clip',
            price: 35000,
            image: 'silenced9mm.png',
            description: '.',
            category: 'paket'
        },
        {
            id: 'product-013',
            name: 'Paket De + Clip',
            price: 400000,
            image: 'desertEagle.png',
            description: '.',
            category: 'paket'
        },
        {
            id: 'product-014',
            name: 'Pake SG + Clip',
            price: 55000,
            image: 'shotgun.png',
            description: '.',
            category: 'paket'
        },
        {
            id: 'product-015',
            name: 'Paket Mini uzi + Clip',
            price: 50000,
            image: 'microSMG-Uzi.png',
            description: '.',
            category: 'paket'
        },
        {
            id: 'product-016',
            name: 'Paket AK-47 + Clip',
            price: 80000,
            image: 'ak47.png',
            description: '.',
            category: 'paket'
        },
        {
            id: 'product-017',
            name: 'Paket 3 Clip Pistol',
            price: 18000,
            image: 'images.png',
            description: '',
            category: 'paket'
        },
        {
            id: 'product-018',
            name: 'Paket 3 Clip Sg',
            price: 30000,
            image: 'images.png',
            description: '.',
            category: 'paket'
        },
        {
            id: 'product-019',
            name: 'Paket 3 Clip Smg',
            price: 22000,
            image: 'images.png',
            description: '.',
            category: 'paket'
        },
        {
            id: 'product-020',
            name: 'Paket 3 Clip Ar',
            price: 40000,
            image: 'images.png',
            description: '.',
            category: 'paket'
        },{
            id: 'product-021',
            name: 'Lockpick',
            price: 6000,
            image: 'lock.png',
            description: '.',
            category: 'lainnya'
        },
        {
            id: 'product-022',
            name: 'Paket 4 Lockpick',
            price: 20000,
            image: 'lock.png',
            description: '.',
            category: 'lainnya'
        },
        {
            id: 'product-023',
            name: 'Seed kanabis isi 20',
            price: 3000,
            image: 'kanabis.png',
            description: '.',
            category: 'lainnya'
        },
        {
            id: 'product-024',
            name: 'Seed kanabis isi 40',
            price: 5000,
            image: 'kanabis.png',
            description: '.',
            category: 'lainnya'
        },
        {
            id: 'product-025',
            name: 'Marijuana Paket 100%',
            price: 40000,
            image: 'kanabis.png',
            description: '.',
            category: 'lainnya'
        },
        {
            id: 'product-026',
            name: 'Marijuana Paket 20%',
            price: 10000,
            image: 'kanabis.png',
            description: '.',
            category: 'lainnya'
        },
        {
            id: 'product-027',
            name: 'Vest',
            price: 35000,
            image: 'vest.png',
            description: '.',
            category: 'lainnya'
        },
        
    ];

    // --- Fungsionalitas Umum (yang ada di semua halaman) ---

    // Modal Detail Produk (untuk melihat detail produk dari product-card)
    const productDetailModal = document.getElementById('productDetailModal');
    const modalProductImage = document.getElementById('modalProductImage');
    const modalProductName = document.getElementById('modalProductName');
    const modalProductPrice = document.getElementById('modalProductPrice');
    const modalProductDescription = document.getElementById('modalProductDescription');
    const addToCartModalBtn = document.querySelector('.add-to-cart-modal-btn');

    // Pencarian Modal & Fungsionalitas
    const searchOverlay = document.createElement('div');
    searchOverlay.classList.add('modal', 'search-overlay');
    searchOverlay.innerHTML = `
        <div class="search-content">
            <span class="close-button search-close-button">×</span>
            <h3>Cari Produk</h3>
            <input type="text" id="search-input" placeholder="Ketik nama produk...">
            <div class="search-results" id="search-results">
                </div>
        </div>
    `;
    document.body.appendChild(searchOverlay);

    const searchInput = document.getElementById('search-input');
    const searchResultsContainer = document.getElementById('search-results');
    const searchIcon = document.querySelector('.nav-icons .fa-search');
    const searchCloseButton = document.querySelector('.search-close-button');

    // Keranjang Belanja Modal & Fungsionalitas
    const cartModal = document.createElement('div');
    cartModal.classList.add('modal', 'cart-modal');
    cartModal.innerHTML = `
        <div class="cart-modal-content">
            <span class="close-button cart-close-button">×</span>
            <h3>Keranjang Belanja Anda</h3>
            <div id="cart-items-container">
                </div>
            <div class="cart-summary">
                <p>Total: <span id="cart-total-price">Rp 0</span></p>
                <div class="cart-actions">
                    <button class="btn-secondary" id="clear-cart-btn">Bersihkan Keranjang</button>
                    <button class="btn-primary" id="checkout-btn">Checkout</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(cartModal);

    const cartIcon = document.querySelector('.nav-icons .fa-shopping-cart');
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartTotalPriceSpan = document.getElementById('cart-total-price');
    const clearCartBtn = document.getElementById('clear-cart-btn');
    const checkoutBtn = document.getElementById('checkout-btn');
    const cartCloseButton = document.querySelector('.cart-close-button');


    // Fungsionalitas Modal Umum
    function closeModal(modalElement) {
        if (modalElement) {
            modalElement.style.display = 'none';
        }
    }

    // Event listener untuk tombol tutup pada modal detail produk
    const productModalCloseButton = productDetailModal ? productDetailModal.querySelector('.close-button') : null;
    if (productModalCloseButton) {
        productModalCloseButton.addEventListener('click', () => closeModal(productDetailModal));
    }

    // Tutup modal saat mengklik di luar area konten modal
    window.addEventListener('click', (event) => {
        if (event.target === productDetailModal) {
            closeModal(productDetailModal);
        }
        if (event.target === searchOverlay) {
            closeModal(searchOverlay);
        }
        if (event.target === cartModal) {
            closeModal(cartModal);
        }
    });

    // --- Fungsionalitas Keranjang Belanja ---
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartCountSpan; // Akan diinisialisasi saat cartIcon ditemukan

    if (cartIcon) {
        cartCountSpan = document.createElement('span');
        cartCountSpan.classList.add('cart-count');
        cartCountSpan.textContent = '0';
        cartIcon.parentNode.appendChild(cartCountSpan);

        cartIcon.addEventListener('click', (e) => {
            e.preventDefault();
            renderCartItems(); // Render ulang item setiap kali modal keranjang dibuka
            cartModal.style.display = 'flex';
        });
    }

    if (cartCloseButton) {
        cartCloseButton.addEventListener('click', () => closeModal(cartModal));
    }

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartIcon();
    }

    function updateCartIcon() {
        if (cartCountSpan) {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCountSpan.textContent = totalItems;
            cartCountSpan.style.display = totalItems > 0 ? 'inline-block' : 'none';
        }
    }

    function addToCart(product) {
        const existingProductIndex = cart.findIndex(item => item.id === product.id);

        if (existingProductIndex > -1) {
            cart[existingProductIndex].quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        saveCart();
        alert(`${product.name} telah ditambahkan ke keranjang!`);
        renderCartItems(); // Update cart display immediately if modal is open
    }

    function renderCartItems() {
        if (!cartItemsContainer) return;

        cartItemsContainer.innerHTML = ''; // Bersihkan konten yang ada
        let totalPrice = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p style="text-align: center; color: #555;">Keranjang Anda kosong.</p>';
        } else {
            cart.forEach(item => {
                totalPrice += item.price * item.quantity;

                const cartItemDiv = document.createElement('div');
                cartItemDiv.classList.add('cart-item');
                cartItemDiv.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <p>Harga: <span class="cart-item-price">Rp ${item.price.toLocaleString('id-ID')}</span></p>
                    </div>
                    <div class="cart-item-quantity">
                        <button class="decrease-quantity-btn" data-id="${item.id}">-</button>
                        <span>${item.quantity}</span>
                        <button class="increase-quantity-btn" data-id="${item.id}">+</button>
                    </div>
                    <button class="remove-item-btn" data-id="${item.id}"><i class="fas fa-trash"></i></button>
                `;
                cartItemsContainer.appendChild(cartItemDiv);
            });
        }

        cartTotalPriceSpan.textContent = `Rp ${totalPrice.toLocaleString('id-ID')}`;
        attachCartItemListeners(); // Lampirkan listener setelah produk dirender
    }

    function attachCartItemListeners() {
        const increaseButtons = document.querySelectorAll('.increase-quantity-btn');
        const decreaseButtons = document.querySelectorAll('.decrease-quantity-btn');
        const removeButtons = document.querySelectorAll('.remove-item-btn');

        increaseButtons.forEach(button => {
            button.onclick = () => updateQuantity(button.dataset.id, 1);
        });
        decreaseButtons.forEach(button => {
            button.onclick = () => updateQuantity(button.dataset.id, -1);
        });
        removeButtons.forEach(button => {
            button.onclick = () => removeFromCart(button.dataset.id);
        });
    }

    function updateQuantity(productId, change) {
        const itemIndex = cart.findIndex(item => item.id === productId);
        if (itemIndex > -1) {
            cart[itemIndex].quantity += change;
            if (cart[itemIndex].quantity <= 0) {
                cart.splice(itemIndex, 1); // Hapus jika kuantitas 0 atau kurang
            }
            saveCart();
            renderCartItems(); // Render ulang tampilan keranjang
        }
    }

    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        saveCart();
        renderCartItems(); // Render ulang tampilan keranjang
    }

    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', () => {
            if (confirm('Apakah Anda yakin ingin mengosongkan keranjang?')) {
                cart = [];
                saveCart();
                renderCartItems();
                alert('Keranjang telah dikosongkan.');
            }
        });
    }

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length > 0) {
                alert('Fitur checkout akan segera diimplementasikan! Total belanja Anda: ' + cartTotalPriceSpan.textContent);
                // Di sini Anda akan mengarahkan ke halaman checkout atau memulai proses pembayaran
            } else {
                alert('Keranjang Anda kosong. Tambahkan beberapa produk terlebih dahulu!');
            }
        });
    }

    // Inisialisasi ikon keranjang saat halaman dimuat
    updateCartIcon();


    // --- Fungsionalitas Pencarian ---
    if (searchIcon) {
        searchIcon.parentNode.addEventListener('click', (e) => {
            e.preventDefault();
            searchOverlay.style.display = 'flex';
            searchInput.focus(); // Fokuskan input saat modal muncul
            searchResultsContainer.innerHTML = ''; // Bersihkan hasil sebelumnya
            searchInput.value = ''; // Kosongkan input pencarian
        });
    }

    if (searchCloseButton) {
        searchCloseButton.addEventListener('click', () => closeModal(searchOverlay));
    }

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase().trim();
            searchResultsContainer.innerHTML = ''; // Bersihkan hasil sebelumnya

            if (searchTerm.length > 1) { // Mulai mencari setelah 2 karakter
                const filteredProducts = products.filter(product =>
                    product.name.toLowerCase().includes(searchTerm) ||
                    product.description.toLowerCase().includes(searchTerm) ||
                    product.category.toLowerCase().includes(searchTerm)
                );

                if (filteredProducts.length > 0) {
                    filteredProducts.forEach(product => {
                        const resultItem = document.createElement('div');
                        resultItem.classList.add('result-item');
                        resultItem.innerHTML = `
                            <img src="${product.image}" alt="${product.name}">
                            <a href="products.html?search=${encodeURIComponent(searchTerm)}#${product.id}">${product.name}</a>
                            <p>Rp ${product.price.toLocaleString('id-ID')}</p>
                        `;
                        // Event listener untuk langsung membuka detail modal dari hasil pencarian
                        resultItem.querySelector('a').addEventListener('click', (e) => {
                            e.preventDefault();
                            closeModal(searchOverlay);
                            showProductDetailFromSearch(product); // Tampilkan detail produk di modal
                        });
                        searchResultsContainer.appendChild(resultItem);
                    });
                } else {
                    searchResultsContainer.innerHTML = '<p style="text-align: center; color: #777;">Tidak ada produk yang ditemukan.</p>';
                }
            } else {
                searchResultsContainer.innerHTML = '<p style="text-align: center; color: #777;">Ketik minimal 2 karakter untuk mencari.</p>';
            }
        });
    }

    function showProductDetailFromSearch(product) {
        // Fungsi ini mengisi data produk ke modal detail produk dan menampilkannya
        if (productDetailModal) {
            modalProductImage.src = product.image;
            modalProductName.textContent = product.name;
            modalProductPrice.textContent = `Rp ${product.price.toLocaleString('id-ID')}`;
            modalProductDescription.textContent = product.description;
            addToCartModalBtn.dataset.productId = product.id;
            addToCartModalBtn.textContent = `Tambah ke Keranjang (Rp ${product.price.toLocaleString('id-ID')})`;
            productDetailModal.style.display = 'flex';
        }
    }


    // --- Fungsionalitas Khusus Halaman ---

    // Fungsionalitas untuk halaman Home (index.html)
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        const homeProductGrid = document.querySelector('.product-grid .container');
        if (homeProductGrid) {
            // Tampilkan hanya 4 produk pertama sebagai produk unggulan
            const featuredProducts = products.slice(0, 4);
            renderProductsToGrid(homeProductGrid, featuredProducts);
        }
    }

    // Fungsionalitas untuk halaman Produk (products.html)
    if (window.location.pathname.includes('products.html')) {
        const productsPageGrid = document.querySelector('.product-grid .container');

        // Fungsi untuk melampirkan event listener ke tombol detail produk
        function attachDetailButtonListeners() {
            const detailButtons = document.querySelectorAll('.product-card .btn-secondary');
            detailButtons.forEach(button => {
                button.removeEventListener('click', handleDetailButtonClick); // Hapus listener lama jika ada
                button.addEventListener('click', handleDetailButtonClick);
            });
        }

        // Fungsi handler untuk tombol detail (dipisahkan agar mudah diatur)
        function handleDetailButtonClick(event) {
            const productCard = event.target.closest('.product-card');
            if (productCard) {
                const productId = productCard.dataset.id;
                const product = products.find(p => p.id === productId);

                if (product) {
                    modalProductImage.src = product.image;
                    modalProductName.textContent = product.name;
                    modalProductPrice.textContent = `Rp ${product.price.toLocaleString('id-ID')}`;
                    modalProductDescription.textContent = product.description;

                    addToCartModalBtn.dataset.productId = product.id;
                    addToCartModalBtn.textContent = `Tambah ke Keranjang (Rp ${product.price.toLocaleString('id-ID')})`;

                    productDetailModal.style.display = 'flex';
                }
            }
        }

        // Fungsi untuk merender produk ke grid yang ditentukan
        function renderProductsToGrid(gridElement, productsToRender) {
            if (!gridElement) return;

            gridElement.innerHTML = ''; // Bersihkan konten yang ada

            if (productsToRender.length === 0) {
                gridElement.innerHTML = '<p style="text-align: center; width: 100%; color: #777;">Tidak ada produk yang ditemukan.</p>';
                return;
            }

            productsToRender.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
                productCard.dataset.id = product.id;

                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <div class="card-content">
                        <h4>${product.name}</h4>
                        <p class="price">Rp ${product.price.toLocaleString('id-ID')}</p>
                        <button class="btn-secondary">Lihat Detail</button>
                    </div>
                `;
                gridElement.appendChild(productCard);
            });
            attachDetailButtonListeners(); // Lampirkan listener setelah produk dirender
        }

        // Dapatkan parameter kategori atau pencarian dari URL jika ada
        const urlParams = new URLSearchParams(window.location.search);
        const categoryFilter = urlParams.get('category');
        const searchParam = urlParams.get('search');

        let productsToDisplay = products;

        if (categoryFilter) {
            productsToDisplay = products.filter(p => p.category === categoryFilter);
        } else if (searchParam) {
            const decodedSearchTerm = decodeURIComponent(searchParam).toLowerCase();
            productsToDisplay = products.filter(product =>
                product.name.toLowerCase().includes(decodedSearchTerm) ||
                product.description.toLowerCase().includes(decodedSearchTerm) ||
                product.category.toLowerCase().includes(decodedSearchTerm)
            );
        }

        // Panggil renderProductsToGrid saat halaman products.html dimuat
        renderProductsToGrid(productsPageGrid, productsToDisplay);
    }

    // Fungsionalitas untuk halaman Kategori (categories.html)
    // Tautan di categories.html sudah mengarah ke products.html dengan parameter
    // Jadi tidak banyak logika khusus di sini selain navigasi.

    // Fungsionalitas untuk halaman Kontak (contact.html)
    if (window.location.pathname.includes('contact.html')) {
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (event) => {
                event.preventDefault();

                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const subject = document.getElementById('subject').value;
                const message = document.getElementById('message').value;

                console.log('Formulir Kontak Dikirim:', { name, email, subject, message });
                alert('Terima kasih! Pesan Anda telah terkirim. Kami akan menghubungi Anda kembali secepatnya.');

                contactForm.reset();
            });
        }
    }

    // Event listener untuk tombol "Tambah ke Keranjang" di modal detail produk
    if (addToCartModalBtn) {
        addToCartModalBtn.addEventListener('click', (event) => {
            const productId = event.target.dataset.productId;
            const product = products.find(p => p.id === productId);
            if (product) {
                addToCart(product);
                closeModal(productDetailModal);
            }
        });
    }
});