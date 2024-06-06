import logo from './logo.svg';
import './App.css';
import logo1 from './logo-udemy.svg'
import { IoMdSearch } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import logo2 from './mam.jpg'
import logo3 from './book.jpg'
import logo4 from './air.jpg'
import logo5 from './system.jpg'
import logo6 from './assets/big image.png'
import { FaStar } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdLanguage } from "react-icons/md";
import Categories from './categories';

import List from './list';
import Udemy from './Udemy';
import Teach from './teach';
import Cart from './cart';

//for to display onother cards while hovering on images
import One from './one';
import Two from './two';



function App() 
{
return (
    <div className="App">
     <nav className="nav">
      <a className='ham' href='#'>
      <GiHamburgerMenu /><div className='list'><List/></div>
      </a>
      <div className='img'>
        <img src={logo1}></img>
      </div>
      <div className='cat'><a href='#' className='bat'>Categories<div className='sub'><Categories  /></div></a></div>
      <div>
      <IoMdSearch  className='se'/>
        <input type='text' placeholder='Search for anything' className='text'></input>
      </div>
      <a className='price' href='#'>Plans&Pricing</a>
      <a className='ud' href='#'>Udemy Business<div className='udi'><Udemy/></div></a>
      <a className='teach' href='#'>Teach on udemy<div className='teaching'><Teach/></div></a>
      <a className='cart' href='#'><FaCartPlus /><div className='carting'><Cart/></div></a>
      <a href='#'><button className='d1'>Login</button></a>
      <a href='#'><button className='dark'>Sign Up</button></a>
      <a href='#'><button className='w'><TbWorld /></button></a>
     </nav>

     <div className="header-container">

      <div className='inside'>

        <h1>It’s the last day for these <br></br> savings</h1>
        <h4>With courses from ₹399, it’s the right time for the right <br></br> skills and you.</h4>
       
      </div>

      </div>

      <div className='below-image'>
        <h1>All the skills you need in one place</h1>
        
      </div>
      

      <div className='h3'> 
      <h3 >From critical skills to technical topics, Udemy supports your professional development.</h3>
      </div>

      <div className='course'>

        <div>Web Development</div>
        <div>IT certifications</div>
        <div>Leadership</div>
        <div>Data Science</div>
        <div>Communication</div>
        <div>Business Analytics & Intelligence</div>

      </div>
           <br></br>
           <br></br>
           <br></br>

      <div className='language'>

        <div><button className='a'>Web Development <br></br>13.3+ learners</button></div>
        <div><button className='b'>Javascript <br></br> 16.6+ learners</button></div>
        <div><button className='c'>React JS<br></br> 14.5+ learners</button></div>
        <div><button className='d'>Angular<br></br> 20.5+ learners</button></div>
        <div><button className='e'>Java<br></br> 13.5+ learners</button></div>
        <div><button className='f'>Android Development<br></br> 18.5+ learners</button></div>
        <div><button className='g'>iOS Development<br></br> 19.5+ learners</button></div>

      </div>

     
<div className='cards' > 

          

         <div className='aa'>
          <div className='one'><One/></div> 
         <div> <img src={logo2} className='j'></img></div>
          
          <h4 className='u'>The Complete 2024 Web <br></br>Development Bootcamp<br></br> <h5 className='A'>Dr.Angela Yu</h5><br></br>
          <p className='p1'> 4.7<FaStar className='z'/><FaStar className='z' /><FaStar className='z' /><FaStar className='z'/><FaStar className='z' />(378,181)<br></br><MdCurrencyRupee className='y1' />399 <span className='b1'><MdCurrencyRupee className='y1' />3,099</span>
          <br></br> <button className='bu'>Bestseller</button></p>
          </h4>
         </div>

         <div className='bb'>
          <div className='two'><Two/></div>
          <img src={logo3}className='j'></img>

          <h4 className='v'> The Web Developer Bootcamp <br></br>2024<br></br><h5 className='B'>Colt Stelle</h5><br></br>
          <p className='p2'>4.7<FaStar className='z' /><FaStar className='z'/><FaStar className='z' /><FaStar className='z'/><FaStar className='z' />(272,363)<br></br><MdCurrencyRupee className='y1'/>399 <span className='b2'><MdCurrencyRupee className='y1' />3,099</span></p>
          </h4>

         </div>

         <div className='cc'>

          <img src={logo4} className='j'></img>
          <div className='ccc'> 
          <h4 >Web Development Masterclass-<br></br> Online Certification Course<br></br><h5 className='C'>YouAccel Training</h5>
          <p >4.4<FaStar className='z'/><FaStar className='z'/><FaStar className='z'/><FaStar className='z'/><FaStar className='z'/>(9,795)<br></br><MdCurrencyRupee className='y1' />399 <span className='b3'><MdCurrencyRupee className='y1' />3,099</span> </p>
          </h4>
          </div>

         </div>

         <div className='dd'>

          <img src={logo5} className='j'></img>
          <h4 className='x'>Practical Web Development:22<br></br>Courses in 1<br></br><h5 className='D'>Creative Online School</h5><br></br>
          <p className='p4'>4.3<FaStar className='z'/><FaStar className='z'/><FaStar className='z'/><FaStar className='z'/><FaStar className='z'/>(4,302)<br></br>
          <MdCurrencyRupee className='y1' />399 <span className='b4'><MdCurrencyRupee className='y1' />3,299</span></p>
          </h4>

         </div>
      </div>

       

      <div>
        <button className='show'><h3>Show all Web Development courses</h3></button>
      </div>

      <div>
        <h3 className='trust'>Trusted by over 15,000 companies and millions of learners around the world</h3>
      </div>


      <div className='small-image'>
        <img src='https://cms-images.udemycdn.com/content/tqevknj7om/svg/volkswagen_logo.svg?position=c&quality=80&x.app=portals'></img>
        <img src='https://cms-images.udemycdn.com/content/2gevcc0kxt/svg/samsung_logo.svg?position=c&quality=80&x.app=portals'></img>
         <img src='https://cms-images.udemycdn.com/content/mueb2ve09x/svg/cisco_logo.svg?position=c&quality=80&x.app=portals'></img>
         <img src='https://cms-images.udemycdn.com/content/ocud9ia7cf/svg/vimeo_logo.svg?position=c&quality=80&x.app=portals'></img>
        <img src='https://cms-images.udemycdn.com/content/bthyo156te/svg/procter_gamble_logo.svg?position=c&quality=80&x.app=portals'></img>
        <img src='https://cms-images.udemycdn.com/content/luqe0d6mx2/svg/hewlett_packard_enterprise_logo.svg?position=c&quality=80&x.app=portals'></img>
        <img src='https://cms-images.udemycdn.com/content/siaewwmkch/svg/citi_logo.svg?position=c&quality=80&x.app=portals'></img>
       <img src='https://cms-images.udemycdn.com/content/swmv0okrlh/svg/ericsson_logo.svg?position=c&quality=80&x.app=portals'></img>

      </div>

      <div >
       <h1 className='big-font'>Learning focused on your goals</h1>
      </div>


      <div className='box1'>
        <div>
          <img src='https://cms-images.udemycdn.com/96883mtakkm8/7kN9RBFSMFNHzsGWsElMPi/dde73f8d1c47e046f035274e78410590/hands-on-practice.png' className='img1'></img>
        </div>

        <div>
        <h3>Hands-on training</h3>
        Upskill effectively with AI-powered coding exercises, practice tests, skills assessments, labs, and workspaces.
        </div>
      </div>


      <div className='box2'>
      <div>
        <img src='https://cms-images.udemycdn.com/96883mtakkm8/2Xh9YHJustDwCEjn5IlO25/93e9b15c6e74876db0dec63466fcc5a0/certificate.png' className='img2'></img>
      </div>
       <div>
       <h3>Certification prep</h3>
        Prep for industry-recognized certifications by solving real-world challenges and earn badges along the way.
       </div>
       </div>


       <div className='box3'>
        <div>
          <img src='https://cms-images.udemycdn.com/96883mtakkm8/6w8plrr7vY9rIY46UuX0q5/2f0a3f0c22e99bd2d430b998c81321f2/empty-state-1.png' className='img3'></img>
        </div>
        <div>
        <h3>Insights and analytics<span className='hh3'><button className='hh1'>Enterprise Plan</button></span></h3>
        
         Fast-track goals with advanced insights plus a dedicated customer success team to help drive effective learning.
         <div className='ooo'><h4>Find out more <i class="fa-solid fa-arrow-right"></i></h4></div>
         </div>
       </div>


       <div className='box4'>
        <div>
          <img src='https://cms-images.udemycdn.com/96883mtakkm8/2tKGBrb1N60wox2Lh8j3tz/7f1528c9f88ea47bd6ebb46f345902c3/organizations-2.png' className='img4'></img>
        </div>
        <div>
        <h3>Customizable content<span className='hh4'><button className='hh2'>Enterprise Plan</button></span></h3>
        
        Create tailored learning paths for team and organization goals and even host your own content and resources.
        <div className='ooo'><h4>Find out more <i class="fa-solid fa-arrow-right"></i></h4></div>
        </div>
       </div>

      <div className='certificate1'>
        <img src='https://cms-images.udemycdn.com/96883mtakkm8/385IhnON960Wvz50ooWIN3/d4e6738c97769258d387b3d609edaad4/desktop-customizable-2x.png' className='certificate'></img>
      </div>



      <div className='growth'>
        <h1>Accelerate growth — for you or your organization</h1>
        <h3 className='goal'>Reach goals faster with one of our plans or programs. Try one free today or contact sales to learn more.</h3>
      </div>


      <div className='main-div'>
        <div className='div1'>
         <h3>Personal Plan</h3>
         <p className='ss1'>For you</p>
         <i class="fa-solid fa-user"></i><span className='indi'>Individual</span>
         <h4>Starting at ₹850 per month</h4>
         <p className='ss2'>Billed monthly or annually. Cancel anytime.</p>
         <button className='ss3'>Start Subscription <i class="fa-solid fa-arrow-right"></i></button>
         <br></br>
         <br></br>
         <br></br>

         <i class="fa-regular fa-circle-check"></i><span className='ss4'>Access to 11,000+ top courses</span><br></br><br></br>
         <i class="fa-regular fa-circle-check"></i><span className='ss5'>Certification prep</span><br></br><br></br>
         <i class="fa-regular fa-circle-check"></i><span className='ss6'>Goal-focused recommendations</span><br></br><br></br>
         <i class="fa-regular fa-circle-check"></i><span className='ss7'>AI-powered coding exercises</span>
        </div>


        <div className='div2'>
        <h3>Team Plan</h3>
         <p className='mm1'>For your team</p>
         <i class="fa-solid fa-user"></i><span className='indi1'>2 to 20 people</span>
         <h4>₹1,167 a month per user</h4>
         <p className='mm2'>Billed annually. Cancel anytime.</p>
         <button className='mm3'>Start Subscription <i class="fa-solid fa-arrow-right"></i></button>
         <br></br>
         <br></br>
         <br></br>

         <i class="fa-regular fa-circle-check"></i><span className='mm4'>Access to 11,000+ top courses</span><br></br><br></br>
         <i class="fa-regular fa-circle-check"></i><span className='mm5'>Certification prep</span><br></br><br></br>
         <i class="fa-regular fa-circle-check"></i><span className='mm6'>Goal-focused recommendations</span><br></br><br></br>
         <i class="fa-regular fa-circle-check"></i><span className='mm7'>AI-powered coding exercises</span><br></br><br></br>
         <i class="fa-regular fa-circle-check"></i><span className='mm8'>Analytics and adoption reports</span>

        </div>

        <div className='div3'>
        <h3>Enterprise Plan</h3>
         <p className='nn1'>For your whole organization</p>
         <i class="fa-solid fa-user"></i><span className='indi2'>More than 20 people</span>
         <h4>Contact sales for pricing</h4>
         <button className='nn3'>Request a demo <i class="fa-solid fa-arrow-right"></i></button>
         <br></br>
         <br></br>
         <br></br>

         <i class="fa-regular fa-circle-check"></i><span className='nn4'>Access to 25,000+ top courses</span><br></br><br></br>
         <i class="fa-regular fa-circle-check"></i><span className='nn5'>Certification prep</span><br></br><br></br>
         <i class="fa-regular fa-circle-check"></i><span className='nn6'>Goal-focused recommendations</span><br></br><br></br>
         <i class="fa-regular fa-circle-check"></i><span className='nn7'>AI-powered coding exercises</span><br></br><br></br>
         <i class="fa-regular fa-circle-check"></i><span className='nn8'>Advanced analytics and insights</span><br></br><br></br>
         <i class="fa-regular fa-circle-check"></i><span className='nn9'>Dedicated customer success team</span><br></br><br></br>
         <i class="fa-regular fa-circle-check"></i><span className='nn10'>International course collection featuring 15 languages</span><br></br><br></br>
         <i class="fa-regular fa-circle-check"></i><span className='nn11'>Customizable content</span><br></br><br></br>
         <i class="fa-regular fa-circle-check"></i><span className='nn12'>Hands-on tech training with add-on</span><br></br><br></br>
         <i class="fa-regular fa-circle-check"></i><span className='nn13'>Strategic implementation services with add-on</span>
        </div>
      </div>



      <div className='what'>
        <h1>See what others are achieving through learning</h1>
      </div>


      <div className='main-division1'>

        <div className='division1'>
        <img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSsZkHztJUw2I9PgopxgPUjxV9tXE3nk_Go9KQxpbVW5qq6E-4N' className='vvv'></img>
        <div className='pakka'>
        <div className='near'>Udemy was rated the <b>most popular online course or certification program </b>for learning how to code according to</div>
        <p className='near1'>Stack overflow's 2023 developer survey</p>
        <img src='https://cms-images.udemycdn.com/96883mtakkm8/2PBcNgsQa3SvYWklkiN27r/5b8707cc79c8cae5774d5eb3b88b4001/logo_stackoverflow.svg'></img>
        <p className='near2'>37,076 responses collected</p>
        <div className='near3'>View web development courses <i class="fa-solid fa-arrow-right"></i> </div>
        </div>
        </div>



        <div className='division2'>
        <img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSsZkHztJUw2I9PgopxgPUjxV9tXE3nk_Go9KQxpbVW5qq6E-4N' className='vvv'></img>
        <div className='near4'>Udemy was truly <b>a game-changer and a great guide</b> for me as we brought Dimensional to life.</div>
        <img src='https://cms-images.udemycdn.com/96883mtakkm8/1Djz6c0gZLaCG5SQS3PgUY/54b6fb8c85d8da01da95cbb94fa6335f/Alvin_Lim.jpeg ' className='home1'></img>
        <div className='near5'>Alvin LimTechnical Co-Founder, CTO at Dimensional</div>
        <div className='near6'>View this iOs & swift course <i class="fa-solid fa-arrow-right"></i> </div>
        </div>


        <div className='division3'>
        <div>
        <img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSsZkHztJUw2I9PgopxgPUjxV9tXE3nk_Go9KQxpbVW5qq6E-4N' className='vvv'></img>
        </div>
        <div className='vk1'>
        Udemy gives you the ability to be<br></br> persistent. I learned exactly what I <br></br>needed to know in the real world. It<br></br> helped me sell myself to<b> get a new role.</b>
        </div>
        <img className='vk2' src='https://cms-images.udemycdn.com/96883mtakkm8/6dT7xusLHYoOUizXeVqgUk/4317f63fe25b2e07ad8c70cda641014b/William_A_Wachlin.jpeg'></img>
        <p className='vk3'>William A. Wachlin Partner Account Manager at Amazon Web Services</p>

        <div className='vk4'>View this AWS course <i class="fa-solid fa-arrow-right"></i> </div>
        </div>



        <div className='division4'>
          <div>
          <img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSsZkHztJUw2I9PgopxgPUjxV9tXE3nk_Go9KQxpbVW5qq6E-4N' className='vvv'></img>
          </div>

          <div className='an1'>
          With Udemy Business employees <br></br>were able to marry the two together,<br></br> technology and consultant soft skills... to<br></br> help<b> drive their careers forward.</b>
          </div>

          <img className='an2' src='https://cms-images.udemycdn.com/96883mtakkm8/4w9dYD4F64ibQwsaAB01Z4/c4610e9b1ac65589d8b1374ad10714e2/Ian_Stevens.png'></img>
          <div className='an3'>Ian Stevens Head of Capability Development, North America at Publicis Sapient</div>
          <div className='an4'>Read full history <i class="fa-solid fa-arrow-right"></i> </div>
        </div>

      </div>


      <div className='big-container'>

        <div className='trend'>
          <h1 className='top'>Top trends for the future of work</h1>
          <p className='gen'>GenAI and leadership are at the core of today's skills-based economy. Get the 2024 Global Learning & Skills Trends Report to learn more.</p>
          <div className='report'><button className='but'> Get the report <i class="fa-solid fa-arrow-right"></i> </button></div>
        </div>

        
        <div className='big-image'>
        {/* <img className='multi' src='https://cms-images.udemycdn.com/content/ag3rqs5nxw/png/2024_Angled_Trends_report_image.png?position=c&quality=80&x.app=portals'></img> */}
        <img className='multi' src={logo6}></img>
        </div>

      </div>

      
      <div className='are'>Learners are viewing</div>
      <br></br>


<div className='cards' > 

          

<div className='aa'>
 <div className='one'><One/></div> 
<div> <img src={logo2} className='j'></img></div>
 
 <h4 className='u'>The Complete 2024 Web <br></br>Development Bootcamp<br></br> <h5 className='A'>Dr.Angela Yu</h5><br></br>
 <p className='p1'> 4.7<FaStar className='z'/><FaStar className='z' /><FaStar className='z' /><FaStar className='z'/><FaStar className='z' />(378,181)<br></br><MdCurrencyRupee className='y1' />399 <span className='b1'><MdCurrencyRupee className='y1' />3,099</span>
 <br></br> <button className='bu'>Bestseller</button></p>
 </h4>
</div>

<div className='bb'>
 <div className='two'><Two/></div>
 <img src={logo3}className='j'></img>

 <h4 className='v'> The Web Developer Bootcamp <br></br>2024<br></br><h5 className='B'>Colt Stelle</h5><br></br>
 <p className='p2'>4.7<FaStar className='z' /><FaStar className='z'/><FaStar className='z' /><FaStar className='z'/><FaStar className='z' />(272,363)<br></br><MdCurrencyRupee className='y1'/>399 <span className='b2'><MdCurrencyRupee className='y1' />3,099</span></p>
 </h4>

</div>

<div className='cc'>

 <img src={logo4} className='j'></img>
 <div className='ccc'> 
 <h4 >Web Development Masterclass-<br></br> Online Certification Course<br></br><h5 className='C'>YouAccel Training</h5>
 <p >4.4<FaStar className='z'/><FaStar className='z'/><FaStar className='z'/><FaStar className='z'/><FaStar className='z'/>(9,795)<br></br><MdCurrencyRupee className='y1' />399 <span className='b3'><MdCurrencyRupee className='y1' />3,099</span> </p>
 </h4>
 </div>

</div>

<div className='dd'>

 <img src={logo5} className='j'></img>
 <h4 className='x'>Practical Web Development:22<br></br>Courses in 1<br></br><h5 className='D'>Creative Online School</h5><br></br>
 <p className='p4'>4.3<FaStar className='z'/><FaStar className='z'/><FaStar className='z'/><FaStar className='z'/><FaStar className='z'/>(4,302)<br></br>
 <MdCurrencyRupee className='y1' />399 <span className='b4'><MdCurrencyRupee className='y1' />3,299</span></p>
 </h4>

</div>
</div>


<div className='footer-main-container'>

       <div className='footer-top-container'>
        <div className='footer-text-container'>
            <h5>Top companies choose </h5> <h5 className='footer-sec-text'>Udemy Business  </h5> <h5> to build in-demand career skills.</h5>
        </div>
        <div className='footer-logo-container'>
            <div><img src='https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg' /></div>
            <div><img src='https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg' /></div>
            <div><img src='https://s.udemycdn.com/partner-logos/v4/box-light.svg' /></div>
            <div><img src='https://s.udemycdn.com/partner-logos/v4/netapp-light.svg' /></div>
            <div><img  src='https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg' /></div>
        </div>
        </div>  
        <div className='footer-list-container'>
            <div>
                <ul>
                    <li><a href="#">Udemy Business</a></li>
                    <li><a href="#">Teach on Udemy</a></li>
                    <li><a href="#">Get the app</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
            </div>

            <div>
                <ul>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Help and Support</a></li>
                    <li><a href="#">Affiliate</a></li>
                    <li><a href="#">Investors</a></li>
                </ul>
            </div>

            <div>
                <ul>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Privacy policy</a></li>
                    <li><a href="#">Cookies settings</a></li>
                    <li><a href="#">Sitemap</a></li>
                    <li><a href="#">Accessibility statement</a></li>
                </ul>
            </div>
            <div className='language-english'>
                <button><MdLanguage className='icon3'/>  English</button>
            </div>
            </div>  
            <div className='footer-logo'>
                <img src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg' alt='logo' />
                </div>  
                <div className='footer-copyright'>
                    <h6>© 2024 Udemy, Inc.</h6>
                </div>
    </div>

</div>



  );
}

export default App;






