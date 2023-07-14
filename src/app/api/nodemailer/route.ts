import { NextResponse } from 'next/server';
import { api } from '../../services/api';




export async function POST(request: Request) {

    const { nome, email, tel, course } = await request.json()

    console.log(nome, email, tel, course)
    
    console.log('CHegou na requisição!!')

    await api.post('leads/leadsmail', {
        nome,
        email,
        tel,
        course
    })

       return NextResponse.json({nome, email, tel, course})
}