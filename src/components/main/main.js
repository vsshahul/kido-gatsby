import React from 'react'
import './main.scss'

import dots from '../assets/dots.svg'
import boy1 from '../assets/boy1.svg'
import yogaGirl from '../assets/yogaGirl.svg'
import boxer from '../assets/boxer.svg'
import nav from '../assets/nav.svg'

import bm_1 from '../assets/bm_1.png'
import bm_2 from '../assets/bm_2.png'
import bm_3 from '../assets/bm_3.png'

import bm_4 from '../assets/bm_4.jpg'
import bm_5 from '../assets/bm_5.jpg'
import bm_6 from '../assets/bm_6.jpg'

import Logo from '../assets/logoTrans.svg'
import Tennis from '../assets/tennis.svg'

import '@mdi/font/css/materialdesignicons.min.css';

const Header = () => {
  return <main className='main'>
    <div className='center container-1'>
      <div className='illustration dots' >
      <img src={dots} alt='dots' />
      </div>
      <div className='illustrations'>
          <div className='illustration boy1' >
          <img src={boy1} alt='dots' />
          </div>
          <div className='illustration yoga-girl' >
          <img src={yogaGirl} alt='dots' />
          </div>
          <div className='illustration boxer' >
          <img src={boxer} alt='boxer' />
          </div>
      </div>
      <div className='card section' >
        <div className='card section-location'>
          <div className='heading'>
          The world of <span className='bolder'>Awesome Activities!</span> Available locally!
          </div>
          <div className='sub-heading'>
          Search for Exciting Activities from the Neighbourhood to Engage your Activkidos!
          </div>
          <div className='button-cont'>
            <button className='button'><span><img src={nav} alt='nav'/></span>Alwarpet</button>
            <input className='button' type='text' placeholder='Try Bollywood Dance Classes' name='search'/>
            <button className='button primary'><i className='mdi mdi-magnify'/></button>
          </div>

        </div>
      </div>
    </div>

    <div className='center container-2'>
      <div className='card section' >
      <div className='clip'></div>
        <div className='heading'>
        Range of Interesting Activities. Pick your Kid’s Passion
        </div>
        <div className='sub-heading'>
          Break-free your kids from being just bookworms. Feed their thirst for art and action
          with suitable activities – all near your home! From art and crafts to music and dance,
          from karate to Cricket, Activkido offers you all!
        </div>
        <div className='flex'>
          <div className='card flexItems item1'>
            <img src={bm_1} alt='guitar' />
            <p className='text'>Music</p>
          </div>

          <div className='card flexItems item2'>
            <img src={bm_2} 
         /*    srcset="img/bitmap@2x.png 2x,
             img/bitmap@3x.png 3x" */
            alt='guitar' />
            <p className='text'>Sports</p>
          </div>

          <div className='card flexItems item3'>
            <img src={bm_3} alt='guitar' />
            <p className='text'>Indoor Games</p>
          </div>

        </div>

        <div className='link-cont'>
          <div className='link'>
            Explore all Categories 
          <span className='span'><i className='mdi mdi-chevron-right' /></span>
          </div>
        </div>
       

      </div>
    </div>

    <div className='center container-3'>
      <div className='card section' >
      <div className='clip'></div>
          <div className='heading'>
          Attractive Classes, near your Home!
          </div>

          <div className='sub-heading'>
            Education is not limited to only academics.
            True education for life lies in finding one’s true passion.
            Teach your young kid to discover their passion and give them 
            the chance to pursue that. Find who is teaching what and
            what is happening where, near your home!
          </div>
          <div className='flex cont'>

            <div className='card flexItems '>
              <div className='image-cont' >
                <img src={bm_4} alt='guitar' />
                 <p className='header'>Pro Lawn Tennis Classes on weekends</p> 
              </div>             
             
              <div className='text'>
                <div className='flex'>
                <span>by shahul vs</span>
                <div className='avatarCont card'>
                  {/* imagehere */}
                </div>

                </div>
                
                <div className='link'>Book Now 
                  <span className='span'>
                    <i className='mdi mdi-chevron-right' />
                  </span>
                </div>
              </div>
            </div>

            <div className='card flexItems'>
            <div className='image-cont' >
                <img src={bm_5} alt='guitar' />
                 <p className='header'>Pro Lawn Tennis Classes on weekends</p> 
              </div> 
              <div className='text'>
                <div className='flex'>

                <span>by shahul vs</span>
                <div className='avatarCont card'>
                  {/* imagehere */}
                </div>

                </div>
                
                <div className='link'>Book Now 
                  <span className='span'>
                    <i className='mdi mdi-chevron-right' />
                  </span>
                </div>
              </div>
            </div>

            <div className='card flexItems'>
            <div className='image-cont' >
                <img src={bm_6} alt='guitar' />
                 <p className='header'>Pro Lawn Tennis Classes on weekends</p> 
              </div> 
              <div className='text'>
                <div className='flex'>

                <span>by shahul vs</span>
                <div className='avatarCont card'>
                  {/* imagehere */}
                </div>

                </div>
                
                <div className='link'>Book Now 
                  <span className='span'>
                    <i className='mdi mdi-chevron-right' />
                  </span>
                </div>
              </div>
            </div>

            </div>

      </div>
    </div>
{/* 
    <div className='slider'>
      
    </div> */}

    <div className='center container-4'>
      <div className='card section' >
      <div className='clip'></div>
        <div className='flex'>
          <div className='image card'>
            <img src={Logo} alt='logo'/>
          </div>
          <div className='about'>
            <header className='header'>
              About Us
            </header>
            <p>
            Activkido is a refreshing new online platform that addresses today’s
             modern parents’ aspirations as how to keep your kids active and 
             their minds busy. This new venture is all set to revolutionize what
              your children do today and become tomorrow. <br/>
          Activikido, a highly localized community, connects parents with activity providers 
          nearest to their homes. It offers the opportunity to ensure a busy life
          for the young kids. All is just a click away! <br/>
          A bridge that connects children, parents, service providers, educational institutions,
          Activkido helps parents win the present-day challenge of not letting the young ones 
          sit idle with gloomy boredom after school hours. At Activkido, we help keeping the kids
            engaged with all the awesome activities in the world and let their minds be busy! <br/>
          With Activkido, parents can find trainers and their activity offerings in their neighbourhood 
          that are suitable for their kids. The trainers / teachers can let the neighbourhood know
          about their courses and can get students enrolled. The schools and other such educational 
          institutions can expand their service spectrum with us and attract kids. 
          Think beyond just Academics. Think Activkido! – The all new world to embrace & shine!
            </p>
          </div>
        </div>

        <div className='flexLine card'>
          <div className='flexItem'>
            <div></div>
            <p>300+ Classes</p>
          </div>

          <div className='flexItem'>
            <div></div>
            <p>Top Instructors</p>
          </div>

          <div className='flexItem'>
            <div></div>
            <p>Verifies Profiles</p>
          </div>
        </div>
      </div>
    </div>


    <div className='center container-5'>
      <div className='card section' >
        <img src={Tennis} alt='playing tennis'/>
      <div className='heading'>
         Are you an instructor? Or Institute owner?
      </div>

      <div className='sub-heading'>
      Activkido is the perfect platform to spread news about your classes / courses / workshops to the neighbour community. Let us know about your service offerings and we bring you close to your prospective participants. Partner with Activkido and get more enrolments.  
      </div>

      <button className='primary-button'>
        Join Us
      </button>

      </div>
    </div>

  </main>
}

export default Header;