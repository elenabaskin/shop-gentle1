// nav bar
function displayNav() {
  var nav = document.getElementById("topNav");
  if (nav.className === "navigation") {
    nav.className += " responsive"; //makes nav bar responsive when re-sized
  } else {
    nav.className = "navigation";
  }
}

fetch("products.json")
  .then((response) => response.json())
  .then((json) => {
    let products = "";
    json.Products.forEach((Products) => {
      // displays product image -> name -> 4.5 star review -> price -> description -> heart & add to cart buttons (tried to make heart button change colors on click, only works on first item)
      products += `
            <div class ="image"> <img src = '${Products.image}' alt="cozy, light academia tops"></div>
            <div class="product-info">
            <br>
            <div class="product-name">${Products.name}</div>
            <div class = "review"> 
              <span><i class="fa fa-star"></i></span>
              <span><i class="fa fa-star"></i></span>
              <span><i class="fa fa-star"></i></span>
              <span><i class="fa fa-star"></i></span>
              <span><i class="fa fa-star-half-o"></i></span>
              </div>
            <div class="product-price"> ${Products.price}</div>
            <br>
            <div class="product-desc"> ${Products.description}</div>
            <br>
            <div class = "buttons">
            <button id = "heart" aria-label = "love button" onclick="setColor('heart', '#3d5267')"><i class="fa fa-heart"></i></button>
            <button>add to cart.</button>
            </div>
            </div>
           `;
    });
    //displays json objects in main section html
    document.querySelector("#main").innerHTML = products;
  });

//attempt at making heart button change colors on click, color variable is specficied as a property
var count = 1;
function setColor(heart) {
  var property = document.getElementById(heart);
  if (count == 0) {
    property.style.color = "#3d5267";
    count = 1;
  } else {
    property.style.color = "#afcbff";
    count = 0;
  }
}

//first attempt
// fetch("products.json")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (products) {
//     let placeholder = document.querySelector("#productsPage");
//     let out = " ";
//     for (let product of products) {
//       out += `
//       <div class="image"> <img src ='${product.image}'></div>
//       <div class="product-info">
//       <div class="product-name"> ${product.name}</div>
//       <div class="product-price"> ${product.price}</div>
//       <div class="product-desc"> ${product.description}</div>
//       </div>
//       `;
//     }
//     placeholder.innerHTML = out;
//   });

//attempt two: separate divs for images & desc
// fetch("products.json")
//   .then((response) => response.json())
//   .then((json) => {
//     let productsImage = "";
//     let productsInfo = "";
//     json.Products.forEach((Products) => {
//       productsImage += `
//       <div> <img src = '${Products.image}'></div>`;
//       productsInfo += `
//       <div class="product-info">
//       <div class="product-name">${Products.name}</div>
//       <div class = "review">
//       <span><i class="fa fa-star"></i></span>
//       <span><i class="fa fa-star"></i></span>
//       <span><i class="fa fa-star"></i></span>
//       <span><i class="fa fa-star"></i></span>
//       <span><i class="fa fa-star-half-o"></i></span>
//     </div>
//     <br>
//       <div class="product-price"> ${Products.price}</div>
//       <div class="product-desc"> ${Products.description}</div>
//       <br>
//       <button id = "heart" onclick="setColor('heart', '#3d5267')"><i class="fa fa-heart"></i></button>
//       <button>add to cart.</button>
//       </div>
//      `;
//     });
//     document.querySelector("#productsImage").innerHTML = productsImage;
//     document.querySelector("#productsInfo").innerHTML = productsInfo;
//   });
