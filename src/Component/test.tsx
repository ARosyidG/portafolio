import { useRef, useState } from 'react';

export default function AutoHeightTransition() {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState('0px');
    let current = contentRef.current?.scrollHeight ?? 1; 
  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setHeight(isOpen ? '0px' : `${current}px`);
  };

  return (
    <div>
      <button onClick={toggleOpen}>
        {isOpen ? 'Close' : 'Open'}
      </button>
      <div
        style={{
          height: height,
          overflow: 'hidden',
          transition: 'height 0.3s ease',
        }}
        ref={contentRef}
      >
        <div>
          <p>This is some content inside the div!</p>
          <p>It can be expanded and collapsed.</p>
        </div>
      </div>
    </div>
  );
}
