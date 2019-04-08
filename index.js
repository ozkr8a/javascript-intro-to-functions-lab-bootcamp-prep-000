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
  var uppercase = "HELLO!"
      lowercase = "hello!"
      ILU = "I Love you Granda."
  
  if string === uppercase
  {
    return("YES INDEED!")
  } 
  else if string === ILU
  {
    return("!")
  }
  else 
  {
    return("I can\'t hear you!")
  }
}