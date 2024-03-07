import Express from "express";
import { DeleteCustomerService } from "../services/DeleteCustomerService";

class DeleteCustomerController {
  static async handle(req: Express.Request, res: Express.Response) {
    const { id } = req.query as { id: string };
    
    const customerService = new DeleteCustomerService();

    const customer = await customerService.execute({ id });

    res.send(customer);
  }
}

export { DeleteCustomerController };
