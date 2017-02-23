window.onload = function() {
    
    var body = document.getElementsByTagName('body');
    //document.createElement('div').setAttribute('id', 'container');
    
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
    var array = arr.shuffle();

    //make the divs
    function makeDivs() { 
        //loop through and create 9 divs with ids
        for (var i = 0; i<=8; i++) {  
            var divCol = document.createElement('div');     
            divCol.setAttribute('id', 'col'+i); 
            //add divs as child of body tag
            document.getElementById('body').appendChild(divCol);
        };

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
    };

    //add css styles to divs
    function basicStyles() {
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
    basicStyles();
};


    //document.getElementById('col1').addEventListener("click", topRowCheck());