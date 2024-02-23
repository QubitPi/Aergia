"use strict";(self.webpackChunkhashicorp_aws=self.webpackChunkhashicorp_aws||[]).push([[2519],{1511:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>C,contentTitle:()=>T,default:()=>E,frontMatter:()=>k,metadata:()=>I,toc:()=>P});var s=i(4848),t=i(8453),a=i(6540),r=i(53),l=i(3104),o=i(6347),c=i(205),h=i(7485),d=i(1682),u=i(9466);function p(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:i}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:i,attributes:s,default:t}}=e;return{value:n,label:i,attributes:s,default:t}}))}(i);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function b(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:i}=e;const s=(0,o.W6)(),t=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,h.aZ)(t),(0,a.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(s.location.search);n.set(t,e),s.replace({...s.location,search:n.toString()})}),[t,s])]}function x(e){const{defaultValue:n,queryString:i=!1,groupId:s}=e,t=m(e),[r,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=i.find((e=>e.default))??i[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:t}))),[o,h]=g({queryString:i,groupId:s}),[d,p]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,t]=(0,u.Dv)(i);return[s,(0,a.useCallback)((e=>{i&&t.set(e)}),[i,t])]}({groupId:s}),x=(()=>{const e=o??d;return b({value:e,tabValues:t})?e:null})();(0,c.A)((()=>{x&&l(x)}),[x]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!b({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),p(e)}),[h,p,t]),tabValues:t}}var v=i(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function j(e){let{className:n,block:i,selectedValue:t,selectValue:a,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:h}=(0,l.a_)(),d=e=>{const n=e.currentTarget,i=c.indexOf(n),s=o[i].value;s!==t&&(h(n),a(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const i=c.indexOf(e.currentTarget)+1;n=c[i]??c[0];break}case"ArrowLeft":{const i=c.indexOf(e.currentTarget)-1;n=c[i]??c[c.length-1];break}}n?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":i},n),children:o.map((e=>{let{value:n,label:i,attributes:a}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...a,className:(0,r.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":t===n}),children:i??n},n)}))})}function w(e){let{lazy:n,children:i,selectedValue:t}=e;const r=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=x(e);return(0,s.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,s.jsx)(j,{...e,...n}),(0,s.jsx)(w,{...e,...n})]})}function _(e){const n=(0,v.A)();return(0,s.jsx)(y,{...e,children:p(e.children)},String(n))}const S={tabItem:"tabItem_Ymn6"};function A(e){let{children:n,hidden:i,className:t}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(S.tabItem,t),hidden:i,children:n})}const k={sidebar_position:6,title:"Jersey-Jetty Based Webservice"},T="Deploying Jersey-Jetty Based Webservice",I={id:"webservice",title:"Jersey-Jetty Based Webservice",description:"[//]: # (Copyright Jiaqi Liu)",source:"@site/docs/webservice.mdx",sourceDirName:".",slug:"/webservice",permalink:"/hashicorp-aws/docs/webservice",draft:!1,unlisted:!1,editUrl:"https://github.com/QubitPi/hashicorp-aws/tree/master/docs/docs/webservice.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Jersey-Jetty Based Webservice"},sidebar:"tutorialSidebar",previous:{title:"Kong API Gateway",permalink:"/hashicorp-aws/docs/kong"},next:{title:"Elastic Stack (ELK)",permalink:"/hashicorp-aws/docs/elk"}},C={},P=[{value:"General Deployments",id:"general-deployments",level:2},{value:"Defining Packer Variables",id:"defining-packer-variables",level:3},{value:"Defining Terraform Variables",id:"defining-terraform-variables",level:3},{value:"Building AMI Image",id:"building-ami-image",level:3},{value:"Deploying to EC2",id:"deploying-to-ec2",level:3},{value:"Deployment via Screwdriver CD",id:"deployment-via-screwdriver-cd",level:2},{value:"Deployment via GitHub Actions",id:"deployment-via-github-actions",level:2},{value:"Deployment via HACP",id:"deployment-via-hacp",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"AWS",id:"aws",level:3},{value:"The Webservice was Running Properly Right After Deployment, but NOT After a While with &quot;503 Service Unavailable&quot;",id:"the-webservice-was-running-properly-right-after-deployment-but-not-after-a-while-with-503-service-unavailable",level:4}];function D(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"deploying-jersey-jetty-based-webservice",children:"Deploying Jersey-Jetty Based Webservice"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Yes, we DO NOT support Spring, never ever"}),"\n",(0,s.jsxs)(n.li,{children:["EBS volumes during build time will ",(0,s.jsx)(n.a,{href:"https://qubitpi.github.io/hashicorp-packer/packer/integrations/hashicorp/amazon/latest/components/builder/ebs#:~:text=Optional%3A-,delete_on_termination,-(bool)%20%2D%20Indicates%20whether",children:"automatically be removed"})]}),"\n"]})}),"\n",(0,s.jsx)(n.p,{children:"Immutable Webservice by hashicorp-aws supports 2 deployment modes:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"SSL/HTTPS"}),"\n",(0,s.jsx)(n.li,{children:"non-SSL/HTTPS"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The first mode is very suitable for MVP such as a web app backed by a single webservice. The second mode is designed for\n",(0,s.jsx)(n.a,{href:"https://dev.to/behalf/authentication-authorization-in-microservices-architecture-part-i-2cn0#global-authentication-api-gateway-and-authorization-per-service",children:"microservices architecture where authentication is delegated to an API gateway"})]}),"\n",(0,s.jsx)(n.h2,{id:"general-deployments",children:"General Deployments"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Please complete the ",(0,s.jsx)(n.a,{href:"setup#setup",children:"general setup"})," before proceeding. If you are deploying in ",(0,s.jsx)(n.em,{children:"non-SSL/HTTPS mode"}),", the\n",(0,s.jsx)(n.a,{href:"setup#ssl",children:"SSL section"})," can be skipped."]})}),"\n",(0,s.jsx)(n.h3,{id:"defining-packer-variables",children:"Defining Packer Variables"}),"\n",(0,s.jsxs)(n.p,{children:["Create a ",(0,s.jsx)(n.a,{href:"https://qubitpi.github.io/hashicorp-packer/packer/guides/hcl/variables#from-a-file",children:"HashiCorp Packer variable values file"})," named ",(0,s.jsx)(n.strong,{children:"aws-ws.auto.pkrvars.hcl"})," under one of the subdirectory of\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://github.com/QubitPi/hashicorp-aws/tree/master/hashicorp/webservice/images",children:"hashicorp-aws/hashicorp/webservice/images"})}),", depending on the deployment mode, with the following contents:"]}),"\n",(0,s.jsxs)(_,{children:[(0,s.jsxs)(A,{value:"non-ssl",label:"non-SSL/HTTPS",default:!0,children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",metastring:"title=hashicorp-aws/hashicorp/webservice/images/basic/aws-aws.auto.pkrvars.hcl",children:'aws_image_region                 = "my-aws-region"\nami_name                         = "my-webservice"\ninstance_type                    = "<one of t2.micro/t2.small/t2.medium/t2.large/t2.xlarge/t2.2xlarge>"\nws_war_path                      = "my-webservice-1.0-SNAPSHOT.war"\naws_ws_filebeat_config_file_path = "filebeat.yml"\n'})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"aws_image_region"})," is the ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html#Concepts.RegionsAndAvailabilityZones.Availability",children:"image region"})," of ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html",children:"AWS AMI"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ami_name"})," is the published AMI name; it can be arbitrary"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"instance_type"})," is the recommended ",(0,s.jsx)(n.a,{href:"https://aws.amazon.com/ec2/instance-types/",children:"AWS EC2 instance type"})," running this image"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ws_war_path"})," is the absolute path or the path relative to ",(0,s.jsx)(n.code,{children:"hashicorp-aws/hashicorp/webservice/images/basic"})," of\nthe webservice WAR file we are going to deploy"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"aws_ws_filebeat_config_file_path"})," is the absolute path or the path relative to\n",(0,s.jsx)(n.code,{children:"hashicorp-aws/hashicorp/webservice/images/basic"})," of the filebeat config file if the webservice is sending logs\nto ELK"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"It is very important to connect webservice to an external logging & auditing service like ELK, because once\nwebservice is deployed as an immutable infrastructure, it is completely sealed in a sense that no one can SSH into\nit. This means logs or other metrics are not available unless they are send to an external logging & auditing\nservice such as ELK. Our HACP offers out-of-the box deployment of ELK and allow the webservice to automatically\nconnect to it to send logs and metrics, which gives us a lot better experience on working with webservice logging\n& auditing."})}),"\n"]}),"\n"]})]}),(0,s.jsxs)(A,{value:"ssl",label:"SSL/HTTPS",children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",metastring:"title=hashicorp-aws/hashicorp/webservice/images/ssl/aws-aws.auto.pkrvars.hcl",children:'aws_image_region                 = "my-aws-region"\nami_name                         = "my-webservice"\ninstance_type                    = "<one of t2.micro/t2.small/t2.medium/t2.large/t2.xlarge/t2.2xlarge>"\nws_war_path                      = "my-webservice-1.0-SNAPSHOT.war"\naws_ws_filebeat_config_file_path = "filebeat.yml"\naws_ws_ssl_cert_file_path        = "server.crt"\naws_ws_ssl_cert_key_file_path    = "server.key"\naws_ws_nginx_config_file_path    = "nginx.conf"\n'})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"aws_image_region"})," is the ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html#Concepts.RegionsAndAvailabilityZones.Availability",children:"region"})," where webservice ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html",children:"AMI"})," will be published to. The\npublished image will be ",(0,s.jsx)(n.em,{children:"private"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ami_name"})," is the published ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html",children:"AMI"})," name; it can be arbitrary"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"instance_type"})," is the recommended ",(0,s.jsx)(n.a,{href:"https://aws.amazon.com/ec2/instance-types/",children:"AWS EC2 instance type"})," running this image"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ws_war_path"})," is the absolute path or the path relative to ",(0,s.jsx)(n.code,{children:"hashicorp-aws/hashicorp/webservice/images/basic"})," of\nthe webservice WAR file we are going to deploy"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"aws_ws_filebeat_config_file_path"})," is the absolute path or the path relative to\n",(0,s.jsx)(n.code,{children:"hashicorp-aws/hashicorp/webservice/images/ssl"})," of the filebeat config file if the webservice is sending logs\nto ELK"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"It is very important to connect webservice to an external logging & auditing service like ELK, because once\nwebservice is deployed as an immutable infrastructure, it is completely sealed in a sense that no one can SSH into\nit. This means logs or other metrics are not available unless they are send to an external logging & auditing\nservice such as ELK. Our HACP offers out-of-the box deployment of ELK and allow the webservice to automatically\nconnect to it to send logs and metrics, which gives us a lot better experience on working with webservice logging\n& auditing."})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"aws_ws_ssl_cert_file_path"})," is the absolute path or the path relative to ",(0,s.jsx)(n.code,{children:"hashicorp-aws/hashicorp/aws/images/ssl"}),"\nof the ",(0,s.jsx)(n.a,{href:"setup#ssl",children:"SSL certificate file"})," for the webservice API domain"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"aws_ws_ssl_cert_key_file_path"}),"  is the absolute path or the path relative to\n",(0,s.jsx)(n.code,{children:"hashicorp-aws/hashicorp/webservice/images/ssl"})," of the ",(0,s.jsx)(n.a,{href:"setup#ssl",children:"SSL certificate key file"})," for the webservice\nAPI domain"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"aws_ws_nginx_config_file_path"})," is the absolute path or the path relative to\n",(0,s.jsx)(n.code,{children:"hashicorp-aws/hashicorp/webservice/images/ssl"})," of the ",(0,s.jsx)(n.a,{href:"#nginx-config",children:"Nginx config file"})]}),"\n"]}),"\n"]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"defining-terraform-variables",children:"Defining Terraform Variables"}),"\n",(0,s.jsxs)(n.p,{children:["Create a ",(0,s.jsx)(n.a,{href:"https://qubitpi.github.io/hashicorp-terraform/terraform/language/values/variables#variable-definitions-tfvars-files",children:"HashiCorp Terraform variable values file"})," named ",(0,s.jsx)(n.strong,{children:"aws-ws.auto.tfvars"})," under one of the subdirectory of\n",(0,s.jsx)(n.strong,{children:"[hashicorp-aws/hashicorp/webservice/instances]"}),", depending on the deployment mode, with the following contents:"]}),"\n",(0,s.jsxs)(_,{children:[(0,s.jsxs)(A,{value:"non-ssl",label:"non-SSL/HTTPS",default:!0,children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",metastring:"title=hashicorp-aws/hashicorp/webservice/instances/basic/aws-ws.auto.tfvars",children:'aws_deploy_region   = "my-aws-region"\nami_name            = "my-webservice"\ninstance_type       = "<one of t2.micro/t2.small/t2.medium/t2.large/t2.xlarge/t2.2xlarge>"\nec2_instance_name   = "My Webservice"\nec2_security_groups = ["My Webservice"]\nsentry_dsn          = "https://81usqk92p0qgormxkimcovvqzn27klltvnft1g4ex9cozc7w5p.ingest.sentry.io/5904518766461791"\n'})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"aws_deploy_region"})," is the ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html#Concepts.RegionsAndAvailabilityZones.Availability",children:"EC2 runtime region"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ami_name"})," is the name of the published AMI; ",(0,s.jsxs)(n.strong,{children:["it must be the same as the ",(0,s.jsx)(n.code,{children:"ami_name"})," in\n",(0,s.jsx)(n.a,{href:"#defining-packer-variables",children:"Packer variable file"})]})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"instance_type"})," is the chosen ",(0,s.jsx)(n.a,{href:"https://aws.amazon.com/ec2/instance-types/",children:"AWS EC2 instance type"})," at runtime"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ec2_instance_name"})," is the deployed EC2 name as appeared in the instance list of AWS console; it can be arbitrary"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ec2_security_groups"})," is the ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html",children:"AWS Security Group"})," ",(0,s.jsx)(n.em,{children:"name"})," (yes, not ID, but name...)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"sentry_dsn"})," is the standard ",(0,s.jsx)(n.a,{href:"https://qubitpi.github.io/sentry-docs/product/sentry-basics/concepts/dsn-explainer/?original_referrer=https%3A%2F%2Fgithub.com%2F",children:"Sentry Data Source Name (Sentry DSN)"}),". Please assign it an empty string if not\nneeded"]}),"\n"]})]}),(0,s.jsxs)(A,{value:"ssl",label:"SSL/HTTPS",children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",metastring:"title=hashicorp-aws/hashicorp/webservice/instances/ssl/aws-ws.auto.tfvars",children:'aws_deploy_region   = "my-aws-region"\nami_name            = "my-webservice"\ninstance_type       = "<one of t2.micro/t2.small/t2.medium/t2.large/t2.xlarge/t2.2xlarge>"\nec2_instance_name   = "My Webservice"\nec2_security_groups = ["My Webservice"]\nsentry_dsn          = "https://81usqk92p0qgormxkimcovvqzn27klltvnft1g4ex9cozc7w5p.ingest.sentry.io/5904518766461791"\nroute_53_zone_id    = "9DQXLTNSN7ZX9P8V2KZII"\nws_domain           = "mywebservice.mycompany.com"\n'})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"aws_deploy_region"})," is the ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html#Concepts.RegionsAndAvailabilityZones.Availability",children:"EC2 runtime region"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ami_name"})," is the name of the published AMI; ",(0,s.jsxs)(n.strong,{children:["it must be the same as the ",(0,s.jsx)(n.code,{children:"ami_name"})," in\n",(0,s.jsx)(n.a,{href:"#defining-packer-variables",children:"Packer variable file"})]})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"instance_type"})," is the chosen ",(0,s.jsx)(n.a,{href:"https://aws.amazon.com/ec2/instance-types/",children:"AWS EC2 instance type"})," at runtime"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ec2_instance_name"})," is the deployed EC2 name as appeared in the instance list of AWS console; it can be arbitrary"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ec2_security_groups"})," is the ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html",children:"AWS Security Group"})," ",(0,s.jsx)(n.em,{children:"name"})," (yes, not ID, but name...)"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"sentry_dsn"})," is the standard ",(0,s.jsx)(n.a,{href:"https://qubitpi.github.io/sentry-docs/product/sentry-basics/concepts/dsn-explainer/?original_referrer=https%3A%2F%2Fgithub.com%2F",children:"Sentry Data Source Name (Sentry DSN)"})," if webservice is monitored by ",(0,s.jsx)(n.a,{href:"https://qubitpi.github.io/sentry-docs/",children:"sentry.io"}),".\nPlease assign it an ",(0,s.jsx)(n.em,{children:"empty string if not needed"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ws_domain"})," is the SSL-enabled domain that will serve webservice API URL"]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["Although the ",(0,s.jsx)(n.code,{children:"ws_domain"})," is a public identity, hashicorp-aws will bind a ",(0,s.jsx)(n.strong,{children:"private IP"})," address to this domain,\nbecause webservice tend to be deployed in a virtual private network and AWS also requires\n",(0,s.jsx)(n.a,{href:"https://serverfault.com/a/967483",children:"EC2 instances of different Security Groups to communicate through private IP"})]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"route_53_zone_id"})," is the AWS Route 53 hosted Zone ID that hosts the domain ",(0,s.jsx)(n.code,{children:"mywebservice.mycompany.com"})]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"To find the zone ID in AWS Route 53, we can:"}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Sign in to the AWS Management Console"}),"\n",(0,s.jsxs)(n.li,{children:["Open the Route 53 console at ",(0,s.jsx)(n.a,{href:"https://console.aws.amazon.com/route53/",children:"https://console.aws.amazon.com/route53/"})]}),"\n",(0,s.jsx)(n.li,{children:"Select Hosted zones in the navigation pane"}),"\n",(0,s.jsx)(n.li,{children:"Find the requested ID in the top level Hosted Zones summary in the Route 53 section"}),"\n"]})]}),"\n"]}),"\n"]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"building-ami-image",children:"Building AMI Image"}),"\n",(0,s.jsxs)(_,{children:[(0,s.jsx)(A,{value:"non-ssl",label:"non-SSL/HTTPS",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:'cd hashicorp-aws/hashicorp/webservice/images/basic\npacker init .\npacker validate -var "skip_create_ami=true" .\npacker build -var "skip_create_ami=false" .\n'})})}),(0,s.jsx)(A,{value:"ssl",label:"SSL/HTTPS",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:'cd hashicorp-aws/hashicorp/webservice/images/ssl\npacker init .\npacker validate -var "skip_create_ami=true" .\npacker build -var "skip_create_ami=false" .\n'})})})]}),"\n",(0,s.jsx)(n.h3,{id:"deploying-to-ec2",children:"Deploying to EC2"}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["Depending on the ",(0,s.jsx)(n.a,{href:"#defining-packer-variables",children:"AMI"})," and ",(0,s.jsx)(n.a,{href:"#defining-terraform-variables",children:"EC2"})," configs, ",(0,s.jsx)(n.strong,{children:"please be aware\nAWS credit charges shall incur after the following commands execute"})]})}),"\n",(0,s.jsxs)(_,{children:[(0,s.jsx)(A,{value:"non-ssl",label:"non-SSL/HTTPS",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"cd ../instances/basic\nterraform init\nterraform validate\nterraform apply -auto-approve\n"})})}),(0,s.jsx)(A,{value:"ssl",label:"SSL/HTTPS",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"cd ../instances/ssl\nterraform init\nterraform validate\nterraform apply -auto-approve\n"})})})]}),"\n",(0,s.jsx)(n.h2,{id:"deployment-via-screwdriver-cd",children:"Deployment via Screwdriver CD"}),"\n",(0,s.jsxs)(n.p,{children:["hashicorp-aws also support deployment using ",(0,s.jsx)(n.a,{href:"https://qubitpi.github.io/screwdriver-cd-homepage/",children:"Screwdriver CD"})," with this ",(0,s.jsx)(n.a,{href:"https://github.com/QubitPi/jersey-webservice-release-definition-templates",children:"Jersey Webservice release definition templates"})]}),"\n",(0,s.jsx)(n.h2,{id:"deployment-via-github-actions",children:"Deployment via GitHub Actions"}),"\n",(0,s.jsx)(n.h2,{id:"deployment-via-hacp",children:"Deployment via HACP"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Please try our HACP platform to deploy a Webservice instance. It gives us one-click experience that helps us stand up\na webservice in a minute."})}),"\n",(0,s.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsx)(n.h3,{id:"aws",children:"AWS"}),"\n",(0,s.jsx)(n.h4,{id:"the-webservice-was-running-properly-right-after-deployment-but-not-after-a-while-with-503-service-unavailable",children:'The Webservice was Running Properly Right After Deployment, but NOT After a While with "503 Service Unavailable"'}),"\n",(0,s.jsxs)(n.p,{children:["This could be the resource starvation on EC2 instance. Please try using a bigger EC2 sizes. For example, bumping\n",(0,s.jsx)(n.em,{children:"t2.micro"})," to ",(0,s.jsx)(n.em,{children:"t2.medium"}),". hashicorp-aws currently supports ",(0,s.jsx)(n.strong,{children:"t2.x"})," sizes, i.e. one of the following sizes can be\nselected:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"t2.micro"}),"\n",(0,s.jsx)(n.li,{children:"t2.small"}),"\n",(0,s.jsx)(n.li,{children:"t2.medium"}),"\n",(0,s.jsx)(n.li,{children:"t2.large"}),"\n",(0,s.jsx)(n.li,{children:"t2.xlarge"}),"\n",(0,s.jsx)(n.li,{children:"t2.2xlarge"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["To modify the size, set the value of ",(0,s.jsx)(n.code,{children:"instance_type"})," in both ",(0,s.jsx)(n.em,{children:"aws-ws.pkrvars.hcl"})," and ",(0,s.jsx)(n.em,{children:"aws-ws.tfvars"}),". For\nexample:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",children:'instance_type       = "t2.medium"\n'})})]})}function E(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(D,{...e})}):D(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var s=i(6540);const t={},a=s.createContext(t);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);