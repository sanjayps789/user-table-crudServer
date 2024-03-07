const jsonServer = require('json-server')
const userServer = jsonServer.create()
const middleware = jsonServer.defaults()
const router = jsonServer.router('db.json')
userServer.use(middleware)
userServer.use(router)

const PORT = 3000 || process.env.PORT

userServer.listen(PORT,()=>{
    console.log(`User Server started at port: ${PORT}`);
})