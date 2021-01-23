import React, { useState, useEffect } from "react";
import "../../style/ComponentList.css";
import { useSelector, useDispatch } from "react-redux";
import { formList } from "../../actions";
import nextId from "react-id-generator";

function ComponentList() {
  const [compList, setCompList] = useState([]);
  const dispatch = useDispatch();
  const myformList = useSelector((state) => state.formList);
  useEffect(() => {
    setCompList(myformList);
  }, [myformList]);

  // const formLists = useSelector((state) => state.formList);
  const handleFormClick = (compType) => {
    const id = nextId();
    console.log(id);
    setCompList([...myformList, { id: id, compType: compType }]);
    dispatch(formList([...myformList, { id: id, compType: compType }]));

    console.log({ id: id, compType: compType });
  };
  return (
    <div>
      <div className="component-wrapper">
        <div
          className="component-container"
          onClick={() => handleFormClick("Multiple choice")}
        >
          <div className="component-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.24929 16C3.93925 16 4.49858 16.5593 4.49858 17.2493C4.49858 17.9393 3.93925 18.4986 3.24929 18.4986C2.55933 18.4986 2 17.9393 2 17.2493C2 16.5593 2.55933 16 3.24929 16ZM6.75 16.5H21.25C21.6642 16.5 22 16.8358 22 17.25C22 17.6297 21.7178 17.9435 21.3518 17.9932L21.25 18H6.75C6.33579 18 6 17.6642 6 17.25C6 16.8703 6.28215 16.5565 6.64823 16.5068L6.75 16.5H21.25H6.75ZM3.24929 11C3.93925 11 4.49858 11.5593 4.49858 12.2493C4.49858 12.9393 3.93925 13.4986 3.24929 13.4986C2.55933 13.4986 2 12.9393 2 12.2493C2 11.5593 2.55933 11 3.24929 11ZM6.75 11.5H21.25C21.6642 11.5 22 11.8358 22 12.25C22 12.6297 21.7178 12.9435 21.3518 12.9932L21.25 13H6.75C6.33579 13 6 12.6642 6 12.25C6 11.8703 6.28215 11.5565 6.64823 11.5068L6.75 11.5H21.25H6.75ZM3.24929 6C3.93925 6 4.49858 6.55933 4.49858 7.24929C4.49858 7.93925 3.93925 8.49858 3.24929 8.49858C2.55933 8.49858 2 7.93925 2 7.24929C2 6.55933 2.55933 6 3.24929 6ZM6.75 6.5H21.25C21.6642 6.5 22 6.83579 22 7.25C22 7.6297 21.7178 7.94349 21.3518 7.99315L21.25 8H6.75C6.33579 8 6 7.66421 6 7.25C6 6.8703 6.28215 6.55651 6.64823 6.50685L6.75 6.5H21.25H6.75Z"
                fill="#121242"
              />
            </svg>
          </div>
          <div className="component-text">Multiple choice</div>
        </div>
        <div
          className="component-container"
          onClick={() => handleFormClick("Text")}
        >
          <div className="component-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 21C9.58579 21 9.25 20.6642 9.25 20.25C9.25 19.8703 9.53215 19.5565 9.89823 19.5068L10 19.5H11.25V6H6.5V6.25C6.5 6.6297 6.21785 6.94349 5.85177 6.99315L5.75 7C5.3703 7 5.05651 6.71785 5.00685 6.35177L5 6.25V4.25C5 3.83579 5.33579 3.5 5.75 3.5C6.1297 3.5 6.44349 3.78215 6.49315 4.14823L6.5 4.25V4.5H17.5V4.25C17.5 3.8703 17.7822 3.55651 18.1482 3.50685L18.25 3.5C18.6297 3.5 18.9435 3.78215 18.9932 4.14823L19 4.25V6.25C19 6.66421 18.6642 7 18.25 7C17.8703 7 17.5565 6.71785 17.5068 6.35177L17.5 6.25V6H12.75V19.5H14C14.3797 19.5 14.6935 19.7822 14.7432 20.1482L14.75 20.25C14.75 20.6297 14.4678 20.9435 14.1018 20.9932L14 21H10Z"
                fill="#121242"
              />
            </svg>
          </div>
          <div className="component-text">Text</div>
        </div>
        <div
          className="component-container"
          onClick={() => handleFormClick("Rating")}
        >
          <div className="component-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.7878 3.10251C11.283 2.09913 12.7138 2.09913 13.209 3.10251L15.567 7.88023L20.8395 8.64638C21.9468 8.80728 22.3889 10.168 21.5877 10.9491L17.7724 14.668L18.6731 19.9192C18.8622 21.022 17.7047 21.863 16.7143 21.3424L11.9984 18.8631L7.28252 21.3424C6.29213 21.863 5.13459 21.0221 5.32374 19.9192L6.2244 14.668L2.40916 10.9491C1.60791 10.168 2.05005 8.80728 3.15735 8.64638L8.42988 7.88023L10.7878 3.10251ZM11.9984 4.03891L9.74008 8.6148C9.54344 9.01324 9.16332 9.28941 8.72361 9.3533L3.67382 10.0871L7.32788 13.6489C7.64606 13.9591 7.79125 14.4059 7.71614 14.8438L6.85353 19.8732L11.3702 17.4987C11.7635 17.2919 12.2333 17.2919 12.6266 17.4987L17.1433 19.8732L16.2807 14.8438C16.2056 14.4059 16.3508 13.9591 16.6689 13.6489L20.323 10.0871L15.2732 9.3533C14.8335 9.28941 14.4534 9.01324 14.2568 8.6148L11.9984 4.03891Z"
                fill="#121242"
              />
            </svg>
          </div>
          <div className="component-text">Rating</div>
        </div>
        <div
          className="component-container"
          onClick={() => handleFormClick("Header")}
        >
          <div className="component-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.7447 1.99579C18.9356 1.99579 19.9104 2.92095 19.9896 4.09174L19.9947 4.24579V19.7439C19.9947 20.9347 19.0696 21.9095 17.8988 21.9887L17.7447 21.9939H6.24487C5.05401 21.9939 4.07923 21.0687 4.00006 19.8979L3.99487 19.7439V4.24579C3.99487 3.05492 4.92003 2.08014 6.09082 2.00098L6.24487 1.99579H17.7447ZM17.7447 3.49579H6.24487C5.86518 3.49579 5.55138 3.77794 5.50172 4.14402L5.49487 4.24579V19.7439C5.49487 20.1236 5.77703 20.4373 6.1431 20.487L6.24487 20.4939H17.7447C18.1244 20.4939 18.4382 20.2117 18.4879 19.8456L18.4947 19.7439V4.24579C18.4947 3.86609 18.2126 3.5523 17.8465 3.50264L17.7447 3.49579ZM7.00012 6.74998C7.00012 5.78348 7.78362 4.99998 8.75012 4.99998H15.2501C16.2166 4.99998 17.0001 5.78348 17.0001 6.74998V8.24998C17.0001 9.21647 16.2166 9.99998 15.2501 9.99998H8.75012C7.78362 9.99998 7.00012 9.21647 7.00012 8.24998V6.74998ZM8.75012 6.49998C8.61205 6.49998 8.50012 6.6119 8.50012 6.74998V8.24998C8.50012 8.38805 8.61205 8.49998 8.75012 8.49998H15.2501C15.3882 8.49998 15.5001 8.38805 15.5001 8.24998V6.74998C15.5001 6.6119 15.3882 6.49998 15.2501 6.49998H8.75012Z"
                fill="#121242"
              />
            </svg>
          </div>
          <div className="component-text">Header</div>
        </div>
        <div
          className="component-container"
          onClick={() => handleFormClick("Email")}
        >
          <div className="component-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.25 4H18.75C20.483 4 21.8992 5.35645 21.9949 7.06558L22 7.25V16.75C22 18.483 20.6435 19.8992 18.9344 19.9949L18.75 20H5.25C3.51697 20 2.10075 18.6435 2.00514 16.9344L2 16.75V7.25C2 5.51697 3.35645 4.10075 5.06558 4.00514L5.25 4H18.75H5.25ZM20.5 9.373L12.3493 13.6637C12.1619 13.7623 11.9431 13.7764 11.7468 13.706L11.6507 13.6637L3.5 9.374V16.75C3.5 17.6682 4.20711 18.4212 5.10647 18.4942L5.25 18.5H18.75C19.6682 18.5 20.4212 17.7929 20.4942 16.8935L20.5 16.75V9.373ZM18.75 5.5H5.25C4.33183 5.5 3.57881 6.20711 3.5058 7.10647L3.5 7.25V7.679L12 12.1525L20.5 7.678V7.25C20.5 6.33183 19.7929 5.57881 18.8935 5.5058L18.75 5.5Z"
                fill="#121242"
              />
            </svg>
          </div>
          <div className="component-text">Email</div>
        </div>
        <div
          className="component-container"
          onClick={() => handleFormClick("Yes or No")}
        >
          <div className="component-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.5 3.5C5.73858 3.5 3.5 5.73858 3.5 8.5C3.5 11.1847 5.61589 13.3752 8.27104 13.4949C8.13865 13.9732 8.05246 14.4707 8.01758 14.9824C4.65301 14.7355 2 11.9276 2 8.5C2 4.91015 4.91015 2 8.5 2C11.9276 2 14.7355 4.65301 14.9824 8.01758C14.4707 8.05246 13.9732 8.13865 13.4949 8.27104C13.3752 5.61589 11.1847 3.5 8.5 3.5ZM14.2777 13.2341C13.9834 12.9426 13.5086 12.9449 13.2171 13.2392C12.9256 13.5335 12.9279 14.0084 13.2223 14.2999L14.4368 15.5026L13.2197 16.7198C12.9268 17.0127 12.9268 17.4875 13.2197 17.7804C13.5126 18.0733 13.9875 18.0733 14.2803 17.7804L15.4994 16.5613L16.7148 17.7797C17.0074 18.073 17.4822 18.0735 17.7755 17.781C18.0687 17.4884 18.0693 17.0136 17.7768 16.7203L16.562 15.5026L17.7742 14.2993C18.0681 14.0075 18.0699 13.5326 17.7781 13.2386C17.4863 12.9447 17.0114 12.9429 16.7174 13.2347L15.4994 14.4439L14.2777 13.2341ZM15.5 9C11.9101 9 9 11.9101 9 15.5C9 19.0899 11.9101 22 15.5 22C19.0899 22 22 19.0899 22 15.5C22 11.9101 19.0899 9 15.5 9ZM10.5 15.5C10.5 12.7386 12.7386 10.5 15.5 10.5C18.2614 10.5 20.5 12.7386 20.5 15.5C20.5 18.2614 18.2614 20.5 15.5 20.5C12.7386 20.5 10.5 18.2614 10.5 15.5ZM11.2803 6.71967C11.5732 7.01256 11.5732 7.48744 11.2803 7.78033L8.28026 10.7803C8.13954 10.921 7.94867 11.0001 7.74966 11C7.55066 10.9999 7.35984 10.9208 7.21922 10.78L5.71953 9.27812C5.42685 8.98502 5.42719 8.51014 5.72029 8.21746C6.0134 7.92477 6.48827 7.92511 6.78095 8.21822L7.75031 9.18896L10.2196 6.71967C10.5125 6.42678 10.9874 6.42678 11.2803 6.71967Z"
                fill="#121242"
              />
            </svg>
          </div>
          <div className="component-text">Yes or No</div>
        </div>
        <div
          className="component-container"
          onClick={() => handleFormClick("Opinion Scale")}
        >
          <div className="component-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.74829 6.99727C2.78179 6.99727 1.99829 7.78077 1.99829 8.74727L1.99829 15.25C1.99829 16.2165 2.78179 17 3.74829 17L5.7406 17L5.74823 17.0001L5.75586 17L8.74226 17L8.74988 17.0001L8.75749 17L11.9904 17L11.998 17.0001L12.0056 17L15.2423 17C15.2448 17 15.2473 17.0001 15.2499 17.0001C15.2524 17.0001 15.2549 17 15.2575 17L18.2423 17L18.2499 17.0001L18.2575 17L20.2515 17C21.218 17 22.0015 16.2165 22.0015 15.25V8.74727C22.0015 7.78077 21.218 6.99727 20.2515 6.99727L3.74829 6.99727ZM15.9999 15.5V11.75C15.9999 11.3358 15.6641 11 15.2499 11C14.8357 11 14.4999 11.3358 14.4999 11.75V15.5L12.748 15.5V12.7501C12.748 12.3358 12.4122 12.0001 11.998 12.0001C11.5838 12.0001 11.248 12.3358 11.248 12.7501V15.5L9.49988 15.5V11.75C9.49988 11.3358 9.16409 11 8.74988 11C8.33566 11 7.99988 11.3358 7.99988 11.75V15.5L6.49823 15.5V12.7501C6.49823 12.3358 6.16244 12.0001 5.74823 12.0001C5.33402 12.0001 4.99823 12.3358 4.99823 12.7501V15.5H3.74829C3.61022 15.5 3.49829 15.3881 3.49829 15.25L3.49829 8.74727C3.49829 8.6092 3.61022 8.49727 3.74829 8.49727L20.2515 8.49727C20.3895 8.49727 20.5015 8.6092 20.5015 8.74727V15.25C20.5015 15.3881 20.3895 15.5 20.2515 15.5L18.9999 15.5V12.7501C18.9999 12.3358 18.6641 12.0001 18.2499 12.0001C17.8357 12.0001 17.4999 12.3358 17.4999 12.7501V15.5L15.9999 15.5Z"
                fill="#121242"
              />
            </svg>
          </div>
          <div className="component-text">Opinion Scale</div>
        </div>
        <div
          className="component-container"
          onClick={() => handleFormClick("Picture choice")}
        >
          <div className="component-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.75 3C19.5449 3 21 4.45507 21 6.25V17.75C21 19.5449 19.5449 21 17.75 21H6.25C4.45507 21 3 19.5449 3 17.75V6.25C3 4.45507 4.45507 3 6.25 3H17.75ZM18.3305 19.4014L12.5247 13.7148C12.2596 13.4553 11.8501 13.4316 11.5588 13.644L11.4752 13.7148L5.66845 19.4011C5.8504 19.4651 6.04613 19.5 6.25 19.5H17.75C17.9535 19.5 18.1489 19.4653 18.3305 19.4014L12.5247 13.7148L18.3305 19.4014ZM17.75 4.5H6.25C5.2835 4.5 4.5 5.2835 4.5 6.25V17.75C4.5 17.9584 4.53643 18.1583 4.60326 18.3437L10.4258 12.643C11.2589 11.8273 12.5675 11.7885 13.4458 12.5266L13.5742 12.6431L19.3964 18.3447C19.4634 18.159 19.5 17.9588 19.5 17.75V6.25C19.5 5.2835 18.7165 4.5 17.75 4.5ZM15.2521 6.5C16.4959 6.5 17.5042 7.50831 17.5042 8.75212C17.5042 9.99592 16.4959 11.0042 15.2521 11.0042C14.0083 11.0042 13 9.99592 13 8.75212C13 7.50831 14.0083 6.5 15.2521 6.5ZM15.2521 8C14.8367 8 14.5 8.33673 14.5 8.75212C14.5 9.1675 14.8367 9.50423 15.2521 9.50423C15.6675 9.50423 16.0042 9.1675 16.0042 8.75212C16.0042 8.33673 15.6675 8 15.2521 8Z"
                fill="#121242"
              />
            </svg>
          </div>
          <div className="component-text">Picture choice</div>
        </div>
        <div
          className="component-container"
          onClick={() => handleFormClick("Footer")}
        >
          <div className="component-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.7447 1.99579C18.9356 1.99579 19.9104 2.92095 19.9896 4.09174L19.9947 4.24579V19.7439C19.9947 20.9347 19.0696 21.9095 17.8988 21.9887L17.7447 21.9939H6.24487C5.05401 21.9939 4.07923 21.0687 4.00006 19.8979L3.99487 19.7439V4.24579C3.99487 3.05492 4.92003 2.08014 6.09082 2.00098L6.24487 1.99579H17.7447ZM17.7447 3.49579H6.24487C5.86518 3.49579 5.55138 3.77794 5.50172 4.14402L5.49487 4.24579V19.7439C5.49487 20.1236 5.77703 20.4373 6.1431 20.487L6.24487 20.4939H17.7447C18.1244 20.4939 18.4382 20.2117 18.4879 19.8456L18.4947 19.7439V4.24579C18.4947 3.86609 18.2126 3.5523 17.8465 3.50264L17.7447 3.49579ZM7.00012 15.75V17.25C7.00012 18.2165 7.78362 19 8.75012 19H15.2501C16.2166 19 17.0001 18.2165 17.0001 17.25V15.75C17.0001 14.7835 16.2166 14 15.2501 14H8.75012C7.78362 14 7.00012 14.7835 7.00012 15.75ZM8.75012 15.5H15.2501C15.3882 15.5 15.5001 15.6119 15.5001 15.75V17.25C15.5001 17.388 15.3882 17.5 15.2501 17.5H8.75012C8.61205 17.5 8.50012 17.388 8.50012 17.25V15.75C8.50012 15.6119 8.61205 15.5 8.75012 15.5Z"
                fill="#121242"
              />
            </svg>
          </div>
          <div className="component-text">Footer</div>
        </div>
        <div
          className="component-container"
          onClick={() => handleFormClick("Contact form")}
        >
          <div className="component-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.75 8.25C8.75 8.80228 8.30228 9.25 7.75 9.25C7.19772 9.25 6.75 8.80228 6.75 8.25C6.75 7.69772 7.19772 7.25 7.75 7.25C8.30228 7.25 8.75 7.69772 8.75 8.25ZM10.5 8.25C10.5 7.83579 10.8358 7.5 11.25 7.5H16.75C17.1642 7.5 17.5 7.83579 17.5 8.25C17.5 8.66421 17.1642 9 16.75 9H11.25C10.8358 9 10.5 8.66421 10.5 8.25ZM10.5001 12C10.5001 11.5858 10.8358 11.25 11.2501 11.25H16.7499C17.1642 11.25 17.4999 11.5858 17.4999 12C17.4999 12.4142 17.1642 12.75 16.7499 12.75H11.2501C10.8358 12.75 10.5001 12.4142 10.5001 12ZM11.2501 15C10.8358 15 10.5001 15.3358 10.5001 15.75C10.5001 16.1642 10.8358 16.5 11.2501 16.5H16.7499C17.1642 16.5 17.4999 16.1642 17.4999 15.75C17.4999 15.3358 17.1642 15 16.7499 15H11.2501ZM7.75 13C8.30228 13 8.75 12.5523 8.75 12C8.75 11.4477 8.30228 11 7.75 11C7.19772 11 6.75 11.4477 6.75 12C6.75 12.5523 7.19772 13 7.75 13ZM8.75 15.75C8.75 16.3023 8.30228 16.75 7.75 16.75C7.19772 16.75 6.75 16.3023 6.75 15.75C6.75 15.1977 7.19772 14.75 7.75 14.75C8.30228 14.75 8.75 15.1977 8.75 15.75ZM5.25 3C4.00736 3 3 4.00736 3 5.25V18.75C3 19.9926 4.00736 21 5.25 21H18.75C19.9926 21 21 19.9926 21 18.75V5.25C21 4.00736 19.9926 3 18.75 3H5.25ZM4.5 5.25C4.5 4.83579 4.83579 4.5 5.25 4.5H18.75C19.1642 4.5 19.5 4.83579 19.5 5.25V18.75C19.5 19.1642 19.1642 19.5 18.75 19.5H5.25C4.83579 19.5 4.5 19.1642 4.5 18.75V5.25Z"
                fill="#121242"
              />
            </svg>
          </div>
          <div className="component-text">Contact form</div>
        </div>
        <div
          className="component-container"
          onClick={() => handleFormClick("Section break")}
        >
          <div className="component-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 12C2.5 11.5858 2.83579 11.25 3.25 11.25H4.75C5.16421 11.25 5.5 11.5858 5.5 12C5.5 12.4142 5.16421 12.75 4.75 12.75H3.25C2.83579 12.75 2.5 12.4142 2.5 12ZM6.5 12C6.5 11.5858 6.83579 11.25 7.25 11.25H8.75C9.16421 11.25 9.5 11.5858 9.5 12C9.5 12.4142 9.16421 12.75 8.75 12.75H7.25C6.83579 12.75 6.5 12.4142 6.5 12ZM10.5 12C10.5 11.5858 10.8358 11.25 11.25 11.25H12.75C13.1642 11.25 13.5 11.5858 13.5 12C13.5 12.4142 13.1642 12.75 12.75 12.75H11.25C10.8358 12.75 10.5 12.4142 10.5 12ZM14.5 12C14.5 11.5858 14.8358 11.25 15.25 11.25H16.75C17.1642 11.25 17.5 11.5858 17.5 12C17.5 12.4142 17.1642 12.75 16.75 12.75H15.25C14.8358 12.75 14.5 12.4142 14.5 12ZM18.5 12C18.5 11.5858 18.8358 11.25 19.25 11.25H20.75C21.1642 11.25 21.5 11.5858 21.5 12C21.5 12.4142 21.1642 12.75 20.75 12.75H19.25C18.8358 12.75 18.5 12.4142 18.5 12ZM4.75 2C4.33579 2 4 2.33579 4 2.75V7C4 8.104 4.896 9 6 9H18C19.104 9 20 8.104 20 7V2.75C20 2.33579 19.6642 2 19.25 2C18.8358 2 18.5 2.33579 18.5 2.75V7C18.5 7.275 18.276 7.5 18 7.5H6C5.724 7.5 5.5 7.275 5.5 7V2.75C5.5 2.33579 5.16421 2 4.75 2ZM19.25 22C19.6642 22 20 21.6642 20 21.25V17C20 15.896 19.104 15 18 15L6 15C4.896 15 4 15.896 4 17L4 21.25C4 21.6642 4.33579 22 4.75 22C5.16421 22 5.5 21.6642 5.5 21.25L5.5 17C5.5 16.725 5.724 16.5 6 16.5L18 16.5C18.276 16.5 18.5 16.725 18.5 17V21.25C18.5 21.6642 18.8358 22 19.25 22Z"
                fill="#121242"
              />
            </svg>
          </div>
          <div className="component-text">Section break</div>
        </div>
        <div
          className="component-container"
          onClick={() => handleFormClick("Number")}
        >
          <div className="component-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.9869 2.88941C11.0639 2.48242 10.7964 2.09007 10.3894 2.01308C9.98238 1.9361 9.59003 2.20362 9.51305 2.61062L8.49396 7.99803L3.74965 8.00024C3.33544 8.00044 2.99981 8.33638 3 8.75059C3.00019 9.16481 3.33614 9.50044 3.75035 9.50024L8.2102 9.49816L7.26445 14.4979L2.74965 14.5C2.33544 14.5002 1.99981 14.8361 2 15.2503C2.00019 15.6646 2.33614 16.0002 2.75035 16L6.98068 15.998L6.01302 21.1136C5.93603 21.5206 6.20356 21.9129 6.61055 21.9899C7.01755 22.0669 7.4099 21.7994 7.48688 21.3924L8.50742 15.9973L13.9814 15.9948L13.0131 21.1136C12.9361 21.5206 13.2036 21.9129 13.6106 21.9899C14.0176 22.0669 14.41 21.7994 14.4869 21.3924L15.5081 15.994L20.2503 15.9918C20.6646 15.9916 21.0002 15.6557 21 15.2415C20.9998 14.8273 20.6639 14.4916 20.2496 14.4918L15.7919 14.4939L16.7376 9.49417L21.2503 9.49207C21.6646 9.49187 22.0002 9.15593 22 8.74172C21.9998 8.3275 21.6639 7.99187 21.2496 7.99207L17.0214 7.99404L17.987 2.88941C18.064 2.48242 17.7964 2.09007 17.3894 2.01308C16.9824 1.9361 16.5901 2.20362 16.5131 2.61062L15.4946 7.99476L10.0207 7.99731L10.9869 2.88941ZM9.73693 9.49745L15.2109 9.49489L14.2651 14.4946L8.79118 14.4972L9.73693 9.49745Z"
                fill="#121242"
              />
            </svg>
          </div>
          <div className="component-text">Number</div>
        </div>
        <div
          className="component-container"
          onClick={() => handleFormClick("Rank")}
        >
          <div className="component-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 3.74756C3 3.33335 3.33579 2.99756 3.75 2.99756H20.2541C20.8722 2.99756 21.225 3.70321 20.8541 4.19762L16.6898 9.74878L20.8541 15.2999C21.225 15.7944 20.8722 16.5 20.2541 16.5L4.5 16.4996V21.2494C4.5 21.6291 4.21785 21.9429 3.85177 21.9925L3.75 21.9994C3.3703 21.9994 3.05651 21.7172 3.00685 21.3512L3 21.2494V3.74756ZM18.7539 4.49756H4.5V15H18.7539L15.1522 10.1988C14.9522 9.93215 14.9522 9.56541 15.1522 9.29872L18.7539 4.49756Z"
                fill="#121242"
              />
            </svg>
          </div>
          <div className="component-text">Rank</div>
        </div>
        <div
          className="component-container"
          onClick={() => handleFormClick("Dropdown")}
        >
          <div className="component-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.21967 8.46967C4.51256 8.17678 4.98744 8.17678 5.28033 8.46967L12 15.1893L18.7197 8.46967C19.0126 8.17678 19.4874 8.17678 19.7803 8.46967C20.0732 8.76256 20.0732 9.23744 19.7803 9.53033L12.5303 16.7803C12.2374 17.0732 11.7626 17.0732 11.4697 16.7803L4.21967 9.53033C3.92678 9.23744 3.92678 8.76256 4.21967 8.46967Z"
                fill="#121242"
              />
            </svg>
          </div>
          <div className="component-text">Dropdown</div>
        </div>
        <div
          className="component-container"
          onClick={() => handleFormClick("Calendar")}
        >
          <div className="component-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.75 3C19.5449 3 21 4.45507 21 6.25V17.75C21 19.5449 19.5449 21 17.75 21H6.25C4.45507 21 3 19.5449 3 17.75V6.25C3 4.45507 4.45507 3 6.25 3H17.75ZM19.5 8.5H4.5V17.75C4.5 18.7165 5.2835 19.5 6.25 19.5H17.75C18.7165 19.5 19.5 18.7165 19.5 17.75V8.5ZM7.75 14.5C8.44036 14.5 9 15.0596 9 15.75C9 16.4404 8.44036 17 7.75 17C7.05964 17 6.5 16.4404 6.5 15.75C6.5 15.0596 7.05964 14.5 7.75 14.5ZM12 14.5C12.6904 14.5 13.25 15.0596 13.25 15.75C13.25 16.4404 12.6904 17 12 17C11.3096 17 10.75 16.4404 10.75 15.75C10.75 15.0596 11.3096 14.5 12 14.5ZM7.75 10.5C8.44036 10.5 9 11.0596 9 11.75C9 12.4404 8.44036 13 7.75 13C7.05964 13 6.5 12.4404 6.5 11.75C6.5 11.0596 7.05964 10.5 7.75 10.5ZM12 10.5C12.6904 10.5 13.25 11.0596 13.25 11.75C13.25 12.4404 12.6904 13 12 13C11.3096 13 10.75 12.4404 10.75 11.75C10.75 11.0596 11.3096 10.5 12 10.5ZM16.25 10.5C16.9404 10.5 17.5 11.0596 17.5 11.75C17.5 12.4404 16.9404 13 16.25 13C15.5596 13 15 12.4404 15 11.75C15 11.0596 15.5596 10.5 16.25 10.5ZM17.75 4.5H6.25C5.2835 4.5 4.5 5.2835 4.5 6.25V7H19.5V6.25C19.5 5.2835 18.7165 4.5 17.75 4.5Z"
                fill="#121242"
              />
            </svg>
          </div>
          <div className="component-text">Calendar</div>
        </div>
        <div
          className="component-container"
          onClick={() => handleFormClick("Link")}
        >
          <div className="component-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.25 7C9.66421 7 10 7.33579 10 7.75C10 8.12656 9.72249 8.4383 9.36083 8.49187L9.25 8.5H7C5.067 8.5 3.5 10.067 3.5 12C3.5 13.864 4.95707 15.3876 6.79435 15.4941L7 15.5H9.25C9.66421 15.5 10 15.8358 10 16.25C10 16.6266 9.72249 16.9383 9.36083 16.9919L9.25 17H7C4.23858 17 2 14.7614 2 12C2 9.32226 4.10496 7.13615 6.75045 7.00612L7 7H9.25ZM17 7C19.7614 7 22 9.23858 22 12C22 14.6777 19.895 16.8638 17.2495 16.9939L17 17H14.75C14.3358 17 14 16.6642 14 16.25C14 15.8734 14.2775 15.5617 14.6392 15.5081L14.75 15.5H17C18.933 15.5 20.5 13.933 20.5 12C20.5 10.136 19.0429 8.6124 17.2057 8.50594L17 8.5H14.75C14.3358 8.5 14 8.16421 14 7.75C14 7.37344 14.2775 7.0617 14.6392 7.00813L14.75 7H17ZM7 11.25H17C17.4142 11.25 17.75 11.5858 17.75 12C17.75 12.3797 17.4678 12.6935 17.1018 12.7432L17 12.75H7C6.58579 12.75 6.25 12.4142 6.25 12C6.25 11.6203 6.53215 11.3065 6.89823 11.2568L7 11.25H17H7Z"
                fill="#121242"
              />
            </svg>
          </div>
          <div className="component-text">Link</div>
        </div>
        <div
          className="component-container"
          onClick={() => handleFormClick("Payment")}
        >
          <div className="component-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.75 14.5C15.3358 14.5 15 14.8358 15 15.25C15 15.6642 15.3358 16 15.75 16H18.25C18.6642 16 19 15.6642 19 15.25C19 14.8358 18.6642 14.5 18.25 14.5H15.75ZM4.75 5C3.23122 5 2 6.23122 2 7.75V16.25C2 17.7688 3.23122 19 4.75 19H19.25C20.7688 19 22 17.7688 22 16.25V7.75C22 6.23122 20.7688 5 19.25 5H4.75ZM3.5 16.25V11H20.5V16.25C20.5 16.9404 19.9404 17.5 19.25 17.5H4.75C4.05964 17.5 3.5 16.9404 3.5 16.25ZM3.5 9.5V7.75C3.5 7.05964 4.05964 6.5 4.75 6.5H19.25C19.9404 6.5 20.5 7.05964 20.5 7.75V9.5H3.5Z"
                fill="#121242"
              />
            </svg>
          </div>
          <div className="component-text">Payment</div>
        </div>
        <div
          className="component-container"
          onClick={() => handleFormClick("Attachment")}
        >
          <div className="component-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.7717 3.74346C14.1132 1.39988 17.9121 1.39988 20.2553 3.74302C22.5384 6.02609 22.5969 9.6913 20.4309 12.0452L20.2428 12.2426L11.4427 21.0408L11.4062 21.071C9.94492 22.3878 7.69092 22.3431 6.28355 20.9357C4.96453 19.6167 4.84241 17.554 5.9172 16.0973C5.94054 16.0519 5.96879 16.0082 6.002 15.967L6.05556 15.9074L6.14247 15.8197L6.28355 15.6718L6.28647 15.6747L13.7222 8.22035C13.9881 7.95373 14.4047 7.92897 14.6986 8.14643L14.7829 8.21894C15.0495 8.48485 15.0742 8.90148 14.8568 9.19538L14.7843 9.2796L7.18966 16.8927C6.47202 17.7683 6.5219 19.0626 7.3393 19.88C8.16836 20.709 9.48801 20.7485 10.3638 19.9984L19.1965 11.1679C20.952 9.41028 20.952 6.56104 19.1946 4.80368C17.4922 3.10124 14.765 3.04804 12.9986 4.64408L12.8307 4.80368L12.8181 4.81799L3.28179 14.3543C2.9889 14.6472 2.51403 14.6472 2.22113 14.3543C1.95487 14.0881 1.93066 13.6714 2.14852 13.3778L2.22113 13.2937L11.77 3.74302L11.7717 3.74346Z"
                fill="#121242"
              />
            </svg>
          </div>
          <div className="component-text">Attachment</div>
        </div>

        <div
          className="component-container"
          onClick={() => handleFormClick("Agreement")}
        >
          <div className="component-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.75 2C18.9926 2 20 3.00736 20 4.25V19.7546C20 20.9972 18.9926 22.0046 17.75 22.0046H6.25C5.00736 22.0046 4 20.9972 4 19.7546V4.25C4 3.05914 4.92516 2.08436 6.09595 2.00519L6.25 2H17.75ZM18.5 16H5.5V19.7546C5.5 20.1688 5.83579 20.5046 6.25 20.5046H17.75C18.1642 20.5046 18.5 20.1688 18.5 19.7546V16ZM7.75129 17.5H16.25C16.6642 17.5 17 17.8358 17 18.25C17 18.6297 16.7178 18.9435 16.3518 18.9932L16.25 19H7.75129C7.33707 19 7.00129 18.6642 7.00129 18.25C7.00129 17.8703 7.28344 17.5565 7.64952 17.5068L7.75129 17.5H16.25H7.75129ZM17.75 3.5H6.25L6.14823 3.50685C5.78215 3.55651 5.5 3.8703 5.5 4.25V14.5H8V12.2455C8 11.5983 8.49187 11.066 9.12219 11.002L9.25 10.9955H14.75C15.3972 10.9955 15.9295 11.4874 15.9935 12.1177L16 12.2455V14.5H18.5V4.25C18.5 3.83579 18.1642 3.5 17.75 3.5ZM14.5 12.4955H9.5V14.5H14.5V12.4955ZM12 4.99552C13.3807 4.99552 14.5 6.11481 14.5 7.49552C14.5 8.87624 13.3807 9.99552 12 9.99552C10.6193 9.99552 9.5 8.87624 9.5 7.49552C9.5 6.11481 10.6193 4.99552 12 4.99552ZM12 6.49552C11.4477 6.49552 11 6.94324 11 7.49552C11 8.04781 11.4477 8.49552 12 8.49552C12.5523 8.49552 13 8.04781 13 7.49552C13 6.94324 12.5523 6.49552 12 6.49552Z"
                fill="#121242"
              />
            </svg>
          </div>
          <div className="component-text">Agreement</div>
        </div>
      </div>
    </div>
  );
}

export default ComponentList;