import React from 'react';
import skillsImage from '../../../Assets/skills/skills.png';
import spring from '../../../Assets/skills/spring.png';
import node from '../../../Assets/skills/node.png';
import javaScript from '../../../Assets/skills/js.png';
import typeScript from '../../../Assets/skills/ts.png';
import react from '../../../Assets/skills/react.png';
import mongo from '../../../Assets/skills/mongo.png';
import aws from '../../../Assets/skills/aws.png';
import hib from '../../../Assets/skills/hib.png';

const Skills = () => {
    return (
        <div className='py-24'>
            <h2 className='text-[25px] text-[#E84949] font-bold'>Skills</h2>
            <div className="skills py-5 md:flex md:flex-row-reverse items-center md:py-24 justify-between">
                <div className="skillsImage" data-aos="fade-up-right">
                    <img className='block mx-auto' src={skillsImage} alt="" />
                </div>
                <div className="skillsContent py-5">
                    <p className='text-[#818080] text-[18px]'>I have a vast experience in the following web technologies:</p>
                    <div className="skill grid grid-cols-2 gap-2 md:grid-cols-4 py-5">
                        <div className="singelSkill">
                            <img className='block mx-auto py-2 h-20 w-20' src={spring} alt="" />
                            <h3>Spring Boot</h3>
                        </div>
                        <div className="singelSkill">
                            <img className='block mx-auto py-2 h-20 w-20' src={node} alt="" />
                            <h3>Node JS</h3>
                        </div>
                        <div className="singelSkill">
                            <img className='block mx-auto py-2 h-20 w-20' src={javaScript} alt="" />
                            <h3>JavaScript</h3>
                        </div>
                        <div className="singelSkill">
                            <img className='block mx-auto py-2 h-20 w-20' src={typeScript} alt="" />
                            <h3>TypeScript</h3>
                        </div>
                        <div className="singelSkill">
                            <img className='block mx-auto py-2 h-20 w-20' src={react} alt="" />
                            <h3>React JS</h3>
                        </div>
                        <div className="singelSkill">
                            <img className='block mx-auto py-2 h-20 w-20' src={mongo} alt="" />
                            <h3>MongoDB</h3>
                        </div>
                        <div className="singelSkill">
                            <img className='block mx-auto py-2 h-20 w-20' src={aws} alt="" />
                            <h3>AWS</h3>
                        </div>
                        <div className="singelSkill">
                            <img className='block mx-auto py-2 h-20 w-20' src={hib} alt="" />
                            <h3>Hibernate</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;