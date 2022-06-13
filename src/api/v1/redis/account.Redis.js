import { createClient } from "redis";
import updateUser from "../components/users/controllers/updateUser";

const client = createClient();
await client.connect();
client.subscribe("adminSystemAccount", async (message) => {
  const body = JSON.parse(message);
  const status = await updateUser(body);

  console.log("Status Update Account", status);
});
