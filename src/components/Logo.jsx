import { RiSuitcase3Line  } from "react-icons/ri"

const Logo = ({ style }) => {
     return (
        <div className="logo inline pr-2">
            <div className="bg-[#F1A36B] p-[6px] rounded-lg text-[20px] font-bold text-[#174D3A] inline-flex align-middle items-center justify-center w-fit ">
                <RiSuitcase3Line />
            </div>

            <h2 className="inline font-bold ml-2" style={style}>far away.</h2>
        </div>
     )
}

export default Logo