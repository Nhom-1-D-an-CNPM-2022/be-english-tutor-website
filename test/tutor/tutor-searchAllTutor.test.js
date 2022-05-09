
import { expect } from "chai";
import searchAllTutors from "../../src/api/v1/components/tutor/services/searchAllTutors";

describe('search all tutor with properties null', async ()=>{
    const option={
        search: '',
        skip: '',
        limit: '',
        query: '',
        sortBy: '',
        order: '',
      }
    const resulttesting = await searchAllTutors(option);
    expect(resulttesting).to.be.undefined;
})