import Image from "next/image";

const Homepage = () => {
  return <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">

            {/* image containing */}
            <div className="h-1/2 lg:h-full lg:w-1/2 relative">
              <Image src="/chitti.png" alt="" fill className="object-contain" />
            </div>

            {/*text containing */}
            <div className="h-1/2  lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
               {/* tittle */}
               <h1 className="text-4xl md:text-6xl font-bold">Subhash Galla | Full-Stack Developer & AI Explorer</h1>
               {/*description */}
               <p className="md:text-xl">I'm Subhash Galla — a passionate Computer Science student at the University of North Texas, crafting full-stack web applications and diving deep into machine learning. From building e-commerce systems to predicting outcomes with ML models, I love solving real problems with clean code and smart data.</p>
               {/* buttons */}
               <div className="w-full flex gap-4">
                <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Work</button>
                <button className="p-4 rounded-lg ring-1 ring-black">Contact Me</button>
               </div>
            </div>

     </div>;
};

export default Homepage;
