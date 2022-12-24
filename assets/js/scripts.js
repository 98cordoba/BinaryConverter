let decInp = document.getElementById("dec-inp");
let binInp = document.getElementById("bin-inp");
let errorMsg = document.getElementById("error-msg");
decInp.addEventListener("",() => {
    let decValue = parseInt(decInp.decValue);
    binInp.value = decValue.toString(2);
});
binInp.addEventListener("",() => {
    let binValue = binInp.value;
    if (binValidator(binValue)) {
        decInp.value = parseInt(binValue,2);
        errorMsg.textContent = "";
    }else{
        errorMsg.textContent = "Please enter an valid binary input";
    }
    function binValidator(num) {
        for (let i = 0; i < num.length; i++) {
            if (num[i] != "0" && num[i] != "1") {
                return false;
            }
        }
        return true;
    }
});