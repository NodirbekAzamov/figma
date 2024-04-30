import React, { useEffect, useState } from 'react'
import "./style.scss"
import BuyurtmaRoyhat from '../../components/Buyurtmalarim/Qoshish/Qoshish'
import Statistika from '../../components/Buyurtmalarim/Statistika/Statistika'
import SidebarCategory from '../../components/Buyurtmalarim/Sidebar/Sidebar'
import Buyurtmalar from '../../components/Buyurtmalarim/Buyurtmalar/Buyurtmalar'
import Foydalanuvchilar from '../../components/Buyurtmalarim/Foydalanuvchilar/Foydalanuvchilar'
const Buyurtmalarim = () => {
  const [components, setComponents] = useState([
    { id: 1, component: <Statistika /> },
    { id: 2, component: <BuyurtmaRoyhat /> },
    { id: 3, component: <Foydalanuvchilar /> },
    { id: 4, component: <Buyurtmalar /> },
  ])
  const [id, setId] = useState(1)
  useEffect(() => {
    const id = +sessionStorage.getItem("buyurtma_id");
    if (id) {
      setId(id);
    } else {
      setId(1)
    }
  }, [])
  return (
    <div className='buyurtmalarim'>
      <div className='sidebar'>
        <SidebarCategory/>
      </div>
      <div className='buyurtmaRoyhat'>
        {
          components?.filter(item => item?.id === id)?.map((item, index) => {
            return <div key={index}>{item?.component}</div>
          })
        }
      </div>
    </div>
  )
}

export default Buyurtmalarim