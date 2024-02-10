import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';
import { SlideFromTop } from '../../utils/Helper';
import classNames from 'classnames';

function Panel({ children, className, ...rest }) {
    const finalClassnames = classNames(
        'p-2 outline-none border border-[#ABB2BF] text-[18px] bg-[#30343a] text-white w-full',
        className
    );

    return (
        <SlideFromTop className={"absolute top-[125%] w-full z-10"}>
            <div {...rest} className={finalClassnames}>
                {children}
            </div>
        </SlideFromTop>
    );
}

function Dropdown({ options, value, onChange, selectLabel }) {
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (!divEl.current) { return; }
            if (!divEl.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handler, true);
        return () => {
            document.removeEventListener('click', handler);
        };
    }, []);

    const handleClick = () => {
        setIsOpen((currentIsOpen) => !currentIsOpen);
    };

    const handleOptionClick = (option) => {
        setIsOpen(false);
        onChange(option);
    }

    const renderedOptions = options.map((option) => {
        return <div className="hover:bg-[#C778DD33] select-none hover:text-white transition-all rounded cursor-pointer p-1" key={option.value} onClick={() => handleOptionClick(option)}>{option.label}</div>
    });

    return (
        <div ref={divEl} className="w-full relative">
            <div className="flex justify-between items-center cursor-pointer select-none p-2 outline-none border border-[#ABB2BF] text-[18px] bg-[#30343a] text-white w-full"
                onClick={handleClick}>{value?.label || selectLabel}
                <GoChevronDown className="text-lg" />
            </div>
            {isOpen && <Panel className="rounded-md">{renderedOptions}</Panel>}
        </div>
    );
}

export default Dropdown;