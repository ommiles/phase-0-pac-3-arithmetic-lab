let a = Math.floor(Math.random() * 1000)
let b = Math.floor(Math.random() * 1000)

let add = (a,b) => {
      return(a + b);
}

let subtract = (a,b) => {
    return(a - b)
}

let multiply = (a,b) => {
    return(a * b)
}

let divide = (a,b) => {
    return(a / b)
}

let increment = n => {
    return(n += 1)
}

let decrement= n => {
    return(n -= 1)
}

let makeInt = (string) => {
    return(parseInt(string, 10))
}

let preserveDecimal = (string) => {
    return(parseFloat(string))
}