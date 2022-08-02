import Nav from "../medium/nav"
import Header from "../small/header"

const Main = ({children}) => {
    return (
        <>
            <Header />
            <Nav />
            {children}
        </>
    )
}

export default Main;