import Head from 'next/head'
import Button from '../components/button/Button'

export default function Home() {
  return (
    <div className="bg-red">
      <Head>
        <title>Blockchain2</title>
      </Head>

      <div className="">
        
        <form className = "uploadFile" action="/upload" method="POST" encType="multipart/form-data">
            <input className = "inputPDF" type="file" name="file" multiple/> 
            <Button text="Verify" className="m-2"/>
        </form>
        
     </div>

    </div>
  )
}
