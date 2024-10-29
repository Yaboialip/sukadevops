# Menggunakan nginx sebagai web server
FROM nginx:alpine

# Menghapus konfigurasi default nginx
RUN rm -rf /usr/share/nginx/html/*

# Menyalin file proyek ke dalam direktori yang akan dilayani oleh nginx
COPY . /usr/share/nginx/html

# Expose port 80 untuk akses
EXPOSE 80
