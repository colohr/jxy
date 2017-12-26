window.fxy.exports('Points',(Points)=>{
	
	//exports
	Points.index = load_points
	
	//shared actions
	function load_points(index_file,get_headers){
		return load_index(index_file).then(index=>{
			let items = index.items
			let points = {}
			for(let name in items){
				let point = items[name]
				let actions = 'actions' in point ? point.actions.content:null
				let pointer = new Points.Pointer(point.endpoint,actions,get_headers)
				points[name] = pointer
			}
			return new Proxy({index,points},{
				get(o,name){
					if(name in o.points) return o.points[name].api
					else if(name in o.index) return o.index[name]
					else if(name in o) return o[name]
					return null
				}
			})
		})
	}
	function load_index(index_file){
		return window.global.get(index_file).then(x=>x.data)
	}
})