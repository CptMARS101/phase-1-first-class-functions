function receivesAFunction(callBack) {
    callBack();
    return "Did It!";
}
function returnsANamedFunction() {
function namedFunction() {
    return "Called!";
}
return namedFunction;
}
function returnsAnAnonymousFunction() {
    return function() {
        return "Oh Mama!"
    };
}