var kitties = [
  uno = {
    id: 'ky-0',
    name: 'Kitty 1',
    thumbnail: 'landing-kitty01.svg',
    price: 150
  },
  dos = {
    id: 'ky-1',
    name: 'Kitty 2',
    thumbnail: 'landing-kitty03.svg',
    price: 250
  },
  {
    id: 'ky-2',
    name: 'Kitty 3',
    thumbnail: 'landing-kitty05.svg',
    price: 250
  },
  {
    id: 'ky-3',
    name: 'Kitty 4',
    thumbnail: 'landing-kitty07.svg',
    price: 250
  },
  {
    id: 'ky-4',
    name: 'Kitty 5',
    thumbnail: 'landing-kitty09.svg',
    price: 250
  },
  {
    id: 'ky-5',
    name: 'Kitty 6',
    thumbnail: 'landing-kitty11.svg',
    price: 250
  },
  {
    id: 'ky-6',
    name: 'Kitty 7',
    thumbnail: 'landing-kitty13.svg',
    price: 250
  },
  {
    id: 'ky-7',
    name: 'Kitty 8',
    thumbnail: 'landing-kitty15.svg',
    price: 250
  }
];
var order = [];
let total = [];
const render = () => {
  kitties.map((kitty) => {
  $('.js-gallery-list').append(`
<li class="kitty" id="${kitty.id}">
  <h3 class="title">${kitty.name}</h3>
  <img src="https://www.cryptokitties.co/images/${kitty.thumbnail}"/>
  <p>${kitty.price}</p>
</li>
`)
  });
}
const initListeners = () => {
  $('.js-gallery-list').on('click', '.kitty', getIdcat);
  $('.js-btn-cart').on('click', hiddenShopping);
  $('.js-btn-close').on('click', productListClosse);
}
const getIdcat = (e) => {
  var idCat = $(e.currentTarget).attr("id");
  addProduct(e, idCat);
};
const hiddenShopping = () => {
  $('.js-btn-close').removeClass('hidden');
  $('.js-shopping-cart').removeClass('hidden');
  $('.js-btn-cart').addClass('hidden');
}
const productListClosse = () => {
  $('.js-btn-cart').removeClass('hidden');
  $('.js-shopping-cart').addClass('hidden');
  $('.js-btn-close').addClass('hidden');
}
const addProduct = (e, idCat) => {
  const nameCat = e.currentTarget.childNodes[1].textContent;
  const price = e.currentTarget.childNodes[5].textContent;
  //console.log(nameCat, price, idCat);
  $("#product").append(`
<li>
  <b>${nameCat} </b><span> $ ${price} MXN</span>
</li>
`)

  total.push(price);
  console.log(total)
  totalCost();


}

const totalCost= ()=>{
  total.map((price)=>{

  
    console.log(x)
  })
}

$(() => {
  render();
  initListeners();
});