function clickFunction() {
	let backgroundColore = document.getElementById("body-color");
	console.log(backgroundColore);
	let colori = ["red", "green", "blue", "yellow"];

	const colorIndex = parseInt(Math.random()*colori.length);
 backgroundColore.style.backgroundColor = colori[colorIndex];	
}