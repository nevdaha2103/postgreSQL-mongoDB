
db.accounts.insertMany([
  { account_name: 'Alice', balance: 1000.00 },
  { account_name: 'Bob', balance: 500.00 }
]);

const session = db.getMongo().startSession();

session.startTransaction();

try {

  db.accounts.updateOne({ account_name: 'Alice' }, { $inc: { balance: -200 } });
  db.accounts.updateOne({ account_name: 'Bob' }, { $inc: { balance: 200 } });

  session.commitTransaction();
} catch (error) {

  session.abortTransaction();
} finally {
  session.endSession();
}

db.accounts.find().toArray();
