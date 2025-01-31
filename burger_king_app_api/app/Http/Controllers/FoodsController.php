<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FoodsController extends Controller
{
    public function inputFoodsType(Request $request)
    {
        $food_name = $request->food_name;
        $file = $request->file('file');
        $now_dt = date("Y-m-d H:i:s");

        $name = str_replace(' ', '_', $food_name);

        if (strlen($name) == 0) {
            return response()->json([
                'code' => 0,
                'message' => 'food name empty',
            ]);
        }
        
        $image_name = $name . "_ty";
        $image = $this->storeImage($file, $image_name);

        if ($image) {
            $data_insert = ['food_name' => $name, 'image' => $image, 'status' => 1, 'created_at' => $now_dt];
            $res = DB::table('food_type')->insert($data_insert);
            if ($res) {
                return response()->json([
                    'code' => 1,
                    'message' => 'success',
                ]);
            } else {
                return response()->json([
                    'code' => 0,
                    'message' => 'failed',
                ]);
            }
        } else {
            return response()->json([
                'code' => 0,
                'message' => 'failed store  image',
            ]);
        }
    }


    public function inputFoods(Request $request)
    {
        $f_name = $request->food_name;
        $f_type = $request->food_type;
        $f_calories = $request->calories;
        $f_fat = $request->fat;
        $f_saturated_fat = $request->saturated_fat;
        $f_trams_fat = $request->trams_fat;
        $f_cholesterol = $request->cholesterol;
        $f_sodium = $request->sodium;
        $f_carbohydrates = $request->carbohydrates;
        $f_fiber = $request->fiber;
        $f_sugar = $request->sugar;
        $f_proteins = $request->proteins;
        $file = $request->file('file');

        $now_dt = date("Y-m-d H:i:s");

        $name = str_replace(' ', '_', $f_name);
        $type = str_replace(' ', '_', $f_type);

        if (strlen($type) == 0) {
            return response()->json([
                'code' => 0,
                'message' => 'food type empty',
            ]);
        }
        if (strlen($name) == 0) {
            return response()->json([
                'code' => 0,
                'message' => 'food name empty',
            ]);
        }
        if (strlen($f_calories) == 0) {
            return response()->json([
                'code' => 0,
                'message' => 'calories empty',
            ]);
        }
        if (strlen($f_fat) == 0) {
            return response()->json([
                'code' => 0,
                'message' => 'fat empty',
            ]);
        }
        if (strlen($f_saturated_fat) == 0) {
            return response()->json([
                'code' => 0,
                'message' => 'saturated fat empty',
            ]);
        }
        if (strlen($f_trams_fat) == 0) {
            return response()->json([
                'code' => 0,
                'message' => 'trams fat empty',
            ]);
        }
        if (strlen($f_cholesterol) == 0) {
            return response()->json([
                'code' => 0,
                'message' => 'cholesterol empty',
            ]);
        }
        if (strlen($f_sodium) == 0) {
            return response()->json([
                'code' => 0,
                'message' => 'sodium empty',
            ]);
        }
        if (strlen($f_carbohydrates) == 0) {
            return response()->json([
                'code' => 0,
                'message' => 'carbohydrates empty',
            ]);
        }
        if (strlen($f_fiber) == 0) {
            return response()->json([
                'code' => 0,
                'message' => 'fiber empty',
            ]);
        }
        if (strlen($f_sugar) == 0) {
            return response()->json([
                'code' => 0,
                'message' => 'sugar empty',
            ]);
        }
        if (strlen($f_proteins) == 0) {
            return response()->json([
                'code' => 0,
                'message' => 'proteins empty',
            ]);
        }

        $image = $this->storeImage($file, $f_name);

        if ($image) {
            $val = [
                'food_name' => $name,
                'food_type' => $type,
                'calories' => $f_calories,
                'fat' => $f_fat,
                'saturated_fat' => $f_saturated_fat,
                'trams_fat' => $f_trams_fat,
                'cholesterol' => $f_cholesterol,
                'sodium' => $f_sodium,
                'carbohydrates' => $f_carbohydrates,
                'fiber' => $f_fiber,
                'sugar' => $f_sugar,
                'proteins' => $f_proteins,
                'image' => $image,
                'created_at' => $now_dt,
                'status' => 1
            ];

            $res = DB::table('food_bk')->insert($val);
            if ($res) {
                return response()->json([
                    'code' => 1,
                    'message' => 'success'
                ]);
            } else {
                return response()->json([
                    'code' => 0,
                    'message' => 'failed'
                ]);
            }
        } else {
            return response()->json([
                'code' => 0,
                'message' => 'failed store  image',
            ]);
        }
    }



    public function requestFoods()
    {
        $foods = DB::table('food_bk')->where('status', 1)->get();
        $food_type = DB::select("SELECT  a.id_food_type,  a.food_name, a.image,  a.status,  a.created_at,  a.update_at,  a.delete_at,  IFNULL(COUNT(b.food_type), 0) AS total_food  FROM food_type AS a  LEFT JOIN food_bk AS b  ON a.food_name = b.food_type  GROUP BY a.food_name, a.id_food_type, a.status, a.created_at, a.update_at, a.delete_at");
        
        if ($foods && $food_type) {

            foreach ($foods as $key => $item) {
                $foods[$key]->food_name = str_replace('_', ' ', $item->food_name);
                $foods[$key]->food_type = str_replace('_', ' ', $item->food_type);
            }

            foreach ($food_type as $key => $item) {
                $food_type[$key]->food_name = str_replace('_', ' ', $item->food_name);
            }

            $data = [
                'foods' => $foods,
                'food_type' => $food_type,
            ];
            return response()->json([
                'code' => 1,
                'data' => $data,
            ]);
        } else {
            return response()->json([
                'code' => 0,
                'message' => 'failed'
            ]);
        }
    }
}
