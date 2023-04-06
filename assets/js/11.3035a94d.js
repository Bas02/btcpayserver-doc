(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{399:function(e,t,r){e.exports=r.p+"assets/img/ElectrumWallet1.584fbbe1.png"},400:function(e,t,r){e.exports=r.p+"assets/img/ElectrumWallet2.b93dd22b.png"},401:function(e,t,r){e.exports=r.p+"assets/img/ElectrumWallet3.9838bf5a.png"},402:function(e,t,r){e.exports=r.p+"assets/img/ElectrumWallet4.dec51a41.png"},403:function(e,t,r){e.exports=r.p+"assets/img/ElectrumWallet9.474b2e7a.png"},404:function(e,t,r){e.exports=r.p+"assets/img/ElectrumWallet10.6fd1db5f.png"},405:function(e,t,r){e.exports=r.p+"assets/img/btcpayWalletImport1.6c214d88.jpg"},406:function(e,t,r){e.exports=r.p+"assets/img/btcpayWalletImport2.d39a2fb0.jpg"},407:function(e,t,r){e.exports=r.p+"assets/img/btcpayWalletImport3.4ad4427f.jpg"},408:function(e,t,r){e.exports=r.p+"assets/img/SetupWalletXpub.195df229.png"},409:function(e,t,r){e.exports=r.p+"assets/img/ElectrumWallet11.9ea45c82.png"},410:function(e,t,r){e.exports=r.p+"assets/img/ElectrumWallet11a.05edcf6d.png"},411:function(e,t,r){e.exports=r.p+"assets/img/ElectrumWallet12.139c7796.png"},719:function(e,t,r){"use strict";r.r(t);var a=r(9),l=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"connecting-electrum-wallet-to-btcpay-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#connecting-electrum-wallet-to-btcpay-server"}},[e._v("#")]),e._v(" Connecting Electrum Wallet to BTCPay Server")]),e._v(" "),t("p",[e._v("This document explains "),t("strong",[e._v("how to connect a desktop "),t("a",{attrs:{href:"https://electrum.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Electrum Wallet"),t("OutboundLink")],1),e._v(" to a BTCPay Server")]),e._v(".")]),e._v(" "),t("p",[t("strong",[e._v("Word of caution")]),e._v(" Electrum wallet relies on Electrum servers that are controlled by third-parties. Information, like public addresses, balances and the transacted amount can "),t("em",[e._v("potentially")]),e._v(" be leaked.")]),e._v(" "),t("p",[e._v("To protect yourself against such leaks, set up "),t("RouterLink",{attrs:{to:"/ElectrumX/"}},[e._v("ElectrumX Server")]),e._v(" or "),t("a",{attrs:{href:"https://github.com/chris-belcher/electrum-personal-server",target:"_blank",rel:"noopener noreferrer"}},[e._v("Electrum Personal Server - EPS"),t("OutboundLink")],1),e._v(".")],1),e._v(" "),t("p",[e._v("You can read about the differences between EPS and ElectrumX "),t("a",{attrs:{href:"https://www.reddit.com/r/Electrum/comments/7xb0lz/whats_the_difference_between_electrumx_server_and/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("ol",[t("li",[e._v("Create a Store in BTCPay Server")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://electrum.org/#download",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download"),t("OutboundLink")],1),e._v(" and install Electrum Wallet")])]),e._v(" "),t("h2",{attrs:{id:"electrum-wallet-setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#electrum-wallet-setup"}},[e._v("#")]),e._v(" Electrum Wallet Setup")]),e._v(" "),t("p",[e._v("After the installation, open "),t("strong",[e._v("Electrum Wallet")]),e._v(" by clicking on the icon on your desktop.")]),e._v(" "),t("h3",{attrs:{id:"quick-setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#quick-setup"}},[e._v("#")]),e._v(" Quick Setup")]),e._v(" "),t("p",[e._v("The easiest way to setup your Electrum wallet with BTCPay is to import an a wallet file backup to your BTCPay Server.")]),e._v(" "),t("ol",[t("li",[e._v("Create a new Electrum Wallet")]),e._v(" "),t("li",[e._v("In Electrum, File > Save Backup > Save in folder")]),e._v(" "),t("li",[e._v("In BTCPay Server, Store > Settings > Setup > Import Wallet File > Choose File > Continue")]),e._v(" "),t("li",[e._v("Go to Receive tab in Electrum.")]),e._v(" "),t("li",[e._v("Compare the addresses in Electrum and BTCPay Server, they should match.")]),e._v(" "),t("li",[e._v("Confirm the address match in BTCPay.")])]),e._v(" "),t("h2",{attrs:{id:"step-by-step"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-by-step"}},[e._v("#")]),e._v(" Step by Step")]),e._v(" "),t("p",[e._v("The following setup guides you through setting up an entirely new Bech32(SegWit) Wallet in Electrum. If you already have a wallet skip to the Extended Public Key copying.")]),e._v(" "),t("p",[e._v("Firstly, give your wallet a name, for example, "),t("code",[e._v("BTCPay Server Wallet")]),e._v(" and click "),t("code",[e._v("Next")]),e._v(".")]),e._v(" "),t("figure",[t("img",{attrs:{src:r(399),alt:"ElectrumWallet",title:"Create Electrum Wallet"}})]),e._v(" "),t("p",[e._v("Choose "),t("code",[e._v("Standard wallet")]),e._v(" and proceed by clicking the "),t("code",[e._v("Next")]),e._v("button.")]),e._v(" "),t("figure",[t("img",{attrs:{src:r(400),alt:"ElectrumWallet",title:"Choose Standard Wallet in Electrum"}})]),e._v(" "),t("p",[e._v("Since we're creating a brand-new wallet,choose "),t("code",[e._v("Create a new seed")]),e._v(" and "),t("code",[e._v("Next")])]),e._v(" "),t("figure",[t("img",{attrs:{src:r(401),alt:"ElectrumWallet",title:"Generate a new seed in Electrum"}})]),e._v(" "),t("p",[e._v("From the multiple choice menu, select "),t("code",[e._v("SegWit")]),e._v(" and "),t("code",[e._v("Next")])]),e._v(" "),t("figure",[t("img",{attrs:{src:r(402),alt:"ElectrumWallet",title:"Choose Segwit seed type in Electrum"}})]),e._v(" "),t("p",[t("strong",[e._v("IMPORTANT NOTE:")]),e._v(" If you're a merchant, instead of SegWit (Bech32), it's recommended to use SegWit wrapped (P2SH) format. "),t("a",{attrs:{href:"https://www.youtube.com/watch?v=-1DBJWwA2Cw",target:"_blank",rel:"noopener noreferrer"}},[e._v("This guide"),t("OutboundLink")],1),e._v(" explains how to create P2SH wallet in Electrum that's more suited for merchants, due to compatability with legacy wallets customers use.")]),e._v(" "),t("p",[t("strong",[e._v("IMPORTANT NOTE 2:")]),e._v(" Write down your recovery words in the order you see them on the screen. Write them down a piece of paper and store it somewhere secure. Take your time and triple check each word. Do not store your seed in a digital format (photograph, text document). Whoever has the access to your seed can access your funds. Confirm that the seed has been properly backed up by re-entering it in the same order. Once the seed is validated, proceed to the next step.")]),e._v(" "),t("p",[e._v("Copy and paste your seed words to complete your wallet creation in Electrum. Your wallet must be unencrypted to import it into your BTCPay Server. Once you have completed the setup of your wallet in BTCPay you can always add password encryption later in Electrum.")]),e._v(" "),t("p",[e._v("Follow along in the video below on how to import into BTCPay Server.")]),e._v(" "),t("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/kf3BHaQWSAc 'BTCPay Server - How to import wallet file'/hqdefault.jpg)"},attrs:{href:"https://www.youtube.com/watch?v=kf3BHaQWSAc 'BTCPay Server - How to import wallet file'","data-id":"kf3BHaQWSAc 'BTCPay Server - How to import wallet file'"}},[t("iframe",{attrs:{title:"YouTube","data-src":"https://www.youtube-nocookie.com/embed/kf3BHaQWSAc 'BTCPay Server - How to import wallet file'?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),e._v(" "),t("h3",{attrs:{id:"alternative-setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alternative-setup"}},[e._v("#")]),e._v(" Alternative Setup")]),e._v(" "),t("p",[e._v("Instead of importing a wallet file you can instead transfer the public key to your BTCPay Server. This can be useful if your wallet is encrypted and you do not want to unencrypt it.")]),e._v(" "),t("ol",[t("li",[e._v("Create a new Electrum Wallet")]),e._v(" "),t("li",[e._v("In Electrum, Wallet > Wallet Information - copy the "),t("strong",[e._v("Master Public Key")]),e._v(".")]),e._v(" "),t("li",[e._v("In BTCPay Server, Store > Settings > Setup > Connect an existing wallet > Enter extended public key")]),e._v(" "),t("li",[e._v("Go to Receive tab in Electrum.")]),e._v(" "),t("li",[e._v("Compare the addresses in Electrum and BTCPay Server, they should match.")]),e._v(" "),t("li",[e._v("Confirm the address match in BTCPay.")])]),e._v(" "),t("p",[e._v("When the wallet loads (it may take few moments), in the top menu, click on the "),t("code",[e._v("Wallet")]),e._v(" and then"),t("code",[e._v("Information")]),e._v(" .")]),e._v(" "),t("figure",[t("img",{attrs:{src:r(403),alt:"ElectrumWallet",title:"Electrum Wallet Information"}})]),e._v(" "),t("p",[e._v("Select and "),t("strong",[e._v("copy")]),e._v(" the "),t("code",[e._v("Master Public Key")]),e._v(". This is the "),t("strong",[e._v("public")]),e._v(" key from which BTCPay will derive addresses.")]),e._v(" "),t("figure",[t("img",{attrs:{src:r(404),alt:"ElectrumWallet",title:"Copy Electrum master public key"}})]),e._v(" "),t("p",[e._v("Return to your BTCPay Server. Click on the "),t("code",[e._v("Bitcoin")]),e._v(" in the left menu or "),t("code",[e._v("Set up a wallet")]),e._v(" on your new dashboard.")]),e._v(" "),t("figure",[t("img",{attrs:{src:r(405),alt:"ElectrumWallet",title:"Set up your wallet"}})]),e._v(" "),t("p",[e._v("Click "),t("code",[e._v("Connect an existing wallet")])]),e._v(" "),t("figure",[t("img",{attrs:{src:r(406),alt:"ElectrumWallet"}})]),e._v(" "),t("p",[e._v("Now click on the "),t("code",[e._v("Enter extended public key")]),e._v(" option to import your key.")]),e._v(" "),t("figure",[t("img",{attrs:{src:r(407),alt:"ElectrumWallet"}})]),e._v(" "),t("p",[e._v("Paste the "),t("code",[e._v("Master Public Key")]),e._v(" into derivation scheme field as it is, without adding anything else. Make sure that "),t("code",[e._v("Enabled")]),e._v(" checkbox is ticked and click "),t("code",[e._v("Continue")]),e._v(".")]),e._v(" "),t("figure",[t("img",{attrs:{src:r(408),alt:"ElectrumWallet",title:"Paste the xpub key and enable the wallet"}})]),e._v(" "),t("p",[e._v("Return to the "),t("strong",[e._v("Electrum Wallet")]),e._v(". Go to "),t("code",[e._v("Receive tab")]),e._v(" which shows your wallet receiving address.")]),e._v(" "),t("p",[t("strong",[e._v("Compare the address you see in Electrum Wallet to Addresses shown in BTCPay Server")]),e._v(". If there's a match, "),t("code",[e._v("continue")]),e._v(". If there is no match, double-check that you're actually pasting "),t("code",[e._v("Master Public Key")]),e._v(".")]),e._v(" "),t("figure",[t("img",{attrs:{src:r(409),alt:"ElectrumWallet",title:"Compare Electrum Wallet and BTCPay Server addresses"}})]),e._v(" "),t("h3",{attrs:{id:"configuring-the-gap-limit-in-electrum"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-gap-limit-in-electrum"}},[e._v("#")]),e._v(" Configuring the Gap Limit in Electrum")]),e._v(" "),t("p",[e._v("In the top menu, click on the "),t("code",[e._v("View")]),e._v(" and then"),t("code",[e._v("Show Console")]),e._v(" .")]),e._v(" "),t("figure",[t("img",{attrs:{src:r(410),alt:"ElectrumWallet",title:"Show Electrum Wallet console"}})]),e._v(" "),t("p",[e._v("Enter following commands in Electrum console and press "),t("code",[e._v("enter")]),e._v("on your keyboard.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" wallet.change_gap_limit(100)\n")])])]),t("p",[e._v("If you are running a version older than Electrum 4, also enter the following command and press 'enter'")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("wallet.storage.write()\n")])])]),t("figure",[t("img",{attrs:{src:r(411),alt:"ElectrumWallet",title:"Electrum Wallet console"}})]),e._v(" "),t("p",[e._v("Restart your Electrum and verify that the newly set gap limit is correct by entering in the console:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("wallet.gap_limit\n")])])]),t("p",[e._v("There's no good answer to how much you should set the gap limit to. Most merchants set 100-200. If you're a big merchants with high transaction volume, you can try with even higher gap limit.")]),e._v(" "),t("p",[e._v("For more details about the "),t("RouterLink",{attrs:{to:"/FAQ/Wallet/#missing-payments-in-my-software-or-hardware-wallet"}},[e._v("Gap Limit, check the FAQ")]),e._v(".")],1),e._v(" "),t("p",[t("strong",[e._v("Electrum and BTCPay Server are now connected")]),e._v(". Any payments received to your BTCPay will be visible in Electrum, where you can further spend them.")])])}),[],!1,null,null,null);t.default=l.exports}}]);