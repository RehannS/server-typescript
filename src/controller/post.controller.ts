import { eq } from 'drizzle-orm';
import db from '../db/index'
import { notes } from '../db/schema';
import { Request, Response } from 'express';
import {v4 as uuidv4} from 'uuid';


const addPost=async (req:Request,res:Response)=>{
try {
    const {title,content}= req.body;
    let postData={
        title,
        content,
        id:uuidv4(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }
    // console.log(db)
    const result = await db.insert(notes).values(postData).returning();
    if (result.length === 0) {
        throw new Error('Post creation failed');
    }
    return res
    .status(201)
    .json({
        message: 'Post created successfully',
        post: result[0]
    });
} catch (error) {
    console.error('Error adding post:', error);
    throw error;
}
}

const getPosts =async (req:Request,res:Response) =>{
    try {
        const posts=await db.select().from(notes);
        return res
        .status(200)
        .json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}

const getPostById=async(req:Request,res:Response)=>{
    try {
        const id=req.params.id;
        const post=await db.select().from(notes).where(eq(notes.id,id))
        if (post.length === 0) {
            throw new Error('Post not found');
        }
        return res.status(200).json(post[0]);
    } catch (error) {
        console.error('Error fetching post by ID:', error);
        throw error;
    }
}


const updatePost=async(req:Request,res:Response)=>{
    try {
        const id=req.params.id;
        const {title,content}=req.body;
        const result = await db.update(notes).set({title,content,updatedAt:new Date().toISOString()}).where(eq(notes.id, id)).returning();
        if (result.length === 0) {
            throw new Error('Post update failed or post not found');
        }
        return res.status(200).json(result[0]);
    } catch (error) {
        console.error('Error updating post:', error);
        throw error;
    }
}

const deletePost=async(req:Request,res:Response)=>{
    try {
        const id=req.params.id;
        const result = await db.delete(notes).where(eq(notes.id, id)).returning();
        if (result.length === 0) {
            throw new Error('Post deletion failed or post not found');
        }
        return res.status(200).json(result[0]);
    } catch (error) {
        console.error('Error deleting post:', error);
        throw error;
    }
}


export default{
    addPost,
    getPosts,
    getPostById,
    updatePost,
    deletePost
}