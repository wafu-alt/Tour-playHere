export default function renderItem(data) {
  const component = document.createElement("div");
  component.class = "card";
  component.onclick = onClick;

  function onClick() {
    alert("Click");
  }

  component.innerHTML = `
    <html>
    <head>
     <link rel="stylesheet" type="text/css" href="/components/list/item-card.css">
    </head>
    <body>
    <div class="card card-panel">
  <div class="card-image">
    <figure class="image is-4by3">
      <img class="card-panel-image" src=${data.image} alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">${data.name}</p>
        <p class="subtitle is-6">#${data.city}</p>
      </div>
    </div>

    <div class="content">
    ${data.description}
      <br>
      ${data.departureTime}
    </div>
  </div>
</div>
</body>
</html>`;

  return component;
}
