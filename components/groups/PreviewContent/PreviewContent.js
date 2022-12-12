import React, { useEffect, useState } from 'react';
import Card from '../../elements/Card';
import PropTypes from 'prop-types';
import Header from '../../elements/Header';
import Prism from 'prismjs';
import { toTitleCase } from '../../../utils/format';
import { EyeIcon, CodeBracketIcon, ClipboardDocumentIcon, DevicePhoneMobileIcon, DeviceTabletIcon,
  ComputerDesktopIcon } from '@heroicons/react/24/outline';
import { conditionalCheck } from '../../../utils/helpers';

export default function PreviewContent(props) {
  const { header, component } = props;
  const [mode, setMode] = useState('view');
  const { content } = component;
  const toggleMode = () => setMode(m =>
    conditionalCheck(m === 'view', 'code', 'view') );

  const clipboardCopy = async () => {
    await navigator.clipboard.writeText(content.code);
    alert('Copied');
  };

  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <Card>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row w-full items-center">
          <Header className="mr-2">{toTitleCase(header)}</Header>
        </div>
        <div className="flex flex-row justify-end items-center divide-x-2 divide-blue-300">
          <div className="flex flex-row items-center pr-3">
            {conditionalCheck(mode === 'view',
              <EyeIcon className="h-5 w-5 mx-3 hover:text-sky-700" onClick={toggleMode}/>,
              <CodeBracketIcon className="h-5 w-5 mx-3 hover:text-sky-700" onClick={toggleMode} />
            )}
            <ClipboardDocumentIcon className="h-5 w-5 mx-3 hover:text-sky-700" onClick={clipboardCopy}/>
          </div>
          <div className="flex flex-row items-center pl-3">
            <DevicePhoneMobileIcon className="h-5 w-5 mx-3 hover:text-sky-700" onClick={clipboardCopy}/>
            <DeviceTabletIcon className="h-5 w-5 mx-3 hover:text-sky-700" onClick={clipboardCopy}/>
            <ComputerDesktopIcon className="h-5 w-5 mx-3 hover:text-sky-700" onClick={clipboardCopy}/>
          </div>
        </div>
      </div>
      <hr/>
      <div className="mt-4">
        {conditionalCheck(mode === 'view',
          <iframe className="h-[200px] w-full rounded-lg bg-white ring-2
        ring-black lg:h-[300px] lg:transition-all"
          key="item"
          loading="lazy"
          srcDoc={content.html}/>,
          <pre className="h-[300px] overflow-auto rounded-lg bg-black p-4 ring-2 ring-black lg:h-[300px]">
            <code className="language-html">{content.code}</code>
          </pre>
        )}
      </div>
    </Card>
  );
}

PreviewContent.defaultProps = {
  children: null,
  component: {},
  header: ''
};

PreviewContent.propTypes = {
  children: PropTypes.node,
  component: PropTypes.object,
  header: PropTypes.string
};
