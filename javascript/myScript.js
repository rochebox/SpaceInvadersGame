
var score;
var shipX;
var shipY; 
var shipWidth = 50;
var shipHeight = 44;
var keyList = new Array(5);
var gameOn = false;
var myVar;
var moveSpeed = 4;
var boardWidth = 600;
var boardHeight = 450;
var boardXLoc;
var boardYLoc;

$(document).ready(function(){
	
	
	$('#startButton').click(function(){
		//SHOW THE GAMEBOARD
		$('#gameBoard').addClass('gameboardStyles');
		$('#gameBoard').css({width : (boardWidth)});
		$('#gameBoard').css({height : (boardHeight)});
		var boardPos = $('#gameBoard').offset(); 
		boardXLoc = Math.floor(boardPos.left);
		boardYLoc = Math.floor(boardPos.top);

		score = 0;
		$('#playerScore').html(score);

		//SET UP THE SHIP
		shipY = boardYLoc+boardHeight-(shipHeight+5);
		shipX = boardXLoc+Math.round(boardWidth*0.53)-Math.floor(shipWidth*0.6);
		$("#spaceShip").css({top: (0+shipY), left: (0+shipX), position:'absolute'});
		$('#spaceShip').removeClass('shipNotActive');
		$('#spaceShip').addClass('shipActive');

		gameOn = true;
	});

	myVar = setInterval(playGame, 50);

});

function playGame(){
	if(gameOn){

			// position = { left: 42, top: 567 }
			var shipPos = $('#spaceShip').offset(); 
			var shipX = Math.floor(shipPos.left);
			var shipY = Math.floor(shipPos.top);

			//console.log("shipX is " + shipX + " and shipY is " + shipY);

			if(keyList[0]==1){
				console.log("fire");
			}

			if(keyList[1]==1){
				//console.log("move left");
				if(shipX-moveSpeed > boardXLoc){
					shipX -= moveSpeed;
				}
			}

			if(keyList[2]==1){
				//console.log("move up");
				if(shipY-moveSpeed > boardYLoc+moveSpeed){
					shipY -= moveSpeed;
				}
			}

			if(keyList[3]==1){
				//console.log("move right");
				if(shipX+moveSpeed < (boardXLoc+boardWidth-shipWidth+(2*moveSpeed))){
					shipX += moveSpeed;
				}	
			}

			if(keyList[4]==1){
				//console.log("move down");
				if(shipY+moveSpeed < (boardYLoc+boardHeight-shipHeight+(2*moveSpeed))){
					shipY += moveSpeed;
				}		
			}

			//console.log("shipX is " + shipX + " and shipY is " + shipY);


			//$('#spaceShip').offset(shipX, shipY); 
			//$("#spaceShip").parent().css({position: 'relative'});
			$("#spaceShip").css({top: (0+shipY), left: (0+shipX), position:'absolute'});
	}
}




      
$(document).keydown(function(e) {

	// 39 is rightArrow
	// 38 is up
	// 37 is Left
	// 40 is down
	// 32 is spacebar
	//alert('you pressed ' + e.which);
    if(e.which == 32) {
        alert('You pressed spaceBar!');
    }
    var text;
    switch (e.which) {
    case 32:
        //text = "You pressed spacebar";
        keyList[0]=1;
        break; 
    case 37:
        //text = "You pressed left arrow";
         keyList[1]=1;
        break; 
    case 38:
        //text = "You pressed up arrow";
         keyList[2]=1;
        break; 
    case 39:
        //text = "You pressed right arrow";
         keyList[3]=1;
        break;
    case 40:
        //text = "You pressed down arrow";
         keyList[4]=1;
        break;
    default: 
        //text = "some other key pressed";
	}
	//console.log(text);
});


$(document).keyup(function(e) {

	// 39 is rightArrow
	// 38 is up
	// 37 is Left
	// 40 is down
	// 32 is spacebar
	//alert('you pressed ' + e.which);
    if(e.which == 32) {
        alert('You pressed spaceBar!');
    }
    var text;
    switch (e.which) {
    case 32:
        //text = "Spacebar up";
        keyList[0]=0;
        break; 
    case 37:
        //text = "Left arrow up";
         keyList[1]=0;
        break; 
    case 38:
        //text = "Up arrow up";
         keyList[2]=0;
        break; 
    case 39:
        //text = "Right arrow up";
         keyList[3]=0;
        break;
    case 40:
        //text = "Down arrow up";
         keyList[4]=0;
        break;
    default: 
        //text = "some other key pressed";
	}
	//console.log(text);
});
