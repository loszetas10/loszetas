// script.js

document.addEventListener('DOMContentLoaded', () => {
    // --- Data Produk ---
    const products = [
        {
            id: 'product-001',
            name: 'Colt-45',
            price: 15000,
            image: '9mm.png',
            description: 'Pistol standar dengan daya hentian yang solid, cocok untuk pertahanan diri.',
            category: 'senjata'
        },
        {
            id: 'product-002',
            name: 'Silenced/SLC',
            price: 18000,
            image: 'silenced9mm.png',
            description: 'Pistol dengan peredam suara, ideal untuk operasi senyap dan stealth.',
            category: 'senjata'
        },
        {
            id: 'product-003',
            name: 'Desert Eagle/DE',
            price: 24000,
            image: 'desertEagle.png',
            description: 'Pistol kaliber besar dengan kekuatan tembak yang luar biasa, untuk situasi kritis.',
            category: 'senjata'
        },
        {
            id: 'product-004',
            name: 'Shotgun',
            price: 30000,
            image: 'shotgun.png',
            description: 'Senapan patah dengan daya sebar luas, efektif dalam jarak dekat.',
            category: 'senjata'
        },
        {
            id: 'product-005',
            name: 'Mini Uzi',
            price: 30000,
            image: 'microSMG-Uzi.png',
            description: 'Senapan mesin ringan yang ringkas, cocok untuk pertempuran jarak dekat dan cepat.',
            category: 'senjata'
        },
        {
            id: 'product-006',
            name: 'AK-47',
            price: 40000,
            image: 'ak47.png',
            description: 'Senapan serbu legendaris dengan kekuatan dan keandalan yang teruji.',
            category: 'senjata'
        },
        {
            id: 'product-007',
            name: 'Clip Pistol',
            price: 7000,
            image: 'images.png', // Asumsi ini adalah gambar klip peluru
            description: 'Klip peluru tambahan untuk pistol, memastikan Anda tidak kehabisan amunisi.',
            category: 'clip'
        },
        {
            id: 'product-008',
            name: 'Clip Sg',
            price: 11000,
            image: 'images.png', // Asumsi ini adalah gambar klip peluru
            description: 'Klip peluru tambahan untuk shotgun, siap untuk tembakan lebih banyak.',
            category: 'clip'
        },
        {
            id: 'product-009',
            name: 'Clip Smg',
            price: 7500,
            image: 'images.png', // Asumsi ini adalah gambar klip peluru
            description: 'Klip peluru tambahan untuk SMG, menjaga tembakan Anda tetap lancar.',
            category: 'clip'
        },
        {
            id: 'product-010',
            name: 'Clip Ar',
            price: 15000,
            image: 'images.png', // Asumsi ini adalah gambar klip peluru
            description: 'Klip peluru tambahan untuk senapan serbu, sangat penting dalam baku tembak intens.',
            category: 'clip'
        },
        {
            id: 'product-011',
            name: 'Pake Colt-45 + Clip',
            price: 30000,
            image: '9mm.png',
            description: 'Paket lengkap Colt-45 dengan klip peluru tambahan, siap tempur.',
            category: 'paket'
        },
        {
            id: 'product-012',
            name: 'Paket SLC + Clip',
            price: 35000,
            image: 'silenced9mm.png',
            description: 'Paket Silenced/SLC dengan klip peluru tambahan, untuk operasi rahasia.',
            category: 'paket'
        },
        {
            id: 'product-013',
            name: 'Paket De + Clip',
            price: 40000, // Harga ini telah disesuaikan (sebelumnya 400000)
            image: 'desertEagle.png',
            description: 'Paket Desert Eagle dengan klip peluru tambahan, kekuatan di tangan Anda.',
            category: 'paket'
        },
        {
            id: 'product-014',
            name: 'Pake SG + Clip',
            price: 55000,
            image: 'shotgun.png',
            description: 'Paket Shotgun dengan klip peluru tambahan, siap untuk jarak dekat.',
            category: 'paket'
        },
        {
            id: 'product-015',
            name: 'Paket Mini uzi + Clip',
            price: 50000,
            image: 'microSMG-Uzi.png',
            description: 'Paket Mini Uzi dengan klip peluru tambahan, untuk mobilitas dan daya tembak cepat.',
            category: 'paket'
        },
        {
            id: 'product-016',
            name: 'Paket AK-47 + Clip',
            price: 80000,
            image: 'ak47.png',
            description: 'Paket AK-47 dengan klip peluru tambahan, kombinasi mematikan untuk segala situasi.',
            category: 'paket'
        },
        {
            id: 'product-017',
            name: 'Paket 3 Clip Pistol',
            price: 18000,
            image: 'images.png',
            description: 'Paket hemat 3 klip peluru pistol, pastikan Anda tidak pernah kehabisan amunisi.',
            category: 'paket'
        },
        {
            id: 'product-018',
            name: 'Paket 3 Clip Sg',
            price: 30000,
            image: 'images.png',
            description: 'Paket 3 klip peluru shotgun, siap untuk pertempuran intens.',
            category: 'paket'
        },
        {
            id: 'product-019',
            name: 'Paket 3 Clip Smg',
            price: 22000,
            image: 'images.png',
            description: 'Paket 3 klip peluru SMG, untuk daya tembak berkelanjutan.',
            category: 'paket'
        },
        {
            id: 'product-020',
            name: 'Paket 3 Clip Ar',
            price: 40000,
            image: 'images.png',
            description: 'Paket 3 klip peluru senapan serbu, vital untuk misi panjang.',
            category: 'paket'
        },
        {
            id: 'product-021',
            name: 'Lockpick',
            price: 6000,
            image: 'lock.png',
            description: 'Alat pembuka kunci, untuk akses cepat dan senyap.',
            category: 'lainnya'
        },
        {
            id: 'product-022',
            name: 'Paket 4 Lockpick',
            price: 20000,
            image: 'lock.png',
            description: 'Paket hemat 4 alat pembuka kunci, siapkan diri untuk berbagai skenario.',
            category: 'lainnya'
        },
        {
            id: 'product-023',
            name: 'Seed kanabis isi 20',
            price: 3000,
            image: 'kanabis.png',
            description: 'Benih kanabis kualitas premium, 20 biji siap tanam.',
            category: 'lainnya'
        },
        {
            id: 'product-024',
            name: 'Seed kanabis isi 40',
            price: 5000,
            image: 'kanabis.png',
            description: 'Benih kanabis kualitas premium, 40 biji siap tanam, untuk panen lebih besar.',
            category: 'lainnya'
        },
        {
            id: 'product-025',
            name: 'Marijuana Paket 100%',
            price: 40000,
            image: 'kanabis.png',
            description: 'Marijuana murni 100% dengan kualitas terbaik.',
            category: 'lainnya'
        },
        {
            id: 'product-026',
            name: 'Marijuana Paket 20%',
            price: 10000,
            image: 'kanabis.png',
            description: 'Marijuana 20% dengan campuran, pilihan terjangkau.',
            category: 'lainnya'
        },
        {
            id: 'product-027',
            name: 'Vest',
            price: 35000,
            image: 'vest.png',
            description: 'Rompi pelindung, menambah ketahanan Anda di lapangan.',
            category: 'lainnya'
        },
    ];

    // --- Fungsionalitas Umum (yang ada di semua halaman) ---

    // Elemen Modal Detail Produk
    const productDetailModal = document.getElementById('productDetailModal');
    const modalProductImage = document.getElementById('modalProductImage');
    const modalProductName = document.getElementById('modalProductName');
    const modalProductPrice = document.getElementById('modalProductPrice');
    const modalProductDescription = document.getElementById('modalProductDescription');
    const addToCartModalBtn = document.querySelector('.add-to-cart-modal-btn');
    const productDetailCloseButton = productDetailModal ? productDetailModal.querySelector('.close-button') : null;

    // Elemen Pencarian Modal & Fungsionalitas
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

    // Elemen Keranjang Belanja Modal & Fungsionalitas
    const cartModal = document.createElement('div');
    cartModal.classList.add('modal', 'cart-modal');
    cartModal.innerHTML = `
        <div class="cart-modal-content">
            <span class="close-button cart-close-button">×</span>
            <h3>Keranjang Belanja Anda</h3>
            <div id="cart-items-container">
                </div>
            <div class="cart-summary">
                <p>Total: <span id="cart-total-price">$ 0</span></p>
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

    // --- Fungsionalitas Modal Umum ---

    /**
     * Membuka modal detail produk dan mengisinya dengan data produk yang diberikan.
     * @param {Object} product - Objek produk yang akan ditampilkan detailnya.
     */
    function openProductDetailModal(product) {
        if (productDetailModal && product) {
            modalProductImage.src = product.image;
            modalProductImage.alt = product.name;
            modalProductName.textContent = product.name;
            modalProductPrice.textContent = `$ ${product.price.toLocaleString('id-ID')}`;
            modalProductDescription.textContent = product.description;

            // Penting: Simpan ID produk di tombol 'Tambah ke Keranjang'
            addToCartModalBtn.dataset.productId = product.id;
            addToCartModalBtn.textContent = `Tambah ke Keranjang ($ ${product.price.toLocaleString('id-ID')})`;

            // Tampilkan modal dengan kelas 'active' untuk CSS transition
            productDetailModal.classList.add('active');
            document.body.classList.add('no-scroll'); // Mencegah body scroll
        } else {
            console.error('Produk tidak ditemukan atau modal detail produk tidak ada.');
        }
    }

    /**
     * Menutup modal yang diberikan.
     * Menggunakan class 'active' untuk transisi CSS.
     * @param {HTMLElement} modalElement - Elemen modal yang akan ditutup.
     */
    function closeModal(modalElement) {
        if (modalElement) {
            modalElement.classList.remove('active');
            // Hanya hapus no-scroll jika modal yang ditutup adalah productDetailModal
            if (modalElement === productDetailModal) {
                document.body.classList.remove('no-scroll');
            }
            // Untuk searchOverlay dan cartModal yang mungkin belum sepenuhnya menggunakan 'active' di CSS
            // Anda bisa tambahkan ini jika ingin transisi yang sama:
            // if (modalElement === searchOverlay || modalElement === cartModal) {
            //     modalElement.style.display = 'none';
            // }
            // Untuk saat ini, kita akan biarkan yang sudah ada untuk search/cart jika belum diupdate CSS.
        }
    }

    // Event listener untuk tombol tutup pada modal detail produk
    if (productDetailCloseButton) {
        productDetailCloseButton.addEventListener('click', () => closeModal(productDetailModal));
    }

    // Tutup modal saat mengklik di luar area konten modal
    window.addEventListener('click', (event) => {
        if (event.target === productDetailModal) {
            closeModal(productDetailModal);
        }
        if (event.target === searchOverlay) {
            searchOverlay.classList.remove('active'); // Gunakan active class
            searchOverlay.style.display = 'none'; // Tambahan untuk memastikan tersembunyi
        }
        if (event.target === cartModal) {
            cartModal.classList.remove('active'); // Gunakan active class
            cartModal.style.display = 'none'; // Tambahan untuk memastikan tersembunyi
        }
    });

    // --- Fungsionalitas Menu Hamburger ---
    const mobileMenuButton = document.getElementById('mobile-menu');
    const mainNav = document.getElementById('main-nav');

    if (mobileMenuButton && mainNav) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenuButton.classList.toggle('is-active'); // Toggle class untuk animasi X
            mainNav.classList.toggle('is-active'); // Toggle class untuk menampilkan/menyembunyikan menu
        });

        // Opsional: Tutup menu ketika salah satu link diklik (untuk UX mobile)
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuButton.classList.remove('is-active');
                mainNav.classList.remove('is-active');
            });
        });
    }

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
            cartModal.classList.add('active'); // Gunakan active class
            cartModal.style.display = 'flex'; // Tambahan untuk memastikan terlihat
        });
    }

    if (cartCloseButton) {
        cartCloseButton.addEventListener('click', () => {
            closeModal(cartModal);
            cartModal.style.display = 'none'; // Pastikan display none
        });
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
                        <p>Harga: <span class="cart-item-price">$ ${item.price.toLocaleString('id-ID')}</span></p>
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

        cartTotalPriceSpan.textContent = `$ ${totalPrice.toLocaleString('id-ID')}`;
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
                const totalFormatted = cartTotalPriceSpan.textContent;

                let whatsappMessage = "Halo, saya ingin memesan produk berikut:\n\n";
                cart.forEach(item => {
                    whatsappMessage += `- ${item.name} (${item.quantity}x) @ $ ${item.price.toLocaleString('id-ID')}\n`;
                });
                whatsappMessage += `\nTotal: ${totalFormatted}`; // Menggunakan totalFormatted
                whatsappMessage += "\n\nMohon konfirmasi pesanan saya. Terima kasih!";

                const encodedMessage = encodeURIComponent(whatsappMessage);

                // Nomor WhatsApp tujuan (ganti dengan nomor Anda)
                const whatsappNumber = ""; // Contoh: Ganti dengan nomor WhatsApp Anda, tanpa '+' atau spasi

                const whatsappUrl = `https://discord.gg/QeqfnSSaYD`;

                window.open(whatsappUrl, '_blank');

                // Opsional: Kosongkan keranjang setelah checkout jika diinginkan
                // cart = [];
                // saveCart();
                // renderCartItems();
                // closeModal(cartModal);
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
            searchOverlay.classList.add('active'); // Gunakan active class
            searchOverlay.style.display = 'flex'; // Tambahan untuk memastikan terlihat
            searchInput.focus(); // Fokuskan input saat modal muncul
            searchResultsContainer.innerHTML = ''; // Bersihkan hasil sebelumnya
            searchInput.value = ''; // Kosongkan input pencarian
        });
    }

    if (searchCloseButton) {
        searchCloseButton.addEventListener('click', () => {
            closeModal(searchOverlay);
            searchOverlay.style.display = 'none'; // Pastikan display none
        });
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
                            <a href="#" data-product-id="${product.id}">${product.name}</a>
                            <p>$ ${product.price.toLocaleString('id-ID')}</p>
                        `;
                        // Event listener untuk langsung membuka detail modal dari hasil pencarian
                        resultItem.querySelector('a').addEventListener('click', (e) => {
                            e.preventDefault();
                            closeModal(searchOverlay); // Tutup modal pencarian
                            searchOverlay.style.display = 'none'; // Pastikan display none
                            openProductDetailModal(product); // Panggil fungsi utama openProductDetailModal
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

    // --- Fungsionalitas Khusus Halaman ---

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
                    <p class="price">$ ${product.price.toLocaleString('id-ID')}</p>
                    <button class="btn-primary view-detail-btn" data-product-id="${product.id}">Lihat Detail</button>
                </div>
            `;
            // Tambahkan event listener langsung ke tombol "Lihat Detail" saat kartu dibuat
            productCard.querySelector('.view-detail-btn').addEventListener('click', () => {
                openProductDetailModal(product); // Panggil fungsi utama openProductDetailModal
            });

            gridElement.appendChild(productCard);
        });
    }

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
                closeModal(productDetailModal); // Tutup modal setelah menambah ke keranjang
            }
        });
    }

    // Efek scroll untuk header (jika belum ada di main script)
    const header = document.querySelector('header');
    if (header) { // Pastikan elemen header ada
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
});
