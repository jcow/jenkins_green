var nodes = document.querySelectorAll('img.icon-blue');
for(var i = 0; i < nodes.length; i++) {
  nodes[i].style.filter = "hue-rotate(270deg) contrast(150%)";
}
