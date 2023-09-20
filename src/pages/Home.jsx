import React from 'react'
import { Link } from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa';
import HighlightText from '../components/core/HomePage/HighlightText';
import CTAButton from '../components/core/HomePage/Button';
import Banner from '../assets/Images/banner.mp4'
import CodeBlocks from '../components/core/HomePage/CodeBlocks';
import TimeLineSection from '../components/core/HomePage/TimeLineSection';
import LearningSection from '../components/core/HomePage/LearningSection';
import InstructorSection from '../components/core/HomePage/InstructorSection';
import Footer from '../components/Common/Footer';
import ExploreMore from '../components/core/HomePage/ExploreMore';
import ReviewSlider from '../components/Common/ReviewSlider';


const Home = () => {
  return (
    <div>
     
    {/*Section 1*/}
    <div className='relative mx-auto flex flex-col items-center w-11/12 max-w-maxContent text-white justify-between'>
        
        <Link to={"/signup"}>
           <div className='group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
           transition-all duration-200 hover:scale-95 w-fit'>
              <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all 
              duration-200 group-hover:bg-richblack-900'>
<<<<<<< HEAD
                  <p>Book Appointment</p>
=======
                  <p>Become an Instructor</p>
>>>>>>> 826390d4ec65052075b1ff973f3033a5571915f9
                  <FaArrowRight/>
              </div>
           </div>
        </Link>

        <div className='font-semibold text-3xl mt-7 text-center'>
<<<<<<< HEAD
            Treated more than 20 lakh patients across
            <HighlightText text={" 35 Countries"}/>
        </div>

        <div className='mt-4 w-[80%] text-center font-bold text-lg text-richblack-300'>
        Our medical team in prepared to handle a wide range of medical needs, such as primary care, and specialist consultations. We have the knowledge and experience to meet all of your healthcare needs. </div>
=======
            Empower Your Future With
            <HighlightText text={" Coding Skills"}/>
        </div>

        <div className='mt-4 w-[80%] text-center font-bold text-lg text-richblack-300'>
            With our online coding courses, you can learn at your own pace, from anywhere in it world, and get access
            to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from Instructors.
        </div>
>>>>>>> 826390d4ec65052075b1ff973f3033a5571915f9

        <div className='flex flex-row mt-8 gap-7'>
        <CTAButton active={true} linkto={"/signup"}>
            Learn More
        </CTAButton>

        <CTAButton active={false} linkto={"/login"}>
            Book a Demo
        </CTAButton>
        </div>

        <div className='mx-3 my-12 shadow-lg'>
            <video
            muted
            loop
            autoPlay
            >
            <source src={Banner}/>
            </video>
        </div>

        <div>
            <CodeBlocks 
<<<<<<< HEAD
                position={"flex flex-col lg:flex-row"}
                heading={
                    <div className='text-4xl font-semibold'>
                        What Sets
                        <HighlightText text={" HealthVistaHub "}/>
                        Apart
                    </div>
                }
                subheading={"Everything can be found online nowadays, but there are still a few things that are better with a human touch. One of them is your doctor’s appointment. Nothing beats having an in-depth conversation with your doctor in the comfort of your own home. With HealthVistaHub Health, you can schedule a doctor’s visit to your home within the next 60 minutes. With us, you have"}
                ctabtn1={
                    {
                        btnText:"Book Appointment",
=======
                position={"lg:flex-row"}
                heading={
                    <div className='text-4xl font-semibold'>
                        Unlock Your
                        <HighlightText text={" Coding Potential "}/>
                        With Our Online Courses
                    </div>
                }
                subheading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
                ctabtn1={
                    {
                        btnText:"Try it Yourself",
>>>>>>> 826390d4ec65052075b1ff973f3033a5571915f9
                        linkto:"/signup",
                        active:true,
                    }
                }
                ctabtn2={
                    {
                        btnText:"Learn More",
                        linkto:"/login",
                        active:false,
                    }
                }
<<<<<<< HEAD
                codeblock={`Schedule your appointment\nConnect With doctor\nPersonalized health check ups\nRegular and timely follow-ups are done\nGet Free Consultation\nOrder Medicine\nChat With Us\nUpload your previous Certificates\nBe Healthy\nJoin us`}
=======
                codeblock={`<!DOCTYPE html>\n<html>\n<head>\n<title>Example</title>\n<linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<ahref="/">Header</a>\n</body>\n</html>`}
>>>>>>> 826390d4ec65052075b1ff973f3033a5571915f9
                codeColor={"text-yellow-25"}
            />
        </div>

        <div>
            <CodeBlocks 
<<<<<<< HEAD
                position={"flex flex-col-reverse lg:flex-row-reverse"}
                heading={
                    <div className='text-4xl font-semibold'>
                        Join Us In
                        <HighlightText text={" Seconds"}/>
                    </div>
                }
                subheading={"Our doctors spend adequate time with our patients to identify the root cause of the problem so that we can not only cure but also prevent the problem from recurring ensuring our patient's questions are answered."}
                ctabtn1={
                    {
                        btnText:"Book Appointment",
=======
                position={"lg:flex-row-reverse"}
                heading={
                    <div className='text-4xl font-semibold'>
                        Start Coding In
                        <HighlightText text={" Seconds"}/>
                    </div>
                }
                subheading={"Go Ahead. Give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."}
                ctabtn1={
                    {
                        btnText:"Continue Lesson",
>>>>>>> 826390d4ec65052075b1ff973f3033a5571915f9
                        linkto:"/signup",
                        active:true,
                    }
                }
                ctabtn2={
                    {
                        btnText:"Learn More",
                        linkto:"/login",
                        active:false,
                    }
                }
<<<<<<< HEAD
                codeblock={`Schedule your appointment\nConnect With doctor\nPersonalized health check ups\nRegular and timely follow-ups are done\nGet Free Consultation\nOrder Medicine\nChat With Us\nUpload your previous Certificates\nBe Healthy\nJoin us`}
=======
                codeblock={`<!DOCTYPE html>\n<html>\n<head>\n<title>Example</title>\n<linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<ahref="/">Header</a>\n</body>\n</html>`}
>>>>>>> 826390d4ec65052075b1ff973f3033a5571915f9
                codeColor={"text-yellow-25"}
            />
        </div>

        <ExploreMore />

    </div>

    {/*Section 2*/}
    <div className='bg-pure-greys-5 text-richblack-700'>
       
       <div className='h-[333px] homepage_bg'>

       <div className='w-11/12 max-w-maxContent flex flex-col justify-between items-center gap-5 mx-auto'>

       <div className='h-[200px]'></div>
       <div className='text-white flex gap-7'>

       <CTAButton active={true} linkto={"/signup"}>
           
           <div className='flex gap-2 items-center'>
<<<<<<< HEAD
            Explore More
=======
            Explore Full Catalog
>>>>>>> 826390d4ec65052075b1ff973f3033a5571915f9
           <FaArrowRight/>
           </div>

       </CTAButton>

       <CTAButton active={false} linkto={"/signup"}>
           
           <div className='flex items-center'>
<<<<<<< HEAD
            Book Appointment
=======
            Learn More
>>>>>>> 826390d4ec65052075b1ff973f3033a5571915f9
           </div>

       </CTAButton>

       </div>
       
       </div>

       </div>

       <div className='w-11/12 mx-auto flex max-w-maxContent flex-col items-center justify-between gap-7'>

             <div className='flex flex-row gap-10 mb-10 mt-[100px]'>
                <div className='text-4xl font-semibold w-[45%]'>
<<<<<<< HEAD
                Consultation Made Easy!
                    <HighlightText text={" Expert doctors with proven experience, best quality medical supplies"} />
=======
                    Get the Skills you need for a
                    <HighlightText text={" Job that is in demand"} />
>>>>>>> 826390d4ec65052075b1ff973f3033a5571915f9
                </div>

                <div className='flex flex-col gap-8 w-[40%] items-start'>
                   <p className='text-[16px]'>
<<<<<<< HEAD
                   We delve deep into your prakriti and personal history, exploring factors such as lifestyle, diet, and environment; based on which a customized treatment plan is crafted.
=======
                      The modern StudyHub is the dictates its own terms. Today, to be a competitive
                      specialist requires more than professional skills.
>>>>>>> 826390d4ec65052075b1ff973f3033a5571915f9
                   </p>

                   <CTAButton active={true} linkto={"/signup"}>
                    Learn More
                   </CTAButton>
                </div>
             </div>

             <TimeLineSection />

<<<<<<< HEAD
             {/* <LearningSection /> */}
=======
             <LearningSection />
>>>>>>> 826390d4ec65052075b1ff973f3033a5571915f9
             
       </div>


    </div>

    {/*Section 3*/}
    <div className='w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-8 bg-richblack-900 text-white'>

<<<<<<< HEAD
        {/* <InstructorSection /> */}

        {/* <h2 className='font-semibold text-4xl text-center mt-10'>Review from Other Learners</h2> */}
=======
        <InstructorSection />

        <h2 className='font-semibold text-4xl text-center mt-10'>Review from Other Learners</h2>
>>>>>>> 826390d4ec65052075b1ff973f3033a5571915f9
        <ReviewSlider />
    </div>

    {/*Footer Section*/}
<<<<<<< HEAD
    {/* <Footer /> */}
=======
    <Footer />
>>>>>>> 826390d4ec65052075b1ff973f3033a5571915f9

    </div>
  )
}

export default Home
