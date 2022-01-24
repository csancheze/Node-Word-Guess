class Letter {
  constructor(letter) {
      let arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',"0","1","2","3","4","5","6","7","8","9"]
      
      if (arr.indexOf(letter.toLowerCase())==-1){
            this.visible = true
      } else {
            this.visible = false  
      }
      this.char = letter
  }
      guess (input){
            if (input===this.char) {
                  this.visible = true
                  return true
            }else {
                  return false
            }
      }

      toString() {
            if (this.visible === true) {
                  return this.char
            }
            return "_"
      }
      
      getSolution() {
            return this.char
      }
       
}


module.exports = Letter;
