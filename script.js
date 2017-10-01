$(document).ready(function() {
	var field = [" "," "," "," "," "," "," "," "," "];
	var container = document.getElementById("container");
	var marker = "X";

	var render = function(field) {
		container.innerHTML = "";
	  for (var i = 0; i < field.length; i++) {
	    if (!(i % 3) && i > 0) {
			br = document.createElement('br');
			container.appendChild(br);
	    }
		el = document.createElement('div');
		el.innerHTML = field[i];
		el.dataset.num = i;
		el.className = "cube";
		el.style.position = "absolute";
		el.style.top  = Math.floor(i / 3) * 100 + "px";
		el.style.left = Math.floor(i % 3) * 100 + "px";
		el.onclick = function(e) {
			if (!(this.innerHTML == "X" || this.innerHTML == "O")) {
				field[this.dataset.num] = marker;
				marker = marker == "X" ? "O" : "X";
				render(field);
			}
		}
		container.appendChild(el);
	  }
	}

/*	var gameover = function(field) {
		if (field[0] == "X" && field[1] == "X" && field[2] == "X") alert("Gameover!");
	}
*/
	var play = function() {
		render(field);
//		gameover(field);
	};

	document.onclick = play();

	
});