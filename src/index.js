// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span');
  let nextPrice = price.innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  let subtotal = product.querySelector('.subtotal span');
  let finalPrice = nextPrice * quantity;
  subtotal.innerHTML = finalPrice;
  return finalPrice;
}

function calculateAll() {
  
  const manyProduct = document.querySelectorAll('.product')
for (let i = 0; i < manyProduct.length; i++){
  updateSubtotal(manyProduct[i]);
}

let sum = 0;

let finalSubtotal = document.querySelectorAll('.subtotal span')
for (let i = 0; i < finalSubtotal.length; i++){
  sum += Number((finalSubtotal[i].innerText))
}

 let finalPrice = document.querySelector('h2 span');
 finalPrice.innerHTML = String(sum);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  removeButtons.parentNode.removeChild(".btn")
}

// ITERATION 5

function createProduct() {
  
}





window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  const removeButtons = document.getElementsByClassName("btn-remove")
  
  calculatePricesBtn.addEventListener('click', calculateAll);

  for (let i = 0; i < removeButtons.length; i++){
    removeButtons[i].addEventListener('click', () =>{
      removeProduct;
    });
  }
  
})
