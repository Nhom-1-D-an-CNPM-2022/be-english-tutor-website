import GetUsersByCondition from "./getUsersByCondition.dto";

export default class GetTypeTutor extends GetUsersByCondition {
    constructor(number, page) {
        super(number,
            page,
            {
                type: "tutor",
            });
    }
}