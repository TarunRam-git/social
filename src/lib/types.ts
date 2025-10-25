import { Types } from "mongoose";
export interface posts {
    _id? : string;
    createdat : Date | string;
    views: number;
    user: string;
    title: string;
    desc: string;
    position: string;
    image: string;
    avatar: string;
};
