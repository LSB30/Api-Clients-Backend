import express from "express";
import customer from "./clientRoutes";

const routes = (app: any) => {
  app.route("/").get((req: any, res: any) => {
    res.status(200).send({ message: "Hello World!" });
  });

  app.use(express.json(), customer);
};

export default routes;