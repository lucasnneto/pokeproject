(window.webpackJsonp=window.webpackJsonp||[]).push([[18,15,16],{232:function(t,e,n){var content=n(256);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("18f21dee",content,!0,{sourceMap:!1})},235:function(t,e,n){"use strict";n.r(e);n(102),n(219),n(37),n(154);var o=n(99),r=n(100),c=n(222),l=n(223),f=n(220),m=n(22),d=n(221),h=n(224);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var k=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(c.a)(n,t);var e=v(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"handleBack",value:function(){var t=this.$route.fullPath.split("/");t.pop();var e=t.join("/");e=""===e?"/":e,this.$router.push(e)}}]),n}(d.c);k([Object(d.b)({default:"Header",required:!0,type:String})],y.prototype,"name",void 0);var x=y=k([Object(d.a)({components:{Icon:h.default}})],y),j=n(30),component=Object(j.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._g({staticClass:"m-4 flex items-center"},t.$listeners),[n("button",{staticClass:"h-10 w-10 flex items-center justify-center rounded-full focus:outline-none hover:bg-gray-300",on:{click:t.handleBack}},[n("icon",{attrs:{name:"back",size:"20"}})],1),t._v(" "),n("div",{staticClass:"w-full flex justify-center items-center"},[n("h1",{staticClass:"text-3xl font-lato font-bold uppercase"},[t._v("\n      "+t._s(t.name)+"\n    ")])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Icon:n(224).default})},255:function(t,e,n){"use strict";n(232)},256:function(t,e,n){var o=n(59)(!1);o.push([t.i,".animate-spin[data-v-a0cf3424]{-webkit-animation-name:spin-data-v-a0cf3424;animation-name:spin-data-v-a0cf3424;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear}@-webkit-keyframes spin-data-v-a0cf3424{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spin-data-v-a0cf3424{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""]),t.exports=o},257:function(t,e,n){t.exports=n.p+"img/pokebola.99887bc.png"},258:function(t,e,n){var content=n(263);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("95735aaa",content,!0,{sourceMap:!1})},259:function(t,e,n){"use strict";n.r(e);n(64),n(65),n(58),n(219),n(37),n(66),n(103),n(45),n(36);var o=n(6),r=n(99),c=n(100),l=n(222),f=n(223),m=n(220),d=n(22),h=n(221),v=n(236);function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(m.a)(t);if(e){var r=Object(m.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(f.a)(this,n)}}var y=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},x=function(t){Object(l.a)(f,t);var e,n=k(f);function f(){var t;return Object(r.a)(this,f),(t=n.apply(this,arguments)).pokemons=[],t.nextItem=0,t.loading=!1,t.items=[],t.filter=[],t.search="",t}return Object(c.a)(f,[{key:"searchWatch",value:function(){var t=this;if(this.items=[],this.nextItem=0,""!=this.search){var e=/^[0-9]+$/.test(this.search);this.filter=this.pokemons.filter((function(n,o){return e?"".concat(o).includes(t.search):n.name.toLowerCase().includes(t.search.toLowerCase())}))}else this.filter=this.pokemons;this.loadMore()}},{key:"select",value:function(t){this.$emit("pokemon",t)}},{key:"handleBack",value:function(){this.$emit("back-close",this.close?"close":"back")}},{key:"loadMore",value:function(){var t=this;this.filter.length>0&&(this.loading=!0,setTimeout((function(e){for(var n=t.filter.length-1>=t.nextItem+15?15:t.filter.length-t.nextItem,i=0;i<n;i++)t.items.push(t.filter[t.nextItem]),t.nextItem++;t.loading=!1}),200))}},{key:"mounted",value:(e=Object(o.a)(regeneratorRuntime.mark((function t(){var e,n,o=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$axios.$get("https://pokeapi.co/api/v2/pokemon/",{params:{limit:898}});case 3:e=t.sent,this.pokemons=e.results,this.filter=this.pokemons,(n=document.querySelector("#infinite-list")).addEventListener("scroll",(function(t){Math.ceil(n.scrollTop+n.clientHeight)>=n.scrollHeight&&(o.loading||o.loadMore())})),this.loadMore(),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.error(t.t0);case 14:case"end":return t.stop()}}),t,this,[[0,11]])}))),function(){return e.apply(this,arguments)})}]),f}(h.c);y([Object(h.b)({default:!1})],x.prototype,"close",void 0),y([Object(h.d)("search")],x.prototype,"searchWatch",null);var j=x=y([Object(h.a)({components:{pokemonCard:v.default}})],x),w=(n(255),n(30)),component=Object(w.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"h-full flex flex-col justify-start w-full"},[n("div",{staticClass:"m-4 flex items-center mb-12"},[n("button",{staticClass:"h-10 w-10 flex items-center justify-center rounded-full focus:outline-none hover:bg-gray-300 mr-2",on:{click:t.handleBack}},[n("icon",{attrs:{name:t.close?"close":"back",size:t.close?"30":"20"}})],1),t._v(" "),n("div",{staticClass:"relative flex w-full flex-wrap items-stretch"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"shadow appearance-none w-full block border border-gray-400 p-2 focus:outline-none",attrs:{type:"text",placeholder:"Pikachu"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),n("span",{staticClass:"z-10 h-full leading-snug font-normal absolute text-center text-gray-400 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-4 pb-3 pt-2"},[n("icon",{attrs:{name:"search",color:"gray",size:"24"}})],1)])]),t._v(" "),n("div",{staticClass:"flex flex-col justify-start overflow-y-hidden"},[n("div",{staticClass:"grid grid-cols-1 md:grid-cols-3 justify-items-center px-10 overflow-y-auto",attrs:{id:"infinite-list"}},t._l(t.items,(function(e){return n("pokemon-card",{key:e.name,attrs:{pokemon:e},on:{"select-pokemon":t.select}})})),1),t._v(" "),t.loading&&t.items.length>0?n("div",{staticClass:"w-full flex justify-center mt-4"},[n("icon",{staticClass:"animate-spin",attrs:{name:"loading",size:"22"}})],1):t._e()])])}),[],!1,null,"a0cf3424",null);e.default=component.exports;installComponents(component,{Icon:n(224).default,PokemonCard:n(236).default})},261:function(t,e,n){"use strict";var o=n(4),r=n(67).find,c=n(104),l="find",f=!0;l in[]&&Array(1).find((function(){f=!1})),o({target:"Array",proto:!0,forced:f},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},262:function(t,e,n){"use strict";n(258)},263:function(t,e,n){var o=n(59)(!1);o.push([t.i,".modal[data-v-467a1158]{width:340px;height:630px}@media (min-width:768px){.modal[data-v-467a1158]{height:600px;width:1000px}}",""]),t.exports=o},268:function(t,e,n){"use strict";n.r(e);n(219);var o=n(99),r=n(100),c=n(222),l=n(223),f=n(220),m=n(22),d=n(221);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var v=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},k=function(t){Object(c.a)(n,t);var e=h(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"closemodal",value:function(){this.$emit("closemodal")}},{key:"pokemonHandle",value:function(t){this.$emit("pokemon",t),this.closemodal()}}]),n}(d.c);v([Object(d.b)({default:!1,required:!0,type:Boolean})],k.prototype,"modal",void 0);var y=k=v([d.a],k),x=(n(262),n(30)),component=Object(x.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.modal?n("div",{staticClass:"fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50",on:{click:t.closemodal}},[n("div",{staticClass:"fixed mx-10",on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"flex flex-col bg-white rounded-lg modal"},[n("div",{staticClass:"flex items-center m-3 md:m-8 bg-white overflow-hidden"},[n("pokemon-list",{attrs:{close:!0},on:{"back-close":t.closemodal,pokemon:t.pokemonHandle}})],1)])])]):t._e()}),[],!1,null,"467a1158",null);e.default=component.exports;installComponents(component,{PokemonList:n(259).default})},269:function(t,e,n){t.exports=n.p+"img/vs.4eaec47.png"},320:function(t,e,n){"use strict";var o=n(4),r=n(33),c=n(321),l=n(156),f=n(5),m=1..toFixed,d=Math.floor,h=function(t,e,n){return 0===e?n:e%2==1?h(t,e-1,n*t):h(t*t,e/2,n)},v=function(data,t,e){for(var n=-1,o=e;++n<6;)o+=t*data[n],data[n]=o%1e7,o=d(o/1e7)},k=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=d(n/t),n=n%t*1e7},y=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=String(data[t]);s=""===s?e:s+l.call("0",7-e.length)+e}return s};o({target:"Number",proto:!0,forced:m&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!f((function(){m.call({})}))},{toFixed:function(t){var e,n,o,f,m=c(this),d=r(t),data=[0,0,0,0,0,0],x="",j="0";if(d<0||d>20)throw RangeError("Incorrect fraction digits");if(m!=m)return"NaN";if(m<=-1e21||m>=1e21)return String(m);if(m<0&&(x="-",m=-m),m>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(m*h(2,69,1))-69)<0?m*h(2,-e,1):m/h(2,e,1),n*=4503599627370496,(e=52-e)>0){for(v(data,0,n),o=d;o>=7;)v(data,1e7,0),o-=7;for(v(data,h(10,o,1),0),o=e-1;o>=23;)k(data,1<<23),o-=23;k(data,1<<o),v(data,1,1),k(data,2),j=y(data)}else v(data,0,n),v(data,1<<-e,0),j=y(data)+l.call("0",d);return j=d>0?x+((f=j.length)<=d?"0."+l.call("0",d-f)+j:j.slice(0,f-d)+"."+j.slice(f-d)):x+j}})},321:function(t,e,n){var o=n(31);t.exports=function(t){if("number"!=typeof t&&"Number"!=o(t))throw TypeError("Incorrect invocation");return+t}},326:function(t,e,n){"use strict";n.r(e);n(64),n(261),n(32),n(155),n(58),n(320),n(219),n(46);var o=n(17),r=(n(36),n(6)),c=n(99),l=n(100),f=n(222),m=n(223),d=n(220),h=n(22),v=n(221),k=n(234);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(d.a)(t);if(e){var r=Object(d.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(m.a)(this,n)}}var w=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},O={sprite:"",indice:"-1",nome:"",moves:[],skils:[],stats:{hp:0,attack:0,defense:0,spattack:0,spdefense:0,speed:0},types:[]},C=function(t){Object(f.a)(m,t);var e,n,o=j(m);function m(){var t;return Object(c.a)(this,m),(t=o.apply(this,arguments)).battle=!0,t.modal=!1,t.percent=0,t.loading=!1,t.direction=-1,t.pokemons=[],t.pokemon0=O,t.pokemon1=O,t}return Object(l.a)(m,[{key:"getStatus",value:function(t,e){return t.find((function(t){return t.stat.name===e})).base_stat}},{key:"addPoke",value:(n=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,o,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$axios.$get("https://pokeapi.co/api/v2/pokemon/".concat(e,"/"));case 3:o=t.sent,r={sprite:null!==(n=o.sprites.other.dream_world.front_default)&&void 0!==n?n:o.sprites.other["official-artwork"].front_default,nome:o.forms[0].name,indice:e,moves:o.moves.map((function(t){return x({},t.move)})),stats:{hp:this.getStatus(o.stats,"hp"),attack:this.getStatus(o.stats,"attack"),defense:this.getStatus(o.stats,"defense"),spattack:this.getStatus(o.stats,"special-attack"),spdefense:this.getStatus(o.stats,"special-defense"),speed:this.getStatus(o.stats,"speed")},types:o.types.map((function(t){return t.type.name})),skils:[]},0==this.direction&&(this.pokemon0=r),1==this.direction&&(this.pokemon1=r),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0);case 12:case"end":return t.stop()}}),t,this,[[0,9]])}))),function(t){return n.apply(this,arguments)})},{key:"result",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,o,r,c,l,f,m,d,h,v,y,x=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("-1"==this.pokemon0.indice||"-1"==this.pokemon1.indice){t.next=47;break}this.loading=!0,this.pokemon0.skils=[],this.pokemon1.skils=[],e=this.pokemon0.moves.length>20?20:this.pokemon0.moves.length,n=0;case 6:if(!(n<e)){t.next=21;break}return o=Math.floor(Math.random()*this.pokemon0.moves.length),t.prev=8,t.next=11,this.$axios.$get(this.pokemon0.moves[o].url);case 11:r=t.sent,this.pokemon0.skils.push(r),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(8),console.error(t.t0);case 18:n++,t.next=6;break;case 21:c=this.pokemon1.moves.length>20?20:this.pokemon1.moves.length,l=0;case 23:if(!(l<c)){t.next=38;break}return f=Math.floor(Math.random()*this.pokemon1.moves.length),t.prev=25,t.next=28,this.$axios.$get(this.pokemon1.moves[f].url);case 28:m=t.sent,this.pokemon1.skils.push(m),t.next=35;break;case 32:t.prev=32,t.t1=t.catch(25),console.error(t.t1);case 35:l++,t.next=23;break;case 38:d=[],h=[],this.pokemon0.skils.forEach((function(t){if("status"!=t.damage_class.name){var e="physical"==t.damage_class.name?{attack:x.pokemon0.stats.attack,defense:x.pokemon1.stats.defense}:{attack:x.pokemon0.stats.spattack,defense:x.pokemon1.stats.spdefense},n=e.attack,o=e.defense,r=x.pokemon0.types.filter((function(element){return element==t.type.name})).length>0?1.5:1,c=x.pokemon1.types.reduce((function(e,element){return e*(k.a[element].vantagem.filter((function(e){return e==t.type.name})).length>0?.25:k.a[element].desvantagem.filter((function(e){return e==t.type.name})).length>0?2:k.a[element].imunidade.filter((function(e){return e==t.type.name})).length>0?0:1)}),1),l=(null==t.power||t.power,(n*t.power/(25*o)+2)*r*c);d.push(l)}})),this.pokemon1.skils.forEach((function(t){if("status"!=t.damage_class.name){var e="physical"==t.damage_class.name?{attack:x.pokemon1.stats.attack,defense:x.pokemon0.stats.defense}:{attack:x.pokemon1.stats.spattack,defense:x.pokemon0.stats.spdefense},n=e.attack,o=e.defense,r=x.pokemon1.types.filter((function(element){return element==t.type.name})).length>0?1.5:1,c=x.pokemon0.types.reduce((function(e,element){return e*(k.a[element].vantagem.filter((function(e){return e==t.type.name})).length>0?.25:k.a[element].desvantagem.filter((function(e){return e==t.type.name})).length>0?2:k.a[element].imunidade.filter((function(e){return e==t.type.name})).length>0?0:1)}),1),l=(null==t.power||t.power,(n*t.power/(25*o)+2)*r*c);h.push(l)}})),v=d.reduce((function(t,e){return e+t}),1)/d.length,y=h.reduce((function(t,e){return e+t}),1)/h.length,v>y?(this.percent=100*y/v,this.percent=parseFloat(this.percent.toFixed(2)),this.pokemons.push(this.pokemon0),this.pokemons.push(this.pokemon1)):(this.percent=100*v/y,this.percent=parseFloat(this.percent.toFixed(2)),this.pokemons.push(this.pokemon1),this.pokemons.push(this.pokemon0)),this.battle=!1,this.loading=!1;case 47:case"end":return t.stop()}}),t,this,[[8,15],[25,32]])}))),function(){return e.apply(this,arguments)})},{key:"handleClick",value:function(t,e){this.direction=e,"-1"==t?this.modal=!0:this.battle||this.$router.push("/pokemon/".concat(t))}},{key:"removePoke",value:function(t){0==t?(this.pokemon0=O,this.pokemons.splice(0,1)):(this.pokemon1=O,this.pokemons.splice(1,1))}}]),m}(v.c),_=C=w([v.a],C),R=n(30),component=Object(R.a)(_,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"h-full flex flex-col justify-start"},[o("header-base",{staticClass:"mb-6 md:mb-10",attrs:{name:"Comparativo"}}),t._v(" "),t.battle?o("div",{staticClass:"flex flex-col items-center"},[o("div",{staticClass:"md:mb-12 w-full flex flex-col md:flex-row justify-between items-center px-32"},[o("div",{staticClass:"h-full flex flex-col items-center justify-center"},[o("div",{staticClass:"w-full flex justify-end"},[""==!t.pokemon0.nome?o("icon",{staticClass:"cursor-pointer",attrs:{name:"delete-poke",size:"22"},on:{click:function(e){return t.removePoke(0)}}}):t._e()],1),t._v(" "),o("img",{staticClass:"mb-2",class:{"cursor-pointer":""==t.pokemon0.nome},staticStyle:{"max-height":"220px","min-width":"120px"},attrs:{src:""==t.pokemon0.sprite?n(257):t.pokemon0.sprite},on:{click:function(e){return t.handleClick(t.pokemon0.indice,0)}}}),t._v(" "),""==!t.pokemon0.nome?o("p",{staticClass:"mb-3 font-lato font-semibold text-xl uppercase"},[t._v("\n          "+t._s(t.pokemon0.nome)+"\n        ")]):t._e()]),t._v(" "),o("img",{staticClass:"md:m-0 my-5",staticStyle:{"min-width":"100px"},attrs:{src:n(269)}}),t._v(" "),o("div",{staticClass:"h-full flex flex-col items-center justify-center"},[o("div",{staticClass:"w-full flex justify-end"},[""==!t.pokemon1.nome?o("icon",{staticClass:"cursor-pointer",attrs:{name:"delete-poke",size:"22"},on:{click:function(e){return t.removePoke(1)}}}):t._e()],1),t._v(" "),o("img",{staticClass:"mb-2 cursor-pointer",staticStyle:{"max-height":"220px","min-width":"120px"},attrs:{src:""==t.pokemon1.sprite?n(257):t.pokemon1.sprite},on:{click:function(e){return t.handleClick(t.pokemon1.indice,1)}}}),t._v(" "),""==!t.pokemon1.nome?o("p",{staticClass:"mb-3 font-lato font-semibold text-xl uppercase"},[t._v("\n          "+t._s(t.pokemon1.nome)+"\n        ")]):t._e()])]),t._v(" "),o("button",{staticClass:"w-56 h-12 flex items-center justify-center rounded-full focus:outline-none my-2",class:"-1"!=t.pokemon0.indice&&"-1"!=t.pokemon1.indice?"bg-gray-500 hover:bg-gray-300":"bg-gray-300",attrs:{disabled:t.loading},on:{click:t.result}},[t.loading?o("icon",{staticClass:"animate-spin",attrs:{name:"loading",size:"30"}}):o("p",[t._v("Go!")])],1)]):o("div",{staticClass:"md:px-40"},[o("div",{staticClass:"flex items-center justify-between"},[o("div",{staticClass:"flex flex-col items-center justify-end h-full"},[o("img",{staticClass:"mb-2 w-2/3 cursor-pointer",staticStyle:{"max-height":"150px !important","max-width":"140px !important"},attrs:{src:""==t.pokemons[1].sprite?n(257):t.pokemons[1].sprite},on:{click:function(e){return t.handleClick(t.pokemons[1].indice)}}}),t._v(" "),o("p",{staticClass:"text-2xl font-semibold"},[t._v("2º")])]),t._v(" "),o("div",{staticClass:"flex flex-col items-center"},[o("img",{staticClass:"mb-2 cursor-pointer",staticStyle:{"max-height":"230px !important","max-width":"220px !important"},attrs:{src:""==t.pokemons[0].sprite?n(257):t.pokemons[0].sprite},on:{click:function(e){return t.handleClick(t.pokemons[0].indice)}}}),t._v(" "),o("p",{staticClass:"text-3xl font-bold"},[t._v("1º")])])]),t._v(" "),o("div",{staticClass:"w-full mt-8 flex flex-col items-center"},[o("p",{staticClass:"text-3xl font-bold uppercase"},[t._v(t._s(t.percent)+"%")]),t._v(" "),o("p",{staticClass:"text-3xl font-bold uppercase"},[t._v("chance de vitória")]),t._v(" "),o("button",{staticClass:"w-56 mt-5 h-12 flex items-center justify-center rounded-full bg-brand-main focus:outline-none hover:bg-gray-300",on:{click:function(e){t.battle=!0,t.pokemons=[]}}},[t._v("\n        Tentar Novamente\n      ")])])]),t._v(" "),o("modal",{attrs:{modal:t.modal},on:{closemodal:function(e){t.modal=!1},pokemon:t.addPoke}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderBase:n(235).default,Icon:n(224).default,Modal:n(268).default})}}]);