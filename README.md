# 🎂 Website Ucapan Ulang Tahun untuk Bunda

Website ucapan ulang tahun yang elegan, cinematic, dan penuh cinta untuk bunda yang berulang tahun ke-37.

## ✨ Fitur

- 🎭 **Loading Screen Cinematic** dengan animasi bintang dan progress bar
- 📝 **Typing Animation** untuk ucapan utama
- 🎁 **Animasi Buka Kado** yang interaktif
- 📸 **Galeri Foto Polaroid** dengan 10 foto kenangan
- 🎬 **Slideshow Otomatis** untuk kenangan indah
- 🎂 **Kue Ulang Tahun Interaktif** dengan lilin yang bisa ditiup
- 💕 **Kejutan Terakhir** dengan animasi hati jatuh
- 🎊 **Confetti Animation** yang meriah
- 🎵 **Background Music** (dapat ditambahkan)
- 📱 **Responsive Design** untuk HP dan desktop

## 🚀 Cara Deploy ke GitHub Pages

### 1. Buat Repository GitHub Baru

1. Buka [GitHub](https://github.com) dan login
2. Klik tombol "+" di pojok kanan atas, pilih "New repository"
3. Beri nama repository: `birthday-website` (atau nama lain yang Anda suka)
4. Pilih "Public" agar bisa diakses GitHub Pages
5. Klik "Create repository"

### 2. Upload File ke GitHub

#### Cara 1: Upload Manual (Mudah)

1. Di halaman repository baru, klik "uploading an existing file"
2. Drag dan drop semua file dan folder dari folder `birthday-website`
3. Klik "Commit changes"

#### Cara 2: Menggunakan Git (Untuk yang familiar dengan Git)

```bash
cd birthday-website
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/birthday-website.git
git push -u origin main
```

### 3. Aktifkan GitHub Pages

1. Di repository GitHub, klik tab "Settings"
2. Di sidebar kiri, klik "Pages"
3. Di bagian "Source", pilih "Deploy from a branch"
4. Pilih branch "main" dan folder "/ (root)"
5. Klik "Save"
6. Tunggu beberapa menit, lalu website akan tersedia di:
   `https://USERNAME.github.io/birthday-website/`

## 🎵 Cara Menambahkan Musik

### Opsi 1: Download dari Pixabay (Gratis & Legal)

1. Kunjungi [Pixabay Music](https://pixabay.com/music/search/happy%20birthday%20instrumental/)
2. Pilih lagu instrumental yang Anda suka
3. Klik "Download" (gratis, no copyright)
4. Rename file menjadi `birthday.mp3`
5. Letakkan di folder `music/`
6. Upload ulang ke GitHub

### Opsi 2: Gunakan File MP3 Sendiri

1. Siapkan file MP3 instrumental ulang tahun
2. Rename menjadi `birthday.mp3`
3. Letakkan di folder `music/`
4. Upload ulang ke GitHub

## 📁 Struktur Folder

```
birthday-website/
├── index.html          # File utama HTML
├── style.css           # Styling dan animasi CSS
├── script.js           # Interaktivitas JavaScript
├── README.md           # File ini
├── assets/             # Folder foto
│   ├── foto1.jpeg
│   ├── foto2.jpeg
│   ├── foto3.jpeg
│   ├── foto4.jpeg
│   ├── foto5.jpeg
│   ├── foto6.jpeg
│   ├── foto7.jpeg
│   ├── foto8.jpeg
│   ├── foto9.jpeg
│   └── foto10.jpeg
└── music/              # Folder musik
    └── birthday.mp3    # (Opsional - bisa ditambahkan nanti)
```

## 🎨 Kustomisasi

### Mengganti Foto

1. Siapkan 10 foto kenangan dengan bunda
2. Rename menjadi `foto1.jpeg` sampai `foto10.jpeg`
3. Ganti file di folder `assets/`
4. Upload ulang ke GitHub

### Mengubah Teks Ucapan

Buka file `index.html` dan cari bagian:

```html
<p class="touching-message">
    "Terima kasih sudah selalu ada untukku.<br>
    Semoga bunda selalu sehat, bahagia, dan panjang umur.<br>
    <span class="love-text">Aku sayang bunda ❤️</span>"
</p>
```

Ubah teks sesuai keinginan Anda.

### Mengubah Warna Tema

Buka file `style.css` dan cari bagian `:root` di awal file:

```css
:root {
    --cream: #FFF8F0;
    --pink-light: #FFD1DC;
    --gold: #D4AF37;
    /* ... dll */
}
```

Ubah warna sesuai preferensi Anda.

## 🌟 Tips

- **Testing Lokal**: Buka file `index.html` di browser untuk melihat hasil sebelum deploy
- **Musik Tidak Autoplay**: Beberapa browser memblokir autoplay audio. User perlu klik tombol musik untuk memutar.
- **Optimasi Gambar**: Jika foto terlalu besar, kompres dulu di [TinyPNG](https://tinypng.com/) agar website lebih cepat.

## 💝 Dibuat dengan Cinta

Website ini dibuat sebagai kejutan spesial untuk bunda tercinta. Semoga bunda suka! ❤️

---

**Teknologi yang digunakan:**
- HTML5
- CSS3 ( dengan animasi modern)
- JavaScript (Vanilla)
- Google Fonts

**Browser yang didukung:**
- Chrome (recommended)
- Firefox
- Safari
- Edge
