/* Function for input */

function userInput(inputNumber) {
     /* Total Income */
    const amount = document.getElementById(inputNumber)
    const amountText = amount.value; 
    const totalAmount = parseFloat(amountText);
    // amount.value = "";
    return totalAmount
}


/* The Function for calculate Button */
document.getElementById('calculate').addEventListener('click', function () {
    const totalIncom = userInput('total-income');
    const foodCost = userInput('food-cost');
    const rentCost = userInput('rent-cost');
    const clothesCost = userInput('clothes-cost');
    const totalCost = foodCost + rentCost + clothesCost;

    document.getElementById('total-expenses').innerText = totalCost;

    const balance = totalIncom - totalCost;
    document.getElementById('balance').innerText = balance;
})

/* The Function for save Button */
document.getElementById('save-btn').addEventListener('click', function() {
    const totalIncom = userInput('total-income');

    const saveInput = userInput('save-amount');
    const totalSaveAmount = (saveInput /100) * totalIncom;

    document.getElementById('saving-amount').innerText = totalSaveAmount;
    /* Remaing balance */
    const foodCost = userInput('food-cost');
    const rentCost = userInput('rent-cost');
    const clothesCost = userInput('clothes-cost');
    
    const totalCost = foodCost + rentCost + clothesCost;
    const totalCostWithSave = totalCost + totalSaveAmount;
    const remainingBalance = totalIncom - totalCostWithSave;

    document.getElementById('remaining-balance').innerText = remainingBalance;
})