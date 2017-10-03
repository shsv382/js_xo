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
		elementAdd(i);
	  }
	}

	var gameover = function(field) {
		return ((field[0] == "X" && field[1] == "X" && field[2] == "X") ||
				(field[3] == "X" && field[4] == "X" && field[5] == "X") ||
				(field[6] == "X" && field[7] == "X" && field[8] == "X") ||
				(field[0] == "X" && field[3] == "X" && field[6] == "X") ||
				(field[1] == "X" && field[4] == "X" && field[7] == "X") ||
				(field[2] == "X" && field[5] == "X" && field[8] == "X") ||
				(field[0] == "X" && field[4] == "X" && field[8] == "X") ||
				(field[2] == "X" && field[4] == "X" && field[6] == "X") ||
				(field[0] == "O" && field[1] == "O" && field[2] == "O") ||
				(field[3] == "O" && field[4] == "O" && field[5] == "O") ||
				(field[6] == "O" && field[7] == "O" && field[8] == "O") ||
				(field[0] == "O" && field[3] == "O" && field[6] == "O") ||
				(field[1] == "O" && field[4] == "O" && field[7] == "O") ||
				(field[2] == "O" && field[5] == "O" && field[8] == "O") ||
				(field[0] == "O" && field[4] == "O" && field[8] == "O") ||
				(field[2] == "O" && field[4] == "O" && field[6] == "O") ||
				field.indexOf(" ") < 0);
	}

	var play = function() {
		render(field);
	};

	var elementAdd = function(i) {
		el = document.createElement('div');
		el.innerHTML = "<span id='span" + i + "'>" + field[i] + "</span>";
		el.dataset.num = i;
		el.className = "cube";
		el.id = "cube" + i;
		el.style.position = "absolute";
		el.style.top  = Math.floor(i / 3) * 100 + "px";
		el.style.left = Math.floor(i % 3) * 100 + "px";
		if(!(gameover(field)))
		el.addEventListener('click', function(e) {
			if (!(this.firstChild.innerHTML == "X" || this.firstChild.innerHTML == "O")) {
				field[this.dataset.num] = marker;
				marker = marker == "X" ? "O" : "X";
				if(gameover(field)) {
					render(field);
					alert("Game over!");
				}
				else {
					render(field);
				}
			}
		});
		container.appendChild(el);
		$('#cube' + i).on('click', function(){
			$('#span' + i).effect('shake', {times: 2}, 500);
		});
	}

	container.onclick = play();
	newgame.onclick = function() {
		field = [" "," "," "," "," "," "," "," "," "];
		marker = "X";
		render(field);
	}
});