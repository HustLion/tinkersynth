// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  displacement: number,
  dragging: boolean,
  onMouseDown: Function,
  width: number,
  height: number,
  color?: string,
  style?: Object,
};

const HANDLE_BUFFER = 6;

const Handle = ({
  displacement,
  dragging,
  onMouseDown,
  width,
  height,
  color = '#FF27E9',
  style = {},
}: Props) => (
  <Wrapper
    onMouseDown={onMouseDown}
    style={{
      width,
      height,
      position: 'absolute',
      // To make it easier to grab, add a buncha clickable padding, around
      padding: HANDLE_BUFFER,
      boxSizing: 'content-box',
      // We have to undo that padding in transform: translate, as well as apply
      // the displacement.
      transform: `translate(${-HANDLE_BUFFER}px, ${displacement -
        HANDLE_BUFFER}px)`,
      cursor: dragging ? 'grabbing' : 'grab',
      ...style,
    }}
  >
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 14"
      fill="none"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient
          id="slider-handle-gradient"
          x1="5.45455"
          y1="-1.24452"
          x2="11.0241"
          y2="12.129"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.49" />
          <stop offset="0.413809" stopColor="#A6A4A4" stopOpacity="0" />
          <stop offset="0.749814" stopColor="#A6A6A6" stopOpacity="0" />
          <stop offset="1" stopOpacity="0.07" />
        </linearGradient>
      </defs>

      <path
        d="M0.5 7.13333C0.5 5.14429 0.5 4.14977 0.845818 3.37305C1.24787 2.47004 1.97004 1.74787 2.87305 1.34582C3.64977 1 4.64429 1 6.63333 1H14.3667C16.3557 1 17.3502 1 18.1269 1.34582C19.03 1.74787 19.7521 2.47004 20.1542 3.37305C20.5 4.14977 20.5 5.14429 20.5 7.13333V7.13333C20.5 9.12237 20.5 10.1169 20.1542 10.8936C19.7521 11.7966 19.03 12.5188 18.1269 12.9208C17.3502 13.2667 16.3557 13.2667 14.3667 13.2667H6.63333C4.64429 13.2667 3.64977 13.2667 2.87305 12.9208C1.97004 12.5188 1.24787 11.7966 0.845818 10.8936C0.5 10.1169 0.5 9.12237 0.5 7.13333V7.13333Z"
        fill="black"
        fillOpacity="0.25"
      />
      <path
        d="M0 6.13333C0 4.14429 0 3.14977 0.345818 2.37305C0.747867 1.47004 1.47004 0.747867 2.37305 0.345818C3.14977 0 4.14429 0 6.13333 0H13.8667C15.8557 0 16.8502 0 17.6269 0.345818C18.53 0.747867 19.2521 1.47004 19.6542 2.37305C20 3.14977 20 4.14429 20 6.13333V6.13333C20 8.12237 20 9.11689 19.6542 9.89361C19.2521 10.7966 18.53 11.5188 17.6269 11.9208C16.8502 12.2667 15.8557 12.2667 13.8667 12.2667H6.13333C4.14429 12.2667 3.14977 12.2667 2.37305 11.9208C1.47004 11.5188 0.747867 10.7966 0.345818 9.89361C0 9.11689 0 8.12237 0 6.13333V6.13333Z"
        fill={color}
      />
      <g style={{ mixBlendMode: 'luminosity' }}>
        <path
          d="M0 6.42215C0 4.43311 0 3.43859 0.345818 2.66187C0.747867 1.75886 1.47004 1.03669 2.37305 0.634636C3.14977 0.288818 4.14429 0.288818 6.13333 0.288818H13.8667C15.8557 0.288818 16.8502 0.288818 17.6269 0.634636C18.53 1.03669 19.2521 1.75886 19.6542 2.66187C20 3.43859 20 4.43311 20 6.42215V6.42215C20 8.41119 20 9.40571 19.6542 10.1824C19.2521 11.0854 18.53 11.8076 17.6269 12.2097C16.8502 12.5555 15.8557 12.5555 13.8667 12.5555H6.13333C4.14429 12.5555 3.14977 12.5555 2.37305 12.2097C1.47004 11.8076 0.747867 11.0854 0.345818 10.1824C0 9.40571 0 8.41119 0 6.42215V6.42215Z"
          fill="url(#slider-handle-gradient)"
        />
      </g>
    </svg>
  </Wrapper>
);

const Wrapper = styled.button`
  border: none;
  background: transparent;
  padding: 0;

  &:focus:not(.focus-visible) {
    outline: none;
  }
`;
export default Handle;
