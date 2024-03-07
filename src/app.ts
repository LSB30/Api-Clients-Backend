import express from "express";
import routes from "./Routes";

const app = express();
routes(app);

export default app;
