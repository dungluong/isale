"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4156],{4156:(b,g,i)=>{i.r(g),i.d(g,{SurveyModule:()=>U});var v=i(6895),p=i(4006),s=i(191),d=i(3306),f=i(529),h=i(3196),c=i(5861),y=i(4987),e=i(6738),C=i(5851),Z=i(323),x=i(7411),A=i(5004);function k(t,u){if(1&t){const n=e.EpF();e.TgZ(0,"ion-item",13)(1,"ion-label",14),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"ion-checkbox",15),e.NdJ("ngModelChange",function(a){const r=e.CHM(n).$implicit;return e.KtG(r.isChecked=a)}),e.qZA()()}if(2&t){const n=u.$implicit;e.xp6(2),e.Oqu(e.lcZ(3,2,n.value)),e.xp6(2),e.Q6J("ngModel",n.isChecked)}}function T(t,u){if(1&t){const n=e.EpF();e.TgZ(0,"ion-item",13)(1,"ion-label",14),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"ion-checkbox",15),e.NdJ("ngModelChange",function(a){const r=e.CHM(n).$implicit;return e.KtG(r.isChecked=a)}),e.qZA()()}if(2&t){const n=u.$implicit;e.xp6(2),e.Oqu(e.lcZ(3,2,n.value)),e.xp6(2),e.Q6J("ngModel",n.isChecked)}}function _(t,u){if(1&t){const n=e.EpF();e.TgZ(0,"ion-item",13)(1,"ion-label",14),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"ion-checkbox",15),e.NdJ("ngModelChange",function(a){const r=e.CHM(n).$implicit;return e.KtG(r.isChecked=a)}),e.qZA()()}if(2&t){const n=u.$implicit;e.xp6(2),e.Oqu(e.lcZ(3,2,n.value)),e.xp6(2),e.Q6J("ngModel",n.isChecked)}}function S(t,u){1&t&&(e.TgZ(0,"div",16),e._UZ(1,"rate"),e.qZA())}const q=[{path:"",component:(()=>{class t{constructor(n,o,a,l){this.navCtrl=n,this.analyticsService=o,this.ticketService=a,this.translate=l,this.question1=[{isChecked:!1,value:"survey.feature-manage-received-note"},{isChecked:!1,value:"survey.feature-import-product-excel"},{isChecked:!1,value:"survey.feature-manage-debt"},{isChecked:!1,value:"survey.feature-export-sales-report"},{isChecked:!1,value:"survey.feature-view-sales-chart"},{isChecked:!1,value:"survey.print-order-to-printer"},{isChecked:!1,value:"survey.feature-manage-staff"},{isChecked:!1,value:"survey.feature-manage-category"},{isChecked:!1,value:"survey.feature-manage-point"},{isChecked:!1,value:"survey.feature-manage-wallet"},{isChecked:!1,value:"survey.feature-manage-table"},{isChecked:!1,value:"survey.feature-manage-calendar"}],this.question2=[{isChecked:!1,value:"survey.missing-feature"},{isChecked:!1,value:"survey.some-error-happened"},{isChecked:!1,value:"survey.ui-ux-is-not-good"}],this.question6=[{isChecked:!1,value:"survey.on-the-phone"},{isChecked:!1,value:"survey.on-the-tablet"},{isChecked:!1,value:"survey.on-the-pc"},{isChecked:!1,value:"survey.on-the-pos"},{isChecked:!1,value:"survey.connect-bluetooth-printer"},{isChecked:!1,value:"survey.connect-wifi-printer"},{isChecked:!1,value:"survey.scan-barcode-from-mobile"},{isChecked:!1,value:"survey.scan-barcode-from-scan-reader"}],this.saveDisabled=!1}ionViewWillEnter(){var n=this;return(0,c.Z)(function*(){yield n.analyticsService.setCurrentScreen("request-pro")})()}ngOnInit(){return(0,c.Z)(function*(){})()}save(){var n=this;return(0,c.Z)(function*(){const o=yield n.navCtrl.loading(),a={feature:n.question1.filter(r=>r.isChecked).map(r=>r.value.replace("survey.","").replace("feature-manage-","").replace("feature-","")),issues:n.question2.filter(r=>r.isChecked).map(r=>r.value),need:n.featuresNeed,error:n.errorDescription,enhance:n.uiUxEnhance,devices:n.question6.filter(r=>r.isChecked).map(r=>r.value.replace("survey.","").replace("on-the-",""))},l=new y.S;l.subject="Survey",l.content=JSON.stringify(a),n.ticketService.save(l).then((0,c.Z)(function*(){n.analyticsService.logEvent("survey-save-success"),yield o.dismiss();const r=n.translate.instant("survey.done");alert(r),n.exitPage()}))})()}exitPage(){var n=this;return(0,c.Z)(function*(){yield n.navCtrl.home()})()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(C.G),e.Y36(Z.y),e.Y36(x.w),e.Y36(d.sK))},t.\u0275cmp=e.Xpm({type:t,selectors:[["survey"]],decls:58,vars:40,consts:[["slot","start"],["menu","first"],["color","primary",3,"click"],["name","home"],["slot","end"],["size","large","color","success",3,"disabled","click"],["name","checkmark"],[1,"ion-padding"],[2,"padding-top","0","margin-top","0"],[2,"margin-bottom","3px"],["class","ion-no-padding",4,"ngFor","ngForOf"],["rows","3",2,"background-color","#efefef","border-radius","5px","color","#000","padding-left","5px",3,"ngModel","ngModelChange"],["style","margin-top: 10px",4,"ngIf"],[1,"ion-no-padding"],[1,"ion-text-wrap"],["slot","end",3,"ngModel","ngModelChange"],[2,"margin-top","10px"]],template:function(n,o){1&n&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),e._UZ(3,"ion-menu-button",1),e.TgZ(4,"ion-button",2),e.NdJ("click",function(){return o.navCtrl.home()}),e._UZ(5,"ion-icon",3),e.qZA()(),e.TgZ(6,"ion-title"),e._uU(7),e.ALo(8,"translate"),e.qZA(),e.TgZ(9,"ion-buttons",4)(10,"ion-button",5),e.NdJ("click",function(){return o.save()}),e._UZ(11,"ion-icon",6),e._uU(12),e.ALo(13,"translate"),e.qZA()()()(),e.TgZ(14,"ion-content")(15,"div",7)(16,"p",8),e._uU(17),e.ALo(18,"translate"),e.qZA(),e.TgZ(19,"p",9)(20,"strong"),e._uU(21),e.ALo(22,"translate"),e.qZA()(),e.TgZ(23,"ion-list"),e.YNc(24,k,5,4,"ion-item",10),e.qZA(),e.TgZ(25,"p",9)(26,"strong"),e._uU(27),e.ALo(28,"translate"),e.qZA()(),e.TgZ(29,"ion-list"),e.YNc(30,T,5,4,"ion-item",10),e.qZA(),e.TgZ(31,"p",9)(32,"strong"),e._uU(33),e.ALo(34,"translate"),e.qZA()(),e.TgZ(35,"ion-textarea",11),e.NdJ("ngModelChange",function(l){return o.featuresNeed=l}),e.qZA(),e.TgZ(36,"p",9)(37,"strong"),e._uU(38),e.ALo(39,"translate"),e.qZA()(),e.TgZ(40,"ion-textarea",11),e.NdJ("ngModelChange",function(l){return o.errorDescription=l}),e.qZA(),e.TgZ(41,"p",9)(42,"strong"),e._uU(43),e.ALo(44,"translate"),e.qZA()(),e.TgZ(45,"ion-textarea",11),e.NdJ("ngModelChange",function(l){return o.uiUxEnhance=l}),e.qZA(),e.TgZ(46,"p",9)(47,"strong"),e._uU(48),e.ALo(49,"translate"),e.qZA()(),e.TgZ(50,"ion-list"),e.YNc(51,_,5,4,"ion-item",10),e.qZA(),e.TgZ(52,"p")(53,"strong")(54,"i"),e._uU(55),e.ALo(56,"translate"),e.qZA()()(),e.YNc(57,S,2,0,"div",12),e.qZA()()),2&n&&(e.xp6(7),e.Oqu(e.lcZ(8,20,"survey.title")),e.xp6(3),e.Q6J("disabled",o.saveDisabled),e.xp6(2),e.hij(" \xa0",e.lcZ(13,22,"action.save")," "),e.xp6(2),e.Akn(o.navCtrl.hasAds()?"--padding-bottom: 60px":""),e.xp6(3),e.Oqu(e.lcZ(18,24,"survey.description")),e.xp6(4),e.hij("1. ",e.lcZ(22,26,"survey.question-1"),""),e.xp6(3),e.Q6J("ngForOf",o.question1),e.xp6(3),e.hij("2. ",e.lcZ(28,28,"survey.question-2"),""),e.xp6(3),e.Q6J("ngForOf",o.question2),e.xp6(3),e.hij("3. ",e.lcZ(34,30,"survey.question-3"),""),e.xp6(2),e.Q6J("ngModel",o.featuresNeed),e.xp6(3),e.hij("4. ",e.lcZ(39,32,"survey.question-4"),""),e.xp6(2),e.Q6J("ngModel",o.errorDescription),e.xp6(3),e.hij("5. ",e.lcZ(44,34,"survey.question-5"),""),e.xp6(2),e.Q6J("ngModel",o.uiUxEnhance),e.xp6(3),e.hij("6. ",e.lcZ(49,36,"survey.question-6"),""),e.xp6(3),e.Q6J("ngForOf",o.question6),e.xp6(4),e.Oqu(e.lcZ(56,38,"survey.finish")),e.xp6(2),e.Q6J("ngIf",!o.navCtrl.isIosReview()))},dependencies:[v.sg,v.O5,p.JJ,p.On,s.YG,s.Sm,s.nz,s.W2,s.Gu,s.gu,s.Ie,s.Q$,s.q_,s.fG,s.g2,s.wd,s.sr,s.w,s.j9,A.T,d.X$],encapsulation:2}),t})()}];let M=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[h.Bz.forChild(q),h.Bz]}),t})();var m=i(3093),J=i(2216);let U=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[v.ez,p.u5,s.Pc,M,m.m,J.uH,d.aw.forChild({loader:{provide:d.Zw,useFactory:m.x,deps:[f.eN]}})]}),t})()}}]);