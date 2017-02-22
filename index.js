window.onload = function() {
    
    var body = document.getElementsByTagName('body');
    //document.createElement('div').setAttribute('id', 'container');
    
    var blue = '#4286f4'
    var red = '#c40909'
    var green = '#62f441'
    
   
    //red = '(66, 134, 244)';
    //green = '(98, 244, 65)';

    //add array
    arr = [blue, red, green]
    arrbr = [blue, red]
    arrrg = [red, green]
    arrbg = [blue, green]

    function addColDiv() {     
        for (var i = 0; i<=8; i++) { 
            var divCol = document.createElement('div');  
            divCol.setAttribute('id', 'col'+i);
            document.getElementById('body').appendChild(divCol);
            document.getElementById('col'+i).style.backgroundColor = arr[Math.floor(Math.random() * 3)];
            //console.log(arr);
        };
    };
   
    function topRowCheck() { 
        for (var i = 0; i<=2; i++) {
            var colbg = document.getElementById('col'+i).style.backgroundColor; 
            //console.log(i);
            if (i === 0 && colbg === 'rgb(66, 134, 244)') { 
                    document.getElementById('col1').style.backgroundColor = arrrg[Math.floor(Math.random() * 2)];
                    document.getElementById('col2').style.backgroundColor = arrrg[Math.floor(Math.random() * 2)];
            } else { 
                console.log('Not blue');
            }
        }       
     };

     function middleRowCheck() { 
        for (var i = 0; i>=2 && i<=5; i++) {
            var colbg = document.getElementById('col'+i).style.backgroundColor; 
            console.log(i);
            // if (i === 0 && colbg === 'rgb(66, 134, 244)') { 
            //         document.getElementById('col1').style.backgroundColor = arrrg[Math.floor(Math.random() * 2)];
            //         document.getElementById('col2').style.backgroundColor = arrrg[Math.floor(Math.random() * 2)];
            // } else { 
            //     console.log('Not blue');
            // }
        }       
     };

    //document.getElementById('col1').addEventListener("click", topRowCheck());

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
    
    //init functions
    addColDiv();
    basicStyles();
    topRowCheck();
    middleRowCheck();
};
