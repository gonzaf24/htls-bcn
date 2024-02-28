// Ejemplo de como cargar una fuente en next.js
import { Montserrat } from 'next/font/google'

export const monstserrat = Montserrat({ subsets: ['latin'], weights: [400, 500, 600, 700] })
