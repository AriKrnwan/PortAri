import CardPort from './card';
import { BsFillPeopleFill, BsFillPersonFill, BsFillLaptopFill, BsPhoneFill } from "react-icons/bs";
import bgImage from '../../assets/for bg.svg';
import webPelayanan from '../../assets/web pelayanan.jpg';
import hris from '../../assets/HRIS.jpg';

function Portfolio() {
    return (
        <div className="row">
            {/* Card dengan 1 ikon */}
            <CardPort 
                title="Sistem Informasi Pelayanan DSPM" 
                description="Ini adalah website pelayanan untuk memudahkan masyarakat mengakses layanan-layanan yang ada pada Dinas Sosial dan Pemberdayaan Masyarakat Kota Bontang." 
                background={webPelayanan}
                icons={[BsFillPersonFill, BsFillLaptopFill]} 
                buttons={[
                    { label: "Prototype", link: "https://www.figma.com/proto/eTyaaW4svKJwYEuSzs12PP/Dinsos-Bontang?node-id=955-298&t=TfsSB98hS4cdwbEy-1&scaling=scale-down-width&content-scaling=fixed&page-id=880%3A342&starting-point-node-id=955%3A298" }
                ]}
            />

            {/* Card dengan 2 ikon */}
            <CardPort 
                title="Human Resource Information System" 
                description="Aplikasi ini digunakan oleh karyawan untuk melakukan presensi, memesan makanan, membuat permohonan cuti,dan lain-lain dan juga digunakan oleh admin untuk mengelola data karyawan." 
                background={hris}
                icons={[BsFillPeopleFill, BsFillLaptopFill, BsPhoneFill]}
                buttons={[
                    { label: "Design", link: "https://www.figma.com" },
                    { label: "Prototype", link: "https://www.adobe.com" }
                ]}
            />

            {/* Card dengan 4 ikon */}
            <CardPort 
                title="Project C" 
                description="This is a frontend development project." 
                background={bgImage}
                icons={[BsFillPersonFill, BsFillPeopleFill, BsFillLaptopFill, BsPhoneFill]}
                buttons={[
                    { label: "Design", link: "https://www.figma.com" },
                    { label: "Prototype", link: "https://www.adobe.com" },
                    { label: "Frontend", link: "https://reactjs.org" }
                ]}
            />
        </div>
    );
}

export default Portfolio;
