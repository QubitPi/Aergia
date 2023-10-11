"use strict";(self.webpackChunkaergia=self.webpackChunkaergia||[]).push([[7795],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),g=o,m=p["".concat(c,".").concat(g)]||p[g]||u[g]||n;return r?a.createElement(m,i(i({ref:t},d),{},{components:r})):a.createElement(m,i({ref:t},d))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<n;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2082:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var a=r(7462),o=(r(7294),r(3905));const n={slug:"docker-c-advisor",title:"Docker cAdvisor",authors:["jiaqi"],tags:["Docker","Virtualization"],date:new Date("2022-07-31T00:00:00.000Z")},i=void 0,s={permalink:"/aergia/blog/docker-c-advisor",editUrl:"https://github.com/QubitPi/aergia/tree/gh-pages/blog/docker-c-advisor/index.md",source:"@site/blog/docker-c-advisor/index.md",title:"Docker cAdvisor",description:"[//]: # (Copyright Jiaqi Liu)",date:"2022-07-31T00:00:00.000Z",formattedDate:"July 31, 2022",tags:[{label:"Docker",permalink:"/aergia/blog/tags/docker"},{label:"Virtualization",permalink:"/aergia/blog/tags/virtualization"}],readingTime:1.29,hasTruncateMarker:!0,authors:[{name:"Jiaqi Liu",title:"Maintainer of Aergia",url:"https://github.com/QubitPi",imageURL:"https://avatars.githubusercontent.com/u/16126939?v=4",key:"jiaqi"}],frontMatter:{slug:"docker-c-advisor",title:"Docker cAdvisor",authors:["jiaqi"],tags:["Docker","Virtualization"],date:"2022-07-31T00:00:00.000Z"},prevItem:{title:"Deploying v.s. Releasing",permalink:"/aergia/blog/deploying-vs-releasing"},nextItem:{title:"OpenVPN",permalink:"/aergia/blog/openvpn"}},c={authorsImageUrls:[void 0]},l=[{value:"Docker cAdvisor",id:"docker-cadvisor",level:2},{value:"docker-container-stats",id:"docker-container-stats",level:3}],d={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"docker-cadvisor"},"Docker cAdvisor"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/google/cadvisor"},"cAdvisor")," (Container Advisor) provides Docker container users an understanding of\nthe resource usage and performance characteristics of their running containers. It is a running daemon that collects,\naggregates, processes, and exports information about running containers. Specifically, for each container it keeps\nresource isolation parameters, historical resource usage, histograms of complete historical resource usage and network\nstatistics. This data is exported by container and machine-wide."),(0,o.kt)("p",null,"Although ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/google/cadvisor"},"cAdvisor")," has some prelimilary (useful though) UI. It also offers"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/google/cadvisor/blob/master/docs/api.md"},"RESTful API to query container stats")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/google/cadvisor/blob/master/docs/storage/README.md"},"Export capability to common data storage, such as Elasticsearch"))),(0,o.kt)("p",null,"To pull the image and run it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo docker run \\\n    --volume=/:/rootfs:ro \\\n    --volume=/var/run/docker.sock:/var/run/docker.sock:rw \\\n    --volume=/sys:/sys:ro \\\n    --volume=/var/lib/docker/:/var/lib/docker:ro \\\n    --volume=/dev/disk/:/dev/disk:ro \\\n    --publish=8080:8080 \\\n    --detach=true \\\n    --name=cadvisor \\\n    --privileged \\\n    --device=/dev/kmsg \\\n    gcr.io/cadvisor/cadvisor:v0.36.0\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"cAdvisor Screenshot 1",src:r(4222).Z,width:"4720",height:"5386"}),"\n",(0,o.kt)("img",{alt:"cAdvisor Screenshot 2",src:r(4435).Z,width:"4320",height:"4522"})),(0,o.kt)("h3",{id:"docker-container-stats"},(0,o.kt)("a",{parentName:"h3",href:"https://github.com/virtualzone/docker-container-stats"},"docker-container-stats")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/google/cadvisor"},"cAdvisor")," is good for customizing container monitoring, but it's heavy. A\nquick-and-lightweight option would be ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/virtualzone/docker-container-stats"},"docker-container-stats")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"docker-container-stats Screenshot",src:r(9989).Z,width:"2560",height:"2237"})))}u.isMDXComponent=!0},4222:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/cadvisor-1-f3d37ad695ee8806adcd57ec59893391.png"},4435:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/cadvisor-2-e81d490aab2caa428bfb987f332c7f88.png"},9989:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/docker-container-stats-b043603502126026d11f7d14bea837d3.png"}}]);