import React from 'react'
import Navbar from '../../Components/navbar'
import './UploadPage.css'
const UploadPage = () => {
  return (
    <div>
        <Navbar/>
        <section >
            <section className='upload-paper'>
                <section class="upload-paper-head">
                    <h1>Upload Research Paper</h1>
                    <p>Leverage artificial intelligence to categorize your academic work. Simply<br/> upload a PDF to begin the analysis.</p>
                </section>

                <section className='DAD' >
                    <div className='drag-and-drop'>
                        <div className='inner-text'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#137FEC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-upload-icon lucide-cloud-upload"><path d="M12 13v8"/><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="m8 17 4-4 4 4"/></svg>
                            <h2>Drag & drop your PDF here</h2>
                            <p>Max file size: 25MB • PDF Format Only</p>
                            <button>Browse Files</button>
                        </div>

                        <div>
                            <div  className='file-name'>
                                <div className='left-part'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#137FEC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text-icon lucide-file-text"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                
                                <div>
                                    <h2>Attention_Is_All_You_Need.pdf</h2>
                                    <p>2.4 MB</p>
                                </div>

                                </div>
                                <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#707070" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-icon lucide-trash"><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button>
                            </div>
                        </div>

                        <button className='analyze'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-spline-icon lucide-chart-spline"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7"/></svg>
                            Upoad and Analyze
                        </button>

                    </div>
                </section>
            </section>
        </section>
    </div>
  )
}

export default UploadPage