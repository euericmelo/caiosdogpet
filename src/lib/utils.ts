import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Converte o `yyyy-mm-dd` de um <input type="date"> para `dd/mm/yyyy`.
 *
 * Feito na string de propósito: `new Date("2026-08-15")` é lido como meia-noite
 * UTC e, no fuso do Brasil, volta um dia — o tutor pediu 15 e o WhatsApp diria 14.
 */
export function formatDateBR(isoDate: string) {
  const [year, month, day] = isoDate.split("-")
  if (!year || !month || !day) return isoDate
  return `${day}/${month}/${year}`
}
