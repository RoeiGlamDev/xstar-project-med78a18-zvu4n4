import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'luxury LRP cosmetics',
  description: 'Experience the elegance of luxury LRP cosmetics, where high-end beauty meets sophistication.',
  keywords: ['cosmetics', 'luxury LRP cosmetics', 'luxury beauty products', 'high-end cosmetics'],
  authors: [{ name: 'luxury LRP cosmetics' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function