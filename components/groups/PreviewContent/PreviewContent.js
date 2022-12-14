import React, { useState } from 'react';
import Card from '../../elements/Card';
import PropTypes from 'prop-types';
import Header from '../../elements/Header';
import { toTitleCase } from '../../../utils/format';
import { EyeIcon, CodeBracketIcon, ClipboardDocumentIcon, DevicePhoneMobileIcon, DeviceTabletIcon,
  ComputerDesktopIcon } from '@heroicons/react/24/outline';
import { conditionalCheck } from '../../../utils/helpers';
import Code from '../../elements/Code';
import IconButton from '../../elements/IconButton';
import Iframe from '../../elements/Iframe';

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

  return (
    <Card>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center w-full">
          <Header className="mr-2">{toTitleCase(header)}</Header>
        </div>
        <div className="flex flex-row items-center justify-end divide-x-2 divide-blue-300">
          <div className="flex flex-row items-center pr-3">
            {conditionalCheck(mode === 'view',
              <IconButton icon={
                <EyeIcon className="w-5 h-5 mx-3 hover:text-sky-700" />
              } label="View" onClick={toggleMode} position="left" />,
              <IconButton icon={
                <CodeBracketIcon className="w-5 h-5 mx-3 hover:text-sky-700"/>
              } label="Code" onClick={toggleMode} position="left" />
            )}
            <IconButton icon={
              <ClipboardDocumentIcon className="w-5 h-5 mx-3 hover:text-sky-700" onClick={clipboardCopy}/>
            } label="Copy" onClick={clipboardCopy} position="left" />
          </div>
          <div className="flex flex-row items-center pl-3">
            <DevicePhoneMobileIcon className="w-5 h-5 mx-3 hover:text-sky-700" onClick={clipboardCopy}/>
            <DeviceTabletIcon className="w-5 h-5 mx-3 hover:text-sky-700" onClick={clipboardCopy}/>
            <ComputerDesktopIcon className="w-5 h-5 mx-3 hover:text-sky-700" onClick={clipboardCopy}/>
          </div>
        </div>
      </div>
      <hr/>
      <div className="mt-4">
        {conditionalCheck(mode === 'view',
          <Iframe source={content.html} />,
          <Code code={content.code} height={400} languageType="html"/>
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
