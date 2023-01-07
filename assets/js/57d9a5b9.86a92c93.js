"use strict";(self.webpackChunkaergia=self.webpackChunkaergia||[]).push([[7588],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>u});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(t),k=a,u=m["".concat(c,".").concat(k)]||m[k]||d[k]||i;return t?r.createElement(u,o(o({ref:n},l),{},{components:t})):r.createElement(u,o({ref:n},l))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=k;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},6069:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const i={},o=void 0,s={unversionedId:"recipes/jenkins",id:"recipes/jenkins",title:"jenkins",description:"[//]: # (Copyright Jiaqi Liu)",source:"@site/docs/recipes/jenkins.md",sourceDirName:"recipes",slug:"/recipes/jenkins",permalink:"/aergia/docs/recipes/jenkins",draft:!1,editUrl:"https://github.com/QubitPi/aergia/tree/gh-pages/docs/recipes/jenkins.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"jenkins-github-webhook",permalink:"/aergia/docs/recipes/jenkins-github-webhook"},next:{title:"keycloak",permalink:"/aergia/docs/recipes/keycloak"}},c={},p=[{value:"sidebar_position: 5",id:"sidebar_position-5",level:2},{value:"Recipe Details",id:"recipe-details",level:2},{value:"Recipe Verification",id:"recipe-verification",level:2}],l={toc:p};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"sidebar_position-5"},"sidebar_position: 5"),(0,a.kt)("h1",{id:"aergiajenkins"},"aergia::jenkins"),(0,a.kt)("p",null,"Deploys a fully functional ",(0,a.kt)("a",{parentName:"p",href:"https://jenkins.io/"},"Jenkins server")," ",(0,a.kt)("strong",{parentName:"p"},"container"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/jenkins/jenkins"},"available on Docker Hub"),"."),(0,a.kt)("h2",{id:"recipe-details"},"Recipe Details"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker volume create --name jenkins-data\ndocker run -d --name=jenkins -p 8080:8080 -p 50000:50000 --restart=on-failure -v jenkins-data:/var/jenkins_home jenkins/jenkins:lts-jdk11\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"-d")," commands runs the container in\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/language/nodejs/run-containers/#run-in-detached-mode"},"detached mode"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"$JENKINS_HOME")," inside container will be ",(0,a.kt)("strong",{parentName:"p"},"/var/jenkins_home"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker exec -it jenkins bash\njenkins@3ae9fd9220:/$ ls /var/jenkins_home\nconfig.xml              jobs            secret.key              userContent\ncopy_reference_file.log          nodeMonitors.xml  secret.key.not-so-secret  users\nhudson.model.UpdateCenter.xml      nodes            secrets              war\njenkins.telemetry.Correlator.xml  plugins        updates\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Since all Jenkins data lives in there, including plugins and configuration, in ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/jenkins_home"),", we will also want\nto make that an explicit volume so we can manage it and attach to another container for upgrades. So we create a")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'"jenkins_home" ',(0,a.kt)("a",{parentName:"p",href:"https://qubitpi.github.io/docker-docs/storage/volumes/"},"docker volume")," on the host machine. Docker\nvolumes retain their content even when the container is stopped, started, or deleted."))),(0,a.kt)("h2",{id:"recipe-verification"},"Recipe Verification"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Later on, since Jenkins is running inside ",(0,a.kt)("a",{parentName:"p",href:"jenkins"},"container"),", if we would like to enter Jenkins container, we would\nuse this  command"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -u 0 -it <jenkins-container-name> bash\n")),(0,a.kt)("p",{parentName:"admonition"},"where ",(0,a.kt)("inlineCode",{parentName:"p"},"<jenkins-container-name>")," is the name of the container that runs Jenkins. If Jenkins has been installed using\n",(0,a.kt)("a",{parentName:"p",href:"jenkins"},"our recipe"),", the command above is"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -u 0 -it jenkins bash\n")),(0,a.kt)("p",{parentName:"admonition"},"instead of regular"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -it jenkins bash\n"))))}m.isMDXComponent=!0}}]);