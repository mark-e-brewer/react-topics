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
      <div>
        {/* <a href="/nestedRoute/contacts">
          <p>
            Go to nested page.
          </p> */}
        {/* </a> */}
      </div>
    </>
  );
}
