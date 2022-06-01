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

export default function renderCategoryNavbar(selectedCategory) {
  const component = document.createElement("div");

  function onClick(type) {}

  component.innerHTML = `
  <html>
  <head>
    <link rel="stylesheet" type="text/css" href="/components/category_navbar/category_navbar.css">

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

  const navbarContainer = component.querySelector(".navbar-start");
  categories.forEach((category) => {
    const navMenuElement = document.createElement("a");
    navMenuElement.className = "navbar-item";
    navMenuElement.innerText = `${category}`;
    navMenuElement.onclick = () => onClick(category);
    navMenuElement.href = `/list/?category=${category}`;
    navbarContainer.appendChild(navMenuElement);

    if (category === selectedCategory) {
      navMenuElement.classList.add("is-active");
    }
  });

  return component;
}
