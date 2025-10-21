// ecommerce-report.js
const transactions = [
  {
    id: "tr_1",
    customerId: "c_1",
    items: [
      { productId: "p_1", price: 50, quantity: 2 },
      { productId: "p_2", price: 25, quantity: 1 },
    ],
    status: "completed",
  },
  {
    id: "tr_2",
    customerId: "c_2",
    items: [{ productId: "p_3", price: 120, quantity: 1 }],
    status: "completed",
  },
  {
    id: "tr_3",
    customerId: "c_1",
    items: [{ productId: "p_2", price: 25, quantity: 3 }],
    status: "pending",
  },
  {
    id: "tr_4",
    customerId: "c_3",
    items: [{ productId: "p_4", price: 80, quantity: 1 }],
    status: "completed",
  },
  {
    id: "tr_5",
    customerId: "c_1",
    items: [{ productId: "p_1", price: 50, quantity: 1 }],
    status: "completed",
  },
];


const report = transactions
  .filter((transactions) => transactions.status === "completed")
  .reduce(
    (acc, transaction) => {
      const totalAmount = transaction.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      // console.log(totalAmount);

      acc.totalRevenue += totalAmount;

      const customerId = transaction.customerId;

      if (acc.customers[customerId]) {
        acc.customers[customerId] += totalAmount;
      } else {
        acc.customers[customerId] = totalAmount;
      }
      return acc;
    },
    { totalRevenue: 0, customers: {} }
  );

console.log(report);
