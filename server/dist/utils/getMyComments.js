"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMyComments = void 0;
const getMyComments = (document, userId) => {
    var _a;
    return (_a = document.comments) === null || _a === void 0 ? void 0 : _a.filter((comment) => { var _a; return ((_a = comment.userId) === null || _a === void 0 ? void 0 : _a.toString()) === userId.toString(); }).map(({ _id }) => _id);
};
exports.getMyComments = getMyComments;
//# sourceMappingURL=getMyComments.js.map