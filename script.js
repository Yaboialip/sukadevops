const readMoreButton = document.getElementById("readMoreButton");
const readMore1 = document.querySelector(
  ".read-more-1"
);

// Status awal: teks "Keberhasilan dimulai dengan" disembunyikan
readMore1.style.display = "none";

readMoreButton.addEventListener("click", () => {
  if (readMore1.style.display === "none") {
    readMore1.style.display = "block"; // Menampilkan teks
    readMoreButton.innerText = "Read Less"; // Mengganti teks tombol
  } else {
    readMore1.style.display = "none"; // Menyembunyikan teks
    readMoreButton.innerText = "Read More"; // Mengganti teks tombol kembali
  }
});

const readMoreButton2 = document.getElementById("readMoreButton2");
const readMore_2 = document.querySelector(
  ".readMore2"
);

// Status awal: teks "Keberhasilan dimulai dengan" disembunyikan
readMore_2.style.display = "none";

readMoreButton2.addEventListener("click", () => {
  if (readMore_2.style.display === "none") {
    readMore_2.style.display = "block"; // Menampilkan teks
    readMoreButton2.innerText = "Read Less"; // Mengganti teks tombol
  } else {
    readMore_2.style.display = "none"; // Menyembunyikan teks
    readMoreButton2.innerText = "Read More"; // Mengganti teks tombol kembali
  }
});

const readMoreButton3 = document.getElementById("readMoreButton3");
const readMore_3 = document.querySelector(
  ".readMore3"
);

// Status awal: teks "Keberhasilan dimulai dengan" disembunyikan
readMore_3.style.display = "none";

readMoreButton3.addEventListener("click", () => {
  if (readMore_3.style.display === "none") {
    readMore_3.style.display = "block"; // Menampilkan teks
    readMoreButton3.innerText = "Read Less"; // Mengganti teks tombol
  } else {
    readMore_3.style.display = "none"; // Menyembunyikan teks
    readMoreButton3.innerText = "Read More"; // Mengganti teks tombol kembali
  }
});

// Menggunakan JavaScript untuk mengarahkan ke footer saat tombol ditekan
document.getElementById("scrollButton").addEventListener("click", function () {
  const footerElement = document.querySelector(".footer");
  footerElement.scrollIntoView({ behavior: "smooth" });
});