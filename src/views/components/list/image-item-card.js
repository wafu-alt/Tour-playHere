export default function renderImageItem(data) {
  const element = document.createElement("div");
  element.class = "card";
  element.onclick = onClick;

  function onClick() {
    alert("Click");
  }

  element.innerHTML = `
  <html>
  <head>
    <link rel="stylesheet" type="text/css" href="components/list/image-item-card.css">
  </head>
  <body>
  <div class="card image-card" onclick="this.onClick()">
  <div class="card-background">
      <img class="card-background-image" src=${data.image} alt="Placeholder image">
  </div>
  <div class="content-stack">
    <h1>${data.name}</h1>
    <b>${data.description}</b>
  </div>
</div>
</body>
</html>
`;

  return element;
}
