export const Button = ({label, type}) => {
    return(
<button
  className={`hover:scale-105 duration-700 relative p-3 rounded-full text-sm font-semibold overflow-hidden
    ${type === 'filled'
      ? 'bg-gradient-to-r from-[#E4B40D] to-[#FFE68F] text-black'
      : 'bg-transparent text-[#E4B40D] border-2 border-[#E4B40D]'
    }`}
>
  {label}
  <span
    className="absolute inset-0 rounded-full before:absolute before:inset-0 before:rounded-full
      before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)]
      before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0]
      before:bg-no-repeat before:transition-[background-position_0s_ease]
      hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms]"
    aria-hidden="true"
  ></span>
</button>
    )
} 