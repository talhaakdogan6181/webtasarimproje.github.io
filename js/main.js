< !DOCTYPE html >
    <html lang="tr">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Alışveriş Mağazam</title>

            <!-- Bootstrap CSS -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />

            <!-- Bootstrap Icons -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" rel="stylesheet" />

            <style>
        /* Düzeltilmiş CSS */
                body {
                    background - color: #f7faf9;
                min-height: 100vh;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                color: #344d4d;
                padding-top: 70px;
}

                .navbar {
                    background - color: #50c7b7;
                box-shadow: 0 4px 15px rgba(80, 199, 183, 0.4);
}

                .navbar-brand {
                    font - weight: 700;
                color: #fff !important;
                letter-spacing: 1.3px;
                font-size: 1.5rem;
}

                .form-control, .form-select {
                    border - radius: 12px;
                border: 1.5px solid #b0d8d5;
                padding: 0.5rem 1rem;
                transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

                .form-control:focus, .form-select:focus {
                    border - color: #50c7b7;
                box-shadow: 0 0 10px #50c7b7aa;
                outline: none;
}

                .btn-cart {
                    background - color: #50c7b7;
                border: none;
                color: white;
                border-radius: 12px;
                padding: 0.3rem 0.8rem;
                font-weight: 600;
                transition: background-color 0.3s ease;
}

                .btn-cart:hover {
                    background - color: #3aa796;
}

                .product-card {
                    border - radius: 20px;
                box-shadow: 0 6px 18px rgba(80, 199, 183, 0.15);
                background: #fafafa;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 100%;
}

                .product-card:hover {
                    transform: translateY(-6px);
                box-shadow: 0 12px 38px rgba(80, 199, 183, 0.25);
}

                .product-img {
                    border - top - left - radius: 20px;
                border-top-right-radius: 20px;
                object-fit: cover;
                width: 100%;
                height: 180px;
}

                .product-body {
                    padding: 1rem 1.2rem;
                flex-grow: 1;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
}

                .product-title {
                    font - weight: 700;
                font-size: 1.1rem;
                color: #327a78;
                margin-bottom: 0.5rem;
}

                .product-price {
                    font - weight: 600;
                color: #50c7b7;
                font-size: 1.2rem;
                margin-bottom: 0.8rem;
}

                .filter-section {
                    margin - bottom: 2rem;
                display: flex;
                gap: 1rem;
                flex-wrap: wrap;
                justify-content: center;
}

                #cartCount {
                    background - color: #e94f37;
                color: white;
                font-weight: 700;
                font-size: 0.85rem;
                padding: 2px 7px;
                border-radius: 50%;
                position: absolute;
                top: 8px;
                right: 6px;
                user-select: none;
}

                .cart-icon-wrapper {
                    position: relative;
                cursor: pointer;
                color: white;
                font-size: 1.4rem;
}

                /* Dark mode toggle button */
                #darkModeToggle {
                    background - color: transparent;
                border: none;
                color: white;
                font-size: 1.4rem;
                cursor: pointer;
                transition: color 0.3s ease;
}

                #darkModeToggle:hover {
                    color: #d1f2eb;
}

                /* Dark mode styles */
                body.dark-mode {
                    background - color: #1e1e2f;
                color: #c7d2fe;
}

                body.dark-mode .navbar {
                    background - color: #2b2b44 !important;
                box-shadow: 0 4px 15px rgba(70, 70, 120, 0.6);
}

                body.dark-mode .product-card {
                    background - color: #2b2b44;
                box-shadow: 0 6px 20px rgba(70, 70, 120, 0.5);
                color: #c7d2fe;
}

                body.dark-mode .form-control,
                body.dark-mode .form-select {
                    background - color: #1e1e2f;
                border-color: #45475a;
                color: #c7d2fe;
}

                body.dark-mode .form-control:focus,
                body.dark-mode .form-select:focus {
                    border - color: #8be9fd;
                box-shadow: 0 0 8px #8be9fdaa;
                color: #c7d2fe;
}

                body.dark-mode .btn-cart {
                    background - color: #8be9fd;
                color: #1e1e2f;
}

                body.dark-mode .btn-cart:hover {
                    background - color: #50c7b7;
                color: white;
}

                body.dark-mode .dropdown-menu {
                    background - color: #2b2b44;
                color: #c7d2fe;
}

                body.dark-mode .dropdown-item:hover {
                    background - color: #3a3a5c;
                color: #8be9fd;
}

                body.dark-mode .cart-icon-wrapper {
                    color: #8be9fd;
}

            </style>
        </head>
        <body>

            <nav class="navbar fixed-top navbar-expand-lg">
                <div class="container">
                    <a class="navbar-brand" href="#">Mağaza</a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navContent"
                        aria-controls="navContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon" style="filter: invert(1);"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item" id="adminNavItem">
                                <a class="nav-link" href="#" onclick="askAdminPassword()">Admin Paneli</a>
                            </li>
                        </ul>

                        <form class="d-flex flex-grow-1 mx-lg-3 my-2 my-lg-0" role="search" onsubmit="return false;">
                            <input class="form-control me-2" type="search" id="searchInput" placeholder="Ürün ara..." aria-label="Search" />
                        </form>

                        <select class="form-select w-auto me-lg-3 my-2 my-lg-0" id="categoryFilter" aria-label="Kategori filtre">
                            <option value="">Tüm Kategoriler</option>
                            <option value="Elektronik">Elektronik</option>
                            <option value="Giyim">Giyim</option>
                            <option value="Ev">Ev</option>
                        </select>

                        <button id="darkModeToggle" title="Koyu / Açık Mod Değiştir" class="me-3" aria-label="Dark mode toggle">
                            <i class="bi bi-moon-stars"></i>
                        </button>

                        <div class="cart-icon-wrapper me-3" title="Sepetim" style="cursor:pointer;">
                            <i class="bi bi-cart3"></i>
                            <span id="cartCount">0</span>
                        </div>

                        <!-- Profil dropdown -->
                        <div class="dropdown">
                            <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="profileDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://i.pravatar.cc/40" alt="Profil" width="40" height="40" class="rounded-circle me-2" />
                                <span>Ahmet</span>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                                <li><a class="dropdown-item" href="profile.html">Profilim</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="logout.html">Çıkış Yap</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <div class="container my-4">
                <div id="productsContainer" class="row g-4">
                    <!-- Ürünler buraya JS ile gelecek -->
                </div>
            </div>

            <!-- Bootstrap JS -->
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

            <script>
                function askAdminPassword() {
        const password = prompt("Admin paneline erişmek için şifreyi girin:");
                if (password === null) return; // iptal

                const correctPassword = "12345";

                if (password === correctPassword) {
                    alert("Şifre doğru! Admin paneline yönlendiriliyorsunuz.");
                window.location.href = "admin.html";
        } else {
                    alert("Yanlış şifre! Erişim engellendi.");
        }
    }

            // Buraya diğer JS kodlarını ekleyebilirsin (ürün listeleme, dark mode, sepet vs.)
            </script>

        </body>
    </html>
