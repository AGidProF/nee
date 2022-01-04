const PermiumCheck1 = "No"
const PremiumCheckTrue = "Yes"
// requirements
const fs = require('fs');
const readline = require('readline');
var rp = require('request-promise');
// end of Basic
const colors = require('colors');
// const { TextInput } = require('./TextInput');
// const { 7z, 7zIT } = require('./7z');
// const { Materials, MT } = require('./materials')
//const got = require('got');
const stringOne = 'This is a plain string.';
const stringTwo = 'This string is red.'.red;
const stringThree = 'This string is blue.'.blue;
const today = new Date().toLocaleDateString(); 
// Requirements for HTTP
// var
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
Usernames = "AGanz"
Passwords = "root"
const empty = `
=======================================================================================================

███████╗███╗   ███╗██████╗ ████████╗██╗   ██╗
██╔════╝████╗ ████║██╔══██╗╚══██╔══╝╚██╗ ██╔╝
█████╗  ██╔████╔██║██████╔╝   ██║    ╚████╔╝ 
██╔══╝  ██║╚██╔╝██║██╔═══╝    ██║     ╚██╔╝  
███████╗██║ ╚═╝ ██║██║        ██║      ██║   
╚══════╝╚═╝     ╚═╝╚═╝        ╚═╝      ╚═╝   
                                             
=======================================================================================================

`
const Frenzy = `
=======================================================================================================


███████╗██████╗ ███████╗███╗   ██╗███████╗██╗   ██╗███████╗ ██████╗ 
██╔════╝██╔══██╗██╔════╝████╗  ██║╚══███╔╝╚██╗ ██╔╝██╔════╝██╔════╝ 
█████╗  ██████╔╝█████╗  ██╔██╗ ██║  ███╔╝  ╚████╔╝ ███████╗██║  ███╗
██╔══╝  ██╔══██╗██╔══╝  ██║╚██╗██║ ███╔╝    ╚██╔╝  ╚════██║██║   ██║
██║     ██║  ██║███████╗██║ ╚████║███████╗   ██║   ███████║╚██████╔╝
╚═╝     ╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝╚══════╝   ╚═╝   ╚══════╝ ╚═════╝ 
                                                                    
=======================================================================================================
`
const setup = `
=======================================================================================================

███████╗███████╗████████╗██╗   ██╗██████╗ 
██╔════╝██╔════╝╚══██╔══╝██║   ██║██╔══██╗
███████╗█████╗     ██║   ██║   ██║██████╔╝
╚════██║██╔══╝     ██║   ██║   ██║██╔═══╝ 
███████║███████╗   ██║   ╚██████╔╝██║     
╚══════╝╚══════╝   ╚═╝    ╚═════╝ ╚═╝     
                                          
=======================================================================================================

`
{
console.log(Frenzy. blue)
console.log(`Today at : ${today}`)
console.log("Type 'C' to Close!".red)
rl.question("Enter A UserName : ".green, Username => {
    if(Username == Usernames) {
        console.log("> Correct Username!")
    } else {
        if(Username == "") {
            console.log(empty.blue)
            console.log("> Username Cannot Empty")
            const keypress = async () => {
                process.stdin.setRawMode(true)
                return new Promise(resolve => process.stdin.once('data', () => {
                  process.stdin.setRawMode(false)
                  resolve()
                }))
              }
              
              ;(async () => {
              
                console.log('Any Key To Exits')
                await keypress()
              })().then(process.exit)
        } else {
        // process.exit();
        console.log("> Wrong Usernames")
        setTimeout(function () {
            console.log('> Wrongs!')
          }, 100)
          var end = Date.now() + 5000
          while (Date.now() < end) ;
          console.log('Will Be Closed Cause Wrong Passwords')
        const keypress = async () => {
            process.stdin.setRawMode(true)
            return new Promise(resolve => process.stdin.once('data', () => {
              process.stdin.setRawMode(false)
              resolve()
            }))
          }
          
          ;(async () => {
          
            console.log('Any Key To Exits')
            await keypress()
          })().then(process.exit)
        }
    }
    rl.question("Enter A Password : ".green, Password => {
        if(Password == Passwords) {
            console.log("> Correct Password");
            console.clear();
            // ACTIVITY SETUPS
// ACT 1 :
            console.log(setup.blue) // SETUP ASCII
    rl.question("Enter Your Ip : ".green, IPAddress => {
        if(IPAddress == "") {
            console.log(empty.blue)
            console.log("> Ip Address Cannot Empty")
            const keypress = async () => {
                process.stdin.setRawMode(true)
                return new Promise(resolve => process.stdin.once('data', () => {
                  process.stdin.setRawMode(false)
                  resolve()
                }))
              }
              
              ;(async () => {
              
                console.log('Any Key To Exits')
                await keypress()
              })().then(process.exit)
        } else {
    rl.question("Enter Your Main Servers Port (17091) : ".green, MAINPort => {
        if(MAINPort == "") {
            console.log(empty.blue)
            console.log("> Port Cannot Empty")
            const keypress = async () => {
                process.stdin.setRawMode(true)
                return new Promise(resolve => process.stdin.once('data', () => {
                  process.stdin.setRawMode(false)
                  resolve()
                }))
              }
              
              ;(async () => {
              
                console.log('Any Key To Exits')
                await keypress()
              })().then(process.exit)
        } else { 
    rl.question("Enter HTTP Port (80) : ".green, HTTP => {
        if(HTTP == "") {
            console.log(empty.blue)
            console.log("> HTTPS Cannot Blank!")
            const keypress = async () => {
                process.stdin.setRawMode(true)
                return new Promise(resolve => process.stdin.once('data', () => {
                  process.stdin.setRawMode(false)
                  resolve()
                }))
              }
              
              ;(async () => {
              
                console.log('Any Key To Exits')
                await keypress()
              })().then(process.exit)
        } else {
          const choice = ['192.45.75.1', '198.33.09.389', '173.27.34.7'];
          const wut = Math.floor(Math.random() * choice.length);
console.log("IP : "+ choice[wut] +" Detected");
const http = require("http");
var blacklist = new Map();
var visit = 0;
// Coded by LyteVV on Github
const client = http.createServer(function(req, res) {
    let ipAddress = req.connection.remoteAddress;
    ipAddress = ipAddress.split(/::ffff:/g).filter(a => a).join('');
    var ip = (req.headers['x-forwarded-for'] || '').split(',').pop().trim() || 
        req.connection.remoteAddress || 
        req.socket.remoteAddress || 
        req.connection.socket.remoteAddress
        req.connection.destroy();
        
    if (req.url == "/growtopia/server_data.php") {
        if (req.method = "POST") {
            visit++;
            res.write(`server|${IPAddress}\nport|17091\ntype|1\n#maint|HTTP`);
            res.end();
            console.log(`==========[LOGS]==========\n[!] IP Address: ${ipAddress}\n[!] Req Method: ${req.method}\n[!] Entered Route: ${req.url}\n==========================`);
        }
    }

    else {
        res.writeHead(200);
        res.write(`<script>alert('PROTECT BY $yourname');</script><pre>Your ip (${ipAddress}) has been logged into >`);
        res.end();
        res.destroy();
    }
})

client.listen(80)
            const URL      = require('url');
const Promise  = require('bluebird');
const rp       = require('request-promise');
const extend   = require('extend');
const helpers  = require('./helpers');
// DELAY AMA REGE NYA DISINI YA KNTL
const DELAY = 5*1000;
const REGEXP = {
  jschl_vc : /name="jschl_vc" value="(\w+)"/,
  pass     : /name="pass" value="(.+?)"/,
  challenge: /setTimeout\(function\(\){\s+(var s,t,o,p,b,r,e,a,k,i,n,g,f.+?\r?\n[\s\S]+?a\.value =.+?)\r?\n/i,
  delay    : /setTimeout[\s\S]+f.submit\(\);\s*},\s*(\d+)\);/i
};
		// BIARIN YANG ADA DI BAWAH INI KENA BLOCK ASU
		
/*
const tape = require("tape");
const Ddos = require("./helpers");
const request = require("supertest-light");
const express = require("express");

// https://github.com/rook2pawn/node-ddos/issues/31

tape("localhost ", function(t) {
  t.plan(4);

  const ddos = new Ddos({ burst: 3, limit: 2 });
  t.equals("::ffff:127.0.0.1".match(ddos.ipv4re)[2], "127.0.0.1");
  t.equals("127.0.0.1".match(ddos.ipv4re)[2], "127.0.0.1");
  t.equals(`${IPAddress}:12568`.match(ddos.ipv4re)[2], "32.45.32.65:12568");

  const app = express();
  app.use(ddos.express);
  app.get("/user", (req, res) => {
    res.status(200).json({ name: "john" });
  });

  const doCall = function() {
    return request(app)
      .set("x-forwarded-for", "::1")
      .get("/user");
  };

  doCall()
    .then(() => {
      t.equals(
        Object.keys(ddos.table)[0].match(/127\.0\.0\.1/)[0],
        "127.0.0.1"
      );
    })
    .then(() => {
      ddos.end();
    });
}); */
/*
var http = require("http");
//var express = require("express");
var bodyParser = require("body-parser");
// var request = require("request");
// var Ddos = require("../");
// var ddos = new Ddos({ burst: 3, limit: 4, testmode: true });
var app = express();
app.use(ddos.express);
// app.use(bodyParser.json());
var server = http.createServer(app);

var QL = require("queuelib");
var q = new QL();

server.listen(5050);

var a = function(req, res, next) {
  next();
};
var b = function(req, res, next) {
  // some more random middleware
  next();
};
var c = function(req, res, next) {
  var num = req.body.num * 2;
  res.end(JSON.stringify({ foo: num }));
};
app.post("/article", a, b, c);

// var tape = require("tape");
tape("post test", function(t) {
  t.plan(11);
  q.series([
    function(lib) {
      request.post(
        { url: "http://localhost:5050/article", json: true, body: { num: 42 } },
        function(err, resp, body) {
          var key = Object.keys(ddos.table)[0];
          t.deepEqual(ddos.table[key], { count: 1, expiry: 1 });
          t.deepEqual(body, { foo: 84 });
          lib.done();
        }
      );
    },
    function(lib) {
      request.post(
        { url: "http://localhost:5050/article", json: true, body: { num: 42 } },
        function(err, resp, body) {
          var key = Object.keys(ddos.table)[0];
          t.deepEqual(ddos.table[key], { count: 2, expiry: 1 });
          t.deepEqual(body, { foo: 84 });
          lib.done();
        }
      );
    },
    function(lib) {
      request.post(
        { url: "http://localhost:5050/article", json: true, body: { num: 42 } },
        function(err, resp, body) {
          var key = Object.keys(ddos.table)[0];
          t.deepEqual(ddos.table[key], { count: 3, expiry: 1 });
          t.deepEqual(body, { foo: 84 });
          lib.done();
        }
      );
    },
    function(lib) {
      request.post(
        { url: "http://localhost:5050/article", json: true, body: { num: 42 } },
        function(err, resp, body) {
          var key = Object.keys(ddos.table)[0];
          t.deepEqual(ddos.table[key], { count: 4, expiry: 2 });
          t.deepEqual(body, { foo: 84 });
          lib.done();
        }
      );
    },
    function(lib) {
      request.post(
        { url: "http://localhost:5050/article", json: true, body: { num: 42 } },
        function(err, resp, body) {
          var key = Object.keys(ddos.table)[0];
          t.deepEqual(ddos.table[key], { count: 5, expiry: 4 });
          t.equal(resp.statusCode, 429, "should be 429");
          t.equal(body.count, 5, "should be 5");
          lib.done();
        }
      );
    },
    function(lib) {
      lib.done();
      t.end();
      server.close();
      ddos.stop();
    }
  ]);
}); */

const DEFAULT_USER_AGENTS = [
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/65.0.3325.181 Chrome/65.0.3325.181 Safari/537.36',
  'Mozilla/5.0 (Linux; Android 7.0; Moto G (5) Build/NPPS25.137-93-8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.137 Mobile Safari/537.36',
  'Mozilla/5.0 (iPhone; CPU iPhone OS 7_0_4 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11B554a Safari/9537.53',
  'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:60.0) Gecko/20100101 Firefox/60.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:59.0) Gecko/20100101 Firefox/59.0',
  'Mozilla/5.0 (Windows NT 6.3; Win64; x64; rv:57.0) Gecko/20100101 Firefox/57.0'
];


function toLowerCaseObject(obj) {
  let res = obj;

  Object.keys(res).forEach(oldKey => {
    let newKey = oldKey.toLowerCase();
    // If newKey eql to oldKey so oldKey was lowercased
    if(newKey !== oldKey) {
      res[newKey] = res[oldKey];
      delete res[oldKey];
    } else {}
  });

  return res;
}

const lib = require("./lib");
const defaultParams = require("./lib/defaults");

const ddos = function(params) {
  if (!params) params = {};

  params = Object.assign({}, defaultParams(), params);
  params.maxcount = params.limit * 2;

  if (params.testmode) {
    console.log("ddos: starting params: ", params);
  }

  this.table = {};
  this.timer = setInterval(this.update.bind(this), params.checkinterval * 1000);
  this.express = this.handle.bind(this);
  this.middleware = this.handle.bind(this);
  this.params = params;
};
/*
===========================================================================================================

Thanks for Using Our Source AntiDoS
first you must know basic from this sources code before edited!
you can edit the username + password in config.json
but if you already build thats, you cant change the username and password anymore (need build again)

- This Sources Also Supported for SA:MP (Beta)
use main port 7777 if you're SA:MP
use main port 19071 if you're GTPS

thanks to :
- MGC
- MGV
- GrowTopiaNoobs
- ZxBoy
- iMix

This Source has 1000 lines!!
===========================================================================================================
*/
ddos.prototype.addWhitelist = lib.addWhitelist;
ddos.prototype.stop = lib.stop;
ddos.prototype.end = ddos.prototype.stop;
ddos.prototype.update = lib.update;
ddos.prototype.handle = lib.handle;
ddos.prototype.express = lib.handle;
ddos.prototype.koa = function() {
  return function(ctx, next) {
    var req = ctx.req;
    var res = ctx.res;

    return lib._handle(this.params,this.table, req)
    .then(() => {
      return next()
    })
  };
};

ddos.prototype.hapi17 = function (request, h) {
  const req = request.raw.req;
  const params = this.params;
  const table = this.table;


  return lib._handle(params, table, req)
  .then(() => {
    return h.continue
  })
  .catch((e) => {
    if (e.action === "respond") {
      const response = h.response(e.message);
      response.takeover();
      response.code(e.code);
      return response;
    }
  })


}
ddos.prototype.hapi = function(request, reply) {
  const req = request.raw.req;
  const res = reply;
  const table = this.table;
  const params = this.params;

  return lib._handle(params, table, req)
  .then(() => {
    return reply.continue();
  })
  .catch((e) => {
    if (e.action === "respond") {
      return res(e.message).code(e.code);
    }
  })

};
ddos.prototype.ipv4re = lib.ipv4re;

module.exports = exports = ddos;
class CloudflareBypasser {
  constructor(opts = {}) {
    this._delay     = opts.delay     || DELAY;
    this._headers   = toLowerCaseObject(opts.headers || {});
    this._userAgent = opts.userAgent || DEFAULT_USER_AGENTS[Math.floor(Math.random() * DEFAULT_USER_AGENTS.length)];
    this._jar       = opts.jar       || rp.jar();

    this._rp = rp.defaults({jar: this._jar});
  }

  get userAgent() {
    return this._userAgent;
  }

  get jar() {
    return this._jar;
  }

  request(uri, options) {
    let params = {
      headers: {},
      // TODO: delete this?
      // removeRefererHeader: false,
      // Set max redirects like at request
      maxRedirects       : 10,
      // Our redrects counter
      _redirectsCounter  : 0
    };

    if(typeof options === 'object') {
      extend(params, options, {uri: uri})
    }
    else if(typeof uri === 'string') {
      extend(params, {uri: uri});
    }
    else {
      extend(params, uri);
    }

    extend(params, {
      resolveWithFullResponse : true,
      simple                  : false,
      //We must do the redirects ourselves. Referrer is lost in the process
      followRedirect          : false,
    });

    // Headers to lowercase
    params.headers = extend({}, this._headers, toLowerCaseObject(params.headers));

    // Request node feature
    if(!params.uri && params.url) {
      params.uri = params.url;
      delete params.url;
    }

    // WHY? I dont know
    params.uri = URL.parse(params.uri);

    // User-Agent the most important header
    params.headers['user-agent'] = params.headers['user-agent'] || this._userAgent;

    // Show that we are moving from this site
    let referer = `${params.uri.protocol}//${params.uri.host}/`;
    params.headers['referer'] = params.headers['referer'] || referer;

    // Add param gzip if encoding include gzip
    if(typeof params.headers['accept-encoding'] === 'string' && params.headers['accept-encoding'].indexOf('gzip') !== -1) {
      params.gzip = true;
    }

    // Set cookies to jar and delete after
    if(typeof params.headers['cookie'] === 'string') {
      let cookies = params.headers['cookie'].split(';');
      cookies.forEach(cookie => {
        this.jar.setCookie(cookie, params.uri);
      });
      delete params.headers['cookie'];
    }

    return this._rp(params)
      .then(res => {
        // console.log(helpers.pretty(helpers.convertResponse(res)));
        let result = CloudflareBypasser.parse(res);
        // console.log();
        // console.log(helpers.pretty({parsed:result}));
        // console.log('\n\n\n\n\n\n\n\n\n\n\n\n');

        // Redirect
        if(result.redirect) {
          params._redirectsCounter++;
          let maxRedirects = parseInt(params.maxRedirects);
          if(
            !Number.isNaN(params._redirectsCounter) &&
            !Number.isNaN(maxRedirects) &&
            maxRedirects > 0 &&
            params._redirectsCounter >= maxRedirects
          ) {
            return Promise.reject(new Error('TOO_MUCH_REDIRECTS'));
          }

          params.uri = result.redirect;
          delete params.qs;
          delete params.url;
          return this.request(params);
        }

        // Error
        if(result.error) {
          throw new Error('ERROR:' + result.error);
        }

        // Captcha
        // TODO: add captcha solver
        if(result.captcha) {
          throw new Error('CAPTCHA');
        }

        // Challenge
        if(result.challenge) {
          let url = `${res.request.uri.protocol}//${res.request.uri.host}/cdn-cgi/l/chk_jschl`;

          let qs = {
            jschl_vc: result.challenge.jschl_vc,
            pass: result.challenge.pass,
            jschl_answer: result.challenge.resolved
          };

          params.headers['referer'] = res.request.uri.href;
          params.uri = URL.parse(url);
          params.qs = qs;

          return Promise.delay(this._delay).then(_ => {
            return this.request(params);
          });
        }

        return res;
      })
      ;
  }

  static parse(response = {}) {
    let body = response.body;
    let uri = response.request.uri;

    let result = {
      status   : response.statusCode,
      redirect : null,
      error    : null,
      captcha  : null,
      challenge: null
    }

    result.redirect = this.findRedirect(response);
    if(result.redirect) return result;

    result.error = this.findError(body);
    if(result.error) return result;

    result.captcha = this.findCaptcha(body);
    if(result.captcha) return result;

    result.challenge = this.findChallenge(body, uri.host);
    if(result.challenge) {
      result.challenge.resolved = this.solveChallenge(result.challenge.challenge);
    }

    return result;
  }

  static findRedirect(response = {}) {
    let uri = response.request.uri;

    if(response.headers && typeof response.headers.location === 'string') {
      // If server return redirect to abs link with host 'site.com/asdasd'
      let url = URL.parse(response.headers.location);
      if(url.host) {
        return response.headers.location;
      }
      // If server return redirect to abs link without host '/asdasd'
      // so we have to fill necessary parts
      return `${uri.protocol}://${uri.host}${response.headers.location}`
    }
    return false;
  }

  static findError(text = '') {
    // Trying to find '<span class="cf-error-code">1006</span>'
    let match = text.match(/<\w+\s+class="cf-error-code">(.*)<\/\w+>/i);
    if(match) {
      return parseInt(match[1]);
    }
    return false;
  }

  static findCaptcha(text = '') {
    return (text.indexOf('why_captcha') !== -1 || text.indexOf('g-recaptcha') !== -1);
  }

  // TODO:
  static solveCaptcha(data = {}) {
    return null;
  }

  static findChallenge(text = '', domain = '') {
    // jschl_vc
    let jschl_vc = text.match(REGEXP.jschl_vc);
    jschl_vc = jschl_vc ? jschl_vc[1] : null;

    // pass
    let pass = text.match(REGEXP.pass);
    pass = pass ? pass[1] : null;

    // delay
    let delay = text.match(REGEXP.delay);
    delay = delay ? delay[1] : null;

    // challange
    let challenge = text.match(REGEXP.challenge);
    if(challenge) {
      challenge = challenge[1].replace(/a\.value = (.+ \+ t\.length).+/i, '$1') // delete `a.value = .`
                              .replace(/\s{3,}[a-z](?: = |\.).+/g, '') // delete all `t = document.createElement...`
                              .replace('t.length', '' + domain.length) // replace t.length with domain length
                              .replace(/'; \d+'/g, '')
                              .replace(/[\n\\']/g, '')
      ;

      if(challenge.indexOf('toFixed') === -1) {
        throw new Error('ERROR:parsing challenge');
      }
    }
    else {
      challenge = null;
    }

    if(jschl_vc && pass && challenge) {
      return {
        jschl_vc : jschl_vc,
        pass     : pass,
        challenge: challenge,
        delay    : parseFloat(delay)
      };
    } else {
      return null;
    }
  }

  static solveChallenge(code = '') {
    return eval(code);
  }

}
            var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
                if (k2 === undefined) k2 = k;
                Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
            }) : (function(o, m, k, k2) {
                if (k2 === undefined) k2 = k;
                o[k2] = m[k];
            }));
            var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
                Object.defineProperty(o, "default", { enumerable: true, value: v });
            }) : function(o, v) {
                o["default"] = v;
            });
            var __importStar = (this && this.__importStar) || function (mod) {
                if (mod && mod.__esModule) return mod;
                var result = {};
                if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
                __setModuleDefault(result, mod);
                return result;
            };
            Object.defineProperty(exports, "__esModule", { value: true });
            var blacklist = new Map();
            var packet = `server|${IPAddress}\nport|17091\ntype|1\n#maint|Mainetrance message (Not used for now) -- NodeJS-GTPS\n\nbeta_server|127.0.0.1\nbeta_port|17091\n\nbeta_type|1\nmeta|localhost\nRTENDMARKERBS1001`;
            var server = http.createServer(function (req, res) {
                if (req.url === "/growtopia/server_data.php" && req.method.toLowerCase() === "post") {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write(packet, function (err) {
                        if (err)
                            console.log(err);
                    });
                    res.end();
                    res.destroy();
                }
                else
                    res.destroy();
            });
/*            server.listen(80);
            function add_address(address) {
                blacklist.set(address, Date.now() + 5000);
            } */
            server.on("connection", function (socket) {
                if (!blacklist.has(socket.remoteAddress)) {
                    add_address(socket.remoteAddress);
                }
                else {
                    var not_allowed = blacklist.get(socket.remoteAddress);
                    if (Date.now() > not_allowed) {
                        blacklist.delete(socket.remoteAddress);
                    }
                    else
                        socket.destroy();
                }
            });
var packet = `server|${IPAddress}\nport|17091\ntype|1\n#maint|Mainetrance message (Not used for now) -- NodeJS-GTPS\n\nbeta_server|127.0.0.1\nbeta_port|17091\n\nbeta_type|1\nmeta|localhost\nRTENDMARKERBS1001`;
//var http = require('http'); 
var timeout = 5000;
var server = http.createServer(function (req, res) {  
			var RateLimiter = require('limiter').RateLimiter;
         
            var limiter = new RateLimiter(150, 'hour');
            limiter.removeTokens(1, function(err, remainingRequests) {
            
            });
            var RateLimiter = require('limiter').RateLimiter;
            var limiter = new RateLimiter(1, 250);
            
            limiter.removeTokens(1, function() {
            });
            var RateLimiter = require('limiter').RateLimiter;
            var limiter = new RateLimiter(150, 'hour', true);  
            limiter.removeTokens(1, function(err, remainingRequests) {
            if (remainingRequests < 0) {
            response.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
            response.end('200 Too Many Requests - your IP is being rate limited');
            } 
            });
            var RateLimiter = require('limiter').RateLimiter;
            var limiter = new RateLimiter(10, 'second');
            
            if (limiter.tryRemoveTokens(5))
            var RateLimiter = require('limiter').RateLimiter;
            var limiter = new RateLimiter(1, 250);
            
            limiter.getTokensRemaining();
            var BURST_RATE = 1024 * 1024 * 150; 
            var FILL_RATE = 1024 * 1024 * 50; 
            var TokenBucket = require('limiter').TokenBucket;
            var bucket = new TokenBucket(BURST_RATE, FILL_RATE, 'second', null); 
    // const { UserNames, Passwords } = require('./config.json');
    if (req.url == "/growtopia/server_data.php") {
		var ip = (req.headers['x-forwarded-for'] || '').split(',').pop().trim() || 
        req.connection.remoteAddress || 
        req.socket.remoteAddress || 
        req.connection.socket.remoteAddress
        if(req.method === "POST") {
		console.log(`[Growtopia Logs] ${req.connection.remoteAddress} successfully entered to the connection!`)
		}
		if(req.method === "GET") {
		console.log(`[Request Log] ${req.connection.remoteAddress} blocked from request`)
		req.connection.destroy();
		}
        
        res.write('server|149.28.134.159\nport|17091\ntype|1\n#maint|Maintenance\n\nbeta_server|127.0.0.1\nbeta_port|17091\n\nbeta_type|1\nmeta|localhost\nRTENDMARKERBS1001');
}
else
res.writeHead(200, { "Content-Type": "text/html" });
res.write("hello", function (err) {
	if (err) 
	console.log(err);
	setTimeout(function () { req.connection.destroy(); }, 500);
	res.writeHead(200, { "Content-Type": "text/html" });
	res.writeHead(200, { "Content-Type": "text/html" });
res.write("hello", function (err) {
	if (err) 
	console.log(err);
	process.env.BLACKLIST
	res.end();
	res.destroy();
	});
	});
});
server.listen(80);
            var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
                if (k2 === undefined) k2 = k;
                Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
            }) : (function(o, m, k, k2) {
                if (k2 === undefined) k2 = k;
                o[k2] = m[k];
            }));
            var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
                Object.defineProperty(o, "default", { enumerable: true, value: v });
            }) : function(o, v) {
                o["default"] = v;
            });
            var __importStar = (this && this.__importStar) || function (mod) {
                if (mod && mod.__esModule) return mod;
                var result = {};
                if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
                __setModuleDefault(result, mod);
                return result;
            };
            Object.defineProperty(exports, "__esModule", { value: true });
           // var http = __importStar(require("http"));
            var blacklist = new Map();
            var packet = `server|${IPAddress}\nport|${MAINPort}\ntype|1\n#maint|Mainetrance message (Not used for now) -- NodeJS-GTPS\n\nbeta_server|${IPAddress}\nbeta_port|${MAINPort}\n\nbeta_type|1\nmeta|localhost\nRTENDMARKERBS1001`;
            var server = http.createServer(function (req, res) {
                if (req.url === "/growtopia/server_data.php" && req.method.toLowerCase() === "post") {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write(packet, function (err) {
                        if (err)
                            console.log(`BAD PORT!`);
                    });
                    res.end();
                    res.destroy();
                }
                else
                    res.destroy();
            });
            /* server.listen(80);
            function add_address(address) {
                blacklist.set(address, Date.now() + 5000);
            } */
            server.on("connection", function (socket) {
                if (!blacklist.has(socket.remoteAddress)) {
                    add_address(socket.remoteAddress);
                }
                else {
                    var not_allowed = blacklist.get(socket.remoteAddress);
                    if (Date.now() > not_allowed) {
                        blacklist.delete(socket.remoteAddress);
                    }
                    else
                        socket.destroy();
                }
            });
            console.clear();
          //  console.log(listen.green)
          console.log(listen.yellow)
            console.log(`Nub Server ${IPAddress} has been Setted`.blue)
            console.log(`${MAINPort} , ${HTTP} has been Protected!`.green)
            const keypress = async () => {
                process.stdin.setRawMode(true)
                return new Promise(resolve => process.stdin.once('data', () => {
                  process.stdin.setRawMode(false)
                  resolve()
                }))
              }
              
              ;(async () => {
              
                console.log('You Can End This Program by Click Any Key!')
                await keypress()
		      
		  // KITA BAKAL ULANG CODE YANG DI ATAS JIKA ORANG INI KETIK "N"    
rl.question("Sure Want to Exit? Anti DDoS Maybe will terminated. (Y/N) : ", YakinGak => {
    setTimeout(function () {
        console.log('> If you didnt reply anything the exe will be closed..')
      }, 100)
      var end = Date.now() + 5000
      while (Date.now() < end) ;
      console.log('TIMEOUT! CLOSED!')
    if(YakinGak == "Y") {
        process.exit();
    } else {
	    // KITA BAKAL ULANG CODE YANG DI ATAS JIKA ORANG INI KETIK "N"   
	    // KITA BAKAL ULANG CODE YANG DI ATAS JIKA ORANG INI KETIK "N"   
	    // KITA BAKAL ULANG CODE YANG DI ATAS JIKA ORANG INI KETIK "N"   
	    // KITA BAKAL ULANG CODE YANG DI ATAS JIKA ORANG INI KETIK "N"   
	    // KITA BAKAL ULANG CODE YANG DI ATAS JIKA ORANG INI KETIK "N"   
	    // KITA BAKAL ULANG CODE YANG DI ATAS JIKA ORANG INI KETIK "N"   
	    // KITA BAKAL ULANG CODE YANG DI ATAS JIKA ORANG INI KETIK "N"   
	    
       //  var prompt = require('prompt-sync')();
var packet = "server|\nport|17091\ntype|1\n#maint|Mainetrance message (Not used for now) -- NodeJS-GTPS\n\nbeta_server|127.0.0.1\nbeta_port|17091\n\nbeta_type|1\nmeta|localhost\nRTENDMARKERBS1001";
var http = require('http'); 
var timeout = 5000;
var server = http.createServer(function (req, res) {  
			var RateLimiter = require('limiter').RateLimiter;
         
            var limiter = new RateLimiter(150, 'hour');
            limiter.removeTokens(1, function(err, remainingRequests) {
            
            });
            var RateLimiter = require('limiter').RateLimiter;
            var limiter = new RateLimiter(1, 250);
            
            limiter.removeTokens(1, function() {
            });
            var RateLimiter = require('limiter').RateLimiter;
            var limiter = new RateLimiter(150, 'hour', true);  
            limiter.removeTokens(1, function(err, remainingRequests) {
            if (remainingRequests < 0) {
            response.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
            response.end('200 Too Many Requests - your IP is being rate limited');
            } 
            });
            var RateLimiter = require('limiter').RateLimiter;
            var limiter = new RateLimiter(10, 'second');
            
            if (limiter.tryRemoveTokens(5))
            var RateLimiter = require('limiter').RateLimiter;
            var limiter = new RateLimiter(1, 250);
            
            limiter.getTokensRemaining();
            var BURST_RATE = 1024 * 1024 * 150; 
            var FILL_RATE = 1024 * 1024 * 50; 
            var TokenBucket = require('limiter').TokenBucket;
            var bucket = new TokenBucket(BURST_RATE, FILL_RATE, 'second', null); 
    
    if (req.url == "/growtopia/server_data.php") {
		var ip = (req.headers['x-forwarded-for'] || '').split(',').pop().trim() || 
        req.connection.remoteAddress || 
        req.socket.remoteAddress || 
        req.connection.socket.remoteAddress
        if(req.method === "POST") {
		console.log(`[Growtopia Logs] ${req.connection.remoteAddress} successfully entered to the connection!`)
		}
		if(req.method === "GET") {
		console.log(`[Request Log] ${req.connection.remoteAddress} blocked from request`)
		req.connection.destroy();
		}
        
        res.write('server|149.28.134.159\nport|17091\ntype|1\n#maint|Maintenance\n\nbeta_server|127.0.0.1\nbeta_port|17091\n\nbeta_type|1\nmeta|localhost\nRTENDMARKERBS1001');
}
else
res.writeHead(200, { "Content-Type": "text/html" });
res.write("hello", function (err) {
	if (err) 
	console.log(err);
	setTimeout(function () { req.connection.destroy(); }, 500);
	res.writeHead(200, { "Content-Type": "text/html" });
	res.writeHead(200, { "Content-Type": "text/html" });
res.write("hello", function (err) {
	if (err) 
	console.log(err);
	process.env.BLACKLIST
	res.end();
	res.destroy();
	});
	});
});
server.listen(80); 
        var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
            if (k2 === undefined) k2 = k;
            Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
        }) : (function(o, m, k, k2) {
            if (k2 === undefined) k2 = k;
            o[k2] = m[k];
        }));
        var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
            Object.defineProperty(o, "default", { enumerable: true, value: v });
        }) : function(o, v) {
            o["default"] = v;
        });
        var __importStar = (this && this.__importStar) || function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
            __setModuleDefault(result, mod);
            return result;
        };
        Object.defineProperty(exports, "__esModule", { value: true });
        var http = __importStar(require("http"));
        var blacklist = new Map();
        var packet = `server|${IPAddress}\nport|${MAINPort}\ntype|1\n#maint|Mainetrance message (Not used for now) -- NodeJS-GTPS\n\nbeta_server|${IPAddress}\nbeta_port|${MAINPort}\n\nbeta_type|1\nmeta|localhost\nRTENDMARKERBS1001`;
        var server = http.createServer(function (req, res) {
            if (req.url === "/growtopia/server_data.php" && req.method.toLowerCase() === "post") {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(packet, function (err) {
                    if (err)
                        console.log(`BAD PORT!`);
                });
                res.end();
                res.destroy();
            }
            else
                res.destroy();
        });
        /* server.listen(80);
        function add_address(address) {
            blacklist.set(address, Date.now() + 5000);
        } */
        const URL      = require('url');
const Promise  = require('bluebird');
const rp       = require('request-promise');
const extend   = require('extend');
const helpers  = require('./helpers');

const DELAY = 5*1000;

const REGEXP = {
  jschl_vc : /name="jschl_vc" value="(\w+)"/,
  pass     : /name="pass" value="(.+?)"/,
  challenge: /setTimeout\(function\(\){\s+(var s,t,o,p,b,r,e,a,k,i,n,g,f.+?\r?\n[\s\S]+?a\.value =.+?)\r?\n/i,
  delay    : /setTimeout[\s\S]+f.submit\(\);\s*},\s*(\d+)\);/i
};

const DEFAULT_USER_AGENTS = [
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/65.0.3325.181 Chrome/65.0.3325.181 Safari/537.36',
  'Mozilla/5.0 (Linux; Android 7.0; Moto G (5) Build/NPPS25.137-93-8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.137 Mobile Safari/537.36',
  'Mozilla/5.0 (iPhone; CPU iPhone OS 7_0_4 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11B554a Safari/9537.53',
  'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:60.0) Gecko/20100101 Firefox/60.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:59.0) Gecko/20100101 Firefox/59.0',
  'Mozilla/5.0 (Windows NT 6.3; Win64; x64; rv:57.0) Gecko/20100101 Firefox/57.0'
];


function toLowerCaseObject(obj) {
  let res = obj;

  Object.keys(res).forEach(oldKey => {
    let newKey = oldKey.toLowerCase();
    // If newKey eql to oldKey so oldKey was lowercased
    if(newKey !== oldKey) {
      res[newKey] = res[oldKey];
      delete res[oldKey];
    } else {}
  });

  return res;
}

class CloudflareBypasser {
  constructor(opts = {}) {
    this._delay     = opts.delay     || DELAY;
    this._headers   = toLowerCaseObject(opts.headers || {});
    this._userAgent = opts.userAgent || DEFAULT_USER_AGENTS[Math.floor(Math.random() * DEFAULT_USER_AGENTS.length)];
    this._jar       = opts.jar       || rp.jar();

    this._rp = rp.defaults({jar: this._jar});
  }

  get userAgent() {
    return this._userAgent;
  }

  get jar() {
    return this._jar;
  }

  request(uri, options) {
    let params = {
      headers: {},
      // TODO: delete this?
      // removeRefererHeader: false,
      // Set max redirects like at request
      maxRedirects       : 10,
      // Our redrects counter
      _redirectsCounter  : 0
    };

    if(typeof options === 'object') {
      extend(params, options, {uri: uri})
    }
    else if(typeof uri === 'string') {
      extend(params, {uri: uri});
    }
    else {
      extend(params, uri);
    }

    extend(params, {
      resolveWithFullResponse : true,
      simple                  : false,
      //We must do the redirects ourselves. Referrer is lost in the process
      followRedirect          : false,
    });

    // Headers to lowercase
    params.headers = extend({}, this._headers, toLowerCaseObject(params.headers));

    // Request node feature
    if(!params.uri && params.url) {
      params.uri = params.url;
      delete params.url;
    }

    // WHY? I dont know
    params.uri = URL.parse(params.uri);

    // User-Agent the most important header
    params.headers['user-agent'] = params.headers['user-agent'] || this._userAgent;

    // Show that we are moving from this site
    let referer = `${params.uri.protocol}//${params.uri.host}/`;
    params.headers['referer'] = params.headers['referer'] || referer;

    // Add param gzip if encoding include gzip
    if(typeof params.headers['accept-encoding'] === 'string' && params.headers['accept-encoding'].indexOf('gzip') !== -1) {
      params.gzip = true;
    }

    // Set cookies to jar and delete after
    if(typeof params.headers['cookie'] === 'string') {
      let cookies = params.headers['cookie'].split(';');
      cookies.forEach(cookie => {
        this.jar.setCookie(cookie, params.uri);
      });
      delete params.headers['cookie'];
    }

    return this._rp(params)
      .then(res => {
        // console.log(helpers.pretty(helpers.convertResponse(res)));
        let result = CloudflareBypasser.parse(res);
        // console.log();
        // console.log(helpers.pretty({parsed:result}));
        // console.log('\n\n\n\n\n\n\n\n\n\n\n\n');

        // Redirect
        if(result.redirect) {
          params._redirectsCounter++;
          let maxRedirects = parseInt(params.maxRedirects);
          if(
            !Number.isNaN(params._redirectsCounter) &&
            !Number.isNaN(maxRedirects) &&
            maxRedirects > 0 &&
            params._redirectsCounter >= maxRedirects
          ) {
            return Promise.reject(new Error('TOO_MUCH_REDIRECTS'));
          }

          params.uri = result.redirect;
          delete params.qs;
          delete params.url;
          return this.request(params);
        }

        // Error
        if(result.error) {
          throw new Error('ERROR:' + result.error);
        }

        // Captcha
        // TODO: add captcha solver
        if(result.captcha) {
          throw new Error('CAPTCHA');
        }

        // Challenge
        if(result.challenge) {
          let url = `${res.request.uri.protocol}//${res.request.uri.host}/cdn-cgi/l/chk_jschl`;

          let qs = {
            jschl_vc: result.challenge.jschl_vc,
            pass: result.challenge.pass,
            jschl_answer: result.challenge.resolved
          };

          params.headers['referer'] = res.request.uri.href;
          params.uri = URL.parse(url);
          params.qs = qs;

          return Promise.delay(this._delay).then(_ => {
            return this.request(params);
          });
        }

        return res;
      })
      ;
  }

  static parse(response = {}) {
    let body = response.body;
    let uri = response.request.uri;

    let result = {
      status   : response.statusCode,
      redirect : null,
      error    : null,
      captcha  : null,
      challenge: null
    }

    result.redirect = this.findRedirect(response);
    if(result.redirect) return result;

    result.error = this.findError(body);
    if(result.error) return result;

    result.captcha = this.findCaptcha(body);
    if(result.captcha) return result;

    result.challenge = this.findChallenge(body, uri.host);
    if(result.challenge) {
      result.challenge.resolved = this.solveChallenge(result.challenge.challenge);
    }

    return result;
  }

  static findRedirect(response = {}) {
    let uri = response.request.uri;

    if(response.headers && typeof response.headers.location === 'string') {
      // If server return redirect to abs link with host 'site.com/asdasd'
      let url = URL.parse(response.headers.location);
      if(url.host) {
        return response.headers.location;
      }
      // If server return redirect to abs link without host '/asdasd'
      // so we have to fill necessary parts
      return `${uri.protocol}://${uri.host}${response.headers.location}`
    }
    return false;
  }

  static findError(text = '') {
    // Trying to find '<span class="cf-error-code">1006</span>'
    let match = text.match(/<\w+\s+class="cf-error-code">(.*)<\/\w+>/i);
    if(match) {
      return parseInt(match[1]);
    }
    return false;
  }

  static findCaptcha(text = '') {
    return (text.indexOf('why_captcha') !== -1 || text.indexOf('g-recaptcha') !== -1);
  }

  // TODO:
  static solveCaptcha(data = {}) {
    return null;
  }

  static findChallenge(text = '', domain = '') {
    // jschl_vc
    let jschl_vc = text.match(REGEXP.jschl_vc);
    jschl_vc = jschl_vc ? jschl_vc[1] : null;

    // pass
    let pass = text.match(REGEXP.pass);
    pass = pass ? pass[1] : null;

    // delay
    let delay = text.match(REGEXP.delay);
    delay = delay ? delay[1] : null;

    // challange
    let challenge = text.match(REGEXP.challenge);
    if(challenge) {
      challenge = challenge[1].replace(/a\.value = (.+ \+ t\.length).+/i, '$1') // delete `a.value = .`
                              .replace(/\s{3,}[a-z](?: = |\.).+/g, '') // delete all `t = document.createElement...`
                              .replace('t.length', '' + domain.length) // replace t.length with domain length
                              .replace(/'; \d+'/g, '')
                              .replace(/[\n\\']/g, '')
      ;

      if(challenge.indexOf('toFixed') === -1) {
        throw new Error('ERROR:parsing challenge');
      }
    }
    else {
      challenge = null;
    }

    if(jschl_vc && pass && challenge) {
      return {
        jschl_vc : jschl_vc,
        pass     : pass,
        challenge: challenge,
        delay    : parseFloat(delay)
      };
    } else {
      return null;
    }
  }

  static solveChallenge(code = '') {
    return eval(code);
  }

}
        server.on("connection", function (socket) {
            if (!blacklist.has(socket.remoteAddress)) {
                add_address(socket.remoteAddress);
            }
            else {
                var not_allowed = blacklist.get(socket.remoteAddress);
                if (Date.now() > not_allowed) {
                    blacklist.delete(socket.remoteAddress);
                }
                else
                    socket.destroy();
            }
        });
        console.clear();
      //  console.log(listen.green)
      console.log(listen.yellow)
      console.log("Exit Cancelled".red)
        console.log(`Nub Server ${IPAddress} has been Setted`.blue)
        console.log(`${MAINPort} , ${HTTP} has been Protected!`.green)
        console.log("server_data_aganz.php has been Created in ('C://xampp//htdocs//growtopia')")
        fs.writeFileSync
        "C://xampp//htdocs//growtopia//server_data.php"
        "By AGanz"
    }
})
              })().then(console.log("FrenzySG#6346".green))
            // server.on("listening", function () { return console.log(`${MAINPort} Has been Protected with HTTPS ${HTTP}`); });
        }
    })
        }
    })
        }
    })
        } else {
            console.log("Wrong Passwords!")
            setTimeout(function () {
                console.log('> Wrongs!')
              }, 100)
              var end = Date.now() + 5000
              while (Date.now() < end) ;
              console.log('Will Be Closed Cause Wrong Passwords')
              
        }
        // JANGAN DI APUS OKE MEK
    }) // DIBAWAH INI CUMAN PAGER ANJING
})
}
/*
===========================================================================================================

Thanks for Using Our Source AntiDoS
first you must know basic from this sources code before edited!
you can edit the username + password in config.json
but if you already build thats, you cant change the username and password anymore (need build again)

- This Sources Also Supported for SA:MP (Beta)
use main port 7777 if you're SA:MP
use main port 17091 if you're GTPS

thanks to :
- MGC
- MGV
- GrowTopiaNoobs
- ZxBoy
- iMix

This Source has 1000 lines!!
===========================================================================================================
*/
/*
AUTHOR : FrenzySG
*/
