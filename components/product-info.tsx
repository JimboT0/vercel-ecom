"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart"

import { SanityProduct } from "@/config/inventory"
import { getSizeName } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

interface Props {
  product: SanityProduct
}


export function ProductInfo({product}: Props) {
 const {toast} = useToast()

 const createEnquiryLink = () => {
  const email = 'james@origintime.co.za';
  const subject = `Enquiry about ${product.name}`;
  const message = `Good day, I would be interested in the ${product.name}, Please tell me more about it.`;

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

  // Open the user's default email client
  window.location.href = mailtoLink;
};



  return (
    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
      <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>

      <div className="mt-3">
        <h2 className="sr-only">Product information</h2>
        <p className="text-3xl tracking-tight">{formatCurrencyString({ value: product.price, currency: product.currency})}</p>
      </div>

      <div className="mt-6">
        <h3 className="sr-only">Description</h3>
        <div className="space-y-6 text-base">{product.description}</div>
      </div>

      <form className="mt-6">
        <div className="mt-4 flex">

          <button
            type="button"
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded w-40 text-center"
            onClick={createEnquiryLink}
          >
            Enquire
          </button>
        </div>
      </form>
    </div>
  )
}
