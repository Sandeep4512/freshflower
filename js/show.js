
function showProductDetails(p){
     return `  <div class="showContainer">
     <div class="col2">
         <img src=${p.imgUrl}  />
     </div>
     <div class="col1">
          <div class="desBlock">
              <div class="row">
                  <h4>${p.name}</h4>
                  <h4>price: &#8377;${p.price}</h4>
              </div>
              <p>
              <b>Descripation :-</b><br/>${p.des} 
              <b>productcontant:-</b><br/> ${p.productcontant}
              </p>
          </div>
     </div>
     <div class="col1">
        <div class="action">
            <div class="row">
                <h4>Price :</h4>
                <h4>&#8377; ${p.price}</h4>
            </div>
            <div class="row">
                <p style="margin-top: -3px;">qty</p>
                <div>
                   <select>
                       <option value="1">1</option>
                       <option value="2">2</option>
                       <option value="3">3</option>
                       <option value="4">4</option>
                       <option value="5">5</option>
                   </select>
                </div> 
            </div>
            <button>Add to cart</button>
        </div>
    </div>
   </div>`;
}
const products=[{
    id:"1",
    name:"Mixed Roses " ,
    price:499,
    des:"Whatever the occasion or success party may be, our mixed roses bouquet assorted with 10 red, white, pink and yellow hand-picked, full-bloomed roses with green leaves wrapped in paper, is the perfect gift option.",
    productcontant:" 4 Pink Roses, 2 Red Roses, 2 Yellow Roses, 2 White Roses",
    imgUrl:"https://225495-687452-raikfcquaxqncofqfm.stackpathdns.com/media/catalog/product/cache/1/small_image/300x300/1aca54b891ac709216cb88c50180f5e9/m/f/mfa1747.jpg"
},
{
    id:"2",
    name:"Romantic Rose",
    price:612,
    des:"Love is the best emotion in this world and has been proved and argued over the decades. Be the one to set a new example by purchasing this Romantic Rose bouquet for the love of your life. This bouquet contains a pack of 12 red roses. They are completely fresh and you will keep remembering this gesture for the times to come. Buy this today and get it delivered whenever you want.",
    productcontant:" -12 Red Roses in Red Paper Packing",
    imgUrl:"https://225495-687452-raikfcquaxqncofqfm.stackpathdns.com/media/catalog/product/cache/1/small_image/300x300/1aca54b891ac709216cb88c50180f5e9/r/o/romantic_rose_bouquet.png"
},
{
    id:"3",
    name:"Yellow Roses ",
    price:1117,
    des:"This tremendous basket of 20 Yellow roses is an astonishing sight. The fresh yellow roses make the environment dazzling and emit a lot of influential energy to cheer up your loved ones.",
    productcontant:"  20 Yellow Roses - A Basket  - Seasonal Green Fillers ",
    imgUrl:"https://225495-687452-raikfcquaxqncofqfm.stackpathdns.com/media/catalog/product/cache/1/small_image/300x300/1aca54b891ac709216cb88c50180f5e9/y/e/yellow-roses-basket-995.jpg"
},
{
    id:"4",
    name:"Alphabet Flower ",
    price:2256,
    des:"Personalize your greeting for an anniversary or birthday with our special alphabet flower arrangements designed with 20 hand-picked red roses, 20 other seasonal flowers depending on the availability and also loaded with available seasonal leaves.",
    productcontant:" Flowers : 25 Red Roses & 25 Yellow Carnation  --  S Alphabetic Arrangement   ---  Seasonal Green Filler ",
    imgUrl:"https://225495-687452-raikfcquaxqncofqfm.stackpathdns.com/media/catalog/product/cache/1/small_image/300x/11c945e9b0d7a3e2da798549b111dafd/h/o/home-flower-5.png"
},

{
    id:"5",
    name:"Mix Gerbera",
    price:856,
    des:"Make your dearest one feel more special with our beautiful mix gerbera arrangement filled with 17 numbers of full-bloomed, fresh, hand-picked white, red and pink gerberas along with beautiful green leaves.",
    productcontant:"- 17 Mix Gerberas   strong>- Seasonal Green Fillers",
    imgUrl:"https://225495-687452-raikfcquaxqncofqfm.stackpathdns.com/media/catalog/product/cache/1/small_image/300x/11c945e9b0d7a3e2da798549b111dafd/m/i/mix-gerbera-arrangement-795.jpg"
},
{
    id:"6",
    name:"Elegance 12 Pink Roses",
    price:768,
    des:"Do you want to gift something extraordinary? Check this Elegance 12 Pink Roses Bouquet right now in the images above. You will be mesmerized as you zoom into the snapshot. With 12 Pink Roses, Pink Placing Paper, Green Fillers, and Pink Ribbon you are getting a great package at just Rs. 649/- to make someone feels special at the first attempt. In fact, learn to create the unforgettable first impression with this elegant bouquet.",
    productcontant:"- Flowers : 12 Pink Roses  Wrapped in Pink Paper  --Tied with Pink Ribbon --Seasonal Green Fillers",
    imgUrl:"https://225495-687452-raikfcquaxqncofqfm.stackpathdns.com/media/catalog/product/cache/1/small_image/300x/11c945e9b0d7a3e2da798549b111dafd/e/l/elegance--12-pink-roses-bouquet-mfa599_1.jpg"
},
{
    id:"7",
    name:"Yellow Roses Vase",
    price:899,
    des:"The yellow colour is practically associated to the sun and hence it can be gifted to cheer up people’s life. Grab this exclusive bouquet of 12 yellow roses elegantly arranged in a beautiful vase.",
    productcontant:"- 12 Yellow Roses   - A Glass vase     - Seasonal Green Filler",
    imgUrl:"https://225495-687452-raikfcquaxqncofqfm.stackpathdns.com/media/catalog/product/cache/1/small_image/300x300/1aca54b891ac709216cb88c50180f5e9/y/e/yellow-roses-vase-mfa745.jpg"
},
{
    id:"8",
    name:"Mixed Gerbera ",
    price:899,
    des:"Send your warm wishes with our warm combination like our 10 mixed gerbera bouquet filled with orange, yellow and white gerberas wrapped in a bright orange paper and tied up in an orange and pink ribbon",
    productcontant:"- 10 Mix Gerberas - Orange Paper Packing",
   imgUrl:"https://225495-687452-raikfcquaxqncofqfm.stackpathdns.com/media/catalog/product/cache/1/small_image/300x/11c945e9b0d7a3e2da798549b111dafd/m/i/mixed-gerbera-bouquet-549.jpg"
},
{
    id:"9",
    name:"Peaceful White ",
    price:699,
    des:"Do you have a day which is quite overwhelming or may be a sad one? Do you have someone you wish to apologise to, but you have no idea how? Then buy this Peaceful White Carnation bouquet and let your message be said without words. These fresh 12 White Carnations are soothing and gentle in color. The receiver will know you are sorry for their loss or the fight that you both had. Finally, this might bring a change to reconcile!",
    productcontant:"-  Bouquet of 12 White Carnations",
   imgUrl:"https://225495-687452-raikfcquaxqncofqfm.stackpathdns.com/media/catalog/product/cache/1/small_image/300x300/1aca54b891ac709216cb88c50180f5e9/p/e/peaceful_white_carnation.jpg"
},
{
    id:"10",
    name:"Vibrant Mix Roses ",
    price:699,
    des:"Celebrate the anniversary, retirement or a party with this Vibrant Mix Roses bouquet. Gift those who are the highlight of the day, or surprise them with an unexpected delivery at their home or office. The delivery will be made as per your convenience when you are asked to choose. This is a bunch of 50 mixed colored roses which are sure-shot invitation for smile and heart felt emotions at a glance. This bouquet itself renders the receiver speechless with unspoken congratulations.",
    productcontant:"- Bunch of 50 mixed colors roses  - Wrapped in Red Paper   - Tied with White Ribbon",
   imgUrl:"https://225495-687452-raikfcquaxqncofqfm.stackpathdns.com/media/catalog/product/cache/1/small_image/300x/11c945e9b0d7a3e2da798549b111dafd/v/i/vibrant_mix_roses.jpg"
},
{
    id:"11",
    name:"Pink Roses Basket   ",
    price:699,
    des:"Make your parent’s anniversary more special with our beautiful and elegant pink roses basket filled with fresh, 12 pink roses along with fresh green seasonal leaves perfectly placed in a basket.",
    productcontant:"- 12 Pink Roses - 1 Basket  - Seasonal Green Filler",
    imgUrl:"https://225495-687452-raikfcquaxqncofqfm.stackpathdns.com/media/catalog/product/cache/1/small_image/300x300/1aca54b891ac709216cb88c50180f5e9/p/i/pink-roses-basket-745.jpg"
},
{
    id:"12",
    name:"Mixed Roses Basket",
    price:699,
    des:"Make your special person’s birthday special with our elegant 15 mixed roses basket full of white, pink and yellow hand-picked full-bloomed and fresh roses assorted with seasonal green leaves and tiny white flowers.",
    productcontant:"- 15 Mix Roses    - 1 Handle basket",
    imgUrl:"https://225495-687452-raikfcquaxqncofqfm.stackpathdns.com/media/catalog/product/cache/1/small_image/300x/11c945e9b0d7a3e2da798549b111dafd/m/i/mixed-roses-basket-mfa649.jpg"
},
{
    id:"13",
    name:"Dazzle Flower",
    price:699,
    des:"A combination that is perfect for all ocassions and all relationships, this magnificent vase arrangement of Dazzle Flower is a must buy for the poeple who fall for flowers and have a special ocassion to celebrate..",
    productcontant:"- 30 Pink Roses and 5 White Asiatic Lilies   - A Square Glass Vase",
    imgUrl:"https://225495-687452-raikfcquaxqncofqfm.stackpathdns.com/media/catalog/product/cache/1/small_image/300x300/1aca54b891ac709216cb88c50180f5e9/d/a/dazzle_flower_1.jpg"
},
{
    id:"14",
    name:"50 White Rose Bouquet",
    price:699,
    des:"Make this celebration of your loved ones become more excellent if you are not there with this large bouquet of 50 white roses. Offer an enormous surprise to special one with this glamorous bouquet of respect, purity, and love..",
    productcontant:"-50 White Roses     - Tied with White Ribbon",
    imgUrl:"https://225495-687452-raikfcquaxqncofqfm.stackpathdns.com/media/catalog/product/cache/1/small_image/300x300/1aca54b891ac709216cb88c50180f5e9/5/0/50-white-rose-bouquet-1745_1.jpg"
},
{
    id:"15",
    name:"Be My Valentine",
    price:699,
    des:"Are you going to start a new journey of love on this Valentine's day? Let us know if you are confused and still haven't decided how to express your feelings to that  someone special because we have a great deal for you here!This gorgeous pack of Â 50 Red RosesÂ in heart-shaped arrangement and a cute 6teddy will make your way to the love of your life..",
    productcontant:"Flower : 50 Red Roses    A Heart Shape Arrangement   Seasonal Green Filler   A designer wood basket   A six inch teddy",
    imgUrl:"https://225495-687452-raikfcquaxqncofqfm.stackpathdns.com/media/catalog/product/cache/1/small_image/300x300/1aca54b891ac709216cb88c50180f5e9/b/e/be-my-valentine-2195.jpg"
},
  
];


let id=document.location.search.split("=")[1];
const sp=products.find(function(p){ if(p.id==id){ return p}});
const productHolder=document.createElement('div');
      document.body.appendChild(productHolder);
      productHolder.innerHTML=showProductDetails(sp);

      
     const footerHolder=document.createElement('div');
              document.body.appendChild(footerHolder);
              footerHolder.innerHTML=`
               <div class="footer" style="background-color: white;padding: 10px;">
              <p style="text-align: center;">All copy right resversed with <a  style="color: blue; href="product.html">FreshFlower</a></p>
              </div>
              `;
              let cartItem=localStorage.getItem("cartItem")?JSON.parse(localStorage.getItem("cartItem")):[];
              const counter=document.querySelector('.counter');
              counter.innerHTML=cartItem.length;

