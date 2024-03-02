import Image from 'next/image'
import React from 'react'

function EventImage() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 max-w-[400px] md:max-w-[600px] place-items-center mx-auto mt-10">
    <Image
        className="hover:opacity-75"
        src="https://source.unsplash.com/collection/1346951/150x150?sig=1"
        width={150}
        height={150}
        alt="Image 1"
      />
      <Image
        className="hover:opacity-75"
        src="https://source.unsplash.com/collection/1346951/150x150?sig=2"
        width={150}
        height={150}
        alt="Image 2"
      />
      <Image
        className="hover:opacity-75"
        src="https://source.unsplash.com/collection/1346951/150x150?sig=3"
        width={150}
        height={150}
        alt="Image 3"
      />
      <Image
        className="hover:opacity-75"
        src="https://source.unsplash.com/collection/1346951/150x150?sig=4"
        width={150}
        height={150}
        alt="Image 4"
      />
      <Image
        className="hover:opacity-75"
        src="https://source.unsplash.com/collection/1346951/150x150?sig=5"
        width={150}
        height={150}
        alt="Image 5"
      />
      <Image
        className="hover:opacity-75"
        src="https://source.unsplash.com/collection/1346951/150x150?sig=6"
        width={150}
        height={150}
        alt="Image 6"
      />
</div>
  )
}

export default EventImage