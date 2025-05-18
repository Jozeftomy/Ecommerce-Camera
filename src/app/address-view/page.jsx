'use client';

import React, { Suspense } from 'react';
import ViewAddressContent from '../components/ViewAddressContent';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading address...</div>}>
      <ViewAddressContent />
    </Suspense>
  );
}
