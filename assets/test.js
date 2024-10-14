const sriChecker = document.getElementById("sriChecker");
const sriCheckResults = document.getElementById("sriCheckResults");

sriCheckResults.innerText = "Script loaded without SRI attribute...";
if (sriChecker.integrity) {
  sriCheckResults.innerText = "Script loaded with SRI attribute!";
}
