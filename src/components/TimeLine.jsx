import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { MdOutlineSchool } from "react-icons/md";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { RiOrganizationChart } from "react-icons/ri";
import 'react-vertical-timeline-component/style.min.css';

import React from 'react'

const TimeLine = () => {
  return (
    <div className='w-[80%] m-[10%]'>
    <h1 className="text-3xl md:text-4xl font-bold text-white mb-20 flex w-[100%] text-center justify-center">What We Bring to You</h1>
        <div className='font-sans'>
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#ff07f313', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #ff07f313' }}
                date="Small Businesses"
                iconStyle={{ background: '#ff07f3', color: '#fff' }}
                icon={<MdOutlineSchool />}
            >
                <h3 className="vertical-timeline-element-title"> <strong>Educational Institutions</strong> </h3>
                <p>
                Schools, colleges, and universities can leverage TooClarity to
                    manage promotional campaigns, attract students, and showcase their strengths. Our platform ensures
                    that educational institutions can reach their target audience effectively and expand their influence.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#07ff1313', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #07ff1313' }}
                date="Tutors and Coaches"
                iconStyle={{ background: '#24ff07', color: '#fff' }}
                icon={<LiaChalkboardTeacherSolid />}
            >
                <h3 className="vertical-timeline-element-title"> <strong>Tutors and Coaches</strong> </h3>
                <p>
                Freelance tutors and personal coaches can also benefit from TooClarity by
                    promoting their services and connecting with potential students. Our platform helps you streamline your
                    outreach and ensures you reach those who need your expertise.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#ff070713', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #ff070713' }}
                date="Non-Profit Organizations"
                iconStyle={{ background: '#ff0707', color: '#fff' }}
                icon={<RiOrganizationChart />}
            >
                <h3 className="vertical-timeline-element-title"> <strong>Non-Profit Organizations</strong> </h3>
                <p>
                Non-profits focused on education can use TooClarity to raise awareness
                for their causes, organize campaigns, and amplify their message. Our platform provides you with the tools
                to run effective campaigns and reach the right audience.
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
        </div>
    </div>
  )
}

export default TimeLine




