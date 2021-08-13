import { ObjectId } from "mongoose";

type CommentType = {
    _id: ObjectId,
    userId: ObjectId,
    text: string,
    userName: string,
    userPic: string
}

export const getMyComments = (document: any, userId: ObjectId) => {
    return document.comments
    ?.filter((comment: CommentType) => comment.userId?.toString() === userId.toString())
    .map(({_id}: { _id: ObjectId}) => _id);
}
