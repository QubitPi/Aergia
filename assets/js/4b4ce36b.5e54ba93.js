"use strict";(self.webpackChunkaergia=self.webpackChunkaergia||[]).push([[330],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(n),u=o,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||r;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7542:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={slug:"openvpn",title:"OpenVPN",authors:["jiaqi"],tags:["Security"],date:new Date("2022-05-27T00:00:00.000Z")},s=void 0,i={permalink:"/aergia/blog/openvpn",editUrl:"https://github.com/QubitPi/aergia/tree/gh-pages/blog/openvpn/index.md",source:"@site/blog/openvpn/index.md",title:"OpenVPN",description:"[//]: # (Copyright Jiaqi Liu)",date:"2022-05-27T00:00:00.000Z",formattedDate:"May 27, 2022",tags:[{label:"Security",permalink:"/aergia/blog/tags/security"}],readingTime:13.635,hasTruncateMarker:!0,authors:[{name:"Jiaqi Liu",title:"Maintainer of Aergia",url:"https://github.com/QubitPi",imageURL:"https://avatars.githubusercontent.com/u/16126939?v=4",key:"jiaqi"}],frontMatter:{slug:"openvpn",title:"OpenVPN",authors:["jiaqi"],tags:["Security"],date:"2022-05-27T00:00:00.000Z"},prevItem:{title:"Docker cAdvisor",permalink:"/aergia/blog/docker-c-advisor"},nextItem:{title:"SSH ASCII Banner",permalink:"/aergia/blog/ssh-ascii-banner"}},l={authorsImageUrls:[void 0]},p=[{value:"OpenVPN",id:"openvpn",level:2},{value:"Computer Networks Basics",id:"computer-networks-basics",level:3},{value:"Protocols and Layers",id:"protocols-and-layers",level:4},{value:"Tunneling and Overhead",id:"tunneling-and-overhead",level:4},{value:"VPN Concepts",id:"vpn-concepts",level:4},{value:"A Proposed Standard for Tunneling",id:"a-proposed-standard-for-tunneling",level:5},{value:"Protocols Implemented on OSI Layer 2",id:"protocols-implemented-on-osi-layer-2",level:5},{value:"Protocols Implemented on OSI Layer 3",id:"protocols-implemented-on-osi-layer-3",level:5},{value:"Protocols Implemented on OSI Layer 4",id:"protocols-implemented-on-osi-layer-4",level:5},{value:"What is a VPN",id:"what-is-a-vpn",level:3},{value:"OpenVPN Packages",id:"openvpn-packages",level:4},{value:"OpenVPN Internals",id:"openvpn-internals",level:5},{value:"The Tun/Tap Driver",id:"the-tuntap-driver",level:6},{value:"Additional OpenVPN Resources",id:"additional-openvpn-resources",level:3},{value:"Config File",id:"config-file",level:4},{value:"Contingency Plan",id:"contingency-plan",level:4}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"openvpn"},"OpenVPN"),(0,o.kt)("p",null,"It is necessary to secure and protect the data transmitted on a wide network of Internet. One use case is that more and\nmore enterprises offer their customers or business partners a protected access to relevant data for their business\nrelations such as ordering formulae or stock data. Virtual Private Networks (VPNs) were created out of a greater need\nfor such secured communication across an otherwise unprotected infrastructure, such as internet, over private channels,\nwhere the community at large isn't able to eavesdrop"),(0,o.kt)("p",null,"we have three typical scenarios for VPN solutions in modern enterprises as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"An intranet spanning over several locations of a company"),(0,o.kt)("li",{parentName:"ol"},"Access for home or field workers with changing IPs, mobile devices, and centralized protection"),(0,o.kt)("li",{parentName:"ol"},"An extranet for customers or business partners")),(0,o.kt)("p",null,"Each of these typical scenarios requires special security considerations and setups. The external home workers will need\ndifferent access to servers in the company than the customers and business partners. In fact, access for business\npartners and customers must be restricted severely."),(0,o.kt)("h3",{id:"computer-networks-basics"},"Computer Networks Basics"),(0,o.kt)("p",null,"To understand VPN, some basic network concepts need to be understood. All data exchange in computer networks is based on\n",(0,o.kt)("strong",{parentName:"p"},"protocols"),". Protocols are like languages or rituals that must be used between communication partners in networks.\nWithout the correct use of the correct protocol, communication fails."),(0,o.kt)("h4",{id:"protocols-and-layers"},"Protocols and Layers"),(0,o.kt)("p",null,"There are a large number of protocols involved in any action we take when we access the Internet or a PC in our local\nnetwork. Our ",(0,o.kt)("strong",{parentName:"p"},"Network Interface Card (NIC)")," will communicate with a hub, a switch, or a router. Our application will\ncommunicate with its partner on a server on another PC, and many more protocol-based communication procedures are\nnecessary to exchange data."),(0,o.kt)("p",null,"Because of this, the ",(0,o.kt)("strong",{parentName:"p"},"Open Systems Interconnection (OSI) specification")," was created. Every protocol used in today's\nnetworks can be classified by this scheme. The OSI specification defines seven numbered layers of data exchange which\nstart at layer 1 (the physical layer) of the underlying network media (electrical, optical, or radio signals) and span\nup to layer 7 (the application layer), where applications on PCs communicate with each other."),(0,o.kt)("p",null,"The layers of the OSI model are as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Physical layer"),": Sending and receiving through the hardware"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Data link layer"),": Encoding and decoding data packets into bits"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Network layer"),": Switching, routing, addressing, error handling, and so on"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Transport layer"),": End-to-end error recovery and flow control"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Session layer"),": Establishing connections and sessions between applications"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Presentation layer"),": Translating between application data formats and network formats"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Application layer"),": Application-specific protocols")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"In the Internet, however, a slightly different approach is used"),". The Internet is mainly based on the ",(0,o.kt)("strong",{parentName:"p"},"Internet\nProtocol (IP)"),"."),(0,o.kt)("p",null,"The layers of the IP model are as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Link layer"),": A concatenation of OSI layers 1 and 2 (the physical and data link layers)."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Network layer"),": Comprising the network layer of the OSI model"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Transport layer"),": Comprising protocols, such as ",(0,o.kt)("strong",{parentName:"li"},"Transmission Control Protocol (TCP)")," and ",(0,o.kt)("strong",{parentName:"li"},"User Datagram\nProtocol (UDP)"),", which are the basis for protocols of the application layer."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Application layer"),": Concatenation of OSI layers 5 through 7 (the session, presentation, and application layers).")),(0,o.kt)("p",null,"A TCP/IP network packet consists of two parts - header and data. The header is a sort of label containing metadata on\nsender, recipient, and administrative information for the transfer. On the networking level of an Ethernet network these\npackets are called frames. In the context of the Internet Protocol these packets are called datagrams, Internet datagrams,\nIP datagrams, or simply ",(0,o.kt)("strong",{parentName:"p"},"packets")),(0,o.kt)("p",null,"So what do VPNs do? ",(0,o.kt)("strong",{parentName:"p"},"VPN software takes IP packets or Ethernet frames and wraps them into another packet"),".\nSpecifically:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Whole network packets (frames, datagrams) consisting of header and data are ",(0,o.kt)("em",{parentName:"li"},"wrapped")," into new packets"),(0,o.kt)("li",{parentName:"ul"},"All data, including metadata, such as recipient and sender, are encrypted"),(0,o.kt)("li",{parentName:"ul"},"The new packets are labeled with new headers containing meta-information about the VPN and are addressed to the VPN\npartner")),(0,o.kt)("p",null,"All VPN software systems differ only in the special way of ",(0,o.kt)("em",{parentName:"p"},"wrapping")," and ",(0,o.kt)("em",{parentName:"p"},"locking")," the data."),(0,o.kt)("h4",{id:"tunneling-and-overhead"},"Tunneling and Overhead"),(0,o.kt)("p",null,"VPN technology is often called ",(0,o.kt)("strong",{parentName:"p"},"tunneling")," because the data in a VPN connection is protected from the Internet, as the\nwalls of a road or rail tunnel protect the traffic in the tunnel from the weight of stone of the mountain above. Let's\nnow have a closer look at how the VPN software does this."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Error loading vpn-tunneling-and-overhead.png",src:n(2702).Z,width:"1530",height:"484"})),(0,o.kt)("p",null,"The VPN software in the locations A and B encrypts and decrypts the data and sends it through the tunnel. Like cars or\ntrains in a tunnel, the data cannot go anywhere else but to the other tunnel endpoint (if they are properly routed)."),(0,o.kt)("p",null,"The following are put together and wrapped into one new package:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tunnel information (such as the address of the other endpoint)"),(0,o.kt)("li",{parentName:"ul"},"Encryption data and methods"),(0,o.kt)("li",{parentName:"ul"},"The original IP packet (or network frame)")),(0,o.kt)("p",null,"The new package is then sent to the other tunnel endpoint. The payload of this package now holds the complete IP packet\n(or network frame), but in an encrypted form. It is, therefore, not readable to anyone who does not possess the right\nkey. The new header of the packet simply contains the addresses of the sender, recipient, and other metadata that is\nnecessary for and provided by the VPN software that is used."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Error loading vpn-wrapping.png",src:n(9773).Z,width:"2494",height:"778"})),(0,o.kt)("p",null,"Perhaps you have noticed that the amount of data that is sent grows during the process of 'wrapping'. Depending on the\nVPN software used, this so-called ",(0,o.kt)("strong",{parentName:"p"},"overhead")," can become a very important factor. The overhead is the difference\nbetween the net data that is sent to the tunnel software and the gross data that is sent through the tunnel by the VPN\nsoftware. If a file of 1MB is sent from user A to user B, and this file causes 1.5MB traffic in the tunnel, then the\noverhead would be 50%, a very high level indeed (note that every protocol that is used causes overhead, so not all of\nthat 50% might be the fault of the VPN solution.). The overhead caused by the VPN software depends on the amount of\norganizational (meta-) data and the encryption used. Whereas the first depends only on the VPN software used, the latter\nis simply a matter of choice between security and speed. In other words, the better the cipher you use for encryption,\nthe more overhead you will produce. ",(0,o.kt)("em",{parentName:"p"},"Speed versus security is your choice"),"."),(0,o.kt)("h4",{id:"vpn-concepts"},"VPN Concepts"),(0,o.kt)("h5",{id:"a-proposed-standard-for-tunneling"},"A Proposed Standard for Tunneling"),(0,o.kt)("p",null,"In principle, tunneling can be done on almost all layers of the OSI model. The ",(0,o.kt)("strong",{parentName:"p"},"General Routing Encapsulation (GRE)"),"\nprovides a standard for tunneling data, which was defined in 1994 in Request for Comments (",(0,o.kt)("strong",{parentName:"p"},"RFCs"),") 1701 and 1702, and\nlater in RFCs 2784 and 2890. Perhaps because this definition is not a protocol definition, but more or less a standard\nproposal on how to tunnel data, this implementation has found its way into many devices and has become the basis for\nother protocols."),(0,o.kt)("h5",{id:"protocols-implemented-on-osi-layer-2"},"Protocols Implemented on OSI Layer 2"),(0,o.kt)("p",null,"VPN technologies residing in layer 2 can theoretically tunnel any kind of packet. In most cases a virtual\n",(0,o.kt)("strong",{parentName:"p"},"Point-to-Point Protocol (PPP)")," device is established, which is used to connect to the other tunnel endpoint. A PPP\ndevice is normally used for modem or DSL connections."),(0,o.kt)("p",null,"4 well known layer-2 VPN technologies, which are defined by RFCs, use encryption methods and provide user\nauthentication, as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("strong",{parentName:"li"},"Point to Point Tunneling Protocol (PPTP)"),", RFC 2637, which was developed with the help of Microsoft, is an\nexpansion of the PPP. It is integrated in all newer Microsoft operating systems. PPTP uses GRE for encapsulation and\ncan tunnel IP, IPX, and other protocols over the Internet. The main disadvantage is the restriction that there can\nonly be one tunnel at a time between communication partners."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("strong",{parentName:"li"},"Layer 2 Forwarding (L2F)"),", RFC 2341, was developed almost at the same time by other companies, including\nCisco, and offers more possibilities than PPTP, especially regarding tunneling of network frames and multiple\nsimultaneous tunnels."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("strong",{parentName:"li"},"Layer 2 Tunneling Protocol (L2TP)"),", RFC 2661, is accepted as an industry standard and is being widely used by\nCisco and other manufacturers. Its success is based on the fact that it combines the advantages of L2F and PPTP\nwithout suffering their drawbacks. Even though it does not provide its own security mechanisms, it can be combined\nwith technologies offering such mechanisms, such as IPsec (see the section\n",(0,o.kt)("a",{parentName:"li",href:"#protocols-implemented-on-osi-layer-3"},(0,o.kt)("em",{parentName:"a"},"Protocols Implemented on OSI Layer 3")),")."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("strong",{parentName:"li"},"Layer 2 Security Protocol (L2Sec)"),", RFC 2716, was developed to provide a solution to the security flaws of\nIPsec. Even though its overhead is rather big, the security mechanisms that are used are secure, because mainly\nSSL/TLS is used")),(0,o.kt)("h5",{id:"protocols-implemented-on-osi-layer-3"},"Protocols Implemented on OSI Layer 3"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"IPsec (Internet Protocol Security)")," is the most widespread tunneling technology. In fact it is a more complex set of\nprotocols, standards, and mechanisms than a single technology."),(0,o.kt)("p",null,"IPsec was developed as an Internet Security Standard on layer 3 and has been standardized by the Internet Engineering\nTask Force (IETF) since 1995. IPsec can be used to encapsulate any traffic of application layers, but no traffic of\nlower network layers. Network frames, IPX packets, and broadcast messages cannot be transferred, and network address\ntranslation is only possible with restrictions."),(0,o.kt)("p",null,"Nevertheless IPsec can use a variety of encryption mechanisms, authentication protocols, and other security\nassociations. IPsec software exists for almost every platform."),(0,o.kt)("p",null,"The main advantage of IPsec is the fact that it is being used everywhere. An administrator can choose from a large\nnumber of hardware devices, software implementations, and administration frontends to provide networks with a secure\ntunnel."),(0,o.kt)("p",null,"There are two methods that IPsec uses:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Tunnel mode"),": All IP packets are encapsulated in a new packet and sent to the other tunnel endpoint, where the VPN\nsoftware unpacks them and forwards them to the recipient. In this way the IP addresses of sender and recipient and\nall other metadata are protected."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Transport mode"),": In transport mode, only the payload of the data section is encrypted and encapsulated. In this\nway the overhead becomes significantly smaller than in tunnel mode, but an attacker can easily read the metadata and\nfind out who is communicating with whom. However the data is encrypted and therefore protected, which makes IPsec a\nreal 'private' VPN solution.")),(0,o.kt)("h5",{id:"protocols-implemented-on-osi-layer-4"},"Protocols Implemented on OSI Layer 4"),(0,o.kt)("h3",{id:"what-is-a-vpn"},"What is a VPN"),(0,o.kt)("p",null,"Simply put, ",(0,o.kt)("strong",{parentName:"p"},'a VPN allows an administrator to create a "local" network between multiple computers on varying network\nsegments'),". In some instances, those machines can be on the same LAN, they can be distant from each other across the\nvast Internet, or they can even be connected across a multitude of connection media such as wireless uplinks, satellite,\ndial-up-networking, and so on. The P in VPN comes from the added protection to make that virtual network private.\nNetwork traffic that is flowing over a VPN is often referred to as ",(0,o.kt)("strong",{parentName:"p"},"inside the (VPN) tunnel"),", compared to all the\nother traffic that is ",(0,o.kt)("strong",{parentName:"p"},"outside the tunnel"),"."),(0,o.kt)("p",null,"In the following figure, network traffic is shown as it traditionally traverses across multiple network segments and the\ngeneral Internet. Here, this traffic is relatively open to inspection and analysis, which is insecure:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Error loading vpn-insecure-network.png",src:n(3035).Z,width:"1746",height:"968"})),(0,o.kt)("p",null,"When a VPN is used, the traffic inside the tunnel is no longer identifiable. Here is an example of the traffic within a\nVPN. While the VPN itself is routed across the Internet like in the preceding figure, devices along the network path\nonly see VPN traffic; those devices are completely unaware of what is being transmitted inside the private tunnel.\nProtected protocols, such as HTTPS and SSH, will still be protected inside the tunnel from other VPN users, but will be\nadditionally unidentifiable from outside the tunnel. A VPN not only encrypts the traffic within, it hides and protects\nindividual data streams from those outside the tunnel."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Error loading vpn-secure.png",src:n(2816).Z,width:"1750",height:"976"})),(0,o.kt)("p",null,"OpenVPN is often called an SSL-based VPN, as it uses the SSL/TLS protocol to secure the connection. However, OpenVPN\nalso uses HMAC in combination with a digest (or hashing) algorithm for ensuring the integrity of the packets delivered.\nIt can be configured to use pre-shared keys as well as X.509 certificates. These features are not typically offered by\nother SSL-based VPNs."),(0,o.kt)("p",null,"Furthermore, OpenVPN uses a ",(0,o.kt)("strong",{parentName:"p"},"virtual network adapter (a tun or tap device)")," as an interface between the user-level\nOpenVPN software and the operating system. In general, any operating system that has support for a tun/tap device can\nrun OpenVPN. This currently includes Linux, Free/Open/NetBSD, Solaris, AIX, Windows, and Mac OS, as well as iOS/Android\ndevices. For all these platforms, client software needs to be installed, which sets OpenVPN apart from client-less\nor web-based VPNs."),(0,o.kt)("p",null,"OpenVPN has the notion of a control channel and a data channel, both of which are encrypted and secured differently.\nHowever, all traffic passes over a single UDP or TCP connection. The control channel is encrypted and secured using\nSSL/TLS, the data channel is encrypted using a custom encryption protocol."),(0,o.kt)("h4",{id:"openvpn-packages"},"OpenVPN Packages"),(0,o.kt)("p",null,"There are several OpenVPN packages available on the Internet:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The open source or community version of OpenVPN"),(0,o.kt)("li",{parentName:"ul"},"OpenVPN Access Server, the closed-source commercial offering by OpenVPN Inc."),(0,o.kt)("li",{parentName:"ul"},"The mobile platform versions of OpenVPN for both Android and iOS (part of the code is closed-source, as a requirement\nof Apple)")),(0,o.kt)("h5",{id:"openvpn-internals"},"OpenVPN Internals"),(0,o.kt)("h6",{id:"the-tuntap-driver"},"The Tun/Tap Driver"),(0,o.kt)("p",null,"One of the basic building blocks of OpenVPN is the tun/tap driver. The concept of the tun/tap driver comes from the\nUnix/Linux world, where it is often natively available as part of the operating system. This is a virtual network\nadapter that is treated by the operating system as either a point-to-point adapter (tun-style) for IP-only traffic or as\na full virtual Ethernet adapter for all types of traffic (tap-style). At the backend of this adapter is an application,\nsuch as OpenVPN, to process the incoming and outgoing traffic. Linux, Free/Open/NetBSD, Solaris and Mac OS include a tun\nkernel driver, which is capable of both tun-style and tap-style operations."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Error loading vpn-tun-tap.png",src:n(9054).Z,width:"1276",height:"1276"})),(0,o.kt)("p",null,"The flow of traffic from a user application via OpenVPN is depicted in the preceding diagram. In the diagram, the\napplication is sending traffic to an address that is reachable via the OpenVPN tunnel. The steps are as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The application hands over the packet to the operating system."),(0,o.kt)("li",{parentName:"ol"},"The OS decides using normal routing rules that the packet needs to be routed via the VPN."),(0,o.kt)("li",{parentName:"ol"},"The packet is then forwarded to the kernel tun device."),(0,o.kt)("li",{parentName:"ol"},"The kernel tun device forwards the packets to the (user-space) OpenVPN process."),(0,o.kt)("li",{parentName:"ol"},"The OpenVPN process encrypts and signs the packet, fragments it if necessary, and then hands it over to the kernel\nagain to send it to the address of the remote VPN endpoint."),(0,o.kt)("li",{parentName:"ol"},"The kernel picks up the encrypted packet and forwards it to the remote VPN endpoint, where the same process is\nreversed. It can also be seen in this diagram that the performance of OpenVPN will always be less than that of a\nregular network connection. For most applications, the performance loss is minimal and/or acceptable. However, for\nspeeds greater than 1GBps, there is a performance bottleneck, both in terms of bandwidth and latency.")),(0,o.kt)("h3",{id:"additional-openvpn-resources"},"Additional OpenVPN Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.vpnbook.com/"},"Free Profile")," - OpenVPN tab (need VPN access first)")),(0,o.kt)("h4",{id:"config-file"},"Config File"),(0,o.kt)("p",null,'When people talk about "openvpn client config", they are referring to the ',(0,o.kt)("inlineCode",{parentName:"p"},".ovpn"),' files that you drop to the\n"Import Profiles" section of OpenVPN. Add those lines to ',(0,o.kt)("inlineCode",{parentName:"p"},".ovpn"),' file after, for example, "remote pl226.vpnbook.com 80"\nline'),(0,o.kt)("h4",{id:"contingency-plan"},"Contingency Plan"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/getlantern/download"},"Lantern")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/free-vpn-for-chrome-vpn-p/majdfhpaihoncoakbjgbdhglocklcgno?hl=en"},"Free VPN for Chrome - VPN Proxy VeePN"))))}d.isMDXComponent=!0},3035:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vpn-insecure-network-efc7db508462414eab23efa81a7bbb45.png"},2816:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vpn-secure-6c372d1f1ca4eda8008e6cd198cbd7ec.png"},9054:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vpn-tun-tap-96a9e125cf6071d4e1a0b133d9b07430.png"},2702:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vpn-tunneling-and-overhead-f15f0964975a987ee096380a44f541f4.png"},9773:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vpn-wrapping-ff022358ba270046758e5ae9238eb9d9.png"}}]);