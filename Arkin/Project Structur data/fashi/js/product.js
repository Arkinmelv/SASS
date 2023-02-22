console.log("Product.js");

// product.html?id=5
const queryString = window.location.search;

//take just id
const queries = queryString.split("=");
const id = parseInt(queries[1]);

const product = document.querySelector(".product-details");
product.innerHTML = showProduct(id);

const productPicZoom = document.querySelector('.product-pic-zoom');
productPicZoom.innerHTML = showProductPicZoom(id);

const productContent = document.querySelector('.product-content');
productContent.innerHTML = showProductContent(id);

const productRecommendation = document.querySelector('#product-recommendation');
productRecommendation.innerHTML = showProductRecommendation(id);

// const productImage = document.querySelector('.product-image-api');
// productImage.innerHTML = showProductImage(id);

function getItemById(id) {
    return allItems.find(function (item) {
        return item.id == id
    })
}

// function showProductImage(id){

//     const item = getItemById(id);
//     return `
//         <div class="col-lg-6">
//         <div class="product-pic-zoom">
//             <img class="product-big-img" src="${item.img}" alt="">
//             <div class="zoom-icon">
//                 <i class="fa fa-search-plus"></i>
//             </div>
//         </div>
//         <div class="product-thumbs">
//             <div class="product-thumbs-track ps-slider owl-carousel">
//                 <div class="pt active" data-imgbigurl="${item.img}"><img
//                         src="${item.img}" alt=""></div>
//                 <div class="pt" data-imgbigurl="img/product-single/product-2.jpg"><img
//                         src="img/product-single/product-2.jpg" alt=""></div>
//                 <div class="pt" data-imgbigurl="img/product-single/product-3.jpg"><img
//                         src="img/product-single/product-3.jpg" alt=""></div>
//                 <div class="pt" data-imgbigurl="img/product-single/product-3.jpg"><img
//                         src="img/product-single/product-3.jpg" alt=""></div>
//             </div>
//         </div>
//     `  
// }

function showProductRecommendation(id){

    let recomendantionHTML = '';
    recomendantion[id].map(function(item){
        recomendantionHTML += showRecommendationProduct(item);
        return item;
    })

    return recomendantionHTML;
}

function showRecommendationProduct(item){
    return `
    <div class="col-lg-3 col-sm-6">
        <div class="product-item">
            <div class="pi-pic">
                <img src="${item.img}" alt="">
                <div class="sale">Sale</div>
                <div class="icon">
                    <i class="icon_heart_alt"></i>
                </div>
                <ul>
                    <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                    <li class="quick-view"><a href="#">+ Quick View</a></li>
                    <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                </ul>
            </div>
            <div class="pi-text">
                <div class="catagory-name">Coat</div>
                <a href="#">
                    <h5>${item.title}</h5>
                </a>
                <div class="product-price">
                    $ ${item.price}
                    <span>$ ${item.price * 10}</span>
                </div>
            </div>
        </div>
    </div>
    `
}

function showProductContent(id) {
    const item = getItemById(id);

    return `
    <div class="row">
        <div class="col-lg-7">
            h5>Introduction</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
            <h5>Features</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
        </div>
        <div class="col-lg-5">
            <img src="${item.img}" alt="">
        </div>
    </div>
    `
}

function showProductPicZoom(id) {

    const item = getItemById(id);
    return `
        <img class="product-big-img" src="${item.img}" alt="">
        <div class="zoom-icon">
            <i class="fa fa-search-plus"></i>
        </div>
    `
}

function showProduct(id) {

    const item = getItemById(id);

    return `
        <div class="pd-title">
            <span>oranges</span>
            <h3>${item.title}</h3>
            <a href="#" class="heart-icon"><i class="icon_heart_alt"></i></a>
        </div>
        <div class="pd-rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-o"></i>
            <span>(5)</span>
        </div>
        <div class="pd-desc">
            <p>Lorem ipsum dolor sit amet, consectetur ing elit, sed do eiusmod tempor sum dolor
                sit amet, consectetur adipisicing elit, sed do mod tempor</p>
            <h4>$${item.price}<span>${item.price * 10}}</span></h4>
        </div>
        <div class="pd-color">
            <h6>Color</h6>
            <div class="pd-color-choose">
                <div class="cc-item">
                    <input type="radio" id="cc-black">
                    <label for="cc-black"></label>
                </div>
                <div class="cc-item">
                    <input type="radio" id="cc-yellow">
                    <label for="cc-yellow" class="cc-yellow"></label>
                </div>
                <div class="cc-item">
                    <input type="radio" id="cc-violet">
                    <label for="cc-violet" class="cc-violet"></label>
                </div>
            </div>
        </div>
        <div class="pd-size-choose">
            <div class="sc-item">
                <input type="radio" id="sm-size">
                <label for="sm-size">s</label>
            </div>
            <div class="sc-item">
                <input type="radio" id="md-size">
                <label for="md-size">m</label>
            </div>
            <div class="sc-item">
                <input type="radio" id="lg-size">
                <label for="lg-size">l</label>
            </div>
            <div class="sc-item">
                <input type="radio" id="xl-size">
                <label for="xl-size">xs</label>
            </div>
        </div>
        <div class="quantity">
            <div class="pro-qty">
                <input type="text" value="1">
            </div>
            <a href="#" class="primary-btn pd-cart">Add To Cart</a>
        </div>
        <ul class="pd-tags">
            <li><span>CATEGORIES</span>: More Accessories, Wallets & Cases</li>
            <li><span>TAGS</span>: Clothing, T-shirt, Woman</li>
        </ul>
        <div class="pd-share">
            <div class="p-code">Sku : 00012</div>
            <div class="pd-social">
                <a href="#"><i class="ti-facebook"></i></a>
                <a href="#"><i class="ti-twitter-alt"></i></a>
                <a href="#"><i class="ti-linkedin"></i></a>
            </div>
        </div>
    `
}

