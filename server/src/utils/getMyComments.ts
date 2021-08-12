import { ObjectId } from "mongoose";

export const getMyComments = (document: any, userId: ObjectId) => {
    return document.comments
    ?.filter((comment: any) => comment.userId?.toString() === userId.toString())
    .map(({_id}: any) => _id);
}
