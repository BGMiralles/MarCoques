import React from "react";
import { Chef } from "../../common/Chef/Chef";
import { Products } from "../../common/products/Products";
import { Footer } from "../../common/footer/footer";

export const Home = () => {
    return (
        <div>
            <Chef />
            <Products />
            <Footer />
        </div>
    );
    }