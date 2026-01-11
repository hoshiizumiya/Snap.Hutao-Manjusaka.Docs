---
headerDepth: 2
comment: false
index: false
---

**Peringatan: Bagian di bawah ini mungkin berisi informasi yang sudah usang, silakan kunjungi [GitHub](https://github.com/DGP-Studio/Snap.Hutao) untuk mendapatkan informasi terbaru.**

# Simposium Grup Pengembang Periode Kedua

Disalin dari [postingan diskusi GitHub](https://github.com/DGP-Studio/Snap.Hutao/discussions/280), diringkas dari diskusi grup

## Apakah format json untuk export achievement sekarang juga UIGF?

A: UIAF

## Dapatkah mengadaptasi import data sistem wish versi UEFI lama, seperti SG saja bisa

A: Pertama, itu disebut format UIGF, kedua, selalu diadaptasi, hanya aturan import export SG cukup longgar, jika Anda dari awal hingga akhir hanya menggunakan dan benar menggunakan produk kami, tidak akan ada masalah import export abnormal

## Kapan akan ada auto check update download seperti sg

A: Auto update tidak bisa diimplementasikan di paket MSIX, check update akan diluncurkan di versi selanjutnya.

## Saya login SG dan hutao di device yang sama, apakah dihitung sebagai satu device atau dua device

A: Dua device, secara teori setiap restart hutao setara dengan switch device

## Saya merasa beberapa halaman hutao loading lama, mempengaruhi pengalaman pengguna, rasanya interface hutao agak drop frame

A: Halaman statistik abyss di versi 1.2.6 sebelumnya memang ada masalah loading lambat, sudah diselesaikan di versi baru, jika ada masalah lag di halaman lain, biasanya karena GPU Anda tidak cukup kuat, atau hutao render melalui integrated graphics Anda.

## Statistik atribut sering tidak bisa load

A: Masalah legacy, bisa diselesaikan dengan backup data lalu delete `userdata.db`

## Apakah fitur custom webpage masih ada rencana

A: Sabar

::: tip Masalah dari sisi Microsoft, kami tidak bisa selesaikan

- Kadang menggunakan start as admin tidak bisa dapat permission admin, perlu close lalu start kedua kali
- Ukuran ikon hutao bisa diganti jadi kecil seperti ikon lain
- File registry yang ditulis, saat update ada masalah install, coba semua fix tidak berhasil, dalam proses uninstall reinstall untuk fix, apakah uninstall residual akan mempengaruhi reinstall

:::
