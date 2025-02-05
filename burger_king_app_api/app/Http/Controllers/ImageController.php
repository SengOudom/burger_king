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
        $path = 'ImageProducts/' . $image . '.jpg';
        $content = Storage::get($path);
        $mime = Storage::mimeType($path);
        return Response::make($content, 200)->header("Content-Type", $mime);
    }

}
