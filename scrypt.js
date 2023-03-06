const DOM = (() =>{
    return {
        selection: document.querySelectorAll('.seletion'),

        makeActive: function (e) {
            e.target.parentNode.querySelectorAll('.selection').foreach((child) => {
                child.classList.remove('active');
            });
            e.target.classList.add('.active');
            if(e.target.classList.contains('human')){
                if(e.target.classList.contains('one')){
                    Controller.player1.type = 'human';
                } else {
                    Controller.player2.type = 'human';
                }
            } else if(e.target.classList.contains('one')){
                Controller.player1.type = 'ai'
            } else {
                Controller.player2.type = 'ai'
            }
        },

        boardContainer: document.querySelector('.gameboard'),
        //fetch current squares
        getSquares: function () {
            return this.boardContainer.querySelectorAll('.square');
        },

        newSquare: function (html){
            const square = document.createElement('div');
            square.className = 'square';
            square.innerHTML = html
            return square;
        },

        newSquareInner: function(mark){
            return `<span>${mark}</span>`;
        },

        render: function (board) {
            this.clearBoard();
            board.forEach((square) => {
                this.boardContainer.appendChild(
                    DOM.newSquare(DOM.newSquareInner(square.mark))
                )
            });
        },

        setupWindow: document.querySelector('.setup'),
        startButton: document.querySelector('.startgame'),
        turnIndicator: document.querySelector('.turn'),
        winnerBanner: document.querySelector('.winner'),

        winDisplay: function(winner){
            if(winner){
                this.winnerBanner.textContent = `${winner} wins!` ;
            } else {
                this.winnerBanner.textContent = "It's a tie!";
            }
            const playAgainContainer = document.createElement('div');
            playAgainContainer.className = 'playagaincontainer';
            const playAgain = document.createElement('button');
            playAgain.textContent = 'Play Again';
            playAgain.className = 'playagain';
            playAgainContainer.appendChild(playAgain);
            this.winnerBanner.appendChild(playAgainContainer);
            playAgain.addEventListener('click', () =>{
                location.reload();
                return false;
            });
            
        },

        
    };
})();


