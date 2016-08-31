module.exports = function() {
    let localError = this.errors.length?this.getMessage(this.errors[0]):'';
    if(localError){
    	return localError;
    }else if (this.serverErrors.length) {
    	return this.serverErrors[0][0];
    }
    return '';
  }
