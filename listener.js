// 监听变化
Signal.on(usernameEvent, document.getElementById("copyusername"),function(data){
	document.getElementById("copyusername").innerHTML=data?data:"copy username...";
});

function onreverse(data){
	document.getElementById("reverseusername").innerHTML=data?data.split('').reverse().join(''):"reverse username...";
}

Signal.on(usernameEvent, document.getElementById("reverseusername"),onreverse);

// Signal.off(usernameEvent, document.getElementById("reverseusername"),onreverse);