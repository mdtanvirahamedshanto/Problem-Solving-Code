createHelloWord = function(){
    return function(...args){
        return "Hello Word"
    }
}

const a = createHelloWord();
