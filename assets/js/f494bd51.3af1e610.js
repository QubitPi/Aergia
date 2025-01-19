"use strict";(self.webpackChunkhashistack=self.webpackChunkhashistack||[]).push([[9763],{5273:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var n=i(3860),a=i(9162);const s={slug:"github-secret-action",title:"Reusable GitHub Action - Posting GitHub Secrets",authors:["jiaqi"],tags:["CI/CD","GitHub"]},o=void 0,r={permalink:"/blog/github-secret-action",editUrl:"https://github.com/paion-data/hashistack/tree/master/docs/blog/2024-02-23-github-secret/index.md",source:"@site/blog/2024-02-23-github-secret/index.md",title:"Reusable GitHub Action - Posting GitHub Secrets",description:"Overview",date:"2024-02-23T00:00:00.000Z",formattedDate:"February 23, 2024",tags:[{label:"CI/CD",permalink:"/blog/tags/ci-cd"},{label:"GitHub",permalink:"/blog/tags/git-hub"}],readingTime:1.76,hasTruncateMarker:!1,authors:[{name:"Jiaqi Liu",title:"Maintainer of hashistack",url:"https://github.com/QubitPi",imageURL:"https://avatars.githubusercontent.com/u/16126939?v=4",key:"jiaqi"}],frontMatter:{slug:"github-secret-action",title:"Reusable GitHub Action - Posting GitHub Secrets",authors:["jiaqi"],tags:["CI/CD","GitHub"]},unlisted:!1,prevItem:{title:"Bumping Semantic Version by GitHub Tag",permalink:"/blog/version-bump"},nextItem:{title:"Using a GitHub Action Matrix to Define Variations for Each Job",permalink:"/blog/github-matrix"}},c={authorsImageUrls:[void 0]},l=[{value:"Overview",id:"overview",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(t.p,{children:["Being a strong proponent of Immutable Infrastructure, [hashistack] is constantly pushing the limits of its ability\nin various use cases, one of which is the ",(0,n.jsx)(t.em,{children:"Configuration Management"})]}),"\n",(0,n.jsx)(t.p,{children:"Traditional configuration management includes Chef, Puppet, and Ansible. They all assume mutable infrastructure being\npresent. For example, Chef has a major component responsible for jumping into a VM, checking if config has been mutated\nbefore apply any operations."}),"\n",(0,n.jsx)(t.p,{children:"With the adoption of Immutable infrastructure, we initially stored and managed our configuration, such as SSL\ncertificate or AWS SECRET ACCESS KEY directly in GitHub Secrets. This has the disadvantage of not being able to see\ntheir values after creation, making it very hard to manage."}),"\n",(0,n.jsxs)(t.p,{children:["Then we moved to a centralized runbook, where everything can easily be seen and modified by authorized team members. In\nthis approache, CI/CD server will pull down the entire runbook and simply pick up the config files. This, however,\nexposed a great security risk because illegal usage could simply leak any credentials to public by ",(0,n.jsx)(t.code,{children:"cat"}),"ing that\ncredential file out"]}),"\n",(0,n.jsx)(t.p,{children:"So the problem, or what [hashistack] is trying to solve here, is"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["being able to keep credentials, whether it's string values or values stored in files, ",(0,n.jsx)(t.strong,{children:"secure"}),", and"]}),"\n",(0,n.jsxs)(t.li,{children:["allowing team member to easily ",(0,n.jsx)(t.strong,{children:"manage"})," those credentials"]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["We tried HashiCorp Vault but\n",(0,n.jsx)(t.a,{href:"https://discuss.hashicorp.com/t/how-to-store-a-file-content-in-hashicorp-kv-secret-engine-as-value-through-cmd-line-or-script/46895/2",children:"it doesn't support storing file credential"}),",\n[hashistack] addressed exactly how file can be managed in this case"]})}),"\n",(0,n.jsx)(t.p,{children:"So this brought us to the alternative way of thinking about Configuration Management in Immutable Infrastructure, which\nis depicted below:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(2361).Z+"",width:"1322",height:"662"})}),"\n",(0,n.jsx)(t.p,{children:"We still need GitHub Secrets because our tech dev has a deep integratin with it and that's the most secure way to pass\nour organization credentials around."}),"\n",(0,n.jsx)(t.p,{children:"In addition, we will also keep runbook for config management. The runbook will be hosted separately, not in GitHub\nSecrets."}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"Runbooks was used in Yahoo that keeps all DevOps credentials in a dedicated GitHub private repo. It's been proven to\nbe an effective way to manage and share a software configurations within a team."})}),"\n",(0,n.jsx)(t.p,{children:"hashistack's github-secret now comes into play to bridge the gap between two componet."})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},2361:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/github-secret-8df7f31de85271fd5bf4418718da1fae.png"},9162:(e,t,i)=>{i.d(t,{Z:()=>r,a:()=>o});var n=i(1733);const a={},s=n.createContext(a);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);