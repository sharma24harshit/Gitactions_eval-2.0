import Link from 'next/link'
import React from 'react'

const Navbar = () => {


  return (
    <div>
        <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"center", height:"60px",
    backgroundColor:"white", color:"black", textDecorationLine:"none", border:"1px solid black"}} >
            <Link href="/" ><h1>Harshit</h1></Link>
            
            <Link href="/projects" ><h2>Projects</h2></Link>
            <Link href="/exp" ><h2>Experience</h2></Link>
        </div>
    </div>
  )
}

export default Navbar