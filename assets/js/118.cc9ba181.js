(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{865:function(e,t,a){"use strict";a.r(t);var r=a(35),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"migration-from-dbtrie-backend-to-postgres-backend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migration-from-dbtrie-backend-to-postgres-backend"}},[e._v("#")]),e._v(" Migration from DBTrie backend to Postgres backend")]),e._v(" "),a("p",[e._v("NBXplorer for a long time relied on an embedded database called DBTrie.\nThis internal database was limiting for a number of reason, and we decided to update NBXplorer to use a postgres backend instead of DBTrie.")]),e._v(" "),a("p",[e._v("While we still support DBTrie, it is deprecated. We provide a migration path for currently current deployments.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Command line argument")]),e._v(" "),a("th",[e._v("Environment variable")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("--deleteaftermigration")]),e._v(" "),a("td",[e._v("NBXPLORER_DELETEAFTERMIGRATION=1")]),e._v(" "),a("td",[e._v("Once migration succeed, delete the original DBTrie database (default: false)")])]),e._v(" "),a("tr",[a("td",[e._v("--postgres")]),e._v(" "),a("td",[e._v('NBXPLORER_POSTGRES="..."')]),e._v(" "),a("td",[e._v("The connection string to postgres")])]),e._v(" "),a("tr",[a("td",[e._v("--automigrate")]),e._v(" "),a("td",[e._v("NBXPLORER_AUTOMIGRATE=1")]),e._v(" "),a("td",[e._v("If DBTrie database exists, migrate it (default: false)")])]),e._v(" "),a("tr",[a("td",[e._v("--nomigrateevts")]),e._v(" "),a("td",[e._v("NBXPLORER_NOMIGRATEEVTS=1")]),e._v(" "),a("td",[e._v("Do not migrate the events table (default: false)")])]),e._v(" "),a("tr",[a("td",[e._v("--nomigraterawtxs")]),e._v(" "),a("td",[e._v("NBXPLORER_NOMIGRATERAWTXS=1")]),e._v(" "),a("td",[e._v("Do not migrate the raw bytes of transactions (default: false)")])])])]),e._v(" "),a("p",[a("code",[e._v("automigrate")]),e._v(" will automatically detect if a DBTrie database need to be migrated. As such, if the migration already happened or that there is nothing to migrate, the flag will be ignored.")]),e._v(" "),a("p",[a("code",[e._v("nomigrateevts")]),e._v(" can be used if the services depending on NBXplorer isn't querying past events. It can make the migration a bit faster. (BTCPay Server doesn't use the past events)")]),e._v(" "),a("p",[a("code",[e._v("nomigraterawtxs")]),e._v(" can be used if you don't need to keep the raw transaction bytes. It can make the migration a bit faster. The raw transactions are typically needed when you need to sign a non-segwit wallet.")]),e._v(" "),a("p",[e._v("The migration will take less than 5 minutes for the majority of small instance.")]),e._v(" "),a("p",[e._v("On bigger instance, our testing on the mainnet demo server of BTCPay Server with 800 000 addresses and 44 000 transactions (around the DBTrie database being around 5GB) took around 40 minutes.")]),e._v(" "),a("p",[e._v("Afterwards you need to set "),a("code",[e._v("BTCPAY_EXPLORERPOSTGRES")]),e._v(" to the same connection string as NBXplorer.")])])}),[],!1,null,null,null);t.default=n.exports}}]);