import React, { useRef, useState } from "react";
import { Address } from "react-daum-postcode";
import { AddressInput } from "./AddressInput";
import { PostcodeSearch } from "./PostcodeSearch";
import { PostcodeData } from "./types";
import "./styles.css";

export const PostcodeApp: React.FC = () => {
  const [addressData, setAddressData] = useState<PostcodeData>({
    postcode: "",
    address: "",
    extraAddress: "",
  });

  const detailAddress = useRef<HTMLInputElement>(null);

  const handleComplete = (data: Address) => {
    const addr =
      data.userSelectedType === "R" ? data.roadAddress : data.jibunAddress;
    const extraAddr = JSON.stringify(data, null, 2);

    setAddressData({
      postcode: data.zonecode,
      address: addr,
      extraAddress: extraAddr,
    });

    detailAddress.current?.focus();
  };

  return (
    <div className="container">
      <h1>주소 검색</h1>
      <div className="address-form">
        <PostcodeSearch
          postcode={addressData.postcode}
          onComplete={handleComplete}
        />

        <AddressInput
          label="기본주소"
          id="address"
          value={addressData.address}
          placeholder="기본주소"
          readOnly
        />

        <AddressInput
          label="상세주소"
          id="detailAddress"
          value=""
          placeholder="상세주소를 입력해주세요"
          ref={detailAddress}
        />

        <AddressInput
          label="참고항목"
          id="extraAddress"
          value={addressData.extraAddress}
          placeholder="참고항목"
          readOnly
          isTextArea
        />
      </div>
    </div>
  );
};
