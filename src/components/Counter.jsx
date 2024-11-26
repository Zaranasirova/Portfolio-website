import { motion } from "framer-motion";
import { useEffect, useState } from "react";


const Counter = ({ targetNumber, duration,text }) => {
    const [currentNumber, setCurrentNumber] = useState(0);

    useEffect(() => {
        const increment = targetNumber / (duration / 50);

        const interval = setInterval(() => {
            setCurrentNumber((prev) => {
                if (prev + increment >= targetNumber) {
                    clearInterval(interval);
                    return targetNumber;
                }
                return prev + increment;
            });
        }, 50);

        return () => clearInterval(interval);
    }, [targetNumber, duration]);

    return (
        <motion.div style={{ display: "flex", gap: "5px",alignItems:"center",flexBasis:"25%",justifyContent:"center" }}
        >
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{ fontSize: "50px", fontWeight:"700",}}
            >
                {Math.floor(currentNumber)}

            </motion.span>
            <p style={{fontSize:"14px", color:"#ddd",width:"40%"}}>{text}</p>
        </motion.div>
    );
};

export default Counter;