const products = [
    { id: 1, title: "Ürün 1", price: 100, category: "Elektronik" },
    { id: 2, title: "Ürün 2", price: 50, category: "Giyim" },
    // Daha fazla ürün...
];

const cart = [];

function renderProducts() {
    const container = document.getElementById("productsContainer");
    container.innerHTML = "";

    products.forEach(product => {
        const col = document.createElement("div");
        col.className = "col-md-4";

        col.innerHTML = `
      <div class="product-card p-3">
        <h5 class="product-title">${product.title}</h5>
        <p class="product-price">${product.price} TL</p>
        <button class="btn btn-cart" onclick="addToCart(${product.id})">Sepete Ekle</button>
      </div>
    `;

        container.appendChild(col);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    cart.push(product);
    updateCartCount();
    alert(`${product.title} sepete eklendi!`);
}

function updateCartCount() {
    const countSpan = document.getElementById("cartCount");
    countSpan.textContent = cart.length;
}

document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    updateCartCount();
});
<script>
    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();

    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value;
    const passwordConfirm = document.getElementById('registerPasswordConfirm').value;

    if(password !== passwordConfirm) {
        alert('Şifreler eşleşmiyor!');
    return;
    }

    alert(`Kayıt başarılı! Email: ${email}`);
});
</script>

