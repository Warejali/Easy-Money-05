/* Function for input */
function userInput() {
    /* Total Income */
    const income = document.getElementById('total-income')
    const incomeText = income.value;
    const totalIcome = parseFloat(incomeText);
    
    /* Cost for Food */
    const food = document.getElementById('food-cost');
    const foodText = food.value;
    const foodCost = parseFloat(foodText);
    
    /* Cost for rent */
    const rent = document.getElementById('rent-cost');
    const rentText = rent.value;
    const rentCost = parseFloat(rentText);

    /* Cost for Cloths */
    const clothes = document.getElementById('clothes-cost');
    const clothesText = clothes.value;
    const clothesCost = parseFloat(clothesText);

    /* Total Cost and Balance*/
    const totalCost = foodCost + rentCost + clothesCost;
    document.getElementById('total-expenses').innerText = totalCost;
    const balance = totalIcome - totalCost;
    document.getElementById('balance').innerText = balance;
    
}

/* Function for save */
function saveAmount() {

    const saveInput = document.getElementById('save-amount');
    const saveInputText = saveInput.value;
    const save = parseFloat(saveInputText);

    const totalSave =  save + totalIcome;

    document.getElementById('saving-amount').innerText = totalSave;
}

/* The Function for calculate Button */
document.getElementById('calculate').addEventListener('click', function () {
    userInput()
})

/* The Function for save Button */
document.getElementById('save-btn').addEventListener('click', function() {
    saveAmount()
})