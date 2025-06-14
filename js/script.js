// MENU TOGGLE - funziona su tutte le pagine
function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
function closeMenu() {
    document.getElementById("menu").style.display = "none";
}

// FUNZIONI DI FILTRO
function w3AddClass(element, name) {
  if (!element) return;
  const arr1 = element.className.split(" ");
  const arr2 = name.split(" ");
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  if (!element) return;
  let arr1 = element.className.split(" ");
  const arr2 = name.split(" ");
  for (let i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");

  //if (c == "all") c = "";
  if (c === "all") c = "default";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}



function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Gestione bottone attivo (per il filtro)
function initFilterButtons(containerId) {
  const btnContainer = document.getElementById(containerId);
  if (!btnContainer) return;
  const btns = btnContainer.getElementsByClassName("btn");
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      const current = btnContainer.getElementsByClassName("active");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
      this.className += " active";
    });
  }
}

// MODAL IMMAGINE (funziona solo se ci sono gli elementi)
function initModal(imgId, modalId, modalImgId, captionId, closeClass) {
  const modal = document.getElementById(modalId);
  const img = document.getElementById(imgId);
  const modalImg = document.getElementById(modalImgId);
  const captionText = document.getElementById(captionId);
  const span = document.getElementsByClassName(closeClass)[0];

  if (!modal || !img || !modalImg || !captionText || !span) return;

  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };

  span.onclick = function () {
    modal.style.display = "none";
  };
}

// Inizializzazioni da eseguire al caricamento pagina
window.onload = function () {
  // Inizializza filtro (es. su foto.html, curiosita.html, storia.html)
  filterSelection("Api");

  // Inizializza bottoni filtro (se presenti)
  initFilterButtons("myBtnContainer");

  // Inizializza modal (se presenti)
  initModal("myImg", "myModal", "img01", "caption", "close");
};
