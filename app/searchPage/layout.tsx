import type { Metadata } from 'next'

export const metadata: Metadata = {
  keywords: 'daftar caleg 2024, caleg tetap pemilu 2024, caleg bali, caleg jawa timur, caleg yogyakarta, caleg jawa tengah, caleg jawa barat, caleg banten, caleg jakarta'
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
      {children}
    </>

  )
}
  