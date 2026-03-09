import React from 'react'
import './LandingPage.css'
import Navbar from '../../Components/navbar'
import logo from '../../assets/main_img.png'
import {Link} from 'react-router-dom'
// const navigate = useNavigate()

const LandingPage = () => {
  return (
    <>
    <Navbar/>
<section  className='main'>
    <section className='main-container flex'>
        <section className='main-left'>
          <p className='small-text'>AI-Powered Bibliometrics</p>
          <h1 className='heading'>
            Automatically Categorize<br/> Research Papers using AI
          </h1>
          <p className='footer-text'>Our advanced AI analyzes your research documents<br/> to instantly organize, tag, and categorize them into<br/> relevant academic fields with high precision.</p>
          <section className='main-buttons'>
            <Link className='upload flex' to={'/UploadPage'}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-up-icon lucide-file-up"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M12 12v6"/><path d="m15 15-3-3-3 3"/></svg>UPload Research Paper</Link>
          </section>
        </section>
        <section className='main-right'>
          <img src={logo}/>
        </section>
    </section>
</section>

    <section>
      <section className='secoud-container'>
        <section className='con-head'>
          <p className='p-color'>Platform Excellence</p>
          <h2 className='con-h2'>Streamline Your Research Workflow</h2>
          <p className='con-phara'>PaperAI uses state-of-the-art natural language processing to handle your entire <br/>bibliography effortlessly.</p>
        </section>
      

      <section className='con-foot flex'>
        <div className='card'>
            <div><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#137FEC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tag-icon lucide-tag"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/></svg></div>
            <h3>Smart Tagging</h3>
            <p>Automatically generate high-quality keywords and semantic tags based on the full paper content.</p>
        </div>
        <div className='card '>
             <div><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#137FEC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-open-icon lucide-folder-open"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"/></svg></div>
            <h3>Smart Tagging</h3>
            <p>Automatically generate high-quality keywords and semantic tags based on the full paper content.</p>
        </div>
        <div className='card '> 
           <div><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#137FEC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg></div>
            <h3>Smart Tagging</h3>
            <p>Automatically generate high-quality keywords and semantic tags based on the full paper content.</p>
        </div>
      </section>
      </section>
    </section>
    </>
  )
}

export default LandingPage