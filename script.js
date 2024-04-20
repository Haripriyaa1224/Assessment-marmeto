const plus = document.getElementById('increment');
const minus = document.getElementById('decrement');
const quantity = document.getElementById('quantity');
const showQuantity = document.getElementById('cart-quantity');
const addCart = document.getElementById('add-cart');
const discountedPriceElement = document.querySelector('.real-price h1');
const originalPriceElement = document.querySelector('.price h4');
const discount = document.querySelector('.price h3');

console.log(showQuantity, quantity);

const originalPrice = parseFloat(originalPriceElement.textContent.replace('$', '').replace(',', ''));
const discountedPrice = parseFloat(discountedPriceElement.textContent.replace('$', '').replace(',', ''));

const percentageOff = ((originalPrice - discountedPrice) / originalPrice) * 100;


console.log('Original Price:', originalPrice);
console.log('Discounted Price:', discountedPrice);
console.log('Percentage Off:', percentageOff.toFixed() + '%');

discount.textContent = `${percentageOff.toFixed()} % Off`;
plus.addEventListener( 'click', ()=>{
    
    quantity.textContent++;
    showQuantity.textContent = quantity.textContent;
})

minus.addEventListener( 'click', ()=>{
if(quantity.textContent > 0){
    quantity.textContent--;
    showQuantity.textContent = quantity.textContent;
}
else{
    quantity.textContent = 0;
}
})

// variant selection



addCart.addEventListener('click', () => {
    // Create a new message element
    const messageElement = document.createElement('div');
    if(quantity.textContent>0){
        messageElement.textContent = 'Items added successfully!';
    }
    else
    {
        messageElement.textContent = 'Please select a quantity';
        
    }
   
    showQuantity.textContent = '';
    quantity.textContent = 0;
    messageElement.classList.add('success-message');

    messageElement.style.backgroundColor = '#3CB043';
    messageElement.style.padding='10px';
    messageElement.style.color = '#FFFFFF';
    messageElement.style.borderRadius='5px';
    
    // Append the message element to the top of the page
    addCart.insertAdjacentElement('afterend', messageElement);
    
    setTimeout(() => {
        messageElement.remove();
    }, 2000);
});

document.addEventListener("DOMContentLoaded", function() {
    const sizeInputs = document.querySelectorAll('input[name="size"]');
    const colorBoxes = document.querySelectorAll('.color-selector .square-box');
    let selectedSize = null; // Variable to store the selected size variant
    let selectedColor = null; // Variable to store the selected color variant

    sizeInputs.forEach(function(input) {
        input.addEventListener('change', function(event) {
            selectedSize = event.target.value; // Update the selected size when a radio button is changed
            console.log("Selected Size:", selectedSize);
        });
    });

    colorBoxes.forEach(function(box) {
        box.addEventListener('click', function(event) {
            selectedColor = box.style.backgroundColor; // Update the selected color when a color box is clicked
            console.log("Selected Color:", selectedColor);
        });
    });
});
