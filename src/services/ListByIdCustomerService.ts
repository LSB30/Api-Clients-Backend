import prismaClient from "../prisma";

interface ListByIdProps {
  id: string;
}

class ListByIdCustomerService {
  async execute({ id }: ListByIdProps) {
    if (!id) {
      throw new Error("Invalid");
    }

    const findcustomer = await prismaClient.customer.findUnique({
      where: {
        id: id,
      },
    });
    if (!findcustomer) {
      throw new Error("User not found");
    }

    return findcustomer;
  }
}

export { ListByIdCustomerService };
