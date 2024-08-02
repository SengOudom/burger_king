<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductsFoodController;
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


Route::post('/products', [ProductsFoodController::class, 'requestProducts']);
Route::post('/products_food', [ProductsFoodController::class, 'inputProductsFood']);
Route::post('/products_type', [ProductsFoodController::class, 'inputProductsType']);
Route::get('/image/{image}', [ImageController::class, 'requestImage']);
