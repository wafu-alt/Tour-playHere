const API_URL =
  "http://211.197.127.203:5500/shopping-mall/src/views/product/detail";
console.log(window.location.href);
const fetchPosts = function () {
  fetch(`${API_URL}`);
};

// app.get(‘/:id’, (req,res)=>{
//   const {id} = req.parmas;
//   res.redirect(“detail.html”, {id});
// })

// export function renderItemDetail() {
//   fetch("detail-sampleData.json")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     });
// }
