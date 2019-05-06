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
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);

  document.getElementById("tipTotal").style.display = "block";
  document.getElementById("tip").innerHTML = total;
};

document.getElementById("tipTotal").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("calculate").onclick = function() {
  calcTip();
};
