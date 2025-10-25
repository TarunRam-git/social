"use client";
import Bbox from "@/components/Bbox";
import Card from "@/components/Card";
import Searchbox from "@/components/Searchbox";
import Ybox from "@/components/Ybox";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { posts } from "@/lib/types";

export default function Home() {
  const [post, setPosts] = useState<posts[]>([]);
  const {data : session,status} = useSession();
  const [query, setQuery] = useState("");
  useEffect(()=>{
    async function fetchposts(){
      try{
        const res=await fetch('/api/posts')
        const data=await res.json()
        setPosts(data);
      }
      catch(error){
        console.error(error);
        
      }

    }
    fetchposts();
  }, []);

  return (
    <div className="bg-white">
      <div className="bg-[#EE2B69] h-[40vh] flex flex-col items-center gap-3 p-15"> 
         <Ybox/> 
         <Bbox />
         <h1 className="text-xl">Submit your ideas or be lost!</h1>
         <Searchbox lol={query} hehelol={setQuery}/>
         {query}

      </div>
      <div>
        <h1 className="text-black font-bold text-3xl mt-10 px-8">Recommended startups</h1>
      </div>
      <div className="bg-white min-h-screen mt-7 px-10 gap-10 grid grid-cols-3 py-5 lg:grid-cols-4 ">
        {post.map((poster)=>(
          <Card
         key={poster._id}
         
         createdat = {poster.createdat}
         views = {poster.views}
         user = {poster.user}
         title = {poster.title}
         desc = {poster.desc}
         position = {poster.position}
         image = {poster.image}
         avatar = {poster.avatar}
        />
        ))}
        
      </div>
    </div>
  );
}


