import { MdOutlineArrowBackIosNew, MdAccountCircle  } from "react-icons/md";
import { Link } from "react-router-dom";
import BurgerKing from "../../assets/image/svg/burger-king.svg";

export default function Diagnostics() {
  return (
    <div className="pb-12">
      <div className="shadow-[#00000033_0px_1px_1.41px]">
        <div className="container mx-auto h-auto text-[18x] max-md:text-[16px] Flame_RegularSans font-medium leading-1 p-3 ">
          <div className="flex items-center">
            <div className="flex items-center space-x-3 w-full">
              <Link to="/account">
                <MdOutlineArrowBackIosNew fontSize={24} />
              </Link>
              <span className="Flame_Bold text-[28px] max-md:text-[24px]">BURGER KING</span>
            </div>
            <MdAccountCircle fontSize={24} />
          </div>
        </div>
      </div>
      <div className="shadow-[#00000033_0px_1px_1.41px]">
        <div className="container mx-auto p-3 Flame_Regular text-[28px] max-md:text-[24px] font-medium ">
          Diagnostics
        </div>
      </div>
      <div className="shadow-[#00000033_0px_1px_1.41px]">
        <div className="container mx-auto h-auto text-[18x] max-md:text-[16px] Flame_RegularSans font-medium leading-1 p-3">
          <div className="pt-3 pb-1 Flame_Regular font-medium">
            Device Information
          </div>
          <div className="py-1">Device Id</div>
          <div className="Flame_Regular font-medium pb-2">
            1bc0f714-1290-439e-9b07-280cb6b38efe
          </div>
        </div>
      </div>
      <div className="shadow-[#00000033_0px_1px_1.41px]">
        <div className="container mx-auto h-auto text-[18x] max-md:text-[16px] Flame_RegularSans font-medium leading-1 p-3">
          <div className="pt-3 pb-1 Flame_Regular font-medium">
            Update OTA Build Info
          </div>
          <div className="py-1">OTA App Version</div>
          <div className="Flame_Regular font-medium pb-2">7.42.0</div>
          <div className="py-1">Commit Hash</div>
          <div className="Flame_Regular font-medium pb-2">
            5c8022f2f0feae138e391c78a86c15306102ebd9
          </div>
          <div className="py-1">Build Date</div>
          <div className="Flame_Regular font-medium pb-2">unknown</div>
          <div className="py-1">Update Id</div>
          <div className="Flame_Regular font-medium pb-2">unknown</div>
          <div className="py-1">Update Channel</div>
          <div className="Flame_Regular font-medium pb-2">unknown</div>
          <div className="py-1">Is Embedded Launch?</div>
          <div className="Flame_Regular font-medium pb-2">false</div>
          <div className="pt-3 pb-1 Flame_Regular font-medium">
            Binary runtime info
          </div>
          <div className="py-1">
            Binary app runtime version with build number
          </div>
          <div className="Flame_Regular font-medium pb-2">7.42.0</div>
        </div>
      </div>
    </div>
  );
}
