export default class GetTutorsByCondition{
    constructor(number = 0, page = 0, filter = {}) {
        this.number = number;
        this.page = page;
        this.filter = filter;
    }
}