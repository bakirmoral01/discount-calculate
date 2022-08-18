document.getElementById('btn-calculate').addEventListener('click', function () {

    const domInput = document.getElementById('dom-input');
    const dom = domInput.value;
    if (dom == "DOM") {
        const discountField = document.getElementById('discount-field');
        const previousDiscountFieldString = discountField.value;
        const previousDiscountField = parseFloat(previousDiscountFieldString);
        discountField.value = '';
        const priceAmountElement = document.getElementById('price-total');
        const previousPriceAmountString = parseFloat(priceAmountElement.innerText);

        priceAmountElement.innerText = previousDiscountField;
        const discountAmountElement = document.getElementById('discount-total');
        const previousDiscountAmountString = parseFloat(discountAmountElement.innerText);

        const newDiscount = previousDiscountField * (30 / 100);
        discountAmountElement.innerText = newDiscount
    }
    else {
        alert("For Discount Input Dom")
    }







})