const showUser = (root) => {
    root.innerHTML =`
    <div class="user_head">
        <ul class="list_item_user">
            <li class="item_user_head calendar">
                <i class="fa-solid fa-calendar-arrow-down"></i>
                <p class="item_user_head_info founding"></p>
                <p class="item_user_head_name">Total working day</p>
            </li>
            <li class="item_user_head used">
                <i class="fa-solid fa-users"></i>
                <p class="item_user_head_info account"></p>
                <p class="item_user_head_name">Total account users</p>
            </li>
            <li class="item_user_head pay">
                <i class="fa-solid fa-money-bill-transfer"></i>
                <p class="item_user_head_info money"></p>
                <p class="item_user_head_name">Total sales this week </p>
            </li>
            <li class="item_user_head user_isonline">
                <i class="fa-solid fa-globe"></i>
                <p class="item_user_head_info isonline">100</p>
                <p class="item_user_head_name">Total user is online</p>
            </li>
        </ul>
    </div>
    <canvas class="chart_culumn" id="myChart" style="width:100%;max-width:600px"></canvas>
    `
    var xValues = ["Nike", "Burberry", "Fila", "Adidas", "Puma"];
    var yValues = [4215, 897, 2976, 3835, 1532];
    var barColors = ["#c4c4c4", "#c4c4c4","#c4c4c4","#c4c4c4","#c4c4c4"];
        
    new Chart("myChart", {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            legend: {display: false},
            title: {
                display: true,
                text: "This month's earnings statistics"
            }
          }
    });
    totalday = 0;
    founding = new Date('08-07-2022');
    now = new Date();
    while(founding.getTime() < now.getTime()){
        founding.setDate(founding.getDate() + 1);
        totalday++;
    }
    document.querySelector(".founding").innerHTML = totalday;
    document.querySelector(".account").innerHTML = (now.getYear()-122)*365 + now.getMonth()*31 + now.getDate()*24 + now.getHours();
    document.querySelector(".money").innerHTML = '$'+(Math.floor(Math.random() * (10000 - 5000) ) + 5000).toString();
    document.querySelector(".isonline").innerHTML = Math.floor(Math.random() * (1000 - 100) ) + 100;
}