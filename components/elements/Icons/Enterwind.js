import Link from 'next/link';
import React from 'react';

export default function Logo() {
  return (
    <div className="flex gap-2">
      <Link className="flex items-center gap-1 text-2xl" href={'/'}>
        <div className="font-medium">enterwind</div>
        <div className="flex items-center px-1 text-sm font-semibold tracking-widest border rounded border-slate-600">UI</div>
      </Link>
    </div>
  );
}

