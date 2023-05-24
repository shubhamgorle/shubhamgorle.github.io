import React from 'react'
import styled from 'styled-components';
import GithubCalendar from 'react-github-calendar'
import { useContext } from 'react';
import { themeContext } from '../Context';
const Github = () => {
    const theme = useContext(themeContext);
      const darkMode = theme.state.darkMode;
    return (
        <MainContainer style={{ marginTop: "-20px" }}>
             {/* font-size: 2.5rem;
    font-weight: bold;
    margin-left: 45%; */}
            <h1 style={{ color: darkMode ? "white" : "" ,fontSize:"2.5rem",fontWeight:"bold",textAlign:'center'}}>Days I Worked</h1>
            <Container>
                <GithubCalendar username='shubhamgorle' year={new Date().getFullYear()} blockSize={15} blockMargin={5} fontSize={16}  class="react-activity-calendar"/>
            </Container>
            <h1 style={{ color: darkMode ? "white" : "" ,fontSize:"2.5rem",fontWeight:"bold",textAlign:'center' }}>My Statistics</h1>
           
            <div className='stats'>
            <img id="github-top-langs" align="center"src="https://github-readme-stats.vercel.app/api/top-langs/?username=shubhamgorle&layout=compact&bg_color=FFFFFF00&hide_border=false&text_color=6d6b6b&title_color=6d6b6b" alt="shubhamgorle" />
                <img  id="github-stats-card" align="center" src="https://github-readme-stats.vercel.app/api?username=shubhamgorle&show_icons=true&locale=en&include_all_commits=false&count_private=true" alt="shubhamgorle" />
                <img id="github-streak-stats" align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=shubhamgorle&" alt="shubhamgorle" />
            </div>
        </MainContainer>
    )
   
}

const Container = styled.div`
    margin:auto;
    width:80%;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:50px;
    flex-direction:column;
    border: 7px solid var(--orange);
    border-radius:50px 5px 50px 5px;
    padding:30px 10px 30px 10px;
`

const MainContainer = styled.div`
    .stats{
        width:80%;
        margin:auto;
        display:flex;
        justify-content:center;
        border-radius:50px;
        margin-bottom:50px;
    }

    .stats>img{
        padding:20px 10px 20px 10px;
    }

    @media only screen and (min-width: 769px) and (max-width:1110px){
        .stats{
            flex-direction:column; 
        }

    }

    @media only screen and (min-width: 481px) and (max-width:768px){
        
        .stats{
            flex-direction:column; 
        }
    }


    @media only screen and (min-width:320px) and (max-width:480px){
        .stats{
            width:90%;
            flex-direction:column; 
        }
    }

    @media only screen and (max-width: 319px){
        .stats{
            width:90%;
            flex-direction:column; 
        }
    }

`

export default Github