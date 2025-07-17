import { json } from "stream/consumers"
import { books } from "@/app/libs/books"

export async function GET() {
    
    return new Response(JSON.stringify(books),{
        status: 200,
        headers: {'Content-Type' : 'application/json'}
    })
}

export async function POST(req: Request){
    const body = await req.json()
    const {name, price} = body
    const newBook = {id: Date.now(), name , price}
    books.push(newBook)

    return new Response(JSON.stringify(newBook),{
        status: 200,
        headers: {'Content-Type' : 'application/json'}
    })
}
