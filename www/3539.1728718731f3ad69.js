"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3539],{666:(q,A,r)=>{r.d(A,{p:()=>H});var t=r(6738),x=r(5439),I=r(1914),T=r(6723),Z=r(3306),g=r(6895),C=r(4006),a=r(191);function v(o,c){if(1&o){const n=t.EpF();t.TgZ(0,"ion-checkbox",10),t.NdJ("ngModelChange",function(u){t.CHM(n);const f=t.oxw();return t.KtG(f.quote.isSelected=u)}),t.qZA()}if(2&o){const n=t.oxw();t.Q6J("ngModel",n.quote.isSelected)}}const m=function(o,c,n){return[o,c,"symbol","1.0-2",n]};function L(o,c){if(1&o&&(t.TgZ(0,"p")(1,"ion-text",3),t._uU(2),t.ALo(3,"translate"),t.ALo(4,"currency"),t.ALo(5,"translate"),t.qZA()()),2&o){const n=t.oxw();t.xp6(2),t.HOy("",t.lcZ(3,4,"order-add.pay-by-point"),": ",t.G7q(4,6,t.kEZ(14,m,n.quote.amountFromPoint,n.currency,n.translateService.currentLang))," / ",n.quote.pointAmount," ",t.lcZ(5,12,"point-add.point")," ")}}function s(o,c){if(1&o&&(t.TgZ(0,"div")(1,"i"),t._uU(2),t.qZA()()),2&o){const n=t.oxw();t.xp6(2),t.Oqu(n.limitText(n.quote.note))}}function d(o,c){if(1&o&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.hij(" ",n.quote.contact.fullName," ")}}function _(o,c){if(1&o&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Oqu(n.quote.contactName)}}function l(o,c){if(1&o&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Oqu(n.quote.contactPhone)}}function p(o,c){if(1&o&&(t.TgZ(0,"p",13),t._uU(1),t.qZA()),2&o){const n=t.oxw().$implicit,i=t.oxw();t.xp6(1),t.hij(" ",i.limitText(n.note)," ")}}function E(o,c){if(1&o&&(t.TgZ(0,"p",14),t._uU(1),t.ALo(2,"currency"),t.qZA()),2&o){const n=c.$implicit,i=t.oxw(3);t.xp6(1),t.HOy(" ",i.productName(n.productCode,n.productName)," | ",n.count," ",n.unit," \xd7 ",t.G7q(2,4,t.kEZ(10,m,n.price,i.currency,i.translateService.currentLang))," ")}}function Q(o,c){if(1&o&&(t.ynx(0),t.TgZ(1,"p",14)(2,"strong"),t._uU(3),t.ALo(4,"translate"),t.qZA()(),t.YNc(5,E,3,14,"p",15),t.BQk()),2&o){const n=t.oxw().$implicit;t.xp6(3),t.Oqu(t.lcZ(4,2,"order-add.combo-products")),t.xp6(2),t.Q6J("ngForOf",n.items)}}function O(o,c){if(1&o&&(t.TgZ(0,"p",16)(1,"ion-text"),t._uU(2),t.qZA()()),2&o){const n=t.oxw().$implicit,i=t.oxw();t.xp6(1),t.Udp("font-weight","normal"),t.xp6(1),t.hij(" ",i.getTypeAttributesString(n)," ")}}function U(o,c){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"currency"),t.qZA()),2&o){const n=t.oxw().$implicit,i=t.oxw(4);t.xp6(1),t.AsE(" | ",n.count," \xd7 ",t.G7q(2,2,t.kEZ(8,m,n.price,i.currency,i.translateService.currentLang)),"")}}function y(o,c){1&o&&(t.TgZ(0,"span"),t._uU(1,"+"),t.qZA())}function M(o,c){if(1&o&&(t.ynx(0),t.TgZ(1,"p",16)(2,"ion-text",17),t._uU(3),t.YNc(4,U,3,12,"span",4),t._uU(5," | "),t.YNc(6,y,2,0,"span",4),t._uU(7),t.ALo(8,"currency"),t.qZA()(),t.BQk()),2&o){const n=c.$implicit,i=t.oxw(4);t.xp6(2),t.Udp("font-weight","normal"),t.xp6(1),t.hij(" ",n.title,""),t.xp6(1),t.Q6J("ngIf",!n.selectOnly),t.xp6(2),t.Q6J("ngIf",n.isAddedToPrice),t.xp6(1),t.hij("",t.G7q(8,6,t.kEZ(12,m,n.total,i.currency,i.translateService.currentLang))," ")}}function P(o,c){if(1&o&&(t.ynx(0),t.YNc(1,M,9,16,"ng-container",5),t.BQk()),2&o){const n=c.$implicit;t.xp6(1),t.Q6J("ngForOf",n.values)}}function D(o,c){if(1&o&&(t.ynx(0),t.YNc(1,P,2,1,"ng-container",5),t.BQk()),2&o){const n=t.oxw().$implicit;t.xp6(1),t.Q6J("ngForOf",n.typeOptions)}}function N(o,c){if(1&o&&(t.ynx(0),t.TgZ(1,"p",16)(2,"ion-text",17),t._uU(3),t.ALo(4,"currency"),t.qZA()(),t.BQk()),2&o){const n=c.$implicit,i=t.oxw(3);t.xp6(2),t.Udp("font-weight","normal"),t.xp6(1),t.xDo(" ",n.code?n.code.toUpperCase()+"-":"","",n.title," | ",n.count," ",n.unit," | ",t.G7q(4,7,t.kEZ(13,m,n.total,i.currency,i.translateService.currentLang))," ")}}function k(o,c){1&o&&(t.ynx(0),t.TgZ(1,"p",16)(2,"ion-text",17),t._uU(3," ... "),t.qZA()(),t.BQk()),2&o&&(t.xp6(2),t.Udp("font-weight","normal"))}function J(o,c){if(1&o&&(t.ynx(0),t.YNc(1,N,5,17,"ng-container",5),t.ALo(2,"slice"),t.YNc(3,k,4,2,"ng-container",4),t.BQk()),2&o){const n=t.oxw().$implicit;t.xp6(1),t.Q6J("ngForOf",t.Dn7(2,2,n.options,0,2)),t.xp6(2),t.Q6J("ngIf",n.options.length>=3)}}function S(o,c){if(1&o&&(t.TgZ(0,"p")(1,"ion-text"),t._uU(2),t.ALo(3,"currency"),t.YNc(4,p,2,1,"p",11),t.YNc(5,Q,6,4,"ng-container",4),t.YNc(6,O,3,3,"p",12),t.YNc(7,D,2,1,"ng-container",4),t.YNc(8,J,4,6,"ng-container",4),t.qZA()()),2&o){const n=c.$implicit,i=c.index,u=t.oxw();t.xp6(2),t.gL8(" ",i+1,".",n.productCode?n.productCode.toUpperCase()+"-":"","",n.productName," | ",n.count," ",n.unit," | ",t.G7q(3,11,t.kEZ(17,m,n.total,u.currency,u.translateService.currentLang))," "),t.xp6(2),t.Q6J("ngIf",n.note),t.xp6(1),t.Q6J("ngIf",n.items&&n.items.length),t.xp6(1),t.Q6J("ngIf",n.typeAttributes&&n.typeAttributes.length),t.xp6(1),t.Q6J("ngIf",n.typeOptions&&n.typeOptions.length),t.xp6(1),t.Q6J("ngIf",n.options&&n.options.length)}}function w(o,c){1&o&&(t.TgZ(0,"p")(1,"ion-text",18),t._uU(2,"..."),t.qZA()())}function Y(o,c){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const n=t.oxw(2);t.xp6(1),t.hij(" - ",n.quote.store.name,"")}}function K(o,c){if(1&o&&(t.TgZ(0,"p")(1,"i",19),t._uU(2),t.ALo(3,"translate"),t.YNc(4,Y,2,1,"span",4),t.qZA()()),2&o){const n=t.oxw();t.xp6(2),t.AsE("",t.lcZ(3,3,"trade.staff")," ",n.quote.staff.name,""),t.xp6(2),t.Q6J("ngIf",n.quote.store)}}function B(o,c){if(1&o&&(t.TgZ(0,"p")(1,"i",19),t._uU(2),t.ALo(3,"translate"),t.qZA()()),2&o){const n=t.oxw();t.xp6(2),t.AsE("",t.lcZ(3,2,"trade.staff")," ",n.quote.store.name,"")}}function W(o,c){if(1&o&&(t.TgZ(0,"ion-avatar",20),t._UZ(1,"img",21),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("src",n.contactImageOrPlaceholder(n.quote.contact),t.LSH)}}let H=(()=>{class o{constructor(n){this.translateService=n,this.showContact=!0,this.selectMode=!1,this.isSelected=!1,this.isStaff=!1,this.color="default",this.onPress=new t.vpe,this.onClick=new t.vpe}dateFormat(n){let i=n;return n.indexOf(":00Z")<0&&(i=x(n).format(I.C.getDateTimeDbFormat())),I.C.toUiLocalDateTimeString(i)}contactImageOrPlaceholder(n){return T.W.contactImageOrPlaceholder(n.avatarUrl)}limitText(n,i=200){return T.W.limitText(n,i)}press(){this.onPress.emit()}click(){this.selectMode||this.onClick.emit()}getTypeAttributesString(n){const i=[];for(const u of n.types){const f=[];for(const h of u.values)!h.selected||h.price||f.push(h.title);if(f&&f.length){const h=f.join(", ");i.push(u.title+": "+h)}}return i.join("; ")}productName(n,i){return T.W.productName(n,i)}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(Z.sK))},o.\u0275cmp=t.Xpm({type:o,selectors:[["quote-list-item"]],inputs:{currency:"currency",showContact:"showContact",selectMode:"selectMode",isSelected:"isSelected",quote:"quote",isStaff:"isStaff",color:"color"},outputs:{onPress:"onPress",onClick:"onClick"},decls:27,vars:29,consts:[[3,"color","press","click"],["color","primary","slot","start",3,"ngModel","ngModelChange",4,"ngIf"],[1,"ion-text-wrap"],["color","secondary"],[4,"ngIf"],[4,"ngFor","ngForOf"],["slot","end",4,"ngIf"],["side","end"],[3,"click"],["slot","icon-only","name","ellipsis-vertical"],["color","primary","slot","start",3,"ngModel","ngModelChange"],["style","font-size: 0.8em; margin: 3px 0 0 0;",4,"ngIf"],["style","padding: 0; margin: 0",4,"ngIf"],[2,"font-size","0.8em","margin","3px 0 0 0"],[2,"padding","0","margin","0","font-size","0.68em"],["style","padding: 0; margin: 0; font-size: 0.68em;",4,"ngFor","ngForOf"],[2,"padding","0","margin","0"],[2,"font-size","0.8em"],[2,"font-size","12px"],[2,"font-size","11px"],["slot","end"],[3,"src"]],template:function(n,i){1&n&&(t.TgZ(0,"ion-item-sliding")(1,"ion-item",0),t.NdJ("press",function(){return i.press()})("click",function(){return i.click()}),t.YNc(2,v,1,1,"ion-checkbox",1),t.TgZ(3,"ion-label",2)(4,"b"),t._uU(5),t.qZA(),t._uU(6," - "),t.TgZ(7,"span",3),t._uU(8),t.ALo(9,"currency"),t.qZA(),t._UZ(10,"br"),t.YNc(11,L,6,18,"p",4),t.YNc(12,s,3,1,"div",4),t.YNc(13,d,2,1,"p",4),t.YNc(14,_,2,1,"p",4),t.YNc(15,l,2,1,"p",4),t.TgZ(16,"p"),t._uU(17),t.qZA(),t.YNc(18,S,9,21,"p",5),t.ALo(19,"slice"),t.YNc(20,w,3,0,"p",4),t.YNc(21,K,5,5,"p",4),t.YNc(22,B,4,4,"p",4),t.qZA(),t.YNc(23,W,2,1,"ion-avatar",6),t.qZA(),t.TgZ(24,"ion-item-options",7)(25,"ion-item-option",8),t.NdJ("click",function(){return i.press()}),t._UZ(26,"ion-icon",9),t.qZA()()()),2&n&&(t.xp6(1),t.Q6J("color",i.color),t.xp6(1),t.Q6J("ngIf",i.selectMode),t.xp6(3),t.Oqu(i.quote.name),t.xp6(3),t.Oqu(t.G7q(9,15,t.kEZ(25,m,i.quote.total,i.currency,i.translateService.currentLang))),t.xp6(3),t.Q6J("ngIf",i.quote.amountFromPoint&&i.quote.pointAmount),t.xp6(1),t.Q6J("ngIf",i.quote.note),t.xp6(1),t.Q6J("ngIf",i.quote.contactId&&0!==i.quote.contactId&&i.quote.contact&&i.showContact),t.xp6(1),t.Q6J("ngIf",0===i.quote.contactId&&i.showContact&&i.quote.contactName),t.xp6(1),t.Q6J("ngIf",0===i.quote.contactId&&i.showContact&&i.quote.contactPhone),t.xp6(2),t.hij(" ",i.dateFormat(i.quote.createdAt)," "),t.xp6(1),t.Q6J("ngForOf",t.Dn7(19,21,i.quote.items,0,2)),t.xp6(2),t.Q6J("ngIf",i.quote.items.length>=3),t.xp6(1),t.Q6J("ngIf",i.quote.staffId&&0!==i.quote.staffId&&i.quote.staff&&!i.isStaff),t.xp6(1),t.Q6J("ngIf",!(i.quote.staffId&&0!==i.quote.staffId&&i.quote.staff&&!i.isStaff)&&i.quote.store),t.xp6(1),t.Q6J("ngIf",i.quote.contactId&&0!==i.quote.contactId&&i.quote.contact&&i.showContact))},dependencies:[g.sg,g.O5,C.JJ,C.On,a.BJ,a.nz,a.gu,a.Ie,a.u8,a.IK,a.td,a.Q$,a.yW,a.w,g.OU,g.H9,Z.X$],encapsulation:2}),o})()},360:(q,A,r)=>{r.d(A,{Y:()=>L});var t=r(5861),x=r(6723),e=r(6738),I=r(5851),T=r(323),Z=r(7852),g=r(3306),C=r(6895),a=r(191);function v(s,d){if(1&s){const _=e.EpF();e.TgZ(0,"ion-button",13),e.NdJ("click",function(){e.CHM(_);const p=e.oxw(2);return e.KtG(p.hideSupport())}),e._UZ(1,"ion-icon",14),e.qZA()}}function m(s,d){if(1&s){const _=e.EpF();e.TgZ(0,"div",1)(1,"ion-item",2),e.NdJ("click",function(){e.CHM(_);const p=e.oxw();return e.KtG(p.callPhone("+84869366606"))}),e.TgZ(2,"ion-label",3)(3,"h2")(4,"strong"),e._uU(5),e.ALo(6,"translate"),e.qZA()()(),e.YNc(7,v,2,0,"ion-button",4),e.qZA(),e.TgZ(8,"p")(9,"i"),e._uU(10),e.ALo(11,"translate"),e.qZA()(),e.TgZ(12,"ion-button",5),e.NdJ("click",function(){e.CHM(_);const p=e.oxw();return e.KtG(p.sendTicket())}),e._UZ(13,"ion-icon",6),e._uU(14),e.ALo(15,"translate"),e.qZA(),e.TgZ(16,"ion-grid")(17,"ion-row")(18,"ion-col",7)(19,"ion-item",8),e.NdJ("click",function(){e.CHM(_);const p=e.oxw();return e.KtG(p.callPhone("+84869366606"))}),e._UZ(20,"ion-icon",9),e.TgZ(21,"ion-label",10),e._uU(22),e.ALo(23,"translate"),e.qZA()()(),e.TgZ(24,"ion-col",7)(25,"ion-item",8),e.NdJ("click",function(){e.CHM(_);const p=e.oxw();return e.KtG(p.sendEmail("dlv.isale.app@gmail.com"))}),e._UZ(26,"ion-icon",11),e.TgZ(27,"ion-label",12),e._uU(28),e.ALo(29,"translate"),e.qZA()()()()()()}if(2&s){const _=e.oxw();e.xp6(5),e.hij("",e.lcZ(6,6,"common.contact"),":"),e.xp6(2),e.Q6J("ngIf",!_.neverHide),e.xp6(3),e.Oqu(e.lcZ(11,8,"ticket-add.send-ticket-note")),e.xp6(4),e.hij("\xa0 ",e.lcZ(15,10,"ticket-add.title")," "),e.xp6(8),e.hij(" ",e.lcZ(23,12,"common.hotline"),": (+84) 0383.838.394 "),e.xp6(6),e.hij(" ",e.lcZ(29,14,"common.email"),": dlv.isale.app@gmail.com ")}}let L=(()=>{class s{constructor(_,l,p,E){this.navCtrl=_,this.analyticsService=l,this.storage=p,this.translate=E,this.neverHide=!1,this.isHide=!1}ngOnInit(){var _=this;return(0,t.Z)(function*(){_.isHide=!!(yield _.storage.get("hide-support"))})()}callPhone(_){!_||(this.analyticsService.logEvent("support-call-hotline"),x.W.callPhone(_))}sendEmail(_){!_||(this.analyticsService.logEvent("support-email"),x.W.sendEmail(_))}sendTicket(){this.navCtrl.push("/ticket/add",null)}hideSupport(){var _=this;return(0,t.Z)(function*(){_.analyticsService.logEvent("support-hide"),_.isHide=!0,alert(_.translate.instant("support.alert")),yield _.storage.set("hide-support","1")})()}}return s.\u0275fac=function(_){return new(_||s)(e.Y36(I.G),e.Y36(T.y),e.Y36(Z.V),e.Y36(g.sK))},s.\u0275cmp=e.Xpm({type:s,selectors:[["support"]],inputs:{neverHide:"neverHide"},decls:1,vars:1,consts:[["style","padding: 5px; border: 1px solid #D3679D; border-radius: 10px; margin-top: 10px;",4,"ngIf"],[2,"padding","5px","border","1px solid #D3679D","border-radius","10px","margin-top","10px"],["lines","none",1,"ion-no-padding",2,"padding-top","10px !important","min-height","0 !important","--min-height","0 !important",3,"click"],[2,"margin","0 !important","padding","0 !important"],["slot","end","size","small","fill","clear",3,"click",4,"ngIf"],["color","danger",3,"click"],["name","mail"],[2,"padding","0 !important","margin","0 !important"],[1,"ion-no-padding",2,"padding-top","0px !important","cursor","pointer",3,"click"],["name","call","slot","start","color","tertiary"],[1,"ion-text-wrap"],["name","mail","slot","start","color","danger"],["color","danger",1,"ion-text-wrap"],["slot","end","size","small","fill","clear",3,"click"],["name","close","slot","icon-only"]],template:function(_,l){1&_&&e.YNc(0,m,30,16,"div",0),2&_&&e.Q6J("ngIf",!l.isHide||l.neverHide)},dependencies:[C.O5,a.YG,a.wI,a.jY,a.gu,a.Ie,a.Q$,a.Nd,g.X$],encapsulation:2}),s})()}}]);