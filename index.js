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
  
  if string === uppercase
  {
    return("YES INDEED!")
  } 
  else if string === lowercase
  {
    return("!")
  }
  else 
  {
    return("I can\'t hear you!")
  }
}