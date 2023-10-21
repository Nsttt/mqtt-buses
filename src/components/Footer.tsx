import { Link } from "@nextui-org/react";
import colaborators from '../../public/colaborators.json';



function Colaborators() {
    return(
        <div className={"flex gap-1 mx-1"}>
        {
            colaborators
                .map((colaborator: any, idx: number) => (
                    <div>
                        <Link key={idx} href={colaborator.link}>{colaborator.name}</Link>
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
            Desarrollado por <Colaborators/> para la #HacktoberFest-2023
        </footer>
    );
}
