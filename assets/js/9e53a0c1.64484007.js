"use strict";(self.webpackChunkhashicorp_aws=self.webpackChunkhashicorp_aws||[]).push([[6899],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=l(a),u=n,d=h["".concat(p,".").concat(u)]||h[u]||m[u]||i;return a?r.createElement(d,s(s({ref:t},c),{},{components:a})):r.createElement(d,s({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2942:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:6,title:"Jersey-Jetty Based Webservice"},s=void 0,o={unversionedId:"webservice",id:"webservice",title:"Jersey-Jetty Based Webservice",description:"- Yes, we DO NOT support Spring, never ever",source:"@site/docs/6-webservice.md",sourceDirName:".",slug:"/webservice",permalink:"/hashicorp-aws/docs/webservice",draft:!1,editUrl:"https://github.com/QubitPi/hashicorp-aws/tree/gh-pages/docs/6-webservice.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Jersey-Jetty Based Webservice"},sidebar:"tutorialSidebar",previous:{title:"React App",permalink:"/hashicorp-aws/docs/react"}},p={},l=[{value:"Manual Deployment",id:"manual-deployment",level:2},{value:"GitHub Action Automatic Deployment",id:"github-action-automatic-deployment",level:2},{value:"General Template in Downstream Repo",id:"general-template-in-downstream-repo",level:3}],c={toc:l};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Yes, we DO NOT support Spring, never ever"),(0,n.kt)("li",{parentName:"ul"},"EBS volumes during build time will ",(0,n.kt)("a",{parentName:"li",href:"https://qubitpi.github.io/hashicorp-packer/packer/integrations/hashicorp/amazon/latest/components/builder/ebs#:~:text=Optional%3A-,delete_on_termination,-(bool)%20%2D%20Indicates%20whether"},"automatically be removed")))),(0,n.kt)("h2",{id:"manual-deployment"},"Manual Deployment"),(0,n.kt)("p",null,"The following script variables need to be defined:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html"},(0,n.kt)("strong",{parentName:"a"},"AWS_ACCESS_KEY_ID"))," & ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html"},(0,n.kt)("strong",{parentName:"a"},"AWS_SECRET_ACCESS_KEY"))),(0,n.kt)("admonition",{parentName:"li",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("em",{parentName:"p"},"IAM user")," associated with the credentials above must have the following ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_access-management.html"},"AWS permissions policies"),":"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"IAMFullAccess"),(0,n.kt)("li",{parentName:"ul"},"AmazonEC2FullAccess"),(0,n.kt)("li",{parentName:"ul"},"AmazonRoute53FullAccess")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"WS_DIR"),": The local absolute path to the webservice repo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"HC_DIR"),": The local absolute path to the ",(0,n.kt)("a",{parentName:"p",href:"https://qubitpi.github.io/hashicorp-aws/"},"hashicorp-aws")," directory")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"HC_CONFIG_DIR"),": The local absolute path to a directory containing the following deployment files:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"SSL cert file located (",(0,n.kt)("inlineCode",{parentName:"p"},"/abs/path/to/hashicorp-aws-config-dir/server.crt"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"SSL cert key file (",(0,n.kt)("inlineCode",{parentName:"p"},"/abs/path/to/hashicorp-aws-config-dir/server.key"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Nginx config file (",(0,n.kt)("inlineCode",{parentName:"p"},"/abs/path/to/hashicorp-aws-config-dir/nginx.conf"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"ELK Filebeat config file (",(0,n.kt)("inlineCode",{parentName:"p"},"/abs/path/to/hashicorp-aws-config-dir/filebeat.yml"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Any webservice ",(0,n.kt)("strong",{parentName:"p"},".properties")," files (",(0,n.kt)("inlineCode",{parentName:"p"},"/abs/path/to/hashicorp-aws-config-dir"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A ",(0,n.kt)("a",{parentName:"p",href:"https://qubitpi.github.io/hashicorp-packer/packer/guides/hcl/variables#from-a-file"},"HashiCorp Packer variable file")," named ",(0,n.kt)("strong",{parentName:"p"},"aws-ws.pkrvars.hcl")," with the following\nvariable values (",(0,n.kt)("inlineCode",{parentName:"p"},"/abs/path/to/hashicorp-aws-config-dir/aws-ws.pkrvars.hcl"),"):"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-hcl"},'aws_image_region                 = "my-aws-region"\nami_name                         = "my-webservice"\ninstance_type                    = "<one of t2.micro/t2.small/t2.medium/t2.large/t2.xlarge/t2.2xlarge>"\nws_war_path                      = "../../../../WAR/my-webservice-1.0-SNAPSHOT.war"\naws_ws_ssl_cert_file_path        = "../../../../hashicorp-aws-config-dir/server.crt"\naws_ws_ssl_cert_key_file_path    = "../../../../hashicorp-aws-config-dir/server.key"\naws_ws_nginx_config_file_path    = "../../../../hashicorp-aws-config-dir/nginx.conf"\naws_ws_filebeat_config_file_path = "../../../../hashicorp-aws-config-dir/filebeat.yml"\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A ",(0,n.kt)("a",{parentName:"p",href:"https://qubitpi.github.io/hashicorp-terraform/terraform/language/values/variables#variable-definitions-tfvars-files"},"HashiCorp Terraform variable file")," named ",(0,n.kt)("strong",{parentName:"p"},"aws-ws.tfvars")," with the following\nvariable values (",(0,n.kt)("inlineCode",{parentName:"p"},"/abs/path/to/hashicorp-aws-config-dir/aws-ws.tfvars"),"):"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-hcl"},'aws_deploy_region   = "my-aws-region"\nami_name            = "my-webservice"\ninstance_type       = "<one of t2.micro/t2.small/t2.medium/t2.large/t2.xlarge/t2.2xlarge>"\nec2_instance_name   = "My Webservice"\nec2_security_groups = ["My Webservice"]\nroute_53_zone_id    = "9DQXLTNSN7ZX9P8V2KZII"\nws_domain           = "mywebservice.mycompany.com"\nsentry_dsn          = "can be empty if sentry.io is not needed"\n')))))),(0,n.kt)("p",null,"Then we can execute the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/QubitPi/hashicorp-aws/blob/master/hashicorp/webservice/deploy.sh"},"deploy.sh"))," to manually deploy any Jersey-Jetty based webservice."),(0,n.kt)("h2",{id:"github-action-automatic-deployment"},"GitHub Action Automatic Deployment"),(0,n.kt)("h3",{id:"general-template-in-downstream-repo"},"General Template in Downstream Repo"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Java 17 is assumed in the example below"),(0,n.kt)("li",{parentName:"ul"},"Assuming ws dir is called ",(0,n.kt)("strong",{parentName:"li"},"my-webservice")),(0,n.kt)("li",{parentName:"ul"},"~/.m2/settings.xml is working on CI/CD server"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"jobs:\n  hashicorp:\n    name: Generated WS WAR in GitHub Action, publish its AMI and deploy the AMI to EC2 through HashiCorp\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout\n        uses: actions/checkout@v3\n      - name: Set up JDK 17\n        uses: actions/setup-java@v3\n        with:\n          java-version: '17'\n          distribution: 'adopt'\n      - name: Checkout HashiCorp deployment tool\n        run: git clone https://github.com/QubitPi/hashicorp-aws.git ../hashicorp-aws\n      - name: Load hashicorp-aws-config-dir and put it in the same directory as hashicorp-aws\n        run: ...\n      - name: Load Packer variable file\n        run: cp ../hashicorp-aws-config-dir/aws-ws.pkrvars.hcl ../hashicorp-aws/hashicorp/webservice/images/aws-ws.auto.pkrvars.hcl\n      - name: Load Terraform variable file\n        run: cp ../hashicorp-aws-config-dir/aws-ws.tfvars ../hashicorp-aws/hashicorp/webservice/instances/aws-ws.auto.tfvars       \n      - name: Generate webservice WAR file\n        run: mvn -B clean package\n      - name: Move WAR file to a location for HashiCorp deployment to pickup\n        run: |\n          mkdir ../WAR\n          mv target/my-webservice-1.0-SNAPSHOT.war ../WAR\n      - name: QubitPi/hashicorp-aws\n        uses: QubitPi/hashicorp-aws@master\n        with:\n          hashicorp-dir: ../hashicorp-aws/hashicorp/webservice\n          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}\n          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}\n          aws-region: ${{ secrets.AWS_REGION }}\n")))}m.isMDXComponent=!0}}]);