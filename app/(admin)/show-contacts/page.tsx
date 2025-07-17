// app/contact/page.tsx or wherever your route lives
import { Contact } from '@prisma/client';
import React from 'react'

const page = async() => {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/contact`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    return <div className="p-8 text-red-600">Failed to fetch contact messages.</div>;
  }

  const data: Contact[] = await res.json();

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Contact Messages</h1>
      <div className="grid gap-4">
        {data.map((contact) => (
          <div key={contact.id} className="border p-4 rounded-lg">
            <h3 className="font-semibold">{contact.name}</h3>
            <p className="text-gray-600">{contact.email}</p>
            <p className="text-gray-600">{contact.phone}</p>
            <p className="font-medium">{contact.subject}</p>
            <p className="mt-2">{contact.message}</p>
            <p className="text-sm text-gray-500 mt-2">
              {new Date(contact.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page