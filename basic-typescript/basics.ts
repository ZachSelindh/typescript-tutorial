function addBasics(n1 :number, n2: number, showResult: boolean, phrase: string) {
    if (showResult) {
        const result = n1 + n2
        console.log(phrase + result)
    } else {
    return n1 + n2 }
}

const number1 = 5;
const number2 = 2.8;
const printResultBasics = true;
const resultPhrase = "Result is: "

const resultBasics = addBasics(number1 , number2, printResultBasics, resultPhrase);
