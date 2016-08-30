module.exports = function(){
	this.setValue(null);
	setTimeout(function(){
		this.errors = [];
		this.hadErrors = false;
		this.pristine = true;
		this.dirty = false;
	}.bind(this), this.debounce);	
}