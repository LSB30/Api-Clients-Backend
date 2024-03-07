import Express from "express";
import { ListByIdCustomerService } from "../services/ListByIdCustomerService";

class ListByIdCustomerController {
  static async handle(req: Express.Request, res: Express.Response) {
    const id = req.params.id;

    const customerService = new ListByIdCustomerService();

    const costumer = await customerService.execute({ id });

    res.send(costumer);
    console.log(costumer)
  }
}

export { ListByIdCustomerController };
