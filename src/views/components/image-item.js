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
  <style type="text/css">
    #image-card {
      max-width: 280px;
      min-width: 280px;
      height: 420px;
      margin: 8px 8px;
    }

    .card:hover{
      box-shadow : 5px 3px 3px grey;
      cursor : pointer;
      transition : 0.5s;
    }

    .background-image{
      height:100%;
    }

    img{
      height:100%;
      object-fit:cover;
    }

    .content-stack{
      display:flex;
      position:absolute;
      flex-direction: column;
      align-items: end;
      width:100%;
      padding : 12px 16px;
      right:0px;
      bottom:0px;
      background-color: rgba(0,0,0,0.4);
    }

   .content-stack h1,h2,h3,h4,b{
      color: white !important;
    }

  </style>

  </head>
  <body>
  <div class="card" id="image-card" onclick="this.onClick()">
  <div class="background-image">
      <img src=${data.image} alt="Placeholder image">
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
