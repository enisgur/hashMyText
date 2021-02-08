// a="abcdefghijklmnopqrstuvwxyz";
// let newA = a.split("");
// console.log(newA);

// 5 4 3 2 1   5 4 3 2 1 ... 
const hash = 5;



const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
    ]; //25
    
    
    async function encryptText(text) {
      if (!text) return null
      const limitA = alphabet.length -1; //25
      let myText = await text.split("");
    
      let encripted = "";
      let fHash = hash;

      myText.map((t) => {
          console.log(fHash);
        if (fHash === 0){
            fHash = hash;
        };
        const isLimit = limitA - fHash;

        let indexT = alphabet.indexOf(t);

        if (indexT > isLimit) {
            let count = limitA -  indexT; 
            // console.log(count)
            encripted+= alphabet[fHash - count -1];
            return fHash--;
        }


        encripted+= alphabet[indexT + fHash];
        return fHash--;
      });
    
      console.log(encripted);
      return encripted;
    }



    async function decryptText(text) {
        if (!text) return null
        const limitA = alphabet.length -1; //25
        let myText = await text.split("");
      
        let decripted = "";
        let fHash = hash;
  
        myText.map((t) => {
            console.log(fHash);
          if (fHash === 0){
              fHash = hash;
          };
          const isLimit = limitA - fHash;
  
          let indexT = alphabet.indexOf(t);
  
          if (indexT < fHash) {

            let count = fHash - indexT -1;
            //   console.log(count);

              
            //   console.log(limitA - count, "check");
            //   let count = limitA -  indexT; 
              
              decripted+= alphabet[limitA - count];
              return fHash--;
          }
  
  
          decripted+= alphabet[indexT - fHash];
          return fHash--;
        });
      
        console.log(decripted);
        return decripted;
    }

    let inputText = "outlook";
    let inputTextDec = "lyugonw";

    // encryptText(inputText);
    decryptText(inputTextDec);
