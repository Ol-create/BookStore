import React from 'react';
import { useSelector } from 'react-redux';

import { checkStatus } from '../redux/categories/categories';

const Categories = () => (
  <div>
    <button type="button" className="checkBtn">Check Status</button>
  </div>
);

export default Categories;