/* =========================================================================
   GALERIA DE CONTEÚDO — LÓGICA DA GALERIA
   - Abre um modal por tema (card)
   - Navega por setas, teclado (← →) e swipe
   - Pré-carrega imagens vizinhas
   - Esconde a seta quando não há mais imagens naquela direção
   ========================================================================= */
"use strict";

/* =========================================================
   1. DADOS DAS GALERIAS
   ========================================================= */
const galleryData = {
  montanhas: {
    title: "MONTANHAS",
    images: [
      { src: "./assets/imagem1.jpg",  caption: "Pico nevado ao amanhecer, com a primeira luz dourada tocando os cumes e um vale coberto por um leve nevoeiro.", credit: "Foto: Nome Sobrenome" },
      { src: "./assets/imagem2.webp", caption: "Cadeia de montanhas refletida em um lago de águas calmas, cercada por pinheiros e céu limpo.", credit: "Foto: Nome Sobrenome" },
      { src: "./assets/imagem3.webp", caption: "Trilha entre encostas rochosas, com nuvens baixas passando entre os picos ao fundo.", credit: "Foto: Nome Sobrenome" },
      { src: "./assets/imagem4.webp", caption: "Vista panorâmica do topo ao entardecer, com camadas de montanhas se perdendo no horizonte.", credit: "Foto: Nome Sobrenome" },
      { src: "./assets/imagem5.webp", caption: "Formação rochosa iluminada pelo sol da tarde, contrastando com o céu azul profundo.", credit: "Foto: Nome Sobrenome" },
    ],
  },
  praias: {
    title: "PRAIAS",
    images: [
      { src: "./assets/imagem6.webp", caption: "Ondas suaves quebrando na areia clara ao pôr do sol, com tons alaranjados refletidos na água.", credit: "Foto: Nome Sobrenome" },
      { src: "./assets/imagem7.webp", caption: "Enseada de águas turquesa cercada por falésias verdes e um céu de poucas nuvens.", credit: "Foto: Nome Sobrenome" },
      { src: "./assets/imagem8.webp", caption: "Coqueiros inclinados sobre a faixa de areia, emoldurando o mar aberto ao horizonte.", credit: "Foto: Nome Sobrenome" },
      { src: "./assets/imagem9.webp", caption: "Piscinas naturais formadas entre as rochas durante a maré baixa.", credit: "Foto: Nome Sobrenome" },
    ],
  },
  florestas: {
    title: "FLORESTAS",
    images: [
      { src: "./assets/imagem10.webp", caption: "Raios de sol atravessando a copa densa de uma floresta úmida, iluminando a vegetação rasteira.", credit: "Foto: Nome Sobrenome" },
      { src: "./assets/imagem11.webp", caption: "Trilha coberta de folhas em meio a árvores altas, envolta por um clima de neblina.", credit: "Foto: Nome Sobrenome" },
      { src: "./assets/imagem12.webp", caption: "Riacho de águas cristalinas serpenteando entre pedras cobertas de musgo verde.", credit: "Foto: Nome Sobrenome" },
      { src: "./assets/imagem13.webp", caption: "Floresta de outono com folhagem em tons de vermelho, laranja e amarelo.", credit: "Foto: Nome Sobrenome" },
    ],
  },
  desertos: {
    title: "DESERTOS",
    images: [
      { src: "./assets/imagem14.webp", caption: "Dunas onduladas ao entardecer, com o vento desenhando linhas suaves sobre a areia dourada.", credit: "Foto: Nome Sobrenome" },
      { src: "./assets/imagem15.webp", caption: "Céu estrelado sobre o deserto, com a Via Láctea visível acima do horizonte plano.", credit: "Foto: Nome Sobrenome" },
      { src: "./assets/imagem16.webp", caption: "Formações rochosas avermelhadas esculpidas pela erosão ao longo de milhares de anos.", credit: "Foto: Nome Sobrenome" },
      { src: "./assets/imagem17.webp", caption: "Oásis isolado com algumas palmeiras cercadas pela imensidão árida.", credit: "Foto: Nome Sobrenome" },
    ],
  },
  cachoeiras: {
    title: "CACHOEIRAS",
    images: [
      { src: "./assets/imagem18.webp", caption: "Queda d'água imponente despencando entre paredões de rocha cobertos de vegetação.", credit: "Foto: Nome Sobrenome" },
      { src: "./assets/imagem19.webp", caption: "Cachoeira em longa exposição, com a água em efeito sedoso caindo sobre uma piscina natural.", credit: "Foto: Nome Sobrenome" },
      { src: "./assets/imagem20.webp", caption: "Pequenas quedas em cascata formando degraus naturais no meio da mata.", credit: "Foto: Nome Sobrenome" },
      { src: "./assets/imagem21.webp", caption: "Arco-íris se formando na névoa criada pela força da queda d'água.", credit: "Foto: Nome Sobrenome" },
    ],
  },
  campos: {
    title: "CAMPOS",
    images: [
      { src: "./assets/imagem22.webp", caption: "Campo de flores silvestres se estendendo até o horizonte sob um céu de verão.", credit: "Foto: Nome Sobrenome" },
      { src: "./assets/imagem23.webp", caption: "Plantação ondulada balançando ao vento, com uma árvore solitária ao centro.", credit: "Foto: Nome Sobrenome" },
      { src: "./assets/imagem24.webp", caption: "Colinas verdes ao amanhecer, cobertas por uma fina camada de orvalho.", credit: "Foto: Nome Sobrenome" },
      { src: "./assets/imagem25.webp", caption: "Estrada de terra cortando um vasto campo dourado no fim da tarde.", credit: "Foto: Nome Sobrenome" },
    ],
  },
  auroras: {
    title: "AURORAS",
    images: [
      { src: "./assets/imagem26.webp", caption: "Aurora boreal em tons de verde e violeta dançando sobre um lago congelado.", credit: "Foto: Nome Sobrenome" },
      { src: "./assets/imagem27.webp", caption: "Cortinas de luz colorindo o céu noturno acima de montanhas nevadas.", credit: "Foto: Nome Sobrenome" },
      { src: "./assets/imagem28.webp", caption: "Reflexo da aurora nas águas calmas de um fiorde, sob um céu repleto de estrelas.", credit: "Foto: Nome Sobrenome" },
      { src: "./assets/imagem29.webp", caption: "Cabana isolada na neve iluminada pela luz verde da aurora ao fundo.", credit: "Foto: Nome Sobrenome" },
    ],
  },
};

