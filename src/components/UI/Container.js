const Container = (props) => {
    return (
        <div className="sm:px-9 px-4">
            <div className="container mx-auto">
                {props.children}
            </div>
        </div>
    )
}

export default Container;