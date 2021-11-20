import React,{useState} from 'react';

let ShoppingCart = () => {
    let [state , setState ] = useState({
        products : [
                {
                sno : 'AA001',
                image : 'https://m.media-amazon.com/images/I/61OUIIXnPqL._AC_SX522_.jpg',
                name : 'MI watch',
                price : 1500,
                qty :2
                },
                {
                    sno : 'AA002',
                    image : 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1bca7fb9-5f5c-42e3-930a-8a430d8a9e60.png?v=1625046217',
                    name : 'Samsung watch',
                    price : 1800,
                    qty :3
                },
                {
                    sno : 'AA003',
                    image : 'data:image/jpeg;base64,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',
                    name : 'LG watch',
                    price : 2000,
                    qty :4
                },
                {
                    sno : 'AA004',
                    image : 'https://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/plp/wearables/watch3.jpg',
                    name : 'Singer watch',
                    price : 6500,
                    qty :1
                }
        ]

    });

    let {products} = state;

    let increQty = (productId) => {

        //filter the data for updating qty
        let items = products.map(product => {
            if(product.sno === productId){
                return {
                    ...product,
                    qty : product.qty + 1
                }

            }
            return product;
            
        });
        let decreQty = (productId) => {

            //filter the data for updating qty
            let items = products.map(product => {
                if(product.sno === productId){
                    return {
                        ...product,
                        qty : product.qty - 1 > 0 ? product.qty -1 : 1
                    }
    
                }
                return product;
            });

        //update the state with new data
        setState((state) => ({
            products: [...items]
        }));
    };
    let grandTotal = () => {
        let total = 0;
        for(let product of products){
            total += product.price * product.qty ;
        }
        return total;
    };

    return (
        <>
        <div className="container mt-3">
            <div className="row">
                <div className="col">
                    <p className="h3 text-success">Product Cart</p>
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
                            {
                                //map -> loop the array
                                products.map((product)=> {
                        return(
                                        //have to get key property unique elemet in array
                            <tr key = {product.sno}>
                                <td>{product.sno}</td>
                                <td>
                                    <img src={product.image} alt="" width={50} height={50} />
                                </td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>
                                    <i onClick={() => decreQty(product.sno)}  className="fa fa-minus-square mx-1"/>
                                    {product.qty}
                                    <i onClick={() => increQty(product.sno)}  className="fa fa-plus-square mx-1"/>
                                    </td>
                                <td>{(product.qty * product.price).toFixed(2)}</td>
                            </tr>
                                    )

                                })
                            };
                            <tr>
                                <td cilSpan={4}></td>
                                <td>Grand Total :</td>
                                <td>{grandTotal().toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    );

}
};

export default ShoppingCart;
