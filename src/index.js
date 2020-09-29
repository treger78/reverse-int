module.exports = function reverse (n) {

    let nString = '';
    let nArr = [];

    nString = String(n);

    for (var j = 0, i = nString.length - 1; i >= 0; i--, j++) {
      nArr[i] = nString[j];      
    }

    nString = nArr.toString();

    for (var i = 0; i < nString.length; i++) {
      nString = nString.replace(',', '');      
    }
    
    n = parseInt(nString);

    return n;

}
