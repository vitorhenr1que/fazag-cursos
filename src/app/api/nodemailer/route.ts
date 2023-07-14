import { NextResponse } from 'next/server';
import { mailOptions } from '../../services/nodemailer'
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

 /*if(req.method === 'POST'){

    
    const data = req.body
    const course = data.course[0].toUpperCase() + data.course.substring(1)
    const courseLowerCase = data.course.toLowerCase()
    const {from} = mailOptios
    console.log('from', from)
    console.log('course', course)
    console.log('lowerCase', courseLowerCase)
    console.log('dataEmail: ', data.email)
    try {
        await transporter.sendMail({
           from: from,
           to: data.email,
           text: '',
           subject: `🗣️ FAZAG | Matriz Curricular do curso de ${course}`,
           html: `<div style=" padding: 50px 10px;
           background: #121212;
           font-family:'Open Sans','Roboto','Helvetica Neue','Helvetica','Arial', sans-serif;
           color: #757575;">
               <div style="max-width: 600px;
               margin: auto;
           padding: 15px 30px 25px 30px;
           background: white;
           border-radius: 4px;
           text-align: justify;">
               <div style="
           display: block;
           text-align: center;
           margin-top: 1rem;
           margin-bottom: 1rem;">
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKVUkhi1d74Fvy0zYLwNECJ_RZRyL17BqVc7WkNElKsKTK3Dx05TXoldW6hw8tdsxxIyg&usqp=CAU" alt="Logo da Fazag" width=150px />
           
               <h1>Matriz Curricular | ${course}</h1>
               </div>
               
               <p>Olá<strong> ${data.nome}</strong>, baixe a matriz do seu curso abaixo:</p>
               <p>Estamos à disposição para esclarecer qualquer dúvida relacionada à faculdade ou ao curso.</p>
               <a href="https://fazag.edu.br/static/matrizes/${courseLowerCase}.pdf" style="
                   cursor: pointer;
                   text-decoration: none;
                   text-align: center;
                   background: #479eff;
                   padding: 1rem;
                   border-radius: 50px;
                   width: 45%;
                   color: #fff;
                   font-weight: 600;
                   font-size: 1rem;
                   transition: .2s;
                   border: none;
               ">Baixar matriz curricular</a>
           
               </div>
           
               <div>
           
               </div>
           </div>`
           
        })
        return NextResponse.json({success: true})
       }catch(err){
           console.log(err)
           return NextResponse.json({message: err})
       }*/

       return NextResponse.json({nome, email, tel, course})
}