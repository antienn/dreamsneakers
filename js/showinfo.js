const showInfo = (id,isliked,root) =>{
    root.innerHTML = `
        <div class="app_left">
            <img src="${listShoe[id-1].image}">
        </div>
        <div class="app_right">
            <div class="shoe_name">
                ${listShoe[id-1].name}
            </div>
            <div class="shoe_brand">
                Brand: ${listShoe[id-1].brand}
            </div>
            <div class="shoe_price">
                <p class="shoe_newprice">$${listShoe[id-1].price}</p>
                <p class="shoe_oldprice">$${listShoe[id-1].oldprice}</p>
            </div>
            <div class="rps_img">
                <img src="${listShoe[id-1].image}">
            </div>
            <div class="select_size">
                <div class="select_size_name">
                    Select Size
                </div>
                <ul class="list_size">
                    <li class="list_item_size">6</li>
                    <li class="list_item_size">6.5</li>
                    <li class="list_item_size">7</li>
                    <li class="list_item_size">7.5</li>
                    <li class="list_item_size">8</li>
                    <li class="list_item_size">8.5</li>
                    <li class="list_item_size">9</li>
                    <li class="list_item_size">9.5</li>
                    <li class="list_item_size">10</li>
                    <li class="list_item_size">10.5</li>
                    <li class="list_item_size">11</li>
                    <li class="list_item_size">11.5</li>
                    <li class="list_item_size">12</li>
                    <li class="list_item_size">12.5</li>
                    <li class="list_item_size">13</li>
                    <li class="list_item_size">14</li>
                </ul>
            </div>
            <div class="method">
                <div class="method_add">
                    Add to Bag
                </div>
                <div class="method_like">
                    Favorite
                </div>
            </div>
        </div>
    `
}