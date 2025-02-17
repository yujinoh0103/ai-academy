import React from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { PostcodeSearchProps } from './types';
import './styles.css';

export const PostcodeSearch: React.FC<PostcodeSearchProps> = ({ postcode, onComplete }) => {
  const open = useDaumPostcodePopup();

  const execDaumPostcode = () => {
    open({ onComplete });
  };

  return (
    <div className="postcode-group">
      <div className="input-wrapper">
        <label htmlFor="postcode">우편번호</label>
        <div className="input-with-button">
          <input
            type="text"
            id="postcode"
            placeholder="우편번호"
            readOnly
            value={postcode}
          />
          <button onClick={execDaumPostcode} className="search-button">
            <span>검색</span>
          </button>
        </div>
      </div>
    </div>
  );
};
