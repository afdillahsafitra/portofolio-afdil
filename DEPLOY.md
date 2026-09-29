# Publish ke Subdomain (cPanel)

Target: **https://afdillahsafitra.humantechnologysolutions.com**
(boleh diganti nama lain, langkahnya sama)

## 1. Buat subdomain

1. Login ke **cPanel** hosting `humantechnologysolutions.com`.
2. Buka **Domains** (atau **Subdomains** di cPanel versi lama) → **Create A New Domain**.
3. Isi domain: `afdillahsafitra.humantechnologysolutions.com`
4. **Document Root** otomatis terisi, misalnya `public_html/afdillahsafitra` (atau `afdillahsafitra.humantechnologysolutions.com`). Catat foldernya.
5. Klik **Submit**.

> Kalau DNS domain dikelola di luar cPanel (misalnya Cloudflare), tambahkan juga record
> `A` dengan nama `afdillahsafitra` yang mengarah ke IP server hosting (IP bisa dilihat di
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
2. Centang `afdillahsafitra.humantechnologysolutions.com` → **Run AutoSSL**.
3. Tunggu beberapa menit. `.htaccess` sudah otomatis mengarahkan `http://` ke `https://`.

### Muncul "Your connection is not private" (`ERR_CERT_AUTHORITY_INVALID`)?

Artinya subdomain masih memakai sertifikat bawaan server (*self-signed*), belum sertifikat asli.

1. **SSL/TLS Status** → cari `afdillahsafitra.humantechnologysolutions.com`:
   - Status **"AutoSSL Domain Validated"** / gembok hijau → tunggu 5–15 menit, lalu buka ulang (coba jendela Incognito).
   - Status merah / **"DCV failed"** → arahkan kursor ke ikon status untuk membaca alasannya, lalu lanjut ke poin 2–4.
2. Pastikan file `.htaccess` versi terbaru sudah ter-upload (versi ini membiarkan folder
   `/.well-known/` tetap bisa diakses lewat `http://`, yang dibutuhkan untuk verifikasi SSL).
   Lalu klik **Run AutoSSL** lagi.
3. Tidak ada tombol AutoSSL? Cari menu **Let's Encrypt™ SSL** di cPanel → **Issue** untuk subdomain ini.
4. DNS dikelola di **Cloudflare**? Pastikan record `afdillahsafitra` ada. Kalau awan oranye (proxy)
   aktif, set **SSL/TLS → Full**; atau matikan proxy (awan abu-abu) dulu sampai AutoSSL berhasil.
5. Masih gagal setelah 1×24 jam → hubungi support hosting dan minta:
   *"Tolong aktifkan AutoSSL / SSL untuk subdomain afdillahsafitra.humantechnologysolutions.com"*.

## 4. Cek hasilnya

Buka https://afdillahsafitra.humantechnologysolutions.com dan coba:
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
