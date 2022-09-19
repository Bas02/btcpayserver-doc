(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{840:function(e,t,a){"use strict";a.r(t);var s=a(35),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"pi-hole-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pi-hole-support"}},[e._v("#")]),e._v(" Pi-Hole support")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://pi-hole.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pi-Hole"),a("OutboundLink")],1),e._v(" is a black hole for internet advertisement.\nIt works as a DNS server which blacklist domains tied to advertisement. If you use it as your main DNS server and it detects your query is trying to resolve a domain belonging to an advertisement company, it will resolve the domain to IP "),a("code",[e._v("0.0.0.0")]),e._v(", preventing the advertisement to load on any computer using this DNS server.")]),e._v(" "),a("p",[e._v("Note that our pi-hole integration is meant to be used in a "),a("strong",[e._v("local network")]),e._v(". Please do not try to use this option on a VPS.")]),e._v(" "),a("h2",{attrs:{id:"how-to-use"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use"}},[e._v("#")]),e._v(" How to use")]),e._v(" "),a("p",[e._v("Let's imagine the local IP of your BTCPay Server is "),a("code",[e._v("192.168.1.2")]),e._v(".")]),e._v(" "),a("ol",[a("li",[e._v("Connect as root to your server")]),e._v(" "),a("li",[e._v("Add pihole as an option to your docker deployment")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BTCPAYGEN_ADDITIONAL_FRAGMENTS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$BTCPAYGEN_ADDITIONAL_FRAGMENTS")]),e._v(';opt-add-pihole"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v(" btcpay-setup.sh -i\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("If your server has a firewall, make sure it allow incoming traffic to port "),a("code",[e._v("53 (UDP)")]),e._v(".")]),e._v(" "),a("li",[e._v("Configure your home router DHCP server to use "),a("code",[e._v("192.168.1.2")]),e._v(" as primary DNS server.")])]),e._v(" "),a("p",[e._v("From now everytime a device will connect to your local network, they will automatically use pi-hole as a DNS server. Advertisements will go to a black hole for all devices.")]),e._v(" "),a("h2",{attrs:{id:"using-the-dashboard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-dashboard"}},[e._v("#")]),e._v(" Using the dashboard")]),e._v(" "),a("p",[e._v("Pi-Hole comes with a very nice admin dashboard to monitor its activity.\nIt is disabled by default. To enable it, you need to configure "),a("code",[e._v("PIHOLE_SERVERIP")]),e._v(" to the IP of your server:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("PIHOLE_SERVERIP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"192.168.1.2"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v(" btcpay-setup.sh -i\n")])])]),a("p",[e._v("If your device is using pi-hole as a DNS server, you should now be able to browse "),a("code",[e._v("http://pi.hole/admin")]),e._v(" to connect to your dashboard.")]),e._v(" "),a("p",[e._v("You can find the admin password in the logs of pihole:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" logs pihole "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" random\n")])])]),a("p",[e._v("If the password does not work, you can try to reset the password:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("pihole.sh -a -p\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" restart pihole\n")])])]),a("p",[e._v("Then running again")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" logs pihole "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" random\n")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);