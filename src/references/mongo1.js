db.users.insertOne({
    name: "Alice",
    email: "alice@example.com"
});

db.orders.insertOne({
    user_id: ObjectId("user_document_id"),  
    amount: 100.00
});

db.orders.aggregate([
    {
        $lookup: {
            from: 'users',
            localField: 'user_id',
            foreignField: '_id',
            as: 'user_details'
        }
    },
    { $match: { 'user_details.name': 'Alice' } }
]);
