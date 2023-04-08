import Link from 'next/link';
import React from 'react';
import Counter from '../../components/LikeCountButton';

export default function CountByOne() {
  return (
    <>
      <div>
        <Counter />
        <Counter color="red" />
        <Counter color="green" />
      </div>
      <div id="hi">
        <Link passHref href="/nestedRoute/contacts">
          <p>
            Hello!
          </p>
        </Link>
      </div>
    </>
  );
}
