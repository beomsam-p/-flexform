import { Button, Dropdown } from 'antd';
import { Label } from 'components/CommonCss';
import React from 'react';

const SurveyFormLabels = ({ labelItems, labelColors, selectedIndex, isLoading }) => {
  return (
    <Dropdown menu={{ items: labelItems }} placement="bottomLeft" trigger={['click']}>
      <Button style={{ width: '100px', marginLeft: '10px' }}>
        {isLoading ? (
          <div>loading ... </div>
        ) : (
          <Label labelColor={labelColors[selectedIndex].colorCode}>{labelColors[selectedIndex].colorName}</Label>
        )}
      </Button>
    </Dropdown>
  );
};

export default SurveyFormLabels;
