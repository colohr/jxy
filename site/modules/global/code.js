const ɸ = 1.618033988749894848204586834;
(function uniform_resource_locator( ...io ){return io[0](...(io.slice(1,io.length)))})(
	function url_code( modules_code, kit_code, window_code, window){
		let element = window.document.currentScript
		element.setAttribute('url-kit','')
		window.addEventListener('load',window_code)
		window.global = { get:uniform_resource }
		//exports
		return modules_code(element, kit_code, window, uniform_resource)
		//shared actions
		function uniform_resource(location,options){
			if(typeof options !== 'object' && options !== null) options = {}
			const {body,headers,method} = options
			return new Promise((success,error)=>{
				let locator = new XMLHttpRequest()
				locator.responseType = 'text'
				locator.open(method || 'GET', location)
				if(headers) for(let name in headers) locator.setRequestHeader(name, headers[name])
				locator.onload = on_load
				locator.onerror = on_error
				//return value
				locator.send(get_body())
				//shared actions
				function on_error(e){ return error(e) }
				function on_load(){
					return success({
						get data(){ return get_json() },
						eval:()=>Promise.resolve(get_module()),
						json:()=>Promise.resolve(get_json()),
						get module(){ return get_module() },
						text:()=>Promise.resolve(locator.response)
					})
					//shared actions
					function get_json(){
						try{ return JSON.parse(locator.response) }
						catch(e){ console.error(e) }
						return null
					}
					function get_module(){ return eval(locator.response) }
				}
				function get_body(){
					if(typeof body === 'object' && body !== null){
						try{ return JSON.stringify(body) }
						catch(e){ console.error(e) }
					}
					return undefined
				}
			})
		}
	},
	function modules_code(element, kit_code, window, uniform_resource){
		const data = {
			element,
			host:window.location.origin,
			modules:get_modules_location(),
			location:get_location(),
			remote:window.location.host.includes('localhost') === false
		}
		
		const modules = [
			'global/location.js',
			'global/uniform-resource-location.js',
			'fxy/fxy.es6'
		]
		
		//return value
		return Promise.all(get_modules()).then(()=>kit_code(window)).catch(console.error)
		//shared action
		function get_modules(){
			data.base_element = get_base()
			return modules.map(get_resource)
			//shared actions
			function get_resource(item){ return uniform_resource(`${data.location}/${data.modules}/${item}`).then(on_response) }
			function on_response(response){
				let module_export = response.module
				if(typeof module_export === 'function') {
					let module_response = module_export(`${data.location}/${data.modules}`,data)
					if(module_response && module_response instanceof Promise) return module_response.then(x=>x)
				}
				return module_export
			}
		}
		function get_location(){
			let host = window.location.host
			let path = window.location.pathname
			let paths = path.split('/').filter(item=>item.length)
			if(paths.length){
				let last = paths[paths.length-1]
				if(last.includes('.')) paths = paths.filter(item=>item!==last)
			}
			paths.unshift(host)
			return `${window.location.protocol}//${paths.join('/')}`
		}
		function get_modules_location(){
			if(element.hasAttribute('path') !== true) element.setAttribute('path','/')
			let value = '/modules'
			if(element.hasAttribute('modules')) value = element.getAttribute('modules')
			else element.setAttribute('modules','/modules')
			return value.split('/').filter(item=>item.length).join('/')
		}
		function get_base(){
			let base_element = window.document.head.querySelector('base')
			if(base_element === null){
				base_element = window.document.createElement('base')
				base_element.href = data.location
				window.document.head.insertBefore(base_element,element)
			}
			return base_element
		}
	},
	function kit_code(window){
		//return value
		return  setup()
		//shared actions
		function setup(){
			let kit = window.kit
			kit.base.element.setAttribute('coder-load','')
			kit.javascript = kit.base.element.src.includes('es6') ? 'es6':'js'
			return window.dispatchEvent(new CustomEvent('global'))
		}
	},
	function window_code(){
		window.addEventListener('HTMLImportsReady',function(){ window.document.body.setAttribute('html-imports-ready','') })
		window.addEventListener('WebComponentsReady',function(){ window.document.body.setAttribute('web-components-ready','') })
	},this)