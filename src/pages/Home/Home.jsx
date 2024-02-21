import React from "react";
import { Chef } from "../../common/Chef/Chef";
import { Products } from "../../common/Products/Products";
import { Footer } from "../../common/Footer/Footer";

export const Home = () => {
    return (
        <div>
            <Chef />
            <Products />
            <Footer />
        </div>
    );
}
