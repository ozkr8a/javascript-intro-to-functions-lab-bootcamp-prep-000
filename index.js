function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(shout(string))
}

function logWhisper(string){
  console.log(whisper(string))
}

function sayHiToGrandma(string){
  var uppercase = string
  var lowercase = string
  var ILU = "I love you, Grandma."
  
  if (uppercase.toUpperCase() === uppercase)
  {
    return("YES INDEED!")
  } 
  else if (string === ILU)
  {
    return("I love you, too.")
  }
  else if (lowercase.toLowerCase() === lowercase)
  {
    return("I can\'t hear you!")
  }
  else{
    return("Unexpected message")
  }
}