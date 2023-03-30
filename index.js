let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
    console.log(n);
  }

function currentSlide(n) {
    showSlides(slideIndex = n);
    // console.log(n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slideImageFade");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length)
     {slideIndex = 1}

    if (n < 1) 
    {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) 
    {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }

  //   productList

  let text = '{"products":[' +
'{"name":"Newborn Gift Set", "brand":"Disney Baby","description":"4-piece set for newborn", "price":"P 420.00" },' +
'{"name":"Classic Plain Tee", "brand":"HTP kids","description":"pastel colored tees", "price":"P 270.00" },' +
'{"name":"Tracksuit", "brand":"Tommy Hilfiger","description":"kids OOTD goals!", "price":"P 290.00" },'+
'{"name":"Kids Oversized Tee","brand":"HTP Kids","description":"must have tee fot kids", "price":"P 290.00" },'+
'{"name":"Ringer Set","brand":"HTP Kids","description":"stylish for summer", "price":"P 370.00"}]}';


const obj = JSON.parse(text);

// alert(text);
// alert(obj);
//alert(obj.products[0].price);
var numberOfproductNameP = document.querySelectorAll("#productName").length;


//alert(numberOfproductNameP);

for (var i = 0; i<numberOfproductNameP; i++){

  document.querySelectorAll("#productName")[i].innerHTML = "Name: "+obj.products[i].name;
  document.querySelectorAll("#productBrand")[i].innerHTML = "Brand: "+obj.products[i].brand;
  document.querySelectorAll("#productDesc")[i].innerHTML = "Description: "+obj.products[i].description;
  document.querySelectorAll("#productPrice")[i].innerHTML = "Price: "+obj.products[i].price;


 }

var modal = document.getElementById("myModal");
var btn = document.getElementById("myCart");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


document.querySelector("#btnProd1").addEventListener("click", populateCart);

function populateCart(){
  alert("You added item on your cart.");

  var modal = document.querySelector("#myModal");
  var prodName = document.querySelectorAll("#productName").innerHTML =  "Name: "+obj.products[0].name;
  var prodPrice = document.querySelectorAll("#productPrice").innerHTML = "price: "+obj.products[0].price;

  // alert(prodName);
  // alert(prodPrice);
  var eto = document.getElementById("cartIsEmpty");

  document.getElementById("cartIsEmpty").innerHTML = "";
  // alert(modal);
  var p = document.createElement("p");
  var item = document.createTextNode(prodName +"  " +prodPrice);

  p.appendChild(item);
  eto.appendChild(p);
  p.setAttribute("style", "font-size: 20px;");

}

document.querySelector("#btnProd2").addEventListener("click", populateCart2);

function populateCart2(){
  alert("You added item on your cart.");

  var modal = document.querySelector("#myModal");
  var prodName = document.querySelectorAll("#productName").innerHTML =  "Name: "+obj.products[1].name;
  var prodPrice = document.querySelectorAll("#productPrice").innerHTML = "price: "+obj.products[1].price;

  // alert(prodName);
  // alert(prodPrice);
  var eto = document.getElementById("cartIsEmpty");

  document.getElementById("cartIsEmpty").innerHTML = "";
  // alert(modal);
  var p = document.createElement("p");
  var item = document.createTextNode(prodName +"  " +prodPrice);

  p.appendChild(item);
  eto.appendChild(p);
  p.setAttribute("style", "font-size: 20px;");

}

document.querySelector("#btnProd3").addEventListener("click", populateCart3);

function populateCart3(){
  alert("You added item on your cart.");

  var modal = document.querySelector("#myModal");
  var prodName = document.querySelectorAll("#productName").innerHTML =  "Name: "+obj.products[2].name;
  var prodPrice = document.querySelectorAll("#productPrice").innerHTML = "price: "+obj.products[2].price;

  // alert(prodName);
  // alert(prodPrice);
  var eto = document.getElementById("cartIsEmpty");

  document.getElementById("cartIsEmpty").innerHTML = "";
  // alert(modal);
  var p = document.createElement("p");
  var item = document.createTextNode(prodName +"  " +prodPrice);

  p.appendChild(item);
  eto.appendChild(p);
  p.setAttribute("style", "font-size: 20px;");

}

document.querySelector("#btnProd4").addEventListener("click", populateCart4);

function populateCart4(){
  alert("You added item on your cart.");

  var modal = document.querySelector("#myModal");
  var prodName = document.querySelectorAll("#productName").innerHTML =  "Name: "+obj.products[3].name;
  var prodPrice = document.querySelectorAll("#productPrice").innerHTML = "price: "+obj.products[3].price;

  // alert(prodName);
  // alert(prodPrice);
  var eto = document.getElementById("cartIsEmpty");

  document.getElementById("cartIsEmpty").innerHTML = "";
  // alert(modal);
  var p = document.createElement("p");
  var item = document.createTextNode(prodName +"  " +prodPrice);

  p.appendChild(item);
  eto.appendChild(p);
  p.setAttribute("style", "font-size: 20px;");

}

document.querySelector("#btnProd5").addEventListener("click", populateCart5);

function populateCart5(){
  alert("You added item on your cart.");

  var modal = document.querySelector("#myModal");
  var prodName = document.querySelectorAll("#productName").innerHTML =  "Name: "+obj.products[4].name;
  var prodPrice = document.querySelectorAll("#productPrice").innerHTML = "price: "+obj.products[4].price;

  // alert(prodName);
  // alert(prodPrice);
  var eto = document.getElementById("cartIsEmpty");

  document.getElementById("cartIsEmpty").innerHTML = "";
  // alert(modal);
  var p = document.createElement("p");
  var item = document.createTextNode(prodName +"  " +prodPrice);

  p.appendChild(item);
  eto.appendChild(p);
  p.setAttribute("style", "font-size: 20px;");

}

// var dib = document.querySelector("#product1");
// //alert(dib);

// var b = document.createElement("button");
// b.setAttribute("content", "btn product1");
// b.setAttribute("id", "btnProd1");  
// b.setAttribute("onclick", "addItem1()");
// b.textContent = "add to cart";

// dib.appendChild(b);

// function addItem1(obj)
// {
//   alert("You added item on your cart.");

//   var modal = document.querySelector("#myModal");
//   var prodName = document.querySelectorAll("#productName").innerHTML =  "Name: "+obj.products.name;
//   var prodPrice = document.querySelectorAll("#productPrice").innerHTML = "price: "+obj.products.price;

//   alert(prodName);
//   alert(prodPrice);
//   var eto = document.getElementById("cartIsEmpty");

//   document.getElementById("cartIsEmpty").innerHTML = "";
//   // alert(modal);
//   var p = document.createElement("p");
//   var item = document.createTextNode(prodName +"  " +prodPrice);

//   p.appendChild(item);
//   eto.appendChild(p);
//   p.setAttribute("style", "font-size: 20px;");

  

// }



// var dib = document.querySelector("#product2");
// //alert(dib);

// var b = document.createElement("button");
// b.setAttribute("content", "btn product2");
// b.setAttribute("id", "btnProd2");  
// b.setAttribute("onclick", "addItem1()");
// b.textContent = "add to cart";

// dib.appendChild(b);


// var dib = document.querySelector("#product3");
// //alert(dib);

// var b = document.createElement("button");
// b.setAttribute("content", "btn product3");
// b.setAttribute("id", "btnProd3");  
// b.setAttribute("onclick", "addItem1()");
// b.textContent = "add to cart";

// dib.appendChild(b);

// var dib = document.querySelector("#product4");
// //alert(dib);

// var b = document.createElement("button");
// b.setAttribute("content", "btn product4");
// b.setAttribute("id", "btnProd4");  
// b.setAttribute("onclick", "addItem1()");
// b.textContent = "add to cart";

// dib.appendChild(b);

// var dib = document.querySelector("#product5");
// //alert(dib);

// var b = document.createElement("button");
// b.setAttribute("content", "btn product4");
// b.setAttribute("id", "btnProd4"); 
// b.setAttribute("onclick", "addItem1()"); 
// b.textContent = "add to cart";

// dib.appendChild(b);




















// var dibs = document.querySelectorAll(".product").length;

// alert(dibs);

// for(n=0; n<dibs; n++){
//   var element = document.createElement("button");

//   element.textContent = "add to cart";

//   dib.appendChild(element);
// }


















// document.querySelector("#btnProd1").addEventListener("click", addItem1);

// function addItem1()
// {
//   document.getElementById("cartIsEmpty").innerHTML = "Your Order";

//   var eto = document.getElementById("cartIsEmpty");

//   var text = document.createElement("p");
//   var item = document.createTextNode("Product Name: " +obj.products[0].name);

//   text.appendChild(item);
//   eto.appendChild(text);
//   text.setAttribute("style", "font-size: 20px;");
  
// }





 
// var numberOfbtnProd = document.querySelectorAll(".btnProd").length;

// //alert(numberOfbtnProd);

// for (var b=0; b<numberOfbtnProd; b++)
// {
//     document.querySelectorAll(".btnProd")[b].addEventListener("click", clickButton);
    
   
// function clickButton()
// {
//     // var btnClick = this.innerHTML;
//     // console.log(btnClick);
    
   
// }};

// modal




//   const productsDetails = {
//     "name" : ["Newborn Gift Set", "Classic Plain Tee", "Tracksuit", "Kids Oversized Tee"],
//     "brand" : ["Disney Baby", "HTP kids", "Tommy Hilfiger", "HTP kids"],
//     "description" : ["4-piece set for newborn", "pastel colored tees", "goal for kids ootd", "must have tee fot kids"],
//     "price" : ["P 420.00", "P 270.00", "P 470.00", "P 290.00"],
//  };



//alert(productsDetails.brand[0]);




















//  const product = '{"name": "newborn gift set", "brand":"minimi", "description":"complete gift set for newborn", "price":"P 420.00"}';
//  const obj = JSON.parse(product);

//  console.log(product);
//  console.log(obj.name);




//const obj = JSON.parse(productsDetails);
//console.log(obj);
 

// async function populate(){

  
//   const requestURL = 'https://github.com/pieyyulr/BWDA-paulabiancalealrobredillo/blob/main/productList.json';
//   const request = new Request(requestURL);

//   const response = await fetch(request);
//   const shopProdText = await response.text();

//   const product = JSON.parse(shopProdText);

//   alert(requestURL);
//   alert(request);
//   alert(response);
//   alert(shopProdText);
//   alert(product);
  
// }

// populate();


// window.onload = makeRequest;
// var productListJSONfile;

// function makeRequest()
// {
// 	if(window.XMLHttpRequest)
// 	{
// 	xhr = new XMLHttpRequest();
// 	}
// 	else
// 	{
// 		if(window.ActiveXObject)
// 		{
// 			 try{
// 				xhr = new ActiveXObject("Microsoft.XMLHTTP");
// 			 }
// 			 catch(e) {}
// 		}
// 	}
	
// 	if(xhr)
// 	{
// 		xhr.onreadystatechange = loadProduct;
// 		xhr.open("GET","productList.json",true);
// 		xhr.send(null);
// 	}
// 	else{
// 		alert("not connect");
// 	}
// }

// function loadProduct()
// {
//   console.log("GUMANA!!!!!!");
  
// }
//   productList

// const product = '{"name": "newborn gift set", "brand":"minimi", "description":"complete gift set for newborn", "price":"P 420.00"}';
// const obj = JSON.parse(product);

// console.log(product);
// console.log(obj.name);

// document.getElementById("productName").innerHTML = "Name: " + obj.name;
// async function populate(){
//     const requestURL = "C:\Users\Ren\Desktop\BWDA-PaulaBiancaLealRobredillo\productList.json";
//     const request = new Request(requestURL);

//     const response = await fetch(request);
//     const productList = await response.json();


//     // const productList = JSON.parse(request);

//     populateProductList(productList);
// }

// function populateProductList(obj)
// {
//     console.log(productList);
// }




// function populateProductList(obj){
//     const row = document.querySelector("product");
//     const productParagraph = document.createElement("p");
//     productParagraph.textContent = "{${obj.products[0]}";
//     row.appendChild(productParagraph);
// }