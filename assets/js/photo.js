
function unhideLightbox(lightboxID) {

 document.getElementById('lightbox-overlay').classList.remove('hidden');


 document.getElementById(lightboxID).classList.remove('hidden');
}


function unhideLightbox1() {
   unhideLightbox("soo1");
}
document.getElementById("piko1").onclick = unhideLightbox1;

function unhideLightbox2() {
   unhideLightbox("soo2");

}

document.getElementById("piko2").onclick = unhideLightbox2;





function unhideLightbox3() {
   unhideLightbox("soo3");
}

document.getElementById("piko3").onclick = unhideLightbox3;



function closeLightbox(lightboxID) {

 document.getElementById('lightbox-overlay').classList.add('hidden');


 document.getElementById(lightboxID).classList.add('hidden');
}



function closeAllLightboxes() {

 var lightboxElements = document.getElementsByClassName('lightbox');


 for (var i = 0; i < lightboxElements.length; i++) {

   var id = lightboxElements[i].id;

   closeLightbox(id);
 }
}

document.getElementById('lightbox-overlay').onclick = closeAllLightboxes;
