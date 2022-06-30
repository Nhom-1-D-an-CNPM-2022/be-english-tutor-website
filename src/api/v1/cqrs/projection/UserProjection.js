import { AbstractProjection } from "node-cqrs";

class UserProjection extends AbstractProjection {
  static get handles() {
    return ["userCreated"];
  }

  userCreated({ aggregateId, payload }) {
    console.log(aggregateId, payload);
  }
}

export default UserProjection;
