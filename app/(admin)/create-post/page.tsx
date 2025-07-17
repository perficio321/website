import React from 'react'

import { redirect } from 'next/navigation'
import CreatePosts from '@/components/Blogs/CreatePosts'
import { auth } from '@/auth'

const page = async () => {
  const session = await auth();
  if(!session || session.user.role !== "ADMIN")  {redirect('/sign-in')}
  console.log(session)
  return (
    <div><CreatePosts/></div>
  )
}


export default page