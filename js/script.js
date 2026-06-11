// Dados das galerias
const galleryData = {
  galaxias: {
    title: "CATEGORIA UM",
    images: [
      {
        src: "./assets/imagem1.svg",
        caption:
          "IMAGEM GENÉRICA DE EXEMPLO, REPRESENTAÇÃO ILUSTRATIVA DO OBJETO EM DESTAQUE. ELA TEM FORMATO CARACTERÍSTICO COM DOIS ELEMENTOS PRINCIPAIS E OUTROS COMPONENTES MENORES.",
        credit: "Instituição A / Organização B",
      },
      {
        src: "./assets/imagem2.webp",
        caption:
          "O OBJETO APRESENTADO É O MAIS REPRESENTATIVO DO GRUPO DE ELEMENTOS QUE INCLUI ESTA COLEÇÃO. EM FORMA DEFINIDA, ESTÁ A DETERMINADA DISTÂNCIA DO PONTO DE REFERÊNCIA.",
        credit: "Instituição A / Organização B / Centro de Pesquisa",
      },
      {
        src: "./assets/imagem3.webp",
        caption:
          "OBJETO DE EXEMPLO, TAMBÉM POSSUI FORMA CARACTERÍSTICA E ESTÁ A DETERMINADA DISTÂNCIA DO PONTO DE REFERÊNCIA PRINCIPAL.",
        credit: "Organização A, Organização B / Acervo Digital",
      },
      {
        src: "./assets/imagem4.webp",
        caption:
          "O ELEMENTO REPRESENTADO É DO TIPO ILUSTRATIVO LOCALIZADO A DETERMINADA DISTÂNCIA DO PONTO DE REFERÊNCIA.",
        credit: "Organização A / Organização B",
      },
      {
        src: "./assets/imagem5.webp",
        caption: "O OBJETO DE EXEMPLO É PEQUENO E DE FORMATO IRREGULAR.",
        credit: "Organização A / Organização B, Pesquisador C",
      },
      {
        src: "./assets/imagem6.webp",
        caption:
          "DOIS ELEMENTOS SE ENCONTRAM: O MENOR E O MAIOR. ESSA IMAGEM FOI GERADA COM DADOS DE INSTRUMENTO DIGITAL E DE EQUIPAMENTO DE CAPTURA.",
        credit: "Organização A, Organização B, Organização C / Acervo Digital",
      },
    ],
  },
  estrelas: {
    title: "CATEGORIA DOIS",
    images: [
      {
        src: "./assets/imagem7.webp",
        caption:
          "O ELEMENTO CENTRAL DO GRUPO PRINCIPAL. ESTA IMAGEM MOSTRA A LUZ BRILHANTE DE UMA OCORRÊNCIA REGISTRADA.",
        credit: "Organização A / Departamento B / Instrumento C",
      },
      {
        src: "./assets/imagem8.webp",
        caption:
          "A IMAGEM MOSTRA UM OBJETO EM FORMAÇÃO. COM APENAS CERCA DE DETERMINADO TEMPO, ESTE JOVEM ELEMENTO ESTÁ EM MEIO A UMA REGIÃO DE COMPOSIÇÃO VARIADA EM FORMA DE AMPULHETA.",
        credit: "Organização A, Organização B, Organização C / Acervo Digital",
      },
      {
        src: "./assets/imagem9.webp",
        caption:
          "ELEMENTO DE REFERÊNCIA É O MAIS PRÓXIMO DO PRINCIPAL, A POUCO MAIS DE DETERMINADA DISTÂNCIA. É DO TIPO MENOR E ESTÁ NA REGIÃO ESPECÍFICA, QUE É VISÍVEL NO HEMISFÉRIO INDICADO.",
        credit: "Organização A / Organização B",
      },
      {
        src: "./assets/imagem10.webp",
        caption:
          "OBJETO DE REFERÊNCIA É UM EXEMPLO DE ELEMENTO QUE PASSOU POR TRANSFORMAÇÃO. ELE ESTÁ LOCALIZADO A DETERMINADA DISTÂNCIA, NA REGIÃO ESPECÍFICA.",
        credit:
          "Tipo A: Organização A / Departamento B; Tipo B: Organização A / Organização B / Organização C / Pesquisador D (Instituição A), Pesquisador E (Instituição B), Pesquisador F (Instituição C); Processamento: Organização A / Departamento B / Setor C",
      },
      {
        src: "./assets/imagem11.webp",
        caption:
          "OUTRO RESULTADO POSSÍVEL PARA UM ELEMENTO É SE TORNAR UM TIPO DIFERENTE. TEMOS UMA ILUSTRAÇÃO DE UM OBJETO COM CARACTERÍSTICAS ESPECÍFICAS.",
        credit: "Organização A / Pesquisador B (Instituição C)",
      },
    ],
  },
  sistemas: {
    title: "CATEGORIA TRÊS",
    images: [
      {
        src: "./assets/imagem12.webp",
        caption:
          "NESTA ILUSTRAÇÃO, OS ELEMENTOS SÃO RETRATADOS MUITO MAIS PRÓXIMOS DO QUE REALMENTE ESTÃO.",
        credit: "Organização A / Departamento B",
      },
      {
        src: "./assets/imagem13.webp",
        caption:
          "CONCEITO ILUSTRATIVO DO CONJUNTO REFERENCIADO. UM GRUPO COM UM ELEMENTO SEMELHANTE AO PRINCIPAL, E COM OUTROS COMPONENTES EM SUA ÓRBITA. ESTÁ A CERCA DE DETERMINADA DISTÂNCIA.",
        credit: "Organização A / Centro de Pesquisa B / Pesquisador C",
      },
    ],
  },
  planetas: {
    title: "CATEGORIA QUATRO",
    images: [
      {
        src: "./assets/imagem14.webp",
        caption:
          "IMAGEM DO OBJETO PRINCIPAL, TERCEIRO ELEMENTO EM DISTÂNCIA DO CENTRO, CAPTURADA PELO INSTRUMENTO DE REFERÊNCIA.",
        credit: "Instrumento A / Organização B",
      },
      {
        src: "./assets/imagem15.webp",
        caption:
          "IMAGEM DO OBJETO SECUNDÁRIO, O ELEMENTO MAIS PRÓXIMO DO CENTRO, CAPTURADA PELA SONDA ESPACIAL DE REFERÊNCIA.",
        credit:
          "Organização A / Instituição de Pesquisa B / Instituição C",
      },
      {
        src: "./assets/imagem16.webp",
        caption:
          "IMAGEM DO TERCEIRO OBJETO, CAPTURADA PELA SONDA ESPACIAL DE REFERÊNCIA. MAS, AO CONTRÁRIO DE SUA APARÊNCIA SERENA, O ELEMENTO É TOMADO POR CONDIÇÕES EXTREMAS E CARACTERÍSTICAS PARTICULARES.",
        credit: "Organização A / Departamento B",
      },
      {
        src: "./assets/imagem17.webp",
        caption:
          "OBJETO VIZINHO, EM IMAGEM CAPTURADA PELO INSTRUMENTO ESPACIAL DE REFERÊNCIA.",
        credit:
          "Organização A / Equipe de Pesquisa B / Pesquisador C, Pesquisador D, Pesquisador E, Pesquisador F, Pesquisador G",
      },
      {
        src: "./assets/imagem18.webp",
        caption:
          "OBJETO DE GRANDE PORTE, O MAIOR DO GRUPO PRINCIPAL. IMAGEM CAPTADA PELO INSTRUMENTO ESPACIAL DE REFERÊNCIA.",
        credit:
          "Organização A, Organização B, Organização C, Organização D, Pesquisador E (Instituição F), Pesquisador G (Instituição H), Pesquisador I (Instituição J), Pesquisador K (Instituição L), Pesquisador M (Instituição N)",
      },
      {
        src: "./assets/imagem19.webp",
        caption:
          "OBJETO COM ESTRUTURA CARACTERÍSTICA, COM IMAGENS CAPTURADAS PELO INSTRUMENTO ESPACIAL DE REFERÊNCIA.",
        credit:
          "Organização A, Organização B, Organização C, Organização D, Pesquisador E (Instituição F), Pesquisador G (Instituição H), Pesquisador I (Instituição J), Pesquisador K (Instituição L), Pesquisador M (Instituição N). Processamento: Pesquisador N / Acervo Digital",
      },
      {
        src: "./assets/imagem20.webp",
        caption:
          "OBJETO DE BAIXA TEMPERATURA. O TIPO GELADO É CERCADO POR ELEMENTOS MENORES E COMPONENTES NATURAIS. IMAGEM CAPTURADA PELO INSTRUMENTO ESPACIAL DE REFERÊNCIA.",
        credit:
          "Organização A, Organização B, Organização C, Organização D / Processamento: Pesquisador E (Instituição F)",
      },
      {
        src: "./assets/imagem21.webp",
        caption:
          "O OBJETO REFERENCIADO ESTÁ A DETERMINADO NÚMERO DE VEZES MAIS DISTANTE DO CENTRO DO QUE O PONTO DE PARTIDA. IMAGEM CAPTURADA PELO INSTRUMENTO ESPACIAL DE REFERÊNCIA.",
        credit: "Organização A, Organização B, Organização C / Acervo Digital",
      },
      {
        src: "./assets/imagem22.webp",
        caption:
          "OBJETO RECLASSIFICADO QUE ANTES ERA CONSIDERADO O NONO DO GRUPO E EM DATA ESPECÍFICA FOI REDEFINIDO COMO DO TIPO MENOR, APÓS DESCOBRIREM OUTROS ELEMENTOS NA MESMA REGIÃO.",
        credit: "Organização A / Departamento B / Equipe C",
      },
      {
        src: "./assets/imagem23.webp",
        caption:
          "ELEMENTO ÚNICO DO TIPO MENOR QUE ESTÁ NO GRUPO INTERNO. ELE FICA LOCALIZADO NA REGIÃO INTERMEDIÁRIA ENTRE DOIS OBJETOS PRINCIPAIS.",
        credit: "Organização A / Departamento B / Equipe C / Setor D",
      },
      {
        src: "./assets/imagem24.webp",
        caption:
          "O OBJETO EXTERNO TEM CERCA DE DETERMINADO NÚMERO DE VEZES A MASSA DO ELEMENTO DE REFERÊNCIA, SUA ESTRELA É PARECIDA COM O TIPO COMUM E ESTÁ A DETERMINADA DISTÂNCIA.",
        credit: "Organização A / Departamento B / Pesquisador C",
      },
      {
        src: "./assets/imagem25.webp",
        caption:
          "O OBJETO DO TIPO AMPLIADO, REPRESENTADO COM SUA ESTRELA NESTA CONCEPÇÃO ILUSTRATIVA, PROVAVELMENTE TEM UMA CAMADA MAIS ESPESSA QUE A DO ELEMENTO DE REFERÊNCIA, DE ACORDO COM UM ESTUDO PUBLICADO.",
        credit: "Organização A / Departamento B",
      },
    ],
  },
  satelites: {
    title: "CATEGORIA CINCO",
    images: [
      {
        src: "./assets/imagem26.webp",
        caption:
          "O ELEMENTO É O ÚNICO COMPONENTE NATURAL DO OBJETO PRINCIPAL E EXERCE INFLUÊNCIA SOBRE ELE, COMO A REGULAÇÃO DE FENÔMENOS PERIÓDICOS.",
        credit:
          "Organização A / Instituição de Pesquisa B / Instituição C",
      },
      {
        src: "./assets/imagem27.webp",
        caption:
          "OBJETO SECUNDÁRIO É O MAIOR DOS DOIS COMPONENTES DO ELEMENTO DE REFERÊNCIA. ELE ORBITA O ELEMENTO PRINCIPAL TRÊS VEZES POR PERÍODO.",
        credit: "Organização A / Departamento B / Instituição C",
      },
      {
        src: "./assets/imagem28.webp",
        caption:
          "ELEMENTO ESPECÍFICO É O QUARTO MAIOR DOS COMPONENTES DO OBJETO PRINCIPAL. E É CONSIDERADO UM DOS LUGARES MAIS PROMISSORES DO NOSSO GRUPO PARA ENCONTRAR AMBIENTES ADEQUADOS PARA DIFERENTES CONDIÇÕES.",
        credit:
          "Dados: Organização A / Departamento B / Equipe C Processamento: Pesquisador D",
      },
      {
        src: "./assets/imagem29.webp",
        caption:
          "COMPONENTE ESPECÍFICO É UM DOS SATÉLITES DO OBJETO PRINCIPAL E POSSUI A SUPERFÍCIE MAIS CARACTERÍSTICA DO GRUPO. COMO REFLETE DETERMINADA QUANTIDADE DE LUZ, A TEMPERATURA DA SUPERFÍCIE É EXTREMAMENTE BAIXA.",
        credit: "Organização A / Departamento B / Instrumento C",
      },
      {
        src: "./assets/imagem30.webp",
        caption:
          "ELEMENTO ESPECÍFICO É UMA DAS MAIORES PARTES DO OBJETO DE REFERÊNCIA, ACREDITA-SE QUE É FORMADO POR DIFERENTES COMPOSTOS E MATERIAIS.",
        credit: "Organização A / Departamento B",
      },
      {
        src: "./assets/imagem31.webp",
        caption:
          "COMPONENTE ESPECÍFICO É O MAIOR DOS ELEMENTOS DO OBJETO DE REFERÊNCIA. É INCOMUM PORQUE É O ÚNICO GRANDE COMPONENTE DO NOSSO GRUPO QUE ORBITA NA DIREÇÃO OPOSTA À ROTAÇÃO DO SEU OBJETO PRINCIPAL.",
        credit: "Organização A / Departamento B",
      },
    ],
  },
  corpos: {
    title: "CATEGORIA SEIS",
    images: [
      {
        src: "./assets/imagem32.webp",
        caption:
          "IMAGEM DO OBJETO DE REFERÊNCIA PASSANDO PELA REGIÃO ESPECÍFICA. NO MOMENTO DESTA IMAGEM, O ELEMENTO ESTAVA A DETERMINADA DISTÂNCIA DO PONTO DE REFERÊNCIA.",
        credit: "Organização A / Departamento B",
      },
      {
        src: "./assets/imagem33.webp",
        caption:
          "IMAGEM DO SEGUNDO OBJETO DE REFERÊNCIA PASSANDO PRÓXIMO AO ELEMENTO PRINCIPAL, EM IMAGEM CAPTURADA PELO INSTRUMENTO ESPACIAL DE REFERÊNCIA.",
        credit: "Organização A, Organização B, Organização C, Organização D, Organização E",
      },
      {
        src: "./assets/imagem34.webp",
        caption:
          "IMAGEM DE OBJETO DO TIPO ROCHOSO DO NOSSO GRUPO PRINCIPAL. ÀS VEZES CHAMADOS DE ELEMENTOS MENORES, SÃO REMANESCENTES ROCHOSOS E SEM COMPOSIÇÃO DEFINIDA DA FORMAÇÃO INICIAL DO SISTEMA.",
        credit: "Organização A / Departamento B / Equipe C / Setor D",
      },
    ],
  },
  exploracao: {
    title: "CATEGORIA SETE",
    images: [
      {
        src: "./assets/imagem35.webp",
        caption:
          "EM DATA ESPECÍFICA, A SONDA DE REFERÊNCIA FOI A PRIMEIRA A POUSAR NA REGIÃO INDICADA DO OBJETO PRINCIPAL.",
        credit: "Organização A / Pesquisador B / Pesquisador C",
      },
      {
        src: "./assets/imagem36.webp",
        caption:
          "O INSTRUMENTO ESPACIAL DE REFERÊNCIA, EM ÓRBITA AO REDOR DO OBJETO PRINCIPAL DESDE DATA ESPECÍFICA, MUDOU A COMPREENSÃO DA HUMANIDADE SOBRE O TEMA. TRAZENDO INFORMAÇÕES DESDE A COMPOSIÇÃO DE ELEMENTOS À DESCOBERTA DE FENÔMENOS.",
        credit: "Organização A / Departamento B",
      },
      {
        src: "./assets/imagem37.webp",
        caption:
          "TESTES DO EQUIPAMENTO DE REFERÊNCIA, NO ANO ESPECÍFICO. OS PRINCIPAIS OBJETIVOS DA MISSÃO SÃO CARACTERIZAR O AMBIENTE DO SISTEMA E ESTUDAR O ESPAÇO CORRESPONDENTE.",
        credit: "Organização A / Departamento B",
      },
      {
        src: "./assets/imagem38.webp",
        caption:
          "O VEÍCULO DE EXPLORAÇÃO DE REFERÊNCIA ESTÁ NO OBJETO INDICADO E BUSCA SINAIS DE CONDIÇÕES ANTERIORES E COLETA AMOSTRAS DE MATERIAIS PARA POSSÍVEL ANÁLISE.",
        credit: "Organização A / Departamento B / Equipe C",
      },
      {
        src: "./assets/imagem39.webp",
        caption:
          "NA IMAGEM, A SONDA ESPACIAL DE REFERÊNCIA ESTÁ SENDO PREPARADA PARA TESTES DE VERIFICAÇÃO. A MISSÃO É A PRIMEIRA DO TIPO A COLETAR UMA AMOSTRA DE UM ELEMENTO ESPECÍFICO.",
        credit: "Pesquisador A / Organização B",
      },
      {
        src: "./assets/imagem40.webp",
        caption:
          "O INSTRUMENTO ESPACIAL DE REFERÊNCIA ESTUDA TODAS AS FASES DA HISTÓRIA DO NOSSO GRUPO E FOI LANÇADO EM DATA ESPECÍFICA. SUA ÓRBITA É AO REDOR DO ELEMENTO CENTRAL.",
        credit: "Organização A / Departamento B",
      },
    ],
  },
};
/* =========================================================
   ESTADO
========================================================= */
let currentTheme = null;
let currentIndex = 0;

