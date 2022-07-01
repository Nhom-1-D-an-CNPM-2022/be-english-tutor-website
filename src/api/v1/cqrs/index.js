import { ContainerBuilder, EventStore } from "node-cqrs";
import dotenv from "dotenv";
import TutorAggregate from "./domain/TutorAggregate";
import MongoEventStorage from "./MongoEventStorage/MongoEventStorage";
import TutorProjection from "./projection/TutorProjection";
import tutorProfileReadModelRepository from "./repository/tutorProfileReadModel.repository";
import tutorProfileWriteModelRepository from "./repository/tutorProfileWriteModel.repository";
dotenv.config({ path: "./src/api/v1/configs/.env" });

function buildCqrsContainer() {
  const builder = new ContainerBuilder();
  builder.registerInstance(
    {
      connectionString: process.env.MONGODB_URI,
    },
    "mongoConfig",
  );
  builder.register(MongoEventStorage, "storage");
  builder.register(EventStore, "eventStore");
  builder.registerAggregate(TutorAggregate);
  builder.registerInstance(
    tutorProfileReadModelRepository,
    "tutorProfileReadModelRepository",
  );
  builder.registerInstance(
    tutorProfileWriteModelRepository,
    "tutorProfileWriteModelRepository",
  );
  builder.registerProjection(TutorProjection, "tutor");

  return builder.container();
}

const container = buildCqrsContainer();

container.tutor;

export default container;
