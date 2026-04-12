import styled from "styled-components";

export default function CallButton({onClick}) {
  return (
    <StyledWrapper>
      <button className="learn-more">
        <span aria-hidden="true" className="circle">
          <span className="icon call">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.3 21 3 13.7 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.59a1 1 0 01-.24 1.01l-2.21 2.19z" />
            </svg>
          </span>
        </span>
        <span className="button-text">Call Now</span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    background: transparent;
    padding: 0;
    font-family: inherit;
  }

  button.learn-more {
    width: 12rem;
    height: auto;
  }

  .circle {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    box-shadow: 0 0 5px 1px white;
    position: relative;
    display: block;
    width: 3rem;
    height: 3rem;
    background: #282936;
    border-radius: 1.625rem;
  }

  .icon.call {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0.75rem;
    margin: auto;
    width: 1.4rem;
    height: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  }

  .icon.call svg {
    width: 100%;
    height: 100%;
    fill: white;
  }

  .button-text {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    inset: 0;
    margin-left: 1.85rem;
    padding: 0.75rem 0;
    color: rgba(255, 255, 255, 0.5);
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
  }

  button:hover .circle {
    width: 100%;
    box-shadow: 0 0 10px 2px white;
  }

  button:hover .icon.call {
    transform: translateX(8.7rem) rotate(10deg);
  }

  button:active .icon.call {
    transform: translateX(9.5rem) rotate(20deg);
  }

  button:hover .button-text {
    color: white;
    transform: translateX(-1.7rem);
  }

  button:active .circle {
    transform: scale(0.9);
    transition: all 0.3s;
    box-shadow: 0 0 5px 0.5px white;
  }

  button:active .button-text {
    color: rgba(255, 255, 255, 0.45);
  }
`;