/* =========================================================
   PRELOAD
========================================================= */
function preloadAdjacentImages(theme, index) {
  if (!galleryData[theme]) return;

  const images = galleryData[theme].images;
  if (images.length <= 1) return;

  if (index + 1 < images.length) new Image().src = images[index + 1].src;
  if (index - 1 >= 0) new Image().src = images[index - 1].src;
}

/* =========================================================
   UPDATE GALERIA (ACESSÍVEL)
========================================================= */
function updateGallery() {
  if (!currentTheme) return;

  const themeData = galleryData[currentTheme];
  const item = themeData.images[currentIndex];
  const totalImages = themeData.images.length;

  /* ===== IMAGEM ===== */
  const img = document.getElementById("galleryImage");
  img.src = item.src;

  // 🔊 ALT acessível
  img.alt =
    item.alt ||
    item.caption?.split(".")[0] ||
    `${themeData.title}, imagem ${currentIndex + 1} de ${totalImages}`;

  /* ===== MODAL (classe dinâmica por imagem) ===== */
  const modal = document.getElementById("galleryModal");

  [...modal.classList].forEach(c => {
    if (c.startsWith("img_")) modal.classList.remove(c);
  });

  const match = item.src.match(/(img_g\d+f\d+)/i);
  if (match) modal.classList.add(match[1]);

  /* ===== TÍTULO ===== */
  const title = document.getElementById("galleryTitle");
  title.textContent = themeData.title;

  const titleWrapper = title.closest(".card-title-wrapper");
  titleWrapper.classList.remove("long-title", "extra-long-title");

  const wordCount = themeData.title.trim().split(/\s+/).length;
  if (wordCount >= 2) titleWrapper.classList.add("long-title");
  if (wordCount >= 3) titleWrapper.classList.add("extra-long-title");

  /* ===== DESCRIÇÃO (aria-live já cuida da leitura) ===== */
  const caption = document.getElementById("galleryCaption");
  caption.textContent = item.caption || "";

  const descWrapper = caption.closest(".card-description-wrapper");
  descWrapper.classList.remove(
    "short-description",
    "long-description",
    "extra-long-description"
  );

  const len = item.caption?.length || 0;
  if (len > 190) descWrapper.classList.add("extra-long-description");
  else if (len > 150) descWrapper.classList.add("long-description");
  else descWrapper.classList.add("short-description");

  /* ===== CRÉDITO ===== */
  const verticalLabel = modal.querySelector(".vertical-label");
  verticalLabel.textContent = item.credit || "";

  verticalLabel.classList.remove("long-credit", "extra-long-credit");

  const creditLen = item.credit?.length || 0;
  if (creditLen > 200) verticalLabel.classList.add("extra-long-credit");
  else if (creditLen > 45) verticalLabel.classList.add("long-credit");

  /* força repaint (mantém sua lógica antiga) */
  verticalLabel.style.display = "none";
  verticalLabel.offsetHeight;
  verticalLabel.style.display = "block";

  /* ===== SETAS ===== */
  const left = modal.querySelector(".nav-arrow.left");
  const right = modal.querySelector(".nav-arrow.right");

  if (totalImages <= 1) {
    left.style.display = "none";
    right.style.display = "none";
  } else {
    left.style.display = currentIndex === 0 ? "none" : "flex";
    right.style.display = currentIndex === totalImages - 1 ? "none" : "flex";
  }

  /* 🔊 Anúncio leve de navegação */
  caption.setAttribute(
    "aria-label",
    `Imagem ${currentIndex + 1} de ${totalImages}. ${item.caption || ""}`
  );

  preloadAdjacentImages(currentTheme, currentIndex);
}

