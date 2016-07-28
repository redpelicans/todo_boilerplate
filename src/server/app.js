import errors from './middleware/errors';
import path from 'path';
import http from 'http';
import async from 'async';
import {default as logger} from 'morgan';
import {default as bodyParser} from 'body-parser';
import express from 'express';
import {init as initPing} from './ping';
import {init as initVersion} from './version';
import {init as initAPI} from './api';
import { logerror, loginfo } from './util';

const url = (host, server) => 'http://' + host + ':' + server.address().port;

export function start(params, resources, cb) {
  const app = express()
    , httpServer = http.createServer(app);


  function stop(cb){
    httpServer.close(()=>{
      loginfo(`HTTP server stopped.`);
      httpServer.unref(); 
      cb();
    });
  }

  async.parallel({
    // init http depending on param.js
    http(cb){
      const { port, host } = params;
      httpServer.listen(port, host, function() {
        loginfo(`HTTP server listening on: ${url(host, httpServer)}`);
        cb();
      });
    },
  }, function(err){
    if(err)return cb(err);

    // register middleware, order matters

    // remove for security reason
    app.disable('x-powered-by');
    // usually node is behind a proxy, will keep original IP
    app.enable('trust proxy');

    // register bodyParser to automatically parse json in req.body and parse url
    app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
    app.use(bodyParser.json({limit: '10mb', extended: true}));
    app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });

    initPing(app, resources);
    initVersion(app, resources);

    // app.use(express.static(path.join(__dirname, '../../../public')));
    // app.use('/build', express.static(path.join(__dirname, '../../../build')));

    // register morgan logger
    app.use(logger('dev'));

    app.use('/api', initAPI(resources, params));                                                                                                         

    app.use(errors);
    cb(null, {stop, url: url(params.host, httpServer)});
  });
}

