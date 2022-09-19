(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{833:function(t,s,a){"use strict";a.r(s);var e=a(35),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"chatwoot-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chatwoot-support"}},[t._v("#")]),t._v(" Chatwoot support")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.chatwoot.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chatwoot"),a("OutboundLink")],1),t._v(" is a customer support tool for instant messaging channels which can help businesses provide exceptional customer support.")]),t._v(" "),a("h2",{attrs:{id:"how-to-use"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use"}},[t._v("#")]),t._v(" How to use")]),t._v(" "),a("ol",[a("li",[t._v("Connect as root to your server")]),t._v(" "),a("li",[t._v("create chatwoot configuration file where "),a("code",[t._v("{CONFIG DATA HERE}")]),t._v(" is replaced by settings from "),a("a",{attrs:{href:"https://www.chatwoot.com/docs/environment-variables",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1)])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("su")]),t._v(" -\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" btcpayserver-docker\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" Generated/chatwoot-config.env "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("EOL\n{CONFIG DATA HERE}\n{CONFIG DATA HERE}\nEOL")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Add chatwoot as an option to your BTCPay deployment and set the host to use (point DNS to server as well)")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("CHATWOOT_HOST")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"chatwoot.xpayserver.com"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("BTCPAYGEN_ADDITIONAL_FRAGMENTS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$BTCPAYGEN_ADDITIONAL_FRAGMENTS")]),t._v(';opt-add-chatwoot"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" btcpay-setup.sh -i\n\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("Wait for BTPay to be online and then create the database for chatwoot")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -ti chatwoot "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" -c "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"export DISABLE_DATABASE_ENVIRONMENT_CHECK=1 && bundle exec rails db:reset"')]),t._v("\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("Go to chatwoot website at https://chatwoot.xpayserver.com and set up.")])])])}),[],!1,null,null,null);s.default=r.exports}}]);