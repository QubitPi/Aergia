"use strict";(self.webpackChunkhashicorp_aws=self.webpackChunkhashicorp_aws||[]).push([[7303],{4893:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var t=n(4848),a=n(8453);const r={slug:"sonar-cloud-code-coverage",title:"Setting Up Coverage Analysis through SonarCloud in Maven Project",authors:["jiaqi"],tags:["CI/CD","Maven","SonarCloud"]},i=void 0,s={permalink:"/hashicorp-aws/blog/sonar-cloud-code-coverage",editUrl:"https://github.com/QubitPi/hashicorp-aws/tree/master/docs/blog/2022-07-05-sonar-cloud-code-coverage.md",source:"@site/blog/2022-07-05-sonar-cloud-code-coverage.md",title:"Setting Up Coverage Analysis through SonarCloud in Maven Project",description:"[//]: # (Copyright Jiaqi Liu)",date:"2022-07-05T00:00:00.000Z",formattedDate:"July 5, 2022",tags:[{label:"CI/CD",permalink:"/hashicorp-aws/blog/tags/ci-cd"},{label:"Maven",permalink:"/hashicorp-aws/blog/tags/maven"},{label:"SonarCloud",permalink:"/hashicorp-aws/blog/tags/sonar-cloud"}],readingTime:3.2,hasTruncateMarker:!0,authors:[{name:"Jiaqi Liu",title:"Maintainer of hashicorp-aws",url:"https://github.com/QubitPi",imageURL:"https://avatars.githubusercontent.com/u/16126939?v=4",key:"jiaqi"}],frontMatter:{slug:"sonar-cloud-code-coverage",title:"Setting Up Coverage Analysis through SonarCloud in Maven Project",authors:["jiaqi"],tags:["CI/CD","Maven","SonarCloud"]},unlisted:!1,prevItem:{title:"Docker cAdvisor",permalink:"/hashicorp-aws/blog/docker-c-advisor"},nextItem:{title:"Yahoo Cloud Object Store - Object Storage at Exabyte Scale",permalink:"/hashicorp-aws/blog/yahoo-object-storage"}},l={authorsImageUrls:[void 0]},c=[{value:"Add Coverage in a Single-module Maven Project",id:"add-coverage-in-a-single-module-maven-project",level:2},{value:"Analyze Repository With GitHub Actions",id:"analyze-repository-with-github-actions",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3}];function d(e){const o={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.p,{children:"SonarCloud supports the reporting of test coverage as part of the analysis of our Java project."}),"\n",(0,t.jsx)(o.p,{children:"However, SonarCloud does not produce the coverage report itself. Instead, we must set up a third-party tool to produce\nthe report as part of your build process. You then need to configure your analysis to tell the SonarScanner where the\nreport is located so that it can pick it up and send it to SonarCloud, where it will be displayed on your project\ndashboard along with the other analysis metrics."}),"\n",(0,t.jsx)(o.p,{children:"For Java projects, SonarCloud directly supports the JaCoCo coverage tool."}),"\n",(0,t.jsx)(o.h2,{id:"add-coverage-in-a-single-module-maven-project",children:"Add Coverage in a Single-module Maven Project"}),"\n",(0,t.jsxs)(o.p,{children:["To add coverage to your Maven project you need to use the\n",(0,t.jsx)(o.a,{href:"https://qubitpi.github.io/jacoco.github.io/",children:"jacoco-maven-plugin"})]}),"\n",(0,t.jsx)(o.p,{children:"In the most basic case, we will need to execute two goals:"}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"jacoco:prepare-agent"}),", which allows coverage info to be collected during unit tests execution, and"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"jacoco:report"}),", which uses data collected during unit test execution to generate a report."]}),"\n"]}),"\n",(0,t.jsx)(o.p,{children:"By default, the tool generates XML, HTML, and CSV versions of the report. SonarCloud explicitly specify XML for its\nneed."}),"\n",(0,t.jsxs)(o.p,{children:["We begin by adding the following snippet to the project's ",(0,t.jsx)(o.code,{children:"${project.basedir}/pom.xml"}),":"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-xml",children:"<project>\n    <build>\n        <pluginManagement>\n            <plugins>\n                <plugin>\n                    <groupId>org.apache.maven.plugins</groupId>\n                    <artifactId>maven-compiler-plugin</artifactId>\n                    <version>3.8.1</version>\n                </plugin>\n                <plugin>\n                    <groupId>org.sonarsource.scanner.maven</groupId>\n                    <artifactId>sonar-maven-plugin</artifactId>\n                    <version>3.7.0.1746</version>\n                </plugin>\n                <plugin>\n                    <groupId>org.jacoco</groupId>\n                    <artifactId>jacoco-maven-plugin</artifactId>\n                    <version>0.8.6</version>\n                </plugin>\n            </plugins>\n        </pluginManagement>\n    </build>\n\n    <profiles>\n        <profile>\n            <id>coverage</id>\n            <activation>\n                <activeByDefault>true</activeByDefault>\n            </activation>\n            <build>\n                <plugins>\n                    <plugin>\n                        <groupId>org.jacoco</groupId>\n                        <artifactId>jacoco-maven-plugin</artifactId>\n                        <executions>\n                            <execution>\n                                <id>prepare-agent</id>\n                                <goals>\n                                    <goal>prepare-agent</goal>\n                                </goals>\n                            </execution>\n                            <execution>\n                                <id>report</id>\n                                <goals>\n                                    <goal>report</goal>\n                                </goals>\n                            </execution>\n                        </executions>\n                    </plugin>\n                </plugins>\n            </build>\n        </profile>\n    </profiles>\n</project>\n"})}),"\n",(0,t.jsxs)(o.p,{children:["Usually we would want to create a specific profile, like the ",(0,t.jsx)(o.code,{children:"coverage"})," profile in the example above, which executes\nunit tests with the JaCoCo agent and creates a coverage report. This profile would then only be activated if coverage\ninformation is requested (e.g., in the CI pipeline)."]}),"\n",(0,t.jsxs)(o.p,{children:["By default the generated report will be saved under ",(0,t.jsx)(o.code,{children:"target/site/jacoco/jacoco.xml"}),". This location will be checked\nautomatically by the scanner."]}),"\n",(0,t.jsx)(o.h2,{id:"analyze-repository-with-github-actions",children:"Analyze Repository With GitHub Actions"}),"\n",(0,t.jsxs)(o.p,{children:["To configure analysis of your project using GitHub Actions you should follow the in-product (i.e. your SonarCloud\ndashboard) tutorial. Under the ",(0,t.jsx)(o.em,{children:"Configure"})," tab of your project homepage in SonarCloud, simply click on ",(0,t.jsx)(o.strong,{children:"With GitHub\nActions"}),". You can also access the tutorials by going to ",(0,t.jsx)(o.strong,{children:"Administration > Analysis Method"}),"."]}),"\n",(0,t.jsx)(o.p,{children:"The tutorial will walk you through the precise steps to set up the analysis."}),"\n",(0,t.jsxs)(o.admonition,{type:"warning",children:[(0,t.jsx)(o.p,{children:'It is very important that in order for SonarCloud to effectively collect test coverage stats, we must have "Build and\nanalyze" command, found in the tutorial, run as'}),(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"mvn -B clean -Pcoverage verify sonar:sonar \\\norg.sonarsource.scanner.maven:sonar-maven-plugin:sonar \\\n-Dsonar.java.binaries=target/classes \\\n-Dsonar.projectKey=QubitPi_circe\n"})})]}),"\n",(0,t.jsx)(o.h3,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsxs)(o.p,{children:["To investigate issues with the import of test coverage information you can run Maven with the debug flag, ",(0,t.jsx)(o.code,{children:"-X"}),":"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"mvn -X clean verify sonar:sonar ...\n"})}),"\n",(0,t.jsx)(o.p,{children:"In the logs, you will find the execution of different sensors for each module of the project. Typically you will have a\nlog similar to the following one when XML report is processed."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"[INFO] 16:58:05.074 Sensor JaCoCo XML Report Importer [jacoco]\n[DEBUG] 16:58:05.082 Reading report 'C:\\projects\\sonar-scanning-examples\\maven-multimodule\\tests\\target\\site\\jacoco-aggregate\\jacoco.xml'\n[INFO] 16:58:05.093 Sensor JaCoCo XML Report Importer [jacoco] (done) | time=19ms\n"})}),"\n",(0,t.jsx)(o.admonition,{type:"note",children:(0,t.jsx)(o.p,{children:"In addition, coverage stats won't show up in PR and will only be available on master branch and SonarCloud project\ndashboard after the PR is merged."})})]})}function u(e={}){const{wrapper:o}={...(0,a.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,o,n)=>{n.d(o,{R:()=>i,x:()=>s});var t=n(6540);const a={},r=t.createContext(a);function i(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);