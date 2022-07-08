var i=0;
var j=0;
var k = 0;
var start = true;
var intervalVar;
var rst=0;
function count(){
	if(!start){
        if(i<10){
            document.getElementById("timer-millis").innerHTML = `0${i}`;
			// return;
    }
		else{
			document.getElementById("timer-millis").innerHTML = `${i}`;}
		i += 1;
	}
		if(i==99){
			i = 0;
			j += 1;
			if(j==59){
				j = 0;
				k += 1;
		}
	}

		if(j<10){
			document.getElementById("timer-secs").innerHTML = `0${j}`;
	}	else{
			document.getElementById("timer-secs").innerHTML = `${j}`;
	}

		if(k<10){
			document.getElementById("timer-mins").innerHTML = `0${k}`;
	}else{
			document.getElementById("timer-mins").innerHTML = `${k}`;
	}
}

function starter(){
	if (start){
		start = false;
		document.getElementById("toggle").innerHTML = "PAUSE";
		intervalVar = setInterval(count, 10);
	}
	else{
		start = true;
		if (rst==1){
			document.getElementById("toggle").innerHTML = "START!";
			rst=0;
		}
		else{
			document.getElementById("toggle").innerHTML = "RESUME";
		}
		// document.getElementById("toggle").innerHTML = "";
		clearInterval(intervalVar);
	}
}

function reset(){
	i = 0;
	j = 0;
	k = 0;
	start = false;
	rst=1;
	// document.getElementById("timer-millis").innerHTML = `${i}`;
	// document.getElementById("toggle").innerHTML = "START!";
	count();
	starter();
}
