"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7838],{8257:(P,y,l)=>{l.d(y,{r:()=>f});var C=l(6900);class f{constructor(x=0,a="",b="",U="",S=!1){this.id=0,this.code="",this.staffId=0,this.businessTypeId=0,this.salesLineId=0,this.avatarUrl="",this.fullName="",this.mobile="",this.isImportant=!1,this.gender="",this.email="",this.address="",this.dateOfBirth="",this.lastActive="",this.lastAction="",this.onlineId=0,this.staff=new C.O,this.businessType=null,this.salesLine=null,this.point=0,this.levelId=0,this.level=null,this.buyCount=0,this.fbUserId=null,this.source=null,this.id=x,this.avatarUrl=a,this.fullName=b,this.mobile=U,this.isImportant=S}}},6900:(P,y,l)=>{l.d(y,{O:()=>C});class C{constructor(s=0,x="",a="",b=""){this.hourLimit=1,this.storeId=0,this.store=null,this.isCollaborator=!1,this.shiftId=0,this.shift=null,this.blockViewingQuantity=!1,this.id=0,this.avatarUrl="",this.name="",this.userName="",this.shopName="",this.createdAt="",this.hasFullAccess=!1,this.canCreateOrder=!1,this.canUpdateDeleteOrder=!1,this.canCreateNewTransaction=!1,this.canUpdateDeleteTransaction=!1,this.canCreateUpdateNote=!1,this.canCreateUpdateDebt=!1,this.canUpdateDeleteProduct=!1,this.canViewProductCostPrice=!1,this.canUpdateProductCostPrice=!1,this.canViewAllContacts=!1,this.canManageContacts=!1,this.updateStatusExceptDone=!1,this.blockEditingOrderPrice=!1,this.id=s,this.avatarUrl=x,this.name=a,this.userName=b}}},7838:(P,y,l)=>{l.r(y),l.d(y,{NoteModule:()=>At});var C=l(6895),f=l(4006),s=l(191),x=l(3306),a=l(529),b=l(3093),U=l(2216),S=l(3196),p=l(5861),t=l(6738),M=l(510),O=l(2402);let J=(()=>{class o{constructor(e){var n=this;this.noteService=e,this.segmentValues=[["frequency",["icon","bookmark"],["filter",["frequency","true"],["modifiedAt","desc"]]],["important",["icon","star"],["filter",["important","true"],["modifiedAt","desc"]]],["recent",["icon","time"],["filter",["modifiedAt","desc"]]]],this.itemTemplate={h2:{valueFunc:"limit content"},pList:[{field:"contact.full-name"},{field:"modified-at",style:"font-size: 0.8em;",valueFunc:"note modified at"}]},this.deleteRelated=function(){var i=(0,p.Z)(function*(r){n.noteService.getNotePicturesByNoteId(r.id).then(u=>{u&&u.length>0&&n.noteService.deleteNotePictures(u)})});return function(r){return i.apply(this,arguments)}}(),this.searchFields=["content"]}ngOnInit(){return(0,p.Z)(function*(){})()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(M.Y))},o.\u0275cmp=t.Xpm({type:o,selectors:[["note"]],decls:1,vars:5,consts:[["table","note","iconAdd","add","defaultSegmentValue","recent",3,"itemTemplate","searchFields","segmentValues","canDeleteItem","deleteRelated"]],template:function(e,n){1&e&&t._UZ(0,"list",0),2&e&&t.Q6J("itemTemplate",n.itemTemplate)("searchFields",n.searchFields)("segmentValues",n.segmentValues)("canDeleteItem",!0)("deleteRelated",n.deleteRelated)},dependencies:[O.n],encapsulation:2}),o})();var E=l(3285);class w{constructor(){this.id=0,this.noteId=0,this.imageUrl=""}}var I=l(6723),k=l(9250),g=l(8257);class T{constructor(){this.id=0,this.contactId=0,this.content="",this.important=!1,this.frequency=!1,this.createdAt="",this.modifiedAt="",this.contact=new g.r,this.notePictures=[],this.avatarUrl="",this.joins=[new k.N("contactId","contact",I.W.contactTableName)]}}var c=l(1914),Z=l(5851),v=l(3142),L=l(5129),Y=l(4433),K=l(1582),F=l(7696),G=l(323);const q=["mySlider"],V=["fileUploadInput"];function H(o,d){if(1&o){const e=t.EpF();t.TgZ(0,"ion-button",5),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.save())}),t._UZ(1,"ion-icon",6),t._uU(2),t.ALo(3,"translate"),t.qZA()}2&o&&(t.xp6(2),t.hij(" \xa0",t.lcZ(3,1,"action.save")," "))}function R(o,d){if(1&o){const e=t.EpF();t.TgZ(0,"ion-button",5),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.removePicture(0))}),t._uU(1),t.ALo(2,"translate"),t.qZA()}2&o&&(t.xp6(1),t.hij(" \xa0",t.lcZ(2,1,"note-add.delete-photo")," "))}function j(o,d){if(1&o){const e=t.EpF();t.TgZ(0,"ion-button",5),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.closeViewPicture())}),t._UZ(1,"ion-icon",7),t._uU(2),t.ALo(3,"translate"),t.qZA()}2&o&&(t.xp6(2),t.hij(" \xa0",t.lcZ(3,1,"common.close")," "))}function B(o,d){if(1&o){const e=t.EpF();t.TgZ(0,"ion-text",22),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.showSearchContact())}),t._uU(1),t.qZA()}if(2&o){const e=t.oxw(2);t.xp6(1),t.hij(" ",e.contactSelected.fullName," ")}}function W(o,d){if(1&o){const e=t.EpF();t.TgZ(0,"ion-text",23),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.showSearchContact())}),t._uU(1),t.ALo(2,"translate"),t.qZA()}2&o&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"note-add.select-contact")," "))}function $(o,d){if(1&o){const e=t.EpF();t.TgZ(0,"ion-button",24),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.removeContact())}),t._UZ(1,"ion-icon",7),t.qZA()}}function X(o,d){if(1&o){const e=t.EpF();t.TgZ(0,"ion-list")(1,"ion-item")(2,"ion-textarea",25),t.NdJ("ngModelChange",function(i){t.CHM(e);const r=t.oxw(2);return t.KtG(r.note.content=i)}),t.ALo(3,"translate"),t.qZA()()()}if(2&o){const e=t.oxw(2);t.xp6(2),t.s9C("placeholder",t.lcZ(3,2,"note-add.enter-content")),t.Q6J("ngModel",e.note.content)}}function z(o,d){if(1&o){const e=t.EpF();t.TgZ(0,"ion-button",26),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.upload())}),t._UZ(1,"ion-icon",27),t._uU(2),t.ALo(3,"translate"),t.qZA()}2&o&&(t.xp6(2),t.hij("\xa0",t.lcZ(3,1,"note-add.select-photo"),""))}function tt(o,d){1&o&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&o&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"note-add.select-photo")))}function et(o,d){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=t.oxw(3);t.xp6(1),t.Oqu(e.fileToUpload.name)}}function nt(o,d){if(1&o&&(t.TgZ(0,"label",28),t._uU(1,"["),t.YNc(2,tt,3,3,"span",4),t.YNc(3,et,2,1,"span",4),t._uU(4,"]"),t.qZA()),2&o){const e=t.oxw(2);t.xp6(2),t.Q6J("ngIf",!e.fileToUpload),t.xp6(1),t.Q6J("ngIf",e.fileToUpload)}}function ot(o,d){if(1&o){const e=t.EpF();t.TgZ(0,"input",29,30),t.NdJ("change",function(i){t.CHM(e);const r=t.oxw(2);return t.KtG(r.rememberFile(i))}),t.qZA()}}function it(o,d){if(1&o){const e=t.EpF();t.TgZ(0,"ion-col",32)(1,"img",33),t.NdJ("click",function(){const r=t.CHM(e).$implicit,u=t.oxw(3);return t.KtG(u.showImage(r))}),t.qZA()()}if(2&o){const e=d.$implicit;t.xp6(1),t.Q6J("src",e.imageUrl,t.LSH)}}function at(o,d){if(1&o&&(t.TgZ(0,"ion-row"),t.YNc(1,it,2,1,"ion-col",31),t.qZA()),2&o){const e=d.$implicit;t.xp6(1),t.Q6J("ngForOf",e)}}function ct(o,d){if(1&o){const e=t.EpF();t.TgZ(0,"div")(1,"ion-list")(2,"ion-item")(3,"ion-text",8),t._uU(4),t.ALo(5,"translate"),t.qZA(),t.YNc(6,B,2,1,"ion-text",9),t.YNc(7,W,3,3,"ion-text",10),t.YNc(8,$,2,0,"ion-button",11),t.qZA(),t.TgZ(9,"ion-item")(10,"ion-label",8),t._uU(11),t.ALo(12,"translate"),t.qZA(),t.TgZ(13,"ion-toggle",12),t.NdJ("ngModelChange",function(i){t.CHM(e);const r=t.oxw();return t.KtG(r.note.important=i)}),t.qZA()(),t.TgZ(14,"ion-item")(15,"ion-label",8),t._uU(16),t.ALo(17,"translate"),t.qZA(),t.TgZ(18,"ion-toggle",12),t.NdJ("ngModelChange",function(i){t.CHM(e);const r=t.oxw();return t.KtG(r.note.frequency=i)}),t.qZA()()(),t.TgZ(19,"ion-segment",12),t.NdJ("ngModelChange",function(i){t.CHM(e);const r=t.oxw();return t.KtG(r.noteSegment=i)}),t.TgZ(20,"ion-segment-button",13),t._UZ(21,"ion-icon",14),t._uU(22),t.ALo(23,"translate"),t.qZA(),t.TgZ(24,"ion-segment-button",15),t._UZ(25,"ion-icon",16),t._uU(26),t.ALo(27,"translate"),t.qZA()(),t.YNc(28,X,4,4,"ion-list",4),t.TgZ(29,"ion-item",17),t.YNc(30,z,4,3,"ion-button",18),t.YNc(31,nt,5,2,"label",19),t.YNc(32,ot,2,0,"input",20),t.qZA(),t.TgZ(33,"ion-grid",17),t.YNc(34,at,2,1,"ion-row",21),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(4),t.Oqu(t.lcZ(5,18,"note-add.contact")),t.xp6(2),t.Q6J("ngIf",e.contactSelected&&e.contactSelected.id>0),t.xp6(1),t.Q6J("ngIf",!e.contactSelected||0===e.contactSelected.id),t.xp6(1),t.Q6J("ngIf",e.contactSelected&&e.contactSelected.id>0),t.xp6(3),t.Oqu(t.lcZ(12,20,"note-add.VIP")),t.xp6(2),t.Q6J("ngModel",e.note.important),t.xp6(3),t.Oqu(t.lcZ(17,22,"note-add.frequently")),t.xp6(2),t.Q6J("ngModel",e.note.frequency),t.xp6(1),t.Q6J("ngModel",e.noteSegment),t.xp6(3),t.hij(" ",t.lcZ(23,24,"note-detail.content")," "),t.xp6(4),t.hij(" ",t.lcZ(27,26,"note-detail.photos")," "),t.xp6(2),t.Q6J("ngIf","content"===e.noteSegment),t.xp6(1),t.Q6J("hidden","picture"!==e.noteSegment),t.xp6(1),t.Q6J("ngIf",!e.isNotCordova()),t.xp6(1),t.Q6J("ngIf",e.isNotCordova()),t.xp6(1),t.Q6J("ngIf",e.isNotCordova()),t.xp6(1),t.Q6J("hidden","picture"!==e.noteSegment),t.xp6(1),t.Q6J("ngForOf",e.arr)}}let st=(()=>{class o{constructor(e,n,i,r,u,m,_,h,N,A,Q,Nt){this.navCtrl=e,this.modalCtrl=n,this.noteService=i,this.dataService=r,this.camera=u,this.file=m,this.transfer=_,this.contactService=h,this.platform=N,this.actionSheetController=A,this.translateService=Q,this.analyticsService=Nt,this.params=null,this.title="Th\xeam/S\u1eeda ghi ch\xfa",this.note=new T,this.noteSegment="content",this.pictures=[],this.storageDirectory="",this.isInViewPictureMode=!1,this.picturesToDelete=[],this.arr=[],this.lastSamplePictureId=0,this.isNew=!0,this.uploadDisabled=!1,this.onKeyPress=D=>{!D.target||"body"!==D.target.localName||("s"===D.key||"S"===D.key)&&this.save()},this.platform.ready().then(()=>{if(!this.platform.is("capacitor")&&!this.platform.is("cordova"))return!1;if(this.platform.is("ios"))this.storageDirectory=this.file.documentsDirectory;else{if(!this.platform.is("android"))return!1;this.storageDirectory=this.file.dataDirectory}})}ionViewDidEnter(){this.navCtrl.addEventListener("keyup",this.onKeyPress)}ionViewWillLeave(){this.navCtrl.removeEventListener("keyup",this.onKeyPress)}ionViewWillEnter(){var e=this;return(0,p.Z)(function*(){yield e.analyticsService.setCurrentScreen("note-add")})()}ngOnInit(){var e=this;return(0,p.Z)(function*(){e.note=new T;let n=0,i=0;const r=e.params?e.params:e.navCtrl.getParams();if(e.params=r,r&&(r.id?(n=r.id,e.isNew=!1):r.contact&&(i=+r.contact)),n&&n>0){const u=yield e.navCtrl.loading();e.noteService.get(n).then(function(){var m=(0,p.Z)(function*(_){yield u.dismiss(),e.contactSelected=_.contact,e.note=_,e.noteService.getNotePicturesByNoteId(e.note.id).then(h=>{e.pictures=h,e.buildPictureGrid(),""==e.note.content&&e.arr.length>0&&(e.noteSegment="picture")})});return function(_){return m.apply(this,arguments)}}())}else{const u=[];let m=[];for(const _ of e.pictures)m.push(_),3==m.length&&(u.push(m),m=[]);m.length>0&&u.push(m),e.arr=u,i&&i>0&&e.contactService.get(i).then(_=>{e.contactSelected=_,e.note.contactId=_.id})}})()}showSearchContact(){var e=this;return(0,p.Z)(function*(){e.navCtrl.push("/contact",{callback:i=>{const r=i;r&&(e.contactSelected=r,e.note.contactId=r.id)},searchMode:!0})})()}save(){var e=this;return(0,p.Z)(function*(){const n=yield e.navCtrl.loading();e.noteService.saveNote(e.note).then(function(){var i=(0,p.Z)(function*(r){e.analyticsService.logEvent("note-add-save-success");const u=[];if(e.contactSelected&&0!==e.contactSelected.id){const _=e.saveLastActive();u.push(_)}e.note.notePictures=e.pictures;const m=e.noteService.saveNotePictures(e.note);if(u.push(m),e.picturesToDelete.length>0){const _=e.noteService.deleteNotePictures(e.picturesToDelete);u.push(_)}Promise.all(u).then((0,p.Z)(function*(){yield n.dismiss(),e.exitPage()}))});return function(r){return i.apply(this,arguments)}}())})()}saveLastActive(){return this.contactSelected.lastActive=c.C.toDbString(),this.contactSelected.lastAction="note",this.contactService.saveContact(this.contactSelected).then(n=>(this.navCtrl.publish("reloadContactList"),this.navCtrl.publish("reloadContact",this.contactSelected),this.navCtrl.publish("reloadContactNote",this.contactSelected.id),n))}exitPage(){var e=this;return(0,p.Z)(function*(){yield e.navCtrl.popOnly(),e.navCtrl.publish("reloadNoteList",{filter:e.note.important?"important":e.note.frequency?"frequency":"recent"}),e.navCtrl.publish("reloadNote",e.note),e.isNew&&(yield e.navCtrl.push("/note/detail",{id:e.note.id}))})()}rememberFile(e){this.fileToUpload=e.target.files[0],this.browsePicture()}addImage(e,n){this.fileToUpload?(this.uploadDisabled=!0,this.dataService.uploadPicture(this.fileToUpload).then(i=>{i&&i.url?this.doAdd(i.url,e):i&&i.error&&(alert(this.translateService.instant(i.error)),this.uploadDisabled=!1)}).catch(i=>{console.error(i),alert("C\xf3 v\u1ea5n \u0111\u1ec1 x\u1ea3y ra, h\xe3y th\u1eed l\u1ea1i sau. (English: Something wrong, please try again later)."),this.uploadDisabled=!1})):alert(this.translateService.instant("note-add.no-picture-selected"))}downloadImage(e,n,i){var r=this;this.platform.ready().then((0,p.Z)(function*(){const u=r.transfer.create(),m=yield r.navCtrl.loading();u.download(n,r.storageDirectory+e).then(function(){var _=(0,p.Z)(function*(h){r.doAdd(h.toURL(),i),yield m.dismiss()});return function(h){return _.apply(this,arguments)}}(),function(){var _=(0,p.Z)(function*(h){yield m.dismiss()});return function(h){return _.apply(this,arguments)}}())}))}doAdd(e,n){n.imageUrl=e,this.pictures.push(n),this.buildPictureGrid(),this.refreshAvatar(),this.uploadDisabled=!1,this.fileToUpload=null,this.fileUploadInput.nativeElement.value=null}refreshAvatar(){this.note.avatarUrl=this.pictures&&this.pictures.length>0?this.pictures[0].imageUrl:null}takePicture(){var e=this;return(0,p.Z)(function*(){e.analyticsService.logEvent("note-add-take-piture");const n=new w;e.addImage(n,!0)})()}browsePicture(){var e=this;return(0,p.Z)(function*(){e.analyticsService.logEvent("note-add-browse-piture");const n=new w;e.addImage(n,!1)})()}showImage(e){var n=this;return(0,p.Z)(function*(){const i=n.pictures.findIndex(_=>_.id==e.id),r=n.pictures.map(_=>_.imageUrl),u=yield n.modalCtrl.create({component:E.v,componentProps:{images:r,id:i,canDelete:!0}});yield u.present();const{data:m}=yield u.onDidDismiss();if(m&&m.idsToDelete){const _=m.idsToDelete;for(const h of _)n.removePicture(h)}})()}closeViewPicture(){this.isInViewPictureMode=!1}buildPictureGrid(){const e=[];let n=[];for(const i of this.pictures)n.push(i),3==n.length&&(e.push(n),n=[]);n.length>0&&e.push(n),this.arr=e}removePicture(e){const n=this.pictures[e];0!=n.id&&this.picturesToDelete.push(n),this.pictures.splice(e,1),this.buildPictureGrid(),this.refreshAvatar()}changePicture(e){this.addImage(e,!1)}removeContact(){this.contactSelected=null,this.note.contactId=0}isNotCordova(){return this.navCtrl.isNotCordova()}upload(){var e=this;return(0,p.Z)(function*(){yield(yield e.actionSheetController.create({header:e.translateService.instant("common.select-image-source"),buttons:[{text:e.translateService.instant("common.load-from-gallery"),handler:()=>{e.doUpload(e.camera.PictureSourceType.PHOTOLIBRARY)}},{text:e.translateService.instant("common.use-camera"),handler:()=>{e.doUpload(e.camera.PictureSourceType.CAMERA)}},{text:e.translateService.instant("common.cancel"),role:"cancel"}]})).present()})()}doUpload(e){var n=this;return(0,p.Z)(function*(){const i=new w,r={quality:100,sourceType:e,destinationType:n.camera.DestinationType.DATA_URL,encodingType:n.camera.EncodingType.JPEG,mediaType:n.camera.MediaType.PICTURE};n.uploadDisabled=!0,n.camera.getPicture(r).then(function(){var u=(0,p.Z)(function*(m){const _=m,h=yield n.navCtrl.loading();n.dataService.uploadPictureBase64(_).then(function(){var N=(0,p.Z)(function*(A){yield h.dismiss(),A&&A.url?n.doAdd(A.url,i):A&&A.error&&(alert("C\xf3 v\u1ea5n \u0111\u1ec1 x\u1ea3y ra, h\xe3y th\u1eed l\u1ea1i sau. (English: Something wrong, please try again later)."),n.uploadDisabled=!1)});return function(A){return N.apply(this,arguments)}}()).catch(function(){var N=(0,p.Z)(function*(A){yield h.dismiss(),console.error(A)});return function(A){return N.apply(this,arguments)}}())});return function(m){return u.apply(this,arguments)}}())})()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(Z.G),t.Y36(s.IN),t.Y36(M.Y),t.Y36(v.D),t.Y36(L.V1),t.Y36(Y.$),t.Y36(K.K),t.Y36(F.y),t.Y36(s.t4),t.Y36(s.BX),t.Y36(x.sK),t.Y36(G.y))},o.\u0275cmp=t.Xpm({type:o,selectors:[["note-add"]],viewQuery:function(e,n){if(1&e&&(t.Gf(q,7),t.Gf(V,5)),2&e){let i;t.iGM(i=t.CRH())&&(n.slider=i.first),t.iGM(i=t.CRH())&&(n.fileUploadInput=i.first)}},decls:13,vars:9,consts:[["slot","start"],["defaultHref","/home"],["slot","end"],["color","primary",3,"click",4,"ngIf"],[4,"ngIf"],["color","primary",3,"click"],["name","checkmark"],["name","close"],["color","primary"],["color","dark","slot","end",3,"click",4,"ngIf"],["slot","end",3,"click",4,"ngIf"],["fill","outline","slot","end",3,"click",4,"ngIf"],[3,"ngModel","ngModelChange"],["value","content"],["name","document"],["value","picture"],["name","image"],[3,"hidden"],["color","secondary",3,"click",4,"ngIf"],["color","primary","for","files",4,"ngIf"],["type","file","accept","image/*","id","files","style","width: 0; height: 0; font-size: 0;",3,"change",4,"ngIf"],[4,"ngFor","ngForOf"],["color","dark","slot","end",3,"click"],["slot","end",3,"click"],["fill","outline","slot","end",3,"click"],["type","text","rows","11",3,"placeholder","ngModel","ngModelChange"],["color","secondary",3,"click"],["name","camera"],["color","primary","for","files"],["type","file","accept","image/*","id","files",2,"width","0","height","0","font-size","0",3,"change"],["fileUploadInput",""],["width-33","",4,"ngFor","ngForOf"],["width-33",""],[3,"src","click"]],template:function(e,n){1&e&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),t._UZ(3,"ion-back-button",1),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5),t.ALo(6,"translate"),t.qZA(),t.TgZ(7,"ion-buttons",2),t.YNc(8,H,4,3,"ion-button",3),t.YNc(9,R,3,3,"ion-button",3),t.YNc(10,j,4,3,"ion-button",3),t.qZA()()(),t.TgZ(11,"ion-content"),t.YNc(12,ct,35,28,"div",4),t.qZA()),2&e&&(t.xp6(5),t.Oqu(t.lcZ(6,7,"note-add.title")),t.xp6(3),t.Q6J("ngIf",!n.isInViewPictureMode),t.xp6(1),t.Q6J("ngIf",n.isInViewPictureMode),t.xp6(1),t.Q6J("ngIf",n.isInViewPictureMode),t.xp6(1),t.Akn(n.navCtrl.hasAds()?"--padding-bottom: 60px":""),t.xp6(1),t.Q6J("ngIf",!n.isInViewPictureMode))},dependencies:[C.sg,C.O5,f.JJ,f.On,s.oU,s.YG,s.Sm,s.wI,s.W2,s.jY,s.Gu,s.gu,s.Ie,s.Q$,s.q_,s.Nd,s.cJ,s.GO,s.yW,s.g2,s.wd,s.ho,s.sr,s.w,s.QI,s.j9,s.cs,x.X$],encapsulation:2}),o})();var rt=l(7488);const lt=["mySlider"];function dt(o,d){if(1&o){const e=t.EpF();t.TgZ(0,"ion-button",7),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.edit())}),t._UZ(1,"ion-icon",8),t.qZA()}}function ut(o,d){if(1&o){const e=t.EpF();t.TgZ(0,"ion-button",7),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.closeViewPicture())}),t._UZ(1,"ion-icon",9),t.qZA()}}function _t(o,d){if(1&o&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&o){const e=t.oxw(3);t.xp6(1),t.Oqu(e.note.contact.address)}}function pt(o,d){if(1&o){const e=t.EpF();t.TgZ(0,"ion-item-sliding")(1,"ion-item")(2,"ion-avatar",0),t._UZ(3,"img",17),t.qZA(),t.TgZ(4,"ion-label")(5,"h2")(6,"b"),t._uU(7),t.qZA()(),t.TgZ(8,"p"),t._uU(9),t.qZA(),t.YNc(10,_t,2,1,"p",6),t.qZA()(),t.TgZ(11,"ion-item-options",18)(12,"ion-item-option",4),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.text())}),t._UZ(13,"ion-icon",19),t._uU(14),t.ALo(15,"translate"),t.qZA(),t.TgZ(16,"ion-item-option",20),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.call())}),t._UZ(17,"ion-icon",21),t._uU(18),t.ALo(19,"translate"),t.qZA()()()}if(2&o){const e=t.oxw(2);t.xp6(3),t.Q6J("src",e.contactImageOrPlaceholder(),t.LSH),t.xp6(4),t.Oqu(e.note.contact.fullName),t.xp6(2),t.Oqu(e.note.contact.mobile),t.xp6(1),t.Q6J("ngIf",e.note.contact.address),t.xp6(4),t.hij(" ",t.lcZ(15,6,"action.text")," "),t.xp6(4),t.hij(" ",t.lcZ(19,8,"action.call")," ")}}function mt(o,d){1&o&&t._UZ(0,"ion-icon",22)}function ht(o,d){1&o&&t._UZ(0,"ion-icon",23)}function ft(o,d){if(1&o){const e=t.EpF();t.TgZ(0,"ion-segment",24),t.NdJ("ngModelChange",function(i){t.CHM(e);const r=t.oxw(2);return t.KtG(r.noteSegment=i)}),t.TgZ(1,"ion-segment-button",25),t._UZ(2,"ion-icon",26),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"ion-segment-button",27),t._UZ(6,"ion-icon",28),t._uU(7),t.ALo(8,"translate"),t.qZA()()}if(2&o){const e=t.oxw(2);t.Q6J("ngModel",e.noteSegment),t.xp6(1),t.Q6J("hidden",!e.note.content),t.xp6(2),t.hij(" ",t.lcZ(4,5,"note-detail.content")," "),t.xp6(2),t.Q6J("hidden",!e.arr||0===e.arr.length),t.xp6(2),t.hij(" ",t.lcZ(8,7,"note-detail.photos")," ")}}function gt(o,d){if(1&o){const e=t.EpF();t.TgZ(0,"ion-list")(1,"ion-item",29),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.edit())}),t.TgZ(2,"span",30),t._uU(3),t.qZA()()()}if(2&o){const e=t.oxw(2);t.xp6(3),t.Oqu(e.note.content)}}function vt(o,d){if(1&o){const e=t.EpF();t.TgZ(0,"ion-col")(1,"img",31),t.NdJ("click",function(){const r=t.CHM(e).$implicit,u=t.oxw(3);return t.KtG(u.showImage(r))}),t.qZA()()}if(2&o){const e=d.$implicit;t.xp6(1),t.Q6J("src",e.imageUrl,t.LSH)}}function Ct(o,d){if(1&o&&(t.TgZ(0,"ion-row"),t.YNc(1,vt,2,1,"ion-col",16),t.qZA()),2&o){const e=d.$implicit;t.xp6(1),t.Q6J("ngForOf",e)}}function xt(o,d){if(1&o&&(t.TgZ(0,"div")(1,"ion-list"),t.YNc(2,pt,20,10,"ion-item-sliding",6),t.TgZ(3,"ion-item",10),t._UZ(4,"ion-icon",11),t.TgZ(5,"p"),t._uU(6),t.qZA(),t.TgZ(7,"p",2),t.YNc(8,mt,1,0,"ion-icon",12),t.YNc(9,ht,1,0,"ion-icon",13),t.qZA()()(),t.YNc(10,ft,9,9,"ion-segment",14),t.YNc(11,gt,4,1,"ion-list",6),t.TgZ(12,"ion-grid",15),t.YNc(13,Ct,2,1,"ion-row",16),t.qZA()()),2&o){const e=t.oxw();t.xp6(2),t.Q6J("ngIf",0!==e.note.contactId),t.xp6(4),t.hij(" ",e.dateTimeFormat(e.note.modifiedAt)," "),t.xp6(2),t.Q6J("ngIf",e.note.frequency),t.xp6(1),t.Q6J("ngIf",e.note.important),t.xp6(1),t.Q6J("ngIf",e.note.content&&e.arr&&e.arr.length>0),t.xp6(1),t.Q6J("ngIf","content"==e.noteSegment&&e.note.content),t.xp6(1),t.Q6J("hidden","picture"!=e.noteSegment&&e.arr&&e.arr.length>0),t.xp6(1),t.Q6J("ngForOf",e.arr)}}const Tt=[{path:"",component:J},{path:"detail",component:(()=>{class o{constructor(e,n,i,r,u,m,_,h){this.navCtrl=e,this.translateService=n,this.noteService=i,this.contactService=r,this.userService=u,this.actionSheetCtrl=m,this.alertCtrl=_,this.analyticsService=h,this.params=null,this.note=new T,this.noteSegment="content",this.notePictures=[],this.isInViewPictureMode=!1,this.arr=[];const N=A=>{this.note&&A.detail.id===this.note.id&&this.reload()};this.navCtrl.unsubscribe("reloadNote",N),this.navCtrl.subscribe("reloadNote",N)}ionViewWillEnter(){var e=this;return(0,p.Z)(function*(){yield e.analyticsService.setCurrentScreen("note-detail")})()}ngOnInit(){this.reload()}reload(){var e=this;return(0,p.Z)(function*(){if(e.note=new T,e.noteSegment="content",e.params=e.navCtrl.getParams(e.params),e.params&&e.params.id&&e.params.id>0){const n=e.params.id,i=yield e.navCtrl.loading();e.noteService.get(n).then(function(){var r=(0,p.Z)(function*(u){yield i.dismiss(),e.note=u,e.noteService.getNotePicturesByNoteId(e.note.id).then(m=>{e.notePictures=m;const _=[];let h=[];for(const N of e.notePictures)h.push(N),3==h.length&&(_.push(h),h=[]);h.length>0&&_.push(h),e.arr=_,""==e.note.content&&e.arr&&e.arr.length>0&&(e.noteSegment="picture")})});return function(u){return r.apply(this,arguments)}}())}})()}isNotCordova(){return this.navCtrl.isNotCordova()}call(){this.saveLastActive("call"),I.W.callPhone(this.note.contact.mobile)}text(){this.saveLastActive("text"),I.W.sendSms(this.note.contact.mobile)}saveLastActive(e){return this.note.contact.lastActive=c.C.toDbString(),this.note.contact.lastAction=e,this.contactService.saveContact(this.note.contact).then(n=>(this.navCtrl.publish("reloadContactList"),this.navCtrl.publish("reloadContact",this.note.contact),n))}contactImageOrPlaceholder(){return I.W.contactImageOrPlaceholder(this.note.contact.avatarUrl)}dateFormat(e){return c.C.toUiDateString(e)}actionIcon(e){return I.W.actionIcon(e)}dateTimeFormat(e){return c.C.toUiString(e)}edit(){this.navCtrl.push("/note/add",{id:this.note.id})}showImage(e){const n=this.notePictures.findIndex(r=>r.id==e.id),i=this.notePictures.map(r=>r.imageUrl);this.navCtrl.push("/gallery",{images:i,id:n})}closeViewPicture(){this.isInViewPictureMode=!1}presentActionSheet(){var e=this;return(0,p.Z)(function*(){yield(yield e.actionSheetCtrl.create({header:e.translateService.instant("action.action"),buttons:[{text:e.translateService.instant("note.delete"),role:"destructive",handler:()=>{e.deleteNote()}},{text:e.translateService.instant("note-detail.share"),handler:()=>{e.shareNote()}},{text:e.translateService.instant("common.cancel"),role:"cancel",handler:()=>{}}]})).present()})()}deleteNote(){var e=this;return(0,p.Z)(function*(){yield(yield e.alertCtrl.create({header:e.translateService.instant("common.confirm"),message:e.translateService.instant("note.delete-alert"),buttons:[{text:e.translateService.instant("common.agree"),handler:()=>{e.noteService.deleteNote(e.note).then((0,p.Z)(function*(){e.analyticsService.logEvent("note-detail-delete-success"),e.noteService.getNotePicturesByNoteId(e.note.id).then(i=>{i&&i.length>0&&e.noteService.deleteNotePictures(i)}),e.navCtrl.publish("reloadNoteList"),e.navCtrl.publish("reloadContact",e.note.contact),e.navCtrl.pop()}))}},{text:e.translateService.instant("common.cancel"),handler:()=>{}}]})).present()})()}shareNote(){this.userService.share(this.note.content,this.notePictures&&this.notePictures.length>0?this.notePictures[0].imageUrl:"")}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(Z.G),t.Y36(x.sK),t.Y36(M.Y),t.Y36(F.y),t.Y36(rt.K),t.Y36(s.BX),t.Y36(s.Br),t.Y36(G.y))},o.\u0275cmp=t.Xpm({type:o,selectors:[["note-detail"]],viewQuery:function(e,n){if(1&e&&t.Gf(lt,7),2&e){let i;t.iGM(i=t.CRH())&&(n.slider=i.first)}},decls:14,vars:8,consts:[["slot","start"],["defaultHref","/home"],["slot","end"],["ion-button","","color","primary",3,"click",4,"ngIf"],["color","primary",3,"click"],["name","ellipsis-vertical"],[4,"ngIf"],["ion-button","","color","primary",3,"click"],["name","create"],["name","close"],["lines","none"],["name","document","slot","start"],["name","bookmark",4,"ngIf"],["name","star",4,"ngIf"],[3,"ngModel","ngModelChange",4,"ngIf"],[3,"hidden"],[4,"ngFor","ngForOf"],[3,"src"],["side","end"],["name","send"],["color","secondary",3,"click"],["name","call"],["name","bookmark"],["name","star"],[3,"ngModel","ngModelChange"],["value","content",3,"hidden"],["name","document"],["value","picture",3,"hidden"],["name","image"],[1,"ion-text-wrap",3,"click"],[2,"white-space","pre-wrap"],[3,"src","click"]],template:function(e,n){1&e&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),t._UZ(3,"ion-back-button",1),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5),t.ALo(6,"translate"),t.qZA(),t.TgZ(7,"ion-buttons",2),t.YNc(8,dt,2,0,"ion-button",3),t.YNc(9,ut,2,0,"ion-button",3),t.TgZ(10,"ion-button",4),t.NdJ("click",function(){return n.presentActionSheet()}),t._UZ(11,"ion-icon",5),t.qZA()()()(),t.TgZ(12,"ion-content"),t.YNc(13,xt,14,8,"div",6),t.qZA()),2&e&&(t.xp6(5),t.Oqu(t.lcZ(6,6,"note-detail.title")),t.xp6(3),t.Q6J("ngIf",!n.isInViewPictureMode),t.xp6(1),t.Q6J("ngIf",n.isInViewPictureMode),t.xp6(3),t.Akn(n.navCtrl.hasAds()?"--padding-bottom: 60px":""),t.xp6(1),t.Q6J("ngIf",!n.isInViewPictureMode))},dependencies:[C.sg,C.O5,f.JJ,f.On,s.BJ,s.oU,s.YG,s.Sm,s.wI,s.W2,s.jY,s.Gu,s.gu,s.Ie,s.u8,s.IK,s.td,s.Q$,s.q_,s.Nd,s.cJ,s.GO,s.wd,s.sr,s.QI,s.cs,x.X$],encapsulation:2}),o})()},{path:"add",component:st}];let Zt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[S.Bz.forChild(Tt),S.Bz]}),o})(),At=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[C.ez,f.u5,s.Pc,Zt,b.m,U.uH,x.aw.forChild({loader:{provide:x.Zw,useFactory:b.x,deps:[a.eN]}})]}),o})()},2402:(P,y,l)=>{l.d(y,{n:()=>k});var C=l(5861),f=l(191),s=l(9854),x=l(971),a=l(6738),b=l(5851),U=l(667),S=l(323),p=l(6895),t=l(3306);const M=["template"];function O(g,T){1&g&&a._UZ(0,"ion-back-button",11)}function J(g,T){if(1&g){const c=a.EpF();a.TgZ(0,"ion-button",12),a.NdJ("click",function(){a.CHM(c);const v=a.oxw(2);return a.KtG(v.dismiss())}),a._UZ(1,"ion-icon",13),a.qZA()}}function E(g,T){1&g&&a._UZ(0,"ion-menu-button",14)}function w(g,T){if(1&g){const c=a.EpF();a.TgZ(0,"ion-button",7),a.NdJ("click",function(){a.CHM(c);const v=a.oxw(2);return a.KtG(v.navCtrl.home())}),a._UZ(1,"ion-icon",15),a.qZA()}}function I(g,T){if(1&g){const c=a.EpF();a.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",1),a.YNc(3,O,1,0,"ion-back-button",2),a.YNc(4,J,2,0,"ion-button",3),a.YNc(5,E,1,0,"ion-menu-button",4),a.YNc(6,w,2,0,"ion-button",5),a.qZA(),a.TgZ(7,"ion-title"),a._uU(8),a.ALo(9,"translate"),a.qZA(),a.TgZ(10,"ion-buttons",6)(11,"ion-button",7),a.NdJ("click",function(){a.CHM(c);const v=a.oxw();return a.KtG(v.openAdd())}),a._UZ(12,"ion-icon",8),a.qZA()()()(),a.TgZ(13,"ion-content")(14,"div",9,10),a.NdJ("scrollToTop",function(){a.CHM(c);const v=a.oxw();return a.KtG(v.scrollToTop())}),a.qZA()()}if(2&g){const c=a.oxw();a.xp6(3),a.Q6J("ngIf",c.backOnly&&!c.searchMode),a.xp6(1),a.Q6J("ngIf",c.searchMode),a.xp6(1),a.Q6J("ngIf",!c.searchMode&&!c.backOnly),a.xp6(1),a.Q6J("ngIf",!c.searchMode&&!c.backOnly),a.xp6(2),a.Oqu(a.lcZ(9,25,c.tableKebab+".title")),a.xp6(4),a.Q6J("name",c.iconAdd),a.xp6(1),a.Akn(c.navCtrl.hasAds()?"--padding-bottom: 60px":""),a.xp6(1),a.Q6J("presentItemActions",c.presentItemActions)("orderBy",c.orderBy)("table",c.table)("iconAdd",c.iconAdd)("isQuickAdd",c.isQuickAdd)("callable",c.callable)("segmentValues",c.segmentValues)("itemTemplate",c.itemTemplate)("searchFields",c.searchFields)("defaultSegmentValue",c.defaultSegmentValue)("canEditItem",c.canEditItem)("filterObjects",c.filterObjects)("actions",c.actions)("canDeleteItem",c.canDeleteItem)("noDetail",c.noDetail)("deleteRelated",c.deleteRelated)("fetchObjectsFunc",c.fetchObjectsFunc)}}let k=(()=>{class g{constructor(c,Z,v,L,Y){this.navCtrl=c,this.staffService=Z,this.viewContainerRef=v,this.analyticsService=L,this.viewCtrl=Y,this.presentItemActions={},this.table="",this.orderBy="",this.orderOrient="asc",this.iconAdd="add",this.isQuickAdd=!1,this.callable=!1,this.segmentValues=[],this.itemTemplate={},this.searchFields=[],this.defaultSegmentValue="",this.canEditItem=!1,this.filterObjects={},this.actions=[],this.canDeleteItem=!1,this.noDetail=!1,this.backOnly=!1,this.tableKebab="",this.searchMode=!1}ionViewWillEnter(){var c=this;return(0,C.Z)(function*(){yield c.analyticsService.setCurrentScreen(c.table)})()}ngOnInit(){this.tableKebab=(0,s.ST)(this.table),this.params=this.navCtrl.getParams(this.params),this.params&&this.params.searchMode&&(this.searchMode=this.params.searchMode),this.params&&this.params.callback&&(this.callback=this.params.callback),this.viewContainerRef.createEmbeddedView(this.template)}openAdd(){this.navCtrl.navigateForward("/"+this.tableKebab+"/"+(this.isQuickAdd?"quick-add":"add"),{fromSearch:this.searchMode})}scrollToTop(){this.content.scrollToTop()}dismiss(){var c=this;return(0,C.Z)(function*(){if(c.callback)return c.callback(null),void(yield c.navCtrl.back());c.viewCtrl.dismiss()})()}callReload(){var c=this;return(0,C.Z)(function*(){yield c.listOnlyComponent.reloadObjects()})()}}return g.\u0275fac=function(c){return new(c||g)(a.Y36(b.G),a.Y36(U.x),a.Y36(a.s_b),a.Y36(S.y),a.Y36(f.IN))},g.\u0275cmp=a.Xpm({type:g,selectors:[["list"],["","list",""]],viewQuery:function(c,Z){if(1&c&&(a.Gf(M,7),a.Gf(f.W2,5),a.Gf(x.s,5)),2&c){let v;a.iGM(v=a.CRH())&&(Z.template=v.first),a.iGM(v=a.CRH())&&(Z.content=v.first),a.iGM(v=a.CRH())&&(Z.listOnlyComponent=v.first)}},inputs:{presentItemActions:"presentItemActions",table:"table",orderBy:"orderBy",orderOrient:"orderOrient",iconAdd:"iconAdd",isQuickAdd:"isQuickAdd",callable:"callable",segmentValues:"segmentValues",itemTemplate:"itemTemplate",searchFields:"searchFields",defaultSegmentValue:"defaultSegmentValue",canEditItem:"canEditItem",filterObjects:"filterObjects",actions:"actions",canDeleteItem:"canDeleteItem",noDetail:"noDetail",deleteRelated:"deleteRelated",backOnly:"backOnly",fetchObjectsFunc:"fetchObjectsFunc"},decls:2,vars:0,consts:[["template",""],["slot","start"],["defaultHref","/home",4,"ngIf"],[3,"click",4,"ngIf"],["menu","first",4,"ngIf"],["color","primary",3,"click",4,"ngIf"],["slot","end"],["color","primary",3,"click"],[3,"name"],["list-only","",3,"presentItemActions","orderBy","table","iconAdd","isQuickAdd","callable","segmentValues","itemTemplate","searchFields","defaultSegmentValue","canEditItem","filterObjects","actions","canDeleteItem","noDetail","deleteRelated","fetchObjectsFunc","scrollToTop"],["listOnlyComponent",""],["defaultHref","/home"],[3,"click"],["name","close"],["menu","first"],["name","home"]],template:function(c,Z){1&c&&a.YNc(0,I,16,27,"ng-template",null,0,a.W1O)},dependencies:[p.O5,f.oU,f.YG,f.Sm,f.W2,f.Gu,f.gu,f.fG,f.wd,f.sr,f.cs,x.s,t.X$],encapsulation:2}),g})()}}]);