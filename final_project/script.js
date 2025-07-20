document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("loadingScreen");
  const progressBar = document.getElementById("loadingProgress");

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 10 + 5); // add 5-15%
    progressBar.style.width = `${Math.min(progress, 100)}%`;

    if (progress >= 100) {
      clearInterval(interval);
      loadingScreen.classList.add("fade-out");
      setTimeout(() => loadingScreen.style.display = "none", 1000);
    }
  }, 300);
});

document.getElementById("scroll-left").addEventListener("click", () => {
  document.getElementById("project-carousel").scrollBy({ left: -300, behavior: 'smooth' });
});

document.getElementById("scroll-right").addEventListener("click", () => {
  document.getElementById("project-carousel").scrollBy({ left: 300, behavior: 'smooth' });
});

function openProject(page) {
  const loading = document.getElementById("loadingScreen") || document.getElementById("loading-screen");
  if (loading) {
    loading.classList.remove("hidden");
    setTimeout(() => {
      window.location.href = page;
    }, 3000); // Simulate loading screen
  } else {
    // Fallback: direct open if loading screen missing
    window.location.href = page;
  }
  
}


 



