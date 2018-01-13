$(function() {

	function randomString() {

		var chars  = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
		var str = '';
		
		for (i = 0; i < 10; i++) {

			str += chars[Math.floor(Math.random() * chars.length)];

		}

		return str;

	}

	function Column(name) {

		var self = this;
		
		this.id = randomString();
		this.name = name;
		this.$element = createColumn();

		function createColumn() {

			// creating the blocks
			var $column = $('<div>').addClass('column');
			var $columnTitle = $('<h1>').addClass('column-title').text(self.name);
			var $columnCardList = $('<ul>').addClass('column-card-list');
			var $columnDelete = $('<button>').addClass('btn-delete').text('x');
			var $columnAddCard = $('<button>').addClass('add-card').text('Dodaj kartę');

			// binding to click event
			$columnDelete.click(function() {

				self.removeColumn();

			});

			$columnAddCard.click(function(event) {

				self.addCard(new Card(prompt("Wstaw nazwę karty")));

			});

			// combining block and return the card
			$column.append($columnTitle)
        		.append($columnDelete)
        		.append($columnAddCard)
        		.append($columnCardList);

        	return $column;
		
		}

	}

	Column.prototype = {
    	
    	addCard: function(card) {
      	
      		this.$element.children('ul').append(card.$element);
    	
    	},
    	
    	removeColumn: function() {
      	
      		this.$element.remove();
    	
    	}
	
	};

	function Card(description) {
		
		var self = this;

    	this.id = randomString();
    	this.description = description;
    	this.$element = createCard();

    	function createCard() {
    	
    		// creating the blocks
    		var $card = $('<li>').addClass('card');
    		var $cardDescription = $('<p>').addClass('card-description').text(self.description);
    		var $cardDelete = $('<button>').addClass('btn-delete').text('x');

    		// binding to click event
    		$cardDelete.click(function(){
        	
        		self.removeCard();
		
			});

    		// combining block and return the card
			$card.append($cardDelete)
				.append($cardDescription);

			return $card;

    	}
	
	}

	Card.prototype = {
	
		removeCard: function() {
			
			this.$element.remove();
	
		}
	
	}
	
	var board = {
    		
   		name: 'Kanban Board',
   		addColumn: function(column) {
   		this.$element.append(column.$element);
   		initSortable();
    	
    	},
    
    	$element: $('#board .column-container')

	};

	function initSortable() {
   		
   		$('.column-card-list').sortable({
     		
     		connectWith: '.column-card-list',
     		placeholder: 'card-placeholder'
   		
   		}).disableSelection();
 	
 	}

 	$('.create-column')
  		.click(function(){	
			var name = prompt('Wpisz nazwę kolumny');	
			var column = new Column(name);	
    		board.addColumn(column);
  		
  	});

	// CREATING COLUMNS
	var todoColumn = new Column('Do zrobienia');
	var doingColumn = new Column('Aktualne');
	var doneColumn = new Column('Ukończone');

	// ADDING COLUMNS TO THE BOARD
	board.addColumn(todoColumn);
	board.addColumn(doingColumn);
	board.addColumn(doneColumn);

	// CREATING NEW CARDS
	//var card1 = new Card('New task');
	//var card2 = new Card('Create kanban boards');

	// ADDING CARDS TO COLUMNS
	//todoColumn.addCard(card1);
	//doingColumn.addCard(card2);

})