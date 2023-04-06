(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{497:function(e,t,r){e.exports=r.p+"assets/img/module-install.f1082be9.jpg"},498:function(e,t,r){e.exports=r.p+"assets/img/api-key-setup.0ba02f77.jpg"},499:function(e,t,r){e.exports=r.p+"assets/img/invalid-token-popup.e876ae99.jpg"},500:function(e,t,r){e.exports=r.p+"assets/img/success.a9d2a1d5.jpg"},754:function(e,t,r){"use strict";r.r(t);var o=r(9),s=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"prestashop-integration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prestashop-integration"}},[e._v("#")]),e._v(" Prestashop integration")]),e._v(" "),t("p",[e._v("This document explains how to "),t("strong",[e._v("integrate BTCPay Server into your PrestaShop store")]),e._v(".\nIf you do not have a store yet, follow "),t("a",{attrs:{href:"https://blog.templatetoaster.com/how-to-install-prestashop/",target:"_blank",rel:"noopener noreferrer"}},[e._v("this step by step article"),t("OutboundLink")],1),e._v(" to create one from scratch.")]),e._v(" "),t("p",[e._v("To integrate BTCPay Server into an existing PrestaShop store, follow the steps below.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("This document only applies to the latest "),t("em",[e._v("v5")]),e._v(" version of the module. If you want the "),t("em",[e._v("v4")]),e._v(" module documentation, "),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-doc/blob/cba96292ceea9483711ab53c479a98357383f857/docs/PrestaShop.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("click here"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("h2",{attrs:{id:"server-requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#server-requirements"}},[e._v("#")]),e._v(" Server Requirements")]),e._v(" "),t("p",[e._v("Please ensure that you meet the following requirements before installing this plugin.")]),e._v(" "),t("ul",[t("li",[e._v("You are using PHP 7.3.0 or higher")]),e._v(" "),t("li",[e._v("Your PrestaShop is version 1.7.7.0 or higher.\n"),t("ul",[t("li",[e._v("Your store must have HTTPS enabled and be publicly accessible.")])])]),e._v(" "),t("li",[e._v("Your BTCPay Server is version 1.3.0 or higher")]),e._v(" "),t("li",[e._v("The PDO, curl, gd, intl, json, and mbstring PHP extensions are available")]),e._v(" "),t("li",[e._v("You have a BTCPay Server, either "),t("RouterLink",{attrs:{to:"/Deployment/"}},[e._v("self-hosted")]),e._v(" or "),t("RouterLink",{attrs:{to:"/Deployment/ThirdPartyHosting/"}},[e._v("hosted by a third-party")]),e._v(" "),t("ul",[t("li",[e._v("The BTCPay Server instance must have HTTPS enabled and be publicly accessible.")])])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/RegisterAccount/"}},[e._v("You've a registered account on the instance")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/CreateStore/"}},[e._v("You've a BTCPay store on the instance")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/WalletSetup/"}},[e._v("You've a wallet connected to your store")])],1)]),e._v(" "),t("h2",{attrs:{id:"install-btcpay-plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-btcpay-plugin"}},[e._v("#")]),e._v(" Install BTCPay Plugin")]),e._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://github.com/btcpayserver/prestashop-plugin/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download the latest BTCPay Server plugin"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("PrestaShop > Modules > Module Manager > Upload a module")]),e._v(" "),t("li",[e._v("Upload the "),t("code",[e._v(".zip")]),e._v("-file you just downloaded")]),e._v(" "),t("li",[e._v("Click on "),t("code",[e._v("configure")]),e._v(" to setup the module")])]),e._v(" "),t("figure",[t("img",{attrs:{src:r(497),alt:"BTCPay Server PrestaShop plugin installation"}})]),e._v(" "),t("h2",{attrs:{id:"connecting-the-store"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#connecting-the-store"}},[e._v("#")]),e._v(" Connecting the store")]),e._v(" "),t("p",[e._v("The Prestashop BTCPay Server module is a "),t("strong",[e._v("bridge between your server (the payment processor) and your e-commerce store")]),e._v(".\nNo matter if you're using a self-hosted or third-party solution from step 2, the setup process is identical.")]),e._v(" "),t("ol",[t("li",[e._v("In the "),t("code",[e._v("BTCPay Server URL")]),e._v("-field, enter the full URL of your host (including the https) – for example https://testnet.demo.btcpayserver.org")]),e._v(" "),t("li",[e._v("Select the default transaction speed (this will change how much BTCPay recommends as transaction fee).")]),e._v(" "),t("li",[t("em",[e._v("Optional: Select the relevant order mode for your store (order is created before or after payment).")]),e._v(" "),t("ul",[t("li",[e._v("Only relevant if you use a version "),t("strong",[e._v("before")]),e._v(" v5.1.0 as this logic has been removed.")])])]),e._v(" "),t("li",[e._v("Select if you want to send customer metadata to your BTCPay server instance for bookkeeping.")]),e._v(" "),t("li",[e._v("Press "),t("code",[e._v("Connect")]),e._v(" to save your settings and be redirected to your BTCPay Server instance to create an API key.")]),e._v(" "),t("li",[e._v("When creating the API key, make sure to give the permissions to a specific store (multiple stores are not supported).")])]),e._v(" "),t("figure",[t("img",{attrs:{src:r(498),alt:"BTCPay Server PrestaShop API key setup"}})]),e._v(" "),t("ol",{attrs:{start:"7"}},[t("li",[e._v("Press the "),t("code",[e._v("Authorize app")]),e._v('-button after which you will be redirected back to your Prestashop store. If you get an "Invalid Token"-popup, please make sure that PrestaShop and BTCPay Server both use HTTPS and have proper hostnames (see '),t("a",{attrs:{href:"#server-requirements"}},[e._v("Server Requirements")]),e._v(").")])]),e._v(" "),t("p",[t("img",{attrs:{src:r(499),alt:"Invalid Token"}}),e._v(" 8. Prestashop will try and create a connection to your BTCPay Server instance. 9. A message will be shown if the connection was successful (but it is smart to make a test purchase).")]),e._v(" "),t("figure",[t("img",{attrs:{src:r(500),alt:"BTCPay Server PrestaShop setup finished"}})]),e._v(" "),t("h2",{attrs:{id:"3-contribute"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#3-contribute"}},[e._v("#")]),e._v(" 3. Contribute")]),e._v(" "),t("p",[e._v("BTCPay is built and maintained entirely by volunteer contributors around the internet. We welcome and appreciate new contributions.")]),e._v(" "),t("p",[e._v("Contributors looking to help out, before opening a pull request, please "),t("a",{attrs:{href:"https://github.com/btcpayserver/prestashop-plugin/issues/new/choose",target:"_blank",rel:"noopener noreferrer"}},[e._v("create an issue"),t("OutboundLink")],1),e._v("\nor join "),t("a",{attrs:{href:"https://chat.btcpayserver.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("our community chat"),t("OutboundLink")],1),e._v(" to get early feedback, discuss the best ways to tackle the problem and to ensure there is no work duplication.")]),e._v(" "),t("h2",{attrs:{id:"prestashop-support"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prestashop-support"}},[e._v("#")]),e._v(" PrestaShop Support")]),e._v(" "),t("p",[e._v("PrestaShop support can be found through its official channels.")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.prestashop.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Homepage"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://doc.prestashop.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Documentation"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.prestashop.com/forums",target:"_blank",rel:"noopener noreferrer"}},[e._v("Support Forums"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=s.exports}}]);