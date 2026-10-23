
const Button = ({ title, onClick, type, style }) => {
    return (
        <button type={type} className="pl-[10px] pr-[10px] pt-[3px] pb-[3px] text-[15px] bg-sky-400 rounded-sm text-white font-medium cursor-pointer" style={style} onClick={onClick}>{title}</button>
    )
}

export default Button