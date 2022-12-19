import Link from 'next/link';
import React from 'react';

export default function Logo() {
  return (
    <div className="flex gap-2">
      <Link className="flex items-center gap-1 text-2xl" href={'/'}>
        <div className="font-medium">enterwind</div>
        <div className="flex items-center px-1 text-xs font-semibold tracking-widest border border-black rounded md:text-sm dark:border-slate-50">UI</div>
      </Link>
    </div>
  );
}

