module.exports = function() {
    return this.hadErrors && !this.errors.length && !this.serverErrors.length;
  }
