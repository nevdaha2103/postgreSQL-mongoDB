db.createCollection('users');

db.users.insertOne({
    name: "John Doe",
    email: "john.doe@example.com"
});
