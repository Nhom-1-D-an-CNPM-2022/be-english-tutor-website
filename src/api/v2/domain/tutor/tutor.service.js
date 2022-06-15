import Tutor from "./tutor.entity";
import TutorDao from "../../infrac/repository/tutor/tutor.dao";
import UserService from "../user/user.service";
import uploadImg from "../../infrac/cloundinary/uploadImage";


export default class TutorService {
    static createNewTutor = async (registerByEmail) => {
        try {
            const newUser = await UserService.registerByEmail(registerByEmail);

            const newTutor = await new TutorDao().save({ userId: newUser._id });

            return Tutor.mappingFromTutorRepository(newTutor);
        }
        catch (err) {
            // Error handling logic should go here
            throw new Error(`Create new tutor failed: ${err.message}`);
        }
    }

    static getOne = async (getOne) => {
        try {
            const foundTutor = await new TutorDao().findOne(getOne);
            if (foundTutor == null) {
                throw new Error('Tutor is not exist');
            }

            return Tutor.mappingFromTutorRepository(foundTutor);
        }
        catch (err) {
            // Error handling logic should go here
            throw new Error(`Get failed: ${err.message}`);
        }
    }

    static getTutors = async (getTutors) => {
        try {
            const {
                number,
                page,
                filter
            } = getTutors;
            const listTutors = await new TutorDao().queryByCondition(number, page, filter);

            return listTutors.map(async (tutor) => await Tutor.mappingFromTutorRepository(tutor));
        }
        catch (err) {
            // Error handling logic should go here
            throw new Error(`Get failed: ${err.message}`);
        }
    }

    static getOneByIdAndUpdate = async (_id, updateTutor) => {
        try {
            const updatedTutor = await new TutorDao().getOneAndUpdate({ _id }, updateTutor);

            return Tutor.mappingFromUserRepository(updatedTutor);
        }
        catch (err) {
            // Error handling logic should go here
            throw new Error(`Update tutor failed: ${err.message}`);
        }
    }

    static getOneByUserIDAndUpdate = async (userId, updateTutor) => {
        try {
            const updatedTutor = await new TutorDao().getOneAndUpdate({ userId }, updateTutor);

            return Tutor.mappingFromUserRepository(updatedTutor);
        }
        catch (err) {
            // Error handling logic should go here
            throw new Error(`Update tutor failed: ${err.message}`);
        }
    }

    static getOneByUserIDAndUpdateCertificates = async (userId, certificates) => {
        try {
            //Mang certificates duoc upload len cloudinary thanh mang link anh
            const updatedCertificates = await certificates.map(async (certificate) => {
                return await uploadImg(certificate.URLFile);
            });

            return await Promise.all(updatedCertificates)
                .then(async (links) => {
                    let certificateUpdated = [];
                    links.map((link, index) => {
                        certificateUpdated.push({
                            url: link,
                            type: certificates[index].type,
                            fileName: certificates[index].fileName,
                        });
                    });

                    const update = { certificates: certificateUpdated };
                    await new TutorDao().getOneAndUpdate({userId}, update);

                    return certificateUpdated;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                });
        }
        catch (err) {
            // Error handling logic should go here
            throw new Error(`Update certificates failed: ${err.message}`);
        }
    }

    static getOneByUserIDAndUpdateProfileMedia = async (userId, mediaType, profileMedia) => {
        try {
            const updatedTutor = await TutorService.getOneByUserIDAndUpdate(user._id, {
                [mediaType]: profileMedia,
              });

            if (updatedTutor[mediaType]) {
                deleteProfileMedia(mediaType, updatedTutor[mediaType].publicId);
            }
        }
        catch (err) {
            // Error handling logic should go here
            throw new Error(`Update ProfileMedia failed: ${err.message}`);
        }
    }

    static addReviewing = async (_id, review) => {
        try {
            const tutor = await new TutorDao().findById(_id);

            const newReviewing = tutor.reviewing.push(review);
            const updatedTutor = await TutorService.getOneByIdAndUpdate(_id, {
                reviewing: newReviewing,
            })
            return updatedTutor
        }
        catch (err) {
            // Error handling logic should go here
            throw new Error(`Add reviewing failed: ${err.message}`);
        }
    }
}