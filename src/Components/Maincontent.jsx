import react from 'react';
import { useState,useEffect } from 'react';
import ImageSlider from './ImageSlider';
import Footer from './Footer';
import './Maincontent.css';


function Maincontent(){
    const images = [
        'https://wallpapercave.com/wp/wp2483079.jpg',
        'https://cdn.thecoolist.com/wp-content/uploads/2022/01/Types-of-Martial-Arts.png',
        'https://thebridge.in/wp-content/uploads/2020/07/Untitled-design-16.jpg',
        'https://cdn.cancercenter.com/-/media/ctca/images/others/blogs/2019/06-june/02-blog-healthy-food-l.jpg',
        // Add more image URLs as needed
    ];

    const slideInterval = 3000;

    return (
    <>
    <p>Discover a comprehensive fitness solution with our innovative app designed to elevate your health and wellness journey. Whether you're focusing on weight training, Zumba, or Martial Arts, our app provides tailored workout schedules and classes to suit every fitness level and interest. Stay on top of your nutritional goals with our intuitive diet tracker, ensuring you maintain a balanced diet that complements your active lifestyle. Track your calorie requirements effortlessly, adjusting intake and expenditure based on personalized metrics. Additionally, our water intake tracker helps you stay hydrated throughout the day, promoting optimal performance and recovery. Embrace a holistic approach to fitness with our app, empowering you to achieve your goals with structured guidance and motivational support.</p>
     <div> <ImageSlider id="image_slider" images={images} slideInterval={slideInterval} /></div>

    <div className='footer_alignment'><Footer/></div>
</>
    );
}

export default Maincontent;