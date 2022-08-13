const showBag = (listShoe,listbag, root) => {
    root.innerHTML = listbag.slice(0,listbag.length).map(item => `
                <li class="item_bag" id="${item.id}">
                    <div class="img_item">
                        <img src ="${listShoe[item.id - 1].image}">
                    </div>
                    <div class="title_item">
                        <div class="name_item">
                            ${listShoe[item.id - 1].name}
                        </div>
                        <div class="size_item">
                            Size:${item.size}
                        </div>
                        <div class="price_item">
                            $${listShoe[item.id - 1].price}
                        </div>
                    </div>
                    <div class="bin_item">
                        <i class="fa-solid fa-trash-can bin" id="${item.id}"></i>
                    </div>
                </li>
    `).join("")
    //remove element bag
    var list_item_bag = document.querySelectorAll(".item_bag");
    for (let i = 0; i < list_item_bag.length; i++) {
        list_item_bag[i].onclick = function (e){
            document.querySelector(".listbag").classList.add('active');
            if(e.target.classList.contains('bin')){
                for(let i = 0 ; i < users.length;i++){
                    if(curUserr.mail == users[i].mail){
                        users[i].bagshoe.splice(parseInt(curUserr.bagshoe.findIndex(obj => {return obj.id == e.target.id})),1)
                        curUserr.bagshoe.splice(parseInt(curUserr.bagshoe.findIndex(obj => {return obj.id == e.target.id})),1)
                        localStorage.setItem("users", JSON.stringify(users));
                        localStorage.setItem("curUser",JSON.stringify(curUserr));
                        showBag(listShoe,curUserr.bagshoe,document.querySelector(".listbag"));
                    }
                }
            }
        }
    }
}