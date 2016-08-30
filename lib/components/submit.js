module.exports = {
  template:require('../templates/submit.html'),
  props: {
    text: {
      type: String,
      required:false,
      default:'Submit'
    }
  },
  computed: {
    disabled: function() {
      return this.$parent.sending || (this.$parent.options.sendOnlyDirtyFields && this.$parent.pristine);
    }
  }
}
