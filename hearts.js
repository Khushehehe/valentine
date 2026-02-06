setInterval(()=>{
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random()*100 + "vw";
  heart.style.animationDuration = (3 + Math.random()*3) + "s";
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(),2000);
},1500);
