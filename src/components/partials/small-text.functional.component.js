import React, { memo } from 'react';
import Typography from '@material-ui/core/Typography';

function SmallText({ text = null, align = 'left' }) {
  return (
    <Typography variant="caption" align={align} gutterBottom>
      {text}
    </Typography>
  )
}

// Wrap component using `React.memo()`
export default memo(SmallText);