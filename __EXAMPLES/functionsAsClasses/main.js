/**
 * Created by TheMilanese on 6/10/2017.
 */

/*
    This main 'file' is basically a bridge from shitty as DOM to creating a better coding environment.
    This file can can have all kind of asset loading and config data loading in order to prepare the
    DOM space memory for when we get the application actually up and running.
 */
function onDOMLoaded(){
    console.log("DOM loaded");
    //boom... created an instance of Justin... just like that.
    //If you wanted to you could call functions or variables that are defined in Justin
    //from in this file but we really shouldn't.  Again, this is a bridge to get away from the shitty ass DOM.
    //Once Justin is created, it becomes the base of EVERYTHING.  In the real world it would have a more contextual
    //name. ie AppControllerBase or some shit.
    new Justin();

}




document.addEventListener("DOMContentLoaded", onDOMLoaded );