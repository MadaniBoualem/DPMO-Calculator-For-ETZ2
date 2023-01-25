function calculate() {
    let totalError = 0;
    let totalOperation = 0;
    for (let i = 1; i <= 7; i++) {
      let errorValue = document.getElementById("error" + i).value.replace(/\s/g,'');
      let operationValue = document.getElementById("operation" + i).value.replace(/\s/g,'');
      if (errorValue !== "") {
        totalError += parseInt(errorValue);
      }
      if (operationValue !== "") {
        totalOperation += parseInt(operationValue);
      }
    }
    if (isNaN(totalError) || isNaN(totalOperation) || totalOperation==0) {
          document.getElementById("final-result").innerHTML = "Entrez des nombres valides";
      } else {
    let result = (totalError*1000000)/totalOperation;
    document.getElementById("final-result").innerHTML = result.toLocaleString("fr-FR", { minimumFractionDigits: 0 });
      }
  };

  function copyResult() {
    let result = document.getElementById("final-result");
    let tempInput = document.createElement("input");
    tempInput.value = result.innerText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Copied: " + result.innerText);
  };