import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { FaCode } from "react-icons/fa6";
import Logo from "./Logo";
import CSS from '../assets/css-svgrepo-com.svg'
import Tailwind from '../assets/tailwind-svgrepo-com.svg'
import Javascript from '../assets/javascript-svgrepo-com.svg'
import React from '../assets/react.svg'
import Git from '../assets/git-svgrepo-com.svg'
import Npm from '../assets/npm-svgrepo-com.svg'
import Vite from '../assets/vite-svgrepo-com.svg'


const Footer = () => {


    return (
        <footer className="text-start bg-[#f7f5ef00] m-2 rounded-lg  shadow border border-[#E7E4DA]">
            <div className="fhead flex items-baseline pl-3 pr-3 pt-4 pb-4 border-b border-[#E7E4DA]">
                <Logo style={{color: '#174D3A'}}/>
                <p className="align-middle border-l border-l-[#E7E4DA] pl-2 text-[15px]">Pack less stress. Take more memories</p>
            </div>

            <div className="fmain pl-3 pr-3">
                <div className="text pt-4 pb-4 border-b border-[#E7E4DA]">
                    <h3 className="text-[#174D3A] font-medium text-[17px]">Crafted with curiosity.</h3>
                    <p className="text-[14px]">A small project built to make every journey easier.</p>
                </div>

                <div className="technologies pt-4 pb-4 border-b border-[#E7E4DA]  text-[#174D3A]">
                    <h3 className="font-medium mb-3">Built with</h3>
                    <div className="logos flex gap-4">
                        <img src={CSS} alt="css logo" height='40' width='40'/>
                        <img src={Tailwind} alt="tailwind css logo" height='40' width='40'/>
                        <img src={Javascript} alt="javascript logo" height='40' width='40'/>
                        <img src={React} alt="react logo" height='40' width='40'/>
                        <img src={Git} alt="git logo" height='40' width='40'/>
                        <img src={Npm} alt="npm logo" height='40' width='40'/>
                        <img src={Vite} alt="vite logo" height='40' width='40'/>
                    </div>
                </div>

                <div className="social-media pb-4 pt-4 border-b border-[#E7E4DA] text-[#174D3A]">
                    <h3 className="font-medium mb-3">Find me online</h3>
                    <a href="http://github.com/Kilwa220"><FiGithub className="inline text-[30px] hover:-translate-y-1 cursor-pointer transition"/></a>
                    <a><LuLinkedin className="inline ml-3 text-[30px] hover:-translate-y-1 cursor-pointer transition"/></a>
                </div>
            </div>

            <div className="ffooter text-center rounded-b-lg pt-4 pb-4 text-[14px] text-white bg-[#174D3A]">
                <div className="no-ai">
                    <FaCode className="inline mr-1 align-middle"/>
                    <p className="inline align-middle">Designed and coded from scratch, without AI-generated code</p>
                </div>
                <div className="copyright mt-2 text-[12px]">
                    &copy; {new Date().getFullYear()} Far Away. Built with React.
                </div>
            </div>

        </footer>
    )
}

export default Footer