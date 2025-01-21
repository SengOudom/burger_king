<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FoodsController extends Controller
{
    public function inputFoods(Request $request)
    {
        $food_type = $request->food_type;
        $food_name = $request->food_name;
        $more_info = $request->more_info;
        $now_dt = date("Y-m-d H:i:s");
        $file = $request->file('file');

        $type = str_replace(' ', '#', strtolower($food_type));
        $name = str_replace(' ', '#', $food_name);


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
        if (strlen($more_info) == 0) {
            $more_info = null;
        }

        $info = str_replace(' ', '#', $more_info);

        $image = $this->storeImage($file, $food_name);

        if ($image) {
            $values = ['food_name' => $name, 'food_type' => $type, 'image' => $image, 'more_info' => $info, 'status' => 1, 'created_at' => $now_dt];
            $res = DB::table('product_food')->insert($values);
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


    public function inputFoodsType(Request $request)
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

        $more_info = $request->more_info;
        $now_dt = date("Y-m-d H:i:s");

        $name = str_replace(' ', '#', $f_name);
        $type = str_replace(' ', '#', strtolower($f_type));
        $calories = str_replace(' ', '#', $f_calories);
        $fat = str_replace(' ', '#', $f_fat);
        $saturated_fat = str_replace(' ', '#', $f_saturated_fat);
        $trams_fat = str_replace(' ', '#', $f_trams_fat);
        $cholesterol = str_replace(' ', '#', $f_cholesterol);
        $sodium = str_replace(' ', '#', $f_sodium);
        $carbohydrates = str_replace(' ', '#', $f_carbohydrates);
        $fiber = str_replace(' ', '#', $f_fiber);
        $sugar = str_replace(' ', '#', $f_sugar);
        $proteins = str_replace(' ', '#', $f_proteins);

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
        if (strlen($calories) == 0) {
            return response()->json([
                'code' => 0,
                'message' => 'calories empty',
            ]);
        }
        if (strlen($fat) == 0) {
            return response()->json([
                'code' => 0,
                'message' => 'fat empty',
            ]);
        }
        if (strlen($saturated_fat) == 0) {
            return response()->json([
                'code' => 0,
                'message' => 'saturated fat empty',
            ]);
        }
        if (strlen($trams_fat) == 0) {
            return response()->json([
                'code' => 0,
                'message' => 'trams fat empty',
            ]);
        }
        if (strlen($cholesterol) == 0) {
            return response()->json([
                'code' => 0,
                'message' => 'cholesterol empty',
            ]);
        }
        if (strlen($sodium) == 0) {
            return response()->json([
                'code' => 0,
                'message' => 'sodium empty',
            ]);
        }
        if (strlen($carbohydrates) == 0) {
            return response()->json([
                'code' => 0,
                'message' => 'carbohydrates empty',
            ]);
        }
        if (strlen($fiber) == 0) {
            return response()->json([
                'code' => 0,
                'message' => 'fiber empty',
            ]);
        }
        if (strlen($sugar) == 0) {
            return response()->json([
                'code' => 0,
                'message' => 'sugar empty',
            ]);
        }
        if (strlen($proteins) == 0) {
            return response()->json([
                'code' => 0,
                'message' => 'proteins empty',
            ]);
        }
        if (strlen($more_info) == 0) {
            $more_info = NULL;
        }

        $image = $this->storeImage($file, $f_name);

        if ($image) {
            $val = [
                'food_name' => $name,
                'food_type' => $type,
                'calories' => $calories,
                'fat' => $fat,
                'saturated_fat' => $saturated_fat,
                'trams_fat' => $trams_fat,
                'cholesterol' => $cholesterol,
                'sodium' => $sodium,
                'carbohydrates' => $carbohydrates,
                'fiber' => $fiber,
                'sugar' => $sugar,
                'proteins' => $proteins,
                'image' => $image,
                'more_info' => $more_info,
                'created_at' => $now_dt,
                'status' => 1
            ];

            $res = DB::table('product_type')->insert($val);
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
        $food_type = DB::table('food_type')->where('status', 1)->get();
        
        if ($foods && $food_type) {

        
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
