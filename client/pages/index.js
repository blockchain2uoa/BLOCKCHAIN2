import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/button/Button'

export default function Home() {
  return (
    <div className="bg-green">
      <div className="bg-red">
        <form className = "uploadFile" action="/upload" method="POST" encType="multipart/form-data">
            <input className = "inputPDF" type="file" name="file" multiple/> 
            <Button text="Upload"/>
        </form>
        
      </div>
    </div>
  )
}
