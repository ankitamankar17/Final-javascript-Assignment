let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// //
var clothing=$("#clothings")
var accessory =$("#accessories")

function render(data) {
 for (let i = 0; i < data.length; i++) {
    currentProduct=data[i]
   var productList=`<div class="product-card1" id="${currentProduct.id}">
   <a class="text_style" href="PRODUCT.html?product_id=${i}">
   <img class="product-img1" src="${currentProduct.preview}" alt="">
   <p id="name">${currentProduct.name}</p>
   <p id="brand">${currentProduct.brand}</p>
   <p id="price">Rs.${currentProduct.price}</p>
   </a>
</div> `

if(currentProduct.isAccessory===false){
clothing.append(productList)
}else{
    accessory.append(productList)
}
console.log(currentProduct);
console.log(clothing)
console.log(productList)
 }
}
$('#cart-count').text(localStorage.getItem('count'));

var local="https://5d76bf96515d1a0014085cf9.mockapi.io/product";
$.get(local,function(result){
    render(result)
    
});