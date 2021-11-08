import React from 'react';
import { StarBorderOutlined, StarHalfOutlined, StarOutlined } from '@mui/icons-material';

const Rating = ({ value, text }) => {
  return (
    <div className="rating">
      <span>
        { value >= 1 ? <StarOutlined /> : value >= 0.5 ? <StarHalfOutlined /> : <StarBorderOutlined /> }
      </span>

      <span>
        { value >= 2 ? <StarOutlined /> : value >= 1.5 ? <StarHalfOutlined /> : <StarBorderOutlined /> }
      </span>
      <span>
        { value >= 3 ? <StarOutlined /> : value >= 2.5 ? <StarHalfOutlined /> : <StarBorderOutlined /> }
      </span>
      <span>
        { value >= 4 ? <StarOutlined /> : value >= 3.5 ? <StarHalfOutlined /> : <StarBorderOutlined /> }
      </span>
      <span>
        { value >= 5 ? <StarOutlined /> : value >= 4.5 ? <StarHalfOutlined /> : <StarBorderOutlined /> }
      </span>
      <span>{ text && text }</span>
    </div>
  )
}

export default Rating;
