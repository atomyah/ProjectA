export interface Comments {
    id?: string; // 追加
    content:string;
    initial:string;
    user: {
        name: string;
    },
    edit_flag?: boolean; // 追加
}
