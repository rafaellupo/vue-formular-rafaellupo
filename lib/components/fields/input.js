var merge = require('merge');
var Field = require('./field');

module.exports = function() {
   return merge.recursive(Field(), {
   props: {
    placeholder: {
      type:String,
      required:false,
      default:''
    },
    debounce:{
      type:Number,
      default:300
    }
  }
});

}

