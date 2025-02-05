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
        if (empty($name) || !$file) {
            return [
                'code' => 0,
                'message' => 'Invalid file or name'
            ];
        }

        $image_name = str_replace(' ', '_', strtolower($name));
        $path = 'ImageProducts/';
        $image_type = 'jpg';

        $stored = Storage::disk('local')->putFileAs($path, $file, $image_name . '.' . $image_type);

        if ($stored) {
            return [
                'code' => 1,
                'message' => 'Image stored successfully',
                'image_name' => $image_name,
            ];
        }

        return [
            'code' => 0,
            'message' => 'Failed to store image'
        ];
    }

    public function deleteImage($name)
    {
        if (empty($name)) {
            return [
                'code' => 0,
                'message' => 'Invalid image name'
            ];
        }

        $image_name = str_replace(' ', '_', strtolower($name)) . '.jpg';
        $path = 'ImageProducts/' . $image_name;

        if (Storage::disk('local')->exists($path)) {
            Storage::disk('local')->delete($path);
            return [
                'code' => 1,
                'message' => 'Image deleted successfully'
            ];
        }

        return [
            'code' => 0,
            'message' => 'Image not found'
        ];
    }
}
