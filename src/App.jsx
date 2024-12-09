import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import bsilogo from '/image.png'
import Logo from './components/Logo'
import foto from '/foto.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <img src={foto} className="logo react" alt="React logo" />
      <main>
        <section id="about">
          <h1>Fajar Krisna Jaya</h1>
          <p>I am a data enthusiast with a commitment to continuous learning and staying up-to-date with the latest industry trends and tools . Through various internships and coursework, I have gained experience in data science. I am motivated to apply my skills and knowledge to real-world problems and make a meaningful impact through data-driven insights.</p>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <div className="project">
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <p>Project 1: React Website</p>
          </div>
          <div className="project">
            <a href="https://react.dev" target="_blank">
              <img src={bsilogo} className="logo react" alt="React logo" />
            </a>
            <p>Project 2: Another React Project</p>
          </div>
        </section>
        <section id="education">
          <h2>Education</h2>
          <p><strong>UNIVERSITAS AIRLANGGA</strong> 2020 – 2024</p>
          <p>Bachelor of Data Science</p>
          <p>GPA: 3.66 of 4.00</p>
          <p>Undergraduate Thesis: Development of Customer Review Monitoring Dashboard on BRI Mobile Application Using Support Vector Machine and Latent Dirichlet Allocation.</p>
        </section>
        <section id="experience">
          <h2>Work Experience</h2>
          <div>
            <h3>PT. Adma Digital Solusi | ADS Digital Partner</h3>
            <p>Data Analyst Intern (Kampus Merdeka Batch 6) Feb 2024 – June 2024</p>
            <ul>
              <li>Developed a MicroStrategy dashboard to address client needs in the credit loan sector.</li>
              <li>Utilized SQL to perform Extract, Transform, Load (ETL) processes for data integration.</li>
              <li>Conducted comprehensive data cleaning using Python to ensure data quality and validity.</li>
            </ul>
          </div>
          <div>
            <h3>Efishery | Department of Financing</h3>
            <p>Commercial Fund Intern May 2023 – July 2023</p>
            <ul>
              <li>Integrated more than 100+ merchant credit nominative data to the cloud server.</li>
              <li>Performed credit analysis to ensure the potential customer will not have payment default.</li>
              <li>Analyzed and integrated B2B credit applications data to perform exploratory analysis.</li>
            </ul>
          </div>
          <div>
            <h3>PT. Bank Rakyat Indonesia (Persero) Tbk | Ultra Micro Business Division</h3>
            <p>Data Analytics Intern (Kampus Merdeka Batch 3) August 2022 – December 2022</p>
            <ul>
              <li>Collaborated with the team to build and monitor Ultra Micro visualization.</li>
              <li>Developed BRI Ultra Micro graph model, which focused on community detection of network transaction analytics project of Kampus Merdeka Batch 3.</li>
              <li>Successfully mapped branches of PNM, Pegadaian, and Sentra Layanan Ultra Mikro (SenyuM).</li>
              <li>Implemented Extract, Transform, and Load from BRI Datalake for specific purposes.</li>
              <li>Successfully implemented Google PageRank algorithm to assess the influence and importance of network nodes within the BRI Ultra Micro data transaction network.</li>
            </ul>
          </div>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>You can reach me at <a href="fajarkrisnajayanti@gmail.com">fajarkrisnajayanti@gmail.com</a></p>
        </section>
      </main>
      <footer>
      <div>  <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
        <p className="read-the-docs">
          Copyrights, all right reserved.
        </p>
      </footer>
    </>
  )
}

export default App