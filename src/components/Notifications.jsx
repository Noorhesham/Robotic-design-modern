import { notification1 } from "../assets"
import { notificationImages } from "../constants"

const Notifications = ({className,title}) => {
  return (
    <div className={`${className||""} flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border-n-1/10 rounded-2xl gap-5`}>
        <img src={notification1} className=" rounded-xl w-[3.5rem]"/>
      <div className="flex-1">
        <h6 className=" mb-1 font-semibold text-base">{title}</h6>
        <div className="flex items-center justify-between">
            <ul className="flex -m-0.5">
                {notificationImages.map((image,i)=><li className=" flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden" key={i}><img src={image} className=" w-full" alt={image} /></li>)}
            </ul>
            <div className=" body-2 text-n-13">1 min ago</div>
        </div>
      </div>
    </div>
  )
}

export default Notifications
