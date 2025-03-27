import express, { Express } from 'express';
import cookies from "cookie-parser";

import { CS571Initializer } from '@cs571/api-framework'
import HW11AIPublicConfig from './model/configs/hw11-ai-public-config';
import HW11AISecretConfig from './model/configs/hw11-ai-secret-config';
import { CS571HW11AIDbConnector } from './services/hw11-ai-db-connector';
import { CS571AICompletionsRoute } from './routes/completions';

console.log("Welcome to HW11 AI!");

const app: Express = express();

app.use(cookies());

// https://github.com/expressjs/express/issues/5275
declare module "express-serve-static-core" {
  export interface CookieOptions {
    partitioned?: boolean;
  }
}

const appBundle = CS571Initializer.init<HW11AIPublicConfig, HW11AISecretConfig>(app, {
  allowNoAuth: [],
  skipAuth: true
});

const db = new CS571HW11AIDbConnector(appBundle.config);

db.init();

appBundle.router.addRoutes([
  new CS571AICompletionsRoute(db, appBundle.config.PUBLIC_CONFIG, appBundle.config.SECRET_CONFIG)
])

app.listen(appBundle.config.PORT, () => {
  console.log(`Running at :${appBundle.config.PORT}`);
});
