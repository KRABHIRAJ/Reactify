import { getLogoUrl } from "../../../utils";

const OfferCard = ({offer}) => {
    const {couponCode, header, offerLogo} = offer?.info;
    const logoUrl = getLogoUrl('w_96', 'h_96', offerLogo);
    return(
        <div className="flex items-center gap-x-2 border border-[#e2e2e7] rounded-[20px] p-3 w-[300px]">
            <img src={logoUrl} className="h-[40px]" alt={header} />
            <div>
                <p className="font-[800] text-[18px] text-[#02060ceb]">{header}</p>
                <p className="font-[700] text-[14px] text-[#02060c73]">{couponCode}</p>
            </div>
        </div>
    )
}

export default OfferCard;