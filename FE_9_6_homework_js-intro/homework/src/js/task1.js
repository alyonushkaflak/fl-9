let defaultPrice = prompt('Enter the price','');
let discount = prompt('Enter the discount','');
let saved = defaultPrice * discount / 100;
let priceWithDiscount= defaultPrice - saved;


if(defaultPrice < 0 || discount > 100 || discount < 0){
    console.error('Invalid data');
} else {
    console.log(`Price without discount: ${defaultPrice}
    Discount: ${discount}%
    Price with discount: ${priceWithDiscount.toFixed(2)}
    Saved: ${saved.toFixed(2)}`);
}
