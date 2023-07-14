import { NextResponse } from "next/server"

export async function GET(request: Request){
    
    const id = 'test'
    NextResponse.json({api: "https://api.github.com/repos/octocat/Spoon-Knife/issues"})
}