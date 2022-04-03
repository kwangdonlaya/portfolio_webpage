window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin");
	form.onsubmit = checkLogin;
}

function checkLogin()
{
	const queryString = window.location.search;

	const urlParams = new URLSearchParams(queryString);
	const username = urlParams.get('username');
	const password = urlParams.get('password');

	var nUsername = document.forms["myLogin"]["username"].value;
	var nPassword = document.forms["myLogin"]["password"].value;

	if(username != nUsername)

	{
		alert("Username is wrong, please try again");
		return false;
	}

	if(password != nPassword)

	{
		alert("Password is wrong, please try again");
		return false;
	}

	else
	{
		alert("Login Complete");
	}





}


			