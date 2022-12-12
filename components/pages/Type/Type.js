import React from 'react';
import { useRouter } from 'next/router';
import CardContent from '../../groups/ItemContent';

/* TODO create redirect to 404 if type is not found */
export default function Type() {
  const router = useRouter();
  const { type } = router.query;

  return (
    <section>
      <div
        className="max-w-screen-xl px-4 mx-auto lg:flex lg:h-screen lg:items-start"
      >
        <div className="pt-20 w-full">
          <CardContent header={type} />
        </div>
      </div>
    </section>
  );
}
