"use strict";(self["webpackChunkvue_template"]=self["webpackChunkvue_template"]||[]).push([[762],{1762:function(e,t,n){n.r(t),n.d(t,{default:function(){return ao}});var o=n(3396);function r(e,t,n,r,a,s){const l=(0,o.up)("FnListTable"),c=(0,o.up)("ExamTable"),d=(0,o.up)("FnListComeBack"),i=(0,o.up)("AddExamWrap"),u=(0,o.up)("IndexManage"),m=(0,o.up)("FnListCourse"),p=(0,o.up)("FnListOrder"),b=(0,o.up)("CourseWrap"),x=(0,o.up)("IsLoading");return(0,o.wg)(),(0,o.iD)(o.HY,null,["table"===e.examTableCurrentBlock?((0,o.wg)(),(0,o.iD)(o.HY,{key:0},[(0,o.Wm)(l),(0,o.Wm)(c)],64)):(0,o.kq)("",!0),"addExam"===e.examTableCurrentBlock?((0,o.wg)(),(0,o.iD)(o.HY,{key:1},[(0,o.Wm)(d),(0,o.Wm)(i)],64)):(0,o.kq)("",!0),"indexManage"===e.examTableCurrentBlock?((0,o.wg)(),(0,o.iD)(o.HY,{key:2},[(0,o.Wm)(d),(0,o.Wm)(u)],64)):(0,o.kq)("",!0),"course"===e.examTableCurrentBlock?((0,o.wg)(),(0,o.iD)(o.HY,{key:3},[(0,o.Wm)(m),(0,o.Wm)(p),(0,o.Wm)(b)],64)):(0,o.kq)("",!0),(0,o.Wm)(x,{active:a.isLoading,"onUpdate:active":t[0]||(t[0]=e=>a.isLoading=e)},null,8,["active"])],64)}var a=n(65),s=n(7139);const l={class:"container"},c={class:"d-flex"},d=(0,o._)("h2",{class:"fs-5 my-auto ms-3 py-1 px-2"},"--未設定--",-1),i={class:"table table-hover text-center align-middle my-3","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample","data-refId":"table1",ref:"table1"},u=(0,o._)("thead",{class:"table-head-bg table-head-text table-head-border-top border-bottom-styleClear"},[(0,o._)("tr",null,[(0,o._)("th",{scope:"col"},"No."),(0,o._)("th",{scope:"col"},"考試方式"),(0,o._)("th",{scope:"col"},"考試類別"),(0,o._)("th",{scope:"col"},"考試標題"),(0,o._)("th",{scope:"col"},"起始日期"),(0,o._)("th",{scope:"col"},"結束日期"),(0,o._)("th",{scope:"col"},"成績公佈日期"),(0,o._)("th",{scope:"col"},"編輯"),(0,o._)("th",{scope:"col"},"刪除"),(0,o._)("th",{scope:"col"},"成績")])],-1),m={scope:"row"},p={href:"javascript:;",class:"text-decoration-none hover-border-bottom"},b=(0,o._)("br",null,null,-1),x={key:0,class:"text-danger"},h=(0,o._)("td",null,[(0,o._)("button",{type:"button",class:"btn btn-secondary"},"編輯")],-1),v=(0,o._)("td",null,[(0,o._)("button",{type:"button",class:"btn btn-secondary"},"刪")],-1),k=(0,o._)("td",null,[(0,o._)("button",{type:"button",class:"btn btn-secondary"},"查看")],-1);function _(e,t,n,r,a,_){return(0,o.wg)(),(0,o.iD)("main",null,[(0,o._)("section",l,[(0,o._)("div",c,[(0,o._)("a",{class:"foldBtn",href:"javascript:;","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",onClick:t[0]||(t[0]=(...e)=>_.hideTable&&_.hideTable(...e)),ref:"toggleBtn1"},"－",512),d]),(0,o._)("table",i,[u,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.table,((e,t)=>((0,o.wg)(),(0,o.iD)("tr",{key:`table${t}`},[(0,o._)("th",m,(0,s.zw)(t+1),1),(0,o._)("td",null,(0,s.zw)(e.mode),1),(0,o._)("td",null,(0,s.zw)(e.type),1),(0,o._)("td",null,[(0,o._)("a",p,[(0,o._)("span",null,(0,s.zw)(e.title),1)]),b,e.score?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("span",x," 試卷總分未滿100分，學生無法開始作答 "))]),(0,o._)("td",null,(0,s.zw)(e.startDate),1),(0,o._)("td",null,(0,s.zw)(e.endDate),1),(0,o._)("td",null,(0,s.zw)(e.scorePublicDate),1),h,v,k])))),128))])],512)])])}n(6699);var g={data(){return{table:[{mode:"線上作答",type:"平時",title:"線上考試作答新增測試",startDate:"2022/8/10",endDate:"2022/8/10",scorePublicDate:"2022/8/10",score:!0},{mode:"紙本作答",type:"期中考",title:"中國文化大學進學部98學年暑期班期中考(英文上機)",startDate:"2022/8/13",endDate:"2022/8/13",scorePublicDate:"2022/8/13",score:!1},{mode:"線上作答",type:"專題",title:"測試線上作答 2022.8.10",startDate:"2022/8/15",endDate:"2022/8/15",scorePublicDate:"2022/8/15",score:!1}]}},watch:{},methods:{hideTable(e){const t=e.target.parentNode.parentNode.children[1].getAttribute("data-refId"),n=this.$refs[t].className.split(" ").includes("d-none");n?(this.$refs[t].classList.remove("d-none"),this.$refs.toggleBtn1.textContent="－"):(this.$refs[t].classList.add("d-none"),this.$refs.toggleBtn1.textContent="＋")}},mounted(){}},y=n(89);const w=(0,y.Z)(g,[["render",_]]);var f=w;function C(e,t,n,r,a,s){const l=(0,o.up)("AddExamTable"),c=(0,o.up)("AddExamAnswerOnline"),d=(0,o.up)("AddExamPaperTest");return(0,o.wg)(),(0,o.iD)(o.HY,null,["table"===e.addExamCurrentBlock?((0,o.wg)(),(0,o.j4)(l,{key:0})):(0,o.kq)("",!0),"answerOnline"===e.addExamCurrentBlock?((0,o.wg)(),(0,o.j4)(c,{key:1})):(0,o.kq)("",!0),"paperExam"===e.addExamCurrentBlock?((0,o.wg)(),(0,o.j4)(d,{key:2})):(0,o.kq)("",!0)],64)}var E=n(9242);const D={class:"table table-bordered w-50"},B={class:"bg-secondary text-center border-bottom-styleClear"},A=(0,o._)("tbody",null,[(0,o._)("tr",null,[(0,o._)("td",null,[(0,o._)("p",null,[(0,o.Uk)(" 線上出題，編輯作業卷題目，完成之後學生於開始日期到達後直接於線上作答，成績在交卷時即計算完成。 "),(0,o._)("br"),(0,o.Uk)(" 問答題的部份則由老師於考試結束後透過閱卷批改成績。 ")])]),(0,o._)("td",null,[(0,o._)("p",null,[(0,o.Uk)(" 此次考試為一般紙本考試。 "),(0,o._)("br"),(0,o.Uk)(" 系統只提供此份考試的描述給予學生了解考試的內容與限制。 ")])])])],-1);function M(e,t,n,r,a,s){return(0,o.wg)(),(0,o.iD)("table",D,[(0,o._)("thead",B,[(0,o._)("tr",null,[(0,o._)("th",null,[(0,o._)("a",{href:"javascript:;",class:"h4 text-decoration-none d-block m-0 px-5 py-3",onClick:t[0]||(t[0]=(0,E.iM)((t=>e.$store.commit("ADD_EXAM_BLOCK","answerOnline")),["prevent"]))},"線上作答")]),(0,o._)("th",null,[(0,o._)("a",{href:"javascript:;",class:"h4 text-decoration-none d-block m-0 px-5 py-3",onClick:t[1]||(t[1]=(0,E.iM)((t=>e.$store.commit("ADD_EXAM_BLOCK","paperExam")),["prevent"]))},"紙本考試")])])]),A])}var O={components:{},data(){return{}},watch:{},methods:{},mounted(){}};const L=(0,y.Z)(O,[["render",M]]);var j=L;function P(e,t,n,r,a,s){const l=(0,o.up)("AEAnsOnlineMenu"),c=(0,o.up)("ExamEdit"),d=(0,o.up)("ImportExamPaper"),i=(0,o.up)("SetExamPaper"),u=(0,o.up)("ExamPaperContent"),m=(0,o.up)("PreviewExamPaper");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(l),"examEdit"===e.aEAnsOnlineCurrentMenu?((0,o.wg)(),(0,o.j4)(c,{key:0})):(0,o.kq)("",!0),"importExamPaper"===e.aEAnsOnlineCurrentMenu?((0,o.wg)(),(0,o.j4)(d,{key:1})):(0,o.kq)("",!0),"setExamPaper"===e.aEAnsOnlineCurrentMenu?((0,o.wg)(),(0,o.j4)(i,{key:2})):(0,o.kq)("",!0),"examPaperContent"===e.aEAnsOnlineCurrentMenu?((0,o.wg)(),(0,o.j4)(u,{key:3})):(0,o.kq)("",!0),"previewExamPaper"===e.aEAnsOnlineCurrentMenu?((0,o.wg)(),(0,o.j4)(m,{key:4})):(0,o.kq)("",!0)],64)}const N={class:"d-flex list-unstyled"},Z=["onClick"];function q(e,t,n,r,a,l){return(0,o.wg)(),(0,o.iD)("ul",N,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.ansOnlineMenuList,((t,n,r)=>((0,o.wg)(),(0,o.iD)("li",{key:`menuBtn${r}`},[(0,o._)("button",{type:"button",class:(0,s.C_)(["btn border px-4 py-3",{"btn-secondary":e.aEAnsOnlineCurrentMenu!==n}]),onClick:t=>e.$store.commit("AE_EXAM_CURRENTBLOCK",n)},(0,s.zw)(t),11,Z)])))),128))])}var H={components:{},computed:{...(0,a.rn)(["aEAnsOnlineCurrentMenu"])},data(){return{ansOnlineMenuList:{examEdit:"考試編輯",importExamPaper:"匯入試卷",setExamPaper:"試卷設定",examPaperContent:"試卷內容",previewExamPaper:"預覽試卷"}}},watch:{},methods:{},mounted(){}};const I=(0,y.Z)(H,[["render",q]]);var T=I;function $(e,t,n,r,a,s){const l=(0,o.up)("NormalForm");return(0,o.wg)(),(0,o.j4)(l)}const W={class:"container mb-5"},K=(0,o.uE)('<section class="row border"><h3 class="col-2 fs-5 text-center required my-auto">考試類別</h3><div class="col-10 bg-pink-light py-2"><select><option value="">平時考</option></select></div></section><section class="row border"><h3 class="col-2 fs-5 text-center my-auto">索引</h3><div class="col-10 bg-pink-light py-2"><select><option value="">新增索引</option></select></div></section><section class="row border"><h3 class="col-2 fs-5 text-center required my-auto">考試標題</h3><div class="col-10 bg-pink-light py-2"><input type="text" size="70"></div></section><section class="row border"><h3 class="col-2 fs-5 text-center my-auto">考試 說明</h3><div class="col-10 bg-pink-light py-2"><textarea name="" id="" cols="70" rows="10"></textarea></div></section>',4),z={class:"row border"},F=(0,o._)("h3",{class:"col-2 fs-5 text-center my-auto"},"公開日期",-1),Y={class:"col-10 bg-pink-light py-2"},U=(0,o._)("i",{class:"text-gray"},"在公開日期未到之前，不會顯示在學生的考試列表之中，未設定表示立即公開",-1),R={class:"row border"},X=(0,o._)("h3",{class:"col-2 fs-5 text-center required my-auto"},"起始日期",-1),G={class:"col-10 bg-pink-light py-2"},S=(0,o._)("i",{class:"text-gray"},"當起始日期已到時，學生才能開始考試，不能再修改試卷",-1),V={class:"row border"},J=(0,o._)("h3",{class:"col-2 fs-5 text-center required my-auto"},"結束日期",-1),Q={class:"col-10 bg-pink-light py-2"},ee={class:"row border"},te=(0,o._)("h3",{class:"col-2 fs-5 text-center my-auto"},"成績 公佈日期",-1),ne={class:"col-10 bg-pink-light py-2"},oe=(0,o._)("i",{class:"text-gray"},"不填[公佈成績日期]代表成績不予公佈",-1),re={class:"row border"},ae=(0,o._)("h3",{class:"col-2 fs-5 text-center my-auto"},"補考 起始日期",-1),se={class:"col-10 bg-pink-light py-2"},le={class:"row border"},ce=(0,o._)("h3",{class:"col-2 fs-5 text-center my-auto"},"補考 結束日期",-1),de={class:"col-10 bg-pink-light py-2"},ie=(0,o.uE)('<section class="row border"><h3 class="col-2 fs-5 text-center my-auto">課程進度</h3><div class="col-10 bg-pink-light py-2"><select class="form-control"><option value="">(不設定)</option></select></div></section>',1),ue=(0,o.uE)('<section class="row border"><h3 class="col-2 fs-5 text-center my-auto">考試 檔案</h3><div class="col-10 bg-pink-light py-2"><div class="d-flex align-items-center"><label for="fileDescription" class="me-2">檔案敘述</label><input type="text" id="fileDescription"></div><div class="d-flex align-items-center"><label for="uploadFile" class="me-2">上傳檔案</label><input type="file" class="border" id="uploadFile"><button type="button" class="btn btn-secondary border-dark">上傳</button></div><div><i class="text-gray">(上傳檔案大小請在 10MB 以下) 檔案名稱長度限制為 200 字</i><br><div class="d-flex align-items-center"><a href="javascript:;" class="text-red me-5">課程總使用容量</a><span class="progress-wrap"><span class="progress-finish"></span></span><p class="my-auto ms-3">111.56 MB/500MB</p></div></div></div></section><section class="d-flex justify-content-between border"><h3 class="fs-5 text-gray required my-auto">為必填欄位</h3><div class="py-2"><button type="button" class="btn btn-secondary border-dark me-2">儲存</button><button type="button" class="btn btn-secondary border-dark">取消</button></div></section>',2);function me(e,t,n,r,a,s){const l=(0,o.up)("DateNormal"),c=(0,o.up)("PaperExamForm");return(0,o.wg)(),(0,o.iD)("div",W,[(0,o._)("form",null,[K,(0,o._)("section",z,[F,(0,o._)("div",Y,[(0,o.Wm)(l),U])]),(0,o._)("section",R,[X,(0,o._)("div",G,[(0,o.Wm)(l),S])]),(0,o._)("section",V,[J,(0,o._)("div",Q,[(0,o.Wm)(l)])]),(0,o._)("section",ee,[te,(0,o._)("div",ne,[(0,o.Wm)(l),oe])]),(0,o._)("section",re,[ae,(0,o._)("div",se,[(0,o.Wm)(l)])]),(0,o._)("section",le,[ce,(0,o._)("div",de,[(0,o.Wm)(l)])]),ie,"answerOnline"===e.addExamCurrentBlock?((0,o.wg)(),(0,o.j4)(c,{key:0})):(0,o.kq)("",!0),ue])])}const pe=(0,o._)("input",{type:"date"},null,-1),be=(0,o.Uk)(" 時間： "),xe=(0,o._)("option",{value:"00"},"00",-1),he=["value"],ve=(0,o.Uk)(" 時 "),ke=(0,o._)("option",{value:"00"},"00",-1),_e=["value"],ge=(0,o.Uk)(" 分 ");function ye(e,t){return(0,o.wg)(),(0,o.iD)(o.HY,null,[pe,be,(0,o._)("select",null,[xe,((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)(23,(e=>(0,o._)("option",{value:e,key:e},(0,s.zw)(e<10?`0${e}`:e),9,he))),64))]),ve,(0,o._)("select",null,[ke,((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)(59,(e=>(0,o._)("option",{value:e,key:e},(0,s.zw)(e<10?`0${e}`:e),9,_e))),64))]),ge],64)}const we={},fe=(0,y.Z)(we,[["render",ye]]);var Ce=fe;const Ee={class:"row border"},De=(0,o._)("h3",{class:"col-2 fs-5 text-center my-auto"},"考試方式",-1),Be={class:"col-10 bg-pink-light"},Ae=(0,o.uE)('<div class="d-flex border-bottom mb-1"><p class="bg-light fs-5 px-4 my-auto me-2">成績選擇</p><select><option value="">取平均成績</option></select></div><div class="d-flex border-bottom mb-1"><label for="examCount" class="bg-light fs-5 px-4 my-auto me-2">考試次數</label><input type="text" id="examCount" size="5"><i class="text-gray my-auto ms-2">設定 0 次，表示不限作答次數</i></div><div class="d-flex border-bottom align-items-center mb-1"><p class="bg-light fs-5 px-4 my-auto me-2">考試時間</p><input type="number" size="5" class="me-1">時 <input type="number" size="5" class="mx-1">分 </div>',3),Me={class:"d-flex border-bottom mb-5"},Oe=(0,o._)("p",{class:"bg-light fs-5 my-auto me-2 px-4 py-3"},"答案公佈日期",-1),Le={class:"d-flex flex-column justify-content-center"},je=(0,o._)("div",null,[(0,o._)("input",{type:"radio",id:"radio1",name:"radio"}),(0,o._)("label",{for:"radio1"},"公佈答案"),(0,o._)("input",{type:"radio",class:"ms-3",id:"radio2",name:"radio"}),(0,o._)("label",{for:"radio2"},"不公佈答案")],-1),Pe=(0,o._)("i",{class:"text-gray ms-2"},"未設定日期時，表示交卷後立即公佈答案",-1);function Ne(e,t,n,r,a,s){const l=(0,o.up)("DateNormal");return(0,o.wg)(),(0,o.iD)("section",Ee,[De,(0,o._)("div",Be,[Ae,(0,o._)("div",Me,[Oe,(0,o._)("div",Le,[je,(0,o._)("div",null,[(0,o.Wm)(l),Pe])])])])])}var Ze={components:{DateNormal:Ce},data(){return{}},watch:{},methods:{},mounted(){}};const qe=(0,y.Z)(Ze,[["render",Ne]]);var He=qe,Ie={components:{DateNormal:Ce,PaperExamForm:He},computed:{...(0,a.rn)(["addExamCurrentBlock"])},data(){return{}},watch:{},methods:{},mounted(){}};const Te=(0,y.Z)(Ie,[["render",me]]);var $e=Te,We={components:{NormalForm:$e},data(){return{}},watch:{},methods:{},mounted(){}};const Ke=(0,y.Z)(We,[["render",$]]);var ze=Ke;function Fe(e,t,n,o,r,a){return"試卷內容"}var Ye={components:{},data(){return{}},watch:{},methods:{},mounted(){}};const Ue=(0,y.Z)(Ye,[["render",Fe]]);var Re=Ue;const Xe={class:"container border"},Ge=(0,o.uE)('<div class="row border-bottom"><div class="col-3"><p class="fs-5 text-center my-auto">選擇課程</p></div><div class="col-9 bg-pink-light"><select><option value="">請選擇課程</option></select></div></div><div class="row"><div class="col-3"><p class="fs-5 text-center my-auto">選擇項目</p></div><div class="col-9 bg-pink-light"><p class="mb-0">系統查無資料！</p></div></div>',2),Se=[Ge];function Ve(e,t,n,r,a,s){return(0,o.wg)(),(0,o.iD)("div",Xe,Se)}var Je={components:{},data(){return{}},watch:{},methods:{},mounted(){}};const Qe=(0,y.Z)(Je,[["render",Ve]]);var et=Qe;function tt(e,t,n,o,r,a){return"預覽試卷"}var nt={components:{},data(){return{}},watch:{},methods:{},mounted(){}};const ot=(0,y.Z)(nt,[["render",tt]]);var rt=ot;function at(e,t,n,o,r,a){return"試卷設定"}var st={components:{},data(){return{}},watch:{},methods:{},mounted(){}};const lt=(0,y.Z)(st,[["render",at]]);var ct=lt,dt={components:{AEAnsOnlineMenu:T,ExamEdit:ze,ExamPaperContent:Re,ImportExamPaper:et,PreviewExamPaper:rt,SetExamPaper:ct},computed:{...(0,a.rn)(["aEAnsOnlineCurrentMenu"])},data(){return{}},watch:{},methods:{},mounted(){}};const it=(0,y.Z)(dt,[["render",P]]);var ut=it;function mt(e,t,n,r,a,s){const l=(0,o.up)("NormalForm");return(0,o.wg)(),(0,o.j4)(l)}var pt={components:{NormalForm:$e}};const bt=(0,y.Z)(pt,[["render",mt]]);var xt=bt,ht={components:{AddExamTable:j,AddExamAnswerOnline:ut,AddExamPaperTest:xt},computed:{...(0,a.rn)(["addExamCurrentBlock"])},data(){return{}},watch:{},methods:{},mounted(){}};const vt=(0,y.Z)(ht,[["render",C]]);var kt=vt;const _t={class:"table table-bordered w-50 align-middle"},gt=(0,o._)("td",null,"現有索引",-1),yt={class:"w-75"},wt=["value"],ft=["value"],Ct=(0,o._)("td",null,"索引名稱",-1),Et={type:"text",ref:"addIndexNameTxt"};function Dt(e,t,n,r,a,l){return(0,o.wg)(),(0,o.iD)("table",_t,[(0,o._)("tbody",null,[(0,o._)("tr",null,[gt,(0,o._)("td",yt,[(0,o.wy)((0,o._)("select",{class:"form-select",size:"10","onUpdate:modelValue":t[0]||(t[0]=e=>a.selectIndex=e)},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.indexData,((e,t)=>((0,o.wg)(),(0,o.iD)("option",{value:t,key:`index${t}`},(0,s.zw)(e),9,wt)))),128))],512),[[E.bM,a.selectIndex]]),a.editHide?((0,o.wg)(),(0,o.iD)(o.HY,{key:0},[(0,o._)("button",{type:"button",class:"btn btn-secondary btn-sm border-dark",onClick:t[1]||(t[1]=(...e)=>l.deleteIndex&&l.deleteIndex(...e))},"刪除"),(0,o._)("button",{type:"button",class:"btn btn-secondary btn-sm border-dark",onClick:t[2]||(t[2]=(...e)=>l.openEdit&&l.openEdit(...e))},"編輯")],64)):((0,o.wg)(),(0,o.iD)(o.HY,{key:1},[(0,o._)("input",{type:"text",value:a.indexData[a.selectIndex],ref:"currentIndexNameTxt"},null,8,ft),(0,o._)("button",{type:"button",class:"btn btn-secondary btn-sm border-dark",onClick:t[3]||(t[3]=(...e)=>l.editName&&l.editName(...e))},"確定"),(0,o._)("button",{type:"button",class:"btn btn-secondary btn-sm border-dark",onClick:t[4]||(t[4]=e=>a.editHide=!a.editHide)},"取消")],64))])]),(0,o._)("tr",null,[Ct,(0,o._)("td",null,[(0,o._)("input",Et,null,512),(0,o._)("button",{type:"button",class:"btn btn-secondary btn-sm border-dark ms-2",onClick:t[5]||(t[5]=(...e)=>l.addIndexName&&l.addIndexName(...e))},"新增")])])])])}var Bt={data(){return{selectIndex:"",indexData:["測試索引1","測試索引2","測試索引3","測試索引4","測試索引5","測試索引6","測試索引7","測試索引8","測試索引9","測試索引10","測試索引11","測試索引12","測試索引13","測試索引14","測試索引15"],editHide:!0}},methods:{deleteIndex(){const e=this.selectIndex;this.indexData.splice(e,1)},openEdit(){this.selectIndex?this.editHide=!this.editHide:alert("請選擇現有索引!!")},editName(){const e=this.selectIndex,t=this.$refs.currentIndexNameTxt.value;this.indexData[e]=t,this.selectIndex="",this.editHide=!0},addIndexName(){const e=this.$refs.addIndexNameTxt.value;e?(this.indexData.push(e),this.$refs.addIndexNameTxt.value=""):alert("請輸入索引名稱!!")}}};const At=(0,y.Z)(Bt,[["render",Dt]]);var Mt=At;function Ot(e,t,n,r,a,s){const l=(0,o.up)("CourseLearnCourse"),c=(0,o.up)("CourseLogonRecord"),d=(0,o.up)("CourseDiscuss"),i=(0,o.up)("CourseFile"),u=(0,o.up)("CourseHomework"),m=(0,o.up)("CourseExam"),p=(0,o.up)("CourseRollCall"),b=(0,o.up)("CoursePost");return(0,o.wg)(),(0,o.iD)(o.HY,null,["learnCourse"===e.courseCurrentBlock?((0,o.wg)(),(0,o.j4)(l,{key:0})):(0,o.kq)("",!0),"logonRecord"===e.courseCurrentBlock?((0,o.wg)(),(0,o.j4)(c,{key:1})):(0,o.kq)("",!0),"discuss"===e.courseCurrentBlock?((0,o.wg)(),(0,o.j4)(d,{key:2})):(0,o.kq)("",!0),"file"===e.courseCurrentBlock?((0,o.wg)(),(0,o.j4)(i,{key:3})):(0,o.kq)("",!0),"homework"===e.courseCurrentBlock?((0,o.wg)(),(0,o.j4)(u,{key:4})):(0,o.kq)("",!0),"exam"===e.courseCurrentBlock?((0,o.wg)(),(0,o.j4)(m,{key:5})):(0,o.kq)("",!0),"rollCall"===e.courseCurrentBlock?((0,o.wg)(),(0,o.j4)(p,{key:6})):(0,o.kq)("",!0),"post"===e.courseCurrentBlock?((0,o.wg)(),(0,o.j4)(b,{key:7})):(0,o.kq)("",!0)],64)}function Lt(e,t,n,o,r,a){return"學習歷程"}var jt={components:{},data(){return{}},watch:{},methods:{},mounted(){}};const Pt=(0,y.Z)(jt,[["render",Lt]]);var Nt=Pt;function Zt(e,t,n,o,r,a){return"登入紀錄"}var qt={components:{},data(){return{}},watch:{},methods:{},mounted(){}};const Ht=(0,y.Z)(qt,[["render",Zt]]);var It=Ht;function Tt(e,t,n,o,r,a){return"討論"}var $t={components:{},data(){return{}},watch:{},methods:{},mounted(){}};const Wt=(0,y.Z)($t,[["render",Tt]]);var Kt=Wt;function zt(e,t,n,o,r,a){return"檔案"}var Ft={components:{},data(){return{}},watch:{},methods:{},mounted(){}};const Yt=(0,y.Z)(Ft,[["render",zt]]);var Ut=Yt;function Rt(e,t,n,o,r,a){return"作業"}var Xt={components:{},data(){return{}},watch:{},methods:{},mounted(){}};const Gt=(0,y.Z)(Xt,[["render",Rt]]);var St=Gt;function Vt(e,t,n,o,r,a){return"考試"}var Jt={components:{},data(){return{}},watch:{},methods:{},mounted(){}};const Qt=(0,y.Z)(Jt,[["render",Vt]]);var en=Qt;function tn(e,t,n,o,r,a){return"點名"}var nn={components:{},data(){return{}},watch:{},methods:{},mounted(){}};const on=(0,y.Z)(nn,[["render",tn]]);var rn=on;function an(e,t,n,o,r,a){return"公告"}var sn={components:{},data(){return{}},watch:{},methods:{},mounted(){}};const ln=(0,y.Z)(sn,[["render",an]]);var cn=ln,dn={components:{CourseLearnCourse:Nt,CourseLogonRecord:It,CourseDiscuss:Kt,CourseFile:Ut,CourseHomework:St,CourseExam:en,CourseRollCall:rn,CoursePost:cn},computed:{...(0,a.rn)(["courseCurrentBlock"])},data(){return{}},watch:{},methods:{},mounted(){}};const un=(0,y.Z)(dn,[["render",Ot]]);var mn=un;const pn={class:"d-flex bg-blue-light border list-unstyled"},bn={class:"hover-border-bottom"},xn=(0,o._)("span",null,"回考試列表",-1),hn=[xn],vn=["onClick"];function kn(e,t,n,r,a,l){return(0,o.wg)(),(0,o.iD)("ul",pn,[(0,o._)("li",bn,[(0,o._)("a",{href:"javascript:;",class:"text-decoration-none d-inline-block px-4 pe-1 py-1",onClick:t[0]||(t[0]=(0,E.iM)(((...e)=>l.backPage&&l.backPage(...e)),["prevent"]))},hn)]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.fnBtnList,((t,n,r)=>((0,o.wg)(),(0,o.iD)("li",{class:"hover-border-bottom",key:`fnBtn${r}`},[(0,o._)("a",{href:"javascript:;",class:(0,s.C_)(["text-decoration-none d-inline-block px-4 pe-1 py-1",{currentBlock:n===e.courseCurrentBlock}]),onClick:t=>e.$store.commit("COURSE_BLOCK",n)},[(0,o._)("span",null,(0,s.zw)(t),1)],10,vn)])))),128))])}var _n={components:{},computed:{...(0,a.rn)(["examTableCurrentBlock","addExamCurrentBlock","courseCurrentBlock"])},data(){return{fnBtnList:{learnCourse:"學習歷程",logonRecord:"登入紀錄",discuss:"討論",file:"檔案",homework:"作業",exam:"考試",rollCall:"點名",post:"公告"}}},watch:{},methods:{backPage(){let e="EXAM_MANAGE_BLOCK";"table"!==this.addExamCurrentBlock&&(e="ADD_EXAM_BLOCK"),this.$store.commit(e,"table")}},mounted(){}};const gn=(0,y.Z)(_n,[["render",kn]]);var yn=gn;const wn={class:"bg-blue-light border p-2"},fn=(0,o.Uk)(" 排序： "),Cn=["value"];function En(e,t,n,r,a,l){return(0,o.wg)(),(0,o.iD)("div",wn,[fn,(0,o._)("select",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.selectList[e.courseCurrentBlock],(e=>((0,o.wg)(),(0,o.iD)("option",{value:e,key:e},(0,s.zw)(e),9,Cn)))),128))])])}var Dn={components:{},computed:{...(0,a.rn)(["courseCurrentBlock"])},data(){return{selectList:{learnCourse:["系級","學號","姓名","檔案(下載)","作業(缺繳)","考試(補考)","出席異常","未讀取","分組"],logonRecord:["系級","學號","姓名","使用時數","最後登入系統時間","排名","分組"],discuss:["系級","學號","姓名","分組"],file:["系級","學號","姓名","已下載","未下載","分組"],homework:["系級","學號","姓名","分組"],exam:["系級","學號","姓名","分組"],rollCall:["系級","學號","姓名","分組"],post:["系級","學號","姓名","讀取","未讀取","分組"]}}},watch:{},methods:{},mounted(){}};const Bn=(0,y.Z)(Dn,[["render",En]]);var An=Bn;const Mn={class:"d-flex bg-blue-light border list-unstyled"},On={class:"border-dotted-end hover-border-bottom"},Ln=(0,o._)("span",null,"新增考試",-1),jn=[Ln],Pn=(0,o._)("li",{class:"border-dotted-end hover-border-bottom"},[(0,o._)("a",{href:"javascript:;",class:"text-decoration-none d-inline-block px-4 pe-1 py-1"},[(0,o._)("span",null,"命題紙下載")])],-1),Nn={class:"border-dotted-end hover-border-bottom"},Zn=(0,o._)("span",null,"索引管理",-1),qn=[Zn],Hn=(0,o._)("li",{class:"border-dotted-end hover-border-bottom"},[(0,o._)("a",{href:"javascript:;",class:"text-decoration-none d-inline-block px-4 pe-1 py-1"},[(0,o._)("span",null,"匯入英文上機期中考")])],-1),In=(0,o._)("li",{class:"border-dotted-end hover-border-bottom"},[(0,o._)("a",{href:"javascript:;",class:"text-decoration-none d-inline-block px-4 pe-1 py-1"},[(0,o._)("span",null,"匯入英文上機期末考")])],-1),Tn={class:"border-dotted-end hover-border-bottom"},$n=(0,o._)("span",null,"歷程",-1),Wn=[$n];function Kn(e,t,n,r,a,s){return(0,o.wg)(),(0,o.iD)("ul",Mn,[(0,o._)("li",On,[(0,o._)("a",{href:"javascript:;",class:"text-decoration-none d-inline-block px-4 pe-1 py-1",onClick:t[0]||(t[0]=(0,E.iM)((t=>e.$store.commit("EXAM_MANAGE_BLOCK","addExam")),["prevent"]))},jn)]),Pn,(0,o._)("li",Nn,[(0,o._)("a",{href:"javascript:;",class:"text-decoration-none d-inline-block px-4 pe-1 py-1",onClick:t[1]||(t[1]=(0,E.iM)((t=>e.$store.commit("EXAM_MANAGE_BLOCK","indexManage")),["prevent"]))},qn)]),Hn,In,(0,o._)("li",Tn,[(0,o._)("a",{href:"javascript:;",class:"text-decoration-none d-inline-block px-4 pe-1 py-1",onClick:t[2]||(t[2]=(0,E.iM)((t=>e.$store.commit("EXAM_MANAGE_BLOCK","course")),["prevent"]))},Wn)])])}var zn={components:{},data(){return{}},watch:{},methods:{},mounted(){}};const Fn=(0,y.Z)(zn,[["render",Kn]]);var Yn=Fn;const Un={class:"d-flex bg-blue-light border list-unstyled"},Rn={class:"border-dotted-end hover-border-bottom"},Xn=(0,o._)("span",null,"回考試列表",-1),Gn=[Xn],Sn={key:0,class:"border-dotted-end hover-border-bottom"},Vn=(0,o._)("a",{href:"javascript:;",class:"text-decoration-none d-inline-block px-4 pe-1 py-1"},[(0,o._)("span",null,"成績輸入")],-1),Jn=[Vn];function Qn(e,t,n,r,a,s){return(0,o.wg)(),(0,o.iD)("ul",Un,[(0,o._)("li",Rn,[(0,o._)("a",{href:"javascript:;",class:"text-decoration-none d-inline-block px-4 pe-1 py-1",onClick:t[0]||(t[0]=(0,E.iM)(((...e)=>s.backPage&&s.backPage(...e)),["prevent"]))},Gn)]),"answerOnline"===e.addExamCurrentBlock?((0,o.wg)(),(0,o.iD)("li",Sn,Jn)):(0,o.kq)("",!0)])}var eo={components:{},computed:{...(0,a.rn)(["examTableCurrentBlock","addExamCurrentBlock","aEAnsOnlineCurrentMenu"])},data(){return{}},watch:{},methods:{backPage(){let e="EXAM_MANAGE_BLOCK";if("table"!==this.addExamCurrentBlock){e="ADD_EXAM_BLOCK";const t="answerOnline"===this.addExamCurrentBlock,n="examEdit"===this.aEAnsOnlineCurrentMenu;t&&!n&&this.$store.commit("AE_EXAM_CURRENTBLOCK","examEdit")}this.$store.commit(e,"table")}},mounted(){}};const to=(0,y.Z)(eo,[["render",Qn]]);var no=to,oo={components:{ExamTable:f,AddExamWrap:kt,IndexManage:Mt,CourseWrap:mn,FnListTable:Yn,FnListCourse:yn,FnListOrder:An,FnListComeBack:no},computed:{...(0,a.rn)(["examTableCurrentBlock"])},data(){return{showBlockList:{},isLoading:!1}},mounted(){}};const ro=(0,y.Z)(oo,[["render",r]]);var ao=ro}}]);
//# sourceMappingURL=762.7b143ac2.js.map