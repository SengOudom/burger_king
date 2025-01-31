export interface FoodsPropsDefault {
  id_foods: number;
  food_name: string;
  food_type:string;
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
}

export interface FoodsTypePropsDefault {
  id_food_type: number;
  food_name: string;
  image: string;
  status: number;
  total_food:number;
  created_at?: string;
  update_at: string;
  delete_at?: string;
}
