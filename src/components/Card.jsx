
const style = {
    background: 'green',
    flex: '0 0 19.7%',
    textAlign: 'center',
    margin: '0 2px',
    transition: 'transform 300ms ease 100ms',
    maxWidth: '300px',
    maxHeight: '400px'
}

function Card(props) {

    return (
        <div className="item" style={style}>
            {(props.img) && <img src={props.img} key={props.img}/>}
        </div>
    );
}

export default Card;