import {motion, AnimatePresence} from 'framer-motion'
import {useState} from 'react';


function App() {
const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
    <motion.div 
    transition={{layout: {duration:1, type:"spring"}}}
    layout 
    onClick={()=> setIsOpen(!isOpen)}
    className="card"
    style={{borderRadius:"1rem", boxShadow: "0px 10px 30px rgba(0,0,0,0.5)"}}>
      <motion.h2 layout="position">Motion </motion.h2>
      <AnimatePresence>
      {isOpen &&(
       <motion.div
       initial={{opacity:0}}
       animate={{opacity:1}}
       transition={{duration:1}}
       exit={{opacity:0}}
      className="expand"
      >
         <p>
           Proident reprehenderit veniam Lorem dolore ipsum dolor id incididunt consequat ad
            ipsum ea anim ad. Aliquip quis eu ullamco tempor reprehenderit sit irure quis consequat
             culpa sint consequat cupidatat. Ea fugiat irure exercitation dolor. Cupidatat anim 
             officia pariatur irure esse do duis dolore cillum officia.
         </p>
         <p>Pariatur tempor incididunt non reprehenderit sit amet est ut.</p>
       </motion.div>)}
       </AnimatePresence>
    </motion.div>
    </div>
  );
}

export default App;