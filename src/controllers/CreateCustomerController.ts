import Express from "express";
import { CreateCustomerService } from "../services/CreateCustomerService";

class CreateCustomerController {
  static async handle(req: Express.Request, res: Express.Response) {
    const { name, email } = req.body as { name: string; email: string };

    console.log(name, email);

    const customerService = new CreateCustomerService();

    const customer = await customerService.execute({ name, email });

    res.send(customer);
  }
}

export { CreateCustomerController };
