(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{UFnY:function(e,b,a){"use strict";a.r(b),a.d(b,"PublicModule",function(){return d});var c=a("ofXK"),i=a("tyNb"),o=a("fXoL");const l=[{path:"",component:(()=>{class e{constructor(e){this.locale=e,this.isEnglish=this.locale.startsWith("en")}}return e.\u0275fac=function(b){return new(b||e)(o.Db(o.u))},e.\u0275cmp=o.xb({type:e,selectors:[["app-public"]],decls:145,vars:1,consts:function(){let e,b,a,c,i,l,t,d,n,s,r,f,T,E,_,$,u,L,h,O,p,G,S,C,A,F,g,D,m,z,I,R,X,J,w,B,y,v,K,N,k,j,x,P,M,Y,H,U,W,q,Q;return e="" + "\ufffd#3\ufffd" + "Fran\xE7ais" + "\ufffd/#3\ufffd" + "",b="Angular boilerplate",a="Angular 11 boilerplate with " + "\ufffd#8\ufffd" + "Spectre.css" + "\ufffd/#8\ufffd" + ", i18n, static prerendering and some common resources.",c="Getting started",i="Install everything with " + "\ufffd#13\ufffd" + "npm install" + "\ufffd/#13\ufffd" + ", then:",l="" + "\ufffd#17\ufffd" + "npm start" + "\ufffd/#17\ufffd" + " to start the project locally on " + "\ufffd#18\ufffd" + "http://localhost:4200" + "\ufffd/#18\ufffd" + " (accessible through local network)",t="" + "\ufffd#21\ufffd" + "npm run start:fr" + "\ufffd/#21\ufffd" + " does the same using the French locale",d="" + "\ufffd#24\ufffd" + "npm lint" + "\ufffd/#24\ufffd" + " to lint (the default configuration has not been modified)",n="" + "\ufffd#27\ufffd" + "npm run extract" + "\ufffd/#27\ufffd" + " to extract the source language file in " + "\ufffd#28\ufffd" + "src/locale" + "\ufffd/#28\ufffd" + "",s="" + "\ufffd#31\ufffd" + "npm run build" + "\ufffd/#31\ufffd" + " to build for production, files are generated in " + "\ufffd#32\ufffd" + "dist/angular-boilerplate/browser" + "\ufffd/#32\ufffd" + "",r="" + "\ufffd#35\ufffd" + "npm run prerender" + "\ufffd/#35\ufffd" + " does the same but it also prerenders routes defined in the " + "[\ufffd#36\ufffd|\ufffd#37\ufffd]" + "prerender" + "[\ufffd/#36\ufffd|\ufffd/#37\ufffd]" + " configuration in " + "[\ufffd#36\ufffd|\ufffd#37\ufffd]" + "angular.json" + "[\ufffd/#36\ufffd|\ufffd/#37\ufffd]" + "",r=o.Kb(r),f="Features",T="Styling",E="" + "\ufffd#44\ufffd" + "Spectre.css" + "[\ufffd/#44\ufffd|\ufffd/#45\ufffd]" + ", a lightweight CSS framework, is included with its set of pure CSS icons " + "\ufffd#45\ufffd" + "Icons.css" + "[\ufffd/#44\ufffd|\ufffd/#45\ufffd]" + ".",E=o.Kb(E),_="i18n",$="i18n is done with the native package. It is currently configured to be in English in the source code and to have a French translation. The exact configuration is detailed below.",u="Common resources",L="Directives",h="" + "\ufffd#57\ufffd" + "AutofocusDirective" + "\ufffd/#57\ufffd" + ": dynamically focuses an element",O="Pipes",p="" + "\ufffd#63\ufffd" + "ConcatPipe" + "\ufffd/#63\ufffd" + "",G="" + "\ufffd#66\ufffd" + "ForObjectPipe" + "\ufffd/#66\ufffd" + ": iterates through the keys of an object",S="" + "\ufffd#69\ufffd" + "JoinPipe" + "\ufffd/#69\ufffd" + "",C="" + "\ufffd#72\ufffd" + "LastElementPipe" + "\ufffd/#72\ufffd" + ": returns the last element of an array",A="" + "\ufffd#75\ufffd" + "SplitPipe" + "\ufffd/#75\ufffd" + "",F="" + "\ufffd#78\ufffd" + "ToFixedPipe" + "\ufffd/#78\ufffd" + "",g="Structure",D="@core",m="" + "\ufffd#85\ufffd" + "CoreModule" + "\ufffd/#85\ufffd" + " is supposed to contain global services and models. There are a few other useful files:",z="" + "[\ufffd#89\ufffd|\ufffd#90\ufffd]" + "core.constants.ts" + "[\ufffd/#89\ufffd|\ufffd/#90\ufffd]" + " to store application constants (not to be confused with " + "[\ufffd#89\ufffd|\ufffd#90\ufffd]" + "environment.ts" + "[\ufffd/#89\ufffd|\ufffd/#90\ufffd]" + ")",z=o.Kb(z),I="" + "\ufffd#93\ufffd" + "core.utils.ts" + "\ufffd/#93\ufffd" + " to store simple functions you want to be able to use everywhere",R="@theme",X="" + "\ufffd#98\ufffd" + "ThemeModule" + "\ufffd/#98\ufffd" + " is supposed to contain global resources which can be used in templates (components, directives, pipes, etc.). You can also find a folder named " + "\ufffd#99\ufffd" + "styles" + "\ufffd/#99\ufffd" + " containing the following files:",J="" + "\ufffd#103\ufffd" + "custom-spectre.css.scss" + "\ufffd/#103\ufffd" + " imports and configures Spectre.css",w="" + "\ufffd#106\ufffd" + "main.scss" + "\ufffd/#106\ufffd" + " defines global styles",B="" + "\ufffd#109\ufffd" + "variables.scss" + "\ufffd/#109\ufffd" + " stores global SCSS variables",y="@modules",v="This is supposed to contain modules which are likely to be imported in various places in the application.",K="Configuration",N="The project has been initialized with " + "\ufffd#118\ufffd" + "Angular CLI" + "\ufffd/#118\ufffd" + " and then modified.",k="Debugging",j="" + "\ufffd#123\ufffd" + ".vscode/launch.json" + "\ufffd/#123\ufffd" + " allows to attach the debugger to " + "\ufffd#124\ufffd" + "Chrome" + "\ufffd/#124\ufffd" + ".",x="i18n",P="i18n has been configured like this:",M="the source code is in English and there is a French translation",Y="language files are stored in " + "\ufffd#134\ufffd" + "src/locale" + "\ufffd/#134\ufffd" + "",H="the build command builds all the locales configured",U="the base HREF is empty for the source code language and set as the language code for the translations",W="a missing translation throws an error and stops the build",q="Routing",Q="Nonexistent routes are redirected to home and scroll position restoration is enabled.",[[1,"container","grid-lg","my-2"],e,[3,"href"],["id","angular-boilerplate",1,"text-center"],b,[1,"text-center"],a,["href","https://picturepan2.github.io/spectre","target","_blank"],["id","getting-started"],c,i,l,["href","http://localhost:4200"],t,d,n,s,r,["id","features"],f,["id","styling"],T,E,["href","https://picturepan2.github.io/icons.css","target","_blank"],["id","i18n"],_,$,["id","common-resources"],u,["id","directives"],L,h,["id","pipes"],O,p,G,S,C,A,F,["id","structure"],g,["id","-core"],D,m,z,I,["id","-theme"],R,X,J,w,B,["id","-modules"],y,v,["id","configuration"],K,N,["id","debugging"],k,j,x,P,M,Y,H,U,W,["id","routing"],q,Q]},template:function(e,b){1&e&&(o.Gb(0,"div",0),o.Gb(1,"p"),o.Lb(2,1),o.Eb(3,"a",2),o.Jb(),o.Fb(),o.Gb(4,"h1",3),o.Ib(5,4),o.Fb(),o.Gb(6,"p",5),o.Lb(7,6),o.Eb(8,"a",7),o.Jb(),o.Fb(),o.Gb(9,"h2",8),o.Ib(10,9),o.Fb(),o.Gb(11,"p"),o.Lb(12,10),o.Eb(13,"code"),o.Jb(),o.Fb(),o.Gb(14,"ul"),o.Gb(15,"li"),o.Lb(16,11),o.Eb(17,"code"),o.Eb(18,"a",12),o.Jb(),o.Fb(),o.Gb(19,"li"),o.Lb(20,13),o.Eb(21,"code"),o.Jb(),o.Fb(),o.Gb(22,"li"),o.Lb(23,14),o.Eb(24,"code"),o.Jb(),o.Fb(),o.Gb(25,"li"),o.Lb(26,15),o.Eb(27,"code"),o.Eb(28,"b"),o.Jb(),o.Fb(),o.Gb(29,"li"),o.Lb(30,16),o.Eb(31,"code"),o.Eb(32,"b"),o.Jb(),o.Fb(),o.Gb(33,"li"),o.Lb(34,17),o.Eb(35,"code"),o.Eb(36,"b"),o.Eb(37,"b"),o.Jb(),o.Fb(),o.Fb(),o.Gb(38,"h2",18),o.Ib(39,19),o.Fb(),o.Gb(40,"h3",20),o.Ib(41,21),o.Fb(),o.Gb(42,"p"),o.Lb(43,22),o.Eb(44,"a",7),o.Eb(45,"a",23),o.Jb(),o.Fb(),o.Gb(46,"h3",24),o.Ib(47,25),o.Fb(),o.Gb(48,"p"),o.Ib(49,26),o.Fb(),o.Gb(50,"h3",27),o.Ib(51,28),o.Fb(),o.Gb(52,"h4",29),o.Ib(53,30),o.Fb(),o.Gb(54,"ul"),o.Gb(55,"li"),o.Lb(56,31),o.Eb(57,"code"),o.Jb(),o.Fb(),o.Fb(),o.Gb(58,"h4",32),o.Ib(59,33),o.Fb(),o.Gb(60,"ul"),o.Gb(61,"li"),o.Lb(62,34),o.Eb(63,"code"),o.Jb(),o.Fb(),o.Gb(64,"li"),o.Lb(65,35),o.Eb(66,"code"),o.Jb(),o.Fb(),o.Gb(67,"li"),o.Lb(68,36),o.Eb(69,"code"),o.Jb(),o.Fb(),o.Gb(70,"li"),o.Lb(71,37),o.Eb(72,"code"),o.Jb(),o.Fb(),o.Gb(73,"li"),o.Lb(74,38),o.Eb(75,"code"),o.Jb(),o.Fb(),o.Gb(76,"li"),o.Lb(77,39),o.Eb(78,"code"),o.Jb(),o.Fb(),o.Fb(),o.Gb(79,"h2",40),o.Ib(80,41),o.Fb(),o.Gb(81,"h3",42),o.Ib(82,43),o.Fb(),o.Gb(83,"p"),o.Lb(84,44),o.Eb(85,"code"),o.Jb(),o.Fb(),o.Gb(86,"ul"),o.Gb(87,"li"),o.Lb(88,45),o.Eb(89,"b"),o.Eb(90,"b"),o.Jb(),o.Fb(),o.Gb(91,"li"),o.Lb(92,46),o.Eb(93,"b"),o.Jb(),o.Fb(),o.Fb(),o.Gb(94,"h3",47),o.Ib(95,48),o.Fb(),o.Gb(96,"p"),o.Lb(97,49),o.Eb(98,"code"),o.Eb(99,"b"),o.Jb(),o.Fb(),o.Gb(100,"ul"),o.Gb(101,"li"),o.Lb(102,50),o.Eb(103,"b"),o.Jb(),o.Fb(),o.Gb(104,"li"),o.Lb(105,51),o.Eb(106,"b"),o.Jb(),o.Fb(),o.Gb(107,"li"),o.Lb(108,52),o.Eb(109,"b"),o.Jb(),o.Fb(),o.Fb(),o.Gb(110,"h3",53),o.Ib(111,54),o.Fb(),o.Gb(112,"p"),o.Ib(113,55),o.Fb(),o.Gb(114,"h2",56),o.Ib(115,57),o.Fb(),o.Gb(116,"p"),o.Lb(117,58),o.Eb(118,"i"),o.Jb(),o.Fb(),o.Gb(119,"h3",59),o.Ib(120,60),o.Fb(),o.Gb(121,"p"),o.Lb(122,61),o.Eb(123,"b"),o.Eb(124,"i"),o.Jb(),o.Fb(),o.Gb(125,"h3",24),o.Ib(126,62),o.Fb(),o.Gb(127,"p"),o.Ib(128,63),o.Fb(),o.Gb(129,"ul"),o.Gb(130,"li"),o.Ib(131,64),o.Fb(),o.Gb(132,"li"),o.Lb(133,65),o.Eb(134,"b"),o.Jb(),o.Fb(),o.Gb(135,"li"),o.Ib(136,66),o.Fb(),o.Gb(137,"li"),o.Ib(138,67),o.Fb(),o.Gb(139,"li"),o.Ib(140,68),o.Fb(),o.Fb(),o.Gb(141,"h3",69),o.Ib(142,70),o.Fb(),o.Gb(143,"p"),o.Ib(144,71),o.Fb(),o.Fb()),2&e&&(o.ub(3),o.Rb("href",b.isEnglish?"fr":"../",o.Tb))},styles:[""]}),e})()}];let t=(()=>{class e{}return e.\u0275mod=o.Bb({type:e}),e.\u0275inj=o.Ab({factory:function(b){return new(b||e)},imports:[[i.a.forChild(l)],i.a]}),e})(),d=(()=>{class e{}return e.\u0275mod=o.Bb({type:e}),e.\u0275inj=o.Ab({factory:function(b){return new(b||e)},imports:[[c.b,t]]}),e})()}}]);