var katzDeli = [];

function takeANumber(katzDeli,name) {
 katzDeli.push(name)
 return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli, name) {
  var first = katzDeli.shift()
  if(katzDeli.length >= 1 ) {
    return `Currently serving ${first}.`
  } else {
    return `There is nobody waiting to be served!`
  }
}

function currentLine() {
  
}
