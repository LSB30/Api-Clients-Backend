import Express from "express";
import { UpdateCustomerService } from "../services/UpdateCustomerService";

class UpdateCustomerController {
  static async handle(req: Express.Request, res: Express.Response) {
    const id = req.params.id;
    const updated = new Date();
    const { name, email, status } = req.body;

    const customerServie = new UpdateCustomerService();

    const customers = await customerServie.execute({
      id,
      name,
      email,
      status,
      updated
    });

    res.send(customers);
  }
}

export { UpdateCustomerController };
