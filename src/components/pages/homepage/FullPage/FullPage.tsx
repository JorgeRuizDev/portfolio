import React, {
  ReactNode,
  RefObject,
  createRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

import FullPageElement from "./FullPageElement";
interface IFullPageProps {
  children: ReactNode[];
  topButton?: ReactNode;
  showTip?: boolean;
}
/**
 *
 * @param children Two or more children to render. Each children will be treated as an individual page
 * @param styles An array of styles, they must be in the same position as the children and will apply changes to the FullScreen children wrapper.
 * @returns
 */
function FullPage({
  children,
  topButton,
  showTip = true,
}: IFullPageProps): JSX.Element {
  const refs = useRef<RefObject<HTMLDivElement>[]>(createRefs(children.length));

  const [activeRefId, setActiveRefId] = useState(0);

  useEffect(() => {
    refs.current = createRefs(children.length);
  }, [children]);

  return (
    <>
      <SideList />
      <div>
        {children.map((c, i) => (
          <FullPageElement
            key={i}
            ref={refs.current?.[i]}
            markAsActive={() => {
              setActiveRefId(i);
            }}
          >
            {c}
          </FullPageElement>
        ))}
      </div>
    </>
  );

  function SideList(): JSX.Element {
    return (
      <div className="fixed h-screen lg:right-8 md:right-4 right-2 [z-index:21]">
        <ul className="flex flex-col items-center justify-center h-full w-full select-none space-y-3">
          <ListItem onClick={prev}>
            <FaAngleUp />
          </ListItem>
          {refs.current.map((r, i) => (
            <ListItem
              isOpen={i === activeRefId}
              key={i}
              onClick={() => r.current?.scrollIntoView()}
            >
              {i + 1}
            </ListItem>
          ))}
          <ListItem onClick={next}>
            <FaAngleDown />
          </ListItem>
        </ul>
      </div>
    );
  }

  function prev() {
    const active = activeRefId > 0 ? activeRefId - 1 : children.length - 1;
    refs.current?.[active]?.current?.scrollIntoView();
  }

  function next() {
    const active = activeRefId < children.length - 1 ? activeRefId + 1 : 0;
    refs.current?.[active]?.current?.scrollIntoView();
  }
}

interface IListItem {
  children?: ReactNode;
  isOpen?: boolean;
  onClick: () => void;
}
/**
 * Styled components has some problems with dark mode, so isOpen color scheme was broken.
 * In order to fix it, i decided to use two different components
 * @param props: IListItem
 * @returns
 */
function ListItem({ children, isOpen = false, onClick }: IListItem) {
  return (
    <li
      className={`z-10 flex items-center justify-center
       rounded-md border-2 border-primary-base bg-sky-400 hover:bg-sky-300
        cursor-pointer
        md:h-8 md:w-8 h-6 w-6
        ${isOpen && "bg-sky-900 hover:bg-sky-600"}`}
      onClick={onClick}
    >
      {children}
    </li>
  );
}

function createRefs(numberRefs: number) {
  const _refs: RefObject<HTMLDivElement>[] = [];

  for (let i = 0; i < numberRefs; i++) {
    _refs.push(createRef<HTMLDivElement>());
  }
  return _refs;
}

export default FullPage;
