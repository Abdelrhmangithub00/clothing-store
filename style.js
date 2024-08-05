const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


document.addEventListener('DOMContentLoaded', () => {
  const cart = [];
  const cartItemsContainer = document.querySelector('.cart-items');
  const cartTotal = document.querySelector('.cart-total');

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      const productElement = button.closest('.product');
      const productId = productElement.getAttribute('data-id');
      const productName = productElement.getAttribute('data-name');
      const productPrice = parseFloat(productElement.getAttribute('data-price'));

      addToCart(productId, productName, productPrice);
      updateCartDisplay();
    });
  });

  function addToCart(id, name, price) {
    const existingProduct = cart.find(item => item.id === id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ id, name, price, quantity: 1 });
    }
  }

  function updateCartDisplay() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;

      const cartItemElement = document.createElement('li');
      cartItemElement.textContent = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity} = $${itemTotal.toFixed(2)}`;
      cartItemsContainer.appendChild(cartItemElement);
    });

    cartTotal.textContent = total.toFixed(2);
  }
});


const product = [
  {
      id: 0,
      image: 'n1.jpg',
      title: "Women's brown shirt",
      price: 120,
  },
  {
      id: 1,
      image: 'n2.jpg',
      title: "Men's striped shirt",
      price: 60,
  },
  {
      id: 2,
      image: 'n3.jpg',
      title: "Men's white shirt",
      price: 230,
  },
  {
      id: 4,
      image: 'n4.jpg',
      title: "Men's half sleeve shirt",
      price: 100,
  },

  {
    id: 5,
    image: 'n5.jpg',
    title: "Men's white shirt",
    price: 100,
  },

{
  id: 6,
  image: 'n6.jpg',
  title: "Men's Short",
  price: 100,
},

{
  id: 7,
  image: 'n7.jpg',
  title: "Men's yellow shirt",
  price: 100,
},

{
  id: 8,
  image: 'n8.jpg',
  title: "Men's black shirt",
  price: 100,
},

{
  id: 8,
  image: 't-4.webp',
  title: "Men's brown shirt",
  price: 100,
},

{
  id: 9,
  image: 't-2.jpg',
  title: "Men's blue T-shirt",
  price: 100,
},

{
  id: 10,
  image: 't-3.avif',
  title: "Men's red T-shirt",
  price: 100,
},

{
  id: 11,
  image: 'f8.jpg',
  title: "Women's blouse",
  price: 100,
}
];
const categories = [...new Set(product.map((item)=>
  {return item}))]
  let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
  var {image, title, price} = item;
  return(
      `<div class='box'>
          <div class='img-box'>
              <img class='images' src=${image}></img>
          </div>
      <div class='bottom'>
      <p>${title}</p>
      <h2>$ ${price}.00</h2>`+
      "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
      `</div>
      </div>`
  )
}).join('')

var cart =[];

function addtocart(a){
  cart.push({...categories[a]});
  displaycart();
}
function delElement(a){
  cart.splice(a, 1);
  displaycart();
}

function displaycart(){
  let j = 0, total=0;
  document.getElementById("count").innerHTML=cart.length;
  if(cart.length==0){
      document.getElementById('cartItem').innerHTML = "Your cart is empty";
      document.getElementById("total").innerHTML = "$ "+0+".00";
  }
  else{
      document.getElementById("cartItem").innerHTML = cart.map((items)=>
      {
          var {image, title, price} = items;
          total=total+price;
          document.getElementById("total").innerHTML = "$ "+total+".00";
          return(
              `<div class='cart-item'>
              <div class='row-img'>
                  <img class='rowimg' src=${image}>
              </div>
              <p style='font-size:12px;'>${title}</p>
              <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
              "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
          );
      }).join('');
  }

  
}




// --------------------------
function toggleText() {
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");
  const btnText = document.getElementById("readMoreBtn");

  if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.textContent = "Continue Reading";
      moreText.style.display = "none";
  } else {
      dots.style.display = "none";
      btnText.textContent = "Read Less";
      moreText.style.display = "inline";
  }
}
