"use strict";(self.webpackChunkhashicorp_aws=self.webpackChunkhashicorp_aws||[]).push([[779],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),g=a,h=m["".concat(l,".").concat(g)]||m[g]||u[g]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7510:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={slug:"certbot",title:"Installing Free SSL Certificates with Certbot running on Nginx",authors:["jiaqi"],tags:["SSL","HTTPS","Security"]},o=void 0,s={permalink:"/hashicorp-aws/blog/certbot",editUrl:"https://github.com/QubitPi/hashicorp-aws/tree/gh-pages/blog/2023-09-16-certbot/index.md",source:"@site/blog/2023-09-16-certbot/index.md",title:"Installing Free SSL Certificates with Certbot running on Nginx",description:"[//]: # (Copyright Jiaqi Liu)",date:"2023-09-16T00:00:00.000Z",formattedDate:"September 16, 2023",tags:[{label:"SSL",permalink:"/hashicorp-aws/blog/tags/ssl"},{label:"HTTPS",permalink:"/hashicorp-aws/blog/tags/https"},{label:"Security",permalink:"/hashicorp-aws/blog/tags/security"}],readingTime:2.39,hasTruncateMarker:!0,authors:[{name:"Jiaqi Liu",title:"Maintainer of hashicorp-aws",url:"https://github.com/QubitPi",imageURL:"https://avatars.githubusercontent.com/u/16126939?v=4",key:"jiaqi"}],frontMatter:{slug:"certbot",title:"Installing Free SSL Certificates with Certbot running on Nginx",authors:["jiaqi"],tags:["SSL","HTTPS","Security"]},prevItem:{title:"Build and Push Docker Images through GitHub Action",permalink:"/hashicorp-aws/blog/dockerhub-github-actions"},nextItem:{title:"Switching Node.js Versions with NVM",permalink:"/hashicorp-aws/blog/nvm"}},l={authorsImageUrls:[void 0]},c=[{value:"Installing Certbot on Ubuntu",id:"installing-certbot-on-ubuntu",level:2},{value:"Creating SSL Certificate with Certbot",id:"creating-ssl-certificate-with-certbot",level:2},{value:"Configuring Reverse Proxy on Nginx",id:"configuring-reverse-proxy-on-nginx",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://qubitpi.github.io/letsencrypt-website/"},"Let's Encrypt")," provides free SSL certificates for our websites to use\nsecure connections. ",(0,a.kt)("a",{parentName:"p",href:"https://certbot.eff.org/"},"Certbot")," is free open source software that allows us to easily create\nLet's Encrypt SSLs on our Linux server, such as Ubuntu VM."),(0,a.kt)("h2",{id:"installing-certbot-on-ubuntu"},"Installing Certbot on Ubuntu"),(0,a.kt)("p",null,"We will install Certbot on Ubuntu with ",(0,a.kt)("em",{parentName:"p"},"snapd")," using the following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install ",(0,a.kt)("em",{parentName:"p"},"snapd"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update\nsudo apt install snapd\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Ensure the latest snapd version has been installed:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo snap install core; sudo snap refresh core\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install Certbot with snapd:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo snap install --classic certbot\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a symlink to ensure Certbot runs:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ln -s /snap/bin/certbot /usr/bin/certbot\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/64571090/14312712"},"Install Nginx"),", assuming we use Nginx-based Certbot"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install python3-certbot-nginx -y\n")))),(0,a.kt)("h2",{id:"creating-ssl-certificate-with-certbot"},"Creating SSL Certificate with Certbot"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"HTTP:80 must be open on the server")),(0,a.kt)("p",null,"After ",(0,a.kt)("a",{parentName:"p",href:"#install-certbot"},"Certbot has been installed"),', run Certbot to create SSL certificates and  modify Nginx\nconfiguration file to automatically redirect HTTP requests to HTTPS. Or, add "certonly" to create the SSL certificates\nwithout modifying system files:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo certbot --nginx\n")),(0,a.kt)("h2",{id:"configuring-reverse-proxy-on-nginx"},"Configuring Reverse Proxy on Nginx"),(0,a.kt)("p",null,"After certificates have been deployed and Nginx has been configured properly for SSL by Certbot, it's time to configure\nrouting to direct HTTPS to local HTTP by modifying ",(0,a.kt)("strong",{parentName:"p"},"/etc/nginx/sites-enabled/default")," file."),(0,a.kt)("p",null,"Locate the section of"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"server {\n    ...\n\n    listen [::]:443 ssl ipv6only=on;\n    listen 443 ssl;\n    ssl_certificate /etc/ssl/certs/server.crt;\n    ssl_certificate_key /etc/ssl/private/server.key;\n}\n")),(0,a.kt)("p",null,"Add the proxy routing rule in the ",(0,a.kt)("inlineCode",{parentName:"p"},"server")," block above"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"    location / {\n        proxy_pass http://localhost:8080;\n    }\n")),(0,a.kt)("p",null,"In this example, we have a webservice running at port 8080. Essentially this will redirect all HTTPS request to this\nlocal port, effectively enabling HTTPS on the webservice"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The complete Nginx config file, in the end, will look something like:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-text"},"server {\n    listen 80 default_server;\n    listen [::]:80 default_server;\n\n    root /var/www/html;\n\n    index index.html index.htm index.nginx-debian.html;\n\n    server_name _;\n\n    location / {\n        try_files $uri $uri/ =404;\n    }\n}\n\nserver {\n    root /var/www/html;\n\n    index index.html index.htm index.nginx-debian.html;\n    server_name ws-domain.com;\n\n    location / {\n        proxy_pass http://localhost:8080;\n    }\n\n    listen [::]:443 ssl ipv6only=on;\n    listen 443 ssl;\n    ssl_certificate /etc/ssl/certs/server.crt;\n    ssl_certificate_key /etc/ssl/private/server.key;\n}\nserver {\n    if ($host = ws-domain.com) {\n        return 301 https://$host$request_uri;\n    }\n\n    listen 80 ;\n    listen [::]:80 ;\n    server_name ws-domain.com;\n    return 404;\n}\n"))))}u.isMDXComponent=!0}}]);