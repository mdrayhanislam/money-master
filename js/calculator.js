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
    const totalExpenses = parseFloat (foodAmount) + parseFloat (rentAmount) + parseFloat (clothesAmount) ;

    //Expenses
    const expensesTotal = document.getElementById('total-expenses');
    //condition
    if(foodAmount>0 && rentAmount>0 && clothesAmount>0  ){
        expensesTotal.innerText= totalExpenses;
    }
    else{
        const message =document.getElementById('mgs');
        message.style.display= "block";
    
    }
    
    //Income Balance
    const incomeInput= document.getElementById('Income-input');
    const incomeAmount = incomeInput.value ;
    incomeInput.value='';
   //Main balance
    const totalBalance = parseFloat (incomeAmount )- parseFloat  (totalExpenses) ;
    const totalIcome = document.getElementById('balance');

    //condition
    if(foodAmount>0 && rentAmount>0 && clothesAmount>0  ){
        
        totalIcome.innerText = totalBalance ;
    }
    else{
        const message =document.getElementById('mgs');
        message.style.display= "block";
    }
    //2nd condition
    if(incomeAmount>totalExpenses){
     
    }
  
//Saving Amount
    document.getElementById('save-btn').addEventListener
('click',function(){
    
   const saveInputs = document.getElementById('save-input');
   const saveAmount = saveInputs.value ;
   saveInputs.value='';
   const inputSave = parseFloat(saveAmount);
   //Saving calculation
   const money = parseFloat (incomeAmount);
   const savingAmount = (  money * inputSave)/ 100;

//    const totalsaving =
   const savingTotal = document.getElementById('save-amount');
    savingTotal.innerText= savingAmount;

    const remainingTotal= parseFloat (incomeAmount) - parseFloat (savingAmount);
    const remainingBalance = document.getElementById('rb');
    remainingBalance.innerText = remainingTotal;
});

});
 


