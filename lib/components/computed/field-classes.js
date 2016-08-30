module.exports = function() {

    var fieldClass = "VF-Field--" + ucfirst(this.fieldType);

    var classes =  {
      'VF-Field--required':this.rules.required || this.isRequired,
      'VF-Field--disabled':this.disabled,
      'has-error':this.errors.length,
      'has-feedback':this.hasFeedback,
      'has-success':this.success,
    }

    classes[fieldClass] = true;

    return classes;
  }

  function ucfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
