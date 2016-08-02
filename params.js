const params = {
  server:{
     host: '127.0.0.1'
   , port: 8877
   , get url(){ return 'http://' + this.host + ':' + this.port } 
  },
}

module.exports = params

