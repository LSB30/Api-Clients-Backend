import Express from "express";
import { CreateCustomerController } from "../controllers/CreateCustomerController";
import { ListCustomerController } from "../controllers/ListCustomerController";
import { DeleteCustomerController } from "../controllers/DeleteCustomerController";
const routes = Express.Router();

routes.post("/customers", CreateCustomerController.handle);

routes.get("/customers", ListCustomerController.handle);

routes.delete("/customers", DeleteCustomerController.handle);
export default routes;
