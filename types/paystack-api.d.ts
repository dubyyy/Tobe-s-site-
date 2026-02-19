declare module "paystack-api" {
  interface PaystackClient {
    customer: {
      create(params: any): Promise<any>;
    };
    transaction: {
      initialize(params: any): Promise<any>;
    };
  }

  const Paystack: (secretKey: string) => PaystackClient;
  export default Paystack;
}
