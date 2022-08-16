//step-1: add click event handeler with submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    //step-2: get the email address inside the email inout field
    const emailFeild = document.getElementById('user-email');
    const email = emailFeild.value;
    //step-3: get password
    //3.a: set id on the html element
    //3.b: get the element 
    //3.c: get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    //password verify
    if(email === 'sontan@gmail.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else{  
    alert('Fokinnir baccha,Password vule gesos!!! tokee ami tejjo sontan ghusona korlam.');
    }
    
})