import Header from "../../../views/partials/header/scripts";
import Footer from "../../../views/partials/footer/scripts";
import Loader from "../../../views/partials/loader/scripts";

const partials = [
    {
        name: "page-loader",
        Class: Loader,
    },
    {
        name: "header",
        Class: Header,
    },
    {
        name: "footer",
        Class: Footer,
    },
];

export default partials;
