//when we go to /about middleware autometically send to the root page 
import { NextResponse } from "next/server";
//middleware executes before respnse is send to the client machine

export function middleware(request){
    // return NextResponse.redirect(new URL('/',request.url))
    return NextResponse.json({message:'hello you are hacked!!!'})
}

// export const config={
//     matcher: '/About2/:path'
// }

//this is another example of middleware

// import { NextResponse } from "next/server";

// export function middleware(request){
//     if(request.nextUrl.pathname.startsWith('/About')){
//         return NextResponse.rewrite(new URL('/About2',request.url))
//     }
// }