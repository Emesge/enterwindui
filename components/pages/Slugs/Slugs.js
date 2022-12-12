import React, { useCallback, useEffect, useState } from 'react';
import PreviewContent from '../../groups/PreviewContent';
import { transformComponentHtml } from '../../../utils/format';
import PropTypes  from 'prop-types';

export default function Slugs(props) {
  const { componentConfig } = props;
  const [componentList, setComponentList] = useState([]);

  const transformHtml = useCallback(async (component) => {
    const htmlFile = await fetch(component);
    const code = await htmlFile.text();
    const html = transformComponentHtml(code, componentConfig.container);
    return { code, html };
  }, [componentConfig]);

  const prepareContent = useCallback(async () => {
    const lists = componentConfig.variant.map(async item => {
      item.content = await transformHtml(item.component, componentConfig.container);
      return item;
    });

    const results = await Promise.all(lists);
    setComponentList(results);

  }, [componentConfig, transformHtml]);

  useEffect(() => {
    prepareContent();
  }, [prepareContent]);

  return (
    <section>
      <div
        className="max-w-screen-xl px-4 mx-auto lg:flex lg:h-screen lg:items-start"
      >
        <div className="pt-20 w-full">
          {componentList.map((component, index) =>
            (<PreviewContent component={component}
              header={component.name} key={`component-${index}`}
            />))}
        </div>
      </div>
    </section>
  );
}

Slugs.defaultProps = {
  componentConfig : {},
};

Slugs.propTypes = {
  componentConfig: PropTypes.object,
};
