function startCountdown(date){
  const target = new Date(date).getTime();
  const timer = document.getElementById("timer");
  const unlockBtn = document.getElementById("unlock");
  const content = document.getElementById("content");
  let unlocked = false;

  const interval = setInterval(()=>{
    const now = Date.now();
    const diff = target - now;

    if(diff <= 0){
      timer.innerText = "Finalllyyyyyyyyy the time is up ❤️";

      if(!unlocked){
        unlockBtn.style.display = "inline-block";
      }
      return;
    }

    const d = Math.floor(diff / (1000*60*60*24));
    const h = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
    const m = Math.floor((diff%(1000*60*60))/(1000*60));
    const s = Math.floor((diff%(1000*60))/1000);

    timer.innerHTML = `Bas ab &nbsp<span style="font-weight:bold; color:#fff;">${d}d ${h}h ${m}m ${s}s</span> &nbsp aur fir meri princess ke liye ek chota sa surprise 💝`;


    // timer.innerText = `Bas ab ${d}d ${h}h ${m}m ${s}s time aur fir meri princess ke liye ek chota sa surprise`;
  },1000);

  // 🔓 global unlock handler
  window.unlock = function(){
    unlocked = true;

    if(content) content.classList.remove("hidden");
    if(unlockBtn) unlockBtn.style.display = "none";
    if(timer) timer.style.display = "none";

    // 🎭 show NEXT button after delay (if exists)
    setTimeout(()=>{
      const nextBtn = content?.querySelector(".next-btn");
      if(nextBtn) nextBtn.style.display = "inline-block";
    },1500);

    if(window.stopPhotos) stopPhotos();
  };
}
const pass = document.querySelector(".password");



