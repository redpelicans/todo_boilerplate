const params = {
  server:{
     host: '0.0.0.0'
   , port: 0
   , get url(){ return 'http://' + this.host + ':' + this.port } 
  },
  store: {
     host: '172.17.0.4'
   , port: 6379
   , db: 1
  }
};

export default params;

