import React from 'react'
import { Link } from 'react-router-dom'

function Hire() {
  return (
    <>
      <section id="contact">
    		<div className="container">
    			<div className="row">
    				<div className="col-md-12">
    					<h2 className="wow bounceIn" data-wow-offset="50" data-wow-delay="0.3s">WELCOME TO MY <span>HIRE ME</span> SECTION</h2>
    				</div>
    				<div className="col-md-6 col-sm-6 col-xs-12 wow fadeInLeft" data-wow-offset="50" data-wow-delay="0.9s">
    					<form action="#" method="post">
    						<label>NAME</label>
    						<input name="fullname" type="text" className="form-control" id="fullname "/>
   						  	
                            <label>EMAIL</label>
    						<input name="email" type="email" className="form-control" id="email "/>
   						  	
                            <label>MESSAGE</label>
    						<textarea name="message" rows="4" className="form-control" id="message "></textarea>
    						
                            <input type="submit" className="form-control"/>
    					</form>
    				</div>
    				<div className="col-md-6 col-sm-6 col-xs-12 wow fadeInRight" data-wow-offset="50" data-wow-delay="0.6s">
    					<address>
    						<p className="address-title">Contact Me</p>
    						<span>
								<a href="https://drive.google.com/file/d/1CVhXFyiChtAHw4nInZvtPXmPOs4fPtAi/view">
									<button className="resume" type="submit">Click Here To Download My Resume</button>
								</a>
							</span>
    						 
    						<p><i className="fa fa-phone"></i> <a href="#">+91-8445878532</a></p>
    						<p><i className="fa fa-envelope-o"></i> <a href="#">halfengiiineeer2022@gmail.com</a></p>
    						<p><i className="fa fa-map-marker"></i>Noida</p>
    					</address>
    					<ul className="social-icon">
    						<li><h4>I AM SOCIAL</h4></li>
    						<li><a href="https://github.com/half-1999" className="fa fa-github"></a> </li>
                            <li><a href="https://www.linkedin.com/in/aman-sharma-518597258/" className="fa fa-linkedin"></a></li>
                            <li><a href="https://www.instagram.com/half_engiiineeer/" className="fa fa-instagram"></a></li>
                            <li><a href="https://replit.com/@AmanSharma125" className="fa fa-user-secret"></a></li>
							<li><a href="https://www.youtube.com/watch?v=M21ckevHr9E&list=PL-JvKqQx2AtfPZMQeUf6AFc27C7BTSxvj" className="fa fa-youtube"></a></li>
                        
    					</ul>
    				</div>
    			</div>
    		</div>
    	</section> 
    </>
  )
}

export default Hire
