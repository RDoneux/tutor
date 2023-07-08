"use strict";(self.webpackChunktutor=self.webpackChunktutor||[]).push([[252],{3252:(O,d,n)=>{n.r(d),n.d(d,{ComponentShowroomModule:()=>P});var m=n(6814),g=n(6538),t=n(4946),Z=n(3187),M=n(3377),v=n(8508),f=n(2264),o=n(95);const x=function(){return{error:"pattern",message:"This input must contain only lower case letters"}},h=function(){return{error:"minlength",message:"This field must be longer than 8 characters"}},r=function(e,a){return[e,a]},T=function(){return{error:"pattern",message:"You must only select test"}},C=function(){return{error:"minlength",message:"This field must be longer than 20 characters"}},b=function(){return{error:"maxlength",message:"this field can not be longer than 40 characters"}},y=function(e,a,l){return[e,a,l]},J=function(){return{value:1,label:"1"}},A=function(){return{value:2,label:"2"}},D=function(){return{value:3,label:"3"}},U=function(){return{value:4,label:"4"}},Q=function(){return{value:5,label:"5"}},w=function(e,a,l,i,u){return[e,a,l,i,u]},c=function(){return{value:30,label:"30 minutes"}},s=function(){return{value:90,label:"1.5 hours"}},S=[{path:"",component:(()=>{class e{constructor(){this.validatedInput="",this.validatedSelect="",this.validatedTextarea=""}}return e.\u0275fac=function(l){return new(l||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-component-showroom"]],decls:66,vars:84,consts:[[1,"component-showroom__container"],[1,"component-showroom__page-title"],[1,"component-showroom__item-type-container"],[3,"label"],["id","text-area-input-id"],["value","test input value"],["readonly",""],["disabled",""],[3,"label","validationMessages"],["name","validatedInput","required","","pattern","[a-z]*","minlength","8",3,"ngModel","ngModelChange"],["id","text-area-input-id","readonly",""],["id","text-area-input-id","disabled",""],["name","validatedSelect","required","","pattern","test",3,"ngModel","ngModelChange"],["spellCheck","true","lang","en"],["name","textareavalidated","required","","minlength","20","maxlength","40",3,"ngModel","ngModelChange"],["type","submit","value","Basic Button"],["type","submit","value","Disabled Basic Button","disabled",""],["type","range"],[3,"label","ticks","tickDirection","tickLayout"],["type","range","min","1","max","5","step","1","value","1"],[3,"label","ticks","tickDirection","tickLayout","valueMetric"],["type","range","min","30","max","90","step","10","value","45"]],template:function(l,i){1&l&&(t.TgZ(0,"section",0)(1,"h1",1),t._uU(2,"Component Showroom"),t.qZA(),t.TgZ(3,"h3"),t._uU(4,"Input Fields"),t.qZA(),t.TgZ(5,"form",2)(6,"app-text-input",3),t._UZ(7,"input",4),t.qZA(),t.TgZ(8,"app-text-input",3),t._UZ(9,"input",5),t.qZA(),t.TgZ(10,"app-text-input",3),t._UZ(11,"input",6),t.qZA(),t.TgZ(12,"app-text-input",3),t._UZ(13,"input",7),t.qZA(),t.TgZ(14,"app-text-input",8)(15,"input",9),t.NdJ("ngModelChange",function(p){return i.validatedInput=p}),t.qZA()(),t.TgZ(16,"app-text-input",3)(17,"select",4),t._UZ(18,"option"),t.qZA()(),t.TgZ(19,"app-text-input",3)(20,"select",4)(21,"option"),t._uU(22,"test"),t.qZA()()(),t.TgZ(23,"app-text-input",3)(24,"select",10)(25,"option"),t._uU(26,"test"),t.qZA()()(),t.TgZ(27,"app-text-input",3)(28,"select",11)(29,"option"),t._uU(30,"test"),t.qZA()()(),t.TgZ(31,"app-text-input",8)(32,"select",12),t.NdJ("ngModelChange",function(p){return i.validatedSelect=p}),t.TgZ(33,"option"),t._uU(34,"test"),t.qZA(),t.TgZ(35,"option"),t._uU(36,"test 1"),t.qZA()()(),t.TgZ(37,"app-text-input",3),t._UZ(38,"textarea",13),t.qZA(),t.TgZ(39,"app-text-input",3)(40,"textarea",13),t._uU(41," prefilled value"),t.qZA()(),t.TgZ(42,"app-text-input",3),t._UZ(43,"textarea",6),t.qZA(),t.TgZ(44,"app-text-input",3),t._UZ(45,"textarea",7),t.qZA(),t.TgZ(46,"app-text-input",8)(47,"textarea",14),t.NdJ("ngModelChange",function(p){return i.validatedTextarea=p}),t.qZA()(),t._UZ(48,"input",15)(49,"input",16),t.qZA()(),t._UZ(50,"app-horizontal-separator"),t.TgZ(51,"section"),t._UZ(52,"app-enquiry-form"),t.qZA(),t._UZ(53,"app-horizontal-separator"),t.TgZ(54,"section",0)(55,"div",2)(56,"app-range",3),t._UZ(57,"input",17),t.qZA(),t.TgZ(58,"app-range",18),t._UZ(59,"input",19),t.qZA(),t.TgZ(60,"app-range",20),t._UZ(61,"input",21),t.qZA(),t.TgZ(62,"app-range",20),t._UZ(63,"input",21),t.qZA(),t.TgZ(64,"app-range",20),t._UZ(65,"input",21),t.qZA()()()),2&l&&(t.xp6(6),t.Q6J("label","Basic Text Field"),t.xp6(2),t.Q6J("label","Prefilled Text Field"),t.xp6(2),t.Q6J("label","Readonly Text Field"),t.xp6(2),t.Q6J("label","Disabled Text Field"),t.xp6(2),t.Q6J("label","Validated Text Input")("validationMessages",t.WLB(43,r,t.DdM(41,x),t.DdM(42,h))),t.xp6(1),t.Q6J("ngModel",i.validatedInput),t.xp6(1),t.Q6J("label","Basic Text Field"),t.xp6(3),t.Q6J("label","Prefilled Text Field"),t.xp6(4),t.Q6J("label","Readonly Text Field"),t.xp6(4),t.Q6J("label","Disabled Text Field"),t.xp6(4),t.Q6J("label","Validated Text Input")("validationMessages",t.WLB(48,r,t.DdM(46,T),t.DdM(47,h))),t.xp6(1),t.Q6J("ngModel",i.validatedSelect),t.xp6(5),t.Q6J("label","Basic Text Field"),t.xp6(2),t.Q6J("label","Prefilled Text Field"),t.xp6(3),t.Q6J("label","Readonly Text Field"),t.xp6(2),t.Q6J("label","Disabled Text Field"),t.xp6(2),t.Q6J("label","Validated Text Input")("validationMessages",t.kEZ(54,y,t.DdM(51,x),t.DdM(52,C),t.DdM(53,b))),t.xp6(1),t.Q6J("ngModel",i.validatedTextarea),t.xp6(9),t.Q6J("label","Basic Range Input"),t.xp6(2),t.Q6J("label","Range Input")("ticks",t.qbA(63,w,t.DdM(58,J),t.DdM(59,A),t.DdM(60,D),t.DdM(61,U),t.DdM(62,Q)))("tickDirection","none")("tickLayout","row"),t.xp6(2),t.Q6J("label","Range Input")("ticks",t.WLB(71,r,t.DdM(69,c),t.DdM(70,s)))("tickDirection","horizontal-tb")("tickLayout","row")("valueMetric","minutes"),t.xp6(2),t.Q6J("label","Range Input")("ticks",t.WLB(76,r,t.DdM(74,c),t.DdM(75,s)))("tickDirection","horizontal-tb")("tickLayout","row")("valueMetric","minutes"),t.xp6(2),t.Q6J("label","Range Input")("ticks",t.WLB(81,r,t.DdM(79,c),t.DdM(80,s)))("tickDirection","horizontal-tb")("tickLayout","row")("valueMetric","minutes"))},dependencies:[Z.t,M.U,v.P,f.s,o._Y,o.YN,o.Kr,o.Fj,o.EJ,o.JJ,o.JL,o.Q7,o.wO,o.nD,o.c5,o.On,o.F],styles:[".component-showroom__container[_ngcontent-%COMP%]{padding:2rem;display:flex;flex-direction:column;align-items:center;justify-content:center}.component-showroom__container[_ngcontent-%COMP%]   .component-showroom__page-title[_ngcontent-%COMP%]{text-align:center;margin:0;padding-bottom:2rem}.component-showroom__container[_ngcontent-%COMP%]   .component-showroom__item-type-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(5,auto);column-gap:20px;row-gap:20px;width:100%}"]}),e})()}];let F=(()=>{class e{}return e.\u0275fac=function(l){return new(l||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[g.Bz.forChild(S),g.Bz]}),e})();var _=n(1120),B=n(8797),q=n(8031),I=n(9823),L=n(4578),R=n(4029);let z=(()=>{class e{}return e.\u0275fac=function(l){return new(l||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.ez,_.N,I.n,B.Y,q.X,L.R,R.W]}),e})();var k=n(8032);let P=(()=>{class e{}return e.\u0275fac=function(l){return new(l||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.ez,F,z,k.p,o.u5]}),e})()}}]);