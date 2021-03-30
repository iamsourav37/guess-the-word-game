
const msg = document.querySelector( ".msg" );
const guessText = document.querySelector( "input" );
const btn = document.querySelector( ".btn" );

let words = ["javascript", "php", 'react', 'angular', 'vue', 'java', 'python', 'dart', 'perl', 'typescript', 'scala', 'html', 'css' ,'swift', 'mongodb', 'mysql', 'oracle', 'android', 'flutter', 'fuchsia', 'c++', 'c#', 'asp' ];
let play = false;
let selectedWord;
let scrambleWord;

btn.addEventListener( "click", function ()
{
    if ( !play ){
        play = true;
        btn.innerHTML = "Guess";
        guessText.classList.toggle( "hidden" );

        selectedWord = selectWord();
        scrambleWord = generateScrambleWord( selectedWord );
        

        while ( selectedWord === scrambleWord )
            scrambleWord = generateScrambleWord( selectedWord );
            
        msg.innerHTML = scrambleWord;

        // just for testing
        console.clear();
        console.log( selectedWord );
        console.log( scrambleWord );


        
    }else{
        let userGuess = guessText.value;
        if ( selectedWord === userGuess )
        {
            msg.innerHTML = `You are right bro | its - "${ selectedWord }"`;
            play = false;
            btn.innerHTML = "Play again";
            guessText.classList.toggle( "hidden" );
            guessText.value = '';
        }
        else
        {
            msg.innerHTML = `Try again | "${ scrambleWord }"`;
            guessText.value = ''; 
        }
   }
});



const selectWord = () =>{
    let randomNum = Math.floor( Math.random() * words.length );
    return words[ randomNum ];
}

const generateScrambleWord = (word) =>{
    let s = word.split( "" );
    s.sort( function ()
    {
        return 0.5 - Math.random();
    } );
    word = s.join("");
    return word;
}
