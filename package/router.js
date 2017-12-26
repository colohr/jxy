const fxy = require('fxy')
const wxy = require('wxy')
const modules = fxy.join(__dirname,'../site/modules')
//exports
module.exports = get_router
module.exports.cloud = get_cloud_router
//shared actions
function get_cloud_router(options,cloud){
	const {set} = get_router(options || cloud.options)
	return set('/modules',cloud.mini,true)
}
function get_router(options){
	const cache = wxy.cache(options.cache)
	const router = wxy.router()
	const statics = new wxy.Static(null,modules,cache.headers)
	return {
		cache,
		router,
		set:set_router,
		statics
	}
	//shared actions
	function mini_router(request,response,next){
		if(request.es_file){
			let file = fxy.join(__dirname,'../',request.es_file)
			if(!fxy.exists(file)) return response.status(404).end()
			let item = request.mini.has(file) ? request.mini.get(file):request.mini.file(file)
			response.set('Content-Type', 'application/javascript')
			response.set('Cache-Control', `public, ${cache.control}`)
			return response.send(item.mini)
		}
		return next()
	}
	function set_router(path='/modules',mini=false,files=false){
		if(mini) router.use(path,mini_router)
		router.use(path,statics.router)
		if(files) router.use(wxy.files({folder:modules,url:options.url}))
		return router
	}
}



