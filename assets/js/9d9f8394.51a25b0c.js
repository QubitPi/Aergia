"use strict";(self.webpackChunkhashicorp_aws=self.webpackChunkhashicorp_aws||[]).push([[9013],{5520:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=i(4848),s=i(8453);const r={sidebar_position:8,title:"General Troubleshooting"},o="Troubleshooting",a={id:"troubleshooting",title:"General Troubleshooting",description:"This section discusses the common issue that can happen during all types of deployments.",source:"@site/docs/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/hashicorp-aws/docs/troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/QubitPi/hashicorp-aws/tree/master/docs/docs/troubleshooting.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"General Troubleshooting"},sidebar:"tutorialSidebar",previous:{title:"Deployment via Screwdriver CD",permalink:"/hashicorp-aws/docs/elk/screwdriver-cd-deployment"}},l={},c=[{value:"HashiCorp",id:"hashicorp",level:2},{value:"I Would Like to SSH into EC2 for Debugging Purposes",id:"i-would-like-to-ssh-into-ec2-for-debugging-purposes",level:3},{value:"Value () for parameter groupId is invalid. The value cannot be empty",id:"value--for-parameter-groupid-is-invalid-the-value-cannot-be-empty",level:3},{value:"AWS",id:"aws",level:2},{value:"Security Group Isn&#39;t Working as Expected in AWS",id:"security-group-isnt-working-as-expected-in-aws",level:3},{value:"Screwdriver CD",id:"screwdriver-cd",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsx)(n.p,{children:"This section discusses the common issue that can happen during all types of deployments."}),"\n",(0,t.jsx)(n.h2,{id:"hashicorp",children:"HashiCorp"}),"\n",(0,t.jsx)(n.h3,{id:"i-would-like-to-ssh-into-ec2-for-debugging-purposes",children:"I Would Like to SSH into EC2 for Debugging Purposes"}),"\n",(0,t.jsxs)(n.p,{children:["Fully adapting\n",(0,t.jsx)(n.a,{href:"https://www.hashicorp.com/resources/what-is-mutable-vs-immutable-infrastructure",children:"immutable infrastructure"}),',\nhashicorp-aws "seals" EC2 instances once it\'s created; that means not even admin or anyone else can jump into that\nserver vis SSH. ',(0,t.jsx)(n.em,{children:"It's completely immutable"})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"It is very important to connect our deployed infrastructure to an external logging & auditing service like ELK, because\nonce being deployed as an immutable infrastructure, the EC2 is completely sealed in a sense that no one can SSH into it.\nThis means logs or other metrics are not available unless they are send to an external logging & auditing service such as\nELK. Our HACP offers out-of-the box deployment of ELK and allow the deployment in EC2 to automatically connect to it to\nsend logs and metrics, which gives us a lot better experience on working with webservice logging & auditing."})}),"\n",(0,t.jsx)(n.p,{children:"Another somewhat more time-consuming approach is to manually create an EC2 from pushed AMI image, specifying key pair\nand run each app's corresponding Terraform init script after SSH into it."}),"\n",(0,t.jsx)(n.h3,{id:"value--for-parameter-groupid-is-invalid-the-value-cannot-be-empty",children:"Value () for parameter groupId is invalid. The value cannot be empty"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"aws_instance.***: Creating...\n\u2577\n\u2502 Error: creating EC2 Instance: InvalidParameterValue: Value () for parameter groupId is invalid. The value cannot be empty\n\u2502 status code: 400, request id: ***\n\u2502 ...\n"})}),"\n",(0,t.jsx)(n.p,{children:"This could happen when hashicorp-aws is using Terraform to launch EC2 instance. One possibility is the security group of\nthe instance is not found or hasn't been created yet."}),"\n",(0,t.jsx)(n.h2,{id:"aws",children:"AWS"}),"\n",(0,t.jsx)(n.h3,{id:"security-group-isnt-working-as-expected-in-aws",children:"Security Group Isn't Working as Expected in AWS"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["We take ",(0,t.jsx)(n.a,{href:"kong-api-gateway/index",children:"Kong API Gateway"})," as an example in the discussion below."]})}),"\n",(0,t.jsx)(n.p,{children:"This could happen when we are accessing the deployed gateway from a public IP address, such as our personal computer."}),"\n",(0,t.jsxs)(n.p,{children:["Complying with the best security practice, hashicorp-aws binds ",(0,t.jsx)(n.em,{children:"private"})," EC2 IP to a Route 53 domain. Since it is a\ncommon practice to limit the API gateway access by assigning gateway instance with\n",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/vpc/latest/userguide/security-group-rules.html",children:"inbound rules"}),". hashicorp-aws also manages\nto disable all HTTP request to the gateway. Therefore, any public visit to our deployed gateway instance has to go\nthrough the gateway domain."]}),"\n",(0,t.jsxs)(n.p,{children:["But since the domain is bound by a private IP, accessing the gateway through the domain from public IP source will hit\nthe private IP, which would always fail ",(0,t.jsx)(n.em,{children:"independent"})," of security group configs"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["The reason we bind ",(0,t.jsx)(n.em,{children:"private"})," IP to domain is that\n",(0,t.jsx)(n.a,{href:"https://stackoverflow.com/a/24242211",children:"when gateway is used for inter security-group communication, it works\nover private addressing. If we use the public IP address the firewall rule will not recognise the source security group"}),".\nThis is particularly important when the gateway is serving API to downstream services such as frontend APP."]})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"The solution"}),"? To access the gateway manually from our machine, for instance, we should address the instance using the\nPublic DNS record - this will actually be pointed at the private IP address when we hit the DNS name."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, if our instance has public IP ",(0,t.jsx)(n.code,{children:"203.0.113.185"})," and private IP ",(0,t.jsx)(n.code,{children:"10.1.234.12"}),", we are given a public DNS name\nlike ",(0,t.jsx)(n.code,{children:"ec2-203-0-113-185.eu-west-1.compute.amazonaws.com"}),", which will resolve to ",(0,t.jsx)(n.code,{children:"203.0.113.185"})," if queried externally,\nor ",(0,t.jsx)(n.code,{children:"10.1.234.12"})," if queried internally. This will enable our security groups to work as intended. See\n",(0,t.jsx)(n.a,{href:"https://stackoverflow.com/a/24242211",children:"this thread"})," for more details."]}),"\n",(0,t.jsx)(n.h2,{id:"screwdriver-cd",children:"Screwdriver CD"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Q"}),": I updated template (such as a template parameter name) but it was not taking effect in the pipeline that uses\nthis template."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"A"}),": This is because the pipeline is still referencing the old template definition. Note that when template is\nrepublished, it doesn't automatically refresh the pipeline that uses this template. There are 2 approaches for solving\nthis problem:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Simply delete and recreate the pipeline to pick up the updated template definition"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Re-sync pipeline by navigating to ",(0,t.jsx)(n.strong,{children:"Options"})," tab of the pipeline UI and then click sync button next to the\n",(0,t.jsx)(n.strong,{children:"Pipeline"})," in ",(0,t.jsx)(n.strong,{children:"Sync"})," section (shown below). ",(0,t.jsx)(n.em,{children:"Lastly"}),", refresh the pipeline ",(0,t.jsx)(n.strong,{children:"Builds"})," page."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Error loading resync-pipeline.png",src:i(6885).A+"",width:"3584",height:"2040"})}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},6885:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/resync-pipeline-d82db33f961a39b0b89661a483afbbc5.png"},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var t=i(6540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);