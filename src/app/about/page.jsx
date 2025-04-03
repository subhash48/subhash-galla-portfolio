"use client"
import {motion, useInView, useScroll} from "framer-motion";
import Brain from "../components/brain";
import { useRef } from "react";
import Image from "next/image";

const AboutPage = () => {

  const containerRef = useRef()

  const {scrollYProgress} = useScroll({container:containerRef})

  const skillRef = useRef()
  const isSkillRefInView = useInView(skillRef, {margin: "-100px"})

  const experienceRef = useRef()
  const isExperiencesRefInView = useInView(experienceRef, {margin: "-100px"})


  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration: 1}}>
     {/* container */}
     <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
{/* ********************************************************************************************************************************************************************* */}

        {/* Text container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">


{/* ********************************************************************************************************************************************************************* */}

          {/* My biography container */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY Para */}
            <p className="text-lg">
            Hi, I&apos;m Subhash Galla, a Computer Science student at the University of North Texas with a passion
            for building user-focused web applications and exploring the world of machine learning and AI. 
            I&apos;ve built full-stack projects using React.js, Node.js, MongoDB, and Express, and I&apos;m currently
            diving deep into data-driven applications powered by Python and ML libraries. Whether it&apos;s
            crafting responsive UIs or training predictive models, I love turning ideas into working solutions. 
            I&apos;m currently seeking internship opportunities where I can contribute, learn, and grow alongside
            talented teams. Let&apos;s connect and build something impactful!
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
            <Image src="/signature.svg" alt="Signature" width={180} height={70} />
            </div>
            {/* BIOGRAPHY SCROLL SVG*/}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
              




{/* ********************************************************************************************************************************************************************* */}

          </div>
          {/* My Skills container */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* Skills TITLE */}
            <motion.h1 initial={{x:"-300px"}} animate={isSkillRefInView ? {x:0} : {}} transition={{delay:0.2}} className="font-bold text-2xl">Skills</motion.h1>
            {/* SKILLS LIST */}
            <motion.div initial={{x:"-300px"}} animate={isSkillRefInView ? {x:0} : {}} className="flex gap-4 flex-wrap">
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-[#edf0f5] hover:text-black">JavaScript</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-[#edf0f5] hover:text-black">Python</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-[#edf0f5] hover:text-black">SQL</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-[#edf0f5] hover:text-black">Scikit-learn</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-[#edf0f5] hover:text-black">XGBoost</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-[#edf0f5] hover:text-black">LightGBM</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-[#edf0f5] hover:text-black">NumPy</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-[#edf0f5] hover:text-black">Pandas</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-[#edf0f5] hover:text-black">Matplotlib</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-[#edf0f5] hover:text-black">Seaborn</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-[#edf0f5] hover:text-black">TensorFlow</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-[#edf0f5] hover:text-black">Keras</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-[#edf0f5] hover:text-black">PyTorch (Beginner)</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-[#edf0f5] hover:text-black">CNNs</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-[#edf0f5] hover:text-black">RNNs</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-[#edf0f5] hover:text-black">MongoDB</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-[#edf0f5] hover:text-black">MySQL</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-[#edf0f5] hover:text-black">React.js</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-[#edf0f5] hover:text-black">HTML & CSS</div>
            </motion.div>
            {/* SKILLS SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>

          </div>






{/* ********************************************************************************************************************************************************************* */}
          {/* My Experiences container */}
          <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
            {/* Experiences TITLE */}
            <motion.h1 
              initial={{x:"-300px"}} 
              animate={isExperiencesRefInView ? {x: "0"} : {}}  
              transition={{delay:0.2}}  
              className="font-bold text-2xl">
              Experiences
            </motion.h1>
            {/* Experiences List*/}
            <motion.div  
              initial={{x:"-300px"}} 
              animate={isExperiencesRefInView ? {x:"0"} : {}} 
              className="">
              {/* Experiences LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* jOB TITTLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Computer Lab Assistant
                  </div>
                  {/* jOB Description */}
                  <div className="p-3 text-sm italic">
                        Provided technical support to students and faculty, 
                        assisting with software installations, troubleshooting, 
                        and maintaining lab systems in a fast-paced academic environment.
                  </div>
                  {/* JOB DATE*/}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2025 - Present
                  </div>
                  {/* JOB COMPANY*/}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    University Of North Texas
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6">
                    {/* line */}
                    <div className="w-1 h-full bg-gray-600 rounded relative">
                      {/* circle */}
                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                    </div>
                </div>
                {/* Right */}
                <div className="w-1/3"></div>
              </div>




              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
      
                </div>
                {/* CENTER */}
                <div className="w-1/6">
                    {/* line */}
                    <div className="w-1 h-full bg-gray-600 rounded relative">
                      {/* circle */}
                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                    </div>
                </div>
                {/* Right */}
                <div className="w-1/3">{/* jOB TITTLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Artificial Intelligence Certificate
                  </div>
                  {/* jOB Description */}
                  <div className="p-3 text-sm italic">
                      Gaining hands-on experience with Python, Pandas, and 
                      Scikit-learn while building foundational ML projects.
                  </div>
                  {/* JOB DATE*/}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                  2024 - Ongoing
                  </div>
                  {/* JOB COMPANY*/}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    University Of North Texas
                  </div></div>
              </div>




              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* jOB TITTLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                      Emotion Detection ML Project
                  </div>
                  {/* jOB Description */}
                  <div className="p-3 text-sm italic">
                      Built an NLP pipeline using Scikit-learn, TF-IDF, 
                      and NLTK to classify messages into emotions.
                  </div>
                  {/* JOB DATE*/}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                      Mar 2025
                  </div>
                  {/* JOB COMPANY*/}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                  Personal Project
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6">
                    {/* line */}
                    <div className="w-1 h-full bg-gray-600 rounded relative">
                      {/* circle */}
                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                    </div>
                </div>
                {/* Right */}
                <div className="w-1/3"></div>
              </div>


              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
      
                </div>
                {/* CENTER */}
                <div className="w-1/6">
                    {/* line */}
                    <div className="w-1 h-full bg-gray-600 rounded relative">
                      {/* circle */}
                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                    </div>
                </div>
                {/* Right */}
                <div className="w-1/3">{/* jOB TITTLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Music Genre Classifier
                  </div>
                  {/* jOB Description */}
                  <div className="p-3 text-sm italic">
                       Trained a CNN with spectrograms and Librosa to 
                       classify music into genres with 85% accuracy.
                  </div>
                  {/* JOB DATE*/}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                  Apr 2025 (Planned)
                  </div>
                  {/* JOB COMPANY*/}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                  Personal Project
                  </div></div>
              </div>




              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* jOB TITTLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                       Machine Learning Course
                  </div>
                  {/* jOB Description */}
                  <div className="p-3 text-sm italic">
                      Learning algorithms, supervised learning, and evaluation 
                      metrics with hands-on Python labs.

                  </div>
                  {/* JOB DATE*/}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                      Ongoing
                  </div>
                  {/* JOB COMPANY*/}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                      Coursera
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6">
                    {/* line */}
                    <div className="w-1 h-full bg-gray-600 rounded relative">
                      {/* circle */}
                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                    </div>
                </div>
                {/* Right */}
                <div className="w-1/3"></div>
              </div>


              


              




              



              
            </motion.div>
          </div>
        </div>






{/* ********************************************************************************************************************************************************************* */}
        {/* SVG CONTAINEr */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:1/2">
            <Brain scrollYProgress={scrollYProgress}/>
        </div>

     </div>
    </motion.div>
  )
}

export default AboutPage