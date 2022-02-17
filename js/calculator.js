//handle calculator button event
document.getElementById('calculator-button').addEventListener
('click', function(){
    // get amount deposited
    const depositInput= document.getElementById('Food-input');
    const depositAmount = depositInput.value ;
    const depositTotal = document.getElementById('total-expenses');
    depositTotal.innerText= depositAmount;
    depositInput.value='';
})