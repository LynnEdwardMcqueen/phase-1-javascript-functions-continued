// code your solution here
function saturdayFun(activityString = "roller-skate") {
    return (`This Saturday, I want to ${activityString}!`);
}

function mondayWork(activityString = "go to the office") {
    return (`This Monday, I will ${activityString}.`);
}

function wrapAdjective(visualFlare = "*") {
    return (function (adjective = "special") {
        return (`You are ${visualFlare}${adjective}${visualFlare}!`)
    })
}