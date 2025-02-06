import { Component, Fragment } from "react";
import { IoClose, IoChevronDownSharp } from "react-icons/io5";
import { LOCAL_URL } from "../../config/index";
import { ajaxGet } from "../../helper/func";
import { FoodsPropsDefault, FoodsTypePropsDefault } from "../../types/foods";
import { isEmpty } from "lodash";

type FoodOption = { food_type?: string; text: string; calories: number };

interface State {
  foodOption: FoodOption[];
  foods: FoodsPropsDefault[];
  foods_type: FoodsTypePropsDefault[];
  toggleOption: boolean;
  selectOption: string;
  toggle_drop_list: string;
  modal_nutritional_info?: any;
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
    foods: [],
    foods_type: [],
    toggle_drop_list: "",
    modal_nutritional_info: {},
  };

  componentDidMount(): void {
    this.fetchDropList();
  }

  async fetchDropList() {
    //  request api product
    let res = await ajaxGet(LOCAL_URL + "foods");
    if (res.code === 1) {
      const { foods, food_type } = res.data;
      this.setState({ foods, foods_type: food_type });
    }
  }

  toggleDropListFood(val: string) {
    const { toggle_drop_list } = this.state;
    let toggle = toggle_drop_list !== val ? val : "";
    this.setState({ toggle_drop_list: toggle });
  }

  render() {
    const st = this.state;
    console.log(st.modal_nutritional_info)
    return (
      <Fragment>
        <div className="h-screen mx-auto w-full">
          <div className="bg-[#502314] w-full h-[192px] max-sm:h-[130px]">
            <div className=" container mx-auto px-3">
              <div className="relative flex justify-center w-full pt-[48px] ">
                <div className="bg-white shadow-[#00000038_0px_1px_2.22px]  pb-[32px] w-full rounded-[8px] container mx-auto p-[32px_54px_32px_54px] max-sm:p-[10px_16px_10px_16px] Flame_Regular  h-[12rem] max-sm:h-[8rem]">
                  <span className="text-[16px] max-sm:text-[15px] FlameSans_Regular pl-3 max-sm:pl-2">
                    I'm Craving
                  </span>
                  <div
                    className={`bg-white pt-3 ${
                      st.toggleOption && "border-[1px] rounded-[8px]"
                    } `}
                  >
                    <div className="flex justify-center px-3 max-sm:px-2">
                      <button
                        type="button"
                        onClick={() =>
                          this.setState({ toggleOption: !st.toggleOption })
                        }
                        className="w-full flex items-center leading-[20px]"
                      >
                        <div className="grow text-start line-clamp-1 text-xl max-sm:text-base ">
                          {st.selectOption}
                        </div>
                        <div className="px-3 py-1 ">
                          <IoChevronDownSharp
                            fontSize={22}
                            className={`transform duration-500 ease-in-out ${
                              st.toggleOption ? "-rotate-180" : "-rotate-0"
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
                    {st.toggleOption ? (
                      <div className="mb-1">
                        {st.foodOption.map((item, i) => (
                          <div
                            key={i}
                            onClick={() =>
                              this.setState({
                                selectOption: item.text,
                                toggleOption: false,
                              })
                            }
                            className={`cursor-pointer text-xl max-sm:text-base px-3 max-sm:px-2 py-1 ${
                              st.selectOption === item.text
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
            {st.foods_type.map((item, i) => {
              return (
                <Fragment key={i}>
                  <button
                    type="button"
                    onClick={() => this.toggleDropListFood(item.food_name)}
                    className={`w-full flex items-center py-3 space-x-3 border-b-[1px] border-[#0000001a]`}
                  >
                    <IoChevronDownSharp
                      fontSize={19}
                      className={`transform duration-500 ease-in-out delay-150 -r otate-0 ${
                        st.toggle_drop_list === item.food_name
                          ? "-rotate-360"
                          : "-rotate-90"
                      }`}
                    />
                    <div className="w-[64px] flex items-center">
                      <img
                        src={`http://localhost:8000/api/image/${item.image}`}
                        alt=""
                      />
                    </div>
                    <div className="Flame_Regular text-[24px] max-sm:text-[18px] flex  space-x-3 max-sm:space-x-2">
                      <span>{item.food_name}</span>
                      <span>({item.total_food})</span>
                    </div>
                  </button>
                  {st.toggle_drop_list === item.food_name && (
                    <div className="grid grid-cols-3 max-md:grid-cols-1 gap-3">
                      {st.foods.map((item, i) => {
                        return (
                          item.food_type === st.toggle_drop_list && (
                            <div
                              className="cursor-pointer bg-white flex flex-col items-center justify-center p-6 rounded-[8px]"
                              key={i}
                              onClick={() =>
                                this.setState({ modal_nutritional_info: item })
                              }
                            >
                              <div className=" bg-white flex flex-col items-center justify-center p-6 max-lg:p-3 rounded-[8px] ">
                                <div className=" w-[50%]">
                                  <img
                                    src={`http://localhost:8000/api/image/${item.image}`}
                                    alt=""
                                  />
                                </div>
                                <span className="text-lg pt-0 Flame_Regular text-center">
                                  {item.food_name}
                                </span>
                                <span className=" text-base pb-1 pt-2 FlameSans_Regular">
                                  {item.calories} Cal
                                </span>
                              </div>
                            </div>
                          )
                        );
                      })}
                    </div>
                  )}
                </Fragment>
              );
            })}
          </div>
        </div>
        {!isEmpty(st.modal_nutritional_info) && (
          <div className="absolute top-0 bg-[#f8f1e7] h-full w-full z-[1000] py-[24px] px-[16px] animate-fade">
            <button
              type="button"
              onClick={() => this.setState({ modal_nutritional_info: {} })}
              className="ml-1 max-sm:mb-4 transform duration-500 ease-in-out delay-0 otate-360 hover:rotate-90"
            >
              <IoClose className="text-[30px] max-sm:text-[24px]" />
            </button>
            <div className="flex flex-col items-center justify-center rounded-[8px]">
              <p className="text-[20px] Flame_Regular mb-4">
                Nutritional Information
              </p>
              <div className=" flex justify-center items-center w-[90%] max-sm:w-[70%]">
                <img
                  src={`http://localhost:8000/api/image/${st.modal_nutritional_info.image}`}
                  alt={st.modal_nutritional_info.image}
                  width={"300px"}
                />
              </div>
              <p className="text-[30px] max-sm:text-[24px] Flame_Regular text-center">
                {st.modal_nutritional_info.food_name}
              </p>
              <div className="w-[50%] max-sm:w-[95%] mt-[24px]">
                <p className="Flame_Regular border-b-[1px] border-b-[#0000001a]">
                  Per serving
                </p>
                <div className="flex flex-col mt-[20px] space-y-1">
                  <div className="flex justify-center items-center FlameSans_Regular">
                    <div className="w-full text-start">Calories</div>
                    <div className="w-full text-end">
                      {st.modal_nutritional_info.calories} Cal
                    </div>
                  </div>
                  <div className="flex justify-center items-center FlameSans_Regular">
                    <div className="w-full text-start">Fat</div>
                    <div className="w-full text-end">
                      {st.modal_nutritional_info.fat} g
                    </div>
                  </div>
                  <div className="flex justify-center items-center FlameSans_Regular">
                    <div className="w-full text-start">Saturated Fat</div>
                    <div className="w-full text-end">
                      {st.modal_nutritional_info.saturated_fat} g
                    </div>
                  </div>
                  <div className="flex justify-center items-center FlameSans_Regular">
                    <div className="w-full text-start">Trans Fat</div>
                    <div className="w-full text-end">
                      {st.modal_nutritional_info.trams_fat} g
                    </div>
                  </div>
                  <div className="flex justify-center items-center FlameSans_Regular">
                    <div className="w-full text-start">Cholesterol</div>
                    <div className="w-full text-end">
                      {st.modal_nutritional_info.cholesterol} mg
                    </div>
                  </div>
                  <div className="flex justify-center items-center FlameSans_Regular">
                    <div className="w-full text-start">Sodium</div>
                    <div className="w-full text-end">
                      {st.modal_nutritional_info.sodium} mg
                    </div>
                  </div>
                  <div className="flex justify-center items-center FlameSans_Regular">
                    <div className="w-full text-start">Carbohydrates</div>
                    <div className="w-full text-end">
                      {st.modal_nutritional_info.carbohydrates} g
                    </div>
                  </div>
                  <div className="flex justify-center items-center FlameSans_Regular">
                    <div className="w-full text-start">Fiber</div>
                    <div className="w-full text-end">
                      {st.modal_nutritional_info.fiber} g
                    </div>
                  </div>
                  <div className="flex justify-center items-center FlameSans_Regular">
                    <div className="w-full text-start">Sugar</div>
                    <div className="w-full text-end">
                      {st.modal_nutritional_info.sugar} g
                    </div>
                  </div>
                  <div className="flex justify-center items-center FlameSans_Regular">
                    <div className="w-full text-start">Proteins</div>
                    <div className="w-full text-end">
                      {st.modal_nutritional_info.proteins} g
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

export default NutritionExpolrer;
