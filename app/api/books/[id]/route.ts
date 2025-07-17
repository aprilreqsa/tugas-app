import { books } from "@/app/libs/books"
import { NextResponse } from "next/server"
export async function DELETE(req: Request,context: {params: {id: string}}){
    const id = Number(context.params.id)

    const index = books.findIndex(book => book.id === id)
    if(index === 1){
        return new Response(
            JSON.stringify({message: "Buku tidak ditemukan"}),
            {
                status: 404,
                headers: {"Content-Type": "application/json"}
            }
        )
    }
    const deletedBook = books.splice(index, 1)[0]
    return new Response(JSON.stringify(deletedBook), {
        status: 200,
        headers: {'Content-Type': 'application/json'}
    })
}

export async function PATCH(req: Request, context: {params: {id: string}}){
    const id = Number(context.params.id)
    const body = await req.json()
    const {name, price} = body

    const index = books.findIndex((book) => book.id === id)
    if(index === -1) {
        return NextResponse.json({message: "Buku tidak ditemukan"}, {
            status: 404
        })
    }
    books[index] = {...books[index], name, price}
    return NextResponse.json(books[index], {status: 200})
}