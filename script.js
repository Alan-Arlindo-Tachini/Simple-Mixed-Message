let sign = ['star', 'moon', 'sun', 'comet'];
let how = ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'];
let advice = ['go out and eat', 'not read this', 'play more', 'trust no one'];

let firstPart;
let secondPart;
let thirdPart

const randomPhrase = () => {
    firstPart = sign[Math.floor(Math.random() * sign.length)];
    secondPart = how[Math.floor(Math.random() * how.length)];
    thirdPart = advice[Math.floor(Math.random() * advice.length)];
    console.log(`Your sign right now is a "${firstPart}"`)
    console.log(`You are having: "${secondPart}"`)
    console.log(`You should: ${thirdPart}"`)
    
}

randomPhrase()


