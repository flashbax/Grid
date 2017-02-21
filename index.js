window.onload = function() {
    
    var body = document.getElementsByTagName('body');
    //document.createElement('div').setAttribute('id', 'container');
    
    var blue = colourBlue('#4286f4');
    var red = colourRed('#c40909');
    var green = colourGreen('#62f441');
    //add array
    arr = [blue, red, green]


    function addColDiv() {     
        for (var i = 0; i<=8; i++) { 
            var divCol = document.createElement('div'); 
            divCol.setAttribute('id', 'col'+i);
            document.getElementById('body').appendChild(divCol);
            document.getElementById('col'+i).style.backgroundColor = arr[Math.floor(Math.random() * 3)];
            console.log(arr);
        };
    };
   
    //add basic css styles to colums
    function basicStyles() {
        for (var i = 0; i<=8; i++) {
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

    //background colours
    //blue
    function colourBlue(blue) { 
        return blue; 
    };
    //red
    function colourRed(red) { 
        return red; 
    };
    //green
    function colourGreen(green) { 
        return green; 
    };
    
    //init functions
    addColDiv();
    basicStyles();
};
