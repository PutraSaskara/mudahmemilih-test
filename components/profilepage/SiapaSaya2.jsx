import React from 'react'

function SiapaSaya2({nama, asal, partai, daerah}) {
  return (
    
<dl className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700 mb-5">
    <div className="flex flex-col pb-3">
        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Nama</dt>
        <dd className="text-lg font-semibold text-black">{nama}</dd>
    </div>
    <div className="flex flex-col py-3">
        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Asal</dt>
        <dd className="text-lg font-semibold text-black">{asal}</dd>
    </div>
    <div className="flex flex-col pt-3">
        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Partai</dt>
        <dd className="text-lg font-semibold text-black">{partai}</dd>
    </div>
    <div className="flex flex-col pt-3">
        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Daerah Pilihan</dt>
        <dd className="text-lg font-semibold text-black">{daerah}</dd>
    </div>
</dl>

  )
}

export default SiapaSaya2