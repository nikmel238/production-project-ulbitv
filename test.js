const orders = [
    {
        id: 1,
        customer: 'Иван',
        items: [
            { name: 'Ноутбук', price: 1000 },
            { name: 'Мышка', price: 50 },
        ],
    },
    {
        id: 2,
        customer: 'Анна',
        items: [
            { name: 'Клавиатура', price: 150 },
        ],
    },
];

const addTotalOrder = (orders) => orders
    .map((order) => ({
        ...order,
        items: [...order.items],
        total: order.items.reduce(
            (total, item) => total + item.price,
            0,
        ),
    }));

addTotalOrder(orders);
