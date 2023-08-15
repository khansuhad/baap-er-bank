const deposit = document.getElementById('deposit')
const withdraw = document.getElementById('withdraw')
const balanced = document.getElementById('balanced')
const depositInput = document.getElementById('depositInput')
const withdrawInput = document.getElementById('withdrawInput')

    
        const defaultValue ='00' ;
        deposit.innerText =  balanced.innerText =   withdraw.innerText = defaultValue ;
       
        

     document.getElementById('withdrawButton').addEventListener('click' ,function(){

        
    
        const withdrawvalue = parseInt(withdraw.innerText);
        const withdrawInputvalue = parseInt(withdrawInput.value);
        const balancedvalue = parseInt(balanced.innerText);
        
       

         withdraw.innerText = withdrawInputvalue + withdrawvalue ;
         balanced.innerText = balancedvalue - withdrawInputvalue ;
         withdrawInput.value ='';

    })

  
    document.getElementById('depositButton').addEventListener('click' ,function(){

        const depositvalue = parseInt(deposit.innerText);
        const depositInputvalue = parseInt(depositInput.value);
        const balancedvalue = parseInt(balanced.innerText)
       
         deposit.innerText = depositInputvalue + depositvalue ;
         balanced.innerText = depositInputvalue + balancedvalue ;
         depositInput.value ='';

    })