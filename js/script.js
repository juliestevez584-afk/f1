// Navegación: botón [data-go]
document.addEventListener("click", (e)=>{
  const go = e.target.closest("[data-go]");
  if(go){ window.location.href = go.getAttribute("data-go"); }
});

// Marcar link activo según URL
document.addEventListener("DOMContentLoaded", ()=>{
  const here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach(a=>{
    const href = a.getAttribute("href");
    if(here === href){ a.classList.add("is-active"); }
  });
  // Fade-in suave
  document.body.style.opacity = 0;
  requestAnimationFrame(()=>{
    document.body.style.transition = "opacity .6s ease";
    document.body.style.opacity = 1;
  });
});