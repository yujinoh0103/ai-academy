import "./style.css";
import { Address, useDaumPostcodePopup } from "react-daum-postcode";
import { useRef, useState } from "react";

export default function PostcodeApp() {
  const open = useDaumPostcodePopup();
  const [extraAddress, setExtraAddress] = useState("");
  const [postcode, setPostcode] = useState("");
  const [address, setAddress] = useState("");
  const detailAddress = useRef<HTMLInputElement>(null);

  const handleComplete = (data: Address) => {
    let addr = ""; // 주소 변수

    // 사용자가 선택한 주소 타입에 따라 해당 주소를 가져온다.
    if (data.userSelectedType === "R") {
      // 도로명 주소를 선택했을 경우
      addr = data.roadAddress;
    } else {
      // 지번 주소를 선택했을 경우(J)
      addr = data.jibunAddress;
    }

    // 참고항목을 보기 좋게 수정한다.
    const extraAddr = JSON.stringify(data, null, 2);
    setExtraAddress(extraAddr);

    // 우편번호와 주소 정보를 해당 필드에 넣는다.
    setPostcode(data.zonecode);
    setAddress(addr);

    // 커서를 상세주소 필드로 이동한다.
    detailAddress.current?.focus();
  };

  const execDaumPostcode = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <div className={"container"}>
      <h1>주소 검색</h1>
      <div className={"address-form"}>
        <div className={"postcode-group"}>
          <div className={"input-wrapper"}>
            <label htmlFor="postcode">우편번호</label>
            <div className={"input-with-button"}>
              <input
                type="text"
                id={"postcode"}
                placeholder="우편번호"
                readOnly
                value={postcode}
              />
              <button onClick={execDaumPostcode} className={"search-button"}>
                <span>검색</span>
              </button>
            </div>
          </div>
        </div>

        <div className={"input-group"}>
          <label htmlFor="address">기본주소</label>
          <input
            type="text"
            id={"address"}
            placeholder="기본주소"
            readOnly
            value={address}
          />
        </div>

        <div className={"input-group"}>
          <label htmlFor="detailAddress">상세주소</label>
          <input
            ref={detailAddress}
            type="text"
            id={"detailAddress"}
            placeholder="상세주소를 입력해주세요"
          />
        </div>

        <div className={"input-group"}>
          <label htmlFor="extraAddress">참고항목</label>
          <textarea
            id={"extraAddress"}
            placeholder="참고항목"
            readOnly
            value={extraAddress}
          ></textarea>
        </div>
      </div>
    </div>
  );
}
