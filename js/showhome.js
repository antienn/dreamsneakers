const showHome = (root) => {
    root.innerHTML = `
            <div class="content">
                <div class="banner">
                    <p class="banner-intro">Explore New</p>
                    <div class="banner-buy">
                        <p class="banner-name">
                            Yeezy Boost 350
                        </p>
                        <p class="newprice">$330.00</p>
                        <p class="oldprice">$540.00</p>
                        <p class="color">Color:</p>
                        <div class="select_color_nav">
                            <div id="brown" class="select_color brown able"></div>
                            <div id="blue" class="select_color blue"></div>
                            <div id="gray" class="select_color gray"></div>
                        </div>
                    </div>
                    <img src="./data/img/banner-brown.png"id="brown" class="imgbanner able">
                    <img src="./data/img/banner-blue.png"id="blue" class="imgbanner">
                    <img src="./data/img/banner-gray.png" id="gray" class="imgbanner">
                </div>

                <div class="table_change">
                    <div class="left chartchange">
                        <p class="title_change">From:</p>
                        <div class="select_change">
                            <input autocomplete="off" type="number" class="input_size left">
                            <p class="name_change left">VN</p>
                            <i class="fa-solid fa-sort-down icon_select left"></i>
                            <ul class="size__subnav left">
                                <li class="size__item" id="VN">
                                    VN
                                </li>
                                <li class="size__item" id="US">
                                    US
                                </li>
                                <li class="size__item" id="CM">
                                    CM
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="bgicon">
                        <i class="fa-solid fa-arrow-right-arrow-left"></i>
                    </div>
                    <div class="right chartchange">
                        <p class="title_change">To:</p>
                        <div class="select_change">
                            <input disabled autocomplete="off" type="number" class="input_size right">
                            <p class="name_change right">US</p>
                            <i class="fa-solid fa-sort-down icon_select right"></i>
                            <ul class="size__subnav right">
                                <li class="size__item" id="VN">
                                    VN
                                </li>
                                <li class="size__item" id="US">
                                    US
                                </li>
                                <li class="size__item" id="CM">
                                    CM
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>

                </div>



                <!-- product -->
                <div class="content_bestseller">
                    <div class="bestseller">
                        Best Seller
                    </div>
                    <div class="sort_nav" id="sorticon">
                        <p class="type_sort">Top Product Sale</p>
                        <i class="fa-solid fa-sort-down"></i>
                        <ul class="sort__subnav">
                            <li class="sort__item" id="highest">
                                Top Highest Price
                            </li>
                            <li class="sort__item" id="sale">
                                Top Product Sale
                            </li>
                            <li class="sort__item" id="lowest">
                                Top Lowest Price
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="content_shoe">
                </div>
            </div>
            `

        //first show shoe
        showShoe(0,sortSale(listShoe),listShoe.length/2,document.querySelector('.content_shoe'));

        // change color shoe 
        const selectColor = document.querySelectorAll(".select_color")
        const imgColor = document.querySelectorAll(".imgbanner")
        selectColor.forEach(c => c.addEventListener('click', () => {
            for(let i = 0 ; i < 3 ; i++){
                if(c.id == imgColor[i].id){
                    imgColor.forEach(element => element.classList.remove('able'))
                    selectColor.forEach(element => element.classList.remove('able'))
                    imgColor[i].classList.add('able');
                    selectColor[i].classList.add('able');
                }
            }
        }))

        //sort
        document.querySelector(".sort_nav").onclick = function(e) {
            if(e.target.closest(".sort_nav")){
                if(!document.querySelector(".sort__subnav").classList.contains('active')){
                    blockALLActive(document.querySelector(".sort_nav"));
                    document.querySelector(".sort__subnav").classList.add('active');
                }else{
                    document.querySelector(".sort__subnav").classList.remove('active')
                }
            }
        } 
        var sortShoe = document.querySelectorAll('.sort__subnav');
        for (let i = 0; i < sortShoe.length; i++) {
            sortShoe[i].onclick = function (e){
                if(e.target.id=="lowest"){
                    document.querySelector('.type_sort').innerHTML='Top Lowest Price';
                    showShoe(0,sortLow(listShoe),listShoe.length/2,document.querySelector('.content_shoe'));
                }
                if(e.target.id=="sale"){
                    document.querySelector('.type_sort').innerHTML='Top Product Sale';
                    showShoe(0,sortSale(listShoe),listShoe.length/2,document.querySelector('.content_shoe'));
                }
                if(e.target.id=="highest"){
                    document.querySelector('.type_sort').innerHTML='Top Highest Price';
                    showShoe(0,sortHigh(listShoe),listShoe.length/2,document.querySelector('.content_shoe'));
                }
            }
        }

        //select size
        document.querySelector(".icon_select.left").onclick = function(e) {
            if(e.target.closest(".icon_select.left")){
                if(!document.querySelector(".size__subnav.left").classList.contains('active')){
                    blockALLActive(document.querySelector(".size__subnav.left"));
                    document.querySelector(".size__subnav.left").classList.add('active');
                }else{
                    document.querySelector(".size__subnav.left").classList.remove('active');
                }
            }
        } 
        document.querySelector(".icon_select.right").onclick = function(e) {
            if(e.target.closest(".icon_select.right")){
                if(!document.querySelector(".size__subnav.right").classList.contains('active')){
                    blockALLActive(document.querySelector(".size__subnav.right"));
                    document.querySelector(".size__subnav.right").classList.add('active');
                }else{
                    document.querySelector(".size__subnav.right").classList.remove('active');
                }
            }
        }
        var sortLeft = document.querySelectorAll('.size__subnav.left');
        for (let i = 0; i < sortLeft.length; i++) {
            sortLeft[i].onclick = function (e){
                blockALLActive();
                if(e.target.id =="VN"){
                    if(document.querySelector('.name_change.right').innerHTML == e.target.id){
                        tmp = document.querySelector('.name_change.left').innerHTML;
                        document.querySelector('.name_change.left').innerHTML = document.querySelector('.name_change.right').innerHTML;
                        document.querySelector('.name_change.right').innerHTML = tmp;
                    }else{
                        document.querySelector('.name_change.left').innerHTML='VN';
                    }
                    document.querySelector(".input_size.right").value="";
                    document.querySelector(".input_size.left").value="";
                }
                if(e.target.id=="US"){
                    if(document.querySelector('.name_change.right').innerHTML == e.target.id){
                        tmp = document.querySelector('.name_change.left').innerHTML;
                        document.querySelector('.name_change.left').innerHTML = document.querySelector('.name_change.right').innerHTML;
                        document.querySelector('.name_change.right').innerHTML = tmp;
                    }else{
                        document.querySelector('.name_change.left').innerHTML='US';
                    }
                    document.querySelector(".input_size.right").value="";
                    document.querySelector(".input_size.left").value="";
                }
                if(e.target.id=="CM"){
                    if(document.querySelector('.name_change.right').innerHTML == e.target.id){
                        tmp = document.querySelector('.name_change.left').innerHTML;
                        document.querySelector('.name_change.left').innerHTML = document.querySelector('.name_change.right').innerHTML;
                        document.querySelector('.name_change.right').innerHTML = tmp;
                    }else{
                        document.querySelector('.name_change.left').innerHTML='CM';
                    }
                    document.querySelector(".input_size.right").value="";
                    document.querySelector(".input_size.left").value="";
                }
            }
        }
        var sortRight = document.querySelectorAll('.size__subnav.right');
        for (let i = 0; i < sortRight.length; i++) {
            sortRight[i].onclick = function (e){
                blockALLActive();
                if(e.target.id=="VN"){
                    if(document.querySelector('.name_change.left').innerHTML == e.target.id){
                        tmp = document.querySelector('.name_change.right').innerHTML;
                        document.querySelector('.name_change.right').innerHTML = document.querySelector('.name_change.left').innerHTML;
                        document.querySelector('.name_change.left').innerHTML = tmp;
                    }else{
                        document.querySelector('.name_change.right').innerHTML='VN';
                    }
                    document.querySelector(".input_size.right").value="";
                    document.querySelector(".input_size.left").value="";
                }
                if(e.target.id=="US"){
                    if(document.querySelector('.name_change.left').innerHTML == e.target.id){
                        tmp = document.querySelector('.name_change.right').innerHTML;
                        document.querySelector('.name_change.right').innerHTML = document.querySelector('.name_change.left').innerHTML;
                        document.querySelector('.name_change.left').innerHTML = tmp;
                    }else{
                        document.querySelector('.name_change.right').innerHTML='US';
                    }
                    document.querySelector(".input_size.right").value="";
                    document.querySelector(".input_size.left").value="";
                }
                if(e.target.id=="CM"){
                    if(document.querySelector('.name_change.left').innerHTML == e.target.id){
                        tmp = document.querySelector('.name_change.right').innerHTML;
                        document.querySelector('.name_change.right').innerHTML = document.querySelector('.name_change.left').innerHTML;
                        document.querySelector('.name_change.left').innerHTML = tmp;
                    }else{
                        document.querySelector('.name_change.right').innerHTML='CM';
                    }
                    document.querySelector(".input_size.right").value="";
                    document.querySelector(".input_size.left").value="";
                }
            }
        }
        document.querySelector(".bgicon").onclick = () =>{
            if(document.querySelector(".input_size.left").value > 34 && document.querySelector(".input_size.left").value < 48 && document.querySelector('.name_change.left').innerHTML=="VN" 
            || document.querySelector(".input_size.left").value > 23 && document.querySelector(".input_size.left").value < 30 && document.querySelector('.name_change.left').innerHTML=="CM" 
            || document.querySelector(".input_size.left").value > 7  && document.querySelector(".input_size.left").value < 12 && document.querySelector('.name_change.left').innerHTML=="CM" ){
                if(document.querySelector('.name_change.left').innerHTML=="VN"){
                    if(document.querySelector('.name_change.right').innerHTML=="US"){
                        document.querySelector(".input_size.right").value = parseFloat(document.querySelector(".input_size.left").value) - 33;
                    }else{
                        document.querySelector(".input_size.right").value = parseFloat(document.querySelector(".input_size.left").value) - 16.5;
                    }
                }
                if(document.querySelector('.name_change.left').innerHTML=="US"){
                    if(document.querySelector('.name_change.right').innerHTML=="VN"){
                        document.querySelector(".input_size.right").value = parseFloat(document.querySelector(".input_size.left").value) + 33;
                    }else{
                        document.querySelector(".input_size.right").value = parseFloat(document.querySelector(".input_size.left").value) + 16.5;
                    }
                }if(document.querySelector('.name_change.left').innerHTML=="CM"){
                    if(document.querySelector('.name_change.right').innerHTML=="US"){
                        document.querySelector(".input_size.right").value = parseFloat(document.querySelector(".input_size.left").value) - 16.5;
                    }else{
                        document.querySelector(".input_size.right").value = parseFloat(document.querySelector(".input_size.left").value) + 16.5;
                    }
                }
            }else{
                toast({
                    title: "Error",
                    message: "your size isn't comfortable in our store",
                    type: "error",
                    duration: 3000
                });
            }
        }

}