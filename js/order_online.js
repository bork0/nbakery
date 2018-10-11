let discountSize = [
  '2%',
  '2%',
  '2%',
  '2%',
  '2%',
  '2%',
  '3%',
  '3%',
  '3%',
  '3%',
  '5%',
  '5%',
  '5%',
  '5%',
  '5%',
  '5%',
  '5%',
  '5%',
  '5%',
  '5%',
  '5%',
  '7%',
  '7%',
  '7%',
  '10%',
  '10%',
  '10%',
  '15%',
  '15%',
  '20%',
  '25%',
  '30%',
];

function randomDiscount() {
  document.getElementById('display_discount').value = 'Your discount is ' + discountSize [Math.floor(Math.random()* discountSize.length)]
}

    document.getElementById('discount').addEventListener('click', randomDiscount);
    
    
let products = [
  'bagel',
  'cinnamon bun',
  'croissant',
  'muffin',
  'hot sandwich',
  'grilled panini sandwich',
  'cold sandwich',
  'vegetarian sandwich',
  'cookies',
  'pastry',
  'pie',
  'macaron',
  'hot chocolate',
  'cocoa',
  'tea',
]

function randomProduct() {
  document.getElementById('display_product').value = 'We offer you to try our ' + products[Math.floor(Math.random()* products.length)]
}

    document.getElementById('product').addEventListener('click', randomProduct);