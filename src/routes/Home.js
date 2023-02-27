import { NavLink, Outlet } from 'react-router-dom';

function Home() {
    return (
        <div>
            <main>
                <h2>Welcome to React Router</h2>
            </main>
            <Outlet />
            <nav style={{ textAlign: "center" }}>
                <NavLink to="/">Home</NavLink> |{"  "}
                <NavLink to="about">About</NavLink> |{"  "}
                <NavLink to="team">Team</NavLink> |{"  "}
                <NavLink to="contact">Contact</NavLink>
            </nav>
        </div>
    )
}

export default Home;