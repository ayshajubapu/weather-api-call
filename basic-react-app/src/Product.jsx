import "./Product.css";
import Price from "./Price";

function Product({ title, idx }) {
    let oldPrice = ["12900", "8790", "4569", "3457"];
    let newPrice = ["9876", "7657", "3452", "2345"];
    let description = [
        ["8,000 DPI", "5 programmable buttons"],
        ["inutative surface", "designed for ipad"],
        ["designed for ipad", "inutative surface"],
        ["wireles", "5 programmable buttons"]
    ];
    return (
        <div className="Product">
            <h4>Title</h4>
            <P>Description [idx][0]</P>
            <P>Description [idx][1]</P>

            <p>Price oldPrice={oldPrice[idx]} newPrice ={newPrice[idx]}</p>



        </div>
    );
}
export default Product;