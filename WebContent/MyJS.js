/**
 * 
 */
function getConfirmation() {
	var retVal = confirm("Are you sure to finnish?");
	if (retVal == true)
		getResult();
}

function getResult() {
	var i, res;
	var allElems = document.getElementsByName("myradios");
	for (i = 0; i < allElems.length; i++) {
		if (allElems[i].checked == true) {
			if (checkResult(allElems[i].id, allElems[i].value) == true)
				res += 5;
		}
	}
	var result = "Your result is " + res;
	alert(result);
}

function checkResult(id, res) {
	if (id == "1" && res == "A")
		return true;
	if (id == "2" && res == "A")
		return true;

	if (id == "3" && res == "A")
		return true;

	if (id == "4" && res == "A")
		return true;

	if (id == "5" && res == "A")
		return true;

	if (id == "6" && res == "A")
		return true;

	if (id == "7" && res == "A")
		return true;

	if (id == "8" && res == "A")
		return true;

	if (id == "9" && res == "A")
		return true;

	if (id == "10" && res == "A")
		return true;

	if (id == "11" && res == "A")
		return true;

	if (id == "12" && res == "A")
		return true;

	if (id == "13" && res == "A")
		return true;
	if (id == "14" && res == "A")
		return true;

	if (id == "15" && res == "A")
		return true;

	if (id == "16" && res == "A")
		return true;

	if (id == "17" && res == "A")
		return true;

	if (id == "18" && res == "A")
		return true;
	if (id == "19" && res == "A")
		return true;

	if (id == "20" && res == "A")
		return true;

}