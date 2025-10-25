"use server";
import { connectToDB } from '@/lib/mongodb';
import { NextResponse } from 'next/server';



import { posts } from '@/lib/types';

export async function Submit(title: string,
  desc: string,
  image: string,
  ){
    const createdat="2025-10-17T19:45:00Z";
    const views= 200;
    const user="Tarun"
    const avatar="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR2U0d6OfHKypBGB5w9k4c5lkkxiw8aeIb0-EOh0E-UV37Cnmy8ZxdcUedVeXPWXtEl-8JbtoWQuLs7nrBe0eT3gk_JNe4-B6mz4UtWjQ"
    const position="Peasant"
    try{
        const {db} = await connectToDB();
        const newidea : posts = {
            title, desc, image, createdat,views,user,avatar,position
        };
        await db.collection("Posts").insertOne(newidea)
    }
    
    catch (error) {
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}