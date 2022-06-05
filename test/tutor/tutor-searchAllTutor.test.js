import chai, { expect } from 'chai';
//import { expect } from "chai";
import searchAllTutors from "../../src/api/v1/components/tutor/services/searchAllTutors";
const assert = chai.assert;
describe('Feature Search All Tutor', ()=>{
    it('search all tutor with sortby null',  () => {
      const option={
        search: '',
        skip: '',
        limit: '',
        query: '',
        sortBy: null,
        order: '',
      }
      const result = searchAllTutors(option);
      expect(result).to.not.have.property('sortBy');
  });

  it('search all tutor with null',  () => {
    const option= null;
    const result = searchAllTutors(option);
    expect(result).to.not.have.property('sortBy');
  });

  it('search all tutor',  () => {
    const option={
      search: '',
      skip: '',
      limit: '',
      query: '',
      sortBy: '',
      order: '',
    }
    const result = searchAllTutors(option);
  });

  it('',  () => {
    const option={
      search: '',
      skip: '',
      limit: '',
      query: '',
      sortBy: '',
      order: '',
    }
    const result = searchAllTutors(option);
  });

  it('',  () => {
    const option={
      search: '',
      skip: '',
      limit: '',
      query: '',
      sortBy: '',
      order: '',
    }
    const result = searchAllTutors(option);
  });
})