import { Component, Fragment } from "react";
import { IoClose, IoChevronDownSharp, IoCheckmarkSharp } from "react-icons/io5";
import { LOCAL_URL } from "../../config/index";
import { ajaxGet } from "../../helper/func";
import { FoodsPropsDefault, FoodsTypePropsDefault } from "../../types/foods";
import { isEmpty, cloneDeep, omit } from "lodash";

type FoodOption = { food_type: string; text: string; calories: number };
type FoodMoreOption = {
  text: string;
  type: string;
  value: number;
};
type SelectMoreOption = {
  fat?: string;
  sodium?: string;
  carbohydrates?: string;
  sugar?: string;
  toggle_modal: boolean;
};
type SelectOption = {
  text: string;
  toggle: boolean;
  calories: number;
  food_type: string;
};

interface State {
  foodOption: FoodOption[];
  foodMoreOption: FoodMoreOption[];
  foods: FoodsPropsDefault[];
  foods_type: FoodsTypePropsDefault[];
  selectOption: SelectOption;
  selectMoreOption: SelectMoreOption;
  OldSelectMoreOption: SelectMoreOption;
  toggle_drop_list: string;
  modal_nutritional_info?: any;
}

class NutritionExpolrer extends Component<State> {
  state: State = {
    selectOption: {
      text: "Select a filter...",
      calories: 0,
      toggle: false,
      food_type: "ALL",
    },
    selectMoreOption: { toggle_modal: false },
    OldSelectMoreOption: { toggle_modal: false },
    foodOption: [
      {
        text: "Options under 300 calories",
        calories: 300,
        food_type: "All",
      },
      {
        text: "Flame grilled burgers under 500 calories",
        calories: 500,
        food_type: "Flame Grilled Burgers",
      },
      {
        text: "Chicken and more under 500 calories",
        calories: 500,
        food_type: "Chicken & Fish",
      },
    ],
    foodMoreOption: [
      { text: "Less than 15g fat", type: "fat", value: 15 },
      { text: "Less than 800mg sodium", type: "sodium", value: 800 },
      { text: "Less than 30g carbohydrates", type: "carbohydrates", value: 30 },
      { text: "Less than 20g sugar", type: "sugar", value: 20 },
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

  toggleSelectMoreOption(val: string) {
    let { selectMoreOption, OldSelectMoreOption } = this.state;

    if (val === "more option") {
      selectMoreOption = { ...selectMoreOption, toggle_modal: true };
    } else if (val === "close") {
      const oldKeys = new Set(Object.keys(OldSelectMoreOption));
      omit(
        selectMoreOption,
        Object.keys(selectMoreOption).filter((key) => !oldKeys.has(key))
      );
      selectMoreOption = { ...OldSelectMoreOption, toggle_modal: false };
      OldSelectMoreOption = { ...selectMoreOption };
    } else if (val === "apply") {
      selectMoreOption = { ...selectMoreOption, toggle_modal: false };
      OldSelectMoreOption = { ...selectMoreOption };
    } else if (val === "reset") {
      selectMoreOption = { toggle_modal: true };
      OldSelectMoreOption = { ...OldSelectMoreOption, toggle_modal: true };
    }

    this.setState({ selectMoreOption, OldSelectMoreOption });
  }

  render() {
    const st = this.state;
    const { foods_type, selectOption, foods, selectMoreOption } = st;
    const { fat, sodium, carbohydrates, sugar } = selectMoreOption;

    const Foods = foods.filter((item) => {
      const isFoodTypeMatch =
        selectOption.food_type === "All" ||
        item.food_type === selectOption.food_type;

      const itemCalories = Number(item.calories.replace(",", ""));
      const isCaloriesMatch = itemCalories < Number(selectOption.calories);

      const itemFat = Number(item.fat.replace(",", ""));
      const itemSodium = Number(item.sodium.replace(",", ""));
      const itemCarbs = Number(item.carbohydrates.replace(",", ""));
      const itemSugar = Number(item.sugar.replace(",", ""));

      const isFatMatch = !fat || itemFat < Number(fat);
      const isSodiumMatch = !sodium || itemSodium < Number(sodium);
      const isCarbsMatch = !carbohydrates || itemCarbs < Number(carbohydrates);
      const isSugarMatch = !sugar || itemSugar < Number(sugar);

      return (
        ((isFoodTypeMatch && isCaloriesMatch) ||
          selectOption.text === "Select a filter...") &&
        isFatMatch &&
        isSodiumMatch &&
        isCarbsMatch &&
        isSugarMatch
      );
    });

    const counts = Foods.reduce((acc: Map<string, number>, food) => {
      acc.set(food.food_type, (acc.get(food.food_type) || 0) + food.status);
      return acc;
    }, new Map<string, number>());

    const total_food = Array.from(counts, ([food_type, total_food]) => ({
      food_type,
      total_food,
    }));

    const FoodsType = foods_type.map((item) => {
      const matched = total_food.find(
        (item_t) => item.food_name === item_t.food_type
      );
      return { ...item, total_food: matched ? matched.total_food : 0 };
    });

    const food_results_count = total_food.reduce(function (x, y) {
      return x + y.total_food;
    }, 0);

    return (
      <Fragment>
        <div className="h-screen mx-auto w-full">
          <div className="bg-[#502314] w-full h-[192px] max-sm:h-[130px]">
            <div className=" container mx-auto px-3">
              <div className="relative flex justify-center w-full pt-[48px] ">
                <div className="bg-white relative shadow-[#00000038_0px_1px_2.22px]  pb-[32px] w-full rounded-[8px] container mx-auto p-[32px_54px_32px_54px] max-sm:p-[10px_16px_10px_16px] Flame_Regular h-auto">
                  <span className="text-[16px] max-sm:text-[15px] FlameSans_Regular pl-3 max-sm:pl-2">
                    I'm Craving
                  </span>
                  <div
                    className={`bg-white pt-3 relative w-full ${
                      st.selectOption.toggle &&
                      "border-x-[1px] border-t-[1px] rounded-t-[8px]"
                    } `}
                  >
                    <div className="flex justify-center mx-3 max-sm:px-2">
                      <button
                        type="button"
                        onClick={() =>
                          this.setState({
                            selectOption: {
                              ...selectOption,
                              toggle: !st.selectOption.toggle,
                            },
                          })
                        }
                        className="w-full flex items-center leading-[20px]"
                      >
                        <div className="grow text-start line-clamp-1 text-xl max-sm:text-base ">
                          {st.selectOption.text}
                        </div>
                        <div className="px-3 py-1 ">
                          <IoChevronDownSharp
                            fontSize={22}
                            className={`transform duration-500 ease-in-out ${
                              st.selectOption.toggle
                                ? "-rotate-180"
                                : "-rotate-0"
                            }`}
                          />
                        </div>
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          this.setState({
                            selectOption: {
                              text: "Select a filter...",
                              toggle: false,
                            },
                          })
                        }
                        className="px-3 border-l-[1px] border-[#0000001a]"
                      >
                        <IoClose className="text-[20px]" />
                      </button>
                    </div>
                    <div className="mx-3 max-sm:mx-2 border-b-[#502314] border-b-[3px] max-sm:border-b-[2px] mt-3 mb-1" />
                    {st.selectOption.toggle && (
                      <div className="mb-1 -mt-[5px] w-full absolute z-50 bg-white border-x-[1px] border-b-[1px] rounded-b-[8px]">
                        {st.foodOption.map((item, i) => (
                          <div
                            key={i}
                            onClick={() =>
                              this.setState({
                                selectOption: { ...item, toggle: false },
                              })
                            }
                            className={`cursor-pointer text-xl max-sm:text-base mx-3 max-sm:px-2 py-1 ${
                              st.selectOption.text === item.text
                                ? "bg-[#d62300] text-[#f5ebdc] "
                                : "hover:bg-[#0000000a]"
                            }`}
                          >
                            {item.text}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col w-full space-y-1 pl-3 max-sm:pl-2">
                    <div className="flex flex-wrap items-center w-full">
                      {st.foodMoreOption.map((item, i) => {
                        return (
                          item.type in selectMoreOption && (
                            <div
                              className="bg-[#502314] rounded-[4px] py-[4px] m-[2px] px-[8px] cursor-pointer"
                              onClick={() =>
                                this.toggleSelectMoreOption("more option")
                              }
                              key={i}
                            >
                              <div className="Flame_Bold text-[#f8f1e7] text-[12px] uppercase">
                                {item.text}
                              </div>
                            </div>
                          )
                        );
                      })}
                    </div>
                    <div className="max-sm:text-[14px] text-end">
                      <button
                        type="button"
                        className="text-[#d62300]"
                        onClick={() =>
                          this.toggleSelectMoreOption("more option")
                        }
                      >
                        More Options
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container mx-auto px-3">
                {FoodsType.map((item, i) => {
                  const check_total_f = item.total_food === 0;
                  return (
                    <Fragment key={i}>
                      <button
                        type="button"
                        disabled={check_total_f}
                        onClick={() => this.toggleDropListFood(item.food_name)}
                        className={`w-full flex items-center py-3 space-x-3 border-b-[1px] border-[#0000001a] ${
                          check_total_f && "text-[#0000008c]"
                        }`}
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
                            alt={item.image}
                            className={
                              check_total_f ? "opacity-50" : "opacity-100"
                            }
                          />
                        </div>
                        <div className="flex flex-col">
                          <div className="Flame_Regular text-[24px] max-sm:text-[18px] flex  space-x-3 max-sm:space-x-2">
                            <span>{item.food_name}</span>
                            <span>({item.total_food})</span>
                          </div>
                          {check_total_f && (
                            <span className="mt-0 text-[13px] max-sm:text-[12px] FlameSans_Regular">
                              No items fit your search criteria
                            </span>
                          )}
                        </div>
                      </button>
                      {st.toggle_drop_list === item.food_name && (
                        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-3">
                          {Foods.map((item, i) => {
                            return (
                              item.food_type === st.toggle_drop_list && (
                                <div
                                  className="cursor-pointer bg-white flex flex-col items-center justify-center p-6 rounded-[8px]"
                                  key={i}
                                  onClick={() =>
                                    this.setState({
                                      modal_nutritional_info: item,
                                    })
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
        {st.selectMoreOption.toggle_modal && (
          <div className="absolute top-0 bg-[#f8f1e7] h-full w-full z-[1000] py-[24px] px-[16px] animate-fade">
            <button
              type="button"
              onClick={() => this.toggleSelectMoreOption("close")}
              className="ml-1 max-sm:mb-4 transform duration-500 ease-in-out delay-0 otate-360 hover:rotate-90"
            >
              <IoClose className="text-[30px] max-sm:text-[24px]" />
            </button>
            <div className="flex justify-center w-full">
              <div className="flex flex-col justify-center space-y-5 rounded-[8px] p-[16px] w-[40%] max-md:w-[70%] max-sm:w-full">
                <div
                  className="text-[20px] text-[#d62300] Flame_Regular text-end cursor-pointer"
                  onClick={() => this.toggleSelectMoreOption("reset")}
                >
                  RESET
                </div>
                <div className="flex flex-col justify-center space-y-2 px-[16px]">
                  <div className="text-[20px] text-[#502314] Flame_Regular pb-4">
                    I want items with
                  </div>
                  {st.foodMoreOption.map((item, i) => {
                    let selectMoreOption: Record<string, any> = cloneDeep(
                      st.selectMoreOption
                    );
                    let chcek = item.type in selectMoreOption;
                    if (chcek) {
                      delete selectMoreOption[item.type];
                    } else {
                      selectMoreOption[item.type] = item.value;
                    }

                    return (
                      <div
                        className="flex items-center w-[80%] cursor-pointer"
                        onClick={() => this.setState({ selectMoreOption })}
                        key={i}
                      >
                        <div className="hover:bg-[#0000000d] -m-4 p-4 rounded-full transition duration-500 ease-in-out">
                          <div
                            className={`w-[20px] h-[20px] border-[1px] border-[#502314] rounded-[4px] ${
                              chcek && "bg-[#502314]"
                            }`}
                          >
                            {chcek && (
                              <IoCheckmarkSharp className="text-[18px] text-white" />
                            )}
                          </div>
                        </div>
                        <span className="FlameSans_Regular pl-4">
                          {item.text}
                        </span>
                      </div>
                    );
                  })}
                  <div className="flex flex-col items-center justify-center space-y-10 pt-16">
                    <div className="text-[16px] Flame_Regular">
                      {food_results_count} results left
                    </div>
                    <button
                      type="button"
                      onClick={() => this.toggleSelectMoreOption("apply")}
                      className="bg-[#d62300] hover:bg-[#a71b00] py-[8px] px-[16px] Flame_Regular text-[16px] text-white rounded-full"
                    >
                      Apply
                    </button>
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
