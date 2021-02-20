let modal = document.querySelector("#wikiModal");
let wikiLink = document.querySelector("#wikiLink");
let modalClose = document.querySelector(".close");
let handle = document.querySelector(".handle");

const entry = document.querySelector("#entry-content");
let toggle = 0;

let wikiLinks = document.querySelectorAll(".wiki-link");

wikiLinks.forEach((e) =>
  e.addEventListener("click", () => wikiOpen(e.dataset.wiki))
);

// When the user clicks the button, open the modal
function wikiOpen(html) {
  //TODO -- add conditional that does something clever before trying to fetch if there is no entry in /entry
  fetch(`./entries/${html}.html`)
    .then((response) => response.text())
    .then((txt) => {
      entry.innerHTML = txt;
      modal.style.visibility = "visible";
      let innerWikiLinks = entry.querySelectorAll(".wiki-link");
      innerWikiLinks.forEach((e) =>
        e.addEventListener("click", () => wikiOpen(e.dataset.wiki))
      );
    })
    .catch((e) => {
      entry.innerHTML = "OOOPS";
      modal.style.visibility = "visible";
    });
}
// When the user clicks on <modalClose> (x), close the modal
modalClose.onclick = function () {
  modal.style.visibility = "hidden";
};

dragElement(modal);

function dragElement(elmnt) {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  handle.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
