# 🚀 Personal Portfolio Website (Vue 3 + Vite + Tailwind CSS)

Dokumentasi arsitektur, setup, dan panduan pengembangan proyek situs portofolio personal interaktif berkinerja tinggi. Desain situs ini mengadopsi tampilan modern berlatar gelap (*dark mode*) dengan visualisasi grid zig-zag dan header bermodel *asymmetric split canvas*.

---

## 📌 Ringkasan Proyek

| Item | Detail |
|---|---|
| Nama Proyek | Portfolio — Anam |
| Tagline | "Building websites that look good and work well." |
| Tujuan | Menampilkan studi kasus proyek (case study) freelance/agency work secara profesional untuk menarik klien baru |
| Target Pengguna | Calon klien, HR/recruiter, sesama developer |
| Referensi Desain Awal | Webflow (mkhoirulanam.webflow.io) — akan di-*rebuild* dengan stack custom di bawah |

---

## 🛠️ Tech Stack & Standar Spesifikasi

* **Core Framework:** Vue 3 (Composition API dengan `<script setup>`)
* **Build Tool:** Vite (sangat cepat untuk pengembangan lokal)
* **Styling:** Tailwind CSS (utility-first CSS framework)
* **Language:** TypeScript (untuk mengetik kode secara aman/strict & terdokumentasi)
* **Icons:** Lucide Vue / FontAwesome
* **Animasi:** VueUse Motion / GSAP (untuk efek scroll-reveal pada kartu proyek)
* **Routing:** Vue Router (jika portofolio dipecah menjadi multi-halaman, mis. `/project/:slug`)
* **Deployment:** Vercel / Netlify

---

## 📁 Struktur Folder Proyek

Proyek ini menggunakan struktur folder modular berbasis komponen yang mudah dipahami (*developer-friendly*) dan sangat *reusable*:

```text
src/
├── assets/          # Aset statis global (foto cutout developer, dekorasi doodle, dll.)
├── components/      # Komponen UI tingkat atomik & molekuler yang reusable
│   └── ui/          # Tombol, kartu, atau badge kustom global
├── layouts/         # Layout utama halaman web (DefaultLayout.vue)
├── sections/        # Komponen modular per bagian halaman (Hero, Projects, Footer)
├── views/           # Halaman utama (HomeView.vue)
├── styles/          # Konfigurasi CSS global dan inisialisasi Tailwind
└── App.vue          # Entry point aplikasi utama
```

Rincian tambahan yang direkomendasikan:

```text
src/
├── components/
│   ├── ui/
│   │   ├── BaseButton.vue
│   │   ├── BaseBadge.vue
│   │   └── SectionLabel.vue      # Label kecil di sisi kiri tiap section (mis. "01")
│   ├── ProjectCard.vue           # Kartu studi kasus (thumbnail + judul + tech stack)
│   └── CompanyLogoList.vue
├── sections/
│   ├── HeroSection.vue           # "Hello Everyone" + headline + doodle decorations
│   ├── SelectedWorkSection.vue   # List studi kasus proyek
│   ├── CompaniesSection.vue      # "Companies I've Worked With"
│   └── CTASection.vue            # "Let's Work Together"
├── data/
│   └── projects.ts                # Data statis semua proyek (bisa dipindah ke CMS nanti)
└── composables/
    └── useScrollReveal.ts
```

---

## 🧩 Peta Struktur Halaman (Berdasarkan Desain Referensi)

1. **Hero Section**
   - Sapaan kecil: "Hello Everyone"
   - Headline besar: "Building websites that look good and work well."
   - Deskripsi singkat tentang keahlian (WordPress, JavaScript, Webflow) & availability status
   - Dekorasi doodle/grid di background

2. **Selected Work That Delivers Results**
   - Daftar studi kasus proyek, tiap item memuat:
     - Nomor urut/label kecil di kiri (01, 02, 03, dst.)
     - Kategori (Website / Landing Page / E-commerce)
     - Judul proyek
     - Thumbnail/mockup gambar
     - Deskripsi singkat proyek
     - Tech stack yang digunakan (mis. "Built with WordPress", "Built with Webflow")
     - Tombol "Visit Website"
     - Contoh proyek yang tampil: Numerix Accounting, Youtap Indonesia, Youtap Kiosk, Youtap POS, Youtap PAY, Youtap BOS, Youtap Solution, Tinago, Home Fresh Indonesia, Dinamika Bio Pakologi, Serenity Bali, Windotu Apparel, Energy Event, Bali Express Laundry, Service Brankas.com, Youtap Loyalty

3. **Companies I've Worked With**
   - Daftar logo/nama perusahaan klien (mis. Oleifi Group, Youtap Indonesia, Dinamika Bio Pakologi)

4. **Let's Work Together (CTA)**
   - Ajakan kontak/kolaborasi
   - Form kontak singkat atau tombol menuju email/WhatsApp

---

## 🎨 Panduan Desain (Design Tokens)

* **Warna dasar:** Background gelap (near-black, mis. `#0A0A0A` / `#111111`)
* **Warna aksen:** Kuning/oranye terang untuk CTA & highlight (mengikuti tone di header)
* **Tipografi:**
  - Heading: font tebal, ukuran besar, tracking rapat
  - Body: font sans-serif netral, ukuran nyaman dibaca
* **Elemen dekoratif:** doodle garis tangan (hand-drawn), grid tanda plus (+), pola garis diagonal
* **Layout:** grid asimetris pada hero, list vertikal dengan label angka pada bagian studi kasus

---

## ⚙️ Setup & Instalasi

```bash
# 1. Clone repository
git clone <repo-url>
cd portfolio-website

# 2. Install dependencies
npm install

# 3. Jalankan development server
npm run dev

# 4. Build untuk produksi
npm run build

# 5. Preview hasil build
npm run preview
```

### Environment Variables (jika menggunakan form kontak / API)
```env
VITE_CONTACT_FORM_ENDPOINT=
VITE_SITE_URL=
```

---

## ✅ Checklist Pengembangan

- [ ] Setup project Vite + Vue 3 + TypeScript
- [ ] Konfigurasi Tailwind CSS & dark theme
- [ ] Bangun komponen `HeroSection`
- [ ] Bangun komponen `ProjectCard` + data proyek di `data/projects.ts`
- [ ] Bangun `SelectedWorkSection` (loop dari data proyek)
- [ ] Bangun `CompaniesSection`
- [ ] Bangun `CTASection` + form kontak
- [ ] Tambahkan animasi scroll-reveal
- [ ] Optimasi gambar (WebP, lazy-load)
- [ ] SEO dasar (meta tags, Open Graph, favicon)
- [ ] Uji responsif (mobile, tablet, desktop)
- [ ] Deploy ke Vercel/Netlify
- [ ] Hubungkan custom domain

---

## 📈 Roadmap Selanjutnya (Opsional)

* Tambah halaman detail studi kasus per proyek (`/project/:slug`)
* Integrasi CMS headless (mis. Sanity/Notion API) agar proyek mudah diupdate tanpa redeploy
* Tambah mode blog/artikel
* Dark/light mode toggle
* Integrasi analytics (Plausible/GA4)

---

## 📄 Lisensi

Proyek pribadi — bebas digunakan sebagai referensi, mohon tidak menyalin konten/teks portofolio secara langsung.