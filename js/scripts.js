$(function() {

	function randomString() {

		var chars  = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
		var str = '';
		
		for (i = 0; i < 10; i++) {

			str += chars[Match.floor(Match.random() * chars.length)];

		}

		return str;

	}

	function Column(name) {

		var self = this;
		this.id = randomString();
		this.name = name;
		this.$element = createColumn();

		function createColumn() {

			var $column = $('<div>').addClass('column');
			var $columnTitle = $('<h1>').addClass('column-title').text(self.name);
			var $columnCardList = $('<ul').addClass('column-card-list');
			var $columnDelete = $('<button>').addClass('btn-delete').text('x');
			var $columnAddCard = $('<button>').addClass('add-card').text('Add a card');

		}

	}

});