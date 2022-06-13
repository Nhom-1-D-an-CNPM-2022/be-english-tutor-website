import UserService from "../user/user.service";
import GetOneById from "../user/dto/getOneById.dto";
import getNumberOfDays from "./helpers/getNumberOfDays";
import getRating from "./helpers/getRating";

export default class Tutor {
    constructor() {
        this._id = undefined;
        this.userId = undefined;
        this.displayName = undefined;
        this.hometown = undefined;
        this.dateOfBirth = undefined;
        this.videoIntroduction = undefined;
        this.introduction = undefined;
        this.teachingStyles = undefined;
        this.aboutMe = undefined;
        this.languages = undefined;
        this.experience = undefined;
        this.education = undefined;
        this.profession = undefined;
        this.certificates = undefined;
        this.profilePicture = undefined;
        this.interests = undefined;
        this.motivation = undefined;
        this.source = undefined;
        this.otherPlatforms = undefined;
        this.demoLesson = undefined;
        this.isSubmitted = undefined;
        this.reviewing = undefined;
        this.status = undefined;
    }

    agreegateUser = async () => {
        const getOneById = new GetOneById(this.userId);
        this.userId = await UserService.getOne(getOneById);
    }

    setAgeOfCount = () => {
        const today = new Date();
        const currentDay =
            today.getMonth() +
            1 +
            "/" +
            today.getDate() +
            "/" +
            today.getFullYear();

        this.ageOfAccount = getNumberOfDays(this.userId?.createdAt, currentDay);
    }

    setRating = () => {
        this.rating = getRating(this.reviewing);
    }

    static mappingFromTutorRepository = async (tutorRepo) => {
        const tutor = new Tutor();

        const keys = Object.keys(user);

        keys.forEach(key => {
            tutor[key] = tutorRepo.key;
        })

        await tutor.agreegateUser();
        tutor.setAgeOfCount();
        tutor.setRating();

        return tutor;
    }

    static toDTO = tutor => {
        return {
            ...tutor._doc,
            profilePicture: tutor.profilePicture ? tutor.profilePicture.url : "",
            videoIntroduction: tutor.videoIntroduction
                ? tutor.videoIntroduction.url
                : "",
            demoLesson: tutor.demoLesson ? tutor.demoLesson.url : "",
        };
    };
}