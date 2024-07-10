"use strict";(self.webpackChunkhashicorp_aws=self.webpackChunkhashicorp_aws||[]).push([[4781],{2344:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var s=i(3860),a=i(5639);const t={sidebar_position:1,title:"General Deployment"},r=void 0,c={id:"react/index",title:"General Deployment",description:"- EBS volumes during build time will automatically be removed",source:"@site/docs/react/index.md",sourceDirName:"react",slug:"/react/",permalink:"/docs/react/",draft:!1,unlisted:!1,editUrl:"https://github.com/QubitPi/hashicorp-aws/tree/master/docs/docs/react/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"General Deployment"},sidebar:"tutorialSidebar",previous:{title:"React App",permalink:"/docs/category/react-app"},next:{title:"Deployment via Screwdriver CD",permalink:"/docs/react/screwdriver-cd-deployment"}},o={},l=[{value:"Manual Deployment",id:"manual-deployment",level:2},{value:"GitHub Action Automatic Deployment",id:"github-action-automatic-deployment",level:2},{value:"General Template in Downstream Repo",id:"general-template-in-downstream-repo",level:3},{value:"Deployment via Screwdriver CD",id:"deployment-via-screwdriver-cd",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["EBS volumes during build time will ",(0,s.jsx)(n.a,{href:"https://packer.qubitpi.org/packer/integrations/hashicorp/amazon/latest/components/builder/ebs#:~:text=Optional%3A-,delete_on_termination,-(bool)%20%2D%20Indicates%20whether",children:"automatically be removed"})]}),"\n"]})}),"\n",(0,s.jsx)(n.h2,{id:"manual-deployment",children:"Manual Deployment"}),"\n",(0,s.jsx)(n.p,{children:"The following script variables need to be defined:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html",children:(0,s.jsx)(n.strong,{children:"AWS_ACCESS_KEY_ID"})})," & ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html",children:(0,s.jsx)(n.strong,{children:"AWS_SECRET_ACCESS_KEY"})})]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"IAM user"})," associated with the credentials above must have the following ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_access-management.html",children:"AWS permissions policies"}),":"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"IAMFullAccess"}),"\n",(0,s.jsx)(n.li,{children:"AmazonEC2FullAccess"}),"\n",(0,s.jsx)(n.li,{children:"AmazonRoute53FullAccess"}),"\n"]})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"REACT_DIR"}),": The local absolute path to the React project repo"]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["Should the React App be built with ",(0,s.jsx)(n.a,{href:"https://create-react-app.dev/docs/adding-custom-environment-variables/#adding-development-environment-variables-in-env",children:".env file"}),", this file MUST exist at ",(0,s.jsx)(n.code,{children:"$REACT_DIR/.env"})," at this moment. This .env\nfile is essentially the same one mentioned in the ",(0,s.jsx)(n.code,{children:"HC_CONFIG_DIR"})," part below"]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"HC_DIR"}),": The local absolute path to the ",(0,s.jsx)(n.a,{href:"https://qubitpi.github.io/hashicorp-aws/",children:"hashicorp-aws"})," directory"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"HC_CONFIG_DIR"}),": The local absolute path to a directory containing the following deployment files:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["SSL cert file located (",(0,s.jsx)(n.code,{children:"/abs/path/to/hashicorp-aws-config-dir/server.crt"}),")"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["SSL cert key file (",(0,s.jsx)(n.code,{children:"/abs/path/to/hashicorp-aws-config-dir/server.key"}),")"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Nginx config file (",(0,s.jsx)(n.code,{children:"/abs/path/to/hashicorp-aws-config-dir/nginx.conf"}),")"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[".env file (",(0,s.jsx)(n.code,{children:"/abs/path/to/hashicorp-aws-config-dir/.env"}),")"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.a,{href:"https://packer.qubitpi.org/packer/guides/hcl/variables#from-a-file",children:"HashiCorp Packer variable file"})," named ",(0,s.jsx)(n.strong,{children:"aws-react.pkrvars.hcl"})," with the following\nvariable values (",(0,s.jsx)(n.code,{children:"/abs/path/to/hashicorp-aws-config-dir/aws-react.pkrvars.hcl"}),"):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",children:'ami_region                       = "my-aws-region"\nami_name                         = "my-react-app"\ninstance_type                    = "<one of t2.micro/t2.small/t2.medium/t2.large/t2.xlarge/t2.2xlarge>"\nreact_dist_path                  = "../../../../dist"\naws_react_ssl_cert_file_path     = "../../../../hashicorp-aws-config-dir/server.crt"\naws_react_ssl_cert_key_file_path = "../../../../hashicorp-aws-config-dir/server.key"\naws_react_nginx_config_file_path = "../../../../hashicorp-aws-config-dir/nginx.conf"\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.a,{href:"https://terraform.qubitpi.org/terraform/language/values/variables#variable-definitions-tfvars-files",children:"HashiCorp Terraform variable file"})," named ",(0,s.jsx)(n.strong,{children:"aws-react.tfvars"})," with the\nfollowing variable values (",(0,s.jsx)(n.code,{children:"/abs/path/to/hashicorp-aws-config-dir/aws-react.tfvars"}),"):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",children:'aws_ec2_region = "my-aws-region"\nroute_53_zone_id  = "9DQXLTNSN7ZX9P8V2KZII"\nami_name          = "my-react-app"\ninstance_type     = "<one of t2.micro/t2.small/t2.medium/t2.large/t2.xlarge/t2.2xlarge>"\nec2_instance_name = "My React App"\nsecurity_groups   = ["My React App"]\nreact_domain      = "myreactapp.mycompany.com"\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"github-action-automatic-deployment",children:"GitHub Action Automatic Deployment"}),"\n",(0,s.jsx)(n.h3,{id:"general-template-in-downstream-repo",children:"General Template in Downstream Repo"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"env:\n  NODE_VERSION: 16\n\njobs:\n  hashicorp:\n    name: Generated React dist in GitHub Action, publish its AMI and deploy the AMI to EC2 through HashiCorp\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout\n        uses: actions/checkout@v3\n      - name: Set node version to ${{ env.NODE_VERSION }}\n        uses: actions/setup-node@v3\n        with:\n          node-version: ${{ env.NODE_VERSION }}\n      - name: Checkout HashiCorp deployment tool\n        run: git clone https://github.com/QubitPi/hashicorp-aws.git ../hashicorp-aws\n      - name: Load hashicorp-aws-config-dir and put it in the same directory as hashicorp-aws\n        run: ...\n      - name: Load Packer variable file\n        run: cp ../hashicorp-aws-config-dir/aws-react.pkrvars.hcl ../hashicorp-aws/hashicorp/react/images/aws-react.auto.pkrvars.hcl\n      - name: Load Terraform variable file\n        run: cp ../hashicorp-aws-config-dir/aws-react.tfvars ../hashicorp-aws/hashicorp/react/instances/aws-react.auto.tfvars\n      - name: Generate dist\n        run: cp ../hashicorp-aws-config-dir/.env . && yarn && yarn build\n      - name: Move dist to a location for HashiCorp deployment to pickup\n        run: mv dist ../\n      - name: QubitPi/hashicorp-aws\n        uses: QubitPi/hashicorp-aws@master\n        with:\n          hashicorp-dir: ../hashicorp-aws/hashicorp/react\n          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}\n          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}\n          aws-region: ${{ secrets.AWS_REGION }}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"deployment-via-screwdriver-cd",children:"Deployment via Screwdriver CD"}),"\n",(0,s.jsxs)(n.p,{children:["hashicorp-aws supports deployment using ",(0,s.jsx)(n.a,{href:"screwdriver-cd-deployment",children:"Screwdriver CD"}),". Please check it out. ",(0,s.jsx)("img",{src:"https://github.com/QubitPi/QubitPi/blob/master/img/8%E5%A5%BD.gif?raw=true",height:"40px"})]})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},5639:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>r});var s=i(1733);const a={},t=s.createContext(a);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);