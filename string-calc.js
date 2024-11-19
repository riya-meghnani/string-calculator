export function add(numbers) {
    if (numbers === "") {
      return 0;
    }
    else {
        let no = numbers.split(",")
        if(no.length == 1){
            return 1
        }
        else {
            return no.reduce((acc, element) => acc = acc + parseInt(element), 0);
        }
    }
    return null; 
  }