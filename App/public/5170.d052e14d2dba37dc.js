"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5170],{6668:(O,v,l)=>{l.r(v),l.d(v,{TimelyReportModule:()=>at});var p=l(6895),d=l(4006),r=l(191),m=l(3306),x=l(529),Z=l(3196),u=l(5861),h=l(5439),f=l(266),T=l(3989),g=l(4013),A=l(3363),_=l(1464),R=l(1914),I=l(6723),t=l(6738),L=l(5851),Q=l(4433),N=l(7488),b=l(4518),F=l(7060),U=l(323),M=l(4155);const E=["chart"];function w(o,s){if(1&o&&(t.TgZ(0,"p",8)(1,"span"),t._uU(2),t.ALo(3,"translate"),t.qZA()()),2&o){const e=t.oxw();t.xp6(2),t.AsE(" ",t.lcZ(3,2,"common.filter"),": ",e.filter," ")}}function k(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"ion-item")(1,"ion-label"),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"ion-select",21),t.NdJ("ngModelChange",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.barChartType=i)}),t.TgZ(5,"ion-select-option",22),t._uU(6),t.ALo(7,"translate"),t.qZA(),t.TgZ(8,"ion-select-option",23),t._uU(9),t.ALo(10,"translate"),t.qZA(),t.TgZ(11,"ion-select-option",24),t._uU(12),t.ALo(13,"translate"),t.qZA()()()}if(2&o){const e=t.oxw();t.xp6(2),t.Oqu(t.lcZ(3,5,"common.chart")),t.xp6(2),t.Q6J("ngModel",e.barChartType),t.xp6(2),t.Oqu(t.lcZ(7,7,"common.bar")),t.xp6(3),t.Oqu(t.lcZ(10,9,"common.pie")),t.xp6(3),t.Oqu(t.lcZ(13,11,"common.line"))}}function Y(o,s){if(1&o&&t._UZ(0,"canvas",25,26),2&o){const e=t.oxw();t.Q6J("hidden",e.isCapturing)("datasets",e.barChartData)("labels",e.barChartLabels)("options",e.barChartOptions)("legend",e.barChartLegend)("type",e.barChartType)}}const q=function(o,s,e){return[o,s,"symbol","1.0-2",e]};function P(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"ion-item-sliding")(1,"ion-item",27),t.NdJ("click",function(){const a=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.selectReport(a))}),t.TgZ(2,"ion-label",7)(3,"ion-text",10),t._uU(4),t.ALo(5,"currency"),t.qZA(),t.TgZ(6,"p"),t._uU(7),t.qZA()()()()}if(2&o){const e=s.$implicit,n=t.oxw();t.xp6(3),t.s9C("color",e.value>=0?"secondary":"danger"),t.xp6(1),t.AsE("",e.value>=0?"+":"","",t.G7q(5,4,t.kEZ(10,q,e.value,n.currency,n.translateService.currentLang)),""),t.xp6(3),t.Oqu(e.dateId)}}let G=(()=>{class o{constructor(e,n,i,a,c,C,y,lt,st){this.navCtrl=e,this.translateService=n,this.file=i,this.userService=a,this.reportService=c,this.actionSheetCtrl=C,this.alertCtrl=y,this.excelService=lt,this.analyticsService=st,this.params=null,this.isCapturing=!1,this.report=new f.y,this.timelyReports=[],this.totalDate=0,this.totalValue=0,this.dateType="",this.dateFrom="",this.dateTo="",this.filter="",this.currentMoment=h(),this.barChartOptions={scaleShowVerticalLines:!1,responsive:!0,bezierCurve:!1,onAnimationComplete:this.done},this.barChartLabels=[""],this.barChartType="line",this.barChartLegend=!0,this.barChartData=[{data:[0]}],this.isInChartMode=!1,this.isLoadingChart=!1,this.reload=()=>{this.userService.getAttr("current-currency").then(J=>{this.currency=J}),this.params=this.navCtrl.getParams(this.params),this.params&&this.params.id&&this.params.id>0?this.reportService.getCustomReport(this.params.id,"timely-report").then(D=>{!D||(this.report=D,this.doCalculate())}):this.params&&this.params.templateReport&&(this.report=this.params.templateReport,this.doCalculate())},this.navCtrl.unsubscribe("reloadTimelyReport",this.reload),this.navCtrl.subscribe("reloadTimelyReport",this.reload)}done(){}ionViewWillEnter(){var e=this;return(0,u.Z)(function*(){yield e.analyticsService.setCurrentScreen("timely-report-detail")})()}ngOnInit(){this.reload()}doCalculate(){this.isLoadingChart=!0,this.reportService.calculateTimelyReport(this.report,this.currentMoment).then(e=>{this.timelyReports=e.reports,this.totalDate=e.totalItem,this.totalValue=e.totalValue,this.dateType=e.dateType,this.dateFrom=e.dateFrom,this.dateTo=e.dateTo,this.filter=e.filter,this.showChart(),this.isInChartMode=!0,this.isLoadingChart=!1})}contactImageOrPlaceholder(e){return null!==e.avatarUrl&&""!==e.avatarUrl?e.avatarUrl:"assets/person-placeholder.jpg"}edit(){this.navCtrl.push("/timely-report/add",{id:1})}presentActionSheet(){var e=this;return(0,u.Z)(function*(){yield(yield e.actionSheetCtrl.create({header:e.translateService.instant("action.action"),buttons:[{text:e.translateService.instant("report-detail.delete-report"),role:"destructive",handler:()=>{e.deleteReport()}},{text:e.translateService.instant("report-detail.share"),role:"destructive",handler:()=>{e.shareReport()}},{text:e.translateService.instant("export.export-to-excel"),handler:()=>{e.exportExcel()}},{text:e.translateService.instant("common.cancel"),role:"cancel",handler:()=>{}}]})).present()})()}deleteReport(){var e=this;return(0,u.Z)(function*(){yield(yield e.alertCtrl.create({header:e.translateService.instant("common.confirm"),message:e.translateService.instant("report-detail.delete-alert"),buttons:[{text:e.translateService.instant("common.agree"),handler:()=>{e.reportService.deleteReport(e.report).then((0,u.Z)(function*(){e.analyticsService.logEvent("report-detail-delete-success"),e.navCtrl.publish("reloadReportList"),e.navCtrl.pop()}))}},{text:e.translateService.instant("common.cancel"),handler:()=>{}}]})).present()})()}showChart(){const e={label:"",data:[]},n=[];for(const i of this.timelyReports)n.push(i.dateId),e.data.push(i.value);this.barChartLabels=n,this.barChartData=[e]}enableChart(){this.isInChartMode=!this.isInChartMode}selectReport(e){this.navCtrl.push("/trade/daily",{date:e.dateId})}previousMoment(){this.currentMoment=h(this.currentMoment).subtract(1,R.C.dateTypeToDuration(this.report.dateType)),this.doCalculate()}nextMoment(){this.currentMoment=h(this.currentMoment).add(1,R.C.dateTypeToDuration(this.report.dateType)),this.doCalculate()}viewTrend(){const e=new T.k;e.dataType=3,e.dateType=this.report.dateType,3!=e.dateType&&4!=e.dateType&&(e.dateFrom=h().startOf("year").format(R.C.getDbFormat())),e.dateTo=h().endOf("day").format(R.C.getDbFormat()),e.dataSources=JSON.stringify([this.report]),this.reportService.calculateChart(e).then(n=>{this.navCtrl.push("/chart/detail",{chart:e,data:n})})}shareReport(){this.isCapturing=!0,this.chartImg=this.chart.nativeElement.toDataURL(),this.userService.shareScreenshot().then(()=>{this.isCapturing=!1}).catch(()=>{this.isCapturing=!1})}exportExcel(){var e=this;const n=new g.m;let i=new A._;i.addColumn(new _.d(this.translateService.instant("export.date"))),i.addColumn(new _.d(this.translateService.instant("export.money"))),i.addColumn(new _.d(this.translateService.instant("export.unit"))),n.addRow(i);for(const c of this.timelyReports)i=new A._,i.addColumn(new _.d(c.dateId)),i.addColumn(new _.d(c.value,"number")),i.addColumn(new _.d(this.currency)),n.addRow(i);const a="daily-report-"+this.report.id+"-"+I.W.getCurrentDate()+".xlsx";this.excelService.exportExcel(n,a).then(function(){var c=(0,u.Z)(function*(C){e.navCtrl.isNotCordova()||(yield(yield e.alertCtrl.create({header:e.translateService.instant("common.confirm"),message:e.translateService.instant("report.file-save-alert")+e.file.externalDataDirectory+a,buttons:[{text:e.translateService.instant("common.agree"),handler:()=>{}}]})).present(),e.userService.shareFile(null,C))});return function(C){return c.apply(this,arguments)}}())}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(L.G),t.Y36(m.sK),t.Y36(Q.$),t.Y36(N.K),t.Y36(b.r),t.Y36(r.BX),t.Y36(r.Br),t.Y36(F.x),t.Y36(U.y))},o.\u0275cmp=t.Xpm({type:o,selectors:[["timely-report-detail"]],viewQuery:function(e,n){if(1&e&&t.Gf(E,5),2&e){let i;t.iGM(i=t.CRH())&&(n.chart=i.first)}},decls:50,vars:52,consts:[["slot","start"],["defaultHref","/home"],["slot","end"],["color","primary",3,"click"],["name","create"],["name","stats-chart"],["name","ellipsis-vertical"],[1,"ion-text-wrap"],[2,"padding-top","5px"],["style","padding-top: 5px;",4,"ngIf"],[3,"color"],["fill","outline",3,"disabled","click"],["name","chevron-back"],["name","chevron-forward"],["fill","outline",3,"click"],["name","trending-up"],[4,"ngIf"],[3,"hidden"],[3,"hidden","src"],["baseChart","",3,"hidden","datasets","labels","options","legend","type",4,"ngIf"],[4,"ngFor","ngForOf"],[3,"ngModel","ngModelChange"],["value","bar"],["value","pie"],["value","line"],["baseChart","",3,"hidden","datasets","labels","options","legend","type"],["chart",""],[3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),t._UZ(3,"ion-back-button",1),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5),t.ALo(6,"translate"),t.qZA(),t.TgZ(7,"ion-buttons",2)(8,"ion-button",3),t.NdJ("click",function(){return n.edit()}),t._UZ(9,"ion-icon",4),t.qZA(),t.TgZ(10,"ion-button",3),t.NdJ("click",function(){return n.enableChart()}),t._UZ(11,"ion-icon",5),t.qZA(),t.TgZ(12,"ion-button",3),t.NdJ("click",function(){return n.presentActionSheet()}),t._UZ(13,"ion-icon",6),t.qZA()()()(),t.TgZ(14,"ion-content")(15,"ion-list")(16,"ion-item")(17,"ion-label",7)(18,"ion-text",8)(19,"span"),t._uU(20),t.ALo(21,"translate"),t.ALo(22,"translate"),t.qZA()(),t._UZ(23,"br"),t.YNc(24,w,4,4,"p",9),t.TgZ(25,"p",8)(26,"ion-text",10),t._uU(27),t.ALo(28,"translate"),t.ALo(29,"currency"),t.qZA(),t._uU(30),t.ALo(31,"translate"),t.qZA()()(),t.TgZ(32,"ion-item")(33,"ion-button",11),t.NdJ("click",function(){return n.previousMoment()}),t._UZ(34,"ion-icon",12),t._uU(35),t.ALo(36,"translate"),t.qZA(),t.TgZ(37,"ion-button",11),t.NdJ("click",function(){return n.nextMoment()}),t._uU(38),t.ALo(39,"translate"),t._UZ(40,"ion-icon",13),t.qZA(),t.TgZ(41,"ion-button",14),t.NdJ("click",function(){return n.viewTrend()}),t._UZ(42,"ion-icon",15),t._uU(43),t.ALo(44,"translate"),t.qZA()(),t.YNc(45,k,14,13,"ion-item",16),t.TgZ(46,"div",17),t._UZ(47,"img",18),t.YNc(48,Y,2,6,"canvas",19),t.qZA(),t.YNc(49,P,8,14,"ion-item-sliding",20),t.qZA()()),2&e&&(t.xp6(5),t.Oqu(t.lcZ(6,26,"report-detail.title")),t.xp6(9),t.Akn(n.navCtrl.hasAds()?"--padding-bottom: 60px":""),t.xp6(6),t.xDo(" ",n.dateType," (",t.lcZ(21,28,"common.from")," ",n.dateFrom," ",t.lcZ(22,30,"common.to")," ",n.dateTo,") "),t.xp6(4),t.Q6J("ngIf",n.filter),t.xp6(2),t.s9C("color",n.totalValue>=0?"secondary":"danger"),t.xp6(1),t.lnq(" ",t.lcZ(28,32,"common.total"),": ",n.totalValue>=0?"+":"","",t.G7q(29,34,t.kEZ(48,q,n.totalValue,n.currency,n.translateService.currentLang))," "),t.xp6(3),t.AsE(" / ",n.totalDate," ",t.lcZ(31,40,"report-detail.dates"),". "),t.xp6(3),t.Q6J("disabled",n.isLoadingChart),t.xp6(2),t.hij("\xa0 ",t.lcZ(36,42,"report-detail.pre")," "),t.xp6(2),t.Q6J("disabled",n.isLoadingChart),t.xp6(1),t.hij(" ",t.lcZ(39,44,"report-detail.next"),"\xa0 "),t.xp6(5),t.hij(" ",t.lcZ(44,46,"report-detail.view-trend")," "),t.xp6(2),t.Q6J("ngIf",n.isInChartMode),t.xp6(1),t.Q6J("hidden",!n.isInChartMode),t.xp6(1),t.Q6J("hidden",!n.isCapturing)("src",n.chartImg,t.LSH),t.xp6(1),t.Q6J("ngIf",!n.isLoadingChart),t.xp6(1),t.Q6J("ngForOf",n.timelyReports))},dependencies:[p.sg,p.O5,d.JJ,d.On,r.oU,r.YG,r.Sm,r.W2,r.Gu,r.gu,r.Ie,r.td,r.Q$,r.q_,r.t9,r.n0,r.yW,r.wd,r.sr,r.QI,r.cs,M.jh,p.H9,m.X$],encapsulation:2}),o})();var K=l(7696),j=l(8007);function H(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"date-item",12),t.NdJ("dateChange",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.report.dateFrom=i)}),t.ALo(1,"translate"),t.qZA()}if(2&o){const e=t.oxw();t.Q6J("date",e.report.dateFrom)("label",t.lcZ(1,2,"report-category-add.start-date"))}}function B(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"date-item",13),t.NdJ("dateChange",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.report.dateTo=i)}),t.ALo(1,"translate"),t.qZA()}if(2&o){const e=t.oxw();t.Q6J("date",e.report.dateTo)("label",t.lcZ(1,2,"report-category-add.end-date"))}}function W(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"ion-item"),t._uU(1),t.ALo(2,"translate"),t.TgZ(3,"ion-button",14),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.showSearchContact())}),t._UZ(4,"ion-icon",15),t._uU(5),t.ALo(6,"translate"),t.qZA()()}2&o&&(t.xp6(1),t.hij(" ",t.lcZ(2,2,"report-add.list"),": "),t.xp6(4),t.hij(" ",t.lcZ(6,4,"report-add.add")," "))}function $(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"ion-item")(1,"span"),t._uU(2),t.qZA(),t.TgZ(3,"ion-button",14),t.NdJ("click",function(){const a=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.removeSelectedContact(a))}),t._UZ(4,"ion-icon",16),t._uU(5),t.ALo(6,"translate"),t.qZA()()}if(2&o){const e=s.$implicit;t.xp6(2),t.Oqu(e.fullName),t.xp6(3),t.hij(" ",t.lcZ(6,2,"report-add.remove")," ")}}function V(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"ion-item"),t._uU(1),t.ALo(2,"translate"),t.TgZ(3,"ion-button",14),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.showSearchContact(!1))}),t._UZ(4,"ion-icon",15),t._uU(5),t.ALo(6,"translate"),t.qZA()()}2&o&&(t.xp6(1),t.hij(" ",t.lcZ(2,2,"report-add.list"),": "),t.xp6(4),t.hij(" ",t.lcZ(6,4,"report-add.add")," "))}function X(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"ion-item")(1,"span"),t._uU(2),t.qZA(),t.TgZ(3,"ion-button",14),t.NdJ("click",function(){const a=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.removeIgnoredContact(a))}),t._UZ(4,"ion-icon",16),t._uU(5),t.ALo(6,"translate"),t.qZA()()}if(2&o){const e=s.$implicit;t.xp6(2),t.Oqu(e.fullName),t.xp6(3),t.hij(" ",t.lcZ(6,2,"report-add.remove")," ")}}function z(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"ion-item")(1,"ion-label",5),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"ion-input",17),t.NdJ("ngModelChange",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.report.ageFrom=i)}),t.ALo(5,"translate"),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(2),t.Oqu(t.lcZ(3,3,"report-add.from-year")),t.xp6(2),t.s9C("placeholder",t.lcZ(5,5,"report-add.enter-from-year")),t.Q6J("ngModel",e.report.ageFrom)}}function tt(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"ion-item")(1,"ion-label",5),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"ion-input",17),t.NdJ("ngModelChange",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.report.ageTo=i)}),t.ALo(5,"translate"),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(2),t.Oqu(t.lcZ(3,3,"report-add.to-year")),t.xp6(2),t.s9C("placeholder",t.lcZ(5,5,"report-add.enter-to-year")),t.Q6J("ngModel",e.report.ageTo)}}function et(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"ion-item")(1,"ion-label",5),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"ion-input",17),t.NdJ("ngModelChange",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.report.ageFrom=i)}),t.ALo(5,"translate"),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(2),t.Oqu(t.lcZ(3,3,"report-add.from-age")),t.xp6(2),t.s9C("placeholder",t.lcZ(5,5,"report-add.enter-from-age")),t.Q6J("ngModel",e.report.ageFrom)}}function nt(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"ion-item")(1,"ion-label",5),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"ion-input",17),t.NdJ("ngModelChange",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.report.ageTo=i)}),t.ALo(5,"translate"),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(2),t.Oqu(t.lcZ(3,3,"report-add.to-age")),t.xp6(2),t.s9C("placeholder",t.lcZ(5,5,"report-add.enter-to-year")),t.Q6J("ngModel",e.report.ageTo)}}const ot=[{path:"detail",component:G},{path:"add",component:(()=>{class o{constructor(e,n,i,a,c,C){this.navCtrl=e,this.modalCtrl=n,this.reportService=i,this.contactService=a,this.alertCtrl=c,this.analyticsService=C,this.params=null,this.report=new f.y,this.selectedContacts=[],this.ignoredContacts=[]}ionViewWillEnter(){var e=this;return(0,u.Z)(function*(){yield e.analyticsService.setCurrentScreen("timely-report-add")})()}ngOnInit(){let e=0;this.params=this.navCtrl.getParams(this.params),this.params&&this.params.id&&(e=this.params.id),e&&e>0&&this.reportService.getCustomReport(e,"timely-report").then(n=>{!n||(this.report=n,n.contactListCustom&&""!==n.contactListCustom&&(this.selectedContacts=JSON.parse(n.contactListCustom)),n.ignoredContacts&&""!==n.ignoredContacts&&(this.ignoredContacts=JSON.parse(n.ignoredContacts)))})}save(){var e=this;this.reportService.saveCustomReport(this.report,"timely-report").then(function(){var n=(0,u.Z)(function*(i){e.analyticsService.logEvent("timely-report-add-save-success"),e.report.id=i,e.exitPage()});return function(i){return n.apply(this,arguments)}}())}exitPage(){var e=this;return(0,u.Z)(function*(){yield e.navCtrl.popOnly(),(!e.params||!e.params.id)&&(yield e.navCtrl.push("/timely-report/detail",{id:e.report.id})),e.navCtrl.publish("reloadTimelyReportList"),e.navCtrl.publish("reloadTimelyReport",e.report)})()}showSearchContact(e=!0){var n=this;return(0,u.Z)(function*(){n.navCtrl.push("/contact",{callback:a=>{const c=a;if(c)if(e){if(n.selectedContacts.findIndex(y=>y.id===c.id)>=0)return;n.selectedContacts.push(c),n.report.contactListCustom=JSON.stringify(n.selectedContacts)}else{if(n.ignoredContacts.findIndex(y=>y.id===c.id)>=0)return;n.ignoredContacts.push(c),n.report.ignoredContacts=JSON.stringify(n.ignoredContacts)}},searchMode:!0})})()}removeIgnoredContact(e){const n=this.ignoredContacts.findIndex(i=>i.id===e.id);n>=0&&(this.ignoredContacts.splice(n,1),this.report.ignoredContacts=JSON.stringify(this.ignoredContacts))}removeSelectedContact(e){const n=this.selectedContacts.findIndex(i=>i.id===e.id);n>=0&&(this.selectedContacts.splice(n,1),this.report.contactListCustom=JSON.stringify(this.selectedContacts))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(L.G),t.Y36(r.IN),t.Y36(b.r),t.Y36(K.y),t.Y36(r.Br),t.Y36(U.y))},o.\u0275cmp=t.Xpm({type:o,selectors:[["timely-report-add"]],decls:97,vars:102,consts:[["slot","start"],["defaultHref","/home"],["slot","end"],["color","primary",3,"click"],["name","checkmark"],["color","primary"],[3,"ngModel","ngModelChange"],[3,"value"],["pickerId","reportDateFromPicker4",3,"date","label","dateChange",4,"ngIf"],["pickerId","reportDateEndPicker4",3,"date","label","dateChange",4,"ngIf"],[4,"ngIf"],[4,"ngFor","ngForOf"],["pickerId","reportDateFromPicker4",3,"date","label","dateChange"],["pickerId","reportDateEndPicker4",3,"date","label","dateChange"],["fill","outline","slot","end",3,"click"],["name","add"],["name","remove"],["clearInput","","type","number",3,"placeholder","ngModel","ngModelChange"]],template:function(e,n){1&e&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),t._UZ(3,"ion-back-button",1),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5),t.ALo(6,"translate"),t.qZA(),t.TgZ(7,"ion-buttons",2)(8,"ion-button",3),t.NdJ("click",function(){return n.save()}),t._UZ(9,"ion-icon",4),t._uU(10),t.ALo(11,"translate"),t.qZA()()()(),t.TgZ(12,"ion-content")(13,"ion-list")(14,"ion-item")(15,"ion-label",5),t._uU(16),t.ALo(17,"translate"),t.qZA(),t.TgZ(18,"ion-select",6),t.NdJ("ngModelChange",function(a){return n.report.dateType=a}),t.TgZ(19,"ion-select-option",7),t._uU(20),t.ALo(21,"translate"),t.qZA(),t.TgZ(22,"ion-select-option",7),t._uU(23),t.ALo(24,"translate"),t.qZA(),t.TgZ(25,"ion-select-option",7),t._uU(26),t.ALo(27,"translate"),t.qZA(),t.TgZ(28,"ion-select-option",7),t._uU(29),t.ALo(30,"translate"),t.qZA(),t.TgZ(31,"ion-select-option",7),t._uU(32),t.ALo(33,"translate"),t.qZA(),t.TgZ(34,"ion-select-option",7),t._uU(35),t.ALo(36,"translate"),t.qZA()()(),t.YNc(37,H,2,4,"date-item",8),t.YNc(38,B,2,4,"date-item",9),t.TgZ(39,"ion-item")(40,"ion-label",5),t._uU(41),t.ALo(42,"translate"),t.qZA(),t.TgZ(43,"ion-select",6),t.NdJ("ngModelChange",function(a){return n.report.contactListType=a}),t.TgZ(44,"ion-select-option",7),t._uU(45),t.ALo(46,"translate"),t.qZA(),t.TgZ(47,"ion-select-option",7),t._uU(48),t.ALo(49,"translate"),t.qZA()()(),t.YNc(50,W,7,6,"ion-item",10),t.YNc(51,$,7,4,"ion-item",11),t.TgZ(52,"ion-item")(53,"ion-label",5),t._uU(54),t.ALo(55,"translate"),t.qZA(),t.TgZ(56,"ion-select",6),t.NdJ("ngModelChange",function(a){return n.report.ignoreContact=a}),t.TgZ(57,"ion-select-option",7),t._uU(58),t.ALo(59,"translate"),t.qZA(),t.TgZ(60,"ion-select-option",7),t._uU(61),t.ALo(62,"translate"),t.qZA()()(),t.YNc(63,V,7,6,"ion-item",10),t.YNc(64,X,7,4,"ion-item",11),t.TgZ(65,"ion-item")(66,"ion-label",5),t._uU(67),t.ALo(68,"translate"),t.qZA(),t.TgZ(69,"ion-select",6),t.NdJ("ngModelChange",function(a){return n.report.genderType=a}),t.TgZ(70,"ion-select-option",7),t._uU(71),t.ALo(72,"translate"),t.qZA(),t.TgZ(73,"ion-select-option",7),t._uU(74),t.ALo(75,"translate"),t.qZA(),t.TgZ(76,"ion-select-option",7),t._uU(77),t.ALo(78,"translate"),t.qZA()()(),t.TgZ(79,"ion-item")(80,"ion-label",5),t._uU(81),t.ALo(82,"translate"),t.qZA(),t.TgZ(83,"ion-select",6),t.NdJ("ngModelChange",function(a){return n.report.ageType=a}),t.TgZ(84,"ion-select-option",7),t._uU(85),t.ALo(86,"translate"),t.qZA(),t.TgZ(87,"ion-select-option",7),t._uU(88),t.ALo(89,"translate"),t.qZA(),t.TgZ(90,"ion-select-option",7),t._uU(91),t.ALo(92,"translate"),t.qZA()()(),t.YNc(93,z,6,7,"ion-item",10),t.YNc(94,tt,6,7,"ion-item",10),t.YNc(95,et,6,7,"ion-item",10),t.YNc(96,nt,6,7,"ion-item",10),t.qZA()()),2&e&&(t.xp6(5),t.Oqu(t.lcZ(6,56,"report-add.timely-title")),t.xp6(5),t.hij(" \xa0",t.lcZ(11,58,"action.save")," "),t.xp6(2),t.Akn(n.navCtrl.hasAds()?"--padding-bottom: 60px":""),t.xp6(4),t.Oqu(t.lcZ(17,60,"report-category-add.date-range")),t.xp6(2),t.Q6J("ngModel",n.report.dateType),t.xp6(1),t.Q6J("value",0),t.xp6(1),t.Oqu(t.lcZ(21,62,"report-category.by-week")),t.xp6(2),t.Q6J("value",1),t.xp6(1),t.Oqu(t.lcZ(24,64,"report-category.by-month")),t.xp6(2),t.Q6J("value",2),t.xp6(1),t.Oqu(t.lcZ(27,66,"report-category.by-year")),t.xp6(2),t.Q6J("value",3),t.xp6(1),t.Oqu(t.lcZ(30,68,"report-category.by-day")),t.xp6(2),t.Q6J("value",5),t.xp6(1),t.Oqu(t.lcZ(33,70,"report-category.by-quarter")),t.xp6(2),t.Q6J("value",4),t.xp6(1),t.Oqu(t.lcZ(36,72,"report-category.custom")),t.xp6(2),t.Q6J("ngIf",4===n.report.dateType),t.xp6(1),t.Q6J("ngIf",4===n.report.dateType),t.xp6(3),t.Oqu(t.lcZ(42,74,"report-add.select-contact")),t.xp6(2),t.Q6J("ngModel",n.report.contactListType),t.xp6(1),t.Q6J("value",0),t.xp6(1),t.Oqu(t.lcZ(46,76,"report-category-add.all")),t.xp6(2),t.Q6J("value",1),t.xp6(1),t.Oqu(t.lcZ(49,78,"report-category.custom")),t.xp6(2),t.Q6J("ngIf",1===n.report.contactListType),t.xp6(1),t.Q6J("ngForOf",n.selectedContacts),t.xp6(3),t.Oqu(t.lcZ(55,80,"report-add.ignore-contact")),t.xp6(2),t.Q6J("ngModel",n.report.ignoreContact),t.xp6(1),t.Q6J("value",0),t.xp6(1),t.Oqu(t.lcZ(59,82,"report-category-add.none")),t.xp6(2),t.Q6J("value",1),t.xp6(1),t.Oqu(t.lcZ(62,84,"report-category.custom")),t.xp6(2),t.Q6J("ngIf",1===n.report.ignoreContact),t.xp6(1),t.Q6J("ngForOf",n.ignoredContacts),t.xp6(3),t.Oqu(t.lcZ(68,86,"report-add.gender")),t.xp6(2),t.Q6J("ngModel",n.report.genderType),t.xp6(1),t.Q6J("value",0),t.xp6(1),t.Oqu(t.lcZ(72,88,"report-category-add.all")),t.xp6(2),t.Q6J("value",1),t.xp6(1),t.Oqu(t.lcZ(75,90,"contact-add.gender-male")),t.xp6(2),t.Q6J("value",2),t.xp6(1),t.Oqu(t.lcZ(78,92,"contact-add.gender-female")),t.xp6(4),t.Oqu(t.lcZ(82,94,"report-add.age-range")),t.xp6(2),t.Q6J("ngModel",n.report.ageType),t.xp6(1),t.Q6J("value",0),t.xp6(1),t.Oqu(t.lcZ(86,96,"report-category-add.all")),t.xp6(2),t.Q6J("value",1),t.xp6(1),t.Oqu(t.lcZ(89,98,"report-add.by-year")),t.xp6(2),t.Q6J("value",2),t.xp6(1),t.Oqu(t.lcZ(92,100,"report-add.by-age")),t.xp6(2),t.Q6J("ngIf",1===n.report.ageType),t.xp6(1),t.Q6J("ngIf",1===n.report.ageType),t.xp6(1),t.Q6J("ngIf",2===n.report.ageType),t.xp6(1),t.Q6J("ngIf",2===n.report.ageType))},dependencies:[p.sg,p.O5,d.JJ,d.On,r.oU,r.YG,r.Sm,r.W2,r.Gu,r.gu,r.pK,r.Ie,r.Q$,r.q_,r.t9,r.n0,r.wd,r.sr,r.as,r.QI,r.cs,j.p,m.X$],encapsulation:2}),o})()}];let it=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[Z.Bz.forChild(ot),Z.Bz]}),o})();var rt=l(2216),S=l(3093);let at=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[{provide:M.$g,useValue:{generateColors:!1}}],imports:[p.ez,d.u5,r.Pc,it,S.m,rt.uH,M.vQ,m.aw.forChild({loader:{provide:m.Zw,useFactory:S.x,deps:[x.eN]}})]}),o})()},8851:(O,v,l)=>{l.d(v,{L:()=>u});var p=l(6738),d=l(5439),m=l(1914),x=l(4006),Z=l(191);let u=(()=>{class h{constructor(){this.min=null,this.max=null,this.pickerId=null,this.date="",this.type="date",this.dateChange=new p.vpe}ionViewWillEnter(){this.date=this.date&&this.date.length>10?"datetime-local"===this.type?d(this.date.split(":00Z").join("")).format(m.C.getDateTimeDbFormat()):d(this.date.split(":00Z").join("")).format(m.C.getDateDbFormat()):this.date,this.min||(this.min="1900-01-01"),this.max||(this.max="2100-01-01")}ngOnInit(){this.date=this.date&&this.date.length>10?"datetime-local"===this.type?d(this.date.split(":00Z").join("")).format(m.C.getDateTimeDbFormat()):d(this.date.split(":00Z").join("")).format(m.C.getDateDbFormat()):this.date,this.min||(this.min="1900-01-01"),this.max||(this.max="2100-01-01")}change(){this.date=this.date&&this.date.length>10?"datetime-local"===this.type?d(this.date.split(":00Z").join("")).format(m.C.getDateTimeDbFormat()):d(this.date.split(":00Z").join("")).format(m.C.getDateDbFormat()):this.date,this.dateChange.emit(this.date)}}return h.\u0275fac=function(T){return new(T||h)},h.\u0275cmp=p.Xpm({type:h,selectors:[["date-picker"]],inputs:{min:"min",max:"max",pickerId:"pickerId",date:"date",type:"type"},outputs:{dateChange:"dateChange"},decls:1,vars:4,consts:[["color","primary",1,"ion-button",2,"font-size","0.8em",3,"type","ngModel","min","max","ngModelChange","ionChange"]],template:function(T,g){1&T&&(p.TgZ(0,"ion-input",0),p.NdJ("ngModelChange",function(_){return g.date=_})("ionChange",function(){return g.change()}),p.qZA()),2&T&&p.Q6J("type",g.type)("ngModel",g.date)("min",g.min)("max",g.max)},dependencies:[x.JJ,x.On,Z.pK,Z.j9],encapsulation:2}),h})()}}]);