import { useRef, useState } from "react";
import arrow_menu from "../assets/icons/arrow-menu.svg";

interface props {
    className?: String;
}

const lists = [
    {
        head: "Notebooks",
        namesList: ["All Notes", "Markdown", "Projects"]
    },
    {
        head: "Subject",
        namesList: []
    },
    {
        head: "Status",
        namesList: []
    },
    {
        head: "Types",
        namesList: []
    }
]

const MenuList = (props: props) => {
    const { className } = props;
    return(
        <div className={`menu-lists flex flex-col gap-[8px] ${className}`}>
            {lists.map((list) => {
                const [expanded, setExpand] = useState<boolean>(true);
                const handleButton = () => {
                    setExpand(!expanded);
                }
                return(
                    <div key={`menu-list-${list.head}`} className="bg-menu-list-background rounded-[6px] px-[6px] py-[5px]">
                        <div  className="flex">
                            <p className="text-[14px]">{list.head}</p>
                            <button type="button" className={`ml-auto  [&_path]:fill-menu-list-arrow hover:bg-menu-hoverbutton ${expanded? "scale-y-[-1]" : "scale-y-[1]"}`} onClick={handleButton}>
                                <svg
                                    width="11.892464"
                                    height="7.1787567"
                                    viewBox="0 0 11.892464 7.1787567"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M 5.9472127,6.2500001e-7 A 0.750075,0.750075 0 0 0 5.3925247,0.24414063 L 0.19721272,5.9218706 a 0.75,0.75 0 0 0 0.04687,1.06055 0.75,0.75 0 0 0 1.06054598,-0.0488 l 4.642579,-5.07226 2.044921,2.23437 2.5976573,2.83789 a 0.75,0.75 0 0 0 1.058593,0.0488 0.75,0.75 0 0 0 0.04687,-1.06055 L 9.0975927,3.0820306 6.4999367,0.24414063 A 0.750075,0.750075 0 0 0 5.9472027,6.2500001e-7 Z"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className={`${expanded && list.namesList.length !== 0? "block" : "hidden"}`}>
                            <span className="block h-[2px] w-full bg-line my-[4px]"></span>
                            <div className="block ml-[16px]">
                                {list.namesList.map((name) => (
                                    <p key={`nameList-${name}`} className="text-[14px]">
                                        {name}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                    )
                })}
        </div>
    );
}

export default MenuList;