(function(t){function e(e){for(var o,r,l=e[0],c=e[1],u=e[2],d=0,p=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);s&&s(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,l=1;l<n.length;l++){var c=n[l];0!==i[c]&&(o=!1)}o&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},i={app:0},a=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var s=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",[n("v-container",[n("v-row",{staticClass:"text-center"},[n("v-col",{staticClass:"mb-4"},[n("ul",{staticClass:"todo-list"},t._l(t.items,(function(e){return n("li",{key:e.id,staticClass:"todo"},[t._v(" "+t._s(e.count)+" - "+t._s(e.title)+" "),n("v-btn",{attrs:{icon:"",color:"pink"},on:{click:function(n){return t.adjustCount(e,-1)}}},[n("v-icon",[t._v("mdi-minus")])],1),n("v-btn",{attrs:{icon:"",color:"pink"},on:{click:function(n){return t.adjustCount(e,1)}}},[n("v-icon",[t._v("mdi-plus")])],1)],1)})),0)])],1)],1),n("creation-dialog",{on:{onAddItem:function(e){return t.addItem(e)}},model:{value:t.showCreationDialog,callback:function(e){t.showCreationDialog=e},expression:"showCreationDialog"}}),n("v-btn",{attrs:{fixed:"",dark:"",fab:"",bottom:"",right:"",color:"pink"},on:{click:function(e){t.showCreationDialog=!t.showCreationDialog}}},[n("v-icon",[t._v("mdi-plus")])],1)],1)],1)},a=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.isVisible,callback:function(e){t.isVisible=e},expression:"isVisible"}},[n("v-card",[n("v-card-title",[t._v(" Add an item... ")]),n("v-card-text",[n("v-text-field",{attrs:{"single-line":"",autofocus:""},model:{value:t.textValue,callback:function(e){t.textValue=e},expression:"textValue"}})],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{text:""},on:{click:t.onCancel}},[t._v("Cancel")]),n("v-btn",{attrs:{color:"primary",disabled:!t.isAddEnabled},on:{click:t.onAdd}},[t._v("Add")])],1)],1)],1)},l=[],c={name:"creation-dialog",props:{value:{type:Boolean,required:!0}},computed:{isVisible:{get:function(){return this.value},set:function(t){this.$emit("input",t)}},isAddEnabled:function(){return this.textValue.length>0}},data:function(){return{textValue:""}},methods:{onAdd:function(){this.$emit("onAddItem",this.textValue),this.onCancel()},onCancel:function(){this.isVisible=!1,this.textValue=""}}},u=c,s=n("2877"),d=n("6544"),p=n.n(d),f=n("8336"),v=n("b0af"),h=n("99d9"),b=n("169a"),m=n("2fa4"),g=n("8654"),x=Object(s["a"])(u,r,l,!1,null,null,null),V=x.exports;p()(x,{VBtn:f["a"],VCard:v["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:h["c"],VDialog:b["a"],VSpacer:m["a"],VTextField:g["a"]});var C={name:"App",components:{CreationDialog:V},mounted:function(){this.addItem("push-ups"),this.addItem("sit-ups"),this.addItem("back crunches")},data:function(){return{showCreationDialog:!1,items:[]}},methods:{addItem:function(t){console.log("### add new item: "+t),this.items.push({id:this.items.length,title:t,count:0})},adjustCount:function(t,e){t.count+=e}}},w=C,y=n("7496"),_=n("62ad"),k=n("a523"),j=n("132d"),O=n("f6c4"),A=n("0fd9"),D=Object(s["a"])(w,i,a,!1,null,null,null),I=D.exports;p()(D,{VApp:y["a"],VBtn:f["a"],VCol:_["a"],VContainer:k["a"],VIcon:j["a"],VMain:O["a"],VRow:A["a"]});var P=n("f309");o["a"].use(P["a"]);var S=new P["a"]({});o["a"].config.productionTip=!1,new o["a"]({vuetify:S,render:function(t){return t(I)}}).$mount("#app")}});
//# sourceMappingURL=app.632242d8.js.map