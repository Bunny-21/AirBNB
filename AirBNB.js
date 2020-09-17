function username() {
		var userinput = document.getElementById('name').value;
			 userinput += " "+ document.getElementById('checkin').value;
			 userinput += " "+ document.getElementById('checkout').value;
			 userinput += " "+ document.getElementById('guest').value;
		alert(userinput);
}


