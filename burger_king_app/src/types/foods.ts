type foods = {
    id_foods: number;
    food_name: string;
    calories: string;
    fat: string;
    saturated_fat: string;
    trans_fat: string;
    cholesterol: string;
    sodium: string;
    carbohydrates: string;
    fiber: string;
    sugar: string;
    proteins: string;
    image: string;
    status: number;
    delete_at?: string;
    created_at: string;
    update_at?: string;
};

type foods_type = {
    id_food_type: number;
    food_name: string;
    image: string;
    status: number;
    created_at?: string;
    update_at: string;
    delete_at?: string ;
};

export interface FoodsPropsDefault {
    foods?:  foods[];
}

export interface FoodsTypePropsDefault {
    foods_type?:  foods_type[];
}
  