function padIt(str,n){
  do {
    if (n === (n % 2 === 0)) {
      str = str + "*";
    } else {
      str = "*" + str;
    }
    n++
  } while (i >= n)
 return str;
}