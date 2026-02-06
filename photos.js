const photos = [];
for(let i = 1; i <= 26; i++){
  photos.push(`photos/p${i}.jpg`);
}


let photoInterval;

function startPhotos(){
  photoInterval = setInterval(()=>{
    const img = document.createElement("img");
    img.src = photos[Math.floor(Math.random()*photos.length)];
    img.className = "memory-photo";

    img.style.left = Math.random()*90 + "vw";
    img.style.animationDuration = (6 + Math.random()*4) + "s";

    document.body.appendChild(img);

    setTimeout(()=>img.remove(),4000);
  }, 3000);
}

function stopPhotos(){
  clearInterval(photoInterval);
}
