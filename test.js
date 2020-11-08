const func = () => {
  var str = "I'Am so hungry"
  for (let i=0; i< str.length; i++) {
    console.log(`${str[i]},  -> ${str[i].charCodeAt()},  -> ${str[i].charCodeAt().toString(2)}`)
  }
}

func()