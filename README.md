# Portfolio Web — Achmad Fathoni

Website portofolio pribadi **Achmad Fathoni**, seorang Software Developer dengan pengalaman lebih dari 7 tahun di bidang pengembangan backend dan frontend (Laravel, Next.js, Flutter, dan Golang).

Dibangun sebagai situs statis murni menggunakan **HTML, CSS, dan JavaScript vanilla** — tanpa framework dan tanpa proses build, sehingga ringan dan mudah di-deploy di mana saja.

## ✨ Fitur

- **Desain modern & responsif** dengan tema gelap, aksen gradient, dan grid background beranimasi.
- **Hero section** dengan efek ketik (typing) bergantian: Software Developer, Backend Engineer, Fullstack Developer, Golang Developer.
- **Animated counters** untuk statistik (tahun pengalaman, proyek, teknologi, perusahaan).
- **Reveal on scroll** — elemen muncul dengan animasi bertahap saat di-scroll.
- **Navbar sticky** dengan active link mengikuti posisi scroll (scroll spy) dan menu mobile.
- **Filter proyek** berdasarkan teknologi (Next.js, Golang, Laravel, Mobile).
- Section lengkap: About, Skills, Experience, Projects, Education, dan Contact.

## 📁 Struktur Proyek

```
portfolio-web/
├── index.html          # Struktur halaman (semua section)
├── css/
│   └── style.css       # Styling, design tokens, animasi
├── js/
│   └── main.js         # Interaksi: typing, scroll spy, counter, filter, menu mobile
├── assets/
│   └── img/            # Foto profil & gambar proyek
└── README.md
```

## 🚀 Menjalankan Secara Lokal

Karena ini situs statis, cukup buka `index.html` langsung di browser.

Namun untuk pengalaman terbaik (menghindari masalah path/CORS), jalankan lewat server lokal sederhana:

**Python**
```bash
python3 -m http.server 8000
```

**Node.js (npx)**
```bash
npx serve .
```

Lalu buka `http://localhost:8000` di browser.

## 🛠️ Teknologi

| Kategori  | Teknologi                                   |
|-----------|---------------------------------------------|
| Markup    | HTML5                                        |
| Styling   | CSS3 (custom properties, grid, flexbox, animasi) |
| Scripting | JavaScript (vanilla, IntersectionObserver)   |
| Font      | Plus Jakarta Sans & JetBrains Mono (Google Fonts) |

## 🌐 Deployment

Situs statis ini dapat langsung di-host di layanan seperti:

- **GitHub Pages**
- **Netlify**
- **Vercel**
- **Cloudflare Pages**

Cukup unggah seluruh isi folder, tidak diperlukan konfigurasi build.

## 📬 Kontak

- **Email:** achmadfathonii30@gmail.com
- **Telepon:** +62 812 9919 3030
- **GitHub:** [github.com/AchmadFathoni30](https://github.com/AchmadFathoni30)
- **Lokasi:** Kota Tangerang, Indonesia

---

© Achmad Fathoni — Software Developer