/* Imagem exibida caso o arquivo real não seja encontrado */
const FALLBACK_IMAGE = "./assets/placeholder.svg";

/* =========================================================
   2. ESTADO
   ========================================================= */
let currentTheme = null;
let currentIndex = 0;

/* =========================================================
   3. REFERÊNCIAS DO DOM (cacheadas uma vez)
   ========================================================= */
const dom = {};

function cacheDom() {
  dom.modal = document.getElementById("galleryModal");
  dom.image = document.getElementById("galleryImage");
  dom.title = document.getElementById("galleryTitle");
  dom.caption = document.getElementById("galleryCaption");
  dom.credit = document.getElementById("galleryCredit");
  dom.leftArrow = document.querySelector("#galleryModal .nav-arrow.left");
  dom.rightArrow = document.querySelector("#galleryModal .nav-arrow.right");
}

/* =========================================================
   4. PRELOAD DAS IMAGENS VIZINHAS
   ========================================================= */
function preloadAdjacentImages(theme, index) {
  const data = galleryData[theme];
  if (!data || data.images.length <= 1) return;
  const next = data.images[index + 1];
  const prev = data.images[index - 1];
  if (next) new Image().src = next.src;
  if (prev) new Image().src = prev.src;
}

/* =========================================================
   5. ATUALIZA A GALERIA
   ========================================================= */
function updateGallery() {
  const data = galleryData[currentTheme];
  if (!data) return;

  const item = data.images[currentIndex];
  const total = data.images.length;

  // Imagem principal + fallback se não carregar
  if (dom.image) {
    dom.image.onerror = () => {
      dom.image.onerror = null;
      dom.image.src = FALLBACK_IMAGE;
    };
    dom.image.src = item.src;
    dom.image.alt =
      item.alt ||
      (item.caption ? item.caption.split(".")[0] : "") ||
      `${data.title}, imagem ${currentIndex + 1} de ${total}`;
  }

  if (dom.title) dom.title.textContent = data.title;

  if (dom.caption) {
    dom.caption.textContent = item.caption || "";
    dom.caption.setAttribute(
      "aria-label",
      `Imagem ${currentIndex + 1} de ${total}. ${item.caption || ""}`
    );
  }

  if (dom.credit) dom.credit.textContent = item.credit || "";

  // Setas: escondidas nos extremos (mas ocupam espaço para não "pular")
  if (dom.leftArrow) dom.leftArrow.style.visibility = currentIndex === 0 ? "hidden" : "visible";
  if (dom.rightArrow) dom.rightArrow.style.visibility = currentIndex === total - 1 ? "hidden" : "visible";

  preloadAdjacentImages(currentTheme, currentIndex);
}

