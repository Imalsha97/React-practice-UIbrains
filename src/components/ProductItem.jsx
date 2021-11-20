import React, {useState} from 'react';

let ProductItem = () => {
    let [state , setState ] = useState({
        product : {
            sno : 'AA001',
            image : 'https://m.media-amazon.com/images/I/61OUIIXnPqL._AC_SX522_.jpg',
            name : 'MI watch',
            price : 1500,
            qty :2
        }

    });
    //d structure
    let {product} = state;
    let incQty = () => {
        // alert('hi');
        setState((state) => ({
            product : {
            // sno : 'AA001',
            // image : 'https://m.media-amazon.com/images/I/61OUIIXnPqL._AC_SX522_.jpg',
            // name : 'MI watch',
            // price : 1500,

            //uda tika aai copy wenwa me function eken 
            //uda tika aai liynn on na
            ...state.product,
            qty : state.product.qty + 1
            }
        }))
    }
    let decQty = () => {
        setState((state) => ({
            product : {
                ...state.product,
                qty : state.product.qty - 1 > 0 ? state.product.qty -1 : 1
            }
        }))
    }
    return (
        <>
        <div className="container mt-3">
            <div className="row">
                <div className="col">
                    <p className="h3 text-success">Product Item</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quis, adipisci nobis distinctio saepe porro recusandae vero reprehenderit ipsam accusantium dolorem commodi facere quas! Voluptatem pariatur eum similique aut ipsam.</p>
                </div>
            </div>

        </div>
        <div className="container mt-3">
            <div className="row">
                <div className="col">
                    <table className="table table-striped text-center table-hover">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>SNO</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{product.sno}</td>
                                <td>
                                    <img src={product.image} alt="" width={50} height={50} />
                                </td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>
                                    <i onClick={decQty}  className="fa fa-minus-square mx-1"/>
                                    {product.qty}
                                    <i onClick={incQty} className="fa fa-plus-square mx-1"/>
                                    </td>
                                <td>{product.qty * product.price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    )

};

export default ProductItem;
