process.env.NODE_ENV = 'test';
import { expect } from "chai";
import {faker} from "@faker-js/faker";
import services from "../../src/api/v1/components/tutor/services";

import mongoose from "mongoose";


describe('update tutor-profile', async () => {
    const _id = mongoose.Types.ObjectId('62760145f15c06269949f488');
    it('update tutor-profile with empty information', async () => {
        const profileInit = await services.getOne(_id);
        await services.updateProfileById(_id, null);
        const resulttesting = await services.getOne(_id);
        console.log(resulttesting);
        expect(resulttesting).to.deep.include(profileInit);
    })

    it('update tutor-profile with informations', async () =>{
        const updateProfile = {
            displayName: String(faker.name.findName()),
            hometown: String(faker.address.country()),
            dateOfBirth: new Date(faker.date.past()).toISOString(),
            introduction: String(faker.helpers.arrayElement()),
            teachingStyles: String(faker.helpers.arrayElement()),
            aboutMe: String(faker.helpers.arrayElement()),
            languages: [
                {
                    language: "English",
                    dialect: String(faker.address.country())
                },
                {
                    language: "English",
                    dialect: String(faker.address.country())
                }
            ]
        }

        const shouldProfile ={
            _id: _id,
            displayName: updateProfile.displayName,
            hometown: updateProfile.hometown,
            introduction: updateProfile.introduction,
            teachingStyles: updateProfile.teachingStyles,
            aboutMe: updateProfile.aboutMe,
            languages: updateProfile.languages
        }

        await services.updateProfileById(_id, updateProfile);
        const resulttesting = await services.getOne(_id);
        expect(resulttesting).to.deep.include(shouldProfile);
        expect(resulttesting.dateOfBirth.toISOString()).to.equal(updateProfile.dateOfBirth);
    })




})

