const showShoe = (page, listShoee, root) => {
    root.innerHTML = listShoee.slice(0, listShoee.length).map(shoe => `
        <div class="shoe" id="shoe-${shoe.id}">
            <div class="shoe_img">
                <img src="${shoe.image}">
            </div>
            <div class="shoename">${shoe.name}</div>
            <div class="shoebrand">Brand: ${shoe.brand}</div>
            <div class="priceshoe">
                <p class="current_price">$${shoe.price}.00</p>
                <p class="old_price">$${shoe.oldprice}.00</p>
            </div>
            <div class="btn_buy ${shoe.soldout == true ? 'soldOut': ''}">
                <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <div class="big_view" id="${shoe.id}">
                Quick view
            </div>
        </div>
    `).join("")
    tmpImg = document.createElement('img');
    document.querySelectorAll('.big_view').forEach(f => f.addEventListener('click', () => {
        blackPage.classList.add("active")
        for(let i = 0; i < listShoee.length;i++){
            if(listShoee[i].id - 1 == f.id-1){
                tmpImg.setAttribute('src',listShoee[i].image,);
                blackPage.appendChild(tmpImg);
            }
        }
    })) 
    tmpImg.onclick = () =>{
        blackPage.removeChild(tmpImg);
    } 
}

showShoe(0,listShoe,document.querySelector('.content__bestSeller'));


// renderFilm(0, sortView(listFilm), document.querySelector('.content__top-view'))