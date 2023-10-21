import { Link } from "@nextui-org/react";
import Marquee from "react-fast-marquee";
import colaborators from '../../public/colaborators.json';



function Colaborators() {
    return (
        <div className={"flex gap-1 mx-1"}>
            {
                colaborators
                    .map((colaborator: any, idx: number) => (
                        <div>
                            <Link href={colaborator.link} target="blank">{colaborator.name}</Link>
                            {idx < colaborators.length - 1 && ' / '}
                        </div>
                    ))
            }
        </div>
    );
}

export default function Footer() {
    return (

        <footer className={"bg-default-100 flex justify-center py-2 align-middle whitespace-nowrap"}>
            <Marquee autoFill={true} pauseOnHover={true}>
                <span className={"mx-1 flex flex-row"}>Desarrollado por <Colaborators /> para la #HacktoberFest-2023</span>
            </Marquee>
        </footer>


    );
}
