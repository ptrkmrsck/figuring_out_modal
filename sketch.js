let modal = document.getElementById("wikiModal");
let wikiLink = document.getElementById("wikiLink");
let modalClose = document.getElementsByClassName("close")[0];

const entry = document.getElementById("entry-content");
let toggle = 0;

// When the user clicks the button, open the modal
function wikiOpen(html) {
  fetch(`./entries/${html}.html`)
    .then((response) => response.text())
    .then((txt) => (entry.innerHTML = txt))
    .then(() => (modal.style.visibility = "visible"));
}
// When the user clicks on <modalClose> (x), close the modal
modalClose.onclick = function () {
  modal.style.visibility = "hidden";
};
