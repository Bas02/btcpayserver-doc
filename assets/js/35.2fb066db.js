(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{623:function(t,e,a){t.exports=a.p+"assets/img/paymentrequestnew.e337fb3d.jpg"},624:function(t,e,a){t.exports=a.p+"assets/img/NewPaymentRequest.92a9c243.png"},625:function(t,e,a){t.exports=a.p+"assets/img/PaidPaymentRequest.4247ac2b.png"},626:function(t,e,a){t.exports=a.p+"assets/img/PaymentRequestCustomCSS.e366a0a3.png"},870:function(t,e,a){"use strict";a.r(e);var s=a(35),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"payment-requests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#payment-requests"}},[t._v("#")]),t._v(" Payment Requests")]),t._v(" "),s("p",[t._v("Payment Requests are a feature which allows BTCPay store owners to create long-lived invoices.\nFunds paid to a payment request use the exchange rate at the time of payment.\nThis allows users to make payments at their convenience without having to negotiate or verify exchange rates with the store owner at the time of payment.")]),t._v(" "),s("p",[t._v("Users can pay requests in partial payments.\nThe payment request will remain valid until it is paid in full or if the store owner requires an expiration time.\nAddresses are never reused. A new address is generated each time the user clicks pay to create an invoice for the payment request.")]),t._v(" "),s("p",[t._v("Store owners can also print payment requests (or export invoice data) for record keeping and accounting.\nBTCPay automatically labels invoices as Payment Requests in your store's invoice list.")]),t._v(" "),s("h2",{attrs:{id:"payment-requests-video"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#payment-requests-video"}},[t._v("#")]),t._v(" Payment Requests Video")]),t._v(" "),s("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/j6CvwDPvfzQ/hqdefault.jpg)"},attrs:{href:"https://www.youtube.com/watch?v=j6CvwDPvfzQ","data-id":"j6CvwDPvfzQ"}},[s("iframe",{attrs:{title:"YouTube","data-src":"https://www.youtube-nocookie.com/embed/j6CvwDPvfzQ?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),t._v(" "),s("h2",{attrs:{id:"customize-your-payment-requests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#customize-your-payment-requests"}},[t._v("#")]),t._v(" Customize Your Payment Requests")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Invoice Amount")]),t._v(" - Set Requested Payment Amount")]),t._v(" "),s("li",[s("strong",[t._v("Denomination")]),t._v(" - Show Requested Amount in Fiat or Cryptocurrency")]),t._v(" "),s("li",[s("strong",[t._v("Payment Quantity")]),t._v(" - Allow only single payments or partial payments")]),t._v(" "),s("li",[s("strong",[t._v("Expiration Time")]),t._v(" - Allow payments until a date or without expiry")]),t._v(" "),s("li",[s("strong",[t._v("Description")]),t._v(" - Text Editor, Data Tables, Embed Photos & Videos")]),t._v(" "),s("li",[s("strong",[t._v("Appearance")]),t._v(" - Color and Style with CSS Themes")])]),t._v(" "),s("h2",{attrs:{id:"create-a-payment-request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-a-payment-request"}},[t._v("#")]),t._v(" Create a Payment Request")]),t._v(" "),s("p",[t._v("Click Payment Requests > Create new payment request")]),t._v(" "),s("figure",[s("img",{attrs:{src:a(623),alt:"Create Payment Request"}})]),t._v(" "),s("p",[t._v("Provide the Request Name, Amount, Display Denomination, Associated Store, Expiration Time & Description (Optional)")]),t._v(" "),s("p",[t._v("Select the option "),s("em",[t._v("Allow payee to create invoices in their own denomination")]),t._v(" if you want to allow partial payments to be made.")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Payment requests are store-dependent, which means that each payment request is associated with a store during creation.\nBe sure to have a wallet connected to your store which the payment request belongs to.")])]),t._v(" "),s("p",[t._v("Click Save & View to review your payment request.")]),t._v(" "),s("figure",[s("img",{attrs:{src:a(624),alt:"View New Payment Request"}})]),t._v(" "),s("p",[t._v("BTCPay creates a URL for the payment request. Share this URL to view your payment request.\nNeed multiple of the same request ? You can use the "),s("code",[t._v("Clone")]),t._v(" option in the main menu to duplicate payment requests.")]),t._v(" "),s("h2",{attrs:{id:"paid-request-for-payment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#paid-request-for-payment"}},[t._v("#")]),t._v(" Paid Request for Payment")]),t._v(" "),s("p",[t._v("Both the payee and requester can view the status of the payment request after sending payment.\nThe status will appear as "),s("strong",[t._v("Settled")]),t._v(" if payment has been received in full.\nIf only partial payment was made, the Amount Due will show the balance due.")]),t._v(" "),s("figure",[s("img",{attrs:{src:a(625),alt:"View Paid Payment Request"}})]),t._v(" "),s("h2",{attrs:{id:"customize-payment-requests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#customize-payment-requests"}},[t._v("#")]),t._v(" Customize Payment Requests")]),t._v(" "),s("p",[t._v("The request's description content can be edited using the payment request's text editor.\nIf you want to use additional color themes or custom css styling, both options are available.")]),t._v(" "),s("p",[t._v("Non-technical users can use a "),s("RouterLink",{attrs:{to:"/Development/Theme/#2-bootstrap-themes"}},[t._v("bootstrap theme")]),t._v(".\nFurther customization can be done by providing additional CSS code, like shown below …")],1),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(":root")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("--btcpay-font-family-base")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Source Sans Pro"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" -apple-system"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" BlinkMacSystemFont"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Segoe UI"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Roboto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Helvetica Neue"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Arial"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sans-serif"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("--btcpay-primary")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #7D4698"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("--btcpay-primary-accent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #59316B"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("--btcpay-body-text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #333A41"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("--btcpay-body-bg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #FFF"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("--btcpay-bg-tile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #F8F9FA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#mainNav")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" white"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("linear-gradient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("#59316B"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" #331840"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#mainNav .btn-link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" white"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("figure",[s("img",{attrs:{src:a(626),alt:"Customized Payment Request css"}})])])}),[],!1,null,null,null);e.default=n.exports}}]);