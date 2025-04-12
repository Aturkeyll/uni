function isValid(inputItem){
    let length = inputItem.value.length;
    const email = document.getElementById("CustEmail").value;
    const Lname = document.getElementById("CustLname").value;
    const Fname = document.getElementById("CFname").value
    const productid = document.getElementById("ProductID1").value;
    const prodDesc = document.getElementById("ProductDescription1").value;
    const tel = document.getElementById("PhNo").value;
    const salesNum = document.getElementById("custrepnum").value;
    const salesRep = document.getElementById("custrep").value;


    if (length == 0){
        inputItem.style.background = "#ffb3b3"; 
    }

    else if (inputItem.id == "CustEmail" && !email.includes("@")){
        inputItem.style.background = "#ffb3b3"; 
    }

    else if (inputItem.id == "CustLname" && /\d+$/.test(Lname)){
        inputItem.style.background = "#ffb3b3"; 
    }

    else if (inputItem.id == "CFname" && /\d+$/.test(Fname)){
        inputItem.style.background = "#ffb3b3"; 
    }


    else if (inputItem.id == "ProductID1" && /^[A-Za-z]+$/.test(productid)){
        inputItem.style.background = "#ffb3b3"; 
    }


    else if (inputItem.id == "ProductDescription1" && /\d+$/.test(prodDesc)){
        inputItem.style.background = "#ffb3b3"; 
    }
 

    else if (inputItem.id == "PhNo" && !/^\d{10}$/.test(tel)){
        inputItem.style.background = "#ffb3b3"; 
    }


    else if (inputItem.id == "custrepnum" && /^[A-Za-z]+$/.test(salesNum)){
        inputItem.style.background = "#ffb3b3"; 
    }


    else if (inputItem.id == "custrep" && /\d+$/.test(salesRep)){
        inputItem.style.background = "#ffb3b3"; 
    }


    else{
        inputItem.style.background = "#e6f9ff";
    }



}


function calcLineTotal(q, up, lt) {
    const quantityInput = document.getElementById(q);
    const unitPriceInput = document.getElementById(up);
    const lineTotalInput = document.getElementById(lt);


    if (quantityInput && unitPriceInput && lineTotalInput) {
      const quantity = quantityInput.value;
      const unitPrice = unitPriceInput.value;
      const lineTotal = quantity * unitPrice;
  
      lineTotalInput.value = lineTotal.toFixed(2);
      subtotal();
    }

    total();

  }




  function subtotal() {
    const subtotalInput = document.getElementById("Subtotal");
    const gstTotalInput = document.getElementById("GST");
    const totalInput = document.getElementById("Total");

    let sub = 0;

    for (let i = 1; i <= 5; i++) {
        const lineInput = document.getElementById(`LineTotal${i}`);
        if (lineInput) {
            sub += parseFloat(lineInput.value) || 0;
        }
    }

    subtotalInput.value = sub.toFixed(2);
    const gst = sub * 0.10;
    gstTotalInput.value = gst.toFixed(2);
    totalInput.value = (sub + gst).toFixed(2);

    total(); 
}


function total(){
    const depositInput = document.getElementById("Deposit");
    const totalInput = document.getElementById("Total");
    const totdueInput = document.getElementById("totdue");

    if (depositInput && totalInput) {
        const deposit = parseFloat(depositInput.value)
        const total = parseFloat(totalInput.value)

        const balance = total - deposit;

        totdueInput.value = balance.toFixed(2);
    }
}


document.addEventListener("submit", function(event) {
    const email = document.getElementById("CustEmail").value;
    const Lname = document.getElementById("CustLname").value;
    const productid = document.getElementById("ProductID1").value;
    const prodDesc = document.getElementById("ProductDescription1").value;
    const title = document.getElementById("Ctitle").value;
    const tel = document.getElementById("PhNo").value;


    if (
        Lname.length > 0 && /^[A-Za-z]+$/.test(Lname) &&
        prodDesc.length > 0 &&
        productid.length > 0 && /\d/.test(productid) &&
        email.includes("@") &&
        title !== "-" &&
        tel.length === 10 && /^\d+$/.test(tel)) 
        {
    
    } 


    


    else {
        event.preventDefault();
    }
});
    

document.addEventListener("DOMContentLoaded", function(){

    const doq = document.getElementById("DoQ");
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');

    const today = `${year}-${month}-${day}`;
    doq.value = today;


});















