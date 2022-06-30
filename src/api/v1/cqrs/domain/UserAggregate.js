import { AbstractAggregate } from "node-cqrs";

class UserAggregate extends AbstractAggregate {
  static get handles() {
    return ["createUser"];
  }

  constructor({ id, events }) {
    super({
      id,
      events,
    });
  }

  createUser(commandPayload) {
    const { username, password } = commandPayload;

    this.emit("userCreated", {
      username,
      passwordHash: password,
    });
  }
}

export default UserAggregate;
