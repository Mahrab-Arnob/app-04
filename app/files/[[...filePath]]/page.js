

export default async function name({params}) {
    const{filePath} = await params
    return (

    <div className="flex justify-center items-center">
      file <i> {filePath?.join('/')} </i>
    </div>
  )
} 

 
