import React from "react";
import fr from '../assets/foodRecipe.png'
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import RecipeItem from "../components/RecipeItem";


export default function Home(){
    return(
        <>
       
        <section className='home'>
            <div className='left'>
                <h1>Food Recipe</h1>
                <h5>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</h5>
                <button> Share your recipe button</button>
            </div>
            <div className='right'>
                <img src={fr} width="320px" height="300px"></img>
            </div>
        </section>
        <div className='bg'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fillOpacity="#2BE899FF"  d="M0,96L15,101.3C30,107,60,117,90,101.3C120,85,150,43,180,37.3C210,32,240,64,270,106.7C300,149,330,203,360,213.3C390,224,420,192,450,160C480,128,510,96,540,112C570,128,600,192,630,218.7C660,245,690,235,720,218.7C750,203,780,181,810,192C840,203,870,245,900,234.7C930,224,960,160,990,122.7C1020,85,1050,75,1080,85.3C1110,96,1140,128,1170,149.3C1200,171,1230,181,1260,186.7C1290,192,1320,192,1350,186.7C1380,181,1410,171,1425,165.3L1440,160L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z"></path></svg>

        </div>
        
        <div>
            <RecipeItem />
        </div>
        
       
        </>
    )
}