(function(kit_code,url_code,window){ return kit_code(url_code,window) })(
	function kit_code(url_code,window){
		if (!('URL' in window)) window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL
		if (!('requestAnimationFrame' in window)) window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame
		if (!('cancelAnimationFrame' in window)) window.cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame
		class BaseKit {
			constructor(base) { this.base = base }
			get (name) { return this.selfie.getAttribute(name) }
			has(name) { return this.selfie.hasAttribute(name) }
			get host() { return window.fxy.file.host }
			get modules(){ return this.base.modules || 'modules' }
			get path() { return this.get('path') || window.location.pathname }
			remove(name) { return this.selfie.removeAttribute(name) }
			get selfie(){ return this.base.element }
			set (name, value) { return this.selfie.setAttribute(name, value) }
			url(...x) {
				x.unshift(this.dir);
				return window.fxy.file.url(...x)
			}
		}
		return function(file,base_data) {
			window.global.folders = {
				get bower(){ return this.kit.has('bower') ? this.kit.get('bower'):'bower_components' },
				get elements(){return this.kit.has('elements') ? this.kit.get('elements'):'custom-elements'},
				get fxy(){return `${this.modules}/fxy`},
				get kit(){ return window.global.kit },
				get logic(){return this.kit.has('logic') ? this.kit.get('logic'):'logic'},
				get modules(){return this.kit.has('modules') ? this.kit.get('modules'):'modules'},
				get site(){ return this.kit.has('site') ? this.kit.get('site'):this.kit.path },
				get wwi(){return `${this.modules}/wwi`}
			}
			
			
			
	
			//exports
			return url_code(window.global.kit = get_kit(),window)
			
			//shared actions
			function create_kit() {
				let head = window.document.head
				let base = get_base()
				if (base === null) {
					base = window.document.createElement('base')
					base.href = window.location.origin
					base.setAttribute('url-kit', '')
					let before = get_before_target()
					if (before !== null) head.insertBefore(base, before)
					else head.appendChild(base)
				}
				//return value
				return base
				
				//shared actions
				function get_base() { return window.document.head.querySelector('base') }
				
				function get_before_target() {
					let target = null
					let scripts = Array.from(head.querySelectorAll('script'))
					if (scripts.length) target = scripts[0]
					if (target === null) {
						let links = Array.from(head.querySelectorAll('link'))
						if (links.length) target = links[0]
					}
					if (target === null) {
						let metas = Array.from(head.querySelectorAll('meta'))
						if (metas.length) {
							let last = metas[metas.length - 1]
							if (last.nextElementSibling) target = last.nextElementSibling
						}
					}
					if (target === null) {
						let title = head.querySelector('title')
						if (title !== null && title.nextElementSibling) target = title.nextElementSibling
					}
					return target
				}
			}
			
			function get_kit() {
				if(typeof base_data === 'object' && base_data !== null) return window.kit = new BaseKit(base_data)
				else if ('kit' in window) return window.kit
				else if ('app' in window && 'kit' in window.app) return window.app.kit
				return window.kit = kit_proxy(find_kit())
				
				//shared actions
				function get_element_control(proxy, element) {
					if (element instanceof HTMLElement) {
						return {
							get: function kit_get(name) {return element.getAttribute(name)},
							has: function kit_has(name) { return typeof name !== 'string' ? false : element.hasAttribute(name) },
							remove: function kit_remove(name) {
								if (typeof name === 'string') element.removeAttribute(name)
								return proxy
							},
							set: function kit_set(name, value) {
								if (typeof name === 'string') {
									if (value === true) value = ''
									else if (value === false) value = null
									if (value === null) element.removeAttribute(name)
									else element.setAttribute(name, value)
								}
								return proxy
							}
						}
					}
					else if (typeof element === 'object' && element !== null && 'has' in element && 'get' in element && 'set' in element && 'remove' in element) {
						return element
					}
					return null
				}
				
				function find_kit() {
					let head = window.document.head
					let kit = head.querySelector('url-kit')
					if (kit !== null) return kit
					return create_kit()
				}
				
				function kit_proxy(element) {
					if (typeof element !== 'object' || element === null) throw new Error(`url kit is not a valid object`)
					return new Proxy(element, {
						deleteProperty(o, name) {
							let control = get_element_control(this, o)
							if (control) control.remove(name)
							return true
						},
						get (o, name) {
							let value = null
							if (name in o) value = o[name]
							if (typeof value === 'function') value = value.bind(o)
							if (value !== null) return value
							let control = get_element_control(this, o)
							if (name in control) value = control[name]
							if (typeof value === 'function') value = value.bind(control)
							return value
						},
						set (o, name, value) {
							let control = get_element_control(this, o)
							if (control) control.set(name, value)
							return true
						},
						has(o, name) {
							let control = get_element_control(this, o)
							if (control) return control.has(name)
							return false
						}
					})
				}
			}
		}
	},
	function url_code(kit,window){
		
		//exports
		return window.url =  get_url_proxy(window.global.folders)
		
		//shared actions
		function clean_url(...paths){
			let web_url = ''
			for(let path of paths){
				if(typeof path === 'string'){
					if(path === window.location.origin) web_url+=path
					else if(path.includes('http')) web_url+=path
					else{
						let cleaned_path = clean_path(path)
						if(cleaned_path.length) web_url+=`/${cleaned_path}`
					}
				}
			}
			return web_url
			//shared action
			function clean_path(value){
				if(!value.includes('/')) return value
				let items = value.split('/')
				let clean = items.map(item=>item.trim()).filter(item=>item.length).join('/')
				return clean.trim()
			}
		}
		
		function get_url(folder, path, no_kit_path){
			let folder_paths = no_kit_path === true ? []:[kit.path]
			folder_paths.push(folder)
			if(path) folder_paths.push(path)
			return get_url_generator(...folder_paths)
		}
		
		function get_url_proxy(folders){
			let url_getter = get_url_generator(folders.site,null,true)
			
			return new Proxy(url_getter,{
				deleteProperty(o,name){
					if('customs' in folders && typeof name === 'string') return delete folders.customs[name]
					return true
				},
				get(o,name){
					if(name in folders) return get_url(folders[name])
					else if('customs' in folders && name in folders.customs) return get_url(folders.customs[name])
					return get_url(name,null,true)
				},
				has(o,name){ return name in folders || ('customs' in folders && name in folders.customs) },
				set(o,name,value){
					if(typeof name === 'string' && typeof value === 'string'){
						if(!('customs' in folders)) folders.customs = {}
						folders.customs[name] = value
					}
					return true
				}
			})
		}
		
		function get_url_generator(...main_paths){
			return new Proxy(function url_from_kit_path(...x){
				if(x.length){
					let last = x[x.length - 1]
					if(last[last.length-1] === '.'){
						x[x.length - 1] = last.replace('.','')
						x.push(`${x[x.length - 1]}.es6`)
					}
				}
				//paths for the source url
				let paths = [].concat(main_paths).concat(x)
				paths.unshift(window.location.origin)
				return clean_url(...paths)
			},{
				get(o,name){
					if(typeof name === 'string'){
						let new_paths = [].concat(main_paths)
						new_paths.push(name)
						return get_url_generator(...new_paths)
					}
					if(name in o) return o[name]
					return null
				}
			})
		}
		
},this)