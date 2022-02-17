
/* Function for input */
function userInput(inputNumber) {
    const amount = document.getElementById(inputNumber)
    if (inputNumber > 0) {
        const amountText = amount.value; 
        const totalAmount = parseFloat(amountText);
        return totalAmount
    }
    else{
        document.getElementById('alart-message').style.display = 'block'
        document.getElementById('account-section').style.display = 'none'
    }
}

/* Functions for total cost */
function expenses() {
    const foodCost = userInput('food-cost');
    const rentCost = userInput('rent-cost');
    const clothesCost = userInput('clothes-cost');
    const totalCost = foodCost + rentCost + clothesCost;
    return totalCost
}


/* The Function for calculate Button */
document.getElementById('calculate').addEventListener('click', function () {
    const totalIncome = userInput('total-income');
    
    /* Total expenses */
    const totalExpenses = expenses();
    document.getElementById('total-expenses').innerText = totalExpenses;
    
    /* After expenses Balance */
    const balance = totalIncome - totalExpenses;
    document.getElementById('balance').innerText = balance;
})

/* The Function for save Button */
document.getElementById('save-btn').addEventListener('click', function() {
    const totalIncome = userInput('total-income');
    
    /* Save Anount */
    const saveInput = userInput('save-amount');
    const totalSaveAmount = (saveInput /100) * totalIncome;
    document.getElementById('saving-amount').innerText = totalSaveAmount;
    
    /* Remaing balance */
    const totalExpenses = expenses();
    const totalCostWithSave = totalExpenses + totalSaveAmount;
    const remainingBalance = totalIncome - totalCostWithSave;

    document.getElementById('remaining-balance').innerText = remainingBalance;
})


