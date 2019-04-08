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
  var uppercase, lowercase, ILU = string
      lowercase = "hello!"
      ILU = "I Love you, Grandma."
  
  if (uppercase.toUpperCase() === uppercase)
  {
    return("YES INDEED!")
  } 
  else if (string === ILU)
  {
    return("I love you, too.")
  }
  else if (string.toLowerCase === string)
  {
    return("I can\'t hear you!")
  }
  else{
    return("Unexpected message")
  }
}