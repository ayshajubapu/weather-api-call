import Product from "./Product.jsx";

function ProductTab() {
let style = {
    display: "flex",
    flexWrap:"wrap",  
    justifyContent:"center",
    alignItems:"center"
};
    return (
        <div styles={style}>
            
            <Product title="Logitech MX Master" idx={0} />
            <Product title="Apple Pencil" idx={1}/>
            <Product title="zebronics" idx={2}/>
            <Product title="tTransformer" idx={3}/>
        </div>

    );

}
export default ProductTab;