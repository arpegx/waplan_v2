<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePlantRequest;
use App\Http\Requests\UpdatePlantRequest;
use App\Models\Plant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PlantController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Plant/Index/Index', ['plants' => Plant::all()->sortBy('watered_at')->values()]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Plant/Create/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePlantRequest $request)
    {
        $plant = new Plant([
            'nick_name' => request('nick_name'),
            'watered_at' => request('watered_at'),
        ]);

        if ($request->hasFile("picture")) {
            $plant->addPicture($request);
        }

        $plant->save();

        return to_route('plant.show', compact('plant'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Plant $plant)
    {
        return Inertia::render('Plant/Show/Show', compact('plant'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Plant $plant)
    {
        return Inertia::render('Plant/Edit/Edit', compact('plant'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePlantRequest $request, Plant $plant)
    {
        $plant
            ->fill($request->except('picture'));

        Storage::delete("public/images/plant/" . strrchr($plant->picture, '/'));
        if ($request->hasFile("picture")) {
            $plant->addPicture($request);
        }

        $plant->save();

        return to_route('plant.show', compact('plant'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Plant $plant)
    {
        $plant->delete();

        return to_route('plant.index');
    }

    public function water(Request $request)
    {
        foreach ($request->plants as $plant_id) {
            Plant::find($plant_id)->water();
        }

        return to_route('plant.index');
    }
}
