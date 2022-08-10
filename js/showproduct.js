const showProduct = (root,issort) => {
    root.innerHTML =`
        <div class="content_shoe_product">
         </div>
    `
    if(issort){
        showShoe(0,sortBrand(listShoe,issort),listShoe.length,document.querySelector('.content_shoe_product'));
        document.querySelector('.content_shoe_product').style.overflow ="hidden";
        document.querySelector(".search_inp").value = issort;
    }else{
        showShoe(0,listShoe,listShoe.length,document.querySelector(".content_shoe_product"));
    }
}