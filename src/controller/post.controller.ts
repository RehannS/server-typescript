import db from '../db/index'

interface Post {
    id?: number;
    title: string;
    content: string;
    authorId: number;
    createdAt?: Date;
    updatedAt?: Date;
}


const addPost=async (postData: Post)=>{
try {
    const result = await db.insert('posts').values(postData).returning('*');
    return result[0]; // Assuming you want to return the newly created post
} catch (error) {
    console.error('Error adding post:', error);
    throw error;
}
}

export {
    addPost
}