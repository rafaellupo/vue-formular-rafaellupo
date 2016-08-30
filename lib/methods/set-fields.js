module.exports = function(data){
	let keys = Object.keys(data);
	let ap = this.options.additionalPayload;
	keys.forEach( (val) => {
		let field = this.getField(val);
		if(field){
			field.setValue(data[val]);
		}else{
			ap[val] = data[val];
		}
	});
}