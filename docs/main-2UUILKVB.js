import{b as g,f as m,g as n,h as e,i as p,j as l,l as i,m as s,n as f,o as _,p as h,q as C,r as M}from"./chunk-STORFL3B.js";var u=[{path:"home",loadChildren:()=>import("./chunk-ILIJ5PCK.js").then(t=>t.HomeModule)},{path:"work",loadChildren:()=>import("./chunk-T4SG7NPC.js").then(t=>t.WorkModule)},{path:"",pathMatch:"full",redirectTo:"home"},{path:"**",redirectTo:"home"}];var O={providers:[M(u)]};var P=(()=>{let a=class a{constructor(o){this.router=o,this.title="About Gopala Krishna Kodimela"}navigateTo(o){this.router.navigateByUrl(o)}navigateExt(o,c="_blank",r="CV"){r==="CV"&&alert("If you are restricted to visit Google Drive links, Please use Contact Me option in Home page"),window.open(o,c)}};a.\u0275fac=function(c){return new(c||a)(m(C))},a.\u0275cmp=g({type:a,selectors:[["app-root"]],standalone:!0,features:[s],decls:27,vars:0,consts:[[1,"app-container"],[1,"headder"],[1,"profile-image"],["href","https://www.linkedin.com/in/gopalakrishnakodimela","target","_blank",1,"linkedInIcon"],[1,"fab","fa-linkedin","fa-1x"],["href","javascript:void(0)",1,"profile-name",3,"click"],[1,"logo"],[1,"menu"],[1,"nav-list","transistion"],["href","javascript:void(0)",3,"click"],[1,"fas","fa-arrow-circle-down"],[1,"body-container"],[1,"footer",3,"click"],[1,"linkedin"],[1,"copy-right"],[1,"far","fa-copyright"]],template:function(c,r){c&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"a",3),p(4,"i",4),e(),n(5,"a",5),l("click",function(){return r.navigateTo("home")}),n(6,"span",6),i(7," | "),e(),i(8,"Gopala Krishna Kodimela "),e()(),n(9,"div",7)(10,"ul",8)(11,"li")(12,"a",9),l("click",function(){return r.navigateExt("https://bit.ly/gopalaResume")}),p(13,"i",10),i(14," Resume"),e()(),n(15,"li")(16,"a",9),l("click",function(){return r.navigateTo("work")}),i(17,"Work"),e()()()()(),n(18,"div",11),p(19,"router-outlet"),e(),n(20,"div",12),l("click",function(){return r.navigateExt("https://www.linkedin.com/in/gopalakrishnakodimela")}),n(21,"a",13),i(22,"Linked"),p(23,"i",4),e(),n(24,"p",14),p(25,"i",15),i(26," 2024 Gopala Krishna Kodimela. All rights reserved. "),e()()())},dependencies:[f,h],styles:[".app-container[_ngcontent-%COMP%]{text-align:center;font-family:Merriweather,serif}.app-container[_ngcontent-%COMP%]   .headder[_ngcontent-%COMP%]{position:fixed;width:100%;height:75px;background:#100e17;z-index:1}@media (max-width: 576px){.app-container[_ngcontent-%COMP%]   .headder[_ngcontent-%COMP%]{height:175px}}.app-container[_ngcontent-%COMP%]   .profile-image[_ngcontent-%COMP%]{position:absolute;width:auto;height:50px;margin:10px;padding:5px;left:25px;top:20px}.app-container[_ngcontent-%COMP%]   .profile-image[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}.app-container[_ngcontent-%COMP%]   .profile-name[_ngcontent-%COMP%]:link{text-decoration:none;font-size:1.8rem}.app-container[_ngcontent-%COMP%]   .profile-name[_ngcontent-%COMP%]:hover, .app-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{background:linear-gradient(90deg,#ff8a00,#e52e71);-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-weight:bolder}.app-container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{position:absolute;left:62.5rem;top:15px;right:10px;z-index:1;align-self:auto}@media only screen and (min-width: 768px){.app-container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{left:auto;z-index:0;font-size:22px;font-family:Montserrat,sans-serif}}@media (max-width: 576px){.app-container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{left:0;top:100px;right:60px}}.app-container[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]{list-style-type:none;padding:0;overflow:hidden;position:relative;margin:15px;width:auto}.app-container[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{float:right}.app-container[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;color:#fff;text-align:center;padding:14px 16px;text-decoration:none}.app-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#201c29}.app-container[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]:nth-child(1)   [_ngcontent-%COMP%]:hover{color:orange}.app-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{margin-top:-50px;position:relative;padding-top:5px;padding-bottom:5px;height:25%;background:#100e17;font-size:15px;box-shadow:0 4px 80px #070509}.app-container[_ngcontent-%COMP%]   .copy-right[_ngcontent-%COMP%]{color:#fff;font-family:Montserrat,sans-serif;letter-spacing:2;padding-top:20px;position:relative}.app-container[_ngcontent-%COMP%]   .linkedin[_ngcontent-%COMP%]{position:relative;top:20px;font-weight:700;text-decoration:none;color:#fff;font-size:1.2rem}.app-container[_ngcontent-%COMP%]   .linkedin[_ngcontent-%COMP%]:hover{color:#e52e71}.app-container[_ngcontent-%COMP%]   .linkedInIcon[_ngcontent-%COMP%]{font-size:1.8rem}.app-container[_ngcontent-%COMP%]   .linkedInIcon[_ngcontent-%COMP%]:hover{color:#0073b1!important}.app-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{cursor:pointer}"]});let t=a;return t})();_(P,O).catch(t=>console.error(t));