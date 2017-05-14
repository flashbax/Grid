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

    var blue = '#4286f4';
    var red = '#c40909';
    var green = '#62f441';
    
    
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
    Array.prototype.pushUnique = function(item){
        for( var i = 0 ; i < this.length ; i++  ){
            if( item == this[i] ){
                return;
            }
        }
        this.push(item);
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
    var gridColorOptionArray = [ blue, red, green ];
	
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

            //create the data model.  In this example it's a 2D array representing the colours in a WxH grid.
            createRandomGrid();
            //update the view to visually represent the data.
            refreshGrid();
    });


    function createRandomGrid(){
        for( var x = 0 ; x < GRID_WIDTH ; x++ ) {
            for (var y = 0; y < GRID_HEIGHT; y++) {
                console.log("gridArray location:: " + x + ", " + y);
                var restArray = createRestrictArray(x, y);
                gridArray[x][y] = chooseRandWithRestrictions(restArray);
            }
        }
        /*for( y = 0 ; y < GRID_HEIGHT ; y++ ){
            console.log( gridArray[y] );
        }*/
    };

	
	function createRestrictArray( i, j ){
		var restArray = [];
		for ( var m = i-1 ; m >= 0 ; m-- ){
			restArray.pushUnique( gridArray[m][j] );
		}
		for ( var n = j-1 ; n >= 0 ; n-- ){
			restArray.pushUnique( gridArray[i][n] );
		}
        console.log( "restArray length:: "+restArray.length );
        if( restArray.length == gridColorOptionArray.length ){
            createRandomGrid();
            return;
        }
		return restArray;
	}
	
	function chooseRandWithRestrictions( restrictArray ){
        var gridOptionsCopy = gridColorOptionArray.slice();
        for( var i = 0 ; i < restrictArray.length ; i++ ){
            for( var j = 0 ; j < gridOptionsCopy.length ; j++ ){
                if( restrictArray[i] == gridOptionsCopy[j] ){
                    gridOptionsCopy.splice(j,1);
                    break;
                }
            }
        }
        var l = gridOptionsCopy.length-1;
        var ind = getRandomInt(0, l );
        return gridOptionsCopy[ ind ];
	}

    function getRandomInt(min, max) {
        var result = Math.floor(Math.random() * (max - min + 1) + min);
        return result;
    }


    function refreshGrid(){
        for( var i = 0 ; i < GRID_WIDTH*GRID_HEIGHT ; i++ ){
            document.getElementById('col'+i).style.backgroundColor = gridArray[ i%3 ][ Math.floor(i/3) ];
        }
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


    