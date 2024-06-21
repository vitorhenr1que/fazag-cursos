import { NextResponse } from 'next/server';
import { api } from '../../../services/api';




export async function POST(request: Request) {

    const { nome, email, tel, courseOne, courseTwo, courseTree } = await request.json()

    console.log(nome, email, tel, courseOne, courseTwo, courseTree)
    
    console.log('CHegou na requisição!!')

    await api.post('teste-vocacional/create', {
        nome,
        email,
        tel,
        courseOne,
        courseTwo,
        courseTree
    })

       return NextResponse.json({nome, email, tel, courseOne, courseTwo, courseTree})
}