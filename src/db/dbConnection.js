import  mongoose from 'mongoose';


(async () => {
    await mongoose.set('strictQuery', true);
    await mongoose.connect(process.env.MONGO_URl);

    await mongoose.set("debug", true);

    mongoose.connection.on("error", (err) => {
        console.error("Mongoose connection: error - " + err);
    });

    mongoose.connection.on("connected", () => {
        console.info("Mongoose connection: connected");
    });

    mongoose.connection.on("open", () => {
        console.info("Mongoose connection: open");
    });

    mongoose.connection.on("reconnected", () => {
        console.info("Mongoose connection: reconnected");
    });

    mongoose.connection.on("disconnected", () => {
        console.warn("Mongoose connection: disconnected");
    });

    return mongoose;
})()
