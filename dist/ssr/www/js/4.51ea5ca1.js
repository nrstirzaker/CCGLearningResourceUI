(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"713b":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-pa-md"},[a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("div",{staticClass:"row no-wrap"},[a("q-toolbar",[a("q-toolbar-title",{staticClass:"col-md-8"},[e._v("\n            Home Learning Resources by the Parent's & Friend's of Christ's College Guildford\n          ")]),a("q-select",{staticClass:"col-md-4",staticStyle:{"max-width":"900px"},attrs:{outlined:"",value:e.options.All,options:e.options,label:"Filter by Subject","emit-value":"","map-options":"",color:"black","bg-color":"white"},on:{input:function(t){e.topicChange(t)}},model:{value:e.topic,callback:function(t){e.topic=t},expression:"topic"}})],1)],1)]),a("q-page-container",[a("Resources")],1)],1)],1)},s=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{attrs:{id:"resource"}},e._l(e.resources,(function(t){return a("div",{key:t.RowId},[a("div",{staticClass:"q-pa-md row items-start q-gutter-md"},[a("q-card",{staticClass:"my-card",attrs:{flat:"",bordered:""}},[a("q-card-section",{staticClass:"q-pt-xs"},[a("q-card-section",{attrs:{vertical:""}},[a("div",{staticClass:"text-overline"},[e._v("Topic: "+e._s(t.Topic))]),a("div",{staticClass:"text-h5 q-mt-sm q-mb-xs"},[e._v("Name: "+e._s(t.Name))]),a("div",{staticClass:"text-h6 q-mt-sm q-mb-xs"},[e._v("Address: "),a("a",{attrs:{href:t.Address}},[e._v(e._s(t.Address))])]),a("div",{staticClass:"text-caption text-grey"},[e._v("\n              "+e._s(t.Notes)+"\n            ")])]),a("q-card-actions",{staticClass:"justify-around",attrs:{horizontal:""}},[a("q-btn",{attrs:{flat:"",round:"",color:"red",icon:"favorite"}}),a("q-btn",{attrs:{flat:"",round:"",color:"primary",icon:"share"}})],1)],1)],1)],1)])})),0)},r=[],l=a("bc3a"),i=a.n(l),c=a("2b0e"),u=new c["a"],d={name:"Resources",data:function(){return{resources:null}},methods:{topicChange:function(e){this.getTopicFromServer(e)},getTopicFromServer:function(e){var t=this,a=e||"all",o="https://learning-resources-api.herokuapp.com/?topic="+a;console.log(o),i.a.get(o).then((function(e){console.log(JSON.stringify(e.data.rows)),t.resources=e.data.rows}))}},created:function(){var e=this;u.$on("topic-change",(function(t){return e.topicChange(t)}))},mounted:function(){this.getTopicFromServer("all")}},p=d,v=a("2877"),m=a("eebe"),b=a.n(m),h=a("f09f"),g=a("a370"),f=a("4b7e"),C=a("9c40"),q=Object(v["a"])(p,n,r,!1,null,"9d22b690",null),y=q.exports;b()(q,"components",{QCard:h["a"],QCardSection:g["a"],QCardActions:f["a"],QBtn:C["a"]});var w={name:"MainLayout",components:{Resources:y},methods:{topicChange:function(e){console.log("MainLayout - Topic changed to: "+e),u.$emit("topic-change",e)}},data:function(){return{options:[{label:"All",value:"All"},{label:"General",value:"General"},{label:"Maths",value:"Maths"},{label:"Science",value:"Science"},{label:"Geography",value:"Geography"},{label:"History",value:"History"},{label:"Art & Design",value:"Art%20And%20Design"},{label:"IT & Computer Science",value:"IT%20And%20Computer%20Science"},{label:"Languages",value:"Languages"},{label:"PE",value:"PE"}]}}},_=w,x=a("4d5a"),S=a("e359"),A=a("65c6"),T=a("6ac5"),Q=a("ddd8"),L=a("09e3"),k=Object(v["a"])(_,o,s,!1,null,null,null);t["default"]=k.exports;b()(k,"components",{QLayout:x["a"],QHeader:S["a"],QToolbar:A["a"],QToolbarTitle:T["a"],QSelect:Q["a"],QPageContainer:L["a"]})}}]);