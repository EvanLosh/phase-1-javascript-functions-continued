// code your solution here
function saturdayFun(x = 'roller-skate') {
    return `This Saturday, I want to ${x}!`;
}

function mondayWork(x = 'go to the office') {
    return `This Monday, I will ${x}.`;
}

// Implement a function called wrapAdjective:

// It should return a function. This "inner" function should:
//      take a single parameter that should default to "special". Name it however you wish.
//      return a String of the form "You are ...!" where ... should be the adjective this function received wrapped in visual flair.
// It should take as parameter a String that will be used to create visual flair.
// You may call the parameter whatever you like, but its default value should be "*".
// Call example: const encouragingPromptFunction = wrapAdjective("!!!")

function wrapAdjective(flair = "*") {
    return (flairedString = 'special') => { return `You are ${flair}${flairedString}${flair}!` };
}
