import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
     <>
     <hr />
     <header my-4>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-4 col-xs-12">
                        <p><i className="fa fa-phone"></i><span> Phone</span> <br/> <Link to="">+91-8445878532</Link></p>
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-12">
                        <p><i className="fa fa-envelope-o"></i><span> Email</span> <br/> <Link to="#">halfengiiineeer2022@gmail.com</Link></p>
                    </div>
                    <div className="col-md-5 col-sm-4 col-xs-12">
                        <ul className="social-icon">
                            <li><span> <h4><b>Meet me on</b></h4> </span></li>
                            <li><a href="https://github.com/half-1999" className="fa fa-github"></a> </li>
                            <li><a href="https://www.linkedin.com/in/aman-sharma-518597258/" className="fa fa-linkedin"></a></li>
                            <li><a href="https://www.instagram.com/half_engiiineeer/" className="fa fa-instagram"></a></li>
                            <li><a href="https://replit.com/@AmanSharma125" className="fa fa-user-secret"></a></li>
                            <li><a href="https://www.youtube.com/watch?v=M21ckevHr9E&list=PL-JvKqQx2AtfPZMQeUf6AFc27C7BTSxvj" className="fa fa-youtube"></a></li>
                             
                        </ul>
                    </div>
                </div>
            </div>
        </header>

        <footer id="copyright">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p className="wow bounceIn" data-wow-offset="50" data-wow-delay="0.3s">
                       	Copyright &copy; 2022 <b>Half Engineer</b></p>
                    </div>
                </div>
            </div>
        </footer>

     </>
  )
}

export default Footer
