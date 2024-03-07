import Express from "express";
import { ListCustomerService } from "../services/ListCustomerService";

class ListCustomerController {
  static async handle(req: Express.Request, res: Express.Response) {
    const customerService = new ListCustomerService();

    const customers = await customerService.execute();

    res.send(customers);
  }
}

export { ListCustomerController };
