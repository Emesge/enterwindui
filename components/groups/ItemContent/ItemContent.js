import React, { useState } from 'react';
import Card from '../../elements/Card';
import PropTypes from 'prop-types';
import Header from '../../elements/Header';
import { toTitleCase } from '../../../utils/format';
import { EyeIcon, CodeBracketIcon, ClipboardDocumentIcon } from '@heroicons/react/24/outline';
import { conditionalCheck } from '../../../utils/helpers';

export default function CardContent(props) {
  const { header, children } = props;
  const [mode, setMode] = useState('view');
  const toggleMode = () => setMode(m =>
    conditionalCheck(m === 'view', 'code', 'view') );

  const clipboardCopy = () => {};
  return (
    <Card>
      <div className="flex flex-row justify-between">
        <Header>{toTitleCase(header)}</Header>
        <div className="flex flex-row items-center">
          {conditionalCheck(mode === 'view',
            <EyeIcon className="h-5 w-5 mx-3 hover:text-sky-700" onClick={toggleMode}/>,
            <CodeBracketIcon className="h-5 w-5 mx-3 hover:text-sky-700" onClick={toggleMode} />
          )}
          <ClipboardDocumentIcon className="h-5 w-5 mx-3 hover:text-sky-700" onClick={clipboardCopy}/>
        </div>
      </div>
      <hr/>
      <div>
        {children}
      </div>
    </Card>
  );
}

CardContent.defaultProps = {
  children: null,
  header: ''
};

CardContent.propTypes = {
  children: PropTypes.node,
  header: PropTypes.string
};
