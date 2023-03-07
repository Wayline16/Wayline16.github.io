function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    let y = document.forms["myForm"]["fmail"].value;
    if (x == "") {
        alert("Please fill in your Name.");
        return false;
      }
      if (y == "") {
        alert("Please fill in your Email Address.");
        return false;
      }
  }