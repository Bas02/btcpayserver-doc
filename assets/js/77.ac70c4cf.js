(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{654:function(e,t,i){"use strict";i.r(t);var s=i(9),a=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"greenfield-api-authorization-flow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#greenfield-api-authorization-flow"}},[e._v("#")]),e._v(" GreenField API Authorization Flow")]),e._v(" "),t("p",[e._v("The GreenField API allows two modes of authentication to its endpoints: Basic auth and API Keys.")]),e._v(" "),t("h2",{attrs:{id:"basic-auth"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#basic-auth"}},[e._v("#")]),e._v(" Basic auth")]),e._v(" "),t("p",[e._v("Basic auth allows you to seamlessly integrate with BTCPay Server's user system using only a traditional user/password login form. This is however a security risk if the application is a third party as they will receive your credentials in plain text and will be able to access your full account.")]),e._v(" "),t("h2",{attrs:{id:"api-keys"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api-keys"}},[e._v("#")]),e._v(" API Keys")]),e._v(" "),t("p",[e._v("BTCPay Server's GreenField API also allows users to generate API keys with "),t("a",{attrs:{href:"https://docs.btcpayserver.org/API/Greenfield/v1/#section/Authentication/API%20Key",target:"_blank",rel:"noopener noreferrer"}},[e._v("specific permissions"),t("OutboundLink")],1),e._v(". "),t("strong",[e._v("If you are integrating BTCPay Server into your third-party application, this is the recommended way.")])]),e._v(" "),t("p",[e._v("Asking a user to generate a dedicated API key, with a specific set of permissions can be a bad UX experience. For this scenario, we have the "),t("a",{attrs:{href:"https://docs.btcpayserver.org/API/Greenfield/v1/#tag/Authorization",target:"_blank",rel:"noopener noreferrer"}},[e._v("Authorize User UI"),t("OutboundLink")],1),e._v(". This allows external applications to request the user to generate an API key with a specific set of permissions by simply generating a URL to BTCPay Server and redirecting the user to it.\nAdditionally, there are 2 optional parameters to the endpoint which allow a more seamless integration:")]),e._v(" "),t("ul",[t("li",[e._v("if "),t("code",[e._v("redirect")]),e._v(" is specified, once the API key is created, BTCPay Server redirects the user via a POST submission to the specified "),t("code",[e._v("redirect")]),e._v(" URL, with a json body containing the API key, user id, and permissions granted.")]),e._v(" "),t("li",[e._v("if "),t("code",[e._v("applicationIdentifier")]),e._v(" is specified (along with "),t("code",[e._v("redirect")]),e._v("), BTCPay Server will check if there is an existing API key associated with the user that also has this application identifier, redirect host AND the permissions required match. "),t("code",[e._v("applicationIdentifier")]),e._v(" is ignored if "),t("code",[e._v("redirect")]),e._v(" is not specified.")])]),e._v(" "),t("p",[e._v("Some examples of a generated Authorize URL:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("https://mainnet.demo.btcpayserver.org/api-keys/authorize")]),e._v(" - A simplistic request, where no permission is requested. Useful to prove that a user exists on a specific BTCPay Server instance.")]),e._v(" "),t("li",[t("code",[e._v("https://mainnet.demo.btcpayserver.org/api-keys/authorize?applicationName=Your%20Application")]),e._v(" - Indicates that the API key is being generated for "),t("code",[e._v("Your Application")])]),e._v(" "),t("li",[t("code",[e._v("https://mainnet.demo.btcpayserver.org/api-keys/authorize?applicationName=Your%20Application&redirect=http://gozo.com")]),e._v(" - Redirects the user via a POST to "),t("code",[e._v("http://gozo.com")]),e._v(" with a JSON body containing the API key and its info.")]),e._v(" "),t("li",[t("code",[e._v("https://mainnet.demo.btcpayserver.org/api-keys/authorize?applicationName=Your%20Application&redirect=http://gozo.com&applicationIdentifier=gozo")]),e._v(" - Attempts to match a previously created API key based on the app identifier, domain and permissions and is prompted.")]),e._v(" "),t("li",[t("code",[e._v("https://mainnet.demo.btcpayserver.org/api-keys/authorize?permissions=btcpay.store.cancreateinvoice&permissions=btcpay.store.canviewinvoices")]),e._v(" - A request asking for permissions to create and view invoices on all stores available to the user")]),e._v(" "),t("li",[t("code",[e._v("https://mainnet.demo.btcpayserver.org/api-keys/authorize?permissions=btcpay.store.cancreateinvoice&permissions=btcpay.store.canviewinvoices&selectiveStores=true")]),e._v(" - A request asking for permissions to create and view invoices on stores but also allows the user to choose which stores the application will have the permission to.")]),e._v(" "),t("li",[t("code",[e._v("https://mainnet.demo.btcpayserver.org/api-keys/authorize?permissions=btcpay.store.cancreateinvoice&permissions=btcpay.store.canviewinvoices&strict=false")]),e._v(" - A request asking for permissions but allows the user to remove or add to the requested permission list.")])])])}),[],!1,null,null,null);t.default=a.exports}}]);