import { Children, cloneElement, useState } from "react"

function DeleteModal(props){
    return(
        <>
            <div 
            className="overlay"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
            }}
            />
            <div style={{
                        position: 'absolute',
                        top: '50%', // Vertically centered
                        left: '50%', // Horizontally centered
                        transform: 'translate(-50%, -50%)', // Centering trick
                        width: '400px', // Adjust width as needed
                        padding: '20px', // Add padding
                        border: '1px solid #ccc', // Add border
                        background: '#fff', // Set background color
                        // Other modal content styles
                    }}>{props.children}</div>
        </>
    )
}
function ProductsModal({children}){
    return(
        <>   
        <div 
            className="overlay"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
            }}
        />
            <div style={{
                        position: 'absolute',
                        top: '50%', // Vertically centered
                        left: '50%', // Horizontally centered
                        transform: 'translate(-50%, -50%)', // Centering trick
                        width: '400px', // Adjust width as needed
                        padding: '20px', // Add padding
                        border: '1px solid #ccc', // Add border
                        background: '#fff', // Set background color
                        // Other modal content styles
            }}>{Children.map(children,(child,index)=>{
                return cloneElement(child,{
                    style:{
                        color:'red',
                    }
                })
            })}</div>
        </>
    )
}
export default function Dialog(){
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [showProductsModal, setShowProductsModal] = useState(false)
    const [thankyouMessage,setThankyouMessage] = useState('')
    return(
        <>
            <h1>Containment basic example</h1>
            <button
                onClick={()=>{
                    setShowDeleteModal(true)
                }}
            >Delete record</button>
            {showDeleteModal === true?
                <DeleteModal>
                    <h1>Are you sure</h1>
                    <button 
                        onClick={()=>{
                            setShowDeleteModal(false)
                            setThankyouMessage(<h1>Thank you for staying with us</h1>)
                        }}>Delete</button>
                </DeleteModal>
                : 
                thankyouMessage}
            <hr/>

            <h1>Containment Example 2(Dynamic Render)</h1>
            <button
                onClick={()=>{
                    setShowProductsModal(true)
                }}
            >Delete record</button>
            {showProductsModal === true?
                <ProductsModal>
                    <p>Mangoes</p>
                    <p> 2</p>
                    <p> 50 bob</p>
                </ProductsModal>
                :thankyouMessage
            }
        </>
    )
}