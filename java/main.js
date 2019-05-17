function calcTip() {
  let billAmt = document.getElementById("total").value;
  let service = document.getElementById("service").value;
  let peeps = document.getElementById("people").value;

  if (billAmt === "" || service <= 0) {
    alert("Please input bill amount and/or service quality");
    return;
  };

  if (peeps === "" || peeps <= 1) {
    peeps = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "inline";
  };

  let totalTip = (billAmt * service) / peeps;
  totalTip = Math.round(totalTip * 100) / 100;
  totalTip = totalTip.toFixed(2);

  document.getElementById("tipAmount").style.display = "block";
  document.getElementById("tipTotal").style.display = "block";
  document.getElementById("tip").innerHTML = totalTip;
};

// makes calculate button work when clicked
document.getElementById("calculate").onclick = function() {
  calcTip();
  document.getElementById('tipTotal').hidden = false;
};
