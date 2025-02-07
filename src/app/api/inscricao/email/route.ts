import { NextResponse } from 'next/server';
import { api } from '../../../services/api';
import juice from 'juice';
import "react-quill/dist/quill.snow.css"; // Estilos do Quill


export async function POST(request: Request) {

    const { nome, email, tel, course, ingresso, conheceu, city, text } = await request.json()

    console.log(nome, email, tel, course, ingresso, conheceu, city)
    const htmlInline = juice(text); //converter as classes ql-align-text em inline
    if(htmlInline === undefined){
        return Response.json({Erro: 'HTMLinLine é UNDEFINED!!'}, {status: 505})
    }
    console.log('TESTE HTML INLINE: ', htmlInline)
    console.log('Chegou na requisição INSCRIÇÃO > EMAIL !!')

    await api.post('inscricao/sendmail', {
        nome,
        email,
        tel,
        course,
        ingresso,
        conheceu,
        city,
        text: htmlInline
    })

       return NextResponse.json({nome, email, tel, course, ingresso, conheceu, city})
}