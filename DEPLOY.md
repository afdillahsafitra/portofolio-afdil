# Publish ke Subdomain (cPanel)

Target: **https://portofolio.humantechnologysolutions.com**
(boleh diganti nama lain, langkahnya sama)

## 1. Buat subdomain

1. Login ke **cPanel** hosting `humantechnologysolutions.com`.
2. Buka **Domains** (atau **Subdomains** di cPanel versi lama) → **Create A New Domain**.
3. Isi domain: `portofolio.humantechnologysolutions.com`
4. **Document Root** otomatis terisi, misalnya `public_html/portofolio` (atau `portofolio.humantechnologysolutions.com`). Catat foldernya.
5. Klik **Submit**.

> Kalau DNS domain dikelola di luar cPanel (misalnya Cloudflare), tambahkan juga record
> `A` dengan nama `portofolio` yang mengarah ke IP server hosting (IP bisa dilihat di
> halaman depan cPanel → *Shared IP Address*).

## 2. Upload website

1. Buka **File Manager** → masuk ke folder Document Root dari langkah 1.
2. Klik **Upload** → pilih `portofolio-afdil.zip`.
3. Kembali ke folder tadi, klik kanan file zip → **Extract**.
4. Pastikan isi folder langsung seperti ini (bukan di dalam subfolder lagi):
   ```
   index.html
   .htaccess
   assets/
   ```
   `.htaccess` tersembunyi secara default — aktifkan lewat **Settings → Show Hidden Files**.
5. Hapus file `portofolio-afdil.zip` setelah diekstrak.

## 3. Aktifkan HTTPS (SSL gratis)

1. Buka **SSL/TLS Status** di cPanel.
2. Centang `portofolio.humantechnologysolutions.com` → **Run AutoSSL**.
3. Tunggu beberapa menit. `.htaccess` sudah otomatis mengarahkan `http://` ke `https://`.

## 4. Cek hasilnya

Buka https://portofolio.humantechnologysolutions.com dan coba:
- tombol chat WhatsApp dan template pesannya,
- form kontak (Send via WhatsApp / Email),
- tampilan di HP.

Perubahan DNS subdomain baru kadang butuh beberapa menit sampai beberapa jam.

## Update website nanti

Kalau ada perubahan desain:

```bash
npm install        # sekali saja
npm run package    # build CSS + buat dist/portofolio-afdil.zip
```

Lalu ulangi langkah 2 (upload & extract, timpa file lama).
