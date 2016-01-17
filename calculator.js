var calculator = function(base){

	var base = base;

	return {
		add: function(){
			for(var i = 0; i < arguments.length; i++){
				base += arguments[i];
			}
			return this;
		},
		multiply: function(arg){
			base *= arg;
			return this;
		},
		substract: function(){
			for(var i = 0, suma = 0; i < arguments.length; i++){
				suma += arguments[i];
			}
			base = base - suma;
			return this;
		},
		divide: function(arg){
			base /= arg;
			return this;
		},
		result: function(){
			console.log(base);
			base = 0;
		}
	}
};