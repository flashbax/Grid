/**
 * Created by TheMilanese on 6/10/2017.
 */

function Justin(){

    console.log("I'm an instance of Justin.");

    function innerJustin(){
        console.log("Hi I'm innerJustin.  A function defined inside Justin");
    }

    //EXAMPLES - only one at a time!!
    //1)  will throw an error cause wrong data type
    //var myMilan = new Milan( 5 );
    //2)  will throw an error cause no parameter
    //var myMilan = new Milan(  );
    //3) will work cause its a parameter of type function
    var myMilan = new Milan( innerJustin );
    myMilan.runCallBack();
}
