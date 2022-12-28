(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{736:function(t,e,a){t.exports=a.p+"assets/img/WalletTransactions.c905309a.jpg"},737:function(t,e,a){t.exports=a.p+"assets/img/WalletSend.f65f1a74.jpg"},738:function(t,e,a){t.exports=a.p+"assets/img/WalletRBF.2dea1e29.jpg"},739:function(t,e,a){t.exports=a.p+"assets/img/CoinSelection.9d40e6ee.jpg"},740:function(t,e,a){t.exports=a.p+"assets/img/ScanWallet.61243593.jpg"},741:function(t,e,a){t.exports=a.p+"assets/img/WalletReceive.cb4b9f39.jpg"},742:function(t,e,a){t.exports=a.p+"assets/img/WalletRescan.1d081027.jpg"},743:function(t,e,a){t.exports=a.p+"assets/img/WalletRescanProgress.05a8b0f7.jpg"},744:function(t,e,a){t.exports=a.p+"assets/img/btcpayserverwalletsettings1.97911174.jpg"},910:function(t,e,a){"use strict";a.r(e);var n=a(35),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"btcpay-server-wallet"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#btcpay-server-wallet"}},[t._v("#")]),t._v(" BTCPay Server Wallet")]),t._v(" "),n("p",[t._v("BTCPay Server has a built in, "),n("strong",[t._v("full-node reliant wallet")]),t._v(" that allows for easy funds management.")]),t._v(" "),n("p",[t._v("Each "),n("RouterLink",{attrs:{to:"/CreateStore/"}},[t._v("store")]),t._v("'s configured cryptocurrency has a separate wallet displayed under Wallets in the menu bar.")],1),t._v(" "),n("h2",{attrs:{id:"wallet-features"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#wallet-features"}},[t._v("#")]),t._v(" Wallet features")]),t._v(" "),n("p",[t._v("The wallet contains the following features:")]),t._v(" "),n("ol",[n("li",[t._v("Transactions")]),t._v(" "),n("li",[t._v("Send")]),t._v(" "),n("li",[t._v("Receive")]),t._v(" "),n("li",[t._v("Rescan")]),t._v(" "),n("li",[t._v("Pull payments")]),t._v(" "),n("li",[t._v("Payouts")]),t._v(" "),n("li",[t._v("PSBT")]),t._v(" "),n("li",[t._v("Settings")])]),t._v(" "),n("h3",{attrs:{id:"transactions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#transactions"}},[t._v("#")]),t._v(" Transactions")]),t._v(" "),n("p",[t._v("An overview of the incoming (green), outgoing (red) and unconfirmed (grayed out) "),n("strong",[t._v("transactions")]),t._v(" displayed together with timestamps and balances, sorted by date. You can click on the transaction ID to view the transaction details on the block explorer.")]),t._v(" "),n("figure",[n("img",{attrs:{src:a(736),alt:"Individual Wallet",title:"BTCPay Server Wallet Transactions"}})]),t._v(" "),n("h4",{attrs:{id:"transaction-labels"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#transaction-labels"}},[t._v("#")]),t._v(" Transaction Labels")]),t._v(" "),n("p",[t._v("The table below lists the various "),n("strong",[t._v("transaction labels used by BTCPay")]),t._v(".")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Transaction Type")]),t._v(" "),n("th",[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("app")]),t._v(" "),n("td",[t._v("Payment was received through an app created invoice")])]),t._v(" "),n("tr",[n("td",[t._v("invoice")]),t._v(" "),n("td",[t._v("Payment was received through an invoice")])]),t._v(" "),n("tr",[n("td",[t._v("payjoin")]),t._v(" "),n("td",[t._v("Not paid, invoice timer still has not expired")])]),t._v(" "),n("tr",[n("td",[t._v("payjoin-exposed")]),t._v(" "),n("td",[t._v("UTXO was exposed through an invoice payjoin proposal")])]),t._v(" "),n("tr",[n("td",[t._v("payment-request")]),t._v(" "),n("td",[t._v("Payment was received through a payment request")])]),t._v(" "),n("tr",[n("td",[t._v("payout")]),t._v(" "),n("td",[t._v("Payment was sent through a payout or refund")])])])]),t._v(" "),n("p",[t._v("You can also create your own "),n("RouterLink",{attrs:{to:"/FAQ/Wallet/#how-to-add-custom-labels-and-comments-to-transactions"}},[t._v("custom transaction labels and comments")]),t._v(".")],1),t._v(" "),n("h3",{attrs:{id:"send"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#send"}},[t._v("#")]),t._v(" Send")]),t._v(" "),n("p",[t._v("The Send function allows "),n("strong",[t._v("spending of the funds from the BTCPay wallet")]),t._v(".")]),t._v(" "),n("figure",[n("img",{attrs:{src:a(737),alt:"Send from the Wallet"}})]),t._v(" "),n("h4",{attrs:{id:"signing-a-transaction-spending"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#signing-a-transaction-spending"}},[t._v("#")]),t._v(" Signing a transaction (spending)")]),t._v(" "),n("p",[t._v("To spend the funds, you are required to "),n("strong",[t._v("sign")]),t._v(" the transaction. Transactions can be signed with:")]),t._v(" "),n("ul",[n("li",[t._v("Hardware Wallet")]),t._v(" "),n("li",[t._v("Wallet supporting PSBT")]),t._v(" "),n("li",[t._v("HD private key or recovery seed")]),t._v(" "),n("li",[t._v("Hot Wallet")])]),t._v(" "),n("h5",{attrs:{id:"signing-with-hd-private-key-or-mnemonic-seed"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#signing-with-hd-private-key-or-mnemonic-seed"}},[t._v("#")]),t._v(" Signing with HD Private Key or mnemonic seed")]),t._v(" "),n("p",[t._v("If you set up an "),n("RouterLink",{attrs:{to:"/WalletSetup/#use-an-existing-wallet"}},[t._v("existing wallet with your BTCPay Server")]),t._v(", you can spend the funds by inputting your private key into an appropriate field. Make sure to set a proper "),n("code",[t._v("AccountKeyPath")]),t._v(" in Wallet > Settings otherwise you won't be able to spend.")],1),t._v(" "),n("h5",{attrs:{id:"signing-with-a-wallet-supporting-psbt"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#signing-with-a-wallet-supporting-psbt"}},[t._v("#")]),t._v(" Signing with a wallet supporting PSBT")]),t._v(" "),n("p",[t._v("PSBT ("),n("strong",[t._v("Partially Signed Bitcoin transactions")]),t._v(") is an interchange format for Bitcoin transactions that are not fully signed yet.\nPSBT is supported in BTCPay Server and can be signed with compatible hardware and software wallets.")]),t._v(" "),n("p",[t._v("The construction of a fully signed Bitcoin transaction goes through the following steps:")]),t._v(" "),n("ul",[n("li",[t._v("A PSBT gets constructed with certain inputs and outputs, but no signatures")]),t._v(" "),n("li",[t._v("The exported PSBT can be imported by a wallet that supports this format")]),t._v(" "),n("li",[t._v("The transaction data can be inspected and signed using the wallet")]),t._v(" "),n("li",[t._v("The signed PSBT file gets exported from the wallet and imported with BTCPay Server")]),t._v(" "),n("li",[t._v("BTCPay Server produces the final Bitcoin transaction")]),t._v(" "),n("li",[t._v("You verify the result and broadcast it to the network")])]),t._v(" "),n("p",[t._v("Check this tutorial on how to "),n("RouterLink",{attrs:{to:"/ColdCardWallet/#spending-from-btcpay-server-wallet-with-coldcard-psbt"}},[t._v("sign a PSBT transaction with ColdCard Hardware Wallet")]),t._v(", completely offline/air-gapped.")],1),t._v(" "),n("h5",{attrs:{id:"signing-with-a-hardware-wallet"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#signing-with-a-hardware-wallet"}},[t._v("#")]),t._v(" Signing with a hardware wallet")]),t._v(" "),n("p",[t._v("BTCPay Server has built-in hardware wallet support allowing you to "),n("strong",[t._v("use your hardware wallet with BTCPay")]),t._v(", without leaking information to third-party apps or servers.")]),t._v(" "),n("p",[n("RouterLink",{attrs:{to:"/HardwareWalletIntegration/"}},[t._v("Check instructions")]),t._v(" on how to set up and sign with a "),n("a",{attrs:{href:"https://github.com/bitcoin-core/HWI#device-support",target:"_blank",rel:"noopener noreferrer"}},[t._v("compatible hardware wallet"),n("OutboundLink")],1),t._v(".")],1),t._v(" "),n("h5",{attrs:{id:"signing-with-a-hot-wallet"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#signing-with-a-hot-wallet"}},[t._v("#")]),t._v(" Signing with a hot wallet")]),t._v(" "),n("p",[t._v("If you "),n("RouterLink",{attrs:{to:"/CreateWallet/"}},[t._v("created a new wallet")]),t._v(" when setting up your store and enabled it as a "),n("RouterLink",{attrs:{to:"/CreateWallet/#hot-wallet"}},[t._v("hot wallet")]),t._v(", since version 1.2.0, we've added an option that when a "),n("RouterLink",{attrs:{to:"/CreateWallet/#hot-wallet"}},[t._v("hot wallet")]),t._v(" is created, it'll automatically use the seed stored on a server to sign.")],1),t._v(" "),n("div",{staticClass:"custom-block danger"},[n("p",{staticClass:"custom-block-title"},[t._v("DANGER")]),t._v(" "),n("p",[t._v("Using the hot wallet feature comes with security implications; please be sure to read and understand them over at the "),n("RouterLink",{attrs:{to:"/CreateWallet/#security-implications"}},[t._v("Hot Wallet documentation")])],1)]),t._v(" "),n("h4",{attrs:{id:"advanced-settings"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#advanced-settings"}},[t._v("#")]),t._v(" Advanced Settings")]),t._v(" "),n("p",[t._v("Certain wallet features are available for advanced users. Toggle the "),n("code",[t._v("Advanced Settings")]),t._v(" within the "),n("code",[t._v("Send")]),t._v(" tab to preview them.")]),t._v(" "),n("h5",{attrs:{id:"dont-create-utxo-change"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dont-create-utxo-change"}},[t._v("#")]),t._v(" Don't create UTXO change")]),t._v(" "),n("p",[t._v("This option is available in the "),n("code",[t._v("Advanced mode")]),t._v(" of the "),n("code",[t._v("Send")]),t._v(" page.")]),t._v(" "),n("p",[t._v("It is a privacy enhancing feature which is useful when you're sending funds to another wallet of yours or to an exchange. It makes sure that no change UTXO is created by "),n("strong",[t._v("rounding up")]),t._v(" the amount sent.")]),t._v(" "),n("p",[t._v("By default this feature is disabled, so if your wallet has a UTXO of "),n("code",[t._v("1.1 BTC")]),t._v(" and you input an amount equal to "),n("code",[t._v("1.0 BTC")]),t._v(", the resulting transaction will have two outputs "),n("code",[t._v("0.1 BTC")]),t._v(" of change, and "),n("code",[t._v("1.0 BTC")]),t._v(" to your destination.")]),t._v(" "),n("p",[t._v("Blockchain analysis will understand that those "),n("code",[t._v("0.1 BTC")]),t._v(" of change belong to the same entity which controlled "),n("code",[t._v("1.1 BTC")]),t._v(" before, and can track the future purchase you make under the same pattern.")]),t._v(" "),n("p",[t._v("By enabling this feature, BTCPay Server wallet will round up the amount sent to "),n("code",[t._v("1.1 BTC")]),t._v(" such that no change output is sent back to you.")]),t._v(" "),n("p",[t._v("Warning: Despite the fact, in this example, that you entered "),n("code",[t._v("1.0")]),t._v(" in the amount field, the amount that will really be sent to your destination will be "),n("code",[t._v("1.1 BTC")]),t._v(".")]),t._v(" "),n("h5",{attrs:{id:"rbf-replace-by-fee"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rbf-replace-by-fee"}},[t._v("#")]),t._v(" RBF (Replace-By-Fee)")]),t._v(" "),n("p",[t._v("Replace-By-Fee (RBF) is a Bitcoin protocol feature that allows you to replace a previously broadcast transaction (while unconfirmed). This allows randomizing your wallet's transaction fingerprint, or simply for replacing it with a higher fee rate to move the transaction higher in the queue of confirmation (mining) priority. This will effectively replace the original transaction as the higher fee rate will be prioritized and once confirmed, invalidating the original one (double spend).")]),t._v(" "),n("p",[t._v("Press the "),n("code",[t._v("Advanced Settings")]),t._v(" button to view the RBF options:")]),t._v(" "),n("figure",[n("img",{attrs:{src:a(738),alt:"RBF Options"}})]),t._v(" "),n("ul",[n("li",[t._v("Option 1 (Enabled by Default): Allow the transaction to be replaced automatically for randomization of transaction fingerprint (increased privacy)")]),t._v(" "),n("li",[t._v("Option 2: Yes, Allow the transaction to be replaced explicitly (not replaced by default)")]),t._v(" "),n("li",[t._v("Option 3: No, Do not allow the transaction to be replaced (ignore replacement)")])]),t._v(" "),n("h5",{attrs:{id:"coin-selection"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#coin-selection"}},[t._v("#")]),t._v(" Coin Selection")]),t._v(" "),n("p",[t._v("Coin selection is an advanced "),n("strong",[t._v("privacy-enhancing feature")]),t._v(" that allows you to "),n("strong",[t._v("specifically select coins")]),t._v(" that you would like to spend when crafting a transaction. For example, paying with coins that are fresh from a coinjoin mix.")]),t._v(" "),n("p",[t._v("To make the selection easier, coin-selection works natively with the wallet labels feature. This allows you to label any incoming funds for smoother UTXO management and spending.")]),t._v(" "),n("figure",[n("img",{attrs:{src:a(739),alt:"Coin Selection",title:"Coin Selection"}})]),t._v(" "),n("h5",{attrs:{id:"other-features"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#other-features"}},[t._v("#")]),t._v(" Other features")]),t._v(" "),n("h6",{attrs:{id:"camera-qr-scan"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#camera-qr-scan"}},[t._v("#")]),t._v(" Camera QR scan")]),t._v(" "),n("p",[t._v("Scan option in wallet (camera icon in send screen) lets you "),n("strong",[t._v("use your device’s camera to scan a QR code containing an address or BIP21 payment link")]),t._v(". It auto-populates the sending information so that you don’t have to manually copy-paste an address and amount.")]),t._v(" "),n("figure",[n("img",{attrs:{src:a(740),alt:"QR Scan"}})]),t._v(" "),n("h6",{attrs:{id:"paste-bip21-address"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#paste-bip21-address"}},[t._v("#")]),t._v(" Paste BIP21 address")]),t._v(" "),n("p",[t._v("This option "),n("strong",[t._v("decodes a BIP21 payment link")]),t._v(". It's useful when you're trying to pay a "),n("RouterLink",{attrs:{to:"/Payjoin/"}},[t._v("Payjoin")]),t._v(" invoice.")],1),t._v(" "),n("h3",{attrs:{id:"receive"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#receive"}},[t._v("#")]),t._v(" Receive")]),t._v(" "),n("p",[t._v("The Receive tab "),n("strong",[t._v("generates an unused address which can be used to receive payments")]),t._v(". The same can be achieved by generating an invoice (Invoices > Create new invoice).")]),t._v(" "),n("figure",[n("img",{attrs:{src:a(741),alt:"Wallet Receive",title:"Receive in BTCPay"}})]),t._v(" "),n("h3",{attrs:{id:"pull-payments"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pull-payments"}},[t._v("#")]),t._v(" Pull Payments")]),t._v(" "),n("p",[t._v("This feature gives you the ability to "),n("strong",[t._v("create a Pull Payment")]),t._v(", so that an outside individual may request to "),n("code",[t._v("pull")]),t._v(" funds from your wallet.")]),t._v(" "),n("p",[t._v("For more information, see "),n("RouterLink",{attrs:{to:"/PullPayments/"}},[t._v("Pull Payments")]),t._v(".")],1),t._v(" "),n("h3",{attrs:{id:"payouts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#payouts"}},[t._v("#")]),t._v(" Payouts")]),t._v(" "),n("p",[t._v("This section lets you manage Pull Payments and gives you the ability to "),n("strong",[t._v("accept or decline payouts requested by outside individuals")]),t._v(".")]),t._v(" "),n("p",[t._v("For more information, see "),n("RouterLink",{attrs:{to:"/PullPayments/#approve-and-pay-a-payout"}},[t._v("Payouts")]),t._v(".")],1),t._v(" "),n("h3",{attrs:{id:"re-scan"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#re-scan"}},[t._v("#")]),t._v(" Re-scan")]),t._v(" "),n("p",[t._v("The Rescan relies on Bitcoin Core 0.17.0's "),n("code",[t._v("scantxoutset")]),t._v(" to "),n("strong",[t._v("scan the current state of the blockchain")]),t._v(" (called UTXO Set) for coins belonging to the configured derivation scheme.")]),t._v(" "),n("figure",[n("img",{attrs:{src:a(742),alt:"Wallet Rescan",title:"Rescan Wallet in BTCPay"}})]),t._v(" "),n("p",[t._v("Wallet re-scan solves two critical problems for BTCPay users:")]),t._v(" "),n("ol",[n("li",[n("RouterLink",{attrs:{to:"/FAQ/Wallet/#missing-payments-in-my-software-or-hardware-wallet"}},[t._v("Gap limit")])],1),t._v(" "),n("li",[t._v("Importing a previously used wallet")])]),t._v(" "),n("p",[n("strong",[t._v("Gap limit")]),t._v(": Most wallets typically have the address gap limit set to 20. This means that if a merchant receives 21 or more consecutive unpaid invoices, those wallets show the incorrect balance and some transactions may not be visible.")]),t._v(" "),n("p",[n("strong",[t._v("Wallet import")]),t._v(": When users add a derivation scheme of a wallet that had transactions in the past (previously used wallet), BTCPay won't be able to show the balance and transactions from the past.")]),t._v(" "),n("figure",[n("img",{attrs:{src:a(743),alt:"Wallet rescan progress",title:"Rescan Wallet in BTCPay"}})]),t._v(" "),n("p",[t._v("Re-scan is a feature that solves both of these problems. Once the scan is complete, BTCPay Server will show the correct balance, along with the past transactions of the wallet.")]),t._v(" "),n("p",[t._v("Wallet re-scan requires access to the full node which means that this function is only available for server owners.")]),t._v(" "),n("p",[t._v("Users who use a third-party host should use a newly generated xpub key and also use an external wallet like Electrum which allows them to increase the gap limit.")]),t._v(" "),n("h3",{attrs:{id:"settings"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#settings"}},[t._v("#")]),t._v(" Settings")]),t._v(" "),n("p",[t._v("In the top right corner of your "),n("code",[t._v("wallet")]),t._v(" you will find the "),n("code",[t._v("wallet settings")]),t._v(".\nIn the wallet settings tab you can adjust certain settings. If you've configured your wallet by "),n("RouterLink",{attrs:{to:"/CreateWallet/"}},[t._v("creating a new wallet")]),t._v(" or using an existing wallet via the "),n("RouterLink",{attrs:{to:"/HardwareWalletIntegration/"}},[t._v("hardware wallet integration")]),t._v(" these settings will be pre-configured.")],1),t._v(" "),n("p",[t._v("If you manually added the extended public key from an external wallet, you'd need to adjust "),n("code",[t._v("AccountKeyPath")]),t._v(" that you can find in your external wallet, for example "),n("code",[t._v("m/84'/0'/0'")]),t._v(" to be able to spend from the BTCPay Wallet.")]),t._v(" "),n("p",[t._v("In "),n("code",[t._v("wallet settings")]),t._v(" you will also find the "),n("code",[t._v("speed policy")]),t._v(" for the specific store.\nThere are 2 main settings under "),n("code",[t._v("Payment")]),t._v(", "),n("RouterLink",{attrs:{to:"/FAQ/Stores/#payment-invalid-if-transactions-fails-to-confirm--minutes-after-invoice-expiration"}},[t._v("Payment invalid if transaction fails to confirm in ... after invoice creation")]),t._v(" and "),n("RouterLink",{attrs:{to:"/FAQ/Stores/#consider-the-invoice-confirmed-when-the-payment-transaction"}},[t._v("Consider the invoice confirmed when the payment transaction...")]),t._v(". The latter lets you set the number of confirmations required to be recognized as settled.")],1),t._v(" "),n("figure",[n("img",{attrs:{src:a(744),alt:"Wallet settings"}})])])}),[],!1,null,null,null);e.default=s.exports}}]);