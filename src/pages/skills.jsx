import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import html from "../../public/images/html.png";
import css from "../../public/images/css.png";
import js from "../../public/images/js.png";
import react from "../../public/images/react.png";
import bootStrab from "../../public/images/bootstrap.png";
import git from "../../public/images/git.png";
import gitHup from "../../public/images/git hup.png";
import vite from "../../public/images/vite-js-logo.svg";
import cli from "../../public/images/cli.png";
import frammerMotion from "../../public/images/frammer motion.png";
import axios from "../../public/images/axios.png";
import postMan from "../../public/images/postman.png";
import api from "../../public/images/api.png";
import { useEffect, useState } from "react";

export function AnimateSkill({ img, shadow, wi, skill, numper, startCounting }) {
    const [num, setNum] = useState(0);

    function plus(nump) {
        let num1 = num;
        const interval = setInterval(() => {
        num1 += 1;
        setNum(num1);
        if (num1 >= nump) {
            clearInterval(interval);
        }
        }, 50);
    }

    useEffect(() => {
        if (startCounting) {
        plus(numper);
        }
    }, [startCounting, numper]);

    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", position: "relative", transition: "opacity 0.5s ease-in-out"}}> 
        <span style={{color: "white", position: "absolute", top: "-5%", fontWeight: "bold", left: "25%"}}>
            {num}%
        </span>
        <div className="border" style={{background: `conic-gradient(${shadow} ${num}%, #222 ${100 - num}%)`}}/>
        <div className="borderSkill" style={{margin: "26px 30px 0px", width: "120px", height: "120px", borderRadius: "50%", boxShadow: `${shadow} 0px 0px 85px 20px`, display: "flex", justifyContent: "center", alignItems: "center"}}>
            <img style={{ maxWidth: wi, borderRadius: "30%" }} src={img} />
        </div>
        <h3 style={{color: "white", fontSize: "25px", fontWeight: "bold", marginTop: "15px", textAlign: "center"}}>
            {skill}
        </h3>
        </div>
    );
    }

    export default function Skills() {
    const { ref: sectionRef, inView: sectionInview } = useInView({ once: true , threshold: .2 });
    const [isVisible, setIsVisible] = useState(false); // Added to keep track of visibility
    useEffect(() => {
        if (sectionInview && !isVisible) {
          setIsVisible(true); // Set to true once and never reset
        }
    }, [sectionInview]);
    
    const skills = [
        { img: html, shadow: "rgb(243, 100, 33)", skill: "HTML", wi: "100px", numper: 100, delay: 0.5 },
        { img: css, shadow: "rgb(33, 205, 243)", skill: "CSS", wi: "100px", numper: 90, delay: 1 },
        { img: js, shadow: "rgb(243, 229, 33)", skill: "JS", wi: "95px", numper: 70, delay: 1.5 },
        { img: react, shadow: "rgb(33, 150, 243)", skill: "React", wi: "100px", numper: 65, delay: 2 },
        { img: vite, shadow: "rgb(89, 33, 243)", skill: "Vite", wi: "80px", numper: 65, delay: 2.5 },
        { img: bootStrab, shadow: "rgb(128, 33, 243)", skill: "BootStrab", wi: "100px", numper: 50, delay: 3 },
        { img: git, shadow: "rgb(243, 100, 33)", skill: "Git", wi: "95px", numper: 70, delay: 3.5 },
        { img: gitHup, shadow: "rgb(173, 33, 243)", skill: "GitHup", wi: "110px", numper: 80, delay: 4 },
        { img: cli, shadow: "rgb(33, 150, 243)", skill: "CLI", wi: "100px", numper: 50, delay: 4.5 },
        { img: frammerMotion, shadow: "rgb(243, 33, 107)", skill: "Motion", wi: "90px", numper: 60, delay: 5 },
        { img: api, shadow: "rgb(125, 0, 242)", skill: "API", wi: "90px", numper: 70, delay: 5.5 },
        { img: axios, shadow: "rgb(194, 194, 194)", skill: "Axios", wi: "90px", numper: 70, delay: 6 },
        { img: postMan, shadow: "rgb(250, 114, 2)", skill: "Post Man", wi: "90px", numper: 50, delay: 6.5 },
    ];

    return (
        <div className="parent">
        <motion.h1 className="mySkills" initial={{ transform: "translateX(-102%)" }} animate={{ transform: "translateX(0%)" }} transition={{delay: 1, type: "spring", stiffness: 20, restDelta: 2}}>
            My Skills
        </motion.h1>
        <div className="skills" ref={sectionRef}>
            {skills.map(({ img, shadow, skill, wi, numper, delay }, index) => {
            const [startCounting, setStartCounting] = useState(false);
            
            return (
                <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}  
                transition={{ delay }}
                onAnimationComplete={() => sectionInview && setStartCounting(true)}
                >
                <AnimateSkill img={img} shadow={shadow} skill={skill} wi={wi} numper={numper} startCounting={startCounting} />
                </motion.div>
            );
            })}
        </div>
        </div>
    );
}