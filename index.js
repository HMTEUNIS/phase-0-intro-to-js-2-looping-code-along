
function writeCards(nameList, event) {
    let newArray = []
    for (let i = 0; i < nameList.length; i++) {
        let name = nameList[i]

        newArray.push(
            "Thank you, " + name + ", for the wonderful " + event + " gift!" 
        );
    }
    console.log(newArray)
    return newArray
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countDown(i) {
let countDown = i;
while (i > -1) 
  console.log(i--)
}
countDown(10)

