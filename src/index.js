module.exports = function check(str, bracketsConfig) {
  let array = str.split('');

  for( let i = 0; i < array.length; i++) {
    for( let j = 0; j < bracketsConfig.length; j++) {
      if( array[i] == bracketsConfig[j][0] && array[i+1] == bracketsConfig[j][1]) {
        array.splice(i,2);
        i = i - 2;
      }
    }
  }

  if(array.length == 0){
    return true;
  }else {
    return false;
}
}
