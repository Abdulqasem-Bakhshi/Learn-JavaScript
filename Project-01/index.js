let root = document.getElementById("root");

let Container = `

<img id="root2" class="titleImg"></img>
<p id="paragraph" class="titleImg"></p>
<p id="root1"></p>
<button id="btn">Click Here!</button>

<div id="css"></div>

`;
root.innerHTML = Container;

let link = '<link rel="stylesheet" href="index.css">';

let css = document.getElementById("css");

css.innerHTML = link;

let text = "WhatsNOW is a brand new VoIP application.";

let paragraph = document.getElementById("paragraph");

paragraph.textContent = text;

let freecodecampLink =
  '<a href="https://www.youtube.com/watch?v=PkZNo7MFNFg"></a>';

let root1 = document.getElementById("root1");

root1.textContent = freecodecampLink;

let button = freecodecampLink;

let btn = document.getElementById("btn");

btn.innerHTML = button;

let image = "favicon.png";

let root2 = document.getElementById("root2");

root2.src = image;
