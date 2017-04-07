var $ = function(id) {
    return document.getElementById(id);
};
var getRandomNumber = function(max) {
    var random;
    if (!isNaN(max)) {
        random = Math.random(); //value >= 0.0 and < 1.0
        random = Math.floor(random * max); //value is an integer between 0 and max - 1
        random = random + 1; //value is an integer between 1 and max
    }
    return random;
};
var calculateFV = function(investment,rate,years) {
	"use strict";
	var futureValue = investment;
    for (var i = 1; i <= years; i++ ) {
		futureValue += futureValue * rate / 100;
	
	if (futureValue === Infinity) {
		alert("future value = infinity");
		i = years;
	
								}
	
    futureValue = futureValue.toFixed(2);
		formatFV(futureValue);
	return futureValue;
										}
											};

var formatFV = function(futureValue) {
	"use strict";
	var indexvar = futureValue.indexOf(".");
	futureValue.charAt(indexvar -3) == ",";
	
	if (indexvar >= 9) {
		futureValue.charAt (indexvar - 6) == ",";
		
	}
};
/* var processEntries = function() {
	"use strict";
    var investment = parseFloat( $("investment").value );
    var rate = parseFloat( $("annual_rate").value );
    var years = parseInt( $("years").value );
	if (isNaN(investment) || investment <= 0) {
		alert("Must be > 0");
	}
	else if (isNaN(rate) || rate <= 0) {
		alert("Must be > 0");
	}
	else if (isNaN(years) || years <= 0) {
		alert("Must be > 0");
		allValid = false;
	}
	else {
		$("future_value").value	= calculateFV(investment,rate,years);
	}
};
*/
var processEntries = function() {
	"use strict";
	var investment = getRandomNumber(50000);
	
	var rate = getRandomNumber(15);
	
	var years = getRandomNumber(50);
	
	$("investment").value = investment;
	$("annual_rate").value = rate;
	$("years").value = years;
	
	$("future_value").value	= calculateFV(investment,rate,years);

};




window.onload = function() {
	"use strict";
    $("calculate").onclick = processEntries;
    $("investment").focus();
};