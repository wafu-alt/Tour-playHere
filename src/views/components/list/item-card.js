export default function renderItem(data) {
  const component = document.createElement("div");
  component.class = "card";
  component.onclick = onClickHandler;

  function onClickHandler() {
    window.location.href = `/product/detail/${data._id}`;
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
      <img class="card-panel-image" src=${
        data.imgUrl ?? ""
      } alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="has-text-grey-light">${data.category} / ${data.country}</p>
        <p id="title" class="title is-5">${data.packageName}</p>
        <p class="substance">${data.substance}</p>
      </div>
    </div>

    <div class="content">
    <p id="price" >${data.price.toLocaleString()}원
    <span id="days" class="has-text-grey-light">
   / ${data.days}일
    </span>
    </p>
    </div>
  </div>
</div>
</body>
</html>`;

  return component;
}
