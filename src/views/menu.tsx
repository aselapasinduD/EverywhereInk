import MenuList from "../components/menu_list";
import { handleButton } from "../events";

interface props {
    className?: String;
}

const Menu = (props: props) => {
    const { className } = props;
    return(
        <div className={`menu px-[8px] ${className}`}>
            <div className="menu-heading flex items-center">
                <div className="username-section">
                    <h1 className="username text-[18px]">AselaPasindu21</h1>
                    <p className="email text-[10px] font-extralight leading-none">asela.pasindu.dias17@gmail.com</p>
                </div>
                <button type="button" className="ml-auto w-[-webkit-fill-available]" onClick={handleButton} >
                    <svg className="[&>path]:fill-menu-setting-icon" version="1.1" baseProfile="basic" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
                        <path d="M57.531,30.556C58.96,30.813,60,32.057,60,33.509v4.983c0,1.452-1.04,2.696-2.469,2.953l-2.974,0.535
                            c-0.325,1.009-0.737,1.977-1.214,2.907l1.73,2.49c0.829,1.192,0.685,2.807-0.342,3.834l-3.523,3.523
                            c-1.027,1.027-2.642,1.171-3.834,0.342l-2.49-1.731c-0.93,0.477-1.898,0.889-2.906,1.214l-0.535,2.974
                            C41.187,58.96,39.943,60,38.491,60h-4.983c-1.452,0-2.696-1.04-2.953-2.469l-0.535-2.974c-1.009-0.325-1.977-0.736-2.906-1.214
                            l-2.49,1.731c-1.192,0.829-2.807,0.685-3.834-0.342l-3.523-3.523c-1.027-1.027-1.171-2.641-0.342-3.834l1.73-2.49
                            c-0.477-0.93-0.889-1.898-1.214-2.907l-2.974-0.535C13.04,41.187,12,39.943,12,38.491v-4.983c0-1.452,1.04-2.696,2.469-2.953
                            l2.974-0.535c0.325-1.009,0.737-1.977,1.214-2.907l-1.73-2.49c-0.829-1.192-0.685-2.807,0.342-3.834l3.523-3.523
                            c1.027-1.027,2.642-1.171,3.834-0.342l2.49,1.731c0.93-0.477,1.898-0.889,2.906-1.214l0.535-2.974C30.813,13.04,32.057,12,33.509,12
                            h4.983c1.452,0,2.696,1.04,2.953,2.469l0.535,2.974c1.009,0.325,1.977,0.736,2.906,1.214l2.49-1.731
                            c1.192-0.829,2.807-0.685,3.834,0.342l3.523,3.523c1.027,1.027,1.171,2.641,0.342,3.834l-1.73,2.49
                            c0.477,0.93,0.889,1.898,1.214,2.907L57.531,30.556z M36,45c4.97,0,9-4.029,9-9c0-4.971-4.03-9-9-9s-9,4.029-9,9
                            C27,40.971,31.03,45,36,45z"/>
                    </svg>
                </button>
            </div>
            <span className="block h-[2px] w-full bg-line my-[8px]"></span>
            <MenuList />
        </div>
    );
}

export default Menu;