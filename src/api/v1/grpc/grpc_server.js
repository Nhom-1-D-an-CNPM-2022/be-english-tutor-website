import userServices from "../components/users/services/index.js";
import path from "path";
import { fileURLToPath } from "url";
import parseErrorIntoMessage from "../helpers/parseErrorIntoMessage";
import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROTO_PATH = __dirname + "\\user.proto";

const port = 5050;

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const user_proto = grpc.loadPackageDefinition(packageDefinition).user;

const updateAccount = async (call, res) => {
  const _id = call.request.userId;
  const isActive = call.request.isActive;
  try {
    const updatedUser = await userServices.getOneAndUpdate(
      { _id },
      { isActive }
    );

    if (updatedUser.message) {
      res({ message: "Failed" });
    } else {
      res(null, { message: "Success" });
    }
  } catch (err) {
    res(parseErrorIntoMessage(err));
  }
};
const sayHello = (call, res) => {
  res(null, {
    message: "Hello " + call.request.name,
  });
};
/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
function main() {
  const server = new grpc.Server();
  server.addService(user_proto.User.service, {
    sayHello: sayHello,
    updateAccount: updateAccount,
  });
  server.bindAsync(
    "0.0.0.0:8081",
    grpc.ServerCredentials.createInsecure(),
    () => {
      server.start();
    }
  );
}

// main();

export default main;
