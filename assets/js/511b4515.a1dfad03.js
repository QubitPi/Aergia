"use strict";(self.webpackChunkhashicorp_aws=self.webpackChunkhashicorp_aws||[]).push([[5195],{6554:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=s(5893),t=s(1151);const r={sidebar_position:2,title:"Setup"},o=void 0,l={id:"setup",title:"Setup",description:"[//]: # (Copyright Jiaqi Liu)",source:"@site/docs/2-setup.md",sourceDirName:".",slug:"/setup",permalink:"/hashicorp-aws/docs/setup",draft:!1,unlisted:!1,editUrl:"https://github.com/QubitPi/hashicorp-aws/tree/master/docs/docs/2-setup.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Setup"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/hashicorp-aws/docs/intro"},next:{title:"MLflow Model through REST API",permalink:"/hashicorp-aws/docs/mlflow"}},a={},c=[{value:"Configuration Sources for Both Manual &amp; GitHub CI/CD",id:"configuration-sources-for-both-manual--github-cicd",level:2},{value:"Setup",id:"setup",level:2},{value:"AWS",id:"aws",level:3},{value:"SSL",id:"ssl",level:3},{value:"Installing Free SSL Certificates with Certbot running on Nginx",id:"installing-free-ssl-certificates-with-certbot-running-on-nginx",level:4},{value:"Installing Certbot on Ubuntu",id:"installing-certbot-on-ubuntu",level:5},{value:"Creating SSL Certificate with Certbot",id:"creating-ssl-certificate-with-certbot",level:5},{value:"Configuring Reverse Proxy on Nginx",id:"configuring-reverse-proxy-on-nginx",level:5}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"configuration-sources-for-both-manual--github-cicd",children:"Configuration Sources for Both Manual & GitHub CI/CD"}),"\n",(0,i.jsxs)(n.p,{children:["[hashicorp-aws] can be used for both and ",(0,i.jsx)(n.strong,{children:"automatic GitHub Action based"})," and ",(0,i.jsx)(n.strong,{children:"Screwdriver CD based"})," deployments."]}),"\n",(0,i.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsx)(n.p,{children:"The following credentials and config files need to be ready:"}),"\n",(0,i.jsx)(n.h3,{id:"aws",children:"AWS"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html",children:"AWS_ACCESS_KEY_ID"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html",children:"AWS_SECRET_ACCESS_KEY"})}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"IAM user"})," associated with the credentials above must have the following ",(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_access-management.html",children:"AWS permissions policies"}),":"]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"IAMFullAccess"}),"\n",(0,i.jsx)(n.li,{children:"AmazonEC2FullAccess"}),"\n",(0,i.jsx)(n.li,{children:"AmazonRoute53FullAccess"}),"\n"]})]}),"\n",(0,i.jsx)(n.h3,{id:"ssl",children:"SSL"}),"\n",(0,i.jsx)(n.p,{children:"Let's image the following scenario:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["I purchased a domain from ",(0,i.jsx)(n.a,{href:"https://domains.google/",children:"Google Domain"})," called ",(0,i.jsx)(n.strong,{children:"my-domain.com"})]}),"\n",(0,i.jsxs)(n.li,{children:["I developed a web app that will be exposed at ",(0,i.jsx)(n.strong,{children:"my-app.my-domain.com"})]}),"\n",(0,i.jsxs)(n.li,{children:["I will deploy my app to ",(0,i.jsx)(n.a,{href:"https://aws.amazon.com/ec2/",children:"AWS EC2"})," using HashiCorp AWS"]}),"\n",(0,i.jsxs)(n.li,{children:["When my app is up and running, I need to automatically enable secure SSL communication so that my app can be visited\nat ",(0,i.jsx)(n.code,{children:"https://my-app.my-domain.com"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["We will expose our EC2 under that domain using ",(0,i.jsx)(n.a,{href:"https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route53_record.html",children:"aws_route53_record"}),", which\nallows us to dynamically bind EC2 IP to its hosted domain so that each time when a new EC2 instance is instantiated,\nthat instance will register its IP to ",(0,i.jsx)(n.code,{children:"my-domain.com"})," on Route 53."]}),"\n",(0,i.jsxs)(n.admonition,{title:"What if my domain is on Google Domain, not on Route 53?",type:"tip",children:[(0,i.jsx)(n.p,{children:"In this case, we can simply connect Google Domain to AWS Route 53 in the following steps"}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create a Hosted Zone in AWS Route 53:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Login into AWS Management Console and head towards Route 53"}),"\n",(0,i.jsxs)(n.li,{children:["In Route 53 -> Click ",(0,i.jsx)(n.strong,{children:"Hosted zones"})," -> Click ",(0,i.jsx)(n.strong,{children:"Create Hosted Zone"})]}),"\n",(0,i.jsxs)(n.li,{children:["Fill in ",(0,i.jsx)(n.strong,{children:"Domain Name"})," and select ",(0,i.jsx)(n.strong,{children:"Type"})," as ",(0,i.jsx)(n.strong,{children:"Public Hosted Zone"})," and click create"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Update Google Domain to use custom ",(0,i.jsx)(n.a,{href:"https://www.domain.com/help/article/what-is-a-nameserver",children:"name servers"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Log into ",(0,i.jsx)(n.a,{href:"https://domains.google/",children:"Google Domain"})," account and click on ",(0,i.jsx)(n.strong,{children:"My domains"})]}),"\n",(0,i.jsxs)(n.li,{children:["Click on ",(0,i.jsx)(n.strong,{children:"DNS"})]}),"\n",(0,i.jsxs)(n.li,{children:["At the top of the page, select ",(0,i.jsx)(n.strong,{children:"Custom name servers"})]}),"\n",(0,i.jsxs)(n.li,{children:['Copy and paste all four Name Server (NS) from the Route 53 Record Sets panel (Under "Hosted zone details") and\nclick ',(0,i.jsx)(n.strong,{children:"save"})]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"SSL certificate file"})," We will refer to the contents of this file as ",(0,i.jsx)(n.strong,{children:"SSL_CERTIFICATE"})," from now on"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"SSL certificate key file"})," We will refer to the contents of this file as ",(0,i.jsx)(n.strong,{children:"SSL_CERTIFICATE_KEY"})," from now on"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Nginx Reverse Proxy Config file"})," We will refer to the contents of this file as ",(0,i.jsx)(n.strong,{children:"NGINX_CONFIG_FILE"})," from now on"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If you are not very familiar with HTTPS/SSL, do worry, the\n",(0,i.jsx)(n.a,{href:"#installing-free-ssl-certificates-with-certbot-running-on-nginx",children:"next section"})," offers a step-by-step guide to help you\nget the 3 files above ready in a minute!"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["If you have your preferred approach or already have the 3 files above ready, please kip the\n",(0,i.jsx)(n.a,{href:"#installing-free-ssl-certificates-with-certbot-running-on-nginx",children:"next section"})]})}),"\n",(0,i.jsx)(n.h4,{id:"installing-free-ssl-certificates-with-certbot-running-on-nginx",children:"Installing Free SSL Certificates with Certbot running on Nginx"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://qubitpi.github.io/letsencrypt-website/",children:"Let's Encrypt"})," provides free SSL certificates for our websites to use secure connections. ",(0,i.jsx)(n.a,{href:"https://certbot.eff.org/",children:"Certbot"})," is free open\nsource software that allows us to easily create Let's Encrypt SSLs on our Linux server, such as Ubuntu VM."]}),"\n",(0,i.jsx)(n.h5,{id:"installing-certbot-on-ubuntu",children:"Installing Certbot on Ubuntu"}),"\n",(0,i.jsxs)(n.p,{children:["We will install Certbot on Ubuntu with ",(0,i.jsx)(n.em,{children:"snapd"})," using the following steps:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Install ",(0,i.jsx)(n.em,{children:"snapd"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt-get update\nsudo apt install snapd\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Ensure the latest snapd version has been installed:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo snap install core; sudo snap refresh core\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Install Certbot with snapd:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo snap install --classic certbot\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create a symlink to ensure Certbot runs:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo ln -s /snap/bin/certbot /usr/bin/certbot\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://stackoverflow.com/a/64571090/14312712",children:"Install Nginx"}),", assuming we use Nginx-based Certbot"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt install python3-certbot-nginx -y\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"creating-ssl-certificate-with-certbot",children:"Creating SSL Certificate with Certbot"}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"HTTP:80 must be open on the server"})}),"\n",(0,i.jsxs)(n.p,{children:["After ",(0,i.jsx)(n.a,{href:"#installing-certbot-on-ubuntu",children:"Certbot has been installed"}),', run Certbot to create SSL certificates and modify\nNginx configuration file to automatically redirect HTTP requests to HTTPS. Or, add "certonly" to create the SSL\ncertificates without modifying system files:']}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo certbot --nginx\n"})}),"\n",(0,i.jsx)(n.h5,{id:"configuring-reverse-proxy-on-nginx",children:"Configuring Reverse Proxy on Nginx"}),"\n",(0,i.jsxs)(n.p,{children:["After certificates have been deployed and Nginx has been configured properly for SSL by Certbot, it's time to configure\nrouting to direct HTTPS to local HTTP by modifying ",(0,i.jsx)(n.strong,{children:"/etc/nginx/sites-enabled/default"})," file."]}),"\n",(0,i.jsx)(n.p,{children:"Locate the section of"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"server {\n    ...\n\n    listen [::]:443 ssl ipv6only=on;\n    listen 443 ssl;\n    ssl_certificate /etc/ssl/certs/server.crt;\n    ssl_certificate_key /etc/ssl/private/server.key;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Add the proxy routing rule in the ",(0,i.jsx)(n.code,{children:"server"})," block above"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"    location / {\n        proxy_pass http://localhost:8080;\n    }\n"})}),"\n",(0,i.jsx)(n.p,{children:"In this example, we have a webservice running at port 8080. Essentially this will redirect all HTTPS request to this\nlocal port, effectively enabling HTTPS on the webservice"}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.p,{children:"The complete Nginx config file, in the end, will look something like:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"server {\n    listen 80 default_server;\n    listen [::]:80 default_server;\n\n    root /var/www/html;\n\n    index index.html index.htm index.nginx-debian.html;\n\n    server_name _;\n\n    location / {\n        try_files $uri $uri/ =404;\n    }\n}\n\nserver {\n    root /var/www/html;\n\n    index index.html index.htm index.nginx-debian.html;\n    server_name ws-domain.com;\n\n    location / {\n        proxy_pass http://localhost:8080;\n    }\n\n    listen [::]:443 ssl ipv6only=on;\n    listen 443 ssl;\n    ssl_certificate /etc/ssl/certs/server.crt;\n    ssl_certificate_key /etc/ssl/private/server.key;\n}\nserver {\n    if ($host = ws-domain.com) {\n        return 301 https://$host$request_uri;\n    }\n\n    listen 80 ;\n    listen [::]:80 ;\n    server_name ws-domain.com;\n    return 404;\n}\n"})}),(0,i.jsxs)(n.p,{children:["In the config above, Nginx assumes the certificate file and its key file are located at ",(0,i.jsx)(n.strong,{children:"/etc/ssl/certs/server.crt"}),"\nand ",(0,i.jsx)(n.strong,{children:"/etc/ssl/private/server.key"})]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>o});var i=s(7294);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);