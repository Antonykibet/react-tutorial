import Main from './Main.js';
import Banner from './Banner.js';
import Counter from './Counter.js';
import Footer from './Footer.js';
import Form from './Form.js'
import Meals from './meals.js';
import Calculator from './calculator.js';
import Timer from './Timer.js';
import Focus from './refAttribute.js';
function Home(){
    const data={
        discount:'20%'
      }
    return(
        <>
            <h1>Welcome</h1>
            <Banner discount={data.discount} />
            <Main name='Anto' age='22' />
            <Counter/>
            <Form/>
            <Meals/>
            <Timer/>
            <Calculator/>
            <Focus/>
            <Footer discount={data.discount}/>
        </>
    )
}
export default Home