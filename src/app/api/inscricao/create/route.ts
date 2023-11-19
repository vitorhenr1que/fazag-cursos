import { NextResponse } from 'next/server';
import { api } from '../../../services/api';




export async function POST(request: Request) {

    const { nome, email, tel, course, ingresso, conheceu, city } = await request.json()


    console.log ('DENTRO DA REQUISIÇÃO', nome, email, tel, course, ingresso, conheceu, city)
    
    console.log('Chegou na requisição INSCRIÇÃO > CREATE !!')

    await api.post('inscricao/create', {
        nome,
        email,
        tel,
        course,
        ingresso,
        conheceu,
        city
    })

       return NextResponse.json({nome, email, tel, course, ingresso, conheceu, city})
}