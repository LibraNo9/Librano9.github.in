AOS.init();

var musik = "";

var audio = document.querySelector(".audio");
if (musik) {
  audio.src = musik;
}


function mulai() {
  audio.play();
  window.scrollTo(0, 0);
  document.querySelector(".open").style = "opacity: 0;";
  document.querySelector(".body").style = "overflow-y: scroll";
  setTimeout(function() {
    document.querySelector(".open").style.display = "none";
  }, 1200); 
}


function wa(isi) {
  window.open("https://api.whatsapp.com/send?text= " + isi);
}


async function tanya() {
  var {
    value: harapan
  } = await swal.fire({
    imageUrl: 'resources/lilin berdua.jpeg',
    title: 'Apa Harapan Mu Untuk Ku Sayangg?',
    input: 'text',
    showCancelButton: false
  })

  if (harapan) {
    await swal.fire({
      imageUrl: 'resources/panpan.jpg',
      title: 'Kirim langsung ke aku yaa',
  });

    wa(harapan);

  } else {
    await swal.fire({
      icon: 'error',
      title: 'jangan kosong lah cantkkk',

  });

    tanya();
  }
}
