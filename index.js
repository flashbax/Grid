window.onload = function() {

    const blue = '#4286f4';
    const red = '#c40909';
    const green = '#62f441';
    const orange = '#FF4500';
    const yellow = '#FFD700';
    const purple = '#800080';
    const silver = '#c0c0c0';
    const pink = '#FF69B4';
    const cyan = '#00FFFF';
    const brown = '#8B4513';
	const GRID_WIDTH = 4;
	const GRID_HEIGHT = 4;
    const NUM_ADDITIONAL_COLOURS = 0;
    const OPTIONS_ARRAY = [ blue, red, green, orange, yellow, purple, silver, pink, cyan, brown ];
	var gridArray;
    var gridColorOptionArray;
    var attemptCount = 0;

    Array.prototype.pushUnique = function(item){
        for( var i = 0 ; i < this.length ; i++  ){
            if( item == this[i] ){
                return;
            }
        }
        this.push(item);
    };


    function initGrid(){
        gridArray = [];
        gridColorOptionArray = [];
        for( var i = 0 ; i < GRID_WIDTH ; i++ ){
            gridArray[i] = [];
        }
        for( i = 0 ; i < (Math.max( GRID_WIDTH, GRID_HEIGHT ) + NUM_ADDITIONAL_COLOURS) ; i++ ){
            gridColorOptionArray.push(OPTIONS_ARRAY[i]);
        }

        initView();
    }

    function initView(){

        var contain = document.createElement('div');
        contain.setAttribute('id', 'container');
        document.getElementById('body').appendChild(contain);

        for (var i = 0; i < GRID_HEIGHT*GRID_WIDTH; i++) {
            var divCol = document.createElement('div');
            divCol.setAttribute('id', 'col'+i);
            //add divs as child of body tag
            document.getElementById('container').appendChild(divCol);
            //var elem = document.getElementById('col'+i);
            divCol.style.width = '20px';
            divCol.style.height = '20px';
            divCol.style.float = "left";
            if( i%GRID_WIDTH == 0 ){
                divCol.style.clear = "both";
            }
        }

        var button = document.createElement('button');
        button.setAttribute('id', 'randBut');
        document.getElementById('body').appendChild(button);
        var elem = document.getElementById('randBut');
        elem.style.width = '100px';
        elem.style.height = '20px';
        elem.innerText = 'Make Grid';
        elem.style.display = 'block';
        elem.style.clear = 'both';
        document.getElementById('randBut').addEventListener("click", function(){onGenerateGrid()} );
    }

    function onGenerateGrid(){
        //create the data model.  In this example it's a 2D array representing the colours in a WxH grid.
        var buildingGrid = true;
        do{
            if( createRandomGrid() ){
                buildingGrid = false;
            }

        }while(buildingGrid);
        attemptCount = 0;
        //update the view to visually represent the data.
        refreshGrid();
    }

    function createRandomGrid(){
        attemptCount++
        console.log("--------------------------- attemptCount:: "+attemptCount);
        for( var x = 0 ; x < GRID_WIDTH ; x++ ) {
            for (var y = 0; y < GRID_HEIGHT; y++) {
                //console.log("gridArray location:: " + x + ", " + y);
                var restArray = createRestrictArray(x, y);
                if( !restArray ){
                    createRandomGrid();
                }
                else{
                    gridArray[x][y] = chooseRandWithRestrictions(restArray);
                }
            }
        }
        return true;
    }
	
	function createRestrictArray( i, j ){
		var restArray = [];
		for ( var m = i-1 ; m >= 0 ; m-- ){
			restArray.pushUnique( gridArray[m][j] );
		}
		for ( var n = j-1 ; n >= 0 ; n-- ){
			restArray.pushUnique( gridArray[i][n] );
		}
        //console.log( "restArray length:: "+restArray.length );
        if( restArray.length == gridColorOptionArray.length ){
            return null;
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
        var colour = gridOptionsCopy[ ind ];
        //console.log("     Colour: "+colour );
        return gridOptionsCopy[ ind ];
	}

    function getRandomInt(min, max) {
        var result = Math.floor(Math.random() * (max - min + 1) + min);
        return result;
    }

    function refreshGrid(){
        for( var i = 0 ; i < GRID_WIDTH*GRID_HEIGHT ; i++ ){
            document.getElementById('col'+i).style.backgroundColor = gridArray[ i%GRID_WIDTH ][ Math.floor(i/GRID_WIDTH) ];
        }
    }

    initGrid();
};


