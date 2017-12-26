(function(...x){ return x[0](x[1]) })(
function(window){
	//exports
	window.global.location = get_url_location
	//shared actions
	function get_url_location(...x){
		let base = x.filter(i=>i === true).length > 0 ? window.location.origin:window.location.href
		if(base.charAt(base.length-1) === '/') base = base.substr(0,base.length-1)
		//let options = x.filter(i=>typeof i === 'number')
		let paths = x.filter(i=>typeof i === 'string').map(map_paths).filter(x=>x.length)
		return value(base)
		//shared actions
		function filter(x){ return !is_file(x) }
		function is_file(x){ return x.includes('.html') }
		function map_paths(x){ return x === '/' ? '':x }
		function parts(x){ return x.split('/') }
		function value(x){ return parts(x).filter(filter).concat(paths).join('/') }
	}
},this)