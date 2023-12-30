var expect = (target)=>({
    toBe(val){
        if(val === target) return ture;
        throw new Error("Not Equal") ;
    },
    notToBe(val){
        if(val !== target) return true;
        throw new Error("Equal");
    },
});