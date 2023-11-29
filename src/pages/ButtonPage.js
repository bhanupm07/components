import React from "react";
import Button from "../components/Button";
import { GoBellFill, GoCheckCircle } from "react-icons/go";

export default function ButtonPage() {
    return (
        <div>
            <div>
                <Button warning className='mb-5'>
                    <GoBellFill />
                    Click me!!
                </Button>
            </div>
            <div>
                <Button primary outline rounded>
                    <GoCheckCircle />
                    Add to Cart
                </Button>
            </div>
            <div>
                <Button danger>Watch Later</Button>
            </div>
            <div>
                <Button success rounded>Hola Amigo!</Button>
            </div>
            <div>
                <Button secondary outline>Buy Now!</Button>
            </div>
        </div>
    )
}