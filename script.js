//your code here
window.onload = function() {
   let divs = document.querySelectorAll('.image');
  for (let i = 0; i < divs.length; i++) {
    divs[i].setAttribute('id', 'drag' + (i + 1));
    divs[i].addEventListener("dragstart", handleDragStart, false);
    divs[i].addEventListener("dragover", handleDragOver, false);
    divs[i].addEventListener("drop", handleDrop, false);
  }
}

let dragSrcEl = null;

function handleDragStart(e) {
  this.style.opacity = '0.4';
  dragSrcEl = this;
  e.dataTransfer.effectAllowed = 'move';
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  e.dataTransfer.dropEffect = 'move';
  return false;
}

function handleDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }
  if (dragSrcEl != this) {
    let srcBgImage = dragSrcEl.style.backgroundImage;
    dragSrcEl.style.backgroundImage = this.style.backgroundImage;
    this.style.backgroundImage = srcBgImage;
  }
  return false;
}
