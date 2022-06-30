import Link from 'next/link';

const routes = {
  Home: '/',
  About: '/aboutPage',
  Inventory: '/inventoryPage'
}

const NavBar = () => {

  const routing = Object.entries(routes);

  return (
    <div className="flex">
      {routing.map((i, idx) => (
        <Link key={idx + i[0]} href={i[1]}>
          <a className="p-3">{i[0]}</a>
        </Link>
      ))
      }
    </div>
  )
}

export default NavBar;
