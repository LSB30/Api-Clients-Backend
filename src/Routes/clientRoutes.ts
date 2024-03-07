import Express from "express";
import { CreateCustomerController } from "../controllers/CreateCustomerController";
import { ListCustomerController } from "../controllers/ListCustomerController";
import { DeleteCustomerController } from "../controllers/DeleteCustomerController";
import { ListByIdCustomerController } from "../controllers/ListByIdCustomerController";
import { UpdateCustomerController } from "../controllers/UpdateCustomerController";
const routes = Express.Router();

routes.get("/customers", ListCustomerController.handle);
routes.get("/customers/:id", ListByIdCustomerController.handle);
routes.post("/customers", CreateCustomerController.handle);
routes.put("/customers/:id", UpdateCustomerController.handle);
routes.delete("/customers", DeleteCustomerController.handle);

export default routes;
