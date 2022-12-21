import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <section id="home">
    		<div class="container">
    			<div class="row">
    				<div class="col-md-offset-2 col-md-8">
    					<h1 class="wow fadeIn" data-wow-offset="50" data-wow-delay="0.9s"> <strong>Hey,</strong> <br /> <b> I'm Aman Sharma</b> <br/><span>Front End Developer</span></h1>
    					<Link data-scroll to="/hire" class="btn btn-default wow fadeInUp" data-wow-offset="50" data-wow-delay="0.6s">Hire Me</Link>
    				</div>
    			</div>
    		</div>
    	</section>
    </>
  )
}

export default Home