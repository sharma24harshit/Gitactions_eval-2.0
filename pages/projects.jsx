import React from 'react'
import axios from 'axios';
const Projects = ({data}) => {
    const handleClick = (path)=>{
      window.open(`${path}`);
        }

  return (
    <div>
        <div className="grid_container" >
  
  {data && data.map((el)=>(
    <div  key={el.id} className="grid_box" onClick={()=>handleClick(el.clone_url)} >
      <h3> Name: {el.full_name}</h3>
      <h4> langauge {el.language}</h4>
      <h4> star count:  {el.stargazers_count}</h4>
      <h4>Forkcount: {el.forks_count}</h4>
    </div>
  ))}
    </div>
    </div>
  )
}

export async function getServerSideProps (context) {
    const res = await axios(`https://api.github.com/search/repositories?q=user:sharma24harshit+fork:true&sort=updated&per_page=10&type=Repositories`);
     const result = await res.data.items;
    return {
      props: {
        data: result
      }, 
    }
  }

export default Projects