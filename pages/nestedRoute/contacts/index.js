import React from 'react';
import Link from 'next/link';

export default function nestPage() {
  return (
    <div>
      <h1>HELLO YOU MADE IT!</h1>
      <Link href="/nestedRoute/contacts/nestPage">
        <p>Go even further!!!</p>
      </Link>
    </div>
  );
}
