"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3064],{3064:(L,m,l)=>{l.d(m,{M:()=>E});var _=l(5861),f=l(6841),e=l(6738),u=l(5439),a=l(1914),c=l(191),T=l(5851),h=l(667),y=l(7852),p=l(3306),C=l(6895),g=l(4006);const x=["dateFromPicker"],M=["orderOtherStatusSelect"],S=["dateToPicker"];function Z(o,d){if(1&o&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.ALo(3,"translate"),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.HOy(" ",e.lcZ(2,4,"common.from")," ",t.dateOnlyFormat(t.dateFrom)," ",e.lcZ(3,6,"common.to")," ",t.dateOnlyFormat(t.dateTo)," ")}}function v(o,d){1&o&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&o&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"date-range.all-time")," "))}function A(o,d){1&o&&(e.TgZ(0,"ion-segment-button",14),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&o&&(e.Q6J("value",0),e.xp6(1),e.hij(" ",e.lcZ(2,2,"order-detail.status-draft")," "))}function P(o,d){1&o&&(e.TgZ(0,"ion-segment-button",14),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&o&&(e.Q6J("value",4),e.xp6(1),e.hij(" ",e.lcZ(2,2,"order-detail.status-cancel")," "))}function b(o,d){1&o&&(e.TgZ(0,"ion-segment-button",14),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&o&&(e.Q6J("value",1),e.xp6(1),e.hij(" ",e.lcZ(2,2,"order-detail.status-inprogress")," "))}function R(o,d){1&o&&(e.TgZ(0,"ion-segment-button",14),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&o&&(e.Q6J("value",5),e.xp6(1),e.hij(" ",e.lcZ(2,2,"order-detail.status-has-debt")," "))}function Y(o,d){1&o&&(e.TgZ(0,"ion-segment-button",14),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&o&&(e.Q6J("value",6),e.xp6(1),e.hij(" ",e.lcZ(2,2,"order-detail.status-shipping-has-debt")," "))}function O(o,d){1&o&&(e.TgZ(0,"ion-segment-button",14),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&o&&(e.Q6J("value",7),e.xp6(1),e.hij(" ",e.lcZ(2,2,"order-detail.status-deposit")," "))}function D(o,d){if(1&o){const t=e.EpF();e.TgZ(0,"ion-col",21)(1,"ion-text",22),e._uU(2),e.ALo(3,"translate"),e.qZA(),e._UZ(4,"br"),e.TgZ(5,"ion-text",23),e.NdJ("click",function(){e.CHM(t);const r=e.oxw(2);return e.KtG(r.selectDateRange())}),e._uU(6),e.qZA()()}if(2&o){const t=e.oxw(2);e.xp6(2),e.Oqu(e.lcZ(3,2,"order-add.collaborator-info")),e.xp6(4),e.hij(" ",t.selectedStaff.name," ")}}function J(o,d){if(1&o){const t=e.EpF();e.TgZ(0,"ion-col",21)(1,"ion-text",22),e._uU(2),e.ALo(3,"translate"),e.qZA(),e._UZ(4,"br"),e.TgZ(5,"ion-text",23),e.NdJ("click",function(){e.CHM(t);const r=e.oxw(2);return e.KtG(r.selectDateRange())}),e._uU(6),e.qZA()()}if(2&o){const t=e.oxw(2);e.xp6(2),e.Oqu(e.lcZ(3,2,"staff-add.store")),e.xp6(4),e.hij(" ",t.storeSelected.name," ")}}function U(o,d){if(1&o){const t=e.EpF();e.TgZ(0,"ion-grid",11)(1,"ion-row")(2,"ion-col",12)(3,"ion-segment",13),e.NdJ("ngModelChange",function(r){e.CHM(t);const i=e.oxw();return e.KtG(i.orderStatus=r)})("ngModelChange",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.changeStatus())}),e.TgZ(4,"ion-segment-button",14),e._uU(5),e.ALo(6,"translate"),e.qZA(),e.TgZ(7,"ion-segment-button",14),e._uU(8),e.ALo(9,"translate"),e.qZA(),e.TgZ(10,"ion-segment-button",14),e._uU(11),e.ALo(12,"translate"),e.qZA(),e.YNc(13,A,3,4,"ion-segment-button",15),e.YNc(14,P,3,4,"ion-segment-button",15),e.YNc(15,b,3,4,"ion-segment-button",15),e.YNc(16,R,3,4,"ion-segment-button",15),e.YNc(17,Y,3,4,"ion-segment-button",15),e.YNc(18,O,3,4,"ion-segment-button",15),e.TgZ(19,"ion-button",16),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.selectOtherStatus())}),e._UZ(20,"ion-icon",17),e.qZA()(),e.TgZ(21,"ion-select",18,19),e.NdJ("ngModelChange",function(r){e.CHM(t);const i=e.oxw();return e.KtG(i.orderOtherStatus=r)})("ngModelChange",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.changeOrderOtherStatus())}),e.TgZ(23,"ion-select-option",14),e._uU(24),e.ALo(25,"translate"),e.qZA(),e.TgZ(26,"ion-select-option",14),e._uU(27),e.ALo(28,"translate"),e.qZA(),e.TgZ(29,"ion-select-option",14),e._uU(30),e.ALo(31,"translate"),e.qZA(),e.TgZ(32,"ion-select-option",14),e._uU(33),e.ALo(34,"translate"),e.qZA(),e.TgZ(35,"ion-select-option",14),e._uU(36),e.ALo(37,"translate"),e.qZA(),e.TgZ(38,"ion-select-option",14),e._uU(39),e.ALo(40,"translate"),e.qZA()()(),e.YNc(41,D,7,4,"ion-col",20),e.YNc(42,J,7,4,"ion-col",20),e.qZA()()}if(2&o){const t=e.oxw();e.xp6(3),e.Q6J("ngModel",t.orderStatus),e.xp6(1),e.Q6J("value",-1),e.xp6(1),e.hij(" ",e.lcZ(6,28,"order-detail.status-all")," "),e.xp6(2),e.Q6J("value",2),e.xp6(1),e.hij(" ",e.lcZ(9,30,"order-detail.status-shipping")," "),e.xp6(2),e.Q6J("value",3),e.xp6(1),e.hij(" ",e.lcZ(12,32,"order-detail.status-done")," "),e.xp6(2),e.Q6J("ngIf",0===t.orderOtherStatus),e.xp6(1),e.Q6J("ngIf",4===t.orderOtherStatus),e.xp6(1),e.Q6J("ngIf",1===t.orderOtherStatus),e.xp6(1),e.Q6J("ngIf",5===t.orderOtherStatus),e.xp6(1),e.Q6J("ngIf",6===t.orderOtherStatus),e.xp6(1),e.Q6J("ngIf",7===t.orderOtherStatus),e.xp6(3),e.Q6J("ngModel",t.orderOtherStatus),e.xp6(2),e.Q6J("value",0),e.xp6(1),e.hij("",e.lcZ(25,34,"order-detail.status-draft")," "),e.xp6(2),e.Q6J("value",1),e.xp6(1),e.hij("",e.lcZ(28,36,"order-detail.status-inprogress")," "),e.xp6(2),e.Q6J("value",4),e.xp6(1),e.hij("",e.lcZ(31,38,"order-detail.status-cancel")," "),e.xp6(2),e.Q6J("value",5),e.xp6(1),e.hij("",e.lcZ(34,40,"order-detail.status-has-debt")," "),e.xp6(2),e.Q6J("value",6),e.xp6(1),e.hij("",e.lcZ(37,42,"order-detail.status-shipping-has-debt")," "),e.xp6(2),e.Q6J("value",7),e.xp6(1),e.hij("",e.lcZ(40,44,"order-detail.status-deposit")," "),e.xp6(2),e.Q6J("ngIf",t.selectedStaff&&(!t.staffService.isStaff()||t.staffService.selectedStaff.hasFullAccess)),e.xp6(1),e.Q6J("ngIf",t.storeSelected&&(!t.staffService.isStaff()||t.staffService.selectedStaff.hasFullAccess))}}function F(o,d){if(1&o){const t=e.EpF();e.TgZ(0,"ion-grid")(1,"ion-row",24)(2,"ion-col",25)(3,"ion-item",26)(4,"ion-text",22),e._uU(5),e.ALo(6,"translate"),e.qZA(),e._uU(7,"\xa0 "),e.TgZ(8,"ion-select",27),e.NdJ("ngModelChange",function(r){e.CHM(t);const i=e.oxw();return e.KtG(i.isReceivedTrade=r)})("ngModelChange",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.changeTradeType())}),e.TgZ(9,"ion-select-option",14),e._uU(10),e.ALo(11,"translate"),e.qZA(),e.TgZ(12,"ion-select-option",14),e._uU(13),e.ALo(14,"translate"),e.qZA(),e.TgZ(15,"ion-select-option",14),e._uU(16),e.ALo(17,"translate"),e.qZA()()()()()()}if(2&o){const t=e.oxw();e.xp6(5),e.Oqu(e.lcZ(6,8,"trade-add.trade-type")),e.xp6(3),e.Q6J("ngModel",t.isReceivedTrade),e.xp6(1),e.Q6J("value",-1),e.xp6(1),e.hij("",e.lcZ(11,10,"order-detail.status-all")," "),e.xp6(2),e.Q6J("value",1),e.xp6(1),e.hij("",e.lcZ(14,12,"trade-add.money-in")," "),e.xp6(2),e.Q6J("value",0),e.xp6(1),e.hij("",e.lcZ(17,14,"trade-add.money-out")," ")}}let E=(()=>{class o{constructor(t,n,r,i,s){this.modalCtrl=t,this.navCtrl=n,this.staffService=r,this.storageService=i,this.translateService=s,this.page="",this.modeLink=!1,this.dateFrom="",this.dateTo="",this.orderStatus=-1,this.isLoading=!1,this.currentMoment=u(),this.segment="curr",this.currentType=1,this.isReceivedTrade=-1,this.orderOtherStatus=4,this.onPeriodChanged=new e.vpe}ngOnInit(){var t=this;return(0,_.Z)(function*(){const n=yield t.storageService.get("period-range-type-"+t.page);n?t.currentType=+n:0===n&&(t.currentType=0),t.setCurrentMoment()})()}setCurrentMoment(){this.currentMoment=u(),this.doCalculate()}previousMoment(){this.currentMoment=u(this.currentMoment).subtract(1,a.C.dateTypeToDuration(this.currentType)),this.doCalculate()}nextMoment(){this.currentMoment=u(this.currentMoment).add(1,a.C.dateTypeToDuration(this.currentType)),this.doCalculate()}doCalculate(){const t=a.C.dateTypeToStartOf(this.currentType);this.dateFrom=this.currentMoment.startOf(t).format("YYYY-MM-DD"),this.dateTo=this.currentMoment.endOf(t).format("YYYY-MM-DD"),this.onPeriodChanged.emit({dateFrom:this.dateFrom,dateTo:this.dateTo,orderStatus:this.orderStatus,isReceivedTrade:this.isReceivedTrade,selectedStaff:this.selectedStaff,storeSelected:this.storeSelected}),this.setToCurr()}setToCurr(){setTimeout(()=>{this.segment="curr";const t=u(this.currentMoment).subtract(1,a.C.dateTypeToDuration(this.currentType)),n=u(this.currentMoment).add(1,a.C.dateTypeToDuration(this.currentType));1===this.currentType?(this.currentNumber=this.currentMoment.format("MM")+"/"+this.currentMoment.format("YYYY"),this.previousNumber=t.format("MM")+"/"+t.format("YYYY"),this.nextNumber=n.format("MM")+"/"+n.format("YYYY")):0===this.currentType?(this.currentNumber=this.currentMoment.week()+"/"+this.currentMoment.format("YYYY"),this.previousNumber=t.week()+"/"+t.format("YYYY"),this.nextNumber=n.week()+"/"+n.format("YYYY")):5===this.currentType?(this.currentNumber=this.currentMoment.quarter()+"/"+this.currentMoment.format("YYYY"),this.previousNumber=t.quarter()+"/"+t.format("YYYY"),this.nextNumber=n.quarter()+"/"+n.format("YYYY")):4===this.currentType&&(this.currentNumber=this.currentMoment.date()+"/"+this.currentMoment.format("MM"),this.previousNumber=t.date()+"/"+t.format("MM"),this.nextNumber=n.date()+"/"+n.format("MM"))},300)}getTimeType(){let t=this.translateService.instant("date-range.by-month");return 0===this.currentType?t=this.translateService.instant("date-range.by-week"):5===this.currentType?t=this.translateService.instant("date-range.by-quarter"):3===this.currentType?t=this.translateService.instant("date-range.custom"):4===this.currentType&&(t=this.translateService.instant("date-range.by-day")),t}selectDateRangeByOpenLink(){var t=this;return(0,_.Z)(function*(){let n="month";0===t.currentType?n="week":5===t.currentType?n="quarter":3===t.currentType?n="custom":4===t.currentType&&(n="day");const r=function(){var i=(0,_.Z)(function*(s){s&&(t.dateFrom=""!==s.dateFrom?a.C.toDbString(s.dateFrom,a.C.getDbFormat()):"",t.dateTo=""!==s.dateTo?a.C.toDbString(s.dateTo,a.C.getDbFormat()):"",t.selectedStaff=s.selectedStaff,t.storeSelected=s.storeSelected,t.currentMoment=u(t.dateFrom,a.C.getDbFormat()),""!==s.timeType?"month"===s.timeType?t.currentType=1:"week"===s.timeType?t.currentType=0:"quarter"===s.timeType?t.currentType=5:"custom"===s.timeType?t.currentType=3:"day"===s.timeType&&(t.currentType=4):t.currentType=3,yield t.storageService.set("period-range-type-"+t.page,t.currentType),t.onPeriodChanged.emit({dateFrom:t.dateFrom,dateTo:t.dateTo,orderStatus:t.orderStatus,isReceivedTrade:t.isReceivedTrade,selectedStaff:t.selectedStaff,storeSelected:t.storeSelected})),t.setToCurr()});return function(N){return i.apply(this,arguments)}}();t.navCtrl.push("/order/select-filter",{callback:r,dateFromInput:t.dateFrom,dateToInput:t.dateTo,timeTypeInput:n,selectedStaff:t.selectedStaff,page:t.page,storeSelected:t.storeSelected})})()}selectDateRange(){var t=this;return(0,_.Z)(function*(){if(t.modeLink)return void(yield t.selectDateRangeByOpenLink());let n="month";0===t.currentType?n="week":5===t.currentType?n="quarter":3===t.currentType?n="custom":4===t.currentType&&(n="day");const r=yield t.modalCtrl.create({component:f.S,componentProps:{dateFromInput:t.dateFrom,dateToInput:t.dateTo,timeTypeInput:n,selectedStaff:t.selectedStaff,page:t.page,storeSelected:t.storeSelected}});yield r.present();const{data:i}=yield r.onDidDismiss();i&&(t.dateFrom=""!==i.dateFrom?a.C.toDbString(i.dateFrom,a.C.getDbFormat()):"",t.dateTo=""!==i.dateTo?a.C.toDbString(i.dateTo,a.C.getDbFormat()):"",t.selectedStaff=i.selectedStaff,t.storeSelected=i.storeSelected,t.currentMoment=u(t.dateFrom,a.C.getDbFormat()),""!==i.timeType?"month"===i.timeType?t.currentType=1:"week"===i.timeType?t.currentType=0:"quarter"===i.timeType?t.currentType=5:"custom"===i.timeType?t.currentType=3:"day"===i.timeType&&(t.currentType=4):t.currentType=3,yield t.storageService.set("period-range-type-"+t.page,t.currentType),t.onPeriodChanged.emit({dateFrom:t.dateFrom,dateTo:t.dateTo,orderStatus:t.orderStatus,isReceivedTrade:t.isReceivedTrade,selectedStaff:t.selectedStaff,storeSelected:t.storeSelected})),t.setToCurr()})()}dateOnlyFormat(t){return a.C.toUiDateString(t)}changeStatus(){this.onPeriodChanged.emit({dateFrom:this.dateFrom,dateTo:this.dateTo,orderStatus:this.orderStatus,isReceivedTrade:this.isReceivedTrade,selectedStaff:this.selectedStaff,storeSelected:this.storeSelected})}selectOtherStatus(){var t=this;return(0,_.Z)(function*(){t.orderOtherStatusSelect.open()})()}changeOrderOtherStatus(){setTimeout(()=>{this.orderStatus=this.orderOtherStatus},500)}changeTradeType(){this.onPeriodChanged.emit({dateFrom:this.dateFrom,dateTo:this.dateTo,orderStatus:this.orderStatus,isReceivedTrade:this.isReceivedTrade,selectedStaff:this.selectedStaff,storeSelected:this.storeSelected})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(c.IN),e.Y36(T.G),e.Y36(h.x),e.Y36(y.V),e.Y36(p.sK))},o.\u0275cmp=e.Xpm({type:o,selectors:[["period-range"]],viewQuery:function(t,n){if(1&t&&(e.Gf(x,7),e.Gf(M,5),e.Gf(S,7)),2&t){let r;e.iGM(r=e.CRH())&&(n.dateFromPicker=r.first),e.iGM(r=e.CRH())&&(n.orderOtherStatusSelect=r.first),e.iGM(r=e.CRH())&&(n.dateToPicker=r.first)}},inputs:{page:"page",modeLink:"modeLink"},outputs:{onPeriodChanged:"onPeriodChanged"},decls:17,vars:13,consts:[["color","primary",1,"ion-no-padding",3,"ngModel","hidden","ngModelChange"],["value","pre",1,"ion-text-wrap",3,"click"],["value","curr",1,"ion-text-wrap"],["value","nex",1,"ion-text-wrap",3,"click"],["fill","clear","color","primary","size","small",1,"ion-item-right",3,"click"],["slot","icon-only","name","funnel"],[1,"ion-no-padding",3,"hidden"],[1,"ion-text-wrap"],[4,"ngIf"],["fill","clear","color","primary",1,"ion-item-right",3,"click"],["class","ion-no-padding","style","margin-top: 5px;",4,"ngIf"],[1,"ion-no-padding",2,"margin-top","5px"],["size","12",1,"ion-no-padding"],["color","primary",1,"ion-no-padding",3,"ngModel","ngModelChange"],[1,"ion-text-wrap",3,"value"],["class","ion-text-wrap",3,"value",4,"ngIf"],["fill","clear","size","small",3,"click"],["slot","icon-only","name","ellipsis-horizontal-outline"],[2,"width","0","height","0","font-size","0","display","none",3,"ngModel","ngModelChange"],["orderOtherStatusSelect",""],["class","ion-no-padding","style","padding-left: 5px; padding-bottom: 5px; padding-top: 5px;",4,"ngIf"],[1,"ion-no-padding",2,"padding-left","5px","padding-bottom","5px","padding-top","5px"],["color","primary"],["color","dark",3,"click"],[2,"border","1px solid #f4f5f8"],["size","12",1,"ion-no-padding",2,"padding-left","5px"],["lines","none","color","light",1,"ion-no-padding"],[3,"ngModel","ngModelChange"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-segment",0),e.NdJ("ngModelChange",function(i){return n.segment=i}),e.TgZ(1,"ion-segment-button",1),e.NdJ("click",function(){return n.previousMoment()}),e._uU(2),e.qZA(),e.TgZ(3,"ion-segment-button",2),e._uU(4),e.qZA(),e.TgZ(5,"ion-segment-button",3),e.NdJ("click",function(){return n.nextMoment()}),e._uU(6),e.qZA(),e.TgZ(7,"ion-button",4),e.NdJ("click",function(){return n.selectDateRange()}),e._UZ(8,"ion-icon",5),e.qZA()(),e.TgZ(9,"ion-item",6)(10,"ion-label",7),e.YNc(11,Z,4,8,"span",8),e.YNc(12,v,3,3,"span",8),e.TgZ(13,"ion-button",9),e.NdJ("click",function(){return n.selectDateRange()}),e._UZ(14,"ion-icon",5),e.qZA()()(),e.YNc(15,U,43,46,"ion-grid",10),e.YNc(16,F,18,16,"ion-grid",8)),2&t&&(e.Q6J("ngModel",n.segment)("hidden",3===n.currentType),e.xp6(2),e.AsE(" ",n.getTimeType()," ",n.previousNumber," "),e.xp6(2),e.AsE(" ",n.getTimeType()," ",n.currentNumber," "),e.xp6(2),e.AsE(" ",n.getTimeType()," ",n.nextNumber," "),e.xp6(3),e.Q6J("hidden",3!==n.currentType),e.xp6(2),e.Q6J("ngIf",""!=n.dateFrom||""!=n.dateTo),e.xp6(1),e.Q6J("ngIf",""==n.dateFrom&&""==n.dateTo),e.xp6(3),e.Q6J("ngIf","order"===n.page),e.xp6(1),e.Q6J("ngIf","trade"===n.page))},dependencies:[C.O5,g.JJ,g.On,c.YG,c.wI,c.jY,c.gu,c.Ie,c.Q$,c.Nd,c.cJ,c.GO,c.t9,c.n0,c.yW,c.QI,p.X$],encapsulation:2}),o})()}}]);