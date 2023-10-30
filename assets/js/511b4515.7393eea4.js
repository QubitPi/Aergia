"use strict";(self.webpackChunkhashicorp_aws=self.webpackChunkhashicorp_aws||[]).push([[5195],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},745:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:2,title:"Setup"},o=void 0,s={unversionedId:"setup",id:"setup",title:"Setup",description:"Configuration Sources for Both Manual & GitHub CI/CD",source:"@site/docs/2-setup.md",sourceDirName:".",slug:"/setup",permalink:"/hashicorp-aws/docs/setup",draft:!1,editUrl:"https://github.com/QubitPi/hashicorp-aws/tree/gh-pages/docs/2-setup.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Setup"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/hashicorp-aws/docs/intro"},next:{title:"MLflow Model through REST API",permalink:"/hashicorp-aws/docs/mlflow"}},l={},p=[{value:"Configuration Sources for Both Manual &amp; GitHub CI/CD",id:"configuration-sources-for-both-manual--github-cicd",level:2},{value:"SSL",id:"ssl",level:2},{value:"Step 1 - Store SSL Certificate in GitHub Secrets",id:"step-1---store-ssl-certificate-in-github-secrets",level:2},{value:"Step 2 - Load Certificate into HashiCorp Context through GitHub Action",id:"step-2---load-certificate-into-hashicorp-context-through-github-action",level:2},{value:"Step 3 - Define Nginx Reverse Proxy Config File",id:"step-3---define-nginx-reverse-proxy-config-file",level:2},{value:"Step 3 - Loading Certificates and Nginx Config Files into AMI Image",id:"step-3---loading-certificates-and-nginx-config-files-into-ami-image",level:2},{value:"Step 4 - Moving Certificates and Nginx Config Files to the Proper Locations in AMI",id:"step-4---moving-certificates-and-nginx-config-files-to-the-proper-locations-in-ami",level:2},{value:"Step 5 - Registering DNS Record for the EC2 Instance",id:"step-5---registering-dns-record-for-the-ec2-instance",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"configuration-sources-for-both-manual--github-cicd"},"Configuration Sources for Both Manual & GitHub CI/CD"),(0,i.kt)("p",null,"[hashicorp-aws]"," can be used for both ",(0,i.kt)("strong",{parentName:"p"},"manual deployment")," and ",(0,i.kt)("strong",{parentName:"p"},"automatic GitHub Action based deployment"),". To achieve\nboth, the following file structure is required",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 hashicorp-aws/\n\u2502   \u2514\u2500\u2500 hashicorp/\n\u2502       \u2514\u2500\u2500 webservice/\n\u2502           \u2514\u2500\u2500 deploy.sh\n\u2514\u2500\u2500 hashicorp-aws-config-dir\n")),(0,i.kt)("p",null,"We will cover ",(0,i.kt)("em",{parentName:"p"},"hashicorp-aws-config-dir")," later."),(0,i.kt)("h2",{id:"ssl"},"SSL"),(0,i.kt)("p",null,"Let's image the following scenario:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"I purchased a domain from ",(0,i.kt)("a",{parentName:"li",href:"https://domains.google/"},"Google Domain")," called ",(0,i.kt)("strong",{parentName:"li"},"my-domain.com")),(0,i.kt)("li",{parentName:"ol"},"I developed a web app that will be exposed at ",(0,i.kt)("strong",{parentName:"li"},"my-app.my-domain.com")),(0,i.kt)("li",{parentName:"ol"},"I will deploy my app to ",(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/ec2/"},"AWS EC2")," using HashiCorp AWS"),(0,i.kt)("li",{parentName:"ol"},"When my app is up and running, I need to automatically enable secure SSL communication so that my app can be visited\nat ",(0,i.kt)("inlineCode",{parentName:"li"},"https://my-app.my-domain.com"))),(0,i.kt)("p",null,"Assuming that ",(0,i.kt)("strong",{parentName:"p"},"HashiCorp AWS, or Immutable Infrastructure in general, is not responsible for SSL certificates lifecycle\nmanagement"),", we can read the certificate from ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/security-guides/encrypted-secrets"},"GitHub Secrets")," and load it into\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html"},"AWS AMI")," in the following steps"),(0,i.kt)("h2",{id:"step-1---store-ssl-certificate-in-github-secrets"},"Step 1 - Store SSL Certificate in ",(0,i.kt)("a",{parentName:"h2",href:"https://docs.github.com/en/actions/security-guides/encrypted-secrets"},"GitHub Secrets")),(0,i.kt)("p",null,"As a prerequisite, please ",(0,i.kt)("a",{parentName:"p",href:"https://qubitpi.github.io/hashicorp-aws/blog/certbot"},"have both the certificate and certificate key files")," ready. Next we will have\nthe following ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/security-guides/encrypted-secrets"},"GitHub Action Secrets")," set up:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"SSL_CERTIFICATE"),": The content of the certificate file"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"SSL_CERTIFICATE_KEY"),": The content of the certificate key file")),(0,i.kt)("h2",{id:"step-2---load-certificate-into-hashicorp-context-through-github-action"},"Step 2 - Load Certificate into HashiCorp Context through ",(0,i.kt)("a",{parentName:"h2",href:"https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions"},"GitHub Action")),(0,i.kt)("p",null,'Right before the HashiCorp AWS step, we will put the following "Load SSL Certificates" step:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  ...\n\n  steps:\n    ...\n\n    - name: Load SSL Certificates\n      run: |\n        echo '${{ secrets.SSL_CERTIFICATE }}' > server.crt\n        echo '${{ secrets.SSL_CERTIFICATE_KEY }}' > server.key\n      working-directory: hashicorp/images\n\n    - name: Publish my-app AMI image and deploy it to EC2 through HashiCorp\n      uses: QubitPi/hashicorp-aws@master\n      with:\n        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}\n        aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}\n        aws-region: ${{ secrets.AWS_REGION }}\n")),(0,i.kt)("h2",{id:"step-3---define-nginx-reverse-proxy-config-file"},"Step 3 - Define Nginx Reverse Proxy Config File"),(0,i.kt)("p",null,"Note that in the following config, Nginx assumes the certificate file and its key file are located at\n",(0,i.kt)("strong",{parentName:"p"},"/etc/ssl/certs/server.crt")," and ",(0,i.kt)("strong",{parentName:"p"},"/etc/ssl/private/server.key"),", respectively. In addition, please modify\n",(0,i.kt)("inlineCode",{parentName:"p"},"my-app.my-domain.com")," and port ",(0,i.kt)("inlineCode",{parentName:"p"},"5000")," in it accordingly:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"server {\n    listen 80 default_server;\n    listen [::]:80 default_server;\n\n    root /var/www/html;\n\n    index index.html index.htm index.nginx-debian.html;\n\n    server_name _;\n\n    location / {\n        try_files $uri $uri/ =404;\n    }\n}\n\nserver {\n    root /var/www/html;\n\n    index index.html index.htm index.nginx-debian.html;\n    server_name my-app.my-domain.com;\n\n    location / {\n        proxy_pass http://localhost:5000;\n    }\n\n    listen [::]:443 ssl ipv6only=on;\n    listen 443 ssl;\n    ssl_certificate /etc/ssl/certs/server.crt;\n    ssl_certificate_key /etc/ssl/private/server.key;\n}\n\nserver {\n    if ($host = my-app.my-domain.com) {\n        return 301 https://$host$request_uri;\n    }\n\n    listen 80 ;\n    listen [::]:80 ;\n    server_name my-app.my-domain.com;\n    return 404;\n}\n")),(0,i.kt)("h2",{id:"step-3---loading-certificates-and-nginx-config-files-into-ami-image"},"Step 3 - Loading Certificates and Nginx Config Files into AMI Image"),(0,i.kt)("p",null,"In the ",(0,i.kt)("a",{parentName:"p",href:"https://qubitpi.github.io/hashicorp-packer/packer/docs/templates/hcl_templates/blocks/build"},"build block")," of our ",(0,i.kt)("strong",{parentName:"p"},"images/aws-my-app.pkr.hcl")," file, we add 3 provisioners to\nload the certificate, certificate key, and the Nginx reverse proxy config file into AMI."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note that Packer's file provisioner do not have root user privilege to put our files directly to the desired\nlocations. We will put them instead to a temporary location and have the shell provisioner to move them second time\nto the final locations in the\n",(0,i.kt)("a",{parentName:"p",href:"#step-4---moving-certificates-and-nginx-config-files-to-the-proper-locations-in-ami"},"next step"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hcl"},'build {\n  ...\n\n  # Load SSL Certificates into AMI image\n  provisioner "file" {\n    source = "./server.crt"\n    destination = "/home/ubuntu/server.crt"\n  }\n  provisioner "file" {\n    source = "./server.key"\n    destination = "/home/ubuntu/server.key"\n  }\n\n  # Load Nginx config file into AMI image\n  provisioner "file" {\n    source = "./nginx-ssl.conf"\n    destination = "/home/ubuntu/nginx-ssl.conf"\n  }\n\n  ...\n}\n')),(0,i.kt)("h2",{id:"step-4---moving-certificates-and-nginx-config-files-to-the-proper-locations-in-ami"},"Step 4 - Moving Certificates and Nginx Config Files to the Proper Locations in AMI"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We will post-configure AMI image using ",(0,i.kt)("a",{parentName:"li",href:"https://qubitpi.github.io/hashicorp-packer/packer/docs/provisioners/shell"},"Shell Provisioner"),". This is achieved by\nplacing a ",(0,i.kt)("strong",{parentName:"li"},"script.sh")," file under the ",(0,i.kt)("inlineCode",{parentName:"li"},"scripts")," directory\nIn ",(0,i.kt)("strong",{parentName:"li"},"scripts/aws-my-app.pkr-setup.sh")," file, we add the following server configuration script:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Install Nginx and load SSL config\nsudo apt install -y nginx\nsudo mv /home/ubuntu/nginx-ssl.conf /etc/nginx/sites-enabled/default\nsudo mv /home/ubuntu/server.crt /etc/ssl/certs/server.crt\nsudo mv /home/ubuntu/server.key /etc/ssl/private/server.key\n")),(0,i.kt)("h2",{id:"step-5---registering-dns-record-for-the-ec2-instance"},"Step 5 - Registering DNS Record for the EC2 Instance"),(0,i.kt)("p",null,"We will expose our EC2 under that domain using ",(0,i.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route53_record.html"},"aws_route53_record"),", which\nallows us to dynamically bind EC2 IP to its hosted domain so that each time when a new EC2 instance is instantiated,\nthat instance will register its IP to ",(0,i.kt)("inlineCode",{parentName:"p"},"my-domain.com")," on Route 53."),(0,i.kt)("p",null,"In our ",(0,i.kt)("strong",{parentName:"p"},"instances/aws-my-app.tf")," file, we will add the following"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-terraform"},'resource "aws_route53_record" "my-app-my-domain-com" {\n  zone_id         = "SDFE94DF94FJGI4FKHYEG12E"\n  name            = "my-app.my-domain.com"\n  type            = "A"\n  ttl             = 300\n  records         = [aws_instance.my-app.public_ip]\n  allow_overwrite = true\n}\n')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Please change the ",(0,i.kt)("inlineCode",{parentName:"p"},"zone_id")," value accordinly")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Make sure this resource is declared after the ",(0,i.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/instance"},"aws_instance"),", because IP is available\nonly after the EC2 instance has been provisioned; The IAM user associated with the ",(0,i.kt)("strong",{parentName:"p"},"AWS_ACCESS_KEY_ID")," &\n",(0,i.kt)("strong",{parentName:"p"},"AWS_SECRET_ACCESS_KEY")," should also have sufficient permission to interact with Route 53"),(0,i.kt)("p",{parentName:"admonition"},"In addition, the option\n",(0,i.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route53_record#allow_overwrite"},(0,i.kt)("strong",{parentName:"a"},"allow_overwrite")),'\ndeletes existing DNS record with name "my-app.my-domain.com"')),(0,i.kt)("admonition",{title:"What if my domain is on Google Domain, not on Route 53?",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"In this case, we can simply connect Google Domain to AWS Route 53 in the following steps"),(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a Hosted Zone in AWS Route 53:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Login into AWS Management Console and head towards Route 53"),(0,i.kt)("li",{parentName:"ul"},"In Route 53 -> Click ",(0,i.kt)("strong",{parentName:"li"},"Hosted zones")," -> Click ",(0,i.kt)("strong",{parentName:"li"},"Create Hosted Zone")),(0,i.kt)("li",{parentName:"ul"},"Fill in ",(0,i.kt)("strong",{parentName:"li"},"Domain Name")," and select ",(0,i.kt)("strong",{parentName:"li"},"Type")," as ",(0,i.kt)("strong",{parentName:"li"},"Public Hosted Zone")," and click create"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Update Google Domain to use custom ",(0,i.kt)("a",{parentName:"p",href:"https://www.domain.com/help/article/what-is-a-nameserver"},"name servers")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Log into ",(0,i.kt)("a",{parentName:"li",href:"https://domains.google/"},"Google Domain")," account and click on ",(0,i.kt)("strong",{parentName:"li"},"My domains")),(0,i.kt)("li",{parentName:"ul"},"Click on ",(0,i.kt)("strong",{parentName:"li"},"DNS")),(0,i.kt)("li",{parentName:"ul"},"At the top of the page, select ",(0,i.kt)("strong",{parentName:"li"},"Custom name servers")),(0,i.kt)("li",{parentName:"ul"},'Copy and paste all four Name Server (NS) from the Route 53 Record Sets panel (Under "Hosted zone details") and\nclick ',(0,i.kt)("strong",{parentName:"li"},"save")))))),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},(0,i.kt)("a",{parentName:"li",href:"https://tree.nathanfriend.io/?s=(%27options!(%27fancy3~fullPath!false~trailingSlash3~rootDot3)~4(%274%2752*02**webservice2***deploy.sh25-runbooks%27)~version!%271%27)*%20%200hashicorp2%5Cn3!true4source!50-aws%0154320"},"https://tree.nathanfriend.io/?s=(%27options!(%27fancy3~fullPath!false~trailingSlash3~rootDot3)~4(%274%2752*02**webservice2***deploy.sh25-runbooks%27)~version!%271%27)*%20%200hashicorp2%5Cn3!true4source!50-aws%0154320"),"*",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);