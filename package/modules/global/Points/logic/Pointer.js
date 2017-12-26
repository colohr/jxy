window.fxy.exports('Points',Points=>{
	
	class Pointer{
		constructor(endpoint,signals,get_headers){
			this.endpoint = endpoint
			if(signals) this.signals = new Points.Signal(signals,endpoint)
			if(get_headers) this.get_headers = get_headers
		}
		get api(){ return get_api(this) }
		get headers(){ return 'get_headers' in this ? this.get_headers():null }
	}
	
	//exports
	Points.point = point
	Points.Pointer = Pointer
	
	//shared actions
	function get_api(pointer){
		return new Proxy(pointer,{
			get(o,name){
				if(o.signals){
					if(name in o.signals.data){
						const query = o.signals.data[name]
						return get_point(o,query)
					}
				}
				return null
			}
		})
	}
	
	function get_point(pointer,query){
		const sender = point(pointer.endpoint,pointer.headers)
		return variables=>sender(query,variables)
	}
	
	function point(endpoint,headers){
		const sender = Points.post.data(endpoint)
		return (query,variables)=>{
			let input = {query}
			if(variables) input.variables = variables
			return sender(input,headers).then(result=>result.data)
		}
	}
	
	
})