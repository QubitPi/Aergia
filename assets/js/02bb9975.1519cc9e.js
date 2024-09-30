"use strict";(self.webpackChunkhashistack=self.webpackChunkhashistack||[]).push([[7576],{4939:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>d});var r=o(3860),s=o(9162);const i={slug:"docker-c-advisor",title:"Docker cAdvisor",authors:["jiaqi"],tags:["Docker","Virtualization"]},a=void 0,n={permalink:"/blog/docker-c-advisor",editUrl:"https://github.com/QubitPi/hashistack/tree/master/docs/blog/2022-07-31-docker-c-advisor/index.md",source:"@site/blog/2022-07-31-docker-c-advisor/index.md",title:"Docker cAdvisor",description:"[cAdvisor] (Container Advisor) provides Docker container users an understanding of",date:"2022-07-31T00:00:00.000Z",formattedDate:"July 31, 2022",tags:[{label:"Docker",permalink:"/blog/tags/docker"},{label:"Virtualization",permalink:"/blog/tags/virtualization"}],readingTime:.775,hasTruncateMarker:!0,authors:[{name:"Jiaqi Liu",title:"Maintainer of hashistack",url:"https://github.com/QubitPi",imageURL:"https://avatars.githubusercontent.com/u/16126939?v=4",key:"jiaqi"}],frontMatter:{slug:"docker-c-advisor",title:"Docker cAdvisor",authors:["jiaqi"],tags:["Docker","Virtualization"]},unlisted:!1,prevItem:{title:"Deploying v.s. Releasing",permalink:"/blog/deploying-vs-releasing"},nextItem:{title:"Yahoo Cloud Object Store - Object Storage at Exabyte Scale",permalink:"/blog/yahoo-object-storage"}},c={authorsImageUrls:[void 0]},d=[{value:"docker-container-stats",id:"docker-container-stats",level:3}];function l(e){const t={a:"a",code:"code",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/google/cadvisor",children:"cAdvisor"})," (Container Advisor) provides Docker container users an understanding of\nthe resource usage and performance characteristics of their running containers. It is a running daemon that collects,\naggregates, processes, and exports information about running containers. Specifically, for each container it keeps\nresource isolation parameters, historical resource usage, histograms of complete historical resource usage and network\nstatistics. This data is exported by container and machine-wide."]}),"\n",(0,r.jsxs)(t.p,{children:["Although ",(0,r.jsx)(t.a,{href:"https://github.com/google/cadvisor",children:"cAdvisor"})," has some prelimilary (useful though) UI. It also offers"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/google/cadvisor/blob/master/docs/api.md",children:"RESTful API to query container stats"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/google/cadvisor/blob/master/docs/storage/README.md",children:"Export capability to common data storage, such as Elasticsearch"})}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"To pull the image and run it:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"sudo docker run \\\n    --volume=/:/rootfs:ro \\\n    --volume=/var/run/docker.sock:/var/run/docker.sock:rw \\\n    --volume=/sys:/sys:ro \\\n    --volume=/var/lib/docker/:/var/lib/docker:ro \\\n    --volume=/dev/disk/:/dev/disk:ro \\\n    --publish=8080:8080 \\\n    --detach=true \\\n    --name=cadvisor \\\n    --privileged \\\n    --device=/dev/kmsg \\\n    gcr.io/cadvisor/cadvisor:v0.36.0\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"cAdvisor Screenshot 1",src:o(9373).Z+"",width:"4720",height:"5386"}),"\n",(0,r.jsx)(t.img,{alt:"cAdvisor Screenshot 2",src:o(4388).Z+"",width:"4320",height:"4522"})]}),"\n",(0,r.jsx)(t.h3,{id:"docker-container-stats",children:(0,r.jsx)(t.a,{href:"https://github.com/virtualzone/docker-container-stats",children:"docker-container-stats"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/google/cadvisor",children:"cAdvisor"})," is good for customizing container monitoring, but it's heavy. A\nquick-and-lightweight option would be ",(0,r.jsx)(t.a,{href:"https://github.com/virtualzone/docker-container-stats",children:"docker-container-stats"})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"docker-container-stats Screenshot",src:o(3492).Z+"",width:"2560",height:"2237"})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},9373:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/cadvisor-1-f3d37ad695ee8806adcd57ec59893391.png"},4388:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/cadvisor-2-e81d490aab2caa428bfb987f332c7f88.png"},3492:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/docker-container-stats-b043603502126026d11f7d14bea837d3.png"},9162:(e,t,o)=>{o.d(t,{Z:()=>n,a:()=>a});var r=o(1733);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);