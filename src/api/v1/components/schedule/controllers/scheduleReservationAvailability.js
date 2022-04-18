import Schedule from "../model";
import parseErrorIntoMessage from "../../../helpers/parseErrorIntoMessage";

const scheduleReservationAvailability = async (req, res) => {
    const { user } = req;
    //tutorId for test (Instead using user._id)
    const { tutorId, scheduleTime} = req.body;
    
    try {
        for(let time of scheduleTime) {
            await new Schedule({
                tutor: tutorId ,
                startTime: time,
                interval: 15,
            }).save();
        }

        res.status(200).send("Schedule reservation successfully");
    } catch (error) {
      res.status(400).send(parseErrorIntoMessage(error));
    }
  };
  
  export default scheduleReservationAvailability;
