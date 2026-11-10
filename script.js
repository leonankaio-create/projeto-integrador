
// =====================================
// ABRIR E FECHAR AS SEÇÕES
// =====================================

function toggle(element) {

  const content = element.nextElementSibling;

  // Verifica se existe conteúdo na seção
  if (!content || !content.classList.contains("content")) {
      return;
  }

  // Alterna entre aberto e fechado
  const vaiFechar = !content.classList.contains("escondido");

  content.classList.toggle("escondido", vaiFechar);

  // Atualiza o estado de acessibilidade
  element.setAttribute(
      "aria-expanded",
      String(!vaiFechar)
  );
}


// =====================================
// FUNCIONAMENTO PELO TECLADO
// =====================================

document.addEventListener("DOMContentLoaded", function () {

  const titulos = document.querySelectorAll(
      ".card h2[role='button']"
  );

  titulos.forEach(function (titulo) {

      titulo.addEventListener("keydown", function (event) {

          if (event.key === "Enter" || event.key === " ") {

              event.preventDefault();

              toggle(titulo);

          }

      });

  });


  // =====================================
  // ANIMAÇÕES DOS CARTÕES
  // =====================================

  const cards = document.querySelectorAll(".card");

  // Verifica se o navegador suporta IntersectionObserver
  if ("IntersectionObserver" in window) {

      const observer = new IntersectionObserver(

          function (entries) {

              entries.forEach(function (entry) {

                  if (entry.isIntersecting) {

                      entry.target.classList.add("visivel");

                      observer.unobserve(entry.target);

                  }

              });

          },

          {
              threshold: 0.1
          }

      );

      // Aplica a animação em todos os cartões
      cards.forEach(function (card) {

          card.classList.add("animar");

          observer.observe(card);

      });

  } else {

      // Alternativa para navegadores antigos
      cards.forEach(function (card) {

          card.classList.add("visivel");

      });

  }

});
