<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Response;

class ImageController extends Controller
{
    public function requestImage($image)
    {
        $content = Storage::get('ImageProducts/' . $image . '.jpg');
        $mime = Storage::mimeType('ImageProducts/' . $image . '.jpg');
        $response = Response::make($content, 200);
        $response->header("Content-Type", $mime);
        return $response;
    }

}