/* =========================================================
   NAVEGAÇÃO
========================================================= */
function goPrev() {
  if (currentIndex > 0) {
    currentIndex--;
    updateGallery();
  }
}

function goNext() {
  const total = galleryData[currentTheme].images.length;
  if (currentIndex < total - 1) {
    currentIndex++;
    updateGallery();
  }
}

/* =========================================================
   ABERTURA DO MODAL (FOCO ACESSÍVEL)
========================================================= */
document.querySelectorAll(".open-gallery").forEach(card => {
  card.addEventListener("click", () => {
    const theme = card.dataset.tema;
    if (!galleryData[theme]) return;

    currentTheme = theme;
    currentIndex = 0;
    updateGallery();

    const modalEl = document.getElementById("galleryModal");
    let modal = bootstrap.Modal.getInstance(modalEl);
    if (!modal) modal = new bootstrap.Modal(modalEl);
    modal.show();

    // 🔊 move foco para o modal
    setTimeout(() => modalEl.focus(), 300);
  });
});

/* =========================================================
   EVENTOS
========================================================= */
document.addEventListener("click", e => {
  if (e.target.closest(".nav-arrow.left")) goPrev();
  if (e.target.closest(".nav-arrow.right")) goNext();
});

document.addEventListener("keydown", e => {
  const modal = document.getElementById("galleryModal");
  if (!modal.classList.contains("show")) return;

  if (e.key === "ArrowLeft") goPrev();
  if (e.key === "ArrowRight") goNext();
  if (e.key === "Escape") {
    bootstrap.Modal.getInstance(modal)?.hide();
  }
});

/* =========================================================
   FULLSCREEN (ACESSÍVEL)
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const btnFullscreen = document.getElementById("btnFullscreen");
  if (!btnFullscreen) return;

  const iconPath = btnFullscreen.querySelector("path");

  const iconExpand =
    "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z";
  const iconCompress =
    "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z";

  function updateIcon(state) {
    if (iconPath)
      iconPath.setAttribute("d", state ? iconCompress : iconExpand);

    // 🔊 estado acessível
    btnFullscreen.setAttribute("aria-pressed", state ? "true" : "false");
    btnFullscreen.setAttribute(
      "aria-label",
      state ? "Sair da tela cheia" : "Ativar tela cheia"
    );
  }

  btnFullscreen.addEventListener("click", () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.();
      updateIcon(true);
    } else {
      document.exitFullscreen?.();
      updateIcon(false);
    }
  });

  document.addEventListener("fullscreenchange", () =>
    updateIcon(!!document.fullscreenElement)
  );
});
