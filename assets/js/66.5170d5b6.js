(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{464:function(e,t,a){e.exports=a.p+"assets/img/LedgerHelpXpub.06b99d21.png"},740:function(e,t,a){"use strict";a.r(t);var o=a(9),r=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"connecting-ledger-wallet-to-btcpay-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#connecting-ledger-wallet-to-btcpay-server"}},[e._v("#")]),e._v(" Connecting Ledger Wallet to BTCPay Server")]),e._v(" "),t("p",[e._v("This document shows "),t("strong",[e._v("how to connect Ledger Nano S Wallet to BTCPay Server")]),e._v(".")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("Direct Ledger Nano S integration is "),t("strong",[e._v("no longer supported")]),e._v(". For Bitcoin wallets, you can use your Ledger hardware wallet regularly via the "),t("RouterLink",{attrs:{to:"/HardwareWalletIntegration/"}},[e._v("new hardware wallet integration")]),e._v(".")],1),e._v(" "),t("p",[e._v("For "),t("RouterLink",{attrs:{to:"/Development/Altcoins/"}},[e._v("altcoin")]),e._v(" wallets, you can spend funds from your external wallet, sign a transaction within the "),t("RouterLink",{attrs:{to:"/Wallet/"}},[e._v("internal wallet")]),e._v(" with "),t("RouterLink",{attrs:{to:"/Wallet/#signing-with-hd-private-key-or-mnemonic-seed"}},[e._v("HD Private Key or mnemonic seed")]),e._v(" or a "),t("RouterLink",{attrs:{to:"/Wallet/#signing-with-a-hot-wallet"}},[e._v("hot wallet")]),e._v(".")],1),e._v(" "),t("p",[e._v("To set up a new altcoin wallet, add the extended public key manually or "),t("RouterLink",{attrs:{to:"/CreateWallet/"}},[e._v("create a new wallet")]),e._v(".")],1)]),e._v(" "),t("h2",{attrs:{id:"ledger-nano-s-wallet-setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ledger-nano-s-wallet-setup"}},[e._v("#")]),e._v(" Ledger Nano S Wallet Setup")]),e._v(" "),t("p",[e._v("This guide assumes, you have a Nano S wallet set up. To configure the Nano S, please see the "),t("a",{attrs:{href:"https://www.ledger.com/start/",target:"_blank",rel:"noopener noreferrer"}},[e._v("quick setup guide on manufacturer's website"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),t("ol",[t("li",[e._v("Bitcoin App installed on the Ledger")]),e._v(" "),t("li",[e._v("Google Chrome or Firefox")]),e._v(" "),t("li",[e._v("For Firefox, U2F needs to be enabled in about:config")]),e._v(" "),t("li",[e._v("No other U2F devices plugged in into your PC (Yubikey, other wallets, etc)")])]),e._v(" "),t("h3",{attrs:{id:"quick-setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#quick-setup"}},[e._v("#")]),e._v(" Quick Setup")]),e._v(" "),t("ol",[t("li",[e._v("Plug in Ledger Nano S into your PC.")]),e._v(" "),t("li",[e._v("Open the Bitcoin app on your Ledger.")]),e._v(" "),t("li",[e._v("In BTCPay Server, Store > Settings > Wallet > Setup > Derivation Scheme > Import from Hardware Device > Ledger wallet")]),e._v(" "),t("li",[e._v("Select the account which you want to use, in most cases it's the "),t("code",[e._v("Account 0")])]),e._v(" "),t("li",[e._v("Confirm the "),t("code",[e._v("Export public key")]),e._v(" on the wallet.")]),e._v(" "),t("li",[e._v("The extended public key will now automatically be added from Ledger to your BTCPay Server Store.")]),e._v(" "),t("li",[e._v("Make sure that the derivation scheme is "),t("code",[e._v("Enabled")])]),e._v(" "),t("li",[e._v("Click "),t("code",[e._v("Continue")])]),e._v(" "),t("li",[t("code",[e._v("Confirm")]),e._v(" the address match in BTCPay.")])]),e._v(" "),t("p",[e._v("Your Ledger wallet is now connected to your BTCPay. Payments go directly to Ledger.")]),e._v(" "),t("h4",{attrs:{id:"manual-setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#manual-setup"}},[e._v("#")]),e._v(" Manual Setup")]),e._v(" "),t("p",[e._v("If you have more than 20 accounts in your Ledger you might not be able to find the correct account because the select shows a maximum of 20 entries.\nIn this case you can manually find the extended public key for your wanted account in these steps:")]),e._v(" "),t("ol",[t("li",[e._v("Open the "),t("a",{attrs:{href:"https://shop.ledger.com/pages/ledger-live",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ledger live app"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Accounts -> choose your account")]),e._v(" "),t("li",[e._v("Edit Account on the top right via the tool-icon")]),e._v(" "),t("li",[e._v("In Edit Account -> ADVANCED LOGS")]),e._v(" "),t("li",[e._v("Copy the extended public key string")]),e._v(" "),t("li",[e._v('Paste it manually into the "DerivationScheme" textfield')]),e._v(" "),t("li",[e._v("Continue with "),t("a",{attrs:{href:"#quick-setup"}},[e._v("Step 7 of the Quick Setup above")])])]),e._v(" "),t("figure",[t("img",{attrs:{src:a(464),alt:'Ledger Account "Advanced Logs" info screenshot',title:"Ledger Account Advanced Logs"}})]),e._v(" "),t("h3",{attrs:{id:"spending-from-btcpay-server-wallet-with-ledger"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spending-from-btcpay-server-wallet-with-ledger"}},[e._v("#")]),e._v(" Spending from BTCPay Server wallet with Ledger")]),e._v(" "),t("p",[e._v("Once there are some funds in received to your BTCPay Wallet connected to Ledger, you can spend them by signing a transaction with your hardware wallet. This allows easy interaction of the Ledger wallet with your full node, without leaking information to third-party servers.")]),e._v(" "),t("ol",[t("li",[e._v("Plug in Ledger Nano S into your PC.")]),e._v(" "),t("li",[e._v("Open the Bitcoin app on your Ledger.")]),e._v(" "),t("li",[e._v("In BTCPay, go to Wallets > Manage > Send")]),e._v(" "),t("li",[e._v("Fill in destination address and the amount")]),e._v(" "),t("li",[e._v("Click on the Sign with "),t("code",[e._v("your Ledger Wallet device")]),e._v(".")]),e._v(" "),t("li",[e._v("BTCPay will establish a connection with the Ledger wallet and display transaction information on the wallet screen.")]),e._v(" "),t("li",[e._v("Confirm the transaction on the Ledger.")]),e._v(" "),t("li",[e._v("In Ledger, click on the "),t("code",[e._v("Ready To Sign")])]),e._v(" "),t("li",[e._v("Review your transactions and click "),t("code",[e._v("Broadcast")]),e._v(" to broadcast it on the network.")])]),e._v(" "),t("p",[e._v("The video below shows how to connect your BTCPay store to your Ledger and how to use Ledger with the "),t("RouterLink",{attrs:{to:"/Wallet/"}},[e._v("internal BTCPay wallet")]),e._v(".")],1),e._v(" "),t("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/1Sj5mP4TkFI 'Ledger Nano S with BTCPay Server'/hqdefault.jpg)"},attrs:{href:"https://www.youtube.com/watch?v=1Sj5mP4TkFI 'Ledger Nano S with BTCPay Server'","data-id":"1Sj5mP4TkFI 'Ledger Nano S with BTCPay Server'"}},[t("iframe",{attrs:{title:"YouTube","data-src":"https://www.youtube-nocookie.com/embed/1Sj5mP4TkFI 'Ledger Nano S with BTCPay Server'?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})])])}),[],!1,null,null,null);t.default=r.exports}}]);