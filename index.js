window.onload = function() {
    
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
        for (var i = 0; i<=2; i++) { 
            var divCol = document.createElement('div'); 
            divCol.setAttribute('id', 'col'+[i]);
            document.getElementById('row0').appendChild(divCol);
        }
    };
    //add columns with id's 4-6
    function addColDivRow2() { 
        for (var i = 3; i<=5; i++) { 
            var divCol = document.createElement('div'); 
            divCol.setAttribute('id', 'col'+[i]);
            document.getElementById('row1').appendChild(divCol);
        }
    };
    //add columns with id's 7-9
    function addColDivRow3() { 
        for (var i = 6; i<=8; i++) { 
            var divCol = document.createElement('div'); 
            divCol.setAttribute('id', 'col'+[i]);
            document.getElementById('row2').appendChild(divCol);
        }
    };

    function basicStylesCol() {
        for (var i = 0; i<=8; i++) {
             var elem = document.getElementById('col'+i); 
             elem.style.border = '#000000 1px solid';
             elem.style.width = '20px';
             elem.style.height = '20px';
        }
    };

    addRowDiv();
    addColDivRow1();
    addColDivRow2();
    addColDivRow3();
    basicStylesCol();
};

//Add child divs of rows numbers for each column in eac row
//Add a function that adds the divs and their ids