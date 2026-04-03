import React from 'react'
import Navbar from '../../Components/navbar'
import './ResultsPage.css'
const ResultsPage = () => {
  return (
    <div>
      <Navbar/>
      <section className='main_container'>
      <div className='project_analysis'>
        <p className='small'>Analysis</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        <p className='mid_text'>Attention Is All You Need</p>
      </div>
      <div className='project_details'>
        <h1>Attention Is All You Need</h1>
        <div className='paper_info'>
          <p>
            Vaswani et al
          </p> 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dot-icon lucide-dot"><circle cx="12.1" cy="12.1" r="1"/></svg>
          <p>
            2017
          </p>
          <p className='hilated_text'>
            Highly Cited
          </p>
        </div>

        <section className='Result-section'>
          <div className='left-section'>
            <div className='absrtact'>
                <div className='conbined-svgabstract'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text-icon lucide-file-text"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                  <h1>Abstract</h1>
                  </div>
                <p>
                  The dominant sequence transduction models are based on complex recurrent or convolutional neural networks that include an encoder and a decoder. The best performing models also connect the encoder and decoder through an attention mechanism. We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely. Experiments on two machine translation tasks show these models to be superior in quality while being more parallelizable and requiring significantly less time to train.
                </p>
            </div>

            <div className='extracted-kewords'>
              <h1><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-key-round-icon lucide-key-round"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"/><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"/></svg>Extracted Keywords</h1>
              <div className='keywords'>
                <p className="keyword">Transformers</p>
                <p className="keyword">Attention Mechanism</p>
                <p className="keyword">NLP</p>
                <p className="keyword">Neural Networks</p>
                <p className="keyword">Machine Translation</p>
                <p className="keyword">Deep Learning</p>
                <p className="keyword">Encoder-Decoder</p>
              </div>
            </div>
          </div>

          <div className='right-section'>
              
              <div className='analysis-insight'>
                
                <h2>Analysis Insight</h2>

                <div className='category'>
                <p>Predicted Category</p>
                <h1>Machine Learning</h1>
                </div>

                <div className='score'>
                  <p>Confidence Score</p>
                </div>

                <i className='dic'>"The analysis indicates a high correlation with large-scale language modeling architectures and sequence-to-sequence tasks."</i>
              
              </div>
          </div>
        </section>
      </div>
      </section>
    </div>
  )
}

export default ResultsPage