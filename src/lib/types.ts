import { ObjectId } from "mongodb";
export interface posts {
    _id? : ObjectId;
    createdat : Date | string;
    views: number;
    user: string;
    title: string;
    desc: string;
    position: string;
    image: string;
    avatar: string;
};
export interface user{
    username: string;
    position: string;
}