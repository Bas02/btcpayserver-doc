(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{717:function(e,t,r){"use strict";r.r(t);var a=r(9),o=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"drupal-commerce-2x-integration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#drupal-commerce-2x-integration"}},[e._v("#")]),e._v(" Drupal Commerce 2.x integration")]),e._v(" "),t("p",[e._v("The project can be found "),t("a",{attrs:{href:"https://drupal.org/project/commerce_btcpay",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" on drupal.org and therefore can be installed using "),t("code",[e._v("composer")]),e._v(" from the drupal.org packagist (no need to add the repo manually to your "),t("code",[e._v("composer.json")]),e._v("). The sources are available on "),t("a",{attrs:{href:"https://github.com/btcpayserver/commerce_btcpay",target:"_blank",rel:"noopener noreferrer"}},[e._v("github"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),t("ul",[t("li",[e._v("BTCPay Server ("),t("RouterLink",{attrs:{to:"/Deployment/"}},[e._v("self hosted or 3rd party")]),e._v(" or "),t("RouterLink",{attrs:{to:"/TryItOut/"}},[e._v("quick start with a testserver")]),e._v(")")],1),e._v(" "),t("li",[e._v("Drupal Commerce 2.x installed ("),t("a",{attrs:{href:"https://docs.drupalcommerce.org/commerce2/developer-guide/install-update/installation",target:"_blank",rel:"noopener noreferrer"}},[e._v("installation guide"),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("li",[e._v("Drupal: "),t("a",{attrs:{href:"https://www.drupal.org/docs/8/core/modules/file/overview#content-accessing-private-files",target:"_blank",rel:"noopener noreferrer"}},[e._v("configured private file system"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"module-installation-and-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#module-installation-and-configuration"}},[e._v("#")]),e._v(" Module installation and configuration")]),e._v(" "),t("h3",{attrs:{id:"quick-walkthrough-screencast"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#quick-walkthrough-screencast"}},[e._v("#")]),e._v(" Quick walkthrough screencast")]),e._v(" "),t("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/XBZwyC2v48s 'BTCPay Server - Drupal Commerce 2.x quick walkthrough'/hqdefault.jpg)"},attrs:{href:"https://youtube.com/watch?v=XBZwyC2v48s 'BTCPay Server - Drupal Commerce 2.x quick walkthrough'","data-id":"XBZwyC2v48s 'BTCPay Server - Drupal Commerce 2.x quick walkthrough'"}},[t("iframe",{attrs:{title:"YouTube","data-src":"https://www.youtube-nocookie.com/embed/XBZwyC2v48s 'BTCPay Server - Drupal Commerce 2.x quick walkthrough'?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),e._v(" "),t("h3",{attrs:{id:"quick-walkthrough-steps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#quick-walkthrough-steps"}},[e._v("#")]),e._v(" Quick walkthrough steps")]),e._v(" "),t("h4",{attrs:{id:"generate-pairing-code-on-btcpay-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#generate-pairing-code-on-btcpay-server"}},[e._v("#")]),e._v(" Generate pairing code on BTCPay server")]),e._v(" "),t("ol",[t("li",[e._v("BTCPay server: "),t("RouterLink",{attrs:{to:"/CreateStore/#creating-a-store-in-btcpay"}},[e._v("create and configure a store")])],1),e._v(" "),t("li",[e._v('in store settings go to "'),t("strong",[e._v("Access Tokens")]),e._v('"')]),e._v(" "),t("li",[e._v("click on "),t("strong",[e._v("[Create a new token]")])]),e._v(" "),t("li",[t("strong",[e._v("Label:")]),e._v(" enter some label (eg. my store)")]),e._v(" "),t("li",[t("strong",[e._v("Public key:")]),e._v(" this needs to be left "),t("strong",[e._v("empty")])]),e._v(" "),t("li",[t("strong",[e._v("Facade:")]),e._v(' "merchant"')]),e._v(" "),t("li",[e._v("click on "),t("strong",[e._v("[Request pairing]")])]),e._v(" "),t("li",[e._v("on next screen choose your configured store in "),t("strong",[e._v("Pair to")]),e._v(" select dropdown and click on "),t("strong",[e._v("[approve]")])]),e._v(" "),t("li",[e._v('note down the displayed 7-digit code at the top status message, e.g. "d7afaXr"\n(you will need that code below on gateway configuration, see below)')])]),e._v(" "),t("h4",{attrs:{id:"commerce-btcpay-installation-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commerce-btcpay-installation-configuration"}},[e._v("#")]),e._v(" Commerce BTCPay: Installation + configuration")]),e._v(" "),t("ol",[t("li",[e._v("install module: "),t("code",[e._v("composer require drupal/commerce_btcpay")])]),e._v(" "),t("li",[e._v("enable the module: "),t("code",[e._v("drush en commerce_btcpay -y")])]),e._v(" "),t("li",[e._v("make sure you have configured "),t("a",{attrs:{href:"https://www.drupal.org/docs/8/core/modules/file/overview#content-accessing-private-files",target:"_blank",rel:"noopener noreferrer"}},[e._v("private file system"),t("OutboundLink")],1),e._v(" (needed to store encrypted public+private key)")]),e._v(" "),t("li",[e._v("Commerce BTCPay configuration ("),t("strong",[e._v("Commerce -> Configuration -> Payment -> Payment gateways")]),e._v("):")]),e._v(" "),t("li",[e._v('add payment method "BTCPay"\n'),t("ul",[t("li",[t("strong",[e._v("Mode")]),e._v(": Test or Live (you can configure both individually)")]),e._v(" "),t("li",[t("strong",[e._v("Test/Live server host")]),e._v(": enter your URL without https:// prefix e.g. btcpay.yourserver.com (note valid SSL certificate needed)")]),e._v(" "),t("li",[t("strong",[e._v("Test/Live Paring code")]),e._v(': enter the 7-digit pairing code from BTCPay "Access tokens" page')]),e._v(" "),t("li",[t("strong",[e._v("Save")]),e._v("\nYou should see a message that the tokens were successfully created.")])])])])])}),[],!1,null,null,null);t.default=o.exports}}]);