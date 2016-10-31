// write your code here to make the tests pass
var TennisGame = function(p1, p2) {
	this.player1 = p1;
	this.player2 = p2;
	this.playerOneScore = 0;
	this.playerTwoScore = 0;
	
	this.playerOneScores = function(){
		this.playerOneScore += 1;	
	};
	
	this.playerTwoScores = function(){
		this.playerTwoScore += 1;
	};

	this.isDeuce = function() {
		return ((this.playerOneScore === this.playerTwoScore && this.playerTwoScore>=3) ? true: false);
	};

	this.playerWithHighestScore = function() {
		return ((this.playerOneScore > this.playerTwoScore) ? this.player1 : this.player2);
	};

	this.hasWinner = function(){
		return ((this.playerOneScore === 4 || this.playerTwoScore === 4) ? true :false);
	};

	this.hasAdvantage = function() {
		return ((this.playerOneScore === 5 || this.playerTwoScore === 5) ? true :false);
	};

	this.translateScore = function(score) {
		if(score === 0) return 'Love';
		else if(score === 1) return 'Fifteen';
		else if(score === 2) return 'Thirty';
		else if(score === 3) return 'Forty';
		
	};

	this.getScore = function() {
		if(this.playerOneScore >=3 && this.playerTwoScore>=3 && this.playerOneScore-this.playerTwoScore === 1) return 'Advantage ' + p1;
		else if(this.playerOneScore >=3 && this.playerTwoScore>=3 && this.playerOneScore-this.playerTwoScore === -1) return 'Advantage ' + p2;
		else if(this.playerOneScore >=4 && this.playerTwoScore <=2) return p1 + ' wins';
		else if(this.playerTwoScore >=4 && this.playerOneScore <=2) return p2 + ' wins';
		else if (this.playerOneScore >=3 && this.playerTwoScore>=3 && this.playerOneScore===this.playerTwoScore) return 'Deuce';
		else if (this.playerOneScore === this.playerTwoScore) return this.translateScore(this.playerOneScore) + ' all';
		else return this.translateScore(this.playerOneScore) + ', ' + this.translateScore(this.playerTwoScore);
		
	}
};

