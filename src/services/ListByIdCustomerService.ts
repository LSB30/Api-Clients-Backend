import prismaClient from "../prisma";

interface ListByIdProps {
  id: string;
}

class ListByIdCustomerService {
  async execute({ id }: ListByIdProps) {
    if (!id) {
      throw new Error("Invalid");
    }

    const findCustomer = await prismaClient.customer.findUnique({
      where: {
        id: id,
      },
    });

    console.log(findCustomer)
    if (!findCustomer) {
      throw new Error("User not found");
    }
    
    return findCustomer;
  }
}

export { ListByIdCustomerService };
