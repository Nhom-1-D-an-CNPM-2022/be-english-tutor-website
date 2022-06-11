import tutorRoutes from "../components/tutor/routes";
import userRoutes from "../components/users/routes";
import scheduleRoutes from "../components/schedule/routes";
import bookingRoutes from "../components/booking/routes";
import notificationRoutes from "../components/notification/routes";
import userFavoriteRoutes from "../components/user_favorites/routes";
import messageRoutes from "../components/message/routes";

import verifyToken from "../middlewares/verifyToken";

const startRoutes = (app) => {
  // routes
  app.use("/users", userRoutes);
  app.use("/tutors", verifyToken, tutorRoutes);
  app.use("/schedule", verifyToken, scheduleRoutes);
  app.use("/booking", verifyToken, bookingRoutes);
  app.use("/notification", verifyToken, notificationRoutes);
  app.use("/favorites", userFavoriteRoutes);
  app.use("/messages", messageRoutes);

  //404
  app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
  });
  //500 - Error handler
  app.use((err, req, res, next) => {
    res.status(err.status || 500).send({
      message: err.message,
      status: err.status || 500,
    });
  });
};

export default startRoutes;
