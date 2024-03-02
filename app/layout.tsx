import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '../components/Footer'
import NavBar from '../components/Navbar'
import Login from '../components/Login'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'mudahmemilh',
  description: 'Platform yang gampangin kamu buat dapet caleg yang cocok! Sekarang gak perlu bingung lagi buat cari info pemilu. MudahMemilih.com mudahin kamu dapetin info daerah pemilihan, calon legislatif mulai dari DPRD Kabupaten/Kota/Provinsi sampai ke DPR RI cuma dengan satu kali klik aja! ',
  keywords: 'caleg 2024, pemilu 2024, PUAN MAHARANI, pemilu2024, dapil 2024, daerah pemilihan, caleg, calon legislatif, dpr, drpd, kpu, bawaslu, golput, surat suara'
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {



  return (
    <html lang="en">
      <body className={inter.className}>
        <Login/>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
