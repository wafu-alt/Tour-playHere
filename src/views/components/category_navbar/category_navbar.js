export const categories = [
  "국내",
  "아시아",
  "중국",
  "일본",
  "미주",
  "중남미",
  "유럽",
  "대양주",
  "중동",
  "아프리카",
];

export default function renderCategoryNavbar(data) {
  const element = document.createElement("div");

  function onClick(type) {
    alert(type);
  }

  element.innerHTML = `
  <html>
  <head>
    <link rel="stylesheet" type="text/css" href="components/list/image-item-card.css">

    <style type="text/css">
      .category-navbar{
        border-bottom: 1px solid #dee2e6;
      }
    </style>
  </head>
  <body>
  <nav class="navbar category-navbar" role="navigation" aria-label="main navigation">
  <div class="container mt-3">
    <div class="navbar-start">   
    </div>
    </nav>
</body>
</html>
`;

  const navbarContainer = element.querySelector(".navbar-start");
  categories.forEach((category) => {
    const navMenuElement = document.createElement("a");
    navMenuElement.className = "navbar-item";
    navMenuElement.innerText = `${category}`;
    navMenuElement.onclick = () => onClick(category);
    navbarContainer.appendChild(navMenuElement);
  });

  return element;
}
