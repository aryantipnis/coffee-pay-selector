let friends = ['Bob', 'Jeremy', 'Max', 'Ben', 'Joe', 'Jack', 'Ryan'];

let balances = JSON.parse(localStorage.getItem('balances')) || new Array(friends.length).fill(0).map(() => new Array(friends.length).fill(0));

let payerIndex = -1;

let products = [
    {
        id: "1",
        name: "Cappuccino",
        img : "https://merriam-webster.com/assets/mw/images/article/art-wap-landing-mp-lg/cappuccino-2029-e80b7c6d318c7862df2c4c8623a11f99@1x.jpg",
        price: 4.5,
    }, 
    {
        id: "2",
        name: "Black Coffee",
        img : "https://dropinblog.net/34246085/files/featured/all_about_black_coffee.png",
        price: 3,
    },
    {
        id: "3",
        name: "Hot Chocolate",
        img : "https://www.allrecipes.com/thmb/lnb_004MI6wGuJXQ-uDxMUNZmQk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20211-creamy-hot-cocoa-DDMFS-4x3-ed6183b2bbb74bbba4a06a78e4d72350.jpg",
        price: 5,
    },
    {
        id: "4",
        name: "Cold Coffee",
        img : "https://myfoodstory.com/wp-content/uploads/2022/04/Cold-Coffee-3-ways-500x375.jpg",
        price: 5.5,
    },
    {
        id: "5",
        name: "Machiato",
        img : "https://thelittlestcrumb.com/wp-content/uploads/salted-caramel-macchiato-featured-image-1.jpg",
        price: 4,
    },
    {
        id: "6",
        name: "Americano",
        img : "https://images.squarespace-cdn.com/content/v1/5a7cbe247131a5f17b3cc8fc/1519447742018-MOHBW2G0VOQ7QSCPJE14/Americano-Coffee-Lounge-Ingredients.jpg",
        price: 3.5,
    },
    {
        id: "7",
        name: "Latte",
        img : "https://coffeeaffection.com/wp-content/uploads/2020/01/how-to-make-a-latte-at-home.jpg",
        price: 4.75,
    }
];

export function getProducts() {
    const storedProducts = localStorage.getItem('products');
    return storedProducts ? JSON.parse(storedProducts) : products;
  }
  
  export function changePrices(menuPrices) {
    const updatedProducts = products.map(product => {
      const newPrice = parseFloat(menuPrices[product.name]);
      return { ...product, price: newPrice };
    });
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  }

export function choosePayer() {
    let minSum = Infinity;
    for (let i = 0; i < balances.length; i++) {
        let sum = getTotal(i);
        if (sum < minSum) {
            minSum = sum;
            payerIndex = i;
        }
    }
    return friends[payerIndex];
}

export function getBalances(index){
    let arr = [];
    for(let i = 0; i < friends.length; i++){
        if(i !== index){
            arr.push([friends[i], balances[index][i]])
        }
    }
    return arr;
}

export function getFriends(){
    return friends;
}

export function makePayment(){
    products = getProducts();
    products.forEach((product, friendIndex) => {
        balances[friendIndex][payerIndex] += -product.price;
        balances[payerIndex][friendIndex] += +product.price;
    });
    localStorage.setItem('balances', JSON.stringify(balances));
}

export function settleAllUp(value) {
    balances = new Array(friends.length).fill(0).map(() => new Array(friends.length).fill(0));
    localStorage.setItem('balances', JSON.stringify(balances));
    return getBalances(value);
}

export function getTotal(value){
    let sum = 0;
    for (let j = 0; j < balances[value].length; j++) {
        sum += balances[value][j];
    }
    return sum;
}