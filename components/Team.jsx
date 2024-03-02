"use client"
import React from 'react'
import TeamCard from './TeamCard'

function Team() {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-8 my-10 justify-items-center'>
        <TeamCard
        name={"Saskara"}
        img={"/saskara.jpg"}
        job={"Web Developer"}
        linkedIn={"https://www.linkedin.com/in/saskaraputra/"}
        github={"https://github.com/PutraSaskara"}
        />
        <TeamCard
        name={"Dede"}
        img={"/dede.jpg"}
        job={"Web Developer"}
        linkedIn={"https://www.linkedin.com/in/pande-i-gede-sudiahna-s-pd-cdmp-9491a0178/"}
        github={"https://github.com/Pandeigede2803"}
        />
        <TeamCard
        name={"Antoni"}
        img={"/antoni.jpg"}
        job={"Marketing Data Analytics"}
        linkedIn={"https://www.linkedin.com/in/antonicakra/"}
        github={"https://github.com/cakract"}
        />
        <TeamCard
        name={"Theo"}
        img={"/theo2.png"}
        job={"Data Analytics"}
        linkedIn={"https://www.linkedin.com/in/theodarmawan"}
        github={"https://github.com/theodarmawan1"}
        />
    </div>
  )
}

export default Team