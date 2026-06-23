function toggle(element) {
  let content = element.nextElementSibling;

  if (content.style.display === "none") {
      content.style.display = "block";
  } else {
      content.style.display = "none";
  }
}

/* ANIMAÇÃO AO ROLAR */
window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
      const top = card.getBoundingClientRect().top;
      if (top < window.innerHeight - 50) {
          card.style.opacity = 1;
          card.style.transform = "translateY(0)";
      }
  });
});

/* estado inicial */
document.querySelectorAll(".card").forEach(card => {
  card.style.opacity = 0;
  card.style.transform = "translateY(50px)";
  card.style.transition = "0.5s";
});