/* =========================================================
   6. NAVEGAÇÃO
   ========================================================= */
function goPrev() {
  if (!galleryData[currentTheme] || currentIndex === 0) return;
  currentIndex--;
  updateGallery();
}

function goNext() {
  const data = galleryData[currentTheme];
  if (!data || currentIndex === data.images.length - 1) return;
  currentIndex++;
  updateGallery();
}

/* =========================================================
   7. ABERTURA DO MODAL
   ========================================================= */
function openGallery(theme) {
  if (!galleryData[theme]) return;
  currentTheme = theme;
  currentIndex = 0;
  updateGallery();

  if (!dom.modal || typeof bootstrap === "undefined") {
    console.warn("Bootstrap não carregou — o modal não pode ser aberto.");
    return;
  }
  const instance = bootstrap.Modal.getOrCreateInstance(dom.modal, {
    keyboard: true,
    focus: true,
  });
  instance.show();
}

/* =========================================================
   8. INICIALIZAÇÃO
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  cacheDom();

  // Clique nos cards + fallback das miniaturas
  document.querySelectorAll(".open-gallery").forEach((card) => {
    const thumb = card.querySelector("img");
    if (thumb) {
      thumb.addEventListener("error", function handleErr() {
        thumb.removeEventListener("error", handleErr);
        thumb.src = FALLBACK_IMAGE;
      });
    }
    card.addEventListener("click", (e) => {
      e.preventDefault();
      openGallery(card.dataset.tema);
    });
  });

  // Setas de navegação (delegação de evento)
  document.addEventListener("click", (e) => {
    if (e.target.closest(".nav-arrow.left")) {
      e.stopPropagation();
      goPrev();
    } else if (e.target.closest(".nav-arrow.right")) {
      e.stopPropagation();
      goNext();
    }
  });

  // Teclado — só quando o modal está aberto
  document.addEventListener("keydown", (e) => {
    if (!dom.modal || !dom.modal.classList.contains("show")) return;
    if (e.key === "ArrowLeft") { e.preventDefault(); goPrev(); }
    else if (e.key === "ArrowRight") { e.preventDefault(); goNext(); }
    // ESC é tratado nativamente pelo Bootstrap (keyboard: true)
  });

  // Limpa o estado ao fechar o modal
  if (dom.modal) {
    dom.modal.addEventListener("hidden.bs.modal", () => {
      currentTheme = null;
      currentIndex = 0;
      if (dom.image) dom.image.removeAttribute("src");
    });
  }

  // Botão de tema (claro/escuro)
  const btnTheme = document.getElementById("btnTheme");
  if (btnTheme) {
    btnTheme.addEventListener("click", () => {
      const atual = document.documentElement.getAttribute("data-theme");
      const novo = atual === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", novo);
      try {
        localStorage.setItem("tema", novo);
      } catch (e) {
        /* localStorage indisponível — ignora */
      }
      btnTheme.setAttribute(
        "aria-label",
        novo === "light" ? "Ativar tema escuro" : "Ativar tema claro"
      );
    });
  }

  // Botão de tela cheia
  const btnFullscreen = document.getElementById("btnFullscreen");
  if (btnFullscreen) {
    btnFullscreen.addEventListener("click", () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    });
    document.addEventListener("fullscreenchange", () => {
      btnFullscreen.setAttribute("aria-pressed", String(!!document.fullscreenElement));
    });
  }

  initSwipe();
});

/* =========================================================
   9. SWIPE (toque) DENTRO DO MODAL
   ========================================================= */
function initSwipe() {
  let startX = 0;
  let startY = 0;

  document.addEventListener(
    "touchstart",
    (e) => {
      startX = e.changedTouches[0].clientX;
      startY = e.changedTouches[0].clientY;
    },
    { passive: true }
  );

  document.addEventListener(
    "touchend",
    (e) => {
      if (!dom.modal || !dom.modal.classList.contains("show")) return;
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;
      // Só um swipe horizontal claro dispara a navegação
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
        if (dx < 0) goNext();
        else goPrev();
      }
    },
    { passive: true }
  );
}
