import React, { useRef } from 'react';
import './Testimonial.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';  
import user_2 from '../../assets/user-2.png';  
import user_3 from '../../assets/user-3.png';  
import user_4 from '../../assets/user-4.png';  

const Testimonial = () => {
    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) { // Move left if there are more slides
            tx -= 25; // Move by 25% each time
        }
        slider.current.style.transform = `translateX(${tx}%)`; // Proper use of template literal
    };

    const slideBackward = () => {
        if (tx < 0) { // Move right if not at the first slide
            tx += 25; // Move back by 25%
        }
        slider.current.style.transform = `translateX(${tx}%)`; // Proper use of template literal
    };

    return (
        <div className='testimonial'>
            <img src={next_icon} alt="Next" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="Back" className='back-btn' onClick={slideBackward} />
            <div className='slider'>
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="User 1" />
                                <div>
                                    <h3>Willam Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="User 2" />
                                <div>
                                    <h3>Willam Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="User 3" />
                                <div>
                                    <h3>Willam Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="User 4" />
                                <div>
                                    <h3>Willam Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Testimonial;
