import React from 'react';
import { useRouter } from 'next/router';

// you may only have one dynamic file per directory

export default function DynamicRoute() {
  const router = useRouter();
  const { dynamicKey } = router.query; // key is the same as the name of the file

  return <div>ID = {dynamicKey}</div>;
}
