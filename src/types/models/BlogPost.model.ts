import { User } from "./User.model";
import { Category } from "./Category.model";

export type BlogPost = {
    id: string;
    title: string;
    text: string;
    user: User;
    categoryId: Category[];
};