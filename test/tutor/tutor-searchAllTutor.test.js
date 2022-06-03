import chai, { expect } from 'chai';
//import { expect } from "chai";
import searchAllTutors from "../../src/api/v1/components/tutor/services/searchAllTutors";
const assert = chai.assert;
describe('Feature Search All Tutor', ()=>{
    it('search all tutor with properties null',  () => {
      const option={
        search: '',
        skip: '',
        limit: '',
        query: '',
        sortBy: '',
        order: '',
      }
      assert.throws(() =>  searchAllTutors(option), Error, "Timeout of 20000ms exceeded");
  });

  it('search all tutor with properties null',  () => {
    const option= null;
    const result = searchAllTutors(option);
    expect(result).to.not.have.property('sortBy');
  });
  
})