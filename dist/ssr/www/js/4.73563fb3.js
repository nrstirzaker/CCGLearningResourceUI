(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"713b":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-pa-md"},[a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("div",{staticClass:"row no-wrap"},[a("q-toolbar",{staticClass:"col-8"},[a("q-toolbar-title",[t._v("\n            Home Learning Resources by the Parent's & Friend's of Christ's College Guildford\n          ")])],1),a("q-toolbar",{staticClass:"col-4"},[a("q-select",{staticStyle:{"min-width":"400px"},attrs:{outlined:"",options:t.options,label:"Filter by Subject","emit-value":"","map-options":"",value:t.topic.value,"bg-color":"white"},on:{input:function(e){t.topicChange(e)}},model:{value:t.topic,callback:function(e){t.topic=e},expression:"topic"}})],1)],1)]),a("q-page-container",[a("Resources")],1)],1)],1)},s=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{attrs:{id:"resource"}},t._l(t.resources,(function(e){return a("div",{key:e.RowId},[a("div",{staticClass:"q-pa-md row items-start q-gutter-md"},[a("q-card",{staticClass:"my-card",attrs:{flat:"",bordered:""}},[a("q-card-section",{staticClass:"q-pt-xs"},[a("q-card-section",{attrs:{vertical:""}},[a("div",{staticClass:"text-overline"},[t._v("Topic: "+t._s(e.Topic))]),a("div",{staticClass:"text-h5 q-mt-sm q-mb-xs"},[t._v("Name: "+t._s(e.Name))]),a("div",{staticClass:"text-h6 q-mt-sm q-mb-xs"},[t._v("Address: "),a("a",{attrs:{href:e.Address}},[t._v(t._s(e.Address))])]),a("div",{staticClass:"text-caption text-grey"},[t._v("\n              "+t._s(e.Notes)+"\n            ")])]),a("q-card-actions",{staticClass:"justify-around",attrs:{horizontal:""}},[a("q-btn",{attrs:{flat:"",round:"",color:"red",icon:"favorite"}}),a("q-btn",{attrs:{flat:"",round:"",color:"primary",icon:"share"}})],1)],1)],1)],1)])})),0)},r=[],i=a("bc3a"),l=a.n(i),c=a("2b0e"),u=new c["a"],d={name:"Resources",data:function(){return{resources:null}},methods:{topicChange:function(t){this.getTopicFromServer(t)},getTopicFromServer:function(t){var e=this,a=t||"all",o="https://learning-resources-api.herokuapp.com/?topic="+a;console.log(o),l.a.get(o).then((function(t){e.resources=t.data.rows}))}},created:function(){var t=this;u.$on("topic-change",(function(e){return t.topicChange(e)}))},mounted:function(){this.getTopicFromServer("all")}},p=d,v=a("2877"),h=a("eebe"),b=a.n(h),m=a("f09f"),f=a("a370"),g=a("4b7e"),C=a("9c40"),q=Object(v["a"])(p,n,r,!1,null,"60e196d8",null),y=q.exports;b()(q,"components",{QCard:m["a"],QCardSection:f["a"],QCardActions:g["a"],QBtn:C["a"]});var w={name:"MainLayout",components:{Resources:y},methods:{topicChange:function(t){console.log("MainLayout - Topic changed to: "+t),this.topic=t,u.$emit("topic-change",t)}},props:{},data:function(){return{topic:"",options:[{label:"All",value:"All"},{label:"General",value:"General"},{label:"Maths",value:"Maths"},{label:"Science",value:"Science"},{label:"Geography",value:"Geography"},{label:"History",value:"History"},{label:"Art & Design",value:"Art%20And%20Design"},{label:"IT & Computer Science",value:"IT%20And%20Computer%20Science"},{label:"Languages",value:"Languages"},{label:"PE",value:"PE"}]}},created:function(){this.topic=this.options[0].label}},_=w,x=a("4d5a"),S=a("e359"),T=a("65c6"),A=a("6ac5"),Q=a("ddd8"),L=a("09e3"),F=Object(v["a"])(_,o,s,!1,null,null,null);e["default"]=F.exports;b()(F,"components",{QLayout:x["a"],QHeader:S["a"],QToolbar:T["a"],QToolbarTitle:A["a"],QSelect:Q["a"],QPageContainer:L["a"]})}}]);