let modal = document.getElementById("wikiModal");
let wikiLink = document.getElementById("wikiLink");
let modalClose = document.getElementsByClassName("close")[0];

const xhr = new XMLHttpRequest();
const entry = document.getElementById("entry-content");
let stuff = "stuff1.html";
let toggle = 0;

xhr.onload = function () {
  if (this.status === 200) {
    entry.innerHTML = xhr.responseText;
  } else {
    console.warn("did not receive");
  }
};

// When the user clicks the button, open the modal
function wikiOpen(html) {
  xhr.open("GET", `./entries/${html}.html`);
  xhr.send();
  modal.style.visibility = "visible";
}
// When the user clicks on <modalClose> (x), close the modal
modalClose.onclick = function () {
  modal.style.visibility = "hidden";
};
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.visibility = "visible";
//   } else if (event.target == wikiLink) {
//     console.log("wikiLink clicked");
//     event.stopPropagation();
//   }
// };
