window.onload = function() {


	
    
    function container(){
        var contain = document.createElement('div');
        contain.setAttribute('id', 'container'); 
        document.getElementById('body').appendChild(contain);
    }

    //create button
    function button() {
        var button = document.createElement('button'); 
        button.setAttribute('id', 'randBut'); 
        document.getElementById('body').appendChild(button); 
        var elem = document.getElementById('randBut');
        elem.style.width = '100px';
        elem.style.height = '20px';
        elem.innerText = 'Make Grid';
        elem.style.display = 'block';
        elem.style.clear = 'both';
    };

    //change state of text on click of button
    function change() { 
        var elem = document.getElementById('randBut');
        if (elem.innerText = 'Make Grid') { 
            elem.innerText = 'Randomize';
        } 
    }

    //init button
    container();
    button();

    var blue = '#4286f4'
    var red = '#c40909'
    var green = '#62f441'
    
    
    //shuffle array
    Array.prototype.shuffle = function() {
    var input = this; 
        for (var i = input.length-1; i >=0; i--) {
        
            var randomIndex = Math.floor(Math.random()*(i+1)); 
            var itemAtIndex = input[randomIndex]; 
            
            input[randomIndex] = input[i]; 
            input[i] = itemAtIndex;
        }
    return input;
    };
    

    //create and shuffle array using shuffle function
    var arr = [blue, red, green]; 
    //var array = arr.shuffle();

    //make the divs
    function makeDivs() { 
        //loop through and create 9 divs with ids
        for (var i = 0; i<=8; i++) {  
            var divCol = document.createElement('div');     
            divCol.setAttribute('id', 'col'+i); 
            //add divs as child of body tag
            document.getElementById('container').appendChild(divCol);
        };

    };

    //button
	const GRID_WIDTH = 3;
	const GRID_HEIGHT = 3;
	var gridArray = [[],[],[]];
	
    document.getElementById('randBut').addEventListener("click", function() { 
            change();
            //for (var i = 0; i<=2; i++) {
                    var array = arr.shuffle(); 
               // }
            //push colors to elements
            document.getElementById('col0').style.backgroundColor = array[0]; 
            document.getElementById('col1').style.backgroundColor = array[1]; 
            document.getElementById('col2').style.backgroundColor = array[2]; 
            document.getElementById('col3').style.backgroundColor = array[2]; 
            document.getElementById('col4').style.backgroundColor = array[0]; 
            document.getElementById('col5').style.backgroundColor = array[1]; 
            document.getElementById('col6').style.backgroundColor = array[1]; 
            document.getElementById('col7').style.backgroundColor = array[2];
            document.getElementById('col8').style.backgroundColor = array[0];
            
			for( var y = 0 ; y < GRID_HEIGHT ; y++ ){
				for( var x = 0 ; x < GRID_WIDTH ; x++ ){
					console.log( "gridArray location:: "+ x +", "+y  );
					var restArray = createRestrictArray( x ,y );
					//gridArray[i][j] = chooseRandWithRestrictions( restArray );			
				}		
			}             
			for( y = 0 ; y < GRID_HEIGHT ; y++ ){
			console.log( gridArray[y] );
			}
			
    });   
	
	function createRestrictArray( i, j ){
	debugger;
		var restArray = [];
		for ( var m = i-1 ; m >= 0 ; m-- ){
			restArray.push( gridArray[m][j] );
		}
		for ( var n = j-1 ; n >= 0 ; n-- ){
			restArray.push( gridArray[i][n] );
		}
		return restArray;
	}
	
	function chooseRandWithRestrictions( restrictArray ){
	
	
	
	}
    
    //add css styles to divs
    function gridStyles() {
        for (var i = 0; i<=8; i++) {
             var elem = document.getElementById('col'+i); 
             //elem.style.border = '#000000 1px solid';
             elem.style.width = '20px';
             elem.style.height = '20px';
             elem.style.float = "left";
            //break row at 3, 6 and 9th column
            switch(i) {
                case 3:
                    elem.style.clear = "both";
                break;
                case 6:
                    elem.style.clear = "both";
                break;
                case 9:
                    elem.style.clear = "both";
             };
        };
    };
    
    //init functions
    makeDivs();
    gridStyles(); 

}; //window load end


    