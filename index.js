window.onload = function() {
    
    var body = document.getElementsByTagName('body');
    //document.createElement('div').setAttribute('id', 'container');
    
    var blue = '#4286f4'
    var red = '#c40909'
    var green = '#62f441'

    var arr = [blue, red, green];  

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
     
    function addTopRow() { 
        for (var i = 0; i <= 2; i++) { 
            var divCol = document.createElement('div');     
            divCol.setAttribute('id', 'col'+i);
            document.getElementById('body').appendChild(divCol);
            document.getElementById('col'+i).style.backgroundColor = arr.shuffle()[0]; 
            console.log(arr);
        };
         
    };

    //document.getElementById('col1').addEventListener("click", topRowCheck());

    //add basic css styles to colums
    function basicStyles() {
        for (var i = 0; i<=2; i++) {
             var elem = document.getElementById('col'+i); 
             elem.style.border = '#000000 1px solid';
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
    addTopRow();
    basicStyles();
};
