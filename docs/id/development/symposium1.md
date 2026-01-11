---
headerDepth: 2
comment: false
index: false
---

**Peringatan: Bagian di bawah ini mungkin berisi informasi yang sudah usang, silakan kunjungi [GitHub](https://github.com/DGP-Studio/Snap.Hutao) untuk mendapatkan informasi terbaru.**

# Simposium Grup Pengembang Periode Pertama

Disalin dari [postingan diskusi GitHub](https://github.com/DGP-Studio/Snap.Hutao/discussions/46), diringkas dari diskusi grup

## Mengapa Hutao di PC dibuat sebagai aplikasi dengan format mirip UWP?

Mengembangkan aplikasi yang dikemas MSIX adalah tren pengembangan desktop, pengalaman pengembangan lebih baik, pengalaman pengguna juga dapat ditingkatkan.

## Apa fungsi Hutao, dan apa bedanya dengan SG?

Hutao adalah versi next-gen dari SG, lebih update/lebih cepat/lebih kuat.

## Apakah Hutao akan mewarisi semua fungsi SG? Apakah beberapa fungsi SG akan dihapus di Hutao?

Sebagian besar fungsi akan sepenuhnya diwarisi dan ditingkatkan. Beberapa fungsi akan muncul di Hutao dalam bentuk fungsi terintegrasi.

## Mengapa tidak menggabungkan Hutao dan SG menjadi satu, tapi harus dipisah? Apa perbedaan fokus dengan SG?

Snap Genshin dikembangkan menggunakan teknologi WPF, yang berbasis DirectX 9, sedangkan Hutao dikembangkan menggunakan WinUI 3, teknologi baru ini berbasis DirectX 12 dan teknologi tampilan lainnya yang lebih baru, memberikan efek yang lebih baik, dan juga lebih mudah dikembangkan, Hutao mirip dengan Snap Genshin, tetapi fokus pada pengalaman pengguna yang lancar dan sederhana, juga lebih memperhatikan kemampuan pemeliharaan arsitektur program, lebih memperhatikan performa.

## Selain migrasi fungsi lama SG, apakah akan ada pengembangan fungsi baru?

Seiring perkembangan Genshin Impact, kami juga akan meluncurkan lebih banyak fungsi.

## Apakah SG tidak akan pernah diupdate lagi? Apakah SG sudah tidak bisa digunakan?

~~Tidak akan diupdate lagi kecuali ada masalah data yang serius. Karena kurangnya pemeliharaan, tidak dijamin kapan karena alasan tertentu yang tidak pasti akan menyebabkan beberapa fungsi SG gagal (seperti fungsi check-in yang hilang).~~
Snap.Genshin telah berhenti diupdate, proyek telah diarsipkan

## Di mana dokumentasi penggunaan Hutao?

~~Dokumentasi penggunaan @Masterain98 sedang dibuat, segera akan bertemu dengan kalian.~~ Yang kamu lihat sekarang adalah itu

## Apakah ikon Hutao akan diupdate lagi?

Tidak, kami memiliki hak cipta ikon Hutao.

## Kapan naik ke Microsoft Store? Apakah naik ke Microsoft Store tidak perlu mempercayai sertifikat sendiri? Apakah Hutao akan online update di masa depan?

Akan naik setelah semua fungsi sempurna. Tidak perlu sertifikat. Setelah naik, dapat mendukung update online.

## Apakah mempertimbangkan menambahkan fungsi menghitung damage berdasarkan panel tampilan karakter? Kapan Hutao bisa jadi launcher, unlock framerate? Apakah fungsi borderless fullscreen akan didukung di masa depan?

Fungsi panel akan dikembangkan setelah restrukturisasi sistem pengguna, dan akan mengimplementasikan fungsi terkait peluncuran game setelah menyelesaikan fungsi query panel. Parameter peluncuran termasuk di dalamnya.

## Apakah database Hutao dan Hutao ada hubungannya? Kapan naik database Hutao?

~~Database Hutao adalah bagian dari HutaoAPI, berisi data terkait abyss, HutaoAPI adalah RESTful API yang digunakan Hutao, juga terbuka untuk developer aplikasi lain, biaya akses rendah, keuntungan akses tinggi. Database Hutao akan diimplementasikan di versi selanjutnya.~~ Sudah diimplementasikan

## Apakah akan menempatkan Hutao di taskbar kanan bawah? Apakah mempertimbangkan menambahkan illustrasi di karakter?

~~Dasar tidak akan mempertimbangkan~~. Mungkin akan mempertimbangkan di masa depan.

Anda dapat meluncurkan game dengan cepat melalui quick launch bar, metode spesifik dapat dilihat [dokumen ini](../features/game-launcher.md#bagaimana-meluncurkan-game-dengan-cepat-melalui-hutao-toolbox)

## Apakah akan ada mobile version di masa depan? Apakah mempertimbangkan membuat widget desktop ponsel berdasarkan Hutao? Apakah Hutao akan mendukung plugin? Apakah Hutao akan memiliki dokumentasi pengembangan plugin?

Tidak akan mempertimbangkan mobile dalam waktu dekat. Widget desktop ponsel juga dasar tidak akan mempertimbangkan. Tidak akan mendukung plugin lagi. Juga tidak akan ada dokumentasi plugin.

## Berapa jauh lagi untuk mendukung akun luar negeri? Apakah akan mengintegrasikan plugin lain seperti Kongying Tavern?

~~Dukungan terkait Hoyolab membutuhkan bantuan developer lain. Karena perbedaan tech stack, sulit diintegrasikan.~~

Berkat kekuatan komunitas open source, saat ini advanced launcher, export wish record dan achievement management sudah mendukung international server.

## Apakah berniat menambahkan fungsi berbayar, atau hanya mengandalkan donasi?

~~Karena server membutuhkan biaya, fungsi terkait penyimpanan server mungkin akan dikenai biaya.~~ Proyek Snap.Hutao dan terkait adalah proyek nirlaba

## Apakah menggunakan cinta untuk menghasilkan listrik? Apakah mengembangkan Hutao dilakukan di waktu senggang?

Tentu saja.
