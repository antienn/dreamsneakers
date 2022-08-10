const showShoe = (page, listShoee,length, root) => {
    root.innerHTML = listShoee.slice(0,length).map(shoe => `
    <div class="shoe" id="${shoe.id}">
        <div class="shoe_sale">
            ${shoe.sale}%
        </div>
        <div class="shoe_img">
            <img src="${shoe.image}">
        </div>
        <div class="shoe_name">
            ${shoe.name}
        </div>
        <div class="shoe_price">
            <p class="shoe_newprice">$${shoe.price}.00</p>
            <p class="shoe_oldprice">$${shoe.oldprice}.00</p>
        </div>
    </div>
    `).join("")

    document.querySelectorAll('.shoe').forEach(e => e.addEventListener('click', () => {
        localStorage.setItem('tmpID', e.id);
        window.location.href = './infor.html';
    }))
}