// Check product and quantity 
function handleProductChange (product, isIncrease) {
   const productCount =  getInputValue(product);
   
   let productNewCount = productCount;
   if (isIncrease == true) {
      productNewCount = productCount + 1;
   } 
   if (isIncrease == false && productNewCount > 0) {
      productNewCount = productCount - 1;
   }

   document.getElementById(product + '-quantity').value = productNewCount;
   let productTotal = 0;
   if (product == 'phone') {
      productTotal = productNewCount * 1219;
   } 
   if (product == 'case') {
      productTotal = productNewCount * 59;
   }

   document.getElementById(product + '-total').innerText = productTotal;
   calculateTotal();
}

// Calculate Subtotal, Tax and Total
function calculateTotal() {
   const phoneCount = getInputValue('phone');
   document.getElementById('invoice-phone-quantity').innerText = phoneCount;
   document.getElementById('invoice-phone-total').innerText = phoneCount * 1219;

   const caseCount = getInputValue('case');
   document.getElementById('invoice-case-quantity').innerText = caseCount;
   document.getElementById('invoice-case-total').innerText = caseCount * 59;

   const subtotal = phoneCount * 1219 + caseCount * 59;
   document.getElementById('subtotal').innerText = subtotal;
   document.getElementById('invoice-subtotal').innerText = subtotal;

   const tax = Math.round((subtotal / 100) * 5);
   document.getElementById('tax').innerText = tax;
   document.getElementById('invoice-tax').innerText = tax;

   const total = subtotal + tax;
   document.getElementById('total').innerText = total;
   document.getElementById('invoice-total').innerText = total;

}

// Get product quantity value
function getInputValue(product) {
   const productInput = document.getElementById(product + '-quantity');
   const productCount = parseFloat(productInput.value);
   return productCount;
}

// Checkout Button Event Handler
const checkoutBtn = document.getElementById('checkout-btn');
checkoutBtn.addEventListener('click', function() {
   const shoppingCartArea = document.getElementById('shopping-cart-area');
   shoppingCartArea.style.display = 'none';
   const checkoutDetailsArea = document.getElementById('checkout-details-area');
   checkoutDetailsArea.style.display = 'block';
})

// Confirm Button Event Handler
const confirmBtn = document.getElementById('confirm-order-btn');
confirmBtn.addEventListener('click', function() {
   const checkoutDetailsArea = document.getElementById('checkout-details-area');
   checkoutDetailsArea.style.display = 'none';
   const invoiceArea = document.getElementById('invoice-area');
   invoiceArea.style.display = 'block';

   const customerName = document.getElementById('customer-name').value;
   document.getElementById('show-customer-name').innerText = customerName;

   const customerEmail = document.getElementById('customer-email').value;
   document.getElementById('show-customer-email').innerText = customerEmail;

   const customerPhone = document.getElementById('customer-phone').value;
   document.getElementById('show-customer-phone').innerText = customerPhone;

   const customerAddress = document.getElementById('customer-address').value;
   document.getElementById('show-customer-address').innerText = customerAddress;
})