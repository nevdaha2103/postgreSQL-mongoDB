const session = db.getMongo().startSession();

session.startTransaction();

try {
    db.users.updateOne({ name: 'Alice' }, { $inc: { balance: -100 } });
    db.users.updateOne({ name: 'Bob' }, { $inc: { balance: 100 } });

    session.commitTransaction();
} catch (error) {
    session.abortTransaction();
} finally {
    session.endSession();
}
