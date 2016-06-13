String.prototype.trimLR=function(){
	return this.replace(/(^\s*)(\s*$)/g,'');
}