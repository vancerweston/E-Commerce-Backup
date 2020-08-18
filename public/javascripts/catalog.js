// Display Pop Up Window with Product Details
const productDetails = document.getElementById('productDetails');
const page = document.getElementById('catalogPage');

function selectedProduct(id) {
    let element = document.getElementById(id);
    let product = element.querySelectorAll(".productPart");

    let h1 = document.getElementById('title');
    let img = document.getElementById('img');
    let pS = document.getElementById('seller');
    let pP = document.getElementById('price');
    let pD = document.getElementById('description');
    let span = document.getElementById('rating');

    h1.innerHTML = product[0].innerHTML;
    img.setAttribute('src', product[1].src);
    pS.innerHTML = product[2].innerHTML;
    pP.innerHTML = product[3].innerHTML;
    pD.innerHTML = product[4].innerHTML;
    span.innerHTML = product[5].innerHTML;

    detailsDisplay();
}

function detailsDisplay() {
    page.style.opacity = '.1';

    productDetails.style.display = 'block';
    productDetails.style.position = 'fixed';
    productDetails.style.width = '500px';
    productDetails.style.height = '200px';
    productDetails.style.top = '40%';
    productDetails.style.left = '50%';
    productDetails.style.marginTop = '-100px';
    productDetails.style.marginLeft = '-250px';
}

function exit() {
    page.style.opacity = '1';
    productDetails.style.display = 'none';
}
