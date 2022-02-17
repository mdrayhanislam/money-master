//handle calculator button event
document.getElementById('calculator-button').addEventListener
('click', function(){
    // get amount deposited
    //food
    const foodInput= document.getElementById('Food-input');
    const foodAmount = foodInput.value ;
    foodInput.value='';
   //Rent
   const  rentInput= document.getElementById('Rent-input');
    const rentAmount = rentInput.value ;
    rentInput.value='';
    //Clothes
    const clothesInput= document.getElementById('Clothes-input');
    const clothesAmount = clothesInput.value ;
    clothesInput.value='';
    //total expenses
    const totalexpenses = parseFloat (foodAmount) + parseFloat (rentAmount) + parseFloat (clothesAmount) ;
    //Expenses
    const expensesTotal = document.getElementById('total-expenses');
    expensesTotal.innerText= totalexpenses;
   
})