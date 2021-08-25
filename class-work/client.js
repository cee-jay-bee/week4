//our inventory array
let inventory = [];

//create function to add objects to the inventory
const addObject = () => {
    //our temp object
    let currentObject = {};

    // get user input for object
    currentObject.size = prompt( `Please input size` );
    currentObject.color = prompt( `Please input color` );
    currentObject.description = prompt( `Please input description`);
    
    //push object into inventory array
    inventory.push(currentObject);
}
// search
// allow the user to start a search
const search = () => {
    // allow the user to input size
    let sizeCheck = prompt(`Input search size`);
    // allow the user to input a color
    let colorCheck = prompt(`Input search color`);
    let matches = [];
    // loop through inventory
    for (let items in inventory){
        // check for match on both size AND color
        if( inventory[items].size === sizeCheck && inventory[items].color === colorCheck){
            // push matches into match array
            matches.push( inventory[items] );
        }// end match
    } // end for
    //log the inventory
    console.log( inventory );
    console.log( matches );
    // display all matches
    // loop through match arrays
    for (let match in matches){
        // logs the description of each match
        console.log(`matches: ` + matches[match].description);
    }
} // end search function

//allow users to add as many objects as they would like
let continueInput = true;
while( continueInput ){
    if (confirm(`Would you like to add an object to the inventory?`)) {
        addObject();
    } //end confirm
    else {
        continueInput = false;
    }//end stop input
} //end while

search();