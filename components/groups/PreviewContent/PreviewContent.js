import React, { useState } from 'react';
import Card from '../../elements/Card';
import PropTypes from 'prop-types';
import Header from '../../elements/Header';
import { toTitleCase } from '../../../utils/format';
import {
  EyeIcon, CodeBracketIcon, ClipboardDocumentIcon, DevicePhoneMobileIcon, DeviceTabletIcon,
  ComputerDesktopIcon
} from '@heroicons/react/24/outline';
import { conditionalCheck } from '../../../utils/helpers';
import Code from '../../elements/Code';
import IconButton from '../../elements/IconButton';
import Iframe from '../../elements/Iframe';

export default function PreviewContent(props) {
  const { header, component } = props;
  const [mode, setMode] = useState('view');
  const { content } = component;
  const toggleMode = () => setMode(m =>
    conditionalCheck(m === 'view', 'code', 'view'));

  const clipboardCopy = async () => {
    await navigator.clipboard.writeText(content.code);
    alert('Copied');
  };

  return (
    <Card>
      <div className="flex flex-col justify-between gap-1 lg:flex-row">
        <div className="flex flex-row items-center w-full">
          <Header>{toTitleCase(header)}</Header>
        </div>
        <div className="flex flex-col lg:text-md text-slate-500 dark:text-slate-400 lg:divide-x-2 lg:flex-row lg:justify-end lg:items-center lgflex-row divide-slate-300 dark:divide-slate-600">
          <div className="flex flex-row items-center gap-4 pr-4">
            {conditionalCheck(mode === 'view',
              <IconButton icon={
                <EyeIcon className="w-5 h-5 hover:text-pink-400" />
              } label="View" onClick={toggleMode} position="left" />,
              <IconButton icon={
                <CodeBracketIcon className="w-5 h-5 hover:text-pink-400" />
              } label="Code" onClick={toggleMode} position="left" />
            )}
            <IconButton icon={
              <ClipboardDocumentIcon className="w-5 h-5 hover:text-pink-400" onClick={clipboardCopy} />
            } label="Copy" onClick={clipboardCopy} position="left" />
          </div>
          <div className="flex-row items-center hidden gap-4 pl-4 text-slate- lg:flex">
            <DevicePhoneMobileIcon className="w-5 h-5 hover:text-pink-400" onClick={clipboardCopy} />
            <DeviceTabletIcon className="w-5 h-5 hover:text-pink-400" onClick={clipboardCopy} />
            <ComputerDesktopIcon className="w-5 h-5 hover:text-pink-400" onClick={clipboardCopy} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center rounded-lg shadow-inner bg-slate-50 dark:bg-slate-900">
        {conditionalCheck(mode === 'view',
          <Iframe source={content.html} />,
          <Code code={content.code} height={400} languageType="html" />
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
