var clone = require('clone');

module.exports = function() {

    this.fields.forEach(function(field) {
      // field.initialValue = clone(field.value);
      // field.dirty = false;
      field.resetField();
    });
    this.options.additionalPayload = {};
}

