
import prisma from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(){
    const user = await prisma.user.findMany()
    return NextResponse.json(user)
}
export async function POST(req: Request){
    const body = await req.json()
    const {name,email} = body
    const user = await prisma.user.create({
        data: {
            name,
            email
        }
    })
    return NextResponse.json(user)
}
