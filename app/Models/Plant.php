<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Storage;

class Plant extends Model
{
    use HasFactory;

    protected $fillable = [
        'nick_name',
        'botanical',
        'picture',
        'watered_at',
    ];

    /**
     * Add Picture for an existing Plant
     * @param \Illuminate\Foundation\Http\FormRequest $request
     * @return void
     */
    public function addPicture(FormRequest $request)
    {
        // store file
        $filename = time() . "_" . request("nick_name") . "." . $request->file("picture")->extension();
        $request->file("picture")->storeAs('public/images/plant', $filename);

        $this->fill([
            'picture' => "./storage/images/plant/" . $filename,
        ]);
    }

    public function water()
    {
        $this->update([
            'watered_at' => now(),
        ]);
    }

    /**
     * Delete a Plant
     * @override
     * @return void
     */
    #[\Override]
    public function delete()
    {
        Storage::delete("public/images/plant/" . strrchr($this->picture, '/'));
        parent::delete();
    }
}
