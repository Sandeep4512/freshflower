function navBar(imgUrl,brand){
    return  `<div class="nav">
    <div class="brand">
        <a href="product.html">
            <img  src=${imgUrl}  />
        </a>
        <a href="product.html">
            <h3>
                ${brand}
            </h3>
        </a>
    </div>
    <div class="menu-items">
        <a href="#">About</a>
        <a href="#">Cart</a>
        <a href="signin.html">SignIn</a>
    </div>
</div>`;
}
const imgURL="https://cdn.dribbble.com/users/1493668/screenshots/5592245/__.png?compress=1&resize=400x300";
const navHolder=document.createElement('div');
      navHolder.innerHTML=navBar(imgURL,"FreshFlower");

      document.body.appendChild(navHolder);


