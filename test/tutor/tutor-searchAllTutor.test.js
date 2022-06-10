process.env.NODE_ENV = 'test';
import chai, { expect } from 'chai';
//import { expect } from "chai";
import searchAllTutors from "../../src/api/v1/components/tutor/services/searchAllTutors";
import parseSearchString from '../../src/api/v1/helpers/queries/parseSearchString';
import parseSkipAndLimit from '../../src/api/v1/helpers/queries/parseSkipAndLimit';
import parseSortQuery from '../../src/api/v1/helpers/queries/parseSortQuery';
const assert = chai.assert;

describe('parseSearchString', ()=>{
  it("ParseSortQuery true",  () => {
   
    const result = parseSearchString({
      searchString: 'Last+First',
      keys: ['fullname'],
      separator: '+',
    })
    expect(result).to.not.have.property('id');
    expect(result).to.be.a('object');
  });
})

describe('parseSkipAndLimit', ()=>{
  it("parseSkipAndLimit with null",  () => {
   
    const result = parseSkipAndLimit(null)
    expect(result).to.not.have.property('id');
    expect(result).to.be.a('object');
  });
  
})

describe('ParseSortQuery', ()=>{
  it('ParseSortQuery with null',  () => {
   
    const result = parseSortQuery(null, null)
    expect(result).to.not.have.property('id');
    expect(result).not.to.be.a('string');
  });

  it('ParseSortQuery with undifined',  () => {
   
    const result = parseSortQuery('', '')
    expect(result).to.not.have.property('id');
    expect(result).not.to.be.a('string');
  });
})

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
    expect(result).to.not.have.property('id');
    expect(result).not.to.be.a('string');
    expect(result).not.to.be.a('object');
});

it('search all tutor with null',  () => {
  const option= null;
  const result = searchAllTutors(option);
  expect(result).to.not.have.property('id');
  expect(result).not.to.be.a('string');
  expect(result).not.to.be.a('object');
});
})


