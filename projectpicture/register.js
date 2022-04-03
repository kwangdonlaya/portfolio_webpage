window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() 
{
    var gameLayer = document.getElementById("squares-layer");
    var password = document.forms["myForm"]["password"];
    var Errormsg = document.getElementById("errormsg");
    var result = true;
    if(password[0].value != password[1].value)
	{
        Errormsg.textContent = "Wrong password!!, please check again.";
        result = false;
    }
    else
	{
        alert("Register Complete");
    }
    return result;
}