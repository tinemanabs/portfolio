import Container from "./Container";

const Card = (props) => {
    return (
        <Container>
            <div className="card bg-white rounded-xl shadow-sm -mt-12">
                {props.children}
            </div>
        </Container>

    )
}

export default Card;