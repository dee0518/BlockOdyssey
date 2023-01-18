import { KeyboardEvent, useRef, useCallback } from 'react';
import { defaultSelectList } from 'constants/product';

type TProps = {
  value: string;
  isOepn: boolean;
  onOpen: () => void;
  onToggle: () => void;
  onClick: (id: string) => void;
};

const SelectBox = ({ value, isOepn, onOpen, onToggle, onClick }: TProps) => {
  const ulRef = useRef<HTMLUListElement | null>(null);
  const curValue = defaultSelectList.find(({ id }) => id === value)?.title;

  const onKeyUpSelect = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      onOpen();
    }
  }, []);

  const onKeyUp = useCallback((i: number, id: string, e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      onClick(id);
      return;
    }

    if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;

    let changeIdx = -1;

    if (e.key === 'ArrowUp') changeIdx = i === 0 ? 3 : i - 1;
    else changeIdx = i === 3 ? 0 : i + 1;

    const li = (ulRef.current as HTMLUListElement).children[changeIdx] as HTMLLIElement;
    li.focus();
  }, []);

  return (
    <div className="select__box">
      <div tabIndex={0} className={isOepn ? 'on' : ''} onClick={onToggle} onKeyUp={onKeyUpSelect}>
        {curValue}
      </div>
      {isOepn && (
        <ul ref={ulRef}>
          {defaultSelectList.map(({ id, title }, i) => (
            <li
              key={id}
              className={id === value ? 'on' : ''}
              tabIndex={0}
              onClick={onClick.bind(null, id)}
              onKeyUp={onKeyUp.bind(null, i, id)}>
              {title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectBox;
