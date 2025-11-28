import mongoose from "mongoose";

const mongoURL = process.env.DB_URL;

const connection = {
    isConnected: null,
};

async function connect() {
    if (connection.isConnected) {
        console.log("already connected");
        return
    }
    if (mongoose.connections.length > 0) {
        connection.isConnected = mongoose.connections[0].readyState;
        if (connection.isConnected === 1) {
            console.log("use privious connection");
            return
        }
        await mongoose.disconnect();
    }
    const db = await mongoose.connect(mongoURL, {
        connectTimeoutMS: 30000,  //30 seconds
        socketTimeoutMS: 30000,  // 30 seconds
    });

    console.log("new connections");
}

async function disconnect() {
    if (connection.isConnected) {
        if (process.env.NODE_ENV === "production") {
            await mongoose.disconnect();
            connection.isConnected = false;
        } else {
            console.log("not disConnected");
        }
    }
}
const db = {connect,disconnect}
export default db;