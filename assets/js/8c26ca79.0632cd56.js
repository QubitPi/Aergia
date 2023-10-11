"use strict";(self.webpackChunkaergia=self.webpackChunkaergia||[]).push([[6341],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),g=r,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7267:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={slug:"ssh-ascii-banner",title:"SSH ASCII Banner",authors:["jiaqi","mike-andreasen"],tags:["DevOps"],date:new Date("2022-04-30T00:00:00.000Z")},i=void 0,s={permalink:"/aergia/blog/ssh-ascii-banner",editUrl:"https://github.com/QubitPi/aergia/tree/gh-pages/blog/ssh-ascii-banner/index.md",source:"@site/blog/ssh-ascii-banner/index.md",title:"SSH ASCII Banner",description:"[//]: # (Copyright Jiaqi Liu)",date:"2022-04-30T00:00:00.000Z",formattedDate:"April 30, 2022",tags:[{label:"DevOps",permalink:"/aergia/blog/tags/dev-ops"}],readingTime:1.73,hasTruncateMarker:!0,authors:[{name:"Jiaqi Liu",title:"Maintainer of Aergia",url:"https://github.com/QubitPi",imageURL:"https://avatars.githubusercontent.com/u/16126939?v=4",key:"jiaqi"},{name:"Mike Andreasen",url:"https://guides.wp-bullet.com/add-custom-ascii-banner-logo-to-ssh-login/",imageURL:"https://secure.gravatar.com/avatar/0b12d8ba68100a5d983170f913d20d5e?s=100&d=mm&r=g",key:"mike-andreasen"}],frontMatter:{slug:"ssh-ascii-banner",title:"SSH ASCII Banner",authors:["jiaqi","mike-andreasen"],tags:["DevOps"],date:"2022-04-30T00:00:00.000Z"},prevItem:{title:"OpenVPN",permalink:"/aergia/blog/openvpn"}},l={authorsImageUrls:[void 0,void 0]},c=[{value:"Add Custom ASCII Banner Logo to SSH Login Screen",id:"add-custom-ascii-banner-logo-to-ssh-login-screen",level:2}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"add-custom-ascii-banner-logo-to-ssh-login-screen"},"Add Custom ASCII Banner Logo to SSH Login Screen"),(0,r.kt)("p",null,"In the early 90's ASCII art became a thing. It was a way to make logos using regular ASCII characters to decorate readme\nfiles and add some branding. Nowadays we can generate these banners using free tools like ",(0,r.kt)("a",{parentName:"p",href:"http://patorjk.com/software/taag/"},"Text to ASCII Art Generator"),".\nIt can be used to create a server login banner that is displayed each time people log in via SSH."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"./example.png",src:n(4298).Z,width:"1490",height:"510"})),(0,r.kt)("p",null,"Firs generate a ASCII logo with the ",(0,r.kt)("a",{parentName:"p",href:"http://patorjk.com/software/taag/"},"Text to ASCII Art Generator"),". Then open up message of the day file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/motd\n")),(0,r.kt)("p",null,"Add a text such as"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"The programs included with the Debian GNU/Linux system are free software;\nthe exact distribution terms for each program are described in the\nindividual files in /usr/share/doc/*/copyright.\n\nDebian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent\npermitted by applicable law.\n\n\n______     _              ______      _\n| ___ \\   (_)             |  _  \\    | |\n| |_/ /_ _ _  ___  _ __   | | | |__ _| |_ __ _\n|  __/ _` | |/ _ \\| '_ \\  | | | / _` | __/ _` |\n| | | (_| | | (_) | | | | | |/ / (_| | || (_| |\n\\_|  \\__,_|_|\\___/|_| |_| |___/ \\__,_|\\__\\__,_|\n")),(0,r.kt)("p",null,"Save the file and open a new SSH session and log in, we should be greeted with our beautiful banner"))}u.isMDXComponent=!0},4298:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/example-78639df3c1b99be9ab4ea1206b15b69b.png"}}]);