
let title = 'this is a title' //This Is A Title

// title.toTitleCase(); //this -> title

var toTitleCase = function(givenString) {
    // console.log(this);

     //this is how we read argument in this case

    let words = givenString.split(' ');

    let finalTitle = [];
    for(let i = 0; i< words.length; i++) {

        //One
        let temp = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
        finalTitle.push(temp)

        //Two
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }

    // let finalTitle = words.join('');
    // words.join(' ')
    console.log("Final: ", finalTitle.join(' '));
    console.log("second: ", words.join(' '))

    return words.join(' ');
}

var shorten = function(charLimit = 200, endLine = '...Read More', givenString) {
    

    let shortenedString = givenString.substring(0, charLimit) + endLine;

    console.log(shortenedString)
    return shortenedString;
}



var highlight = function(givenString) {

    const paragraphs = document.querySelectorAll('p');

    const regexp = new RegExp(givenString, 'g')

    paragraphs.forEach((para) => {
        para.innerHTML = para.innerHTML.replace(regexp, `<span class="highlight">${givenString}</span>`)
    })
}


//Store all methods in our library object
var _ = {
    shorten,
    highlight,
    toTitleCase
}

export default _;