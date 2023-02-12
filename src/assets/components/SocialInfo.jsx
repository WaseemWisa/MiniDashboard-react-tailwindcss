import {useContext, useState} from 'react'
import {Data} from '../data.jsx'
import {GoTriangleUp}  from "react-icons/go";
import authContext from '../../App.jsx';
function SocialInfo() {
  const [myData, setMyData] = useState(Data);
  const arrow = <GoTriangleUp />;



  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">

      {myData.map((item, i) => {
        return (
          <div
            className={`box  ${
              "border-t-" + item.paltFormName
            } flex flex-col items-center justify-center gap-y-[20px] dark:bg-slate-700 shadow-lg` }
            key={i}
          >
            <h4 className="flex items-center mt-5">
              <span className={`mr-[0.2rem]  font-normal text-2xl ${"text-" + item.paltFormName}`}>
                {item.paltFormIcon}
              </span>
              <span className="text-sm text-slate-500">@{item.paltFormName}</span> 
            </h4>
            <span className="flex flex-col items-center">
              <strong className="text-5xl mb-2 dark:text-[#fff]">{item.followersCount}</strong>
              <span className="tracking-[6px] uppercase text-slate-400">
                Followers
            
              </span>
            </span>
            <span className="flex items-center mb-5 text-green-600 text-sm font-semibold"> 
              <span className='mr-1'>{arrow}</span>
              12 Today
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default SocialInfo