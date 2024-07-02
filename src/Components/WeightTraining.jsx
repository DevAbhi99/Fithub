import React from "react";
import Weightcard from "./Weightcard";
import './WeightTraining.css'

function WeightTraining(){

return (
    <>
    <div class='nav_bar' >
<div className='title_bar'><p className="title_fitapp"><i>FitHub</i></p></div>
</div>
<p id="weight_info"></p>
<p>Weight training offers numerous benefits for overall health and well-being. It enhances muscle strength and endurance, improving daily functional activities and reducing the risk of injury. Regular weight training increases bone density, which can help prevent osteoporosis. It also boosts metabolism, aiding in weight management and fat loss. Additionally, weight training improves cardiovascular health by lowering blood pressure and cholesterol levels. Mentally, it reduces stress and anxiety, enhances mood, and boosts self-esteem. This form of exercise can also enhance cognitive function and increase longevity, contributing to a better quality of life.</p>
    <div className="weight_alignment">
        <span><Weightcard imagesrc="https://www.hussle.com/blog/wp-content/uploads/2021/03/shutterstock_1012770097-min-scaled.jpg" title="Beginner's workout" link="https://www.youtube.com/watch?v=Sou12pLJFCc&list=PL5qo1Sl2GW3cMiepxpnY3vjo7MPM-ejBh" name="Explore"/></span>
        <span><Weightcard imagesrc="https://www.mensjournal.com/.image/t_share/MTk2MTM2MDM4MTI0NDk2MDE3/dumbbell-biceps-curl.jpg" title="Intermediate Workout" link="https://www.youtube.com/watch?v=5DFAcAvT2mI" name="Explore"/></span>
        <span><Weightcard imagesrc="https://cdn.shopify.com/s/files/1/1415/6728/products/TireFlip_1024x1024.jpg?v=1499290996" title="Advanced Workout" link="https://www.youtube.com/watch?v=rRj1qb-mMwE&list=PL5qo1Sl2GW3f1u0RsZxt5AJMNV_VRB2mB" name="Explore"/></span>
        
    </div>
    </>
);

}


export default WeightTraining;