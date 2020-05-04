function calculate() {
    var billAmount = Number(document.getElementById("billAmount").value)
    var tipAmount = document.getElementById("tipAmount").value
    tipAmount = Number(tipAmount)
    tipAmount = tipAmount / 100;

    var totalTip = tipAmount * billAmount
    var tipHTML = "<h3>Your tip is: <small>$" +
        totalTip.toFixed(2) +
        "</small></h3>"
        document.querySelector(".tip-amount").innerHTML = tipHTML

    var totalBillAmount = totalTip + billAmount
    var billHtml = "<h3>Your total bill is: <small>$" +
        totalBillAmount.toFixed(2) +
        "</small></h3>"
        document.querySelector(".total-with-tip").innerHTML = billHtml
}


