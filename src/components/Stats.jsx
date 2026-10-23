import { SpecialHeading } from "./Form";
import { LuPlaneTakeoff } from "react-icons/lu";
import { CiCircleCheck } from "react-icons/ci";
import { LuCircleDashed } from "react-icons/lu";
import { LuLampDesk } from "react-icons/lu";

const Stats = ({ items }) => {
    const packedCount = items.filter(item => item.isPacked).length;
    const totalCount = items.length;
    const packedPercentage = Math.round((packedCount * 100) / totalCount)


    return (
        <div className="stats flex flex-col content-end text-start rounded-lg bg-[#174d3a28] w-[100%] md:w-[40%] pl-4 pr-4 pt-3 pb-3">
            <SpecialHeading as='div'>
                <LuPlaneTakeoff className="inline"/>
                <h2 className="inline ml-[10px] align-middle">Trip Progress</h2>
            </SpecialHeading>

            <div className="progress mt-2 mb-4 pb-4 border-b border-[#bebcb6]">
                <span className="text-[#64746B] text-[20px] bold">{packedPercentage}%</span>
                <div className="h-[8px] borde-none bg-[#64746b90] rounded-md mt-2 mb-2">
                    <span className="rounded-md transition-all mb-2" style={{height: '100%', display: 'block', backgroundColor: '#174D3A', width: packedPercentage + '%'}}></span>
                </div>
                <span className="text-[15px] block">{packedCount} of {totalCount} items packed</span>
            </div>

            <div className="flex items-center">
                <CiCircleCheck  className="text-[17px] text-green-700"/>

            <div className="pl-[15px] pr-[15px]">
                    <span className="block text-[#174D3A]">Packed</span>
                    <span className="text-[13px] italic">{packedCount} items</span>
                </div>
            </div>

            <div className="flex items-center mb-auto mt-3 border-b border-[#bebcb6] pb-4 ">
                <LuCircleDashed  className="text-[14px] text-green-700"/>

                <div className="pl-[15px] pr-[15px]">
                    <span className="block text-[#174D3A]">Remaining</span>
                    <span className="text-[13px] italic">{totalCount - packedCount} items</span>
                </div>
            </div>

            <div className="flex items-center  gap-2 pl-1 pr-1 pt-2 pb-2 bg-[#174d3a27] rounded-md mt-5">
                <LuLampDesk className="text-[70px] text-green-900"/>
                <div>
                    <h3 className="text-[17px] font-bold text-green-900">Travel Tip</h3>
                    <p className="text-[12px] leading-4">Don't forget your travel documents and chargers!</p>
                </div>
            </div>

        </div>
    )
}

export default Stats