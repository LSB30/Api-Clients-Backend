import prismaClient from "../prisma";

interface UpdateProps {
  id: string;
  name: string;
  email: string;
  status: boolean;
  updated : Date;
}

class UpdateCustomerService {
  async execute({ id, name, email, status, updated}: UpdateProps) {
    const costumer = await prismaClient.customer.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        email: email,
        status: status,
        updated
      },
    });
  }
}

export { UpdateCustomerService };
