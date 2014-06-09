(function(jQuery) {
	var Board = function(width, height) {
		this.width = width;
		this.height = height;
		this.initBoard = function() {
			for (var h=0;h<this.height;h++) {
				var tableRow = '<tr>'+(new Array(width + 1).join('<td><div class="box"></div></td>'))+'</tr>';
				jQuery(".box-container table").append(tableRow);

			}
		}
	};

	var board = new Board(12,15);
	board.initBoard();
})($);