import moment from 'moment';

const Footer = () => {
    return (
        <div>
            <div className="bg-black text-white lg:py-3 md:py-[10px] py-2 px-3">
                <h3 className="text-center lg:text-lg md:text-base text-sm font-bold">Copyright @{moment().format('YYYY')} Shopify Store. All rights reserved.</h3>
            </div>
        </div>
    );
};

export default Footer;