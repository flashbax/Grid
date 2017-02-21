window.onload = function() {
    
    var blue = colourBlue('#4286f4');
    var red = colourRed('#c40909');
    var green = colourGreen('#62f441');
    //add array
    arr = [blue, red, green];
    
    //add rows of divs to page with id
    function addRowDiv() { 
        for (var i = 0; i<=2; i++) { 
            var divRow = document.createElement('div'); 
            divRow.setAttribute('id', 'row'+[i]);
            document.body.appendChild(divRow);
        }    
    };

    //add columns with id's 1-3
    function addColDivRow1() { 
        
        
        //var randommath = Math.floor(Math.random() * 3);
        for (var i = 0; i<=2; i++) { 
            var divCol = document.createElement('div'); 
            divCol.setAttribute('id', 'col'+[i]);
            document.getElementById('row0').appendChild(divCol);
            document.getElementById('col'+i).style.backgroundColor = arr[Math.floor(Math.random() * 3)];
        }
    };
    //add columns with id's 4-6
    function addColDivRow2() { 
        for (var i = 3; i<=5; i++) { 
            var divCol = document.createElement('div'); 
            divCol.setAttribute('id', 'col'+[i]);
            document.getElementById('row1').appendChild(divCol);
            document.getElementById('col'+i).style.backgroundColor = arr[Math.floor(Math.random() * 3)];
        }
    };
    //add columns with id's 7-9
    function addColDivRow3() { 
        for (var i = 6; i<=8; i++) { 
            var divCol = document.createElement('div'); 
            divCol.setAttribute('id', 'col'+[i]);
            document.getElementById('row2').appendChild(divCol);
            document.getElementById('col'+i).style.backgroundColor = arr[Math.floor(Math.random() * 3)];
        }
    };
    //add basic css styles to rows
    function basicStylesRow() {
        for (var i = 0; i<=2; i++) {
             var elem = document.getElementById('row'+i); 
             elem.style.clear = "both";
        }
    };
    //add basic css styles to colums
    function basicStylesCol() {
        for (var i = 0; i<=8; i++) {
             var elem = document.getElementById('col'+i); 
             elem.style.border = '#000000 1px solid';
             elem.style.width = '20px';
             elem.style.height = '20px';
             elem.style.display = "block";
             elem.style.float = "left";
        }
    };

    function colourBlue(blue) { 
        return blue; 
    }

    function colourRed(red) { 
        return red; 
    }

    function colourGreen(green) { 
        return green; 
    }

    
    
    addRowDiv();
    addColDivRow1();
    addColDivRow2();
    addColDivRow3();
    basicStylesRow();
    basicStylesCol();
};

//get three colours red, green and blue
//add the three colours to the grid 
//each color gets 3 squares
//randomize the colors to any square (only 3 at a time)
