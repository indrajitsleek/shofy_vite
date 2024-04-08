import { useEffect, useState } from 'react'
import OffCanvas from './OffCanvas'
import Search from './Search'
import MobileMenu from './MobileMenu'
import CartMini from './CartMini'
import MainHeader from './MainHeader'
import StickyHeader from './StickyHeader'


export default function Header() {

    // open and close cart_mini and mobile_menu

    const [openCart, setOpenCart] = useState('');
    const [opneMob, setOpenMob] = useState('');
    const [opnebody, setOpenBody] = useState('');

    useEffect(() => {
        if (openCart !== '' || opneMob !== '') {
            setOpenBody('opened')
        }
        else {
            setOpenBody('')
        }
    }, [openCart, opneMob])

    return (
        <>
            <OffCanvas open={opneMob} setOpenMob={setOpenMob}/>
            <MobileMenu setOpenMob={setOpenMob}/>
            <Search />
            <CartMini open={openCart} setOpenCart={setOpenCart} />
            <MainHeader open={openCart} setOpenCart={setOpenCart} />
            <StickyHeader open={openCart} setOpenCart={setOpenCart} />
            <div className={`body-overlay ${opnebody}`} onClick={() => setOpenCart('') || setOpenMob('')}/>
        </>
    )
}
