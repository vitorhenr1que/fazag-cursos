import { NextResponse } from "next/server";
import { api } from "../../../services/api";

export async function POST(request: Request) {
    const  course  = await request.json()

    console.log(course)

    const response = await api.post('vagas/vagas', {
        course
    } )



    return NextResponse.json(response.data)
}