(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{241:function(e,t,o){e.exports=o.p+"assets/img/btcpay-vm--19-troubleshoot-403-callback.51193927.png"},258:function(e,t,o){e.exports=o.p+"assets/img/oc3--12--webhook-success.b5638028.png"},471:function(e,t,o){e.exports=o.p+"assets/img/oc3--01--upload-zip.a09f931a.png"},472:function(e,t,o){e.exports=o.p+"assets/img/oc3--02--install-btcpay.045a3912.png"},473:function(e,t,o){e.exports=o.p+"assets/img/oc3--03--configure-btcpay.f4329bcc.png"},474:function(e,t,o){e.exports=o.p+"assets/img/oc3--04--configure-btcpay-page.c7b27789.png"},475:function(e,t,o){e.exports=o.p+"assets/img/oc3--05--btcps-account-manage.d8f9b0b5.png"},476:function(e,t,o){e.exports=o.p+"assets/img/oc3--05--btcps-account-manage-add.f1d58bef.png"},477:function(e,t,o){e.exports=o.p+"assets/img/oc3--06--btcps-generate-api-key-permissions.e6be361e.png"},478:function(e,t,o){e.exports=o.p+"assets/img/oc3--07--btcps-generate-api-key-permissions-store.b5cc47ae.png"},479:function(e,t,o){e.exports=o.p+"assets/img/oc3--08--btcps-generate-api-key-result.3da35e17.png"},480:function(e,t,o){e.exports=o.p+"assets/img/oc3--09--btcps-store-id.59a07f51.png"},481:function(e,t,o){e.exports=o.p+"assets/img/oc3--10--save-settings.b1852b45.png"},482:function(e,t,o){e.exports=o.p+"assets/img/oc3--11--save-settings-success.c7a8ed3c.png"},483:function(e,t,o){e.exports=o.p+"assets/img/oc3--20--debug-mode-enable.952c68c8.png"},484:function(e,t,o){e.exports=o.p+"assets/img/oc3--21--error-logs.a324ae3f.png"},749:function(e,t,o){"use strict";o.r(t);var n=o(9),a=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"opencart-integration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#opencart-integration"}},[e._v("#")]),e._v(" OpenCart integration")]),e._v(" "),t("p",[e._v("This document explains how "),t("strong",[e._v("to integrate BTCPay Server into your OpenCart store")]),e._v(". Supported are OpenCart 3 and 4.")]),e._v(" "),t("h2",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),t("p",[e._v("Please ensure that you meet the following requirements before installing this extension.")]),e._v(" "),t("ul",[t("li",[e._v("PHP version >= 7.4 for OpenCart 3; PHP >= 8.1 for OpenCart 4")]),e._v(" "),t("li",[e._v("The curl, gd, intl, json, and mbstring PHP extensions are available")]),e._v(" "),t("li",[e._v("A OpenCart 3/4 store ("),t("a",{attrs:{href:"https://www.opencart.com/index.php?route=cms/download",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download and installation instructions"),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("li",[t("strong",[e._v("IMPORTANT:")]),e._v(" You have a BTCPay Server version 1.3.0 or later, either "),t("RouterLink",{attrs:{to:"/Deployment/"}},[e._v("self-hosted")]),e._v(" or "),t("RouterLink",{attrs:{to:"/Deployment/ThirdPartyHosting/"}},[e._v("hosted by a third-party")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/RegisterAccount/"}},[e._v("You've a registered account on the instance")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/CreateStore/"}},[e._v("You've got a BTCPay store on the instance")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/WalletSetup/"}},[e._v("You've got a wallet connected to your store")])],1)]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("The instructions are based on OpenCart 3, but the UI and steps are almost identical to OpenCart 4. Therefore we have no separate instructions.")])]),e._v(" "),t("h2",{attrs:{id:"1-install-btcpay-extension"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#1-install-btcpay-extension"}},[e._v("#")]),e._v(" 1. Install BTCPay extension")]),e._v(" "),t("p",[e._v("There are three ways to "),t("strong",[e._v("download the BTCPay for OpenCart extension")]),e._v(":")]),e._v(" "),t("ul",[t("li",[e._v("Via the Admin Dashboard (recommended, see below)")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.opencart.com/index.php?route=marketplace/extension/info&extension_id=44269",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenCart Marketplace"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/btcpayserver/opencart",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Repository"),t("OutboundLink")],1)])]),e._v(" "),t("h3",{attrs:{id:"11-install-the-extension-from-opencart-admin-dashboard"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#11-install-the-extension-from-opencart-admin-dashboard"}},[e._v("#")]),e._v(" 1.1 Install the extension from OpenCart admin dashboard")]),e._v(" "),t("p",[e._v("Note: work in progress, extension undergoing review atm.")]),e._v(" "),t("h3",{attrs:{id:"12-download-and-install-the-extension-from-marketplace-or-github"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#12-download-and-install-the-extension-from-marketplace-or-github"}},[e._v("#")]),e._v(" 1.2 Download and install the extension from Marketplace or GitHub")]),e._v(" "),t("ol",[t("li",[e._v("Download the latest BTCPay extension from "),t("a",{attrs:{href:"https://github.com/btcpayserver/opencart/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github"),t("OutboundLink")],1),e._v(" or "),t("a",{attrs:{href:"https://www.opencart.com/index.php?route=marketplace/extension/info&extension_id=44269",target:"_blank",rel:"noopener noreferrer"}},[e._v("Marketplace"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Menu: Extensions -> Install")]),e._v(" "),t("li",[e._v("Click the button [Upload] and upload the downloaded "),t("code",[e._v("btcpay.ocmod.zip")]),e._v('\nAfter uploading, you should see a notice "Success: You have modified extensions! "')])]),e._v(" "),t("figure",[t("img",{attrs:{src:o(471),alt:"BTCPay OpenCart: Extension installation upload"}})]),e._v(" "),t("h3",{attrs:{id:"13-install-the-extension"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#13-install-the-extension"}},[e._v("#")]),e._v(" 1.3 Install the extension")]),e._v(" "),t("ol",[t("li",[e._v("Menu: Extensions -> Extensions")]),e._v(" "),t("li",[e._v('On the "Choose extension type" dropdown, select "Payment".')]),e._v(" "),t("li",[e._v('On the "Action" column, click the green install button.')]),e._v(" "),t("li",[e._v('You will see a notification " Success: You have modified payments!"')])]),e._v(" "),t("figure",[t("img",{attrs:{src:o(472),alt:"BTCPay OpenCart: Install extension"}})]),e._v(" "),t("h2",{attrs:{id:"2-connecting-opencart-and-btcpay-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#2-connecting-opencart-and-btcpay-server"}},[e._v("#")]),e._v(" 2. Connecting OpenCart and BTCPay Server")]),e._v(" "),t("p",[e._v("Please make sure to have a BTCPay Server instance setup as described in the "),t("a",{attrs:{href:"#requirements"}},[e._v("requirements")]),e._v(" above.")]),e._v(" "),t("p",[e._v("BTCPay for OpenCart extension is a "),t("strong",[e._v("bridge between your BTCPay Server (payment processor) and your e-commerce store")]),e._v(".\nNo matter if you're using a self-hosted or third-party solution, the connection process is identical.")]),e._v(" "),t("h3",{attrs:{id:"21-configure-btcpay-server-extension-in-opencart"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#21-configure-btcpay-server-extension-in-opencart"}},[e._v("#")]),e._v(" 2.1 Configure BTCPay Server extension in OpenCart")]),e._v(" "),t("ol",[t("li",[e._v("Menu: Extensions -> Extensions")]),e._v(" "),t("li",[e._v("Click the blue edit button\n"),t("img",{attrs:{src:o(473),alt:"BTCPay OpenCart: Add new payment method"}})]),e._v(" "),t("li",[e._v("Configure BTCPay extension. "),t("img",{attrs:{src:o(474),alt:"BTCPay OpenCart: Payment method details"}})]),e._v(" "),t("li",[e._v('On the field "Payment Method Enabled" set it to '),t("code",[e._v("Enabled")])]),e._v(" "),t("li",[e._v('On field "BTCPay Server URL" set it to the URL where your BTCPay Server instance is reachable on the internet e.g. '),t("code",[e._v("https://mainnet.demo.btcpayserver.org/")]),e._v(". You can find information on how to deploy your BTCPay Server instance in the "),t("a",{attrs:{href:"#requirements"}},[e._v("requirements section above")])])]),e._v(" "),t("p",[e._v("Before you can continue, you need to create the API key for your user and store, as described in the next section. Keep this browser tab open, as we will come back shortly.")]),e._v(" "),t("h3",{attrs:{id:"22-create-an-api-key-and-configure-permissions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#22-create-an-api-key-and-configure-permissions"}},[e._v("#")]),e._v(" 2.2 Create an API key and configure permissions")]),e._v(" "),t("p",[e._v("On your BTCPay Server instance:")]),e._v(" "),t("ol",[t("li",[e._v("Click on "),t("em",[e._v("[Account]")])]),e._v(" "),t("li",[e._v("Click on "),t("em",[e._v("[Manage Account]")]),e._v(" "),t("img",{attrs:{src:o(475),alt:"BTCPay OpenCart: Manage Account"}})]),e._v(" "),t("li",[e._v("Go to the tab "),t("em",[e._v('"API Keys"')])]),e._v(" "),t("li",[e._v("Click "),t("em",[e._v("[Generate Key]")]),e._v(" to select permissions."),t("br"),e._v(" "),t("img",{attrs:{src:o(476),alt:"BTCPay OpenCart: API Keys overview"}})]),e._v(" "),t("li",[e._v('"Label": Add a label.')]),e._v(" "),t("li",[e._v('"Permissions": '),t("strong",[e._v("Important:")]),e._v(" click on the "),t("em",[e._v('"Select specific stores"')]),e._v(" link for the following permissions: "),t("code",[e._v("View invoices")]),e._v(", "),t("code",[e._v("Create invoice")]),e._v(", "),t("code",[e._v("Modify invoices")]),e._v(", "),t("code",[e._v("Modify stores webhooks")]),e._v(", "),t("code",[e._v("View your stores")]),e._v(" and select the store you created for your OpenCart site. This makes sure that the API key only has access to that specific store and can't drain any funds even if the key is lost.\n"),t("img",{attrs:{src:o(477),alt:"BTCPay OpenCart: API Keys Permissions"}}),t("br"),e._v("\nIt should look like this:\n"),t("img",{attrs:{src:o(478),alt:"BTCPay OpenCart: API Keys Permissions"}})]),e._v(" "),t("li",[e._v("Click on "),t("em",[e._v("[Generate API Key]")]),e._v(" at the bottom")]),e._v(" "),t("li",[e._v("Copy the generated API Key to your "),t("em",[e._v("OpenCart BTCPay settings")]),e._v(' form field "BTCPay API Key"\n'),t("img",{attrs:{src:o(479),alt:"BTCPay OpenCart: Copy API Key"}})]),e._v(" "),t("li",[e._v("Back on BTCPay Server instance, go to your store settings and copy the store ID to your "),t("em",[e._v("OpenCart BTCPay Settings")]),e._v(" form"),t("br"),e._v(" "),t("img",{attrs:{src:o(480),alt:"BTCPay OpenCart: Copy Store ID"}})]),e._v(" "),t("li",[e._v("Back on "),t("em",[e._v("OpenCart BTCPay settings")]),e._v(" form make sure "),t("strong",[e._v("BTPCay Server URL")]),e._v(", "),t("strong",[e._v("API Key")]),e._v(" and "),t("strong",[e._v("Store ID")]),e._v(" are set and click "),t("strong",[e._v("[Save]")]),e._v(" button (on the top right)"),t("br"),e._v(" "),t("img",{attrs:{src:o(481),alt:"BTCPay OpenCart: Save OpenCart Settings form"}})])]),e._v(" "),t("p",[e._v('You should get back to the Extensions overview page and see the notification "BTCPay Server Payment details have been successfully updated.". If not, ensure your URL, API Key and Store ID are correct.\n'),t("img",{attrs:{src:o(482),alt:"BTCPay OpenCart: Save OpenCart Settings form"}})]),e._v(" "),t("p",[e._v('On successfully saving, the BTCPay extension automatically creates a webhook so OpenCart can get notified when payments settle or fail. To double check it was successful. You can do that by editing the BTCPay extension settings again if you see the "Webhook Data" field filled out like this:\n'),t("img",{attrs:{src:o(258),alt:"BTCPay OpenCart: Save OpenCart Settings form"}})]),e._v(" "),t("p",[e._v("As you can see on the BTCPay extension settings, you can customize the order statuses depending on the "),t("RouterLink",{attrs:{to:"/Invoices/#invoice-statuses"}},[e._v("invoice statuses")]),e._v(" and other common settings. The defaults should be a good starting point but feel free to adjust them to your use case.")],1),e._v(" "),t("h2",{attrs:{id:"3-test-the-checkout"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#3-test-the-checkout"}},[e._v("#")]),e._v(" 3. Test the checkout")]),e._v(" "),t("p",[e._v("Everything is ready to go now. Make a small test purchase and make sure the order status gets updated according to the BTCPay invoice status. On the BTCPay Server invoice details, you can see if the webhook events were successful.")]),e._v(" "),t("h2",{attrs:{id:"troubleshooting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),t("h3",{attrs:{id:"enable-debug-mode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enable-debug-mode"}},[e._v("#")]),e._v(" Enable debug mode")]),e._v(" "),t("p",[e._v('If you have an error during checkout, you can enable the debugging mode on the BTCPay extension settings. Menu: Go to "Extensions -> extensions" select "Payments" on the "Choose Extension Type" dropdown and edit BTCPay Server extension.')]),e._v(" "),t("figure",[t("img",{attrs:{src:o(483),alt:"BTCPay OpenCart: Enable debug mode"}})]),e._v(" "),t("p",[e._v("You can now find the debug output in the "),t("code",[e._v("error log")]),e._v(' in the menu "System -> Maintenence -> Error Logs".')]),e._v(" "),t("figure",[t("img",{attrs:{src:o(484),alt:"BTCPay OpenCart: Enable debug mode"}})]),e._v(" "),t("p",[e._v("*Please make sure to disable it after debugging is finished; otherwise, it will fill up your error logs.**")]),e._v(" "),t("p",[t("strong",[e._v("Example Error")]),e._v(":")]),e._v(" "),t("blockquote",[t("p",[e._v('2022-05-24 21:10:50 ERROR Error during POST to https://btcpay.example.com/api/v1/stores/4kD5bvAF5j8DokHqAzxb6MFDV4ikabcdefghijklm/invoices. Got response (401): {"code":"unauthenticated","message":"Authentication is required for accessing this endpoint"}')])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("This means there is some authentication error. Likely your API key does not have permission to create invoices for that store. Make sure you give the API key the correct permissions, give it to the right store, and enter that in the OpenCart payment configuration form.")])]),e._v(" "),t("li",[t("p",[e._v('Another reason could be that you use a legacy API key. The legacy API keys are located in store settings -> Access Tokens. But you need to create an account API key located in Account -> Manage Account -> tab "API Keys". See section '),t("a",{attrs:{href:"#22-create-an-api-key-and-configure-permissions"}},[e._v("2.2 Create an API key and configure permissions")]),e._v(".")])])]),e._v(" "),t("h2",{attrs:{id:"the-order-states-do-not-update-although-the-invoice-has-been-paid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-order-states-do-not-update-although-the-invoice-has-been-paid"}},[e._v("#")]),e._v(" The order states do not update, although the invoice has been paid.")]),e._v(" "),t("p",[e._v('Please check your invoice details to see if there were any errors on sending the webhook request. Some hosting providers, firewall setups, or security extensions may block POST requests to your site, which leads to an HTTP status of "403 forbidden".')]),e._v(" "),t("p",[e._v("You can check and verify yourself if there is something blocking requests to your site in one of these two ways:")]),e._v(" "),t("p",[t("strong",[e._v("1. Copy webhook callback URL")]),t("br"),e._v("\nGo to your "),t("em",[e._v("OpenCart BTCPay extension settings")]),e._v(' and copy the "URL" of the "Webhook Data" field. e.g., '),t("code",[e._v("https://YOURSTOREDOMAIN.TLD/index.php?route=extension/payment/btcpay/callback")])]),e._v(" "),t("figure",[t("img",{attrs:{src:o(258),alt:"BTCPay OpenCart: Save OpenCart Settings form"}})]),e._v(" "),t("p",[t("strong",[e._v("2.1 Check using a command line (Linux or MacOS):")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('curl -vX POST -H "Content-Type: application/json" \\\n    -d \'{"data": "test"}\' WEBHOOK_CALLBACK_URL\n')])])]),t("p",[e._v("(replace "),t("code",[e._v("WEBHOOK_CALLBACK_URL")]),e._v(" with the one copied above)")]),e._v(" "),t("p",[e._v("Result:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(".... snip ....\n* upload completely sent off: 16 out of 16 bytes\n< HTTP/1.1 403 Forbidden\n< access-control-allow-origin: *\n< Content-Type: application/json; charset=UTF-8\n< X-Cloud-Trace-Context: 4f07d5b2e5c2f05949d04421a8e2dd6a\n< Date: Thu, 17 Feb 2022 10:06:50 GMT\n< Server: Google Frontend\n< Content-Length: 26\n")])])]),t("p",[e._v('If you see that line "HTTP/1.1 403 Forbidden" or "HTTP/2 403" something is blocking data sent to your OpenCart site. It would be best to ask your hosting provider or make sure no firewall or security extension is blocking the requests.')]),e._v(" "),t("p",[t("strong",[e._v("2.2 Check using an online service (if you do not have a command line available:")])]),e._v(" "),t("ul",[t("li",[e._v("Go to "),t("a",{attrs:{href:"https://reqbin.com/post-online",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://reqbin.com/post-online"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("ol",[t("li",[e._v("Enter your callback url (copied from step 1 above): "),t("code",[e._v("https://YOURSTOREDOMAIN.TLD/index.php?route=extension/payment/btcpay/callback")]),e._v("\n(replace this URL with the webhook callback url from step 1)")])])]),e._v(" "),t("li",[e._v('Make sure "POST" is selected')]),e._v(" "),t("li",[t("ol",{attrs:{start:"2"}},[t("li",[e._v("Click [Send]")])])])]),e._v(" "),t("figure",[t("img",{attrs:{src:o(241),alt:"BTCPay OpenCart: Webhook payload URL forbidden"}})]),e._v(" "),t("p",[e._v('If you see "'),t("strong",[e._v("Status 403 (Forbidden)")]),e._v('" then POST requests to your site are blocked for some reason. You should ask your hosting provider or ensure no firewall or security extension is blocking the requests. If you see any other status code (200, 500, ...) a firewall problem seems not to apply. You probably need to investigate further.')]),e._v(" "),t("h2",{attrs:{id:"i-have-trouble-with-using-the-extension-or-some-other-related-questions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#i-have-trouble-with-using-the-extension-or-some-other-related-questions"}},[e._v("#")]),e._v(" I have trouble with using the extension or some other related questions.")]),e._v(" "),t("p",[e._v("Feel free to join our support channel over at "),t("a",{attrs:{href:"https://chat.btcpayserver.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://chat.btcpayserver.org/"),t("OutboundLink")],1),e._v(" or "),t("a",{attrs:{href:"https://t.me/btcpayserver",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://t.me/btcpayserver"),t("OutboundLink")],1),e._v(" if you need help or have any further questions.")])])}),[],!1,null,null,null);t.default=a.exports}}]);