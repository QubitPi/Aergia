"use strict";(self.webpackChunkhashicorp_aws=self.webpackChunkhashicorp_aws||[]).push([[7576],{5135:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>d});var s=t(5893),r=t(1151);const i={slug:"docker-c-advisor",title:"Docker cAdvisor",authors:["jiaqi"],tags:["Docker","Virtualization"]},a=void 0,n={permalink:"/hashicorp-aws/blog/docker-c-advisor",editUrl:"https://github.com/QubitPi/hashicorp-aws/tree/master/docs/blog/2022-07-31-docker-c-advisor/index.md",source:"@site/blog/2022-07-31-docker-c-advisor/index.md",title:"Docker cAdvisor",description:"[//]: # (Copyright Jiaqi Liu)",date:"2022-07-31T00:00:00.000Z",formattedDate:"July 31, 2022",tags:[{label:"Docker",permalink:"/hashicorp-aws/blog/tags/docker"},{label:"Virtualization",permalink:"/hashicorp-aws/blog/tags/virtualization"}],readingTime:1.285,hasTruncateMarker:!0,authors:[{name:"Jiaqi Liu",title:"Maintainer of hashicorp-aws",url:"https://github.com/QubitPi",imageURL:"https://avatars.githubusercontent.com/u/16126939?v=4",key:"jiaqi"}],frontMatter:{slug:"docker-c-advisor",title:"Docker cAdvisor",authors:["jiaqi"],tags:["Docker","Virtualization"]},unlisted:!1,prevItem:{title:"Deploying v.s. Releasing",permalink:"/hashicorp-aws/blog/deploying-vs-releasing"},nextItem:{title:"Setting Up Coverage Analysis through SonarCloud in Maven Project",permalink:"/hashicorp-aws/blog/sonar-cloud-code-coverage"}},c={authorsImageUrls:[void 0]},d=[{value:"docker-container-stats",id:"docker-container-stats",level:3}];function l(e){const o={a:"a",code:"code",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.a,{href:"https://github.com/google/cadvisor",children:"cAdvisor"})," (Container Advisor) provides Docker container users an understanding of\nthe resource usage and performance characteristics of their running containers. It is a running daemon that collects,\naggregates, processes, and exports information about running containers. Specifically, for each container it keeps\nresource isolation parameters, historical resource usage, histograms of complete historical resource usage and network\nstatistics. This data is exported by container and machine-wide."]}),"\n",(0,s.jsxs)(o.p,{children:["Although ",(0,s.jsx)(o.a,{href:"https://github.com/google/cadvisor",children:"cAdvisor"})," has some prelimilary (useful though) UI. It also offers"]}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.a,{href:"https://github.com/google/cadvisor/blob/master/docs/api.md",children:"RESTful API to query container stats"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.a,{href:"https://github.com/google/cadvisor/blob/master/docs/storage/README.md",children:"Export capability to common data storage, such as Elasticsearch"})}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:"To pull the image and run it:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"sudo docker run \\\n    --volume=/:/rootfs:ro \\\n    --volume=/var/run/docker.sock:/var/run/docker.sock:rw \\\n    --volume=/sys:/sys:ro \\\n    --volume=/var/lib/docker/:/var/lib/docker:ro \\\n    --volume=/dev/disk/:/dev/disk:ro \\\n    --publish=8080:8080 \\\n    --detach=true \\\n    --name=cadvisor \\\n    --privileged \\\n    --device=/dev/kmsg \\\n    gcr.io/cadvisor/cadvisor:v0.36.0\n"})}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.img,{alt:"cAdvisor Screenshot 1",src:t(3493).Z+"",width:"4720",height:"5386"}),"\n",(0,s.jsx)(o.img,{alt:"cAdvisor Screenshot 2",src:t(3144).Z+"",width:"4320",height:"4522"})]}),"\n",(0,s.jsx)(o.h3,{id:"docker-container-stats",children:(0,s.jsx)(o.a,{href:"https://github.com/virtualzone/docker-container-stats",children:"docker-container-stats"})}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.a,{href:"https://github.com/google/cadvisor",children:"cAdvisor"})," is good for customizing container monitoring, but it's heavy. A\nquick-and-lightweight option would be ",(0,s.jsx)(o.a,{href:"https://github.com/virtualzone/docker-container-stats",children:"docker-container-stats"})]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"docker-container-stats Screenshot",src:t(367).Z+"",width:"2560",height:"2237"})})]})}function h(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},3493:(e,o,t)=>{t.d(o,{Z:()=>s});const s=t.p+"assets/images/cadvisor-1-f3d37ad695ee8806adcd57ec59893391.png"},3144:(e,o,t)=>{t.d(o,{Z:()=>s});const s=t.p+"assets/images/cadvisor-2-e81d490aab2caa428bfb987f332c7f88.png"},367:(e,o,t)=>{t.d(o,{Z:()=>s});const s=t.p+"assets/images/docker-container-stats-b043603502126026d11f7d14bea837d3.png"},1151:(e,o,t)=>{t.d(o,{Z:()=>n,a:()=>a});var s=t(7294);const r={},i=s.createContext(r);function a(e){const o=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function n(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:o},e.children)}}}]);