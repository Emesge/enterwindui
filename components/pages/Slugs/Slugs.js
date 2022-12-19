import React, { useCallback, useContext, useEffect, useState } from 'react';
import PreviewContent from '../../groups/PreviewContent';
import { transformComponentHtml } from '../../../utils/format';
import PropTypes  from 'prop-types';
import { conditionalCheck } from '../../../utils/helpers';
import { ThemeContext } from '../../../context/ThemeContext';

export default function Slugs(props) {
  const { theme } = useContext(ThemeContext);
  const { componentConfig } = props;
  const [componentList, setComponentList] = useState([]);

  const transformHtml = useCallback(async (component) => {
    const htmlFile = await fetch(component);
    const code = await htmlFile.text();
    const container = conditionalCheck(component.container, component.container, componentConfig.defaultContainer);
    const html = transformComponentHtml(code, container, theme);
    return { code, html };
  }, [componentConfig, theme]);

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
  }, [prepareContent, theme]);

  return (
    <section className="flex justify-center">
      <div
        className="container px-4 pt-16 lg:pt-20 lg:flex lg:min-h-screen lg:items-start"
      >
        <div className="flex flex-col w-full gap-5 lg:gap-6 ">
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
