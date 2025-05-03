export default function page({ params }) {

    let lang = ["nextjs","js","cpp","java"]
   
    if(lang.includes(params.slug)){
        return <div>This is page of {params.slug}</div>
    }
    else{
        return <div>Page not found</div>
    }
}