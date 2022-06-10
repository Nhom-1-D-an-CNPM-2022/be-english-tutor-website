import chai from 'chai';
//import { expect } from "chai";
import searchAllTutors from "../../src/api/v1/components/tutor/services/searchAllTutors";
const assert = chai.assert;
describe('Feature Search All Tutor', ()=>{
    it ('search all tutor with properties null', () => {
      const option={
        search: '',
        skip: '',
        limit: '',
        query: '',
        sortBy: '',
        order: '',
      }
      return searchAllTutors(option).then(result => {
        assert.fail();
      })
    });

    it ('search all tutor with  null', () => {
      const option=null;
      return searchAllTutors(option).then(result => {
        assert.fail();
      })
    });
})