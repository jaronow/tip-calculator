function calcTip() {
  let billAmt = document.getElementById("total").value;
  let service = document.getElementById("service").value;
  let peeps = document.getElementById("people").value;

  if (billAmt === "" || service === 0) {
    alert("Please input bill amount and/or service quality");
    return;
  };
};

document.getElementById("calculate").onclick = function() {
  calcTip();
};
