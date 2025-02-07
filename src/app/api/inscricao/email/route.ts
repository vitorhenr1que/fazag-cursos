import { NextResponse } from 'next/server';
import { api } from '../../../services/api';
import juice from 'juice';



export async function POST(request: Request) {

    const { nome, email, tel, course, ingresso, conheceu, city, text } = await request.json()

    console.log(nome, email, tel, course, ingresso, conheceu, city)
    const htmlInline = juice(text); //converter as classes ql-align-text em inline
    console.log(htmlInline)
    console.log('Chegou na requisição INSCRIÇÃO > EMAIL !!')

    await api.post('inscricao/sendmail', {
        nome,
        email,
        tel,
        course,
        ingresso,
        conheceu,
        city,
        htmlInline
    })

       return NextResponse.json({nome, email, tel, course, ingresso, conheceu, city})
}