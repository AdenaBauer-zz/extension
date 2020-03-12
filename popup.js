
document.getElementById("input").addEventListener("keyup", keyPress);
document.getElementById("gobutton").addEventListener("click", go);

var engine;

function keyPress() {
    var keyInput = document.getElementById("input").value;
    if(keyInput == "so"){
    	document.getElementById("engineName").innerHTML = "Stack Overflow";
    	document.getElementById("engineName").style.backgroundColor = "#f48737";
    	document.getElementById("input").value = ""
    	engine = "stackoverflow";

    }

   	if(keyInput == "py"){
    	document.getElementById("engineName").innerHTML = "Python Docs";
    	document.getElementById("engineName").style.backgroundColor = "#244D70";
    	document.getElementById("input").value = ""
    	engine = "python";

    }
}

function go() {
	var keyInput = document.getElementById("input").value;

	if (engine == "python"){
		var newURL = "https://docs.python.org/3/search.html?q=" + keyInput;
		chrome.tabs.create({ url: newURL });
	}

	else{
		var newURL = "http://www.stackoverflow.com/search?q=" + keyInput;
		chrome.tabs.create({ url: newURL });
	}

}