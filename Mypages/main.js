// This code starts to run after the HTML page is loaded.
// Here is our array of board games in order

let boardGames = ['Bored: Break The Safe', 'Bored: The Chameleon', 'Bored: Clue', 'Bored: Monopoly', 'Video: Brawlhalla', 'Video: Skyrim', 'Video: Overwatch', 'Video: Terraria', 'Card: Boy Scout', 'Card: Curses'];  
console.log(boardGames.langth);

// Something wrong here, it needs fixing.
for (let count = 0; count < boardGames.length; count++) {  
    // console.log only shows up in the Dev Tools, so use it to figure out what is wrong.
    // console.log(boardGames[count]);
    console.log(count.toString());
    // console.log(document.getElementById(count.toString()).innerHTML);
    document.getElementById(count.toString()).textContent = boardGames[count];
};