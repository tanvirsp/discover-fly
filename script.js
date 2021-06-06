const firstClassIncrease = document.getElementById("firstClassIncrease");
    firstClassIncrease.addEventListener("click",function(){
        handleIncreaseDecrease(true, 'firstClass')
    })

const firstClassDecrease = document.getElementById("firstClassDecrease");
    firstClassDecrease.addEventListener("click", function(){
        handleIncreaseDecrease(false, 'firstClass')
    })

const economyIncrease = document.getElementById("economyIncrease");
    economyIncrease.addEventListener("click",function(){
        handleIncreaseDecrease(true, 'economy')
    })

const economyDecrease = document.getElementById("economyDecrease");
    economyDecrease .addEventListener("click", function(){
        handleIncreaseDecrease(false, 'economy')
    })

        

function handleIncreaseDecrease(isIncrease, bookingClass){
    const selectedClass = document.getElementById(bookingClass);
    let selectedClassCount = parseInt(selectedClass.value);
         
    if(isIncrease == true){
        selectedClassCount = selectedClassCount + 1
    }
    else if(isIncrease == false && selectedClassCount > 0){
        selectedClassCount = selectedClassCount - 1
    }
    selectedClass.value = selectedClassCount
   
    calculateTotal()

}





function calculateTotal(){
    const firstClass = getInputToNumber('firstClass')
    const economy = getInputToNumber('economy')

    const subtotal = firstClass * 150 + economy * 100;
    document.getElementById('subTotal').innerText = subtotal;
    
    //VAT calculation 10%
    const vat = subtotal * .1;
    document.getElementById('vat').innerText = vat;

    //total amount
    const total = subtotal + vat;
    document.getElementById('total').innerText = total;
    
    
}


function getInputToNumber(bookingClass){
    const bookingInput = document.getElementById(bookingClass);
    const bookingInputNumber = parseInt(bookingInput.value);
    return bookingInputNumber;

}


//Booking confirmation section
const bookinbButton = document.getElementById('bookingButton');
bookinbButton.addEventListener('click', function(){
    document.getElementById("confirm").style.display = "block";
    document.getElementById("form-section").style.display = "none";



    const flyingFrom = document.getElementById("flying-from").value;
    document.getElementById("flying-from-con").innerText = flyingFrom;
    
    const flyingTo = document.getElementById("flying-to").value;
    document.getElementById("flying-to-con").innerText = flyingTo;
    
    const departureDate = document.getElementById("departure-date").value;
    document.getElementById("departure-date-con").innerText = departureDate;
  
    const returnDate = document.getElementById("return-date").value;
    document.getElementById("return-date-con").innerText = returnDate;
    
    const firstClass = document.getElementById("firstClass").value;
    document.getElementById("first-class-com").innerText = firstClass;
    
    const economy = document.getElementById("economy").value;
    document.getElementById("economy-con").innerText = economy;

    const total = document.getElementById('total').innerText;
    document.getElementById('total-con').innerText = total;
  
})



