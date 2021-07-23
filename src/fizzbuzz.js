export function fizzbuzz(nb){
    if(nb % 3 === 0 && nb % 5 === 0){
        return 'FizzBuzz';
    }else if(nb % 5 === 0){
        return 'Buzz';
    }else if(nb % 3 === 0){
        return 'Fizz';
    } else {
        return nb;
    }
}

export function getClassFromResult(result){
    switch(result){
        case 'FizzBuzz' : return 'fizz buzz';
        case 'Fizz' : return 'fizz';
        case 'Buzz' : return 'buzz';
        default: return '';
    }
}