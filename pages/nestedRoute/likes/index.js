import React from 'react';
import Link from 'next/link';

export default function nestPage() {
  return (
    <div>
      <h1>HELLO YOU MADE IT!</h1>
      <Link passHref href="/nestedRoute/likes/nestPage">
        <p>click me to go even further!!!</p>
      </Link>
    </div>
  );
}
