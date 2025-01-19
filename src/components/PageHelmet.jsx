import { Helmet } from "react-helmet";

const PageHelmet = ({title}) => {
    return (
        <div>
           <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
            </Helmet>
        </div>
    );
};

export default PageHelmet;