import React from 'react'
import FormfacadeEmbed from "@formfacade/embed-react";

export default function ServiceForm() {
  return (
    <FormfacadeEmbed

      formFacadeURL="https://formfacade.com/include/110635222729646613508/form/1FAIpQLScyr9GbzVspPCFA3olTmReGhmuubxbO3gf6RIXXe4pXsTBquw/classic.js/?div=ff-compose"

      onSubmitForm={() => console.log('Form submitted')}

    />

    // <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScyr9GbzVspPCFA3olTmReGhmuubxbO3gf6RIXXe4pXsTBquw/viewform?embedded=true" width="" height="" className='h-screen w-1/2 mx-auto overflow-y-hidden' frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

    // https://docs.google.com/forms/d/e/1FAIpQLSetznFfJZLCVVSz_tYil5He71KnuPmDXpC611LBBsUieq4qAw/viewform?usp=sf_link
  )
}
