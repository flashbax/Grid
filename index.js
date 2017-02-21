window.onload = function() {
    
    //add rows of divs to page with id
    function addRowDiv() { 
        for (var i = 0; i<=2; i++) { 
            var divRow = document.createElement('div'); 
            divRow.setAttribute('id', 'row'+[i]);
            document.body.appendChild(divRow);
        }    
    };

    //add columns of disvs to page with id (child of row divs)
    function addColDiv() { 
        for (var i = 0; i<=2; i++) { 
            var divCol = document.createElement('div'); 
            divCol.setAttribute('id', 'col'+[i]);
            document.getElementById('row'+i).appendChild(divCol);
        }
    };

    addRowDiv();
    addColDiv();
};

//Add child divs of rows numbers for each column in eac row
//Add a function that adds the divs and their ids