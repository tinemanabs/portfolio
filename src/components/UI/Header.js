import Container from "./Container";

const Header = (props) => {
    return (
        <div className="bg-blue-900">
            <Container>
                <div className="md:h-72 h-48 flex items-center">
                    <div className="font-bold text-white md:text-9xl text-6xl">{props.title}</div>
                </div>
            </Container>
        </div>
    )
}

export default Header;