import { useState } from "react";
import SWAccordion from "../common/accordion/SWAccordion";

const MenuLists = ({ menuList }) => {
  return (
    <div className="p-4">
      {menuList?.map((menuItem) => {
        const [isShowAccordion, setisShowAccordion] = useState(false);
        const { title, itemCards, categories } = menuItem?.card?.card;
        return (
          <div key={title}>
            {(itemCards?.length > 0 && itemCards)? (
              <div>
                <div onClick={() => setisShowAccordion(!isShowAccordion)} className="bg-[#F2F2F3] p-3 mb-3 rounded-lg flex items-center justify-between cursor-pointer">
                  <p className="font-[700] text-[18px]">
                    {title} ({itemCards?.length})
                  </p>
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
                {
                    isShowAccordion && (
                        <div className="p-4 mb-4 rounded-[20px]">
                            <SWAccordion itemCards={itemCards} />
                        </div>
                    )
                }
              </div>
            ) : (
              <div></div>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default MenuLists;
