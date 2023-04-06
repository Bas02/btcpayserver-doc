(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{766:function(e,a,t){"use strict";t.r(a);var s=t(9),r=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"how-to-verify-release-signatures"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-verify-release-signatures"}},[e._v("#")]),e._v(" How to verify release signatures")]),e._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("Downloading binaries from the internet might be dangerous. When you download a release of BTCPayServer Vault on our "),a("a",{attrs:{href:"https://github.com/btcpayserver/BTCPayServer.Vault/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub releases page"),a("OutboundLink")],1),e._v(", you only ensure that the uploader had access to our GitHub repository.")]),e._v(" "),a("p",[e._v("This might be fine, but sometimes you download the same binaries from a different source, or you want additional assurance that those binaries are signed by the developers of the project. (In this case, Nicolas Dorier)")]),e._v(" "),a("p",[e._v("If you do not care about who signed the executable and verifying the integrity of the files you downloaded, you don't have to read this document.")]),e._v(" "),a("h2",{attrs:{id:"checking-pgp-signatures"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#checking-pgp-signatures"}},[e._v("#")]),e._v(" Checking PGP signatures"),a("a",{attrs:{name:"pgp"}})]),e._v(" "),a("p",[e._v("For this you need the "),a("code",[e._v("gpg")]),e._v(" tool, make sure it is installed on your machine.")]),e._v(" "),a("p",[e._v("On the "),a("a",{attrs:{href:"https://github.com/btcpayserver/BTCPayServer.Vault/releases/latest",target:"_blank",rel:"noopener noreferrer"}},[e._v("release page"),a("OutboundLink")],1),e._v(", download:")]),e._v(" "),a("ol",[a("li",[e._v("The release binary of your choice.")]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("SHA256SUMS.asc")]),e._v(" file")])]),e._v(" "),a("h3",{attrs:{id:"importing-nicolas-dorier-pgp-keys-only-first-time"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#importing-nicolas-dorier-pgp-keys-only-first-time"}},[e._v("#")]),e._v(" Importing Nicolas Dorier pgp keys (only first time)")]),e._v(" "),a("p",[e._v("This step should be done only one time. It ensures your system knows Nicolas Dorier's PGP keys.")]),e._v(" "),a("p",[e._v("Nicolas Dorier has a "),a("a",{attrs:{href:"https://keybase.io/NicolasDorier",target:"_blank",rel:"noopener noreferrer"}},[e._v("keybase"),a("OutboundLink")],1),e._v(" account that allow you to verify that his identity is linked to several well-known social media accounts.\nAnd as you can see on his profile page, the PGP key "),a("code",[e._v("62FE 8564 7DED DA2E")]),e._v(" is linked to his keybase identity.")]),e._v(" "),a("p",[e._v("You can import this key from keybase:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" https://keybase.io/nicolasdorier/pgp_keys.asc "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" gpg --import\n")])])]),a("p",[e._v("or")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("keybase pgp pull nicolasdorier\n")])])]),a("p",[e._v("Alternatively, you can just download the file via the browser and run:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("gpg --import pgp_keys.asc\n")])])]),a("p",[e._v("This step won't have to be repeated the next time you need to check a signature.")]),e._v(" "),a("h3",{attrs:{id:"checking-the-actual-pgp-signature"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#checking-the-actual-pgp-signature"}},[e._v("#")]),e._v(" Checking the actual PGP signature")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("sha256sum --check SHA256SUMS.asc --ignore-missing\n")])])]),a("p",[e._v("You should see that the file you downloaded has the right hash:")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("BTCPayServerVault-1.0.7-setup.exe: OK\n")])])]),a("p",[e._v("If you are on Windows you can check the hashes are identical manually:")]),e._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[e._v("certUtil "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("hashfile BTCPayServerVault-1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("7-setup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("exe SHA256\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("type")]),e._v(" SHA256SUMS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("asc\n")])])]),a("p",[e._v("If you are on macOS:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("shasum -a "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("256")]),e._v(" --check SHA256SUMS.asc\n")])])]),a("p",[e._v("You should see that the file you downloaded has the right hash:")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("BTCPayServerVault-osx-x64-1.0.7.dmg: OK\n")])])]),a("p",[e._v("Then check the actual signature:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("gpg --verify SHA256SUMS.asc\n")])])]),a("p",[e._v("Which should output something like:")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('gpg: Signature made Thu Dec  5 20:40:47 2019 JST\ngpg:                using RSA key 62FE85647DEDDA2E\ngpg: Good signature from "BTCPayServer Vault &lt;nicolas.dorier@gmail.com>" [unknown]\ngpg: WARNING: This key is not certified with a trusted signature!\ngpg:          There is no indication that the signature belongs to the owner.\nPrimary key fingerprint: 7121 BDE3 555D 9BE0 6BDD  C681 62FE 8564 7DED DA2E\n')])])])])}),[],!1,null,null,null);a.default=r.exports}}]);