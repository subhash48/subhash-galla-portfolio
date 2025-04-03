"use client"
import {motion, useScroll, useTransform} from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";


const items = [
  {
    id: 1,
    color: "from-indigo-300 to-sky-300",
    title: "Emotion Detection App",
    desc: "Built an ML model using Scikit-learn and NLTK to classify text messages into emotions like happy, sad, and angry. Used TF-IDF for feature extraction and logistic regression for classification.",
    img: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "https://github.com/subhash48",
  },
  {
    id: 2,
    color: "from-cyan-300 to-emerald-300",
    title: "Student Grade Predictor",
    desc: "Developed a support vector regression model using Scikit-learn to predict student final grades. Tuned hyperparameters and visualized predictions to enhance model performance.",
    img: "https://images.pexels.com/photos/6693654/pexels-photo-6693654.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "https://github.com/subhash48",
  },
  {
    id: 3,
    color: "from-rose-300 to-fuchsia-300",
    title: "CNN Image Classifier",
    desc: "Created a convolutional neural network model using TensorFlow and Keras to classify CIFAR-10 images. Used dropout and data augmentation for better generalization.",
    img: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "https://github.com/subhash48",
  },
  {
    id: 4,
    color: "from-yellow-300 to-pink-300",
    title: "Music Genre Classifier",
    desc: "Extracted MFCC features from audio tracks using Librosa and trained a deep neural network in TensorFlow to classify music genres with 85% accuracy.",
    img: "https://images.pexels.com/photos/1647382/pexels-photo-1647382.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "https://github.com/subhash48",
  },
];




const PortfolioPage = () => {

  const ref = useRef()

  const {scrollYProgress} = useScroll({target:ref})

  const x = useTransform(scrollYProgress, [0,1], ["0%","-80%"])

  return (
    <motion.div 
        className="h-full" 
        initial={{y:"-200vh"}} 
        animate={{y:"0%"}} 
        transition={{duration: 1}}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">My Works</div>

        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{x}} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300"/>
            {items.map(item=>(

              <div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`} key={item.id}>
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-3xl lg:text-4xl xl:text-6xl">{item.title}</h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill/>
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">{item.desc}</p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                  </Link>
                </div>
              </div>
              ))}
          </motion.div>
        </div>
      </div>

{/* *************************************************************************************************************** */}
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
            <h1>Do you have a project</h1>
            <div className="relative">
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                viewBox="0 0 300 300"
                className="w-64 h-64 md:w-[500px] md:h-[500px] "
              >
             <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
             </defs>
             <text fill="#000">
                <textPath xlinkHref="#circlePath" className="text-xl">
                Aspiring AI Engineer and Full Stack Dev
                </textPath>
              </text>
            </motion.svg>
            <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
             >
              Hire Me
            </Link>
          </div>
        </div>
    </motion.div>
  )
}

export default PortfolioPage