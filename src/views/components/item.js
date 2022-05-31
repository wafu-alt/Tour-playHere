export default function renderItem(data) {
  const element = document.createElement("div");
  element.class = "card";
  element.onclick = onClick;

  function onClick() {
    alert("Click");
  }

  element.innerHTML = `
    <html>
    <head>
        <style type="text/css">

    </style>
    </head>
    <body>
    <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src=${data.image} alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">${data.name}</p>
        <p class="subtitle is-6">#${data.category}</p>
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

  return element;
}
