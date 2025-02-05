<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use function PHPUnit\Framework\isNull;

class FoodsController extends Controller
{
    public function inputFoodsType(Request $request)
    {
        $food_name = trim($request->food_name);
        $file = $request->file('file');
        $now_dt = now();

        if (empty($food_name)) {
            return response()->json([
                'code' => 0,
                'message' => 'Food name is required.'
            ]);
        }

        $name = str_replace([' ', '®'], ['_', '-registered'], $food_name);
        $image_name = $name . "_ty";
        $image_response = $this->storeImage($file, $image_name);

        if ($image_response['code'] === 1) {
            $data_insert = [
                'food_name' => $name,
                'image' => $image_response['image_name'],
                'status' => 1,
                'created_at' => $now_dt
            ];
            $res  = DB::table('food_type')->insert($data_insert);
            if ($res) {
                return response()->json([
                    'code' => 1,
                    'message' => 'Food type added successfully.'
                ]);
            }

            $this->deleteImage($image_name);

            return response()->json([
                'code' => 0,
                'message' => 'Failed to add food type.'
            ]);
        }
        return response()->json($image_response);
    }

    public function inputFoods(Request $request)
    {
        $required_fields = [
            'food_type',
            'food_name',
            'calories',
            'fat',
            'saturated_fat',
            'trams_fat',
            'cholesterol',
            'sodium',
            'carbohydrates',
            'fiber',
            'sugar',
            'proteins',
        ];
        // return response()->json($request);
        foreach ($required_fields as $field) {
            if (!isset($request->$field)) {
                return response()->json([
                    'code' => 0,
                    'message' => ucfirst(str_replace('_', ' ', $field)) . ' is required.'
                ]);
            }
        }

        $name = str_replace([' ', '®'], ['_', '-registered'], $request->food_name);
        $type = str_replace([' ', '®'], ['_', '-registered'], $request->food_type);
        $now_dt = now();

        $image_response = $this->storeImage($request->file('file'), $name);

        if ($image_response['code'] === 1) {
            $data_insert = array_merge($request->only($required_fields), [
                'food_name' => $name,
                'food_type' => $type,
                'image' => $image_response['image_name'],
                'created_at' => $now_dt,
                'status' => 1
            ]);
            $res = DB::table('food_bk')->insert($data_insert);

            if ($res) {
                return response()->json([
                    'code' => 1,
                    'message' => 'Food added successfully.'
                ]);
            }

            $this->deleteImage($name);
            
            return response()->json([
                'code' => 0,
                'message' => 'Failed to add food.'
            ]);

        }
        return response()->json($image_response);
    }

    public function requestFoods()
    {
        $foods = DB::table('food_bk')->where('status', 1)->orderBy('created_at', 'desc')->get();
        $food_type = DB::select("SELECT a.id_food_type, a.food_name, a.image, a.status, a.created_at, a.update_at, a.delete_at, IFNULL(COUNT(b.food_type), 0) AS total_food FROM food_type AS a LEFT JOIN food_bk AS b ON a.food_name = b.food_type GROUP BY a.food_name, a.id_food_type, a.status, a.created_at, a.update_at, a.delete_at");

        foreach ($foods as $food) {
            $food->food_name = str_replace(['_', '-registered'], [' ', '®'], $food->food_name);
            $food->food_type = str_replace(['_', '-registered'], [' ', '®'], $food->food_type);
        }

        foreach ($food_type as $type) {
            $type->food_name = str_replace('_', ' ', $type->food_name);
        }

        $data = [
            'foods' => $foods,
            'food_type' => $food_type,
        ];

        return response()->json([
            'code' => 1,
            'data' => $data,
        ]);
    }
}
