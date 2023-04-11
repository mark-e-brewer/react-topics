import Link from 'next/link';
import React from 'react';
import Counter from '../../components/LikeCountButton';

export default function CountByOne() {
  return (
    <>
      <div>
        <Counter color="white" />
      </div>
      <div id="hi">
        <Link passHref href="/nestedRoute/likes">
          <button type="button">
            Hello!
          </button>
        </Link>
      </div>
    </>
  );
}
