// select single word from DB
var x0to4 = Math.floor(10 * Math.random()),
    //console.log(x0to4);
    words = ["cat", "door", "chair", "house", "bird", "table","computer", "moeny", "apple","banana"];
    word = words[x0to4];
    guess = [];
    //inparray = [];

    // make guess array full of '-' in insialize
    for (i in word) {
        guess.push('-');
    }

// on load the page ddo this function
window.onload = function () {
    var live = 6,
        discoverd = 0,

        // enter a number from prompt (init)
        inp = prompt( "Enter a single character here");

    
    whileloop: 
    while (true) {
        var v = 0;
        // search inp in word characters
        for (char in word) {
            //console.log(char);
            if (word[char] === inp) {
               // character inp is existent
               v += 1;
               // replace '-' in guess array with inp character
               guess[char] = word.charAt(char);
               // increase num of discoverd characters
               discoverd += 1;
            } else {
               // character inp is not existent, go to next character
               continue;
            }
        }
        
        if (v === 0) {
            // it means you do not find inp character in word
            console.log("Ops, character "+ inp +" is not existent, you have lost one chance ");
            // dicrease live
            live -= 1;
            console.log("live = " + live);
        } else {
            // it means you find inp character in word
            console.log("good, character " + inp + " is existent");
            console.log(guess);
        }

        if (discoverd === word.length) {
            // it means you discovered all characters
            console.log('CONGRATULATION :), the word is: ');
            console.log(word);
            break;
        }

        if (live === 0) {
            // it means you do not have any live
            console.log('GAME OVER, the word is: ');
            console.log(word);
            break;
        }
        // enter a number from prompt
        inp = prompt( "Enter a single character here");
        //inparray.push(inp);

    }
}