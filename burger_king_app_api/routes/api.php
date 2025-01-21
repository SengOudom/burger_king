<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FoodsController;
use App\Http\Controllers\ImageController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::get('foods', [FoodsController::class, 'requestFoods']);
Route::post('/input_foods', [FoodsController::class, 'inputFoods']);
Route::post('/input_foods_type', [FoodsController::class, 'inputFoodsType']);
Route::get('/image/{image}', [ImageController::class, 'requestImage']);
