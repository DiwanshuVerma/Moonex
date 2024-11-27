export const Ellipse = ({h,w, position, opacity}) => {
    return (
        <div className={`${h} ${w} cursor-pointer bg-[#EDD955] rounded-[100%] ${opacity} absolute blur-3xl ${position}` }></div>
    )
}