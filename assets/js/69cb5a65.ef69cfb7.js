"use strict";(self.webpackChunkaergia=self.webpackChunkaergia||[]).push([[4590],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),k=o,u=c["".concat(l,".").concat(k)]||c[k]||g[k]||a;return n?i.createElement(u,r(r({ref:t},d),{},{components:n})):i.createElement(u,r({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<a;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=n(7462),o=(n(7294),n(3905));const a={sidebar_position:7},r="aergia::jenkins_github_webhook",s={unversionedId:"recipes/jenkins-github-webhook",id:"recipes/jenkins-github-webhook",title:"aergia::jenkins_github_webhook",description:"Integrate Jenkins with GitHub through Webhooks",source:"@site/docs/recipes/jenkins-github-webhook.md",sourceDirName:"recipes",slug:"/recipes/jenkins-github-webhook",permalink:"/aergia/docs/recipes/jenkins-github-webhook",draft:!1,editUrl:"https://github.com/QubitPi/aergia/tree/gh-pages/docs/recipes/jenkins-github-webhook.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"aergia::jenkins_agent",permalink:"/aergia/docs/recipes/jenkins-agent"},next:{title:"aergia::nexus",permalink:"/aergia/docs/recipes/nexus"}},l={},p=[{value:"Recipe Details",id:"recipe-details",level:2},{value:"Configuring Webhook on GitHub",id:"configuring-webhook-on-github",level:3},{value:"Allow Access Private GitHub Repository From Jenkins/Chef Node",id:"allow-access-private-github-repository-from-jenkinschef-node",level:3},{value:"Generate and Load SSH Key Pair on Jenkins Agent Node",id:"generate-and-load-ssh-key-pair-on-jenkins-agent-node",level:4},{value:"Using Multiple Repositories on One Chef Node using Multiple Deploy Keys",id:"using-multiple-repositories-on-one-chef-node-using-multiple-deploy-keys",level:4},{value:"Add Public Key as Deploy Key to GitHub Private Repository",id:"add-public-key-as-deploy-key-to-github-private-repository",level:3},{value:"Complete Key Verification on Agent Node",id:"complete-key-verification-on-agent-node",level:3},{value:"Configuring Jenkins Job",id:"configuring-jenkins-job",level:3},{value:"Recipe Verification",id:"recipe-verification",level:2}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"aergiajenkins_github_webhook"},"aergia::jenkins_github_webhook"),(0,o.kt)("p",null,"Integrate ",(0,o.kt)("strong",{parentName:"p"},"Jenkins")," with ",(0,o.kt)("strong",{parentName:"p"},"GitHub")," through Webhooks"),(0,o.kt)("p",null,"This approach works great for most enterprise GitHub repos (i.e. private repos), whose CI/CD logics are not publicly\nvisible"),(0,o.kt)("h2",{id:"recipe-details"},"Recipe Details"),(0,o.kt)("h3",{id:"configuring-webhook-on-github"},"Configuring Webhook on GitHub"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1"),': go to a target GitHub repository and click on "',(0,o.kt)("strong",{parentName:"p"},"Settings"),'".'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Error loading jengit1.png",src:n(2433).Z,width:"744",height:"282"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2"),': Click on Webhooks and then click on "',(0,o.kt)("strong",{parentName:"p"},"Add webhook"),'".'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Error loading jengit2.png",src:n(7865).Z,width:"792",height:"362"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3"),': In the "',(0,o.kt)("strong",{parentName:"p"},"Payload URL"),'" field, paste your Jenkins environment URL. At the end of this URL add\n',(0,o.kt)("strong",{parentName:"p"},"/github-webhook/"),'. In the "Content type" select: "application/json" and leave the "Secret" field empty.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Error loading jengit3.png",src:n(1683).Z,width:"693",height:"290"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 4"),': In the page "Which events would you like to trigger this webhook?" choose "',(0,o.kt)("em",{parentName:"p"},"Let me select individual\nevents."),'" Then, check "Pull Requests" and "Pushes". At the end of this option, make sure that the "Active" option is\nchecked and click on "',(0,o.kt)("strong",{parentName:"p"},"Add webhook"),'".'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Error loading jengit4.png",src:n(2958).Z,width:"430",height:"380"}),"\n",(0,o.kt)("img",{alt:"Error loading jengit5.png",src:n(8365).Z,width:"482",height:"460"})),(0,o.kt)("p",null,"We're done with the configuration on GitHub\u2019s side! Now let's move on to Jenkins."),(0,o.kt)("h3",{id:"allow-access-private-github-repository-from-jenkinschef-node"},"Allow Access Private GitHub Repository From Jenkins/Chef Node"),(0,o.kt)("p",null,'We can "git clone" a private repository on GitHub.com to our Jenkins Node server by using a ',(0,o.kt)("strong",{parentName:"p"},"deploy key"),', which is an\nSSH key that grants access to a single repository. GitHub attaches the public part of the key directly to the private\nrepository instead of a personal account, and the private part of the key remains on the Jenkins Node server. For more\ninformation, see "',(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/rest/guides/delivering-deployments"},"Delivering deployments"),'".'),(0,o.kt)("p",null,"Deploy keys with write access can perform the same actions as an organization member with admin access, or a\ncollaborator on a personal repository."),(0,o.kt)("p",null,"Pros:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Anyone with access to the repository and server has the ability to deploy the project."),(0,o.kt)("li",{parentName:"ul"},"Users don't have to change their local SSH settings."),(0,o.kt)("li",{parentName:"ul"},"Deploy keys are read-only by default, but we can give them write access when adding them to a repository.")),(0,o.kt)("p",null,"Cons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Deploy keys only grant access to a single repository. More complex projects may have many repositories to pull to the\nsame server."),(0,o.kt)("li",{parentName:"ul"},"Deploy keys are usually not protected by a passphrase, making the key easily accessible if the server is compromised.")),(0,o.kt)("h4",{id:"generate-and-load-ssh-key-pair-on-jenkins-agent-node"},"Generate and Load SSH Key Pair on Jenkins Agent Node"),(0,o.kt)("p",null,'Since Jenkins agent runs under "jenkins" user, ',(0,o.kt)("inlineCode",{parentName:"p"},"jenkins_github_webhook"),' makes sure "jenkins" user exits on a Chef node\nfirst. If it\'s not there, it will effectively execute'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo su\nuseradd -d /var/lib/jenkins jenkins\nsudo mkdir -p /var/lib/jenkins/.ssh\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"jenkins_github_webhook"),' will then generate and load a key pair onto "jenkins" user:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-keygen\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},'Note that the key pair will always be "id_rsa" and "id_rsa.pub"; we will explain that later')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/.ssh\nsudo cp id_rsa id_rsa.pub /var/lib/jenkins/.ssh/\n\nsudo chown -R jenkins /var/lib/jenkins\nsudo chown -R jenkins /var/lib/jenkins/.ssh\nsudo chmod 700 /var/lib/jenkins/.ssh\n")),(0,o.kt)("h4",{id:"using-multiple-repositories-on-one-chef-node-using-multiple-deploy-keys"},"Using Multiple Repositories on One Chef Node using Multiple Deploy Keys"),(0,o.kt)("p",null,"If we use (i.e. 'git clone') multiple repositories on one server, we will need to generate a dedicated key pair for each\none. ",(0,o.kt)("strong",{parentName:"p"},"GitHub does not allow reusing a deploy key for multiple repositories"),"."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"GitHub does not allow reusing a deploy key for multiple repositories")),(0,o.kt)("p",null,"In the chef node's SSH configuration file (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/jenkins/.ssh/config"),"), add an alias entry for each repository.\nFor example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-config"},"Host github.com-repo-0\n        Hostname github.com\n        IdentityFile=/var/lib/jenkins/.ssh/repo-0_deploy_key\n\nHost github.com-repo-1\n        Hostname github.com\n        IdentityFile=/var/lib/jenkins/.ssh/repo-1_deploy_key\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Host github.com-repo-0")," - The repository's alias."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Hostname github.com")," - Configures the hostname to use with the alias."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"IdentityFile=/var/lib/jenkins/.ssh/repo-0_deploy_key")," - Assigns a private key to the alias.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The regular ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh-keygen")," command in the case of this example becomes"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-keygen -f ~/.ssh/repo-0_deploy_key\nssh-keygen -f ~/.ssh/repo-1_deploy_key\n"))),(0,o.kt)("p",null,"We can then use the hostname's alias to interact with the repository using SSH, which will use the unique deploy key\nassigned to that alias. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com-repo-1:OWNER/repo-1.git\n")),(0,o.kt)("h3",{id:"add-public-key-as-deploy-key-to-github-private-repository"},"Add Public Key as Deploy Key to GitHub Private Repository"),(0,o.kt)("p",null,"Navigate to the private repository UI on GitHub, from there, From the repository, click ",(0,o.kt)("strong",{parentName:"p"},"Settings"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Error loading repo-settings.png",src:n(2312).Z,width:"866",height:"96"})),(0,o.kt)("p",null,"In the sidebar, click ",(0,o.kt)("strong",{parentName:"p"},"Deploy Keys"),", then click ",(0,o.kt)("strong",{parentName:"p"},"Add deploy key"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Error loading add-deploy-key.png",src:n(6209).Z,width:"2088",height:"622"})),(0,o.kt)("p",null,"Provide a title, paste in the public key (File content of ",(0,o.kt)("inlineCode",{parentName:"p"},"id_rsa.pub")," we generated in previous step)."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Error loading deploy-key.png",src:n(9729).Z,width:"2154",height:"1194"})),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Make sure the pasted content in the text box ends with\nan empty line"),(0,o.kt)("p",{parentName:"admonition"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Allow write access")," if we want this key to have write access to the repository. A deploy key with write access\nlets a deployment push to the repository.")),(0,o.kt)("p",null,"Click ",(0,o.kt)("strong",{parentName:"p"},"Add key"),"."),(0,o.kt)("h3",{id:"complete-key-verification-on-agent-node"},"Complete Key Verification on Agent Node"),(0,o.kt)("p",null,"As the last step, we will manually verify ssh GitHub host keys using"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo su -s /bin/bash jenkins\ncd ~\nssh -T git@github.com\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If we look at verbose output of the last command using ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh -T git@github.com")," we will see why the aforementioned\n",(0,o.kt)("inlineCode",{parentName:"p"},"ssh-keygen"),' command must be required to generate the fixed name of "id_rsa" and "id_rsa.pub", which turns out are\npicked up as hard-coded name.')),(0,o.kt)("h3",{id:"configuring-jenkins-job"},"Configuring Jenkins Job"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 5"),': In Jenkins, click on "',(0,o.kt)("strong",{parentName:"p"},"New Item"),'" to create a new project.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Error loading jengit6.png",src:n(878).Z,width:"412",height:"343"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 6"),': Give your project a name, then choose "',(0,o.kt)("strong",{parentName:"p"},"Freestyle project"),'" and finally, click on "OK".'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Error loading jengit7.png",src:n(1367).Z,width:"487",height:"427"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 7"),': Click on the "',(0,o.kt)("strong",{parentName:"p"},"Source Code Management"),'" tab.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Error loading jengit8.png",src:n(5939).Z,width:"417",height:"352"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 8"),': Click on Git and paste your GitHub repository URL in the "',(0,o.kt)("strong",{parentName:"p"},"Repository URL"),'" field. The "Credentials" will\nbe used by "jenkins" to ',(0,o.kt)("inlineCode",{parentName:"p"},"git clone")," source code, which will be compiled and deployed, from GitHub. We should\n",(0,o.kt)("a",{parentName:"p",href:"jenkins-agent#configuring-jenkins-credential-on-controller-node-on-first-use"},"add a new ",(0,o.kt)("strong",{parentName:"a"},"Jenkins credential")," of this ",(0,o.kt)("strong",{parentName:"a"},"agent")," node"),"\nas well"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Error loading jengit9.png",src:n(3136).Z,width:"557",height:"281"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 9"),': Click on the "',(0,o.kt)("strong",{parentName:"p"},"Build Triggers"),'" tab and then on the "',(0,o.kt)("em",{parentName:"p"},"GitHub hook trigger for GITScm polling"),'". Or,\nchoose the trigger of your choice.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Error loading jengit10.png",src:n(7777).Z,width:"972",height:"443"})),(0,o.kt)("p",null,"That's it! Our GitHub repository has integrated with our Jenkins project. With this Jenkins GitHub integration, we can\nnow use any file found in the GitHub repository and trigger the Jenkins job to run with every code commit."),(0,o.kt)("h2",{id:"recipe-verification"},"Recipe Verification"))}c.isMDXComponent=!0},6209:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/add-deploy-key-eab0d8ca1ff48253124147e9e1589ada.png"},9729:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/deploy-key-eff7e8504e92d7759d4e2111b20b0824.png"},2433:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/jengit1-05d523173cbc2d5c7e1ef7e650b691cf.png"},7777:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/jengit10-fe79c7981d32a1438fb4bf4aeab2dfa2.png"},7865:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/jengit2-a7b058fb67afb168d20b137290a6b53d.png"},1683:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/jengit3-31bd436c6a0cb613cec3fd091ea9b610.png"},2958:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/jengit4-7614448638ad24f1ed827f75dfc0a7e1.png"},8365:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/jengit5-2d2a66f77e2c0fa28a360f593ce12882.png"},878:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/jengit6-b4d0f3334f4df94b605101ec3c4db899.png"},1367:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/jengit7-90b58fb9c5711cf3472b93586358bdd3.png"},5939:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/jengit8-eec226a051cf59205f522bc432adee82.png"},3136:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/jengit9-b739c94529384a4bf70a5963ec4f4de9.png"},2312:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/repo-settings-c8d621839bb064397ff62180ee2976a8.png"}}]);