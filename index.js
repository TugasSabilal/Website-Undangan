function updateClock() {
    const now = new Date();
    const targetDate = new Date("2024-01-23"); // Tanggal target (misalnya: 23 Januari 2022)

    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
        // Waktu target telah tercapai atau berlalu
        document.getElementById("day").textContent = '00';
        document.getElementById("hour").textContent = '00';
        document.getElementById("minute").textContent = '00';
        document.getElementById("second").textContent = '00';
    } else {
        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        document.getElementById("day").textContent = days.toString().padStart(2, '0');
        document.getElementById("hour").textContent = (hours % 24).toString().padStart(2, '0');
        document.getElementById("minute").textContent = (minutes % 60).toString().padStart(2, '0');
        document.getElementById("second").textContent = (seconds % 60).toString().padStart(2, '0');
    }
}

updateClock();
setInterval(updateClock, 1000);

function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Silakan isi nama pengguna dan kata sandi terlebih dahulu :)");
        return false;
    } else {
        // Jika validasi berhasil, arahkan pengguna ke halaman selamat datang
        window.location.href = "home.html"; // Ganti dengan URL halaman selamat datang yang sesuai
        return true;
    }
}


const items = document.querySelectorAll(".item");
const overlays = document.querySelectorAll(".overlay");
const menus = document.querySelectorAll(".menu");

const expand = (item, i) => {
  let overlay = item.childNodes[1];
  let menu = item.childNodes[3];

  items.forEach((it, ind) => {
    if (i === ind) return;
    it.clicked = false;
  });

  //item
  gsap.killTweensOf(items);
  gsap.to(items, {
    width: item.clicked ? "10vw" : "8vw",
    duration: 2,
    ease: "elastic(1, .6)"
  });

  gsap.killTweensOf(item);
  item.clicked = !item.clicked;
  gsap.to(item, {
    width: item.clicked ? "25vw" : "10vw",
    duration: 2.5,
    ease: "elastic(1, .3)"
  });

  //overlay
  gsap.killTweensOf(overlays);
  gsap.to(overlays, {
    opacity: item.clicked ? "1" : "1",
    duration: 2,
    ease: "elastic(1, .6)"
  });

  gsap.killTweensOf(overlay);
  item.clicked = !item.clicked;
  gsap.to(overlay, {
    opacity: item.clicked ? "1" : "0",
    duration: 2.5,
    ease: "elastic(1, .3)"
  });

  //menu
  gsap.killTweensOf(menus);
  gsap.to(menus, {
    opacity: item.clicked ? "0" : "0",
    duration: 2,
    ease: "elastic(1, .6)"
  });

  gsap.killTweensOf(menu);
  item.clicked = !item.clicked;
  gsap.to(menu, {
    opacity: item.clicked ? "1" : "0",
    duration: 2.5,
    ease: "elastic(1, .3)"
  });
};

items.forEach((item, i) => {
  item.clicked = false;
  item.childNodes[1].clicked = false;
  item.childNodes[3].clicked = false;

  item.addEventListener("click", () => expand(item, i));
});

function initMap() {
  // Koordinat lokasi Anda
  var lokasi = { lat: -7.12345, lng: 123.45678 };

  // Membuat peta dengan koordinat yang sudah ditentukan
  var map = new google.maps.Map(document.getElementById('googleMap'), {
      zoom: 15,
      center: lokasi
  });

  // Menambahkan marker ke peta
  var marker = new google.maps.Marker({
      position: lokasi,
      map: map,
      title: 'Lokasi Kami'
  });
}

var elemen = document.getElementById('namaElemen');
if (elemen) {
    elemen.addEventListener('event', function() {
        // Code to handle the event
    });
}

var elemen = document.getElementById('namaElemen');
if (elemen) {
    elemen.textContent = 'Teks yang ingin Anda set';
}
