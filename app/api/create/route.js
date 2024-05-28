import connectDB from "@/databse/db";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import { getServerSession } from "next-auth";
import authOptions from "../auth/[...nextauth]/option";

export const POST = async (req, res) => {
    // const session =await getServerSession(authOptions)
    // if(session.role == "employee"){
    //     return NextResponse.json({success : false})
    // }
    const data = await req.json();
    console.log(data)
    await connectDB()
    try {
    let  user = await User.findOne({email:data.email})
    if(user){
        return  NextResponse.json({
            error:"user Alreday exists"
        })
    }
        const pass = await bcrypt.hash(data.password,10)
        user = await User.create({
            email:data.email,
            password:pass,
            username:data.username,
            name:data.name,
            salary:data.salary,
            role:data.role,
            position:data.position
        })
        
        return NextResponse.json(user)
    } catch (error) {
            return NextResponse.json({error:error})
    }   

};
