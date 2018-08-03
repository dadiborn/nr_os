let H = require("http"), E = require("express"), R = require("node-red"); let A = E(); A.use("/", E.static("public")); let S = H.createServer(A);
const PE = process.env;
let C = {
uiPort: PE.PORT || 1880,
adminAuth: {
    type: "credentials",
    users: [{
        username: PE.L,
        password: PE.P,
        permissions: PE.A
    }]
},
    httpNodeCors: { origin: PE.CORS_O, methods: PE.CORS_M},
    httpAdminRoot: PE.ROOT_ADMIN,
    httpNodeRoot: PE.ROOT,
    flowFilePretty: true,
    flowFile: PE.FLOW,
    functionGlobalContext: {
/*        os:require("os"),
        gFirebase:require("firebase"),
		gAuth:require("google-auth-library"),
		gCloud:require("google-cloud"),
		moment:require('moment')*/
    }
};
R.init(S, C); A.use(C.httpAdminRoot, R.httpAdmin); A.use(C.httpNodeRoot, R.httpNode); S.listen(PE.PORT); R.start();