import mongoose from "mongoose";
import appConfig from "./env";

mongoose.Promise = Promise;

mongoose.connection.on("connected", () => {
    console.log("Database Connection established");
})

mongoose.connection.on("reconnected", () => {
    console.log("Database Connection Reestablished");
})

mongoose.connection.on("disconnected", () => {
    console.log("Database Connection Disconnected");
})

mongoose.connection.on("close", () => {
    console.log("Database Connection Closed");
})

mongoose.connection.on("error", error => {
    console.log(`Database connection error: ${error}`)
    process.exit(1)
})

mongoose.set("debug", appConfig.mongoDebug)
const connectDB = async() => {
    let connectionURI = appConfig.dbConnectionString;
    await mongoose.connect(connectionURI, {
        useNewUrlParser: true
    })
}

export default connectDB