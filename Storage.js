// HTML LocalStorage
var u = this;
u.store = function(key, data) {
    var ls = window.localStorage;
    if(!window.localStorage) {
      console.log("Your browser is not support local storage!");
    }
    if (!arguments.length){
      ls.clear();
    } else if (arguments.length == 1) {
      try {
        data = JSON.parse(ls.getItem(key));
      } catch (e) {
        data = null;
      }
      return data;
    } else if (arguments.length == 2) {
      if (!data) {
        ls.removeItem(key);
      } else {
        try {
          ls.setItem(key, JSON.stringify(data));
        } catch (e) {
          console.log("Set value failed");
        }
      }
    }
}
