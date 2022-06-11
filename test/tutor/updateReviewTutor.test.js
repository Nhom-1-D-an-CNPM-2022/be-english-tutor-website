process.env.NODE_ENV = 'test';
import { expect } from "chai";
import { faker } from "@faker-js/faker";
import services from "../../src/api/v1/components/tutor/services";

import mongoose from "mongoose";


describe('Add a review', async () => {
    const _idTutor = mongoose.Types.ObjectId('62760145f15c06269949f488');
    const resulttesting1 = await services.getOne(_idTutor);
    it('Add a review with comment/rating', async () => {
        const userId = mongoose.Types.ObjectId('626cd912c4b924480fb8535b');
        const comment = faker.random.alpha(10);
        const rating = faker.datatype.number({ 'min': 0, 'max': 5 });

        await services.updateReviewing(_idTutor, userId, comment, rating);
        const resulttesting = await services.getOne(_idTutor);
        const lastItem = resulttesting.reviewing[resulttesting.reviewing.length - 1];
        expect(lastItem).to.include({ userId: userId, comment: comment, rating: rating });

    })






})

