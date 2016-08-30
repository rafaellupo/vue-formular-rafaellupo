module.exports = function(vm) {
  return {
    submit: function(e) {
      if (vm.sending) {
      	e.preventDefault();
      	return false;
      }
      vm.sending = true;
      return true;
    }
  }
}
