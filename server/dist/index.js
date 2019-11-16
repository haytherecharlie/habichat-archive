"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("app-module-path/register");
const express_1 = require("express");
const cors_1 = require("cors");
const morgan_1 = require("morgan");
const body_parser_1 = require("body-parser");
// import * as mongodb from 'lib/mongo'
// import config from 'config'
// import authorizeRequest from 'middleware/authorize-request'
// import router from 'routes/router'
const app = express_1.default();
const port = 8080;
// mongodb.start()
app.use(cors_1.default());
app.use(body_parser_1.default.json({ type: 'application/json' }));
app.use(morgan_1.default('dev'));
// app.use(authorizeRequest)
// app.use(router)
app.listen(port, () => console.log(`Server started on port: ${port}`));
//# sourceMappingURL=index.js.map