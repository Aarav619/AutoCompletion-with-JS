/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */
function billingFunction(){
    if(document.getElementById("same").checked){
      var name = document.getElementById('shippingName').value;
        document.getElementById("billingName").value=name;
      var zip = document.getElementById("shippingZip").value;
        document.getElementById("billingZip").value=zip;
        billingName.setAttribute("required", true);
        billingZip.setAttribute("required", true);
      }
    else{
      document.getElementById("billingName").value="";
      document.getElementById("billingZip").value="";
      billingName.removeAttribute("required");
      billingZip.removeAttribute("required");
    }
  }