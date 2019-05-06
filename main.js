function calcTip() {
  let billAmt = document.getElementById("total").value;
  let service = document.getElementById("service").value;
  let peeps = document.getElementById("people").value;

  if (billAmt === "" || service === 0) {
    alert("Please input bill amount and/or service quality");
    return;
  }

  if (peeps === "" || peeps <= 1) {
    peeps = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  let totalTip = (billAmt * service) / peeps;
};



document.getElementById("calculate").onclick = function() {
  calcTip();
};
