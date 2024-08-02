<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Storage;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    public function storeImage($file, $name)
    {
        if (strlen($name) !== 0) {
            $image_name = str_replace(' ', '_', strtolower($name));
            $disk = Storage::disk('local')->putFileAs(
                'ImageProducts/',
                $file,
                $image_name . '.jpg',
            );
            if ($disk) {
                return $image_name;
            } else {
                return response()->json([
                    'code' => 0,
                    'message' => 'failed in store'
                ]);
            }
        }
    }
}
