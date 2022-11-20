const http =require('http')
const server=http.createServer((req,res)=>{
    res.write('welcom for home')
res.end()
})
server.listen(5000)