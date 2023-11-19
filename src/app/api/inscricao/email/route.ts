import { NextResponse } from 'next/server';
import { api } from '../../../services/api';




export async function POST(request: Request) {

    const { nome, email, tel, course, ingresso, conheceu, city, text } = await request.json()

    console.log(nome, email, tel, course, ingresso, conheceu, city)

    
    console.log('Chegou na requisição INSCRIÇÃO > EMAIL !!')

    await api.post('inscricao/sendmail', {
        nome,
        email,
        tel,
        course,
        ingresso,
        conheceu,
        city,
        text
    })

       return NextResponse.json({nome, email, tel, course, ingresso, conheceu, city})
}