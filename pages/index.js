import axios from "axios"

export default function Home({data}) {
  
const handleClick = (path)=>{
window.open(`${path}`);
}

const handleResume = ()=>{
  window.open(`https://drive.google.com/drive/folders/15LLStvoYw0SKmJFTmzi4qQda5ukPO2qA`);
  }

  return (
    <>
    <div className="main_box" >
      <div className="left_container" >
        <div>
          <h2>Harshit Sharma</h2>
          <p>Full-stack Developer | JavaScript </p>
            <p>| Typescript | NodeJS | Deno </p>
             <p> | ReactJS | HTML | CSS |</p>
              <p> Chakra-UI | MUI</p>
          <button onClick={handleResume} >Resume</button>
        </div>
        <div><p>Full-stack Developer | JavaScript </p>
            <p>| Typescript | NodeJS | Deno </p>
             <p> | ReactJS | HTML | CSS |</p>
              <p> Chakra-UI | MUI</p></div>
        <div>
          <h2>Masai School</h2>
          <p>August - present</p>
          <h2>B.E(Mechanical Engg)</h2>
          <p>2015 - 2019</p>
        </div>
      </div>
      
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
       
    </>
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


// <Image
//                 src="/vercel.svg"
//                 alt="Vercel Logo"
//                 className={styles.vercelLogo}
//                 width={100}
//                 height={24}
//                 priority
//               />