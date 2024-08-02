import { Component } from "react";
import { IoClose, IoChevronDownSharp } from "react-icons/io5";

interface State {
  toggleOption: boolean;
  selectOption: string;
  foodOption: { food_type?: string; text: string; calories: number }[];
}

class NutritionExpolrer extends Component<State> {
  state: State = {
    toggleOption: false,
    selectOption: "Select a filter...",
    foodOption: [
      {
        text: "Options under 300 calories",
        calories: 300,
      },
      {
        text: "Flame grilled burgers under 500 calories",
        calories: 500,
        food_type: "burgers",
      },
      {
        text: "Chicken and more under 500 calories",
        calories: 500,
        food_type: "chicken",
      },
    ],
  };

  render() {
    const { toggleOption, foodOption, selectOption } = this.state;

    return (
      <div className=" h-screen   mx-auto w-full">
        <div className="bg-[#502314] w-full h-[192px] max-sm:h-[130px]">
          <div className=" container mx-auto px-3">
            <div className="relative flex justify-center w-full pt-[48px] ">
              <div className="bg-white shadow-[#00000038_0px_1px_2.22px]  pb-[32px] w-full rounded-[8px] container mx-auto p-[32px_54px_32px_54px] max-sm:p-[10px_16px_10px_16px] Flame_Regular  h-[12rem] max-sm:h-[8rem]">
                <span className="text-[16px] max-sm:text-[15px] FlameSans_Regular pl-3 max-sm:pl-2">
                  I'm Craving
                </span>
                <div
                  className={`bg-white pt-3 ${
                    toggleOption && "border-[1px] rounded-[8px]"
                  } `}
                >
                  <div className="flex justify-center px-3 max-sm:px-2">
                    <button
                      type="button"
                      onClick={() =>
                        this.setState({ toggleOption: !toggleOption })
                      }
                      className="w-full flex items-center leading-[20px]"
                    >
                      <div className="grow text-start line-clamp-1 text-xl max-sm:text-base ">
                        {selectOption}
                      </div>
                      <div className="px-3 py-1 ">
                        <IoChevronDownSharp
                          fontSize={22}
                          className={`transform duration-500 ease-in-out ${
                            toggleOption ? "-rotate-180" : "-rotate-0"
                          }`}
                        />
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        this.setState({
                          selectOption: "Select a filter...",
                          toggleOption: false,
                        })
                      }
                      className="px-3 border-l-[1px] border-[#0000001a]"
                    >
                      <IoClose className="text-[20px]" />
                    </button>
                  </div>
                  <div className=" mx-3 max-sm:mx-2 border-b-[#502314] border-b-[3px] max-sm:border-b-[2px] mt-3 mb-1" />
                  {toggleOption ? (
                    <div className="mb-1">
                      {foodOption.map((item, i) => (
                        <div
                          key={i}
                          onClick={() =>
                            this.setState({
                              selectOption: item.text,
                              toggleOption: false,
                            })
                          }
                          className={`cursor-pointer text-xl max-sm:text-base px-3 max-sm:px-2 py-1 ${
                            selectOption === item.text
                              ? "bg-[#d62300] text-[#f5ebdc] "
                              : "hover:bg-[#0000000a]"
                          }`}
                        >
                          {item.text}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="max-sm:text-[14px] float-right py-1">
                      <button className="text-[#d62300]">More Options</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-3 pt-20">
          <button
            type="button"
            className={
              ` w-full flex items-center py-3 space-x-3`
              // border-b-[1px] border-[#0000001a]
            }
          >
            <IoChevronDownSharp
              fontSize={19}
              className="transform duration-500 ease-in-out delay-150 -rotate-90 -r otate-0 "
            />
            <div className="w-[64px]">
              <img
                src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/dca5fd3c67ce6be4572cd7e6ef612395514e35d9-1333x1333.png?w=150&q=80&fit=max&auto=format"
                alt=""
              />
            </div>
            <div className="Flame_Regular text-[24px] max-sm:text-[18px] flex  space-x-3 max-sm:space-x-2">
              <span>Breakfast</span>
              <span>(24)</span>
            </div>
          </button>

          <div className=" grid grid-cols-3 max-md:grid-cols-1 gap-3">
            {[
              Array(0, 1 + 1).map((item, i) => {
                return (
                  <div
                    className=" bg-white flex flex-col items-center justify-center p-6 rounded-[8px]"
                    key={i}
                  >
                    <div className=" bg-white flex flex-col items-center justify-center p-6 max-lg:p-3 rounded-[8px] ">
                      <div className=" w-[50%]">
                        <img
                          // src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/4b14eebc93b11734af0c17357f79868f628ca8c5-1333x1333.png?w=900&q=80&fit=max&auto=format"
                          src="http://localhost:8000/api/image/breakfast"
                          alt=""
                        />
                      </div>
                      <span className="text-lg pt-0 Flame_Regular text-center">
                        Fully Loaded Croissan'wich
                      </span>
                      <span className=" text-base pb-1 pt-2 FlameSans_Regular">
                        714 Cal
                      </span>
                    </div>
                  </div>
                );
              }),
            ]}
          </div>
        </div>
      </div>
    );
  }
}

export default NutritionExpolrer;
