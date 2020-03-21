(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ae08063"],{"1d0b":function(t,e,n){"use strict";var a=n("e423"),i="/mng/jobInstance/queryJobInstances/";function s(t){return Object(a["a"])(i,t)}e["a"]={queryJobInstances:s}},"43ee":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[1===t.type?n("div",[n("JobInstanceListCustom")],1):t._e()])},i=[],s=n("d4ec"),o=n("99de"),c=n("7e84"),r=n("262e"),l=n("9ab4"),u=n("60a3"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticStyle:{"margin-bottom":"10px",padding:"5px",background:"#f8f8f9"}},[n("Row",{attrs:{gutter:10}},[n("Col",{attrs:{span:"22"}},[n("span",[t._v(" ID : ")]),n("Input",{staticStyle:{width:"80px"},attrs:{placeholder:"",size:"small",clearable:""},model:{value:t.jobInstanceListFilter.id,callback:function(e){t.$set(t.jobInstanceListFilter,"id",e)},expression:"jobInstanceListFilter.id"}}),n("span",[t._v(" 状态 : ")]),n("Select",{staticStyle:{width:"120px"},attrs:{size:"small",clearable:""},model:{value:t.jobInstanceListFilter.status,callback:function(e){t.$set(t.jobInstanceListFilter,"status",e)},expression:"jobInstanceListFilter.status"}},t._l(t.hintJobInstanceStatusEnum,(function(e){return n("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.desc))])})),1)],1),n("Col",{attrs:{span:"2",align:"right"}},[n("Button",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary",size:"small"},on:{click:t.clickQuery}},[t._v("查询")])],1)],1)],1),n("div",[n("Table",{ref:"selection",attrs:{stripe:"",columns:t.jobInstanceListColumns,data:t.jobInstanceList},scopedSlots:t._u([{key:"status",fn:function(t){var e=t.row;return[n("ButtonJobStatus",{attrs:{size:"small",status:e.status,text:e.statusDesc}})]}}])})],1),n("div",{staticStyle:{"margin-top":"10px",padding:"5px",background:"#f8f8f9"}},[n("Row",{attrs:{gutter:10}},[n("Col",{attrs:{align:"right"}},[n("Page",{attrs:{total:t.jobInstanceListFilterPage.total,current:t.jobInstanceListFilter.pageNum,"page-size":t.jobInstanceListFilter.pageSize,"page-size-opts":[5,10,20,50,100],"show-total":"","show-sizer":"","show-elevator":"",size:"small"},on:{"on-change":t.pageChange,"on-page-size-change":t.pageSizeChange}})],1)],1)],1)])},d=[],p=(n("b0c0"),n("bee2")),h=n("1d0b"),m=n("7d61"),g=n("5eb3"),f=n("0e26"),I=n("acdc"),j=n("da2e"),y=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.hintJobTypeEnum=[],t.hintJobInstanceStatusEnum=[],t.jobInstanceListColumns=[{title:"ID",key:"id",align:"center",minWidth:50},{title:"名称",align:"center",minWidth:200,render:function(e,n){return e("a",{on:{click:function(){t.handClickJobInstanceListColumnName(n.row)}}},n.row.job.name)}},{title:"类型",align:"center",minWidth:150,render:function(t,e){return t("div",e.row.job.typeDesc)}},{title:"创建时间",key:"createTime",align:"center",minWidth:166,render:function(t,e){return t("div",g["a"].dateFormat(e.row.createTime))}},{title:"开始时间",key:"startTime",align:"center",minWidth:166,render:function(t,e){return t("div",g["a"].dateFormat(e.row.startTime))}},{title:"结束时间",key:"stopTime",align:"center",minWidth:166,render:function(t,e){return t("div",g["a"].dateFormat(e.row.stopTime))}},{title:"Flink UI",key:"uiAddress",align:"center",minWidth:250,ellipsis:!0,render:function(e,n){return e("a",{on:{click:function(){t.handClickJobInstanceListColumnUiAddress(n.row)}}},n.row.appId)}},{title:"状态",key:"status",align:"center",minWidth:100,slot:"status",fixed:"right"}],t.jobInstanceList=[],t.jobInstanceListFilter={id:null,status:null,pageNum:1,pageSize:10},t.jobInstanceListFilterPage={total:null},t}return Object(r["a"])(e,t),Object(p["a"])(e,[{key:"handClickJobInstanceListColumnName",value:function(t){this.$router.push({path:"/page/job/detail",query:{id:t.job.id}})}},{key:"handClickJobInstanceListColumnUiAddress",value:function(t){window.open(t.uiAddress,"_blank")}},{key:"clickQuery",value:function(){history.pushState({},"",window.location.pathname+"?"+j["a"].stringifyExcludedBlank(this.jobInstanceListFilter)),this.getJobInstanceList()}},{key:"pageChange",value:function(t){this.jobInstanceListFilter.pageNum=t,this.getJobInstanceList()}},{key:"pageSizeChange",value:function(t){this.jobInstanceListFilter.pageSize=t,this.getJobInstanceList()}},{key:"getJobInstanceList",value:function(){var t=this;h["a"].queryJobInstances(f["a"].mapDeleteBlankVK(this.jobInstanceListFilter)).then((function(e){t.jobInstanceList=e.list,t.jobInstanceListFilterPage.total=e.total})).catch((function(e){t.$Notice.error({title:e.msg})}))}},{key:"getEnums",value:function(){var t=this;m["a"].jobType().then((function(e){t.hintJobTypeEnum=e})),m["a"].jobInstanceStatus().then((function(e){t.hintJobInstanceStatusEnum=e}))}},{key:"parseRouter",value:function(){this.jobInstanceListFilter=f["a"].mapLeftJoinCopy(this.jobInstanceListFilter,this.$route.query)}},{key:"mounted",value:function(){this.parseRouter(),this.getEnums(),this.getJobInstanceList()}}]),e}(u["c"]);y=l["a"]([Object(u["a"])({components:{ButtonJobStatus:I["a"]}})],y);var v=y,k=v,L=n("2877"),w=Object(L["a"])(k,b,d,!1,null,"0bc0343e",null),J=w.exports,F=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.type=1,t}return Object(r["a"])(e,t),e}(u["c"]);F=l["a"]([Object(u["a"])({components:{JobInstanceListCustom:J}})],F);var C=F,S=C,O=Object(L["a"])(S,a,i,!1,null,"53f8c46c",null);e["default"]=O.exports}}]);
//# sourceMappingURL=chunk-2ae08063.5966dfd4.js.map