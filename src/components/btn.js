function Btn(){
    function sayHi(){
        alert('Hello...')
    }
    function onTop(){
        alert('On top!!')
    }
    return <button onMouseOver={onTop} onClick={sayHi}>Click me...</button>
}
export default Btn