(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{232:function(e,t,n){var content=n(256);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(45).default)("4401036c",content,!0,{sourceMap:!1})},234:function(e,t,n){"use strict";n.r(t);n(101),n(219),n(36),n(154);var o=n(98),r=n(99),c=n(222),l=n(223),f=n(220),m=n(22),d=n(221),h=n(224);function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(f.a)(e);if(t){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var k=function(e,t,n,desc){var o,r=arguments.length,c=r<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(c=(r<3?o(c):r>3?o(t,n,c):o(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},y=function(e){Object(c.a)(n,e);var t=v(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"handleBack",value:function(){var e=this.$route.fullPath.split("/");e.pop();var t=e.join("/");t=""===t?"/":t,this.$router.push(t)}}]),n}(d.c);k([Object(d.b)({default:"Header",required:!0,type:String})],y.prototype,"name",void 0);var x=y=k([Object(d.a)({components:{Icon:h.default}})],y),j=n(29),component=Object(j.a)(x,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._g({staticClass:"m-4 flex items-center"},e.$listeners),[n("button",{staticClass:"h-10 w-10 flex items-center justify-center rounded-full focus:outline-none hover:bg-gray-300",on:{click:e.handleBack}},[n("icon",{attrs:{name:"back",size:"20"}})],1),e._v(" "),n("div",{staticClass:"w-full flex justify-center items-center"},[n("h1",{staticClass:"text-3xl font-lato font-bold uppercase"},[e._v("\n      "+e._s(e.name)+"\n    ")])])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Icon:n(224).default})},255:function(e,t,n){"use strict";n(232)},256:function(e,t,n){var o=n(44)(!1);o.push([e.i,".animate-spin[data-v-7d76b472]{-webkit-animation-name:spin-data-v-7d76b472;animation-name:spin-data-v-7d76b472;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear}@-webkit-keyframes spin-data-v-7d76b472{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spin-data-v-7d76b472{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""]),e.exports=o},257:function(e,t,n){"use strict";n.r(t);n(63),n(64),n(59),n(219),n(36),n(65),n(102),n(46),n(35);var o=n(6),r=n(98),c=n(99),l=n(222),f=n(223),m=n(220),d=n(22),h=n(221),v=n(236);function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(m.a)(e);if(t){var r=Object(m.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(f.a)(this,n)}}var y=function(e,t,n,desc){var o,r=arguments.length,c=r<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(c=(r<3?o(c):r>3?o(t,n,c):o(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},x=function(e){Object(l.a)(f,e);var t,n=k(f);function f(){var e;return Object(r.a)(this,f),(e=n.apply(this,arguments)).pokemons=[],e.nextItem=0,e.loading=!1,e.items=[],e.filter=[],e.search="",e}return Object(c.a)(f,[{key:"searchWatch",value:function(){var e=this;if(this.items=[],this.nextItem=0,""!=this.search){var t=/^[0-9]+$/.test(this.search);this.filter=this.pokemons.filter((function(n,o){return t?"".concat(o).includes(e.search):n.name.toLowerCase().includes(e.search.toLowerCase())}))}else this.filter=this.pokemons;this.loadMore()}},{key:"select",value:function(e){this.$emit("pokemon",e)}},{key:"handleBack",value:function(){this.$emit("back-close",this.close?"close":"back")}},{key:"loadMore",value:function(){var e=this;this.filter.length>0&&(this.loading=!0,setTimeout((function(t){for(var n=e.filter.length-1>=e.nextItem+15?15:e.filter.length-e.nextItem,i=0;i<n;i++)e.items.push(e.filter[e.nextItem]),e.nextItem++;e.loading=!1}),200))}},{key:"mounted",value:(t=Object(o.a)(regeneratorRuntime.mark((function e(){var t,n,o=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$axios.$get("https://pokeapi.co/api/v2/pokemon/",{params:{limit:898}});case 3:t=e.sent,this.pokemons=t.results,this.filter=this.pokemons,(n=document.querySelector("#infinite-list")).addEventListener("scroll",(function(e){Math.ceil(n.scrollTop+n.clientHeight)>=n.scrollHeight&&(o.loading||o.loadMore())})),this.loadMore(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,this,[[0,11]])}))),function(){return t.apply(this,arguments)})}]),f}(h.c);y([Object(h.b)({default:!1})],x.prototype,"close",void 0),y([Object(h.d)("search")],x.prototype,"searchWatch",null);var j=x=y([Object(h.a)({components:{pokemonCard:v.default}})],x),w=(n(255),n(29)),component=Object(w.a)(j,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"h-full flex flex-col justify-start w-full"},[n("div",{staticClass:"m-4 flex items-center mb-12"},[n("button",{staticClass:"h-10 w-10 flex items-center justify-center rounded-full focus:outline-none hover:bg-gray-300 mr-2",on:{click:e.handleBack}},[n("icon",{attrs:{name:e.close?"close":"back",size:e.close?"30":"20"}})],1),e._v(" "),n("div",{staticClass:"relative flex w-full flex-wrap items-stretch"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"shadow appearance-none w-full block border border-gray-400 p-2 focus:outline-none",attrs:{type:"text",placeholder:"Pikachu"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}}),e._v(" "),n("span",{staticClass:"z-10 h-full leading-snug font-normal absolute text-center text-gray-400 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-4 pb-3 pt-2"},[n("icon",{attrs:{name:"search",color:"gray",size:"24"}})],1)])]),e._v(" "),n("div",{staticClass:"flex flex-col justify-start overflow-y-hidden"},[n("div",{staticClass:"grid grid-cols-3 justify-items-center px-10 overflow-y-auto",attrs:{id:"infinite-list"}},e._l(e.items,(function(t){return n("pokemon-card",{key:t.name,attrs:{pokemon:t},on:{"select-pokemon":e.select}})})),1),e._v(" "),e.loading&&e.items.length>0?n("div",{staticClass:"w-full flex justify-center mt-4"},[n("icon",{staticClass:"animate-spin",attrs:{name:"loading",size:"22"}})],1):e._e()])])}),[],!1,null,"7d76b472",null);t.default=component.exports;installComponents(component,{Icon:n(224).default,PokemonCard:n(236).default})},258:function(e,t,n){e.exports=n.p+"img/pokebola.99887bc.png"},260:function(e,t,n){"use strict";var o=n(4),r=n(66).find,c=n(103),l="find",f=!0;l in[]&&Array(1).find((function(){f=!1})),o({target:"Array",proto:!0,forced:f},{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),c(l)},265:function(e,t,n){"use strict";n.r(t);n(219);var o=n(98),r=n(99),c=n(222),l=n(223),f=n(220),m=n(22),d=n(221);function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(f.a)(e);if(t){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var v=function(e,t,n,desc){var o,r=arguments.length,c=r<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(c=(r<3?o(c):r>3?o(t,n,c):o(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},k=function(e){Object(c.a)(n,e);var t=h(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"closemodal",value:function(){this.$emit("closemodal")}},{key:"pokemonHandle",value:function(e){this.$emit("pokemon",e),this.closemodal()}}]),n}(d.c);v([Object(d.b)({default:!1,required:!0,type:Boolean})],k.prototype,"modal",void 0);var y=k=v([d.a],k),x=n(29),component=Object(x.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.modal?n("div",{staticClass:"fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50",on:{click:e.closemodal}},[n("div",{staticClass:"fixed mx-10",on:{click:function(e){e.stopPropagation()}}},[n("div",{staticClass:"flex flex-col bg-white rounded-lg",staticStyle:{height:"600px","min-width":"700px"}},[n("div",{staticClass:"flex items-center mx-8 my-8 bg-white overflow-hidden"},[n("pokemon-list",{attrs:{close:!0},on:{"back-close":e.closemodal,pokemon:e.pokemonHandle}})],1)])])]):e._e()}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{PokemonList:n(257).default})},266:function(e,t,n){e.exports=n.p+"img/vs.4eaec47.png"},317:function(e,t,n){"use strict";var o=n(4),r=n(32),c=n(318),l=n(156),f=n(5),m=1..toFixed,d=Math.floor,h=function(e,t,n){return 0===t?n:t%2==1?h(e,t-1,n*e):h(e*e,t/2,n)},v=function(data,e,t){for(var n=-1,o=t;++n<6;)o+=e*data[n],data[n]=o%1e7,o=d(o/1e7)},k=function(data,e){for(var t=6,n=0;--t>=0;)n+=data[t],data[t]=d(n/e),n=n%e*1e7},y=function(data){for(var e=6,s="";--e>=0;)if(""!==s||0===e||0!==data[e]){var t=String(data[e]);s=""===s?t:s+l.call("0",7-t.length)+t}return s};o({target:"Number",proto:!0,forced:m&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!f((function(){m.call({})}))},{toFixed:function(e){var t,n,o,f,m=c(this),d=r(e),data=[0,0,0,0,0,0],x="",j="0";if(d<0||d>20)throw RangeError("Incorrect fraction digits");if(m!=m)return"NaN";if(m<=-1e21||m>=1e21)return String(m);if(m<0&&(x="-",m=-m),m>1e-21)if(n=(t=function(e){for(var t=0,n=e;n>=4096;)t+=12,n/=4096;for(;n>=2;)t+=1,n/=2;return t}(m*h(2,69,1))-69)<0?m*h(2,-t,1):m/h(2,t,1),n*=4503599627370496,(t=52-t)>0){for(v(data,0,n),o=d;o>=7;)v(data,1e7,0),o-=7;for(v(data,h(10,o,1),0),o=t-1;o>=23;)k(data,1<<23),o-=23;k(data,1<<o),v(data,1,1),k(data,2),j=y(data)}else v(data,0,n),v(data,1<<-t,0),j=y(data)+l.call("0",d);return j=d>0?x+((f=j.length)<=d?"0."+l.call("0",d-f)+j:j.slice(0,f-d)+"."+j.slice(f-d)):x+j}})},318:function(e,t,n){var o=n(30);e.exports=function(e){if("number"!=typeof e&&"Number"!=o(e))throw TypeError("Incorrect invocation");return+e}},324:function(e,t,n){"use strict";n.r(t);n(63),n(260),n(31),n(155),n(59),n(317),n(219),n(47),n(35);var o=n(6),r=n(98),c=n(99),l=n(222),f=n(223),m=n(220),d=n(22),h=n(221),v=n(235);function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(m.a)(e);if(t){var r=Object(m.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(f.a)(this,n)}}var y=function(e,t,n,desc){var o,r=arguments.length,c=r<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(c=(r<3?o(c):r>3?o(t,n,c):o(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},x=function(e){Object(l.a)(m,e);var t,n,f=k(m);function m(){var e;return Object(r.a)(this,m),(e=f.apply(this,arguments)).battle=!0,e.modal=!1,e.percent=0,e.loading=!1,e.direction=-1,e.pokemons=[],e.pokemon0={sprite:"",indice:"-1",nome:"",moves:[],skils:[]},e.pokemon1={sprite:"",indice:"-1",nome:"",moves:[],skils:[]},e}return Object(c.a)(m,[{key:"getStatus",value:function(e,t){return e.find((function(e){return e.stat.name===t})).base_stat}},{key:"addPoke",value:(n=Object(o.a)(regeneratorRuntime.mark((function e(t){var n,o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$axios.$get("https://pokeapi.co/api/v2/pokemon/".concat(t,"/"));case 3:o=e.sent,r={sprite:null!==(n=o.sprites.other.dream_world.front_default)&&void 0!==n?n:o.sprites.other["official-artwork"].front_default,nome:o.forms[0].name,indice:t,moves:o.moves,stats:{hp:this.getStatus(o.stats,"hp"),attack:this.getStatus(o.stats,"attack"),defense:this.getStatus(o.stats,"defense"),spattack:this.getStatus(o.stats,"special-attack"),spdefense:this.getStatus(o.stats,"special-defense"),speed:this.getStatus(o.stats,"speed")},types:o.types.map((function(e){return e.type.name})),skils:[]},0==this.direction&&(this.pokemon0=r),1==this.direction&&(this.pokemon1=r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])}))),function(e){return n.apply(this,arguments)})},{key:"result",value:(t=Object(o.a)(regeneratorRuntime.mark((function e(){var t,n,o,r,c,l,f,m,d,h,k,y,x=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("-1"==this.pokemon0.indice||"-1"==this.pokemon1.indice){e.next=47;break}this.loading=!0,this.pokemon0.skils=[],this.pokemon1.skils=[],t=this.pokemon0.moves.length>20?20:this.pokemon0.moves.length,n=0;case 6:if(!(n<t)){e.next=21;break}return o=Math.floor(Math.random()*this.pokemon0.moves.length),e.prev=8,e.next=11,this.$axios.$get(this.pokemon0.moves[o].move.url);case 11:r=e.sent,this.pokemon0.skils.push(r),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(8),console.error(e.t0);case 18:n++,e.next=6;break;case 21:c=this.pokemon1.moves.length>20?20:this.pokemon1.moves.length,l=0;case 23:if(!(l<c)){e.next=38;break}return f=Math.floor(Math.random()*this.pokemon1.moves.length),e.prev=25,e.next=28,this.$axios.$get(this.pokemon1.moves[f].move.url);case 28:m=e.sent,this.pokemon1.skils.push(m),e.next=35;break;case 32:e.prev=32,e.t1=e.catch(25),console.error(e.t1);case 35:l++,e.next=23;break;case 38:d=[],h=[],this.pokemon0.skils.forEach((function(e){if("status"!=e.damage_class.name){var t="physical"==e.damage_class.name?{attack:x.pokemon0.stats.attack,defense:x.pokemon1.stats.defense}:{attack:x.pokemon0.stats.spattack,defense:x.pokemon1.stats.spdefense},n=t.attack,o=t.defense,r=x.pokemon0.types.filter((function(element){return element==e.type.name})).length>0?1.5:1,c=x.pokemon1.types.reduce((function(t,element){return t*(v.a[element].vantagem.filter((function(t){return t==e.type.name})).length>0?.25:v.a[element].desvantagem.filter((function(t){return t==e.type.name})).length>0?2:v.a[element].imunidade.filter((function(t){return t==e.type.name})).length>0?0:1)}),1),l=(null==e.power||e.power,(n*e.power/(25*o)+2)*r*c);d.push(l)}})),this.pokemon1.skils.forEach((function(e){if("status"!=e.damage_class.name){var t="physical"==e.damage_class.name?{attack:x.pokemon1.stats.attack,defense:x.pokemon0.stats.defense}:{attack:x.pokemon1.stats.spattack,defense:x.pokemon0.stats.spdefense},n=t.attack,o=t.defense,r=x.pokemon1.types.filter((function(element){return element==e.type.name})).length>0?1.5:1,c=x.pokemon0.types.reduce((function(t,element){return t*(v.a[element].vantagem.filter((function(t){return t==e.type.name})).length>0?.25:v.a[element].desvantagem.filter((function(t){return t==e.type.name})).length>0?2:v.a[element].imunidade.filter((function(t){return t==e.type.name})).length>0?0:1)}),1),l=(null==e.power||e.power,(n*e.power/(25*o)+2)*r*c);h.push(l)}})),k=d.reduce((function(e,t){return t+e}),1)/d.length,y=h.reduce((function(e,t){return t+e}),1)/h.length,k>y?(this.percent=100*y/k,this.percent=parseFloat(this.percent.toFixed(2)),this.pokemons.push(this.pokemon0),this.pokemons.push(this.pokemon1)):(this.percent=100*k/y,this.percent=parseFloat(this.percent.toFixed(2)),this.pokemons.push(this.pokemon1),this.pokemons.push(this.pokemon0)),this.battle=!1,this.loading=!1;case 47:case"end":return e.stop()}}),e,this,[[8,15],[25,32]])}))),function(){return t.apply(this,arguments)})},{key:"handleClick",value:function(e,t){this.direction=t,"-1"==e&&(this.modal=!0)}},{key:"removePoke",value:function(e){0==e?(this.pokemon0={sprite:"",indice:"-1",nome:""},this.pokemons.splice(0,1)):(this.pokemon1={sprite:"",indice:"-1",nome:""},this.pokemons.splice(1,1))}}]),m}(h.c),j=x=y([h.a],x),w=n(29),component=Object(w.a)(j,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"h-full flex flex-col justify-start"},[o("header-base",{staticClass:"mb-10",attrs:{name:"Batalha"}}),e._v(" "),e.battle?o("div",{staticClass:"flex flex-col items-center"},[o("div",{staticClass:"mb-12 w-full flex justify-between items-center px-32"},[o("div",{staticClass:"h-full flex flex-col items-center justify-center"},[o("div",{staticClass:"w-full flex justify-end"},[""==!e.pokemon0.nome?o("icon",{staticClass:"cursor-pointer",attrs:{name:"delete-poke",size:"22"},on:{click:function(t){return e.removePoke(0)}}}):e._e()],1),e._v(" "),o("img",{staticClass:"mb-2 cursor-pointer",staticStyle:{"max-height":"220px"},attrs:{src:""==e.pokemon0.sprite?n(258):e.pokemon0.sprite},on:{click:function(t){return e.handleClick(e.pokemon0.indice,0)}}}),e._v(" "),""==!e.pokemon0.nome?o("p",{staticClass:"mb-3 font-lato font-semibold text-xl uppercase"},[e._v("\n          "+e._s(e.pokemon0.nome)+"\n        ")]):e._e()]),e._v(" "),o("img",{attrs:{src:n(266)}}),e._v(" "),o("div",{staticClass:"h-full flex flex-col items-center justify-center"},[o("div",{staticClass:"w-full flex justify-end"},[""==!e.pokemon1.nome?o("icon",{staticClass:"cursor-pointer",attrs:{name:"delete-poke",size:"22"},on:{click:function(t){return e.removePoke(1)}}}):e._e()],1),e._v(" "),o("img",{staticClass:"mb-2 cursor-pointer",staticStyle:{"max-height":"220px"},attrs:{src:""==e.pokemon1.sprite?n(258):e.pokemon1.sprite},on:{click:function(t){return e.handleClick(e.pokemon1.indice,1)}}}),e._v(" "),""==!e.pokemon1.nome?o("p",{staticClass:"mb-3 font-lato font-semibold text-xl uppercase"},[e._v("\n          "+e._s(e.pokemon1.nome)+"\n        ")]):e._e()])]),e._v(" "),o("button",{staticClass:"w-56 h-12 flex items-center justify-center rounded-full focus:outline-none",class:"-1"!=e.pokemon0.indice&&"-1"!=e.pokemon1.indice?"bg-gray-500 hover:bg-gray-300":"bg-gray-300",attrs:{disabled:e.loading},on:{click:e.result}},[e.loading?o("icon",{staticClass:"animate-spin",attrs:{name:"loading",size:"30"}}):o("p",[e._v("Go!")])],1)]):o("div",{staticClass:"px-40"},[o("div",{staticClass:"flex items-center justify-between"},[o("div",{staticClass:"flex flex-col items-center justify-end h-full"},[o("img",{staticClass:"mb-2 w-2/3 cursor-pointer",staticStyle:{"max-height":"150px !important","max-width":"140px !important"},attrs:{src:""==e.pokemons[1].sprite?n(258):e.pokemons[1].sprite},on:{click:function(t){return e.handleClick(e.pokemons[1].indice)}}}),e._v(" "),o("p",{staticClass:"text-2xl font-semibold"},[e._v("2º")])]),e._v(" "),o("div",{staticClass:"flex flex-col items-center"},[o("img",{staticClass:"mb-2 cursor-pointer",staticStyle:{"max-height":"230px !important","max-width":"220px !important"},attrs:{src:""==e.pokemons[0].sprite?n(258):e.pokemons[0].sprite},on:{click:function(t){return e.handleClick(e.pokemons[0].indice)}}}),e._v(" "),o("p",{staticClass:"text-3xl font-bold"},[e._v("1º")])])]),e._v(" "),o("div",{staticClass:"w-full mt-8 flex flex-col items-center"},[o("p",{staticClass:"text-3xl font-bold uppercase"},[e._v(e._s(e.percent)+"%")]),e._v(" "),o("p",{staticClass:"text-3xl font-bold uppercase"},[e._v("chance de vitória")]),e._v(" "),o("button",{staticClass:"w-56 mt-5 h-12 flex items-center justify-center rounded-full bg-brand-main focus:outline-none hover:bg-gray-300",on:{click:function(t){e.battle=!0,e.pokemons=[]}}},[e._v("\n        Tentar Novamente\n      ")])])]),e._v(" "),o("modal",{attrs:{modal:e.modal},on:{closemodal:function(t){e.modal=!1},pokemon:e.addPoke}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{HeaderBase:n(234).default,Icon:n(224).default,Modal:n(265).default})}}]);