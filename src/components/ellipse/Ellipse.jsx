export const Ellipse = ({h,w, position, blur}) => {
    return (
        <div className={`${h} ${w} cursor-pointer bg-[#EDD955] rounded-[100%] absolute ${blur} ${position}` }></div>
    )
}