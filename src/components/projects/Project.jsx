import "./project.css"
import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import StreamIcon from '@mui/icons-material/Stream';
import shop from '../../img/shop.png'
import expendia from '../../img/expendia.png'
// import koo from '../../img/kooApp.png'
import ecom from "../../img/ecom.png"
import { useContext } from 'react'
import { themeContext } from '../../Context';
import "../commen.css"
const Projects = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const projects = [
        {
            id: 6,
            title: 'MERN Stack E-Commerce Website',
            img: ecom,
            desc: 'Built a secure e-commerce platform with MERN stack, including user authentication, dynamic cart, payment gateway and admin features.',
            worked: 'This is solo project, built in 40 days.',
            githubLink: 'https://github.com/shubhamgorle/E-commerse-fullstack-App',
            deployedLink: 'https://drive.google.com/file/d/1gAxsWACRlZAqGkqaROzrW5gb18pYGLS9/view',
            tags: ['React', 'Redux', 'Material-UI', 'CSS', 'Node.js', 'Express', 'MongoDB', 'Cloudinary', 'JWT', 'Nodemailer', 'Stripe']
        },
    {
            id: 6,
            title: 'Shop.com',
            img: shop,
            desc: 'This is the clone of Shop.com which provide deals on clothes, beauty, shoes & electronics',
            worked: 'A collaborative project, built in 4 days by a team of 4 developers.',
            githubLink: 'https://github.com/mithunsen04/Shop.com_Clone',
            deployedLink: 'https://darling-travesseiro-cc33f2.netlify.app',
            tags: ['HTML', 'CSS', 'Javascript']
        }, {
            id: 3,
            title: 'Expendia Clone',
            img: expendia,
            desc: 'it is the clone of expendia application which  used to book airline tickets, hotel reservations, car rentals, cruise ships, and vacation packages.',
            worked: 'A collaborative project, built in 4 days by a team of 4 developers.',
            githubLink: 'https://github.com/seakash1204/expedia_clone',
            deployedLink: 'http://effulgent-crostata-f624a5.netlify.app',
            tags:  [ "HTML", "CSS","JavaScript","Bootstrap"]
        },
        // {
        //     id: 4,
        //     title: 'Koo-Clone',
        //     img: koo,
        //     desc: 'Koo is a microblogging platform that is popular in India. It allows users to post short updates, similar to Twitter.',
        //     worked: 'A collaborative project, built in 4 days by a team of 4 developers.',
        //     githubLink: 'https://github.com/shubhamgorle/kooapp_clonee',
        //     deployedLink: 'https://koonew.netlify.app/',
        //     tags:  ["React", "Redux", "JavaScript", "ChakraUi", "CSS"]
        // }
    ]
   
    return (
        <Container id='projects' className='projects'>
            <h1 style={{fontSize:"2.5rem", fontWeight:"bold",textAlign:"center", color: darkMode ? "white" : "" }}>Projects</h1>
            <div className='projectsContainer'>
                {projects.map((ele, index) => (
                    <div key={index} className="project-card box"  style={{ boxShadow:!darkMode ?'rgba(0, 0, 0, 0.35) 0px 5px 15px':null ,border:darkMode?'2px solid orange':null }}  >
                        <div className='imgBox'>
                            <img src={ele.img} alt={ele.title} width='100%' />
                        </div>
                        <div className='ContentBox'>
                            <h1 class="project-title" >{ele.title}</h1>
                            <p class="project-description" style={{fontSize:"18px"}}>{ele.desc}</p>
                            <p style={{ fontWeight: 'bold',fontSize:"14px" }}>{ele.worked}</p>
                            <div class="project-tech-stack"  className='tagsBox'>
                                {ele.tags.map((tag, index) => (
                                    <span key={index}>{tag}</span>
                                ))}
                            </div>
                            <div className='linkSection'>
                                {ele.githubLink && <a href={ele.githubLink} target='_blank' rel='noreferrer'  class="project-github-link"><button style={{backgroundColor:"#fca61f"}}><GitHubIcon />Github</button></a>}
                                <a href={ele.deployedLink} target='_blank' rel='noreferrer' class="project-deployed-link"><button style={{backgroundColor:"#fca61f"}}><StreamIcon />Live</button></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Container >
    )
}


const Container = styled.div`
    width:100%; 
    margin:auto;
    display:flex;
    flex-direction:column;
    gap:20px;
    


    .projectsContainer{
        width:80%;
        margin:auto;
        display:flex;
        align-items:center;
        flex-direction:column;
    }

    .box{
        position:relative;
        width:100%;
        height:300px;
        display:flex;
        gap:10px;
        margin-bottom:80px;
       
        border-radius: 20px;
        overflow:hidden;
    }
   
    .imgBox{
        width:50%;
        overflow:hidden;
    }

    
    .imgBox>img{
        display: block;
        transition: transform .4s; 
    }

    .imgBox>img:hover{
        position:absolute;
        width:80%;
        transform: scale(1.3);
        transform-origin: 0% 0%;
    }

    
    .ContentBox{
        width:50%;
        text-align:left;
        padding:0px 20px 20px 20px;
        
    }

    .ContentBox>h1{
        font-size: 25px;
        text-transform: uppercase;
        font-weight:bold
    }

    .ContentBox>p{
        width:90%;
        margin-top:0px;
    }

    .tagsBox{
        width:80%;
        display:flex;
        align-items:center;
        flex-wrap: wrap;
        line-height:20px;
        gap:5px;
        margin-bottom:20px;
    }

    .tagsBox>span{
        color:white;
        background-color:#fca61f;
        padding: 2px 15px 2px 15px;
        border-radius:10px;
        font-size:13px;
    }


    .linkSection{
        display:flex;
        gap:20px;
    }

    .linkSection>a{
        text-decoration:none;
    }
    .linkSection>a:first-child>button{
        background-color:black;
        color: White;
        padding:8px 20px 8px 20px;
        border-radius:8px;
        font-weight:bold;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:10px;
        border:none;
        cursor:pointer;
    }

    button{
        cursor:pointer;
    }

    button:hover{
        -webkit-transform: translateY(-2px);
        transform: translateY(-2px);
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
    }
    

    .linkSection>a:last-child>button{
        background-color:#44a4be;
        color: White;
        padding:8px 20px 8px 20px;
        border-radius:8px;
        border:none;
        font-weight:bold;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:10px;
    }

    @media only screen and (min-width: 768px) and (max-width:1120px){
        .box{
            flex-direction:column;
            align-items:center;
            height:100%;
        }
 
        .projectsContainer{
            width:80%;
            margin:auto;
            
        }
        
        .imgBox{
            width:100%;
            height:400px;
        }

        .imgBox>img{
            width:100%;
        }

        .ContentBox{
            width:80%;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
        }

        .ContentBox>h1{
            font-size:x-large;
        }

        .ContentBox>p{
            font-size:15px;
        }

        .tagsBox{
            width:100%;
            justify-content:center;
        }
    }

    @media only screen and (min-width: 481px) and (max-width:768px){
        .box{
           flex-direction:column;
           align-items:center;
           height:100%;
        }

        .projectsContainer{
            width:80%;
            margin:auto;
            
        }
        
        .imgBox{
            width:100%;
            height:280px;
        }

        .imgBox>img{
            width:100%;
        }

        .ContentBox{
            width:80%;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            text-align:center;
        }

        .ContentBox>h1{
            font-size:x-large;
        }

        .ContentBox>p{
            font-size:15px;
        }

        .tagsBox{
            width:100%;
            justify-content:center;
        }
    }


    @media only screen and (min-width:320px) and (max-width:480px){
        .box{
            flex-direction:column;
            align-items:center;
            height:100%;
        }

        .projectsContainer{
            width:90%;
            margin:auto;
            
        }

        .imgBox{
            width:100%;
            height:200px;
        }

        .imgBox>img{
            width:100%;
        }

        .ContentBox{
            width:80%;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            text-align:center;
        }

        .ContentBox>h1{
            font-size:large;
        }

        .ContentBox>p{
            font-size:13px;
            
        }


        .tagsBox{
            width:100%;
            justify-content:center;
        }
    }

    @media only screen and (max-width: 319px){
        .box{
            flex-direction:column;
            align-items:center;
            height:100%;
        }

        .projectsContainer{
            width:90%;
            margin:auto;
            
        }

        .imgBox{
            width:100%;
            height:150px;
        }

        .imgBox>img{
            width:100%;
            
        }

        .ContentBox{
            width:80%;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            text-align:center;
        }

        .ContentBox>h1{
            font-size:large;
        }

        .ContentBox>p{
            font-size:13px;
        }


        .tagsBox{
            width:100%;
            justify-content:center;
        }
    }
`
export default Projects