
function userInput(inputNumber) {
    const amount = document.getElementById(inputNumber)
    
        const amountText = amount.value; 
        const totalAmount = parseFloat(amountText);
    if (totalAmount === "" || isNaN(totalAmount) || totalAmount < 0) {
        document.getElementById('alart-message').style.display = 'block',
        document.getElementById('total-expenses') = '00'
    }
    else {
        document.getElementById('alart-message').style.display = 'none'
         return totalAmount;
         
    }
         
} 

/* Functions for total cost */
function expenses() {
    const foodCost = userInput('food-cost');
    const rentCost = userInput('rent-cost');
    const clothesCost = userInput('clothes-cost');
    const totalCost = foodCost + rentCost + clothesCost;
    return totalCost;
}


/* The Function for calculate Button */
document.getElementById('calculate').addEventListener('click', function () {
    const totalIncome = userInput('total-income');
    
    /* Total expenses */
    const totalExpenses = expenses();
    document.getElementById('total-expenses').innerText = totalExpenses;
    
    /* After expenses Balance */
    

    if (totalIncome > totalExpenses) {
        const balance = totalIncome - totalExpenses;
        document.getElementById('balance').innerText = balance;
        document.getElementById('alart-message-2').style.display = 'none' 
    }
    else{
        document.getElementById('alart-message-2').style.display = 'block';
         document.getElementById('total-expenses') = '00'
    }

})

/* The Function for save Button */
document.getElementById('save-btn').addEventListener('click', function() {
    const totalIncome = userInput('total-income');

    const currentBalance = document.getElementById('balance').innerText;

    
    /* Save Anount */
    const saveInput = userInput('save-amount');
    const totalSaveAmount = (saveInput /100) * totalIncome;
    document.getElementById('saving-amount').innerText = totalSaveAmount;
    
    /* Remaing balance */
    const totalExpenses = expenses();
    
    if (totalSaveAmount < currentBalance) {
        document.getElementById('alart-message-3').style.display = 'none';
        
        const totalCostWithSave = totalExpenses + totalSaveAmount;
        const remainingBalance = totalIncome - totalCostWithSave;
        document.getElementById('remaining-balance').innerText = remainingBalance;
    }

    else{
        document.getElementById('alart-message-3').style.display = 'block',
        document.getElementById('saving-amount').innerText = '00';
    }
    

})

    