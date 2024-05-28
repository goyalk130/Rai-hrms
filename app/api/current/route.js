import { getServerSession } from "next-auth"
import authOptions from "../auth/[...nextauth]/option"
import { NextResponse } from "next/server"

export const GET = async (req,res)=>{
    const session =await getServerSession(authOptions)
    return NextResponse.json(session)
}