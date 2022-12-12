import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ItemContent from '../../groups/ItemContent';
import { transformComponentHtml } from '../../../utils/format';

/* TODO create redirect to 404 if slugs/type is not found */
export default function Components() {
  const router = useRouter();
  const { slugs, type } = router.query;
  const [html, setHtml ] = useState(null);

  const transformHtml = useCallback(async () => {
    try {
      const sampleContainer = 'max-w-sm mx-auto p-8 dark:bg-slate-800';
      const htmlFile = await fetch(`/components/${type}/${slugs}.html`);
      const responseText = await htmlFile.text();
      const renderedHtml = transformComponentHtml(responseText, sampleContainer);
      setHtml(renderedHtml);
    } catch(err){
      router.replace('/');
    }
  }, [slugs, router, type]);


  useEffect(() => {
    transformHtml();
  }, [transformHtml]);

  return (
    <section>
      <div
        className="max-w-screen-xl px-4 mx-auto lg:flex lg:h-screen lg:items-start"
      >
        <div className="pt-20 w-full">
          <ItemContent header={slugs} >
            {/* TODO Split Iframe to elements component */}
            <iframe className="mt-4 h-[200px] w-full rounded-lg bg-white ring-2 ring-black lg:h-[300px] lg:transition-all"
              key="item"
              loading="lazy"
              srcDoc={html}/>
          </ItemContent>
        </div>
      </div>
    </section>
  );
}
