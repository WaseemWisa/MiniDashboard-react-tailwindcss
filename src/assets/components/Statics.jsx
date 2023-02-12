import {useState} from 'react'
import {Data} from '../data.jsx'
import {GoTriangleUp}  from "react-icons/go";
// TODO: Make Overlay on Dark Mode to cards 
function Statics() {
  const [myData, setMyData] = useState(Data);
  const arrow = <GoTriangleUp />;
  const ListBoxs = ({data} ) =>   data.map((item , i) => {
      return (
        <div key={i} className={`card h-[160px] shadow-lg rounded-[3px] flex flex-col  justify-around  px-[15px] bg-slate-200 mb-3 hover:bg-slate-300 dark:hover:bg-slate-700 dark:bg-slate-600 duration-75`}>
          <div className="head flex items-center justify-between">
            <span className='text-base font-bold text-slate-400'>Page Views</span>
            <span className={`mr-[0.2rem]  font-normal text-3xl ${"text-" + item.paltFormName}`}>{item.paltFormIcon}</span>
          </div>
          <div className="flex items-center justify-between">
            <strong className='dark:text-slate-100 text-2xl'>{item.followersCount}</strong>
            <span className="flex items-center  text-green-600 text-sm font-semibold"> 
            <span className='mr-1 '>{arrow}</span>
                12 Today
            </span>
          </div>
        </div>
      )
    })

  return (
    <div className='my-8'>
      <h2 className='my-3 font-bold text-xl text-slate-500'>Overview Today</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        <ListBoxs data={myData}/>
        <ListBoxs data={myData}/>
      </div>
    </div>
  )
}

export default Statics