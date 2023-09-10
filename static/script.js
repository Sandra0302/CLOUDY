const showLinksButton = document.getElementById("showLinksButton");
const hyperlinksContainer = document.getElementById("hyperlinksContainer");

showLinksButton.addEventListener("click", () => {
  hyperlinksContainer.style.display = "block";
});

document.body.addEventListener("click", function () {
  const content = document.getElementById("content");
  content.style.display = "block";
});
