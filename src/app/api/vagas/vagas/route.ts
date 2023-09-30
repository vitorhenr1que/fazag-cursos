import { NextResponse } from "next/server";
import { api } from "../../../services/api";

export async function POST(request: Request) {

    const response = await api.post('vagas/vagas', {
        administração: true
    })

    return NextResponse.json({response})
}