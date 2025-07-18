import prisma from "@/app/libs/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function DELETE(req: NextRequest,context: {params: {id: string}}){
    const id = context.params.id
    
    const deletedUser = await prisma.user.delete({
        where: {
            id
        }
    })
    return NextResponse.json(deletedUser)
}

export async function PATCH(req: NextRequest, context: {params: {id: string}}){
    const body = await req.json()
    const {name, email} = body
    const id = context.params.id
    const editedUser = await prisma.user.update({
        where: {
            id
        },
        data: {
            name,
            email
        }
    })
    return NextResponse.json(editedUser)
}