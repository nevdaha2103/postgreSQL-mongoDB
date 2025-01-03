db.users.insertOne({
    name: "Alice",
    email: "alice@example.com",
    orders: [
        { amount: 100.00 },
        { amount: 200.00 }
    ]
});

db.users.find({ name: "Alice" });
