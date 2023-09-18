"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4669],{4669:(I,v,o)=>{o.r(v),o.d(v,{BusinessTypeModule:()=>n});var h=o(6895),r=o(529),_=o(4006),T=o(2216),e=o(191),f=o(3306),b=o(3093),g=o(3196),u=o(5861),t=o(6738),C=o(5851),A=o(7696),O=o(667),E=o(323);let M=(()=>{class i{constructor(s,c,p,y){this.navCtrl=s,this.contactService=c,this.staffService=p,this.analyticsService=y,this.params=null,this.isNew=!0,this.fromSearch=!1,this.saveDisabled=!1,this.onKeyPress=m=>{!m.target||"body"!==m.target.localName||("s"===m.key||"S"===m.key)&&this.save()}}ionViewDidEnter(){this.navCtrl.addEventListener("keyup",this.onKeyPress)}ionViewWillLeave(){this.navCtrl.removeEventListener("keyup",this.onKeyPress)}ionViewWillEnter(){var s=this;return(0,u.Z)(function*(){yield s.analyticsService.setCurrentScreen("business-type-add")})()}ngOnInit(){var s=this;return(0,u.Z)(function*(){if(s.businessType={},s.params=s.navCtrl.getParams(s.params),s.fromSearch=s.params&&s.params.fromSearch,s.params&&s.params.id&&s.params.id>0){const c=s.params.id;s.isNew=!1;const p=yield s.navCtrl.loading();s.contactService.getBusinessType(c).then(function(){var y=(0,u.Z)(function*(m){yield p.dismiss(),s.businessType=m});return function(m){return y.apply(this,arguments)}}())}})()}save(){var s=this;return(0,u.Z)(function*(){const c=yield s.navCtrl.loading();s.saveDisabled=!0,s.contactService.saveBusinessType(s.businessType).then((0,u.Z)(function*(){s.analyticsService.logEvent("save-business-type-success"),yield c.dismiss(),s.exitPage()}))})()}dismiss(){var s=this;return(0,u.Z)(function*(){s.fromSearch?yield s.navCtrl.pop():yield s.navCtrl.popOnly()})()}exitPage(){var s=this;return(0,u.Z)(function*(){s.fromSearch?yield s.navCtrl.pop():yield s.navCtrl.popOnly(),s.navCtrl.publish("reloadBusinessTypeList"),s.navCtrl.publish("reloadBusinessType",s.businessType)})()}}return i.\u0275fac=function(s){return new(s||i)(t.Y36(C.G),t.Y36(A.y),t.Y36(O.x),t.Y36(E.y))},i.\u0275cmp=t.Xpm({type:i,selectors:[["business-type-add"]],decls:22,vars:16,consts:[["slot","start"],["ion-button","",3,"click"],["name","close"],["slot","end"],["color","primary",3,"disabled","click"],["name","checkmark"],["position","stacked","color","primary"],["clearInput","","type","text",3,"ngModel","ngModelChange"]],template:function(s,c){1&s&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0)(3,"ion-button",1),t.NdJ("click",function(){return c.dismiss()}),t._UZ(4,"ion-icon",2),t._uU(5),t.ALo(6,"translate"),t.qZA()(),t.TgZ(7,"ion-title"),t._uU(8),t.ALo(9,"translate"),t.qZA(),t.TgZ(10,"ion-buttons",3)(11,"ion-button",4),t.NdJ("click",function(){return c.save()}),t._UZ(12,"ion-icon",5),t._uU(13),t.ALo(14,"translate"),t.qZA()()()(),t.TgZ(15,"ion-content")(16,"ion-list")(17,"ion-item")(18,"ion-label",6),t._uU(19),t.ALo(20,"translate"),t.qZA(),t.TgZ(21,"ion-input",7),t.NdJ("ngModelChange",function(y){return c.businessType.title=y}),t.qZA()()()()),2&s&&(t.xp6(5),t.hij(" \xa0",t.lcZ(6,8,"common.cancel")," "),t.xp6(3),t.Oqu(t.lcZ(9,10,"contact-add.business-type")),t.xp6(3),t.Q6J("disabled",c.saveDisabled),t.xp6(2),t.hij(" ",t.lcZ(14,12,"action.save")," "),t.xp6(2),t.Akn(c.navCtrl.hasAds()?"--padding-bottom: 60px":""),t.xp6(4),t.Oqu(t.lcZ(20,14,"contact-add.business-type-title")),t.xp6(2),t.Q6J("ngModel",c.businessType.title))},dependencies:[_.JJ,_.On,e.YG,e.Sm,e.W2,e.Gu,e.gu,e.pK,e.Ie,e.Q$,e.q_,e.wd,e.sr,e.j9,f.X$],encapsulation:2}),i})();var Z=o(2402);const l=[{path:"",component:(()=>{class i{constructor(){this.itemTemplate={h2:{field:"title"}},this.searchFields=["title"]}}return i.\u0275fac=function(s){return new(s||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["business-type"]],decls:1,vars:3,consts:[["table","business_type",3,"itemTemplate","searchFields","canEditItem"]],template:function(s,c){1&s&&t._UZ(0,"list",0),2&s&&t.Q6J("itemTemplate",c.itemTemplate)("searchFields",c.searchFields)("canEditItem",!0)},dependencies:[Z.n],encapsulation:2}),i})()},{path:"add",component:M}];let d=(()=>{class i{}return i.\u0275fac=function(s){return new(s||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[g.Bz.forChild(l),g.Bz]}),i})(),n=(()=>{class i{}return i.\u0275fac=function(s){return new(s||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[h.ez,_.u5,e.Pc,b.m,T.uH,d,f.aw.forChild({loader:{provide:f.Zw,useFactory:b.x,deps:[r.eN]}})]}),i})()},2402:(I,v,o)=>{o.d(v,{n:()=>B});var h=o(5861),r=o(191),_=o(9854),T=o(971),e=o(6738),f=o(5851),b=o(667),g=o(323),u=o(6895),t=o(3306);const C=["template"];function A(l,d){1&l&&e._UZ(0,"ion-back-button",11)}function O(l,d){if(1&l){const n=e.EpF();e.TgZ(0,"ion-button",12),e.NdJ("click",function(){e.CHM(n);const a=e.oxw(2);return e.KtG(a.dismiss())}),e._UZ(1,"ion-icon",13),e.qZA()}}function E(l,d){1&l&&e._UZ(0,"ion-menu-button",14)}function M(l,d){if(1&l){const n=e.EpF();e.TgZ(0,"ion-button",7),e.NdJ("click",function(){e.CHM(n);const a=e.oxw(2);return e.KtG(a.navCtrl.home())}),e._UZ(1,"ion-icon",15),e.qZA()}}function Z(l,d){if(1&l){const n=e.EpF();e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",1),e.YNc(3,A,1,0,"ion-back-button",2),e.YNc(4,O,2,0,"ion-button",3),e.YNc(5,E,1,0,"ion-menu-button",4),e.YNc(6,M,2,0,"ion-button",5),e.qZA(),e.TgZ(7,"ion-title"),e._uU(8),e.ALo(9,"translate"),e.qZA(),e.TgZ(10,"ion-buttons",6)(11,"ion-button",7),e.NdJ("click",function(){e.CHM(n);const a=e.oxw();return e.KtG(a.openAdd())}),e._UZ(12,"ion-icon",8),e.qZA()()()(),e.TgZ(13,"ion-content")(14,"div",9,10),e.NdJ("scrollToTop",function(){e.CHM(n);const a=e.oxw();return e.KtG(a.scrollToTop())}),e.qZA()()}if(2&l){const n=e.oxw();e.xp6(3),e.Q6J("ngIf",n.backOnly&&!n.searchMode),e.xp6(1),e.Q6J("ngIf",n.searchMode),e.xp6(1),e.Q6J("ngIf",!n.searchMode&&!n.backOnly),e.xp6(1),e.Q6J("ngIf",!n.searchMode&&!n.backOnly),e.xp6(2),e.Oqu(e.lcZ(9,25,n.tableKebab+".title")),e.xp6(4),e.Q6J("name",n.iconAdd),e.xp6(1),e.Akn(n.navCtrl.hasAds()?"--padding-bottom: 60px":""),e.xp6(1),e.Q6J("presentItemActions",n.presentItemActions)("orderBy",n.orderBy)("table",n.table)("iconAdd",n.iconAdd)("isQuickAdd",n.isQuickAdd)("callable",n.callable)("segmentValues",n.segmentValues)("itemTemplate",n.itemTemplate)("searchFields",n.searchFields)("defaultSegmentValue",n.defaultSegmentValue)("canEditItem",n.canEditItem)("filterObjects",n.filterObjects)("actions",n.actions)("canDeleteItem",n.canDeleteItem)("noDetail",n.noDetail)("deleteRelated",n.deleteRelated)("fetchObjectsFunc",n.fetchObjectsFunc)}}let B=(()=>{class l{constructor(n,i,a,s,c){this.navCtrl=n,this.staffService=i,this.viewContainerRef=a,this.analyticsService=s,this.viewCtrl=c,this.presentItemActions={},this.table="",this.orderBy="",this.orderOrient="asc",this.iconAdd="add",this.isQuickAdd=!1,this.callable=!1,this.segmentValues=[],this.itemTemplate={},this.searchFields=[],this.defaultSegmentValue="",this.canEditItem=!1,this.filterObjects={},this.actions=[],this.canDeleteItem=!1,this.noDetail=!1,this.backOnly=!1,this.tableKebab="",this.searchMode=!1}ionViewWillEnter(){var n=this;return(0,h.Z)(function*(){yield n.analyticsService.setCurrentScreen(n.table)})()}ngOnInit(){this.tableKebab=(0,_.ST)(this.table),this.params=this.navCtrl.getParams(this.params),this.params&&this.params.searchMode&&(this.searchMode=this.params.searchMode),this.params&&this.params.callback&&(this.callback=this.params.callback),this.viewContainerRef.createEmbeddedView(this.template)}openAdd(){this.navCtrl.navigateForward("/"+this.tableKebab+"/"+(this.isQuickAdd?"quick-add":"add"),{fromSearch:this.searchMode})}scrollToTop(){this.content.scrollToTop()}dismiss(){var n=this;return(0,h.Z)(function*(){if(n.callback)return n.callback(null),void(yield n.navCtrl.back());n.viewCtrl.dismiss()})()}callReload(){var n=this;return(0,h.Z)(function*(){yield n.listOnlyComponent.reloadObjects()})()}}return l.\u0275fac=function(n){return new(n||l)(e.Y36(f.G),e.Y36(b.x),e.Y36(e.s_b),e.Y36(g.y),e.Y36(r.IN))},l.\u0275cmp=e.Xpm({type:l,selectors:[["list"],["","list",""]],viewQuery:function(n,i){if(1&n&&(e.Gf(C,7),e.Gf(r.W2,5),e.Gf(T.s,5)),2&n){let a;e.iGM(a=e.CRH())&&(i.template=a.first),e.iGM(a=e.CRH())&&(i.content=a.first),e.iGM(a=e.CRH())&&(i.listOnlyComponent=a.first)}},inputs:{presentItemActions:"presentItemActions",table:"table",orderBy:"orderBy",orderOrient:"orderOrient",iconAdd:"iconAdd",isQuickAdd:"isQuickAdd",callable:"callable",segmentValues:"segmentValues",itemTemplate:"itemTemplate",searchFields:"searchFields",defaultSegmentValue:"defaultSegmentValue",canEditItem:"canEditItem",filterObjects:"filterObjects",actions:"actions",canDeleteItem:"canDeleteItem",noDetail:"noDetail",deleteRelated:"deleteRelated",backOnly:"backOnly",fetchObjectsFunc:"fetchObjectsFunc"},decls:2,vars:0,consts:[["template",""],["slot","start"],["defaultHref","/home",4,"ngIf"],[3,"click",4,"ngIf"],["menu","first",4,"ngIf"],["color","primary",3,"click",4,"ngIf"],["slot","end"],["color","primary",3,"click"],[3,"name"],["list-only","",3,"presentItemActions","orderBy","table","iconAdd","isQuickAdd","callable","segmentValues","itemTemplate","searchFields","defaultSegmentValue","canEditItem","filterObjects","actions","canDeleteItem","noDetail","deleteRelated","fetchObjectsFunc","scrollToTop"],["listOnlyComponent",""],["defaultHref","/home"],[3,"click"],["name","close"],["menu","first"],["name","home"]],template:function(n,i){1&n&&e.YNc(0,Z,16,27,"ng-template",null,0,e.W1O)},dependencies:[u.O5,r.oU,r.YG,r.Sm,r.W2,r.Gu,r.gu,r.fG,r.wd,r.sr,r.cs,T.s,t.X$],encapsulation:2}),l})()}}]);