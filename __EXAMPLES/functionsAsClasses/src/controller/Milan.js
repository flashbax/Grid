/**
 * Created by TheMilanese on 6/10/2017.
 */

function Milan( callBack ){
    console.log("I'm an instance of Milan.  I take an argument in my function definition");

    //you can try and use this kind of code to enforce incoming data types and existence.  Pain in the ass. javascript sucks
    if( !callBack || typeof callBack !== "function"){
        throw new Error("Milan must have an argument of type 'function'");
    }

    //declare some variables
    var _callBack = callBack;

    //declare a function that will execute the function passed in as parameter one
    function runCallBack(){
        _callBack();
    }

    return {runCallBack:runCallBack};


}
