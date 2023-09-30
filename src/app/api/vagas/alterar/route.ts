import { NextResponse } from "next/server";
import { api } from "../../../services/api";

export async function POST(request: Request) {
    const { course, value } = await request.json()

    await api.post('vagas/alterar', {
        course,
        value
    })

    return NextResponse.json({course, value})
}