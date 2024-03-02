import React from 'react'

function LikeButton() {
  return (
    <div className="flex flex-col my-20 bg-center bg-cover bg-no-repeat hover:cursor-pointer ">
      <div className="grid place-items-center mx-auto sm:my-auto rounded-3xl space-y-10 shadow-xl bg-white hover:bg-blue-300 w-full lg:w-[780px] py-10">
        <h1 className="lg:text-5xl font-semibold text-black">Like</h1>
      </div>
    </div>
  )
}

export default LikeButton